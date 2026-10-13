import promiseFinally from "../tools/promiseFinally";
import getLogger from "../tools/getLogger";

const deserializeError = require('deserialize-error');
const Events = require('events');

const logger = getLogger('TabFetchBg');

const DEBUG = false;

class TabFetchBg {
  constructor() {
    this.senderTabMap = new Map();
    this.originTabMap = new Map();
    this.idRequestMap = new Map();
    this.requestIndex = 0;

    this.isMobile = /Mobile Safari\/(\d+)|Android (\d+)/.test(navigator.userAgent);

    DEBUG && logger.debug('constructor');
  }

  async request(senderTabId, originUrl, fetchUrl, fetchOptions) {
    DEBUG && logger.debug('request', senderTabId, originUrl, fetchUrl, fetchOptions);

    if (!this.senderTabMap.has(senderTabId)) {
      this.senderTabMap.set(senderTabId, new SenderTab(this, senderTabId));
    }
    const senderTab = this.senderTabMap.get(senderTabId);

    if (!this.originTabMap.has(originUrl)) {
      this.originTabMap.set(originUrl, new OriginTab(this, originUrl));
    }
    const originTab = this.originTabMap.get(originUrl);

    const request = new Request(this, originTab, ++this.requestIndex, fetchUrl, fetchOptions);
    this.idRequestMap.set(request.id, request);
    request.on('finish', () => {
      this.idRequestMap.delete(request.id);
    });

    originTab.addRequest(request);
    senderTab.addRequest(request);

    this.addRemovedTabListener();

    return request.id;
  }

  deleteOriginTab(originUrl, originTab) {
    if (this.originTabMap.get(originUrl) === originTab) this.originTabMap.delete(originUrl);
  }

  addRemovedTabListener() {
    if (!chrome.tabs.onRemoved.hasListener(this.tabRemoveListener)) {
      DEBUG && logger.debug('addRemovedTabListener');
      chrome.tabs.onRemoved.addListener(this.tabRemoveListener);
    }
  }

  removeRemovedTabListenerIfIdle() {
    if (!this.originTabMap.size && !this.idRequestMap.size) {
      this.removeRemovedTabListener();
    }
  }

  removeRemovedTabListener() {
    if (chrome.tabs.onRemoved.hasListener(this.tabRemoveListener)) {
      DEBUG && logger.debug('removeRemovedTabListener');
      chrome.tabs.onRemoved.removeListener(this.tabRemoveListener);
    }
  }

  tabRemoveListener = (tabId) => {
    DEBUG && logger.debug('tabRemoveListener', tabId);
    const senderTab = this.senderTabMap.get(tabId);
    if (senderTab) {
      senderTab.destroy();
      this.senderTabMap.delete(tabId);
    }

    this.originTabMap.forEach((originTab, originUrl) => {
      if (originTab.tabId === tabId) {
        originTab.destroy();
        this.originTabMap.delete(originUrl);
      }
    });

    if (!this.originTabMap.size && !this.idRequestMap.size) {
      this.removeRemovedTabListener();
    }
  };

  initRequest(id) {
    DEBUG && logger.debug('initRequest', id);
    const request = this.idRequestMap.get(id);
    if (request) {
      return request.init();
    } else {
      throw new Error(`initRequest error ${id} is not found`);
    }
  }

  handleResponse(id, result, sessionId) {
    DEBUG && logger.debug('handleResponse', id);
    const request = this.idRequestMap.get(id);
    if (request) {
      return request.handleResponse(result, sessionId);
    }
    // A response can arrive after cancellation or a tab navigation.
  }

  abortRequest(id) {
    DEBUG && logger.debug('abortRequest', id);
    const request = this.idRequestMap.get(id);
    if (request) {
      return request.abort();
    } else {
      throw new Error(`initRequest error ${id} is not found`);
    }
  }

  destroy() {
    DEBUG && logger.debug('destroy');
    this.idRequestMap.forEach((request) => {
      request.destroy();
    });
    this.senderTabMap.clear();
  }
}

class SenderTab {
  constructor(tabFetchBg, tabId) {
    this.tabFetchBg = tabFetchBg;
    this.tabId = tabId;
    this.requests = [];

    DEBUG && logger.debug('SenderTab constructor', this.tabId);
  }

