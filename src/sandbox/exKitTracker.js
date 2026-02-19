import {sizzleQuerySelector, sizzleQuerySelectorAll} from "../tools/sizzleQuery";
import convertCodeV1toV2 from "../tools/convertCodeV1toV2";
import convertCodeV2toV3 from "../tools/convertCodeV2toV3";
import encodeCp1251 from "../tools/encodeCp1251";
import {isNumber, isString} from "../tools/assertType";
import exKitPipelineMethods from "../tools/exKitPipelineMethods";

const strFields = ['categoryTitle', 'title'];
const intFields = ['categoryId', 'size', 'seeds', 'peers', 'date'];
const urlFields = ['categoryUrl', 'url', 'downloadUrl', 'nextPageUrl'];
const selectors = ['categoryTitle', 'categoryUrl', 'categoryId', 'title', 'url', 'size', 'downloadUrl', 'seeds', 'peers', 'date'];

class ExKitTracker {
  constructor() {
    this.code = null;
  }

  init(code) {
    return this.prepareCode(code).then(code => {
      this.code = code;
    });
  }

  search(session, query) {
    const searchStore = this.code.search;

    let encodedQuery = null;
    if (searchStore.encoding === 'cp1251') {
      encodedQuery = encodeCp1251(query);
    } else {
      encodedQuery = encodeURIComponent(query);
    }

    const options = {
      method: searchStore.method,
      url: searchStore.url.replace('%search%', encodedQuery),
      originUrl: searchStore.originUrl,
      query: (searchStore.query || '').replace('%search%', encodedQuery),
      body: (searchStore.body || '').replace('%search%', encodedQuery),
      charset: searchStore.charset,
    };

    this.setHeaders(options);

    return this.request(session, options);
  }

  searchNext(session, url) {
    const searchStore = this.code.search;

    const options = {
      method: 'GET',
      url: url,
      originUrl: searchStore.originUrl,
      charset: searchStore.charset,
    };

    this.setHeaders(options);

    return this.request(session, options);
  }

  parseResponse(session, response) {
    this.dumpDebugHtml(session, response);
    const doc = session.doc = API_getDoc(response.body, response.url);

    if (this.code.hooks.onGetDoc) {
      this.code.hooks.onGetDoc(session, doc);
    }

    if (this.code.auth && this.code.auth.loginForm && sizzleQuerySelector(doc, this.code.auth.loginForm.selector)) {
      throw new AuthError(this.code.auth.url);
    }

    const rows = sizzleQuerySelectorAll(doc, this.code.selectors.row.selector);
    if (this.code.selectors.skipFromStart) {
      rows.splice(0, this.code.selectors.skipFromStart);
    }
    if (this.code.selectors.skipFromEnd) {
      rows.splice(this.code.selectors.skipFromEnd * -1);
    }

    const results = [];
    for (let i = 0, row; row = rows[i]; i++) {
      try {
        const result = this.parseRow(session, row);
        results.push(result);
      } catch (err) {
        console.error('parseRow error', err);
      }
    }

    let nextPageUrl = null;
    if (this.code.selectors.nextPageUrl) {
      try {
        nextPageUrl = this.matchSelector(session, doc, 'nextPageUrl', this.code.selectors.nextPageUrl);
      } catch (err) {
        console.error('nextPageUrl matchSelector error', err);
      }
    }

    return {
      results,
      nextPageUrl
    };
  }

  dumpDebugHtml(session, response) {
    try {
      const info = (typeof API_getInfo === 'function') ? API_getInfo() : null;
      const debugDumpsEnabled = !!(info && info.profileOptions && info.profileOptions.debugDumps);
      if (!debugDumpsEnabled) {
        return;
      }

      if (!response || typeof response.body !== 'string') {
        return;
      }

      const url = response.url || '';
      const shouldDump = /rutor\.info|nnmclub\.to/i.test(url);
      if (!shouldDump) {
        return;
      }

      const previewLength = 2000;
      const preview = response.body.slice(0, previewLength);

      // Store full HTML (bounded) + focused snippets.
      // Many parsing bugs require inspecting the table area, which often isn't in the first 2000 chars.
      // NOTE: keep numeric literal compatible with older Babel config (no numeric separators)
      const maxHtmlLength = 800000;
      const html = response.body.length > maxHtmlLength
        ? response.body.slice(0, maxHtmlLength) + `\n<!-- tsearch-debug: truncated to ${maxHtmlLength} chars (original ${response.body.length}) -->\n`
        : response.body;

      let focusHtml = null;
      let focusSelector = null;
      try {
        const tmpDoc = API_getDoc(response.body, url);
        if (/rutor\.info/i.test(url)) {
          focusSelector = '#index';
          const el = tmpDoc.querySelector(focusSelector) || tmpDoc.querySelector('#all') || tmpDoc.body;
          focusHtml = el ? el.outerHTML : null;
        } else if (/nnmclub\.to/i.test(url)) {
          focusSelector = 'table.forumline.tablesorter';
          const el = tmpDoc.querySelector(focusSelector) || tmpDoc.querySelector('table.forumline') || tmpDoc.body;
          focusHtml = el ? el.outerHTML : null;
        }
      } catch (err) {
        // ignore focus errors
      }

      let selectorStats = null;
      try {
        const tmpDoc = API_getDoc(response.body, url);
        const selectorsMap = this.code && this.code.selectors ? this.code.selectors : null;

        const safeCount = (selector) => {
          if (!selector) return null;
          try {
            return sizzleQuerySelectorAll(tmpDoc, selector).length;
          } catch (err) {
            // invalid selector for Sizzle or DOM
            return null;
          }
        };

        selectorStats = {
          row: selectorsMap && selectorsMap.row ? safeCount(selectorsMap.row.selector) : null,
          title: selectorsMap && selectorsMap.title ? safeCount(selectorsMap.title.selector) : null,
          url: selectorsMap && selectorsMap.url ? safeCount(selectorsMap.url.selector) : null,
          downloadUrl: selectorsMap && selectorsMap.downloadUrl ? safeCount(selectorsMap.downloadUrl.selector) : null,
          nextPageUrl: selectorsMap && selectorsMap.nextPageUrl ? safeCount(selectorsMap.nextPageUrl.selector) : null,
        };
      } catch (err) {
        // ignore stats errors
      }

      if (typeof API_debugDump === 'function') {
        API_debugDump({
          kind: 'trackerHtml',
          url,
          length: response.body.length,
          preview,
          html,
          focusSelector,
          focusHtml,
          selectorStats,
        });
      }

      if (typeof window !== 'undefined') {
        window.__tsearchDebugHtml = window.__tsearchDebugHtml || {};
        window.__tsearchDebugHtml[url] = {
          url,
          length: response.body.length,
          preview,
          timestamp: Date.now(),
        };
      }

      console.warn('[tsearch-debug] HTML dump saved', {
        url,
        length: response.body.length,
        preview,
        focusSelector,
        selectorStats,
      });
    } catch (err) {
      console.warn('[tsearch-debug] dump error', err);
    }
  }