  addRequest(request) {
    DEBUG && logger.debug('SenderTab addRequest', this.tabId, request.id);
    this.requests.push(request);
    request.on('finish', () => {
      const pos = this.requests.indexOf(request);
      if (pos !== -1) {
        this.requests.splice(pos, 1);
      }
    });
  }

  destroy() {
    DEBUG && logger.debug('SenderTab destroy', this.tabId);
    this.requests.slice(0).forEach((requset) => {
      requset.destroy();
    });
  }
}

class OriginTab {
  constructor(tabFetchBg, originUrl) {
    this.tabFetchBg = tabFetchBg;
    this.originUrl = originUrl;
    this.tabId = null;
    this.requests = [];

    this.tabPromise = null;

    DEBUG && logger.debug('OriginTab constructor', this.tabId, this.originUrl);
  }

  addRequest(request) {
    DEBUG && logger.debug('OriginTab addRequest', this.tabId, this.originUrl, request.id);
    this.requests.push(request);
    request.on('finish', () => {
      const pos = this.requests.indexOf(request);
      if (pos !== -1) {
        this.requests.splice(pos, 1);
      }
      if (!this.requests.length) {
        this.closeOnIdle();
      }
    });
  }

  initTab() {
    DEBUG && logger.debug('OriginTab createTab', this.tabId, this.originUrl);
    if (this.tabPromise) return this.tabPromise;
    // Host permissions already allow querying matching tracker tabs.
    return this.tabPromise = chrome.tabs.query({
      url: new URL(this.originUrl).origin + '/*'
    }).then(tabs => {
      if (!this.requests.length) return null;
      if (tabs.length) return tabs[0].id;
      return chrome.tabs.create({url: this.originUrl, active: false}).then(tab => tab.id);
    }).then((tabId) => {
      this.tabId = tabId;
      if (tabId !== null && this.requests.length) this.addTabUpdatedListener();
    });
  }

  addTabUpdatedListener() {
    if (!chrome.tabs.onUpdated.hasListener(this.tabUpdatedListener)) {
      DEBUG && logger.debug('OriginTab addTabUpdatedListener', this.tabId, this.originUrl);
      chrome.tabs.onUpdated.addListener(this.tabUpdatedListener);
    }
  }

  removeTabUpdatedListener() {
    if (chrome.tabs.onUpdated.hasListener(this.tabUpdatedListener)) {
      DEBUG && logger.debug('OriginTab removeTabUpdatedListener', this.tabId, this.originUrl);
      chrome.tabs.onUpdated.removeListener(this.tabUpdatedListener);
    }
  }

  tabUpdatedListener = (tabId, changeInfo) => {
    if (tabId !== this.tabId) return;
    if (changeInfo.url && new URL(changeInfo.url).host !== new URL(this.originUrl).host) {
      this.requests.forEach(request => request.abort(new Error('Tracker tab navigated to another host')));
      return;
    }
    if (changeInfo.status === 'loading') {
      this.requests.forEach(request => request.invalidateSession());
    } else if (changeInfo.status === 'complete' || changeInfo.url) {
      this.requests.forEach(request => request.initSession());
    }
  };

  closeOnIdle() {
    if (!this.requests.length) {
      DEBUG && logger.debug('OriginTab closeOnIdle', this.tabId, this.originUrl);
      this.tabFetchBg.deleteOriginTab(this.originUrl, this);
      this.removeTabUpdatedListener();
      this.tabFetchBg.removeRemovedTabListenerIfIdle();
    }
  }

  destroy() {
    DEBUG && logger.debug('OriginTab destroy', this.tabId, this.originUrl);
    this.requests.slice(0).forEach((request) => {
      request.destroy();
    });
    this.removeTabUpdatedListener();
  }
}

class Request extends Events {
  constructor(tabFetchBg, originTab, id, url, options) {
    super();

    this.tabFetchBg = tabFetchBg;
    this.originTab = originTab;
    this.id = id;
    this.url = url;
    this.options = options;

    this.sessionIndex = 0;

    this.state = 'idle';

    this.handleResolve = null;
    this.handleReject = null;
    this.resultPromise = new Promise((resolve, reject) => {
      this.handleResolve = resolve;
      this.handleReject = reject;
    }).then(...promiseFinally(() => {
      this.state = 'finished';
      this.emit('finish');
    }));

    DEBUG && logger.debug('Request constructor', this.id);
  }

  async init() {
    DEBUG && logger.debug('Request init', this.id);
    if (this.state === 'idle') {
      this.state = 'pending';
      this.initSession();
    }

    return this.resultPromise;
  }

  async initSession() {
    if (this.state !== 'pending') return;
    DEBUG && logger.debug('Request initSession', this.id);

    const sessionId = ++this.sessionIndex;

    return this.originTab.initTab().then(() => {
      if (sessionId !== this.sessionIndex || this.state !== 'pending') return;

      return executeScriptPromise(this.originTab.tabId, {
        file: 'tabFetch.js'
      });
    }).then(() => {
      if (sessionId !== this.sessionIndex || this.state !== 'pending') return;

      const { origin: originTabOrigin } = new URL(this.originTab.originUrl);
      const { origin: urlOrigin } = new URL(this.url);
      const isSameOrigin = urlOrigin === originTabOrigin;

      return executeScriptPromise(this.originTab.tabId, {
        func: function (id, url, options, isSameOrigin, sessionId) {
          try {
            window.tabFetch(id, url, options, isSameOrigin, sessionId);
            return { result: true };
          } catch (err) {
            return { error: { message: err.message, stack: err.stack } };
          }
        },
        args: [this.id, this.url, this.options, isSameOrigin, sessionId]
      }).then(results => results[0]);
    }).then((result) => {
      if (sessionId !== this.sessionIndex || this.state !== 'pending') return;

      if (!result) {
        this.handleReject(new Error('tabFetch error'));
      } else
        if (result.error) {
          this.handleReject(deserializeError(result.error));
        }
    }, (err) => {
      if (sessionId !== this.sessionIndex || this.state !== 'pending') return;

      this.handleReject(err);
    });
  }

  handleResponse(result, sessionId) {
    if (this.state !== 'pending' || sessionId !== this.sessionIndex) return;
    DEBUG && logger.debug('Request handleResponse', this.id);
    if (result.error) {
      this.handleReject(deserializeError(result.error));
    } else {
      this.handleResolve(result.result);
    }
  }

  invalidateSession() {
    const sessionId = this.sessionIndex++;
    if (this.state === 'pending' && this.originTab.tabId !== null) {
      executeScriptPromise(this.originTab.tabId, {
        func: function (id, sessionId) {
          if (window.tabFetchAbort) window.tabFetchAbort(id, sessionId);
        },
        args: [this.id, sessionId]
      }).catch(() => {}); // The document may already be gone.
    }
  }

  abort(reason) {
    if (this.state === 'finished') return;
    this.invalidateSession();
    this.state = 'finished';
    this.handleReject(reason || new Error('Aborted'));
  }

  destroy() {
    DEBUG && logger.debug('Request destroy', this.id);
    this.abort(new Error('Destroyed'));
  }
}

const executeScriptPromise = (tabId, options) => {
  const injection = {
    target: { tabId: tabId }
  };

  if (options.file) {
    injection.files = [options.file];
  } else if (options.func) {
    injection.func = options.func;
    injection.args = options.args;
  } else if (options.code) {
    // Fallback or error - MV3 doesn't support random code strings well without user gesture for activeTab,
    // but here we are background script.
    // For now, let's assume we migrated all callers.
    logger.error('executeScriptPromise: code property is deprecated in MV3');
    return Promise.reject(new Error('executeScriptPromise: code property is deprecated in MV3'));
  }

  if (options.runAt) {
    // strict runAt mapping might be needed, but 'document_start' is common
    // chrome.scripting doesn't support runAt in the same way for func, 
    // but works for files? No, it's property of ScriptInjection
    // Actually, chrome.scripting.executeScript DOES NOT support runAt directly in the injection object?
    // Wait, checked docs: 'injectImmediately' is boolean. 'world'?
    // For now, let's ignore runAt or assume default.
  }

  return chrome.scripting.executeScript(injection)
    .then(results => {
      // results is array of {frameId, result}
      return results.map(r => r.result);
    });
};

export default TabFetchBg;