  parseRow(session, row) {
    const result = {};
    const errors = [];
    const cache = {};

    for (let key, i = 0; key = selectors[i]; i++) {
      const selector = this.code.selectors[key];
      if (selector) {
        try {
          result[key] = this.matchSelector(session, row, key, selector, cache);
        } catch (err) {
          // console.log('matchSelector error', err);
          errors.push({
            key: key,
            error: err
          });
        }
      }
    }

    if (!result.title) {
      const err = new Error('Title is not exists');
      err.result = result;
      err.errors = errors;
      throw err;
    }

    if (!result.url) {
      const err = new Error('Url is not exists');
      err.result = result;
      err.errors = errors;
      throw err;
    }

    if (!result.categoryId && result.categoryId !== 0) {
      result.categoryId = -1;
    }

    if (!result.date) {
      result.date = -1;
    }

    if (errors.length) {
      console.warn('parseRow warnings', {row, result, errors});
    }

    return result;
  }

  /**
   * @param session
   * @param container
   * @param {string} key
   * @param {StringSelectorStore|NumberSelectorStore|ElementSelectorStore} selector
   * @param {{}} cache
   */
  matchSelector(session, container, key, selector, cache = {}) {
    const isRequired = key === 'title' || key === 'url';

    let node = cache[selector.selector];
    if (!node) {
      node = cache[selector.selector] = sizzleQuerySelector(container, selector.selector);
    }

    if (!node) {
      return null;
    }

    let result = node;

    try {
      if (selector.pipelineBuild) {
        result = selector.pipelineBuild(result);
      }

      if (this.code.hooks.transform[key]) {
        result = this.code.hooks.transform[key](session, result, container);
      }
    } catch (err) {
      if (isRequired) {
        throw err;
      }
      return null;
    }

    if (result === null || result === undefined) {
      return null;
    }

    if (typeof result === 'string' && result.trim() === '') {
      return null;
    }

    try {
      if (intFields.indexOf(key) !== -1) {
        if (typeof result !== 'number') {
          result = isNumber(parseInt(isString(result), 10));
        } else {
          result = isNumber(result);
        }
      } else
      if (urlFields.indexOf(key) !== -1) {
        result = API_normalizeUrl(session.response.url, isString(result));
      } else
      if (strFields.indexOf(key) !== -1) {
        result = isString(result);
      }
    } catch (err) {
      if (isRequired) {
        throw err;
      }
      return null;
    }

    return result;
  }

  setHeaders(options) {
    let headers = null;
    if (this.code.search.headers) {
      headers = JSON.parse(this.code.search.headers);
    }
    options.headers = headers;
  }

  request(session, options) {
    if (this.code.hooks.onBeforeRequest) {
      this.code.hooks.onBeforeRequest(session, options);
    }

    return API_request(options).then(response => {
      session.response = response;

      if (this.code.hooks.onAfterRequest) {
        this.code.hooks.onAfterRequest(session, response);
      }

      return response;
    });
  }

  prepareCode(code) {
    return Promise.resolve().then(() => {
      if (code.version === 1) {
        code = convertCodeV1toV2(code);
      }

      if (code.version === 2) {
        code = convertCodeV2toV3(code);
      }

      if (!code.hooks) {
        code.hooks = {};
      }

      if (!code.hooks.transform) {
        code.hooks.transform = {};
      }

      const promiseList = Object.keys(code.selectors).map(key => {
        const value = code.selectors[key];
        if (value && value.pipeline) {
          return this.buildPipeline(value.pipeline).then(pipelineBuild => {
            value.pipelineBuild = pipelineBuild;
          });
        }
      });

      return Promise.all(promiseList).then(() => code);
    });
  }

  buildPipeline(pipeline) {
    return Promise.resolve().then(() => {
      if (!Array.isArray(pipeline) || !pipeline.length) {
        return null;
      }

      const promiseList = pipeline.map(method => {
        const pipelineMethod = exKitPipelineMethods[method.name];
        const args = method.args || [];
        return pipelineMethod.getMethod(...args);
      });

      return Promise.all(promiseList).then(line => {
        return value => {
          for (let i = 0, method; method = line[i]; i++) {
            value = method(value);
          }
          return value;
        };
      });
    });
  }
}

class AuthError extends Error {
  constructor(url) {
    super('Auth required');
    this.code = 'AUTH_REQUIRED';
    this.url = url;
  }
}

export default ExKitTracker;