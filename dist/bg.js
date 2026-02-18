/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk-" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = self["webpackJsonp"] = self["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ 1);
/* harmony import */ var _stores_OptionsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/OptionsStore */ 4);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/getLogger */ 8);
/* harmony import */ var _stores_TrackerStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/TrackerStore */ 20);
/* harmony import */ var _tools_getTrackerCodeMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/getTrackerCodeMeta */ 45);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-state-tree */ 5);
/* harmony import */ var _tools_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/errors */ 34);
/* harmony import */ var _tools_getNow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/getNow */ 48);
/* harmony import */ var _stores_Explorer_ExplorerModuleStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/Explorer/ExplorerModuleStore */ 49);
/* harmony import */ var _tools_getExploreModuleCodeMeta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools/getExploreModuleCodeMeta */ 55);
/* harmony import */ var _tools_storageGet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tools/storageGet */ 9);
/* harmony import */ var _tools_storageSet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tools/storageSet */ 10);
/* harmony import */ var _tabFetchBg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabFetchBg */ 56);
/* harmony import */ var _tools_migrate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tools/migrate */ 60);
/* harmony import */ var _tools_errorTracker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tools/errorTracker */ 61);
/* harmony import */ var _tools_getUserId__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tools/getUserId */ 64);
/* harmony import */ var _tools_jsonCodeToUserscript__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tools/jsonCodeToUserscript */ 68);
/* harmony import */ var _tools_setCodeMeta__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../tools/setCodeMeta */ 73);



 // import {fetch} from 'whatwg-fetch' // Native fetch is available in SW















_tools_errorTracker__WEBPACK_IMPORTED_MODULE_14__["default"].bindExceptions();

const promiseLimit = __webpack_require__(/*! promise-limit */ 19);

const qs = __webpack_require__(/*! querystring */ 30);

const compareVersions = __webpack_require__(/*! compare-versions */ 47);

const serializeError = __webpack_require__(/*! serialize-error */ 28);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_2__["default"])('background');
const oneLimit = promiseLimit(1);
Object(_tools_migrate__WEBPACK_IMPORTED_MODULE_13__["default"])();
let tabFetchBg = null;
/**@type OptionsStore*/

const optionsStore = _stores_OptionsStore__WEBPACK_IMPORTED_MODULE_1__["default"].create();
optionsStore.fetchOptions().then(() => {
  Object(mobx__WEBPACK_IMPORTED_MODULE_0__["autorun"])(() => {
    updateIcon(optionsStore.options.invertIcon);
  });
  Object(mobx__WEBPACK_IMPORTED_MODULE_0__["autorun"])(() => {
    setContextMenu(optionsStore.options.contextMenu);
  });
  Object(mobx__WEBPACK_IMPORTED_MODULE_0__["autorun"])(() => {
    setPopupMenu(optionsStore.options.disablePopup);
  });
});
chrome.omnibox.onInputEntered.addListener(query => {
  openSearchPage(query);
});
chrome.runtime.onMessage.addListener(function (message, sender, response) {
  if (!message) return;
  let promise = null;

  switch (message.action) {
    case 'downloadTracker':
      {
        promise = downloadTracker(message.id, message.updateURL, message.downloadURL);
        break;
      }

    case 'updateTracker':
      {
        promise = updateTracker(message.id);
        break;
      }

    case 'updateExplorerModule':
      {
        promise = updateExplorerModule(message.id);
        break;
      }

    case 'update':
      {
        promise = update();
        break;
      }

    case 'search':
      {
        if (!tabFetchBg) {
          tabFetchBg = new _tabFetchBg__WEBPACK_IMPORTED_MODULE_12__["default"]();
        }

        promise = tabFetchBg.request(sender.tab.id, message.origin, message.fetchUrl, message.fetchOptions);
        break;
      }

    case 'initSearch':
      {
        promise = Promise.resolve().then(() => {
          if (tabFetchBg) {
            return tabFetchBg.initRequest(message.id);
          } else {
            throw new Error('TabFetchBg is not exists');
          }
        });
        break;
      }

    case 'track':
      {
        const {
          params
        } = message;
        promise = track(params);
        break;
      }

    case 'abortSearch':
      {
        if (tabFetchBg) {
          tabFetchBg.abortRequest(message.id);
        }

        break;
      }

    case 'tabFetchResponse':
      {
        if (tabFetchBg) {
          tabFetchBg.handleResponse(message.id, message.result);
        }

        break;
      }
  }

  if (promise) {
    promise.then(result => {
      response({
        result
      });
    }, err => {
      response({
        error: serializeError(err)
      });
    }).catch(err => {
      logger.error('Send response error', err);
    });
    return true;
  }
});

const updateIcon = invertIcon => {
  if (invertIcon) {
    chrome.action.setIcon({
      path: {
        19: 'assets/icons/icon_19_i.png',
        38: 'assets/icons/icon_38_i.png'
      }
    });
  } else {
    chrome.action.setIcon({
      path: {
        19: 'assets/icons/icon_19.png',
        38: 'assets/icons/icon_38.png'
      }
    });
  }
};

const setContextMenu = contextMenu => {
  chrome.contextMenus.removeAll(function () {
    if (contextMenu) {
      chrome.contextMenus.create({
        type: "normal",
        id: "tms",
        title: chrome.i18n.getMessage('contextMenuTitle'),
        contexts: ["selection"]
      });
    }
  });
};

chrome.contextMenus.onClicked.addListener(info => {
  if (info.menuItemId === 'tms') {
    openSearchPage(info.selectionText);
  }
});

const setPopupMenu = disablePopup => {
  if (disablePopup) {
    chrome.action.setPopup({
      popup: ''
    });
  } else {
    chrome.action.setPopup({
      popup: 'popup.html'
    });
  }
};

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: 'index.html'
  });
});

const openSearchPage = query => {
  let url = 'index.html';

  if (query) {
    url += '#/search?' + qs.stringify({
      query: query
    });
  }

  chrome.tabs.create({
    url: url,
    selected: true
  });
};

const update = () => {
  return Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_10__["default"])({
    trackers: {},
    explorerModules: {}
  }).then(storage => {
    const trackerIds = [];
    Object.entries(storage.trackers).forEach(([id, tracker]) => {
      try {
        const trackerOptionsStore = _stores_TrackerStore__WEBPACK_IMPORTED_MODULE_3__["TrackerOptionsStore"].create(tracker.options || {});

        if (trackerOptionsStore.autoUpdate) {
          trackerIds.push(id);
        }
      } catch (err) {
        logger.error(`Create TrackerMetaStore error`, tracker.id);
      }
    });
    const explorerModuleIds = [];
    Object.entries(storage.explorerModules).forEach(([id, module]) => {
      try {
        const trackerOptionsStore = _stores_TrackerStore__WEBPACK_IMPORTED_MODULE_3__["TrackerOptionsStore"].create(module.options || {});

        if (trackerOptionsStore.autoUpdate) {
          explorerModuleIds.push(id);
        }
      } catch (err) {
        logger.error(`Create ExplorerModuleMetaStore error`, module.id);
      }
    });
    return Promise.all([Promise.all(trackerIds.map(id => updateTracker(id).then(result => {
      return {
        id,
        result
      };
    }, err => {
      if (['DOWNLOAD_URL_IS_EMPTY', 'NEW_VERSION_IS_NOT_FOUND'].indexOf(err.code) === -1) {
        logger.error(`updateTracker ${id} error`, err);
      }

      return {
        id,
        error: serializeError(err)
      };
    }))), Promise.all(explorerModuleIds.map(id => updateExplorerModule(id).then(result => {
      return {
        id,
        result
      };
    }, err => {
      if (['DOWNLOAD_URL_IS_EMPTY', 'NEW_VERSION_IS_NOT_FOUND'].indexOf(err.code) === -1) {
        logger.error(`updateExplorerModule ${id} error`, err);
      }

      return {
        id,
        error: serializeError(err)
      };
    })))]).then(([trackers, explorerModules]) => {
      return {
        trackers,
        explorerModules
      };
    });
  });
};

const downloadTracker = (id, updateURL, downloadURL) => {
  return oneLimit(() => {
    return Promise.resolve().then(() => {
      if (updateURL) {
        return getCodeAndMetaFromUrl(updateURL, 'tracker').then(({
          meta
        }) => {
          return meta.downloadURL || downloadURL;
        }).catch(err => {
          logger.error('getDownloadUrlFromUpdateUrl error', updateURL, err);
          return downloadURL;
        });
      } else {
        return downloadURL;
      }
    }).then(downloadURL => {
      if (!downloadURL) {
        throw new _tools_errors__WEBPACK_IMPORTED_MODULE_6__["ErrorWithCode"]('downloadURL is empty', 'DOWNLOAD_URL_IS_EMPTY');
      }

      return fetch(downloadURL).then(response => {
        if (!response.ok) {
          throw new _tools_errors__WEBPACK_IMPORTED_MODULE_6__["ErrorWithCode"]('bad response', 'BAD_RESPONSE');
        }

        return response.text();
      }).then(code => transformJsonToCode(code)).then(code => {
        const meta = Object(_tools_getTrackerCodeMeta__WEBPACK_IMPORTED_MODULE_4__["default"])(code);

        if (!meta.downloadURL) {
          meta.downloadURL = downloadURL;
          code = Object(_tools_setCodeMeta__WEBPACK_IMPORTED_MODULE_17__["default"])(code, meta);
        }

        return {
          meta,
          code
        };
      });
    }).then(({
      code,
      meta
    }) => {
      const trackerStore = _stores_TrackerStore__WEBPACK_IMPORTED_MODULE_3__["default"].create({
        id: id,
        meta: meta,
        code: code
      });
      const tracker = trackerStore.getSnapshot();
      Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["destroy"])(trackerStore);
      tracker.options.lastUpdate = Object(_tools_getNow__WEBPACK_IMPORTED_MODULE_7__["default"])();
      return Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_10__["default"])({
        trackers: {}
      }).then(storage => {
        storage.trackers[id] = tracker;
        return Object(_tools_storageSet__WEBPACK_IMPORTED_MODULE_11__["default"])(storage);
      });
    }).then(() => true);
  });
};

const updateTracker = id => {
  return oneLimit(() => {
    return Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_10__["default"])({
      trackers: {}
    }).then(storage => {
      const localTracker = storage.trackers[id];
      const {
        updateURL,
        downloadURL,
        version
      } = localTracker.meta;
      return getNewCodeByUpdateAndDownloadUrl(updateURL, downloadURL, version, 'tracker').then(code => {
        const trackerStore = _stores_TrackerStore__WEBPACK_IMPORTED_MODULE_3__["default"].create({
          id: id,
          meta: Object(_tools_getTrackerCodeMeta__WEBPACK_IMPORTED_MODULE_4__["default"])(code),
          code: code,
          options: localTracker.options
        });
        const tracker = trackerStore.getSnapshot();
        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["destroy"])(trackerStore);
        const isNewVersion = compareVersions(tracker.meta.version, version) > 0;

        if (!isNewVersion) {
          throw new _tools_errors__WEBPACK_IMPORTED_MODULE_6__["ErrorWithCode"]('New version is not found', 'NEW_VERSION_IS_NOT_FOUND');
        }

        tracker.options.lastUpdate = Object(_tools_getNow__WEBPACK_IMPORTED_MODULE_7__["default"])();
        return Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_10__["default"])({
          trackers: {}
        }).then(storage => {
          storage.trackers[id] = tracker;
          return Object(_tools_storageSet__WEBPACK_IMPORTED_MODULE_11__["default"])(storage);
        });
      });
    }).then(() => true);
  });
};

const updateExplorerModule = id => {
  return oneLimit(() => {
    return Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_10__["default"])({
      explorerModules: {}
    }).then(storage => {
      const localModule = storage.explorerModules[id];
      const {
        updateURL,
        downloadURL,
        version
      } = localModule.meta;
      return getNewCodeByUpdateAndDownloadUrl(updateURL, downloadURL, version, 'explorerModule').then(code => {
        const explorerModuleStore = _stores_Explorer_ExplorerModuleStore__WEBPACK_IMPORTED_MODULE_8__["default"].create({
          id: id,
          meta: Object(_tools_getExploreModuleCodeMeta__WEBPACK_IMPORTED_MODULE_9__["default"])(code),
          code: code,
          options: localModule.options
        });
        const explorerModule = explorerModuleStore.getSnapshot();
        Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["destroy"])(explorerModuleStore);
        const isNewVersion = compareVersions(explorerModule.meta.version, version) > 0;

        if (!isNewVersion) {
          throw new _tools_errors__WEBPACK_IMPORTED_MODULE_6__["ErrorWithCode"]('New version is not found', 'NEW_VERSION_IS_NOT_FOUND');
        }

        explorerModule.options.lastUpdate = Object(_tools_getNow__WEBPACK_IMPORTED_MODULE_7__["default"])();
        return Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_10__["default"])({
          explorerModules: {}
        }).then(storage => {
          storage.explorerModules[id] = explorerModule;
          return Object(_tools_storageSet__WEBPACK_IMPORTED_MODULE_11__["default"])(storage);
        });
      });
    }).then(() => true);
  });
};

const getNewCodeByUpdateAndDownloadUrl = async (updateURL, downloadURL, version, type) => {
  let meta = null;
  let code = null;

  if (updateURL) {
    try {
      const result = await getCodeAndMetaFromUrl(updateURL, type);
      meta = result.meta;
    } catch (err) {
      logger.error('getCodeAndMetaFromUrl from updateURL error', updateURL, err);
    }
  }

  if (!meta) {
    if (!downloadURL) {
      throw new _tools_errors__WEBPACK_IMPORTED_MODULE_6__["ErrorWithCode"]('downloadURL is empty', 'DOWNLOAD_URL_IS_EMPTY');
    }

    const result = await getCodeAndMetaFromUrl(downloadURL, type);
    meta = result.meta;
    code = result.code;
  }

  const isNewVersion = compareVersions(meta.version, version) > 0;

  if (!isNewVersion) {
    throw new _tools_errors__WEBPACK_IMPORTED_MODULE_6__["ErrorWithCode"]('New version is not found in meta', 'NEW_VERSION_IS_NOT_FOUND');
  }

  if (!code) {
    const url = meta.downloadURL || downloadURL;

    if (!url) {
      throw new _tools_errors__WEBPACK_IMPORTED_MODULE_6__["ErrorWithCode"]('downloadURL is empty', 'DOWNLOAD_URL_IS_EMPTY');
    }

    const result = await getCodeAndMetaFromUrl(url, type);
    code = result.code;
  }

  return code;
};

const getCodeAndMetaFromUrl = (url, type = 'tracker') => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new _tools_errors__WEBPACK_IMPORTED_MODULE_6__["ErrorWithCode"]('bad response', 'BAD_RESPONSE');
    }

    return response.text();
  }).then(code => transformJsonToCode(code)).then(code => {
    let meta = null;

    if (type === 'tracker') {
      meta = Object(_tools_getTrackerCodeMeta__WEBPACK_IMPORTED_MODULE_4__["default"])(code);
    } else if (type === 'explorerModule') {
      meta = Object(_tools_getExploreModuleCodeMeta__WEBPACK_IMPORTED_MODULE_9__["default"])(code);
    }

    if (!meta.downloadURL) {
      meta.downloadURL = url;
      code = Object(_tools_setCodeMeta__WEBPACK_IMPORTED_MODULE_17__["default"])(code, meta);
    }

    return {
      meta,
      code
    };
  });
};

const track = params => {
  return Object(_tools_getUserId__WEBPACK_IMPORTED_MODULE_15__["default"])().then(uuid => {
    const defaultParams = {
      v: 1,
      ul: navigator.language,
      tid: 'UA-10717861-38',
      cid: uuid,
      an: 'tms',
      aid: 'tms-v3',
      av: "3.1.2"
    };
    return Object.assign({}, defaultParams, params);
  }).then(params => {
    logger.debug('track', params);
    return fetch('https://www.google-analytics.com/collect', {
      method: 'POST',
      headers: {
        'Content-Type': ' application/x-www-form-urlencoded'
      },
      body: qs.stringify(params)
    }).then(response => {
      if (!response.ok) {
        throw new _tools_errors__WEBPACK_IMPORTED_MODULE_6__["ErrorWithCode"](`${response.status}: ${response.statusText}`, response.status);
      }
    });
  });
};

const transformJsonToCode = data => {
  let result = data;

  if (/^\s*{/.test(data)) {
    try {
      result = Object(_tools_jsonCodeToUserscript__WEBPACK_IMPORTED_MODULE_16__["default"])(data);
    } catch (err) {
      logger.error('jsonCodeToUserscript error', err);
    }
  }

  return result;
};

/***/ }),
/* 1 */
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: Reaction, untracked, IDerivationState, createAtom, spy, comparer, isObservableObject, isBoxedObservable, isObservableArray, ObservableMap, isObservableMap, ObservableSet, isObservableSet, transaction, observable, computed, isObservable, isObservableProp, isComputed, isComputedProp, extendObservable, observe, intercept, autorun, reaction, when, action, isAction, runInAction, keys, values, entries, set, remove, has, get, decorate, configure, onBecomeObserved, onBecomeUnobserved, flow, toJS, trace, getDependencyTree, getObserverTree, _resetGlobalState, _getGlobalState, getDebugName, getAtom, _getAdministration, _allowStateChanges, _allowStateChangesInsideComputed, isArrayLike, $mobx, _isComputingDerivation, onReactionError, _interceptReads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads$$1; });
/** MobX - (c) Michel Weststrate 2015 - 2018 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};















function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR$$1 = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY$$1 = [];
Object.freeze(EMPTY_ARRAY$$1);
var EMPTY_OBJECT$$1 = {};
Object.freeze(EMPTY_OBJECT$$1);
function getNextId$$1() {
    return ++globalState$$1.mobxGuid;
}
function fail$$1(message) {
    invariant$$1(false, message);
    throw "X"; // unreachable
}
function invariant$$1(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR$$1));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated$$1(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated$$1("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once$$1(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop$$1 = function () { };
function unique$$1(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject$$1(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject$$1(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}

function addHiddenProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable$$1(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable$$1(object, prop) {
    if ( true && !isPropertyConfigurable$$1(object, prop))
        fail$$1("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate$$1(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject$$1(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike$$1(x) {
    return Array.isArray(x) || isObservableArray$$1(x);
}
function isES6Map$$1(thing) {
    return thing instanceof Map;
}
function isES6Set$$1(thing) {
    return thing instanceof Set;
}
function getMapLikeKeys$$1(map) {
    if (isPlainObject$$1(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map$$1(map) || isObservableMap$$1(map))
        return Array.from(map.keys());
    return fail$$1("Cannot get keys from '" + map + "'");
}
function toPrimitive$$1(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx$$1 = Symbol("mobx administration");
var Atom$$1 = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom$$1(name) {
        if (name === void 0) { name = "Atom@" + getNextId$$1(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom$$1.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom$$1.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom$$1.prototype.reportObserved = function () {
        return reportObserved$$1(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom$$1.prototype.reportChanged = function () {
        startBatch$$1();
        propagateChanged$$1(this);
        endBatch$$1();
    };
    Atom$$1.prototype.toString = function () {
        return this.name;
    };
    return Atom$$1;
}());
var isAtom$$1 = createInstanceofPredicate$$1("Atom", Atom$$1);
function createAtom$$1(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop$$1; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop$$1; }
    var atom = new Atom$$1(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop$$1) {
        onBecomeObserved$$1(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop$$1) {
        onBecomeUnobserved$$1(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual$$1(a, b);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer$$1 = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

var mobxDidRunLazyInitializersSymbol$$1 = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators$$1 = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance$$1(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance$$1(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance$$1(target) {
    if (target[mobxDidRunLazyInitializersSymbol$$1] === true)
        return;
    var decorators = target[mobxPendingDecorators$$1];
    if (decorators) {
        addHiddenProp$$1(target, mobxDidRunLazyInitializersSymbol$$1, true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator$$1(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate$$1(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator$$1(arguments))
                fail$$1("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators$$1)) {
                var inheritedDecorators = target[mobxPendingDecorators$$1];
                addHiddenProp$$1(target, mobxPendingDecorators$$1, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators$$1][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator$$1(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY$$1;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator$$1(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer$$1(v, _, name) {
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name });
    if (isES6Set$$1(v))
        return observable$$1.set(v, { name: name });
    return v;
}
function shallowEnhancer$$1(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject$$1(v) || isObservableArray$$1(v) || isObservableMap$$1(v) || isObservableSet$$1(v))
        return v;
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name, deep: false });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name, deep: false });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name, deep: false });
    if (isES6Set$$1(v))
        return observable$$1.set(v, { name: name, deep: false });
    return fail$$1( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer$$1(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer$$1(v, oldValue, name) {
    if ( true && isObservable$$1(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual$$1(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer$$1(enhancer) {
    invariant$$1(enhancer);
    var decorator = createPropDecorator$$1(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant$$1(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject$$1(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail$$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions$$1 = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions$$1);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail$$1("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions$$1(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions$$1;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (true) {
        if (typeof thing !== "object")
            return fail$$1("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator$$1 = createDecoratorForEnhancer$$1(deepEnhancer$$1);
var shallowDecorator = createDecoratorForEnhancer$$1(shallowEnhancer$$1);
var refDecorator$$1 = createDecoratorForEnhancer$$1(referenceEnhancer$$1);
var refStructDecorator = createDecoratorForEnhancer$$1(refStructEnhancer$$1);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer$$1
            : deepEnhancer$$1;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator$$1.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject$$1(v)
        ? observable$$1.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable$$1.array(v, arg2)
            : isES6Map$$1(v)
                ? observable$$1.map(v, arg2)
                : isES6Set$$1(v)
                    ? observable$$1.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail$$1( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableValue$$1(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions$$1(options);
        return createObservableArray$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableMap$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableSet$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions$$1(options);
        if (o.proxy === false) {
            return extendObservable$$1({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(o);
            var base = extendObservable$$1({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject$$1(base);
            extendObservableObjectWithProperties$$1(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator$$1,
    shallow: shallowDecorator,
    deep: deepDecorator$$1,
    struct: refStructDecorator
};
var observable$$1 = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable$$1[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail$$1(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator$$1 = createPropDecorator$$1(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get$$1 = descriptor.get, set$$1 = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject$$1(instance).addComputedProp(instance, propertyName, __assign({ get: get$$1,
        set: set$$1, context: instance }, options));
});
var computedStructDecorator = computedDecorator$$1({ equals: comparer$$1.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed$$1 = function computed$$1(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator$$1.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator$$1.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant$$1(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant$$1(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue$$1(opts);
};
computed$$1.struct = computedStructDecorator;

function createAction$$1(actionName, fn, ref) {
    if (true) {
        invariant$$1(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction$$1(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction$$1(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    var shouldSupressReactionError = true;
    try {
        var res = fn.apply(scope, args);
        shouldSupressReactionError = false;
        return res;
    }
    finally {
        if (shouldSupressReactionError) {
            globalState$$1.suppressReactionErrors = shouldSupressReactionError;
            endAction(runInfo);
            globalState$$1.suppressReactionErrors = false;
        }
        else {
            endAction(runInfo);
        }
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled$$1() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart$$1({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart$$1();
    startBatch$$1();
    var prevAllowStateChanges = allowStateChangesStart$$1(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd$$1(runInfo.prevAllowStateChanges);
    endBatch$$1();
    untrackedEnd$$1(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production")
        spyReportEnd$$1({ time: Date.now() - runInfo.startTime });
}
function allowStateChanges$$1(allowStateChanges$$1, func) {
    var prev = allowStateChangesStart$$1(allowStateChanges$$1);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd$$1(prev);
    }
    return res;
}
function allowStateChangesStart$$1(allowStateChanges$$1) {
    var prev = globalState$$1.allowStateChanges;
    globalState$$1.allowStateChanges = allowStateChanges$$1;
    return prev;
}
function allowStateChangesEnd$$1(prev) {
    globalState$$1.allowStateChanges = prev;
}
function allowStateChangesInsideComputed$$1(func) {
    var prev = globalState$$1.computationDepth;
    globalState$$1.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState$$1.computationDepth = prev;
    }
    return res;
}

var ObservableValue$$1 = /** @class */ (function (_super) {
    __extends(ObservableValue$$1, _super);
    function ObservableValue$$1(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId$$1(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer$$1.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled$$1() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport$$1({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue$$1.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState$$1.UNCHANGED) {
            var notifySpy = isSpyEnabled$$1();
            if (notifySpy && "development" !== "production") {
                spyReportStart$$1({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableValue$$1.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed$$1(this);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState$$1.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState$$1.UNCHANGED : newValue;
    };
    ObservableValue$$1.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners$$1(this)) {
            notifyListeners$$1(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue$$1.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableValue$$1.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener$$1(this, listener);
    };
    ObservableValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue$$1.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ObservableValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue$$1;
}(Atom$$1));
var isObservableValue$$1 = createInstanceofPredicate$$1("ObservableValue", ObservableValue$$1);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue$$1 = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue$$1(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.value = new CaughtException$$1(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode$$1.NONE;
        if ( true && !options.get)
            throw "[mobx] missing option for computed: get";
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId$$1();
        if (options.set)
            this.setter = createAction$$1(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer$$1.structural
                    : comparer$$1.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue$$1.prototype.onBecomeStale = function () {
        propagateMaybeChanged$$1(this);
    };
    ComputedValue$$1.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue$$1.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue$$1.prototype.get = function () {
        if (this.isComputing)
            fail$$1("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState$$1.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute$$1(this)) {
                this.warnAboutUntrackedRead();
                startBatch$$1(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch$$1();
            }
        }
        else {
            reportObserved$$1(this);
            if (shouldCompute$$1(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed$$1(this);
        }
        var result = this.value;
        if (isCaughtException$$1(result))
            throw result.cause;
        return result;
    };
    ComputedValue$$1.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException$$1(res))
            throw res.cause;
        return res;
    };
    ComputedValue$$1.prototype.set = function (value) {
        if (this.setter) {
            invariant$$1(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant$$1(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue$$1.prototype.trackAndCompute = function () {
        if (isSpyEnabled$$1() && "development" !== "production") {
            spyReport$$1({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException$$1(oldValue) ||
            isCaughtException$$1(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue$$1.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState$$1.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction$$1(this, this.derivation, this.scope);
        }
        else {
            if (globalState$$1.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException$$1(e);
                }
            }
        }
        globalState$$1.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue$$1.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving$$1(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue$$1.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun$$1(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart$$1();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd$$1(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue$$1.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail$$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode$$1.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState$$1.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue$$1.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ComputedValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue$$1;
}());
var isComputedValue$$1 = createInstanceofPredicate$$1("ComputedValue", ComputedValue$$1);

var IDerivationState;
(function (IDerivationState$$1) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState$$1[IDerivationState$$1["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState$$1[IDerivationState$$1["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState$$1[IDerivationState$$1["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState$$1[IDerivationState$$1["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode$$1;
(function (TraceMode$$1) {
    TraceMode$$1[TraceMode$$1["NONE"] = 0] = "NONE";
    TraceMode$$1[TraceMode$$1["LOG"] = 1] = "LOG";
    TraceMode$$1[TraceMode$$1["BREAK"] = 2] = "BREAK";
})(TraceMode$$1 || (TraceMode$$1 = {}));
var CaughtException$$1 = /** @class */ (function () {
    function CaughtException$$1(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException$$1;
}());
function isCaughtException$$1(e) {
    return e instanceof CaughtException$$1;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute$$1(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart$$1(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue$$1(obj)) {
                    if (globalState$$1.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd$$1(prevUntracked);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd$$1(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0$$1(derivation);
            untrackedEnd$$1(prevUntracked);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation$$1() {
    return globalState$$1.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed$$1(atom) {
    var hasObservers$$1 = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState$$1.computationDepth > 0 && hasObservers$$1)
        fail$$1( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState$$1.allowStateChanges && (hasObservers$$1 || globalState$$1.enforceActions === "strict"))
        fail$$1( true &&
            (globalState$$1.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction$$1(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0$$1(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState$$1.runId;
    var prevTracking = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = derivation;
    var result;
    if (globalState$$1.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException$$1(e);
        }
    }
    globalState$$1.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver$$1(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver$$1(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving$$1(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver$$1(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked$$1(action$$1) {
    var prev = untrackedStart$$1();
    try {
        return action$$1();
    }
    finally {
        untrackedEnd$$1(prev);
    }
}
function untrackedStart$$1() {
    var prev = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = null;
    return prev;
}
function untrackedEnd$$1(prev) {
    globalState$$1.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0$$1(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals$$1 = /** @class */ (function () {
    function MobXGlobals$$1() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals$$1;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState$$1 = (function () {
    var global = getGlobal$$1();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals$$1().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail$$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals$$1();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals$$1());
    }
})();
function isolateGlobalState$$1() {
    if (globalState$$1.pendingReactions.length ||
        globalState$$1.inBatch ||
        globalState$$1.isRunningReactions)
        fail$$1("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal$$1().__mobxInstanceCount === 0)
            getGlobal$$1().__mobxGlobals = undefined;
        globalState$$1 = new MobXGlobals$$1();
    }
}
function getGlobalState$$1() {
    return globalState$$1;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState$$1() {
    var defaultGlobals = new MobXGlobals$$1();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState$$1[key] = defaultGlobals[key];
    globalState$$1.allowStateChanges = !globalState$$1.enforceActions;
}
function getGlobal$$1() {
    return typeof window !== "undefined" ? window : global;
}

function hasObservers$$1(observable$$1) {
    return observable$$1.observers && observable$$1.observers.size > 0;
}
function getObservers$$1(observable$$1) {
    return observable$$1.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver$$1(observable$$1, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable$$1.observers.add(node);
    if (observable$$1.lowestObserverState > node.dependenciesState)
        observable$$1.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver$$1(observable$$1, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable$$1.observers.delete(node);
    if (observable$$1.observers.size === 0) {
        // deleting last observer
        queueForUnobservation$$1(observable$$1);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation$$1(observable$$1) {
    if (observable$$1.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable$$1.isPendingUnobservation = true;
        globalState$$1.pendingUnobservations.push(observable$$1);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch$$1() {
    globalState$$1.inBatch++;
}
function endBatch$$1() {
    if (--globalState$$1.inBatch === 0) {
        runReactions$$1();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState$$1.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable$$1 = list[i];
            observable$$1.isPendingUnobservation = false;
            if (observable$$1.observers.size === 0) {
                if (observable$$1.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable$$1.isBeingObserved = false;
                    observable$$1.onBecomeUnobserved();
                }
                if (observable$$1 instanceof ComputedValue$$1) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable$$1.suspend();
                }
            }
        }
        globalState$$1.pendingUnobservations = [];
    }
}
function reportObserved$$1(observable$$1) {
    var derivation = globalState$$1.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable$$1.lastAccessedBy) {
            observable$$1.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable$$1;
            if (!observable$$1.isBeingObserved) {
                observable$$1.isBeingObserved = true;
                observable$$1.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable$$1.observers.size === 0 && globalState$$1.inBatch > 0) {
        queueForUnobservation$$1(observable$$1);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged$$1(observable$$1) {
    // invariantLOS(observable, "changed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed$$1(observable$$1) {
    // invariantLOS(observable, "confirmed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable$$1.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged$$1(observable$$1) {
    // invariantLOS(observable, "maybe start");
    if (observable$$1.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable$$1.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable$$1) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable$$1.name + "'");
    if (derivation.isTracing === TraceMode$$1.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree$$1(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable$$1.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue$$1 ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction$$1 = /** @class */ (function () {
    function Reaction$$1(name, onInvalidate, errorHandler) {
        if (name === void 0) { name = "Reaction@" + getNextId$$1(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode$$1.NONE;
    }
    Reaction$$1.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction$$1.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState$$1.pendingReactions.push(this);
            runReactions$$1();
        }
    };
    Reaction$$1.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction$$1.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch$$1();
            this._isScheduled = false;
            if (shouldCompute$$1(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled$$1() &&
                        "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport$$1({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch$$1();
        }
    };
    Reaction$$1.prototype.track = function (fn) {
        if (this.isDisposed) {
            fail$$1("Reaction already disposed");
        }
        startBatch$$1();
        var notify = isSpyEnabled$$1();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart$$1({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction$$1(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving$$1(this);
        }
        if (isCaughtException$$1(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd$$1({
                time: Date.now() - startTime
            });
        }
        endBatch$$1();
    };
    Reaction$$1.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState$$1.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState$$1.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled$$1()) {
            spyReport$$1({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState$$1.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction$$1.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch$$1();
                clearObserving$$1(this);
                endBatch$$1();
            }
        }
    };
    Reaction$$1.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx$$1] = this;
        return r;
    };
    Reaction$$1.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction$$1.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace$$1(this, enterBreakPoint);
    };
    return Reaction$$1;
}());
function onReactionError$$1(handler) {
    globalState$$1.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState$$1.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState$$1.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions$$1() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState$$1.inBatch > 0 || globalState$$1.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState$$1.isRunningReactions = true;
    var allReactions = globalState$$1.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState$$1.isRunningReactions = false;
}
var isReaction$$1 = createInstanceofPredicate$$1("Reaction", Reaction$$1);
function setReactionScheduler$$1(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled$$1() {
    return  true && !!globalState$$1.spyListeners.length;
}
function spyReport$$1(event) {
    if (false)
        {} // dead code elimination can do the rest
    if (!globalState$$1.spyListeners.length)
        return;
    var listeners = globalState$$1.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart$$1(event) {
    if (false)
        {}
    var change = __assign({}, event, { spyReportStart: true });
    spyReport$$1(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd$$1(change) {
    if (false)
        {}
    if (change)
        spyReport$$1(__assign({}, change, { spyReportEnd: true }));
    else
        spyReport$$1(END_EVENT);
}
function spy$$1(listener) {
    if (false) {}
    else {
        globalState$$1.spyListeners.push(listener);
        return once$$1(function () {
            globalState$$1.spyListeners = globalState$$1.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail$$1( true && "@action fields are not reassignable");
}
function namedActionDecorator$$1(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail$$1("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction$$1(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction$$1(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator$$1(name).apply(this, arguments);
    };
}
function actionFieldDecorator$$1(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp$$1(this, prop, action$$1(name, value));
            }
        });
    };
}
function boundActionDecorator$$1(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction$$1(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction$$1(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction$$1(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action$$1 = function action$$1(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction$$1(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction$$1(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator$$1(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp$$1(arg1, arg2, createAction$$1(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator$$1(arg2).apply(null, arguments);
    }
};
action$$1.bound = boundActionDecorator$$1;
function runInAction$$1(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant$$1(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction$$1(actionName, fn, this, undefined);
}
function isAction$$1(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction$$1(target, propertyName, fn) {
    addHiddenProp$$1(target, propertyName, createAction$$1(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun$$1(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (true) {
        invariant$$1(typeof view === "function", "Autorun expects a function as first argument");
        invariant$$1(isAction$$1(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId$$1();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction$$1;
    if (runSync) {
        // normal autorun
        reaction$$1 = new Reaction$$1(name, function () {
            this.track(reactionRunner);
        }, opts.onError);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction$$1 = new Reaction$$1(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction$$1.isDisposed)
                        reaction$$1.track(reactionRunner);
                });
            }
        }, opts.onError);
    }
    function reactionRunner() {
        view(reaction$$1);
    }
    reaction$$1.schedule();
    return reaction$$1.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction$$1(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (true) {
        invariant$$1(typeof expression === "function", "First argument to reaction should be a function");
        invariant$$1(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId$$1();
    var effectAction = action$$1(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer$$1.structural
        : opts.equals || comparer$$1.default;
    var r = new Reaction$$1(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg2 === "string" ? getAtom$$1(thing, arg2) : getAtom$$1(thing);
    var cb = typeof arg2 === "string" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail$$1( true && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure$$1(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler;
    if (options.isolateGlobalState === true) {
        isolateGlobalState$$1();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated$$1("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail$$1("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState$$1.enforceActions = ea;
        globalState$$1.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState$$1.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState$$1.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler$$1(reactionScheduler);
    }
}

function decorate$$1(thing, decorators) {
     true &&
        invariant$$1(isPlainObject$$1(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true &&
            invariant$$1(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable$$1(target, properties, decorators, options) {
    if (true) {
        invariant$$1(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant$$1(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant$$1(!isObservableMap$$1(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions$$1(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(options);
    initializeInstance$$1(target); // Fixes #1740
    asObservableObject$$1(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions$$1(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator$$1 : deepDecorator$$1);
}
function extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator) {
    if (true) {
        invariant$$1(!isObservable$$1(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators)
            for (var key in decorators)
                if (!(key in properties))
                    fail$$1("Trying to declare a decorator for unspecified property '" + key + "'");
    }
    startBatch$$1();
    try {
        for (var key in properties) {
            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if (true) {
                if (Object.getOwnPropertyDescriptor(target, key))
                    fail$$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
                if (isComputed$$1(descriptor.value))
                    fail$$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
            }
            var decorator = decorators && key in decorators
                ? decorators[key]
                : descriptor.get
                    ? computedDecorator$$1
                    : defaultDecorator;
            if ( true && typeof decorator !== "function")
                fail$$1("Not a valid decorator for '" + key + "', got: " + decorator);
            var resultDescriptor = decorator(target, key, descriptor, true);
            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
            )
                Object.defineProperty(target, key, resultDescriptor);
        }
    }
    finally {
        endBatch$$1();
    }
}

function getDependencyTree$$1(thing, property) {
    return nodeToDependencyTree(getAtom$$1(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique$$1(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree$$1(thing, property) {
    return nodeToObserverTree(getAtom$$1(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers$$1(node))
        result.observers = Array.from(getObservers$$1(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function flow$$1(generator) {
    if (arguments.length !== 1)
        fail$$1( true && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action$$1(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action$$1(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return();
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop$$1, noop$$1);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new Error("FLOW_CANCELLED"));
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads$$1(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap$$1(thing) || isObservableArray$$1(thing) || isObservableValue$$1(thing)) {
        target = getAdministration$$1(thing);
    }
    else if (isObservableObject$$1(thing)) {
        if (typeof propOrHandler !== "string")
            return fail$$1( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration$$1(thing, propOrHandler);
    }
    else {
        return fail$$1( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail$$1( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept$$1(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration$$1(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration$$1(thing, property).intercept(handler);
}

function _isComputed$$1(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject$$1(value) === false)
            return false;
        if (!value[$mobx$$1].values.has(property))
            return false;
        var atom = getAtom$$1(value, property);
        return isComputedValue$$1(atom);
    }
    return isComputedValue$$1(value);
}
function isComputed$$1(value) {
    if (arguments.length > 1)
        return fail$$1( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed$$1(value);
}
function isComputedProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1( true &&
            "isComputed expected a property name as second argument");
    return _isComputed$$1(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap$$1(value) || isObservableArray$$1(value)))
            return fail$$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject$$1(value)) {
            return value[$mobx$$1].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject$$1(value) ||
        !!value[$mobx$$1] ||
        isAtom$$1(value) ||
        isReaction$$1(value) ||
        isComputedValue$$1(value));
}
function isObservable$$1(value) {
    if (arguments.length !== 1)
        fail$$1( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return obj[$mobx$$1].getKeys();
    }
    if (isObservableMap$$1(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet$$1(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail$$1( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet$$1(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray$$1(obj)) {
        return obj.slice();
    }
    return fail$$1( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet$$1(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail$$1( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set$$1(obj, key, value) {
    if (arguments.length === 2) {
        startBatch$$1();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set$$1(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch$$1();
        }
        return;
    }
    if (isObservableObject$$1(obj)) {
        var adm = obj[$mobx$$1];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap$$1(obj)) {
        obj.set(key, value);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        startBatch$$1();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch$$1();
    }
    else {
        return fail$$1( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        
        obj[$mobx$$1].remove(key);
    }
    else if (isObservableMap$$1(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet$$1(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail$$1( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration$$1(obj);
        return adm.has(key);
    }
    else if (isObservableMap$$1(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet$$1(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray$$1(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail$$1( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get$$1(obj, key) {
    if (!has$$1(obj, key))
        return undefined;
    if (isObservableObject$$1(obj)) {
        return obj[key];
    }
    else if (isObservableMap$$1(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray$$1(obj)) {
        return obj[key];
    }
    else {
        return fail$$1( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe$$1(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration$$1(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration$$1(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable$$1(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue$$1(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable$$1(source))
        keys$$1(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray$$1(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet$$1(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap$$1(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    for (var key in source) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    }
    return res;
}
function toJS$$1(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace$$1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail$$1( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode$$1.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode$$1.BREAK : TraceMode$$1.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState$$1.trackingDerivation;
        case 1:
            return getAtom$$1(args[0]);
        case 2:
            return getAtom$$1(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction$$1(action$$1, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch$$1();
    try {
        return action$$1.apply(thisArg);
    }
    finally {
        endBatch$$1();
    }
}

function when$$1(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx$$1].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId$$1();
    var effectAction = createAction$$1(opts.name + "-effect", effect);
    var disposer = autorun$$1(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail$$1("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx$$1];
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (typeof name === "string")
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return target[name];
        var adm = getAdm(target);
        var observable$$1 = adm.values.get(name);
        if (observable$$1 instanceof Atom$$1) {
            var result = observable$$1.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (typeof name === "string")
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (typeof name !== "string")
            return false;
        set$$1(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (typeof name !== "string")
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail$$1("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject$$1(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx$$1].proxy = proxy;
    return proxy;
}

function hasInterceptors$$1(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor$$1(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once$$1(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange$$1(interceptable, change) {
    var prevU = untrackedStart$$1();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant$$1(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd$$1(prevU);
    }
}

function hasListeners$$1(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener$$1(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once$$1(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners$$1(listenable, change) {
    var prevU = untrackedStart$$1();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd$$1(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx$$1)
            return target[$mobx$$1];
        if (name === "length")
            return target[$mobx$$1].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx$$1].setArrayLength(value);
            return true;
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
            return true;
        }
        if (!isNaN(name)) {
            arrayExtensions.set.call(target, parseInt(name), value);
            return true;
        }
        return false;
    },
    preventExtensions: function (target) {
        fail$$1("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray$$1(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId$$1(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp$$1(adm.values, $mobx$$1, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart$$1(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd$$1(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom$$1(name || "ObservableArray@" + getNextId$$1());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values$$1) {
        if (this.dehancer !== undefined && values$$1.length > 0)
            return values$$1.map(this.dehancer);
        return values$$1;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener$$1(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY$$1;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY$$1;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx$$1].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx$$1];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx$$1].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx$$1];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx$$1];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx$$1];
        var values$$1 = adm.values;
        if (index < values$$1.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed$$1(adm.atom);
            var oldValue = values$$1[index];
            if (hasInterceptors$$1(adm)) {
                var change = interceptChange$$1(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values$$1[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values$$1.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values$$1.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx$$1];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate$$1("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray$$1(thing) {
    return isObject$$1(thing) && isObservableArrayAdministration(thing[$mobx$$1]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap$$1 = /** @class */ (function () {
    function ObservableMap$$1(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer$$1; }
        if (name === void 0) { name = "ObservableMap@" + getNextId$$1(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom$$1(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap$$1.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap$$1.prototype.has = function (key) {
        if (this._hasMap.has(key))
            return this._hasMap.get(key).get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap$$1.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap$$1.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            transaction$$1(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data.get(key);
                observable$$1.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
            return true;
        }
        return false;
    };
    ObservableMap$$1.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = new ObservableValue$$1(value, referenceEnhancer$$1, this.name + "." + stringifyKey(key) + "?", false);
            this._hasMap.set(key, entry);
        }
        return entry;
    };
    ObservableMap$$1.prototype._updateValue = function (key, newValue) {
        var observable$$1 = this._data.get(key);
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== globalState$$1.UNCHANGED) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableMap$$1.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this._keysAtom);
        transaction$$1(function () {
            var observable$$1 = new ObservableValue$$1(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable$$1);
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
    };
    ObservableMap$$1.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap$$1.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap$$1.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys$$1.length
                    ? { value: self.get(keys$$1[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap$$1.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys$$1.length) {
                    var key = keys$$1[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap$$1.prototype[(_a = $mobx$$1, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap$$1.prototype.forEach = function (callback, thisArg) {
        var e_1, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap$$1.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap$$1(other)) {
            other = other.toJS();
        }
        transaction$$1(function () {
            if (isPlainObject$$1(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    return _this.set(key, value);
                });
            else if (isES6Map$$1(other)) {
                if (other.constructor !== Map)
                    fail$$1("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) { return _this.set(key, value); });
            }
            else if (other !== null && other !== undefined)
                fail$$1("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap$$1.prototype.clear = function () {
        var _this = this;
        transaction$$1(function () {
            untracked$$1(function () {
                var e_2, _a;
                try {
                    for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap$$1.prototype.replace = function (values$$1) {
        var _this = this;
        transaction$$1(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys$$1(values$$1);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values$$1);
        });
        return this;
    };
    Object.defineProperty(ObservableMap$$1.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap$$1.prototype.toPOJO = function () {
        var e_3, _a;
        var res = {};
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap$$1.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap$$1.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap$$1.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap$$1.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener$$1(this, listener);
    };
    ObservableMap$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    return ObservableMap$$1;
}());
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
/* 'var' fixes small-build issue */
var isObservableMap$$1 = createInstanceofPredicate$$1("ObservableMap", ObservableMap$$1);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet$$1 = /** @class */ (function () {
    function ObservableSet$$1(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer$$1; }
        if (name === void 0) { name = "ObservableSet@" + getNextId$$1(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom$$1(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet$$1.prototype.clear = function () {
        var _this = this;
        transaction$$1(function () {
            untracked$$1(function () {
                var e_1, _a;
                try {
                    for (var _b = __values(_this._data.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var value = _c.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet$$1.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet$$1.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet$$1.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this._atom);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction$$1(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(change);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
        return this;
    };
    ObservableSet$$1.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name }));
            transaction$$1(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
            return true;
        }
        return false;
    };
    ObservableSet$$1.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet$$1.prototype.entries = function () {
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        var values$$1 = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values$$1.length
                    ? { value: [keys$$1[index], values$$1[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet$$1.prototype.keys = function () {
        return this.values();
    };
    ObservableSet$$1.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet$$1.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet$$1(other)) {
            other = other.toJS();
        }
        transaction$$1(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (isES6Set$$1(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (other !== null && other !== undefined) {
                fail$$1("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet$$1.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener$$1(this, listener);
    };
    ObservableSet$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableSet$$1.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet$$1.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet$$1.prototype[(_a$1 = $mobx$$1, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet$$1;
}());
var isObservableSet$$1 = createInstanceofPredicate$$1("ObservableSet", ObservableSet$$1);

var ObservableObjectAdministration$$1 = /** @class */ (function () {
    function ObservableObjectAdministration$$1(target, values$$1, name, defaultEnhancer) {
        if (values$$1 === void 0) { values$$1 = new Map(); }
        this.target = target;
        this.values = values$$1;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom$$1(name + ".keys");
    }
    ObservableObjectAdministration$$1.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration$$1.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable$$1 = this.values.get(key);
        if (observable$$1 instanceof ComputedValue$$1) {
            observable$$1.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable$$1.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState$$1.UNCHANGED) {
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue$$1(exists, referenceEnhancer$$1, this.name + "." + key.toString() + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration$$1.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable$$1(target, propName);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable$$1 = new ObservableValue$$1(newValue, enhancer, this.name + "." + propName, false);
        this.values.set(propName, observable$$1);
        newValue = observable$$1.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig$$1(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration$$1.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + propName;
        this.values.set(propName, new ComputedValue$$1(options));
        if (propertyOwner === target || isPropertyConfigurable$$1(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig$$1(propName));
    };
    ObservableObjectAdministration$$1.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch$$1();
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
        finally {
            endBatch$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration$$1.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener$$1(this, callback);
    };
    ObservableObjectAdministration$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableObjectAdministration$$1.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners$$1(this);
        var notifySpy = isSpyEnabled$$1();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration$$1.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue$$1)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration$$1;
}());
function asObservableObject$$1(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer$$1; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx$$1))
        return target[$mobx$$1];
     true &&
        invariant$$1(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject$$1(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId$$1();
    if (!name)
        name = "ObservableObject@" + getNextId$$1();
    var adm = new ObservableObjectAdministration$$1(target, new Map(), name, defaultEnhancer);
    addHiddenProp$$1(target, $mobx$$1, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig$$1(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx$$1].read(propName);
            },
            set: function (v) {
                this[$mobx$$1].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx$$1];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance$$1(owner);
        return owner[$mobx$$1];
    }
    return adm;
}
function generateComputedPropConfig$$1(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: false,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate$$1("ObservableObjectAdministration", ObservableObjectAdministration$$1);
function isObservableObject$$1(thing) {
    if (isObject$$1(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        return isObservableObjectAdministration(thing[$mobx$$1]);
    }
    return false;
}

function getAtom$$1(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray$$1(thing)) {
            if (property !== undefined)
                fail$$1( true &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx$$1].atom;
        }
        if (isObservableSet$$1(thing)) {
            return thing[$mobx$$1];
        }
        if (isObservableMap$$1(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable$$1 = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable$$1)
                fail$$1( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        if (property && !thing[$mobx$$1])
            thing[property]; // See #1072
        if (isObservableObject$$1(thing)) {
            if (!property)
                return fail$$1( true && "please specify a property");
            var observable$$1 = thing[$mobx$$1].values.get(property);
            if (!observable$$1)
                fail$$1( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction$$1(thing[$mobx$$1])) {
            // disposer function
            return thing[$mobx$$1];
        }
    }
    return fail$$1( true && "Cannot obtain atom from " + thing);
}
function getAdministration$$1(thing, property) {
    if (!thing)
        fail$$1("Expecting some object");
    if (property !== undefined)
        return getAdministration$$1(getAtom$$1(thing, property));
    if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing))
        return thing;
    if (isObservableMap$$1(thing) || isObservableSet$$1(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance$$1(thing);
    if (thing[$mobx$$1])
        return thing[$mobx$$1];
    fail$$1( true && "Cannot obtain administration from " + thing);
}
function getDebugName$$1(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom$$1(thing, property);
    else if (isObservableObject$$1(thing) || isObservableMap$$1(thing) || isObservableSet$$1(thing))
        named = getAdministration$$1(thing);
    else
        named = getAtom$$1(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual$$1(a, b) {
    return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys$$1 = Object.keys(a);
        var key = void 0;
        length = keys$$1.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys$$1[length];
            if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray$$1(a))
        return a.slice();
    if (isES6Map$$1(a) || isObservableMap$$1(a))
        return Array.from(a.entries());
    if (isES6Set$$1(a) || isObservableSet$$1(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = self;
    return iterator;
}
function self() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hosted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = typeof window !== "undefined" ? window : global;
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}

(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        console.warn(
        // Template literal(backtick) is used for fix issue with rollup-plugin-commonjs https://github.com/rollup/rollup-plugin-commonjs/issues/344
        "[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
// Devtools support
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy$$1,
        extras: {
            getDebugName: getDebugName$$1
        },
        $mobx: $mobx$$1
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ 2), __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!************************************!*\
  !*** ./src/stores/OptionsStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ 5);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/getLogger */ 8);
/* harmony import */ var _tools_storageGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/storageGet */ 9);
/* harmony import */ var _tools_storageSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/storageSet */ 10);
/* harmony import */ var _tools_downloadBlob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/downloadBlob */ 11);
/* harmony import */ var _tools_mobxCompare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools/mobxCompare */ 12);







const promiseLimit = __webpack_require__(/*! promise-limit */ 19);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_1__["default"])('OptionsStore');
const oneLimit = promiseLimit(1);
/**
 * @typedef {{}} ExplorerSectionsStore
 * @property {boolean} [favorites]
 * @property {boolean} [kpFavorites]
 * @property {boolean} [kpInCinema]
 * @property {boolean} [imdbInCinema]
 * @property {boolean} [kpPopular]
 * @property {boolean} [imdbPopular]
 * @property {boolean} [kpSeries]
 * @property {boolean} [imdbSeries]
 * @property {boolean} [ggGamesNew]
 * @property {boolean} [ggGamesTop]
 * @property {function} setValue
 */

const ExplorerSectionsStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('ExplorerSectionsStore', {
  favorites: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  kpFavorites: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  kpInCinema: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  imdbInCinema: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  kpPopular: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  imdbPopular: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  kpSeries: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  imdbSeries: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  ggGamesNew: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  ggGamesTop: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true)
}).actions(self => {
  return {
    setValue(key, value) {
      self[key] = value;
    }

  };
});
/**
 * @typedef {{}} OptionsValueStore
 * @property {boolean} [hidePeerRow]
 * @property {boolean} [hideSeedRow]
 * @property {boolean} [categoryWordFilter]
 * @property {boolean} [contextMenu]
 * @property {boolean} [disablePopup]
 * @property {boolean} [invertIcon]
 * @property {boolean} [defineCategory]
 * @property {boolean} [singleResultTable]
 * @property {boolean} [requestQueryDescription]
 * @property {boolean} [doNotSendStatistics]
 * @property {boolean} [originalPosterName]
 * @property {string} [kpFolderId]
 * @property {ExplorerSectionsStore} [explorerSections]
 * @property {{by:string,[direction]:number}[]} [sorts]
 * @property {number} [trackerListHeight]
 * @property {string[]} [repositories]
 * @property {function} setValue
 */

const OptionsValueStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('OptionsValueStore', {
  hidePeerRow: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false),
  hideSeedRow: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false),
  categoryWordFilter: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  contextMenu: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  disablePopup: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false),
  invertIcon: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false),
  defineCategory: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  singleResultTable: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false),
  requestQueryDescription: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  doNotSendStatistics: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false),
  originalPosterName: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false),
  kpFolderId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, '1'),
  explorerSections: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(ExplorerSectionsStore, {}),
  sorts: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model({
    by: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
    direction: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number, 0)
  })), [{
    by: 'quality'
  }]),
  trackerListHeight: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number, 200),
  repositories: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string), ['https://api.github.com/repos/feverqwe/tSearch/contents/external'])
}).actions(self => {
  return {
    setValue(key, value) {
      self[key] = value;
    }

  };
});
/**
 * @typedef {{}} OptionsStore
 * @property {string} [state]
 * @property {OptionsValueStore|undefined|null} options
 * @property {function} setOptions
 * @property {function:Promise} fetchOptions
 * @property {function} patchOptions
 * @property {function} getSnapshot
 * @property {function} save
 * @property {function} exportZip
 * @property {function} importZip
 * @property {function} afterCreate
 * @property {function} beforeDestroy
 */

const OptionsStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('OptionsStore', {
  state: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
  options: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(OptionsValueStore)
}).actions(self => {
  return {
    setOptions(value) {
      self.options = value;
    },

    fetchOptions: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["flow"])(function* () {
      self.state = 'pending';

      try {
        const storage = yield Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_2__["default"])({
          options: {}
        }, 'sync');

        if (Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["isAlive"])(self)) {
          try {
            self.setOptions(storage.options);
          } catch (err) {
            logger.error('fetchOptions error, options will cleared', err);
            self.setOptions({});
          }

          self.state = 'done';
        }
      } catch (err) {
        logger.error('fetchOptions error', err);

        if (Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["isAlive"])(self)) {
          self.state = 'error';
        }
      }
    }),

    patchOptions(patch) {
      Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["applyPatch"])(self.options, patch);
    }

  };
}).views(self => {
  const storageChangeListener = (changes, namespace) => {
    if (self.state !== 'done') return;

    if (namespace === 'sync') {
      const change = changes.options;

      if (change) {
        const newValue = change.newValue || {};
        const diff = Object(_tools_mobxCompare__WEBPACK_IMPORTED_MODULE_5__["default"])(self.options, newValue);
        self.patchOptions(diff);
      }
    }
  };

  return {
    getSnapshot() {
      return JSON.parse(JSON.stringify(self.options));
    },

    save() {
      return oneLimit(() => {
        return Object(_tools_storageSet__WEBPACK_IMPORTED_MODULE_3__["default"])({
          options: self.getSnapshot()
        }, 'sync');
      });
    },

    exportZip() {
      return Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(15)]).then(__webpack_require__.t.bind(null, /*! jszip */ 445, 7)).then(({
        default: JSZip
      }) => {
        return Promise.all([Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_2__["default"])(null, 'local'), Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_2__["default"])(null, 'sync')]).then(([localStorage, syncStorage]) => {
          const zip = new JSZip();
          Object.entries({
            local: localStorage,
            sync: syncStorage
          }).forEach(([type, storage]) => {
            const folder = zip.folder(type);
            Object.entries(storage).forEach(([key, value]) => {
              folder.file(key + '.json', JSON.stringify(value));
            });
          });
          return zip.generateAsync({
            type: "blob",
            compression: 'DEFLATE',
            compressionOptions: {
              level: 9
            }
          });
        });
      }).then(blob => {
        const nowDate = new Date();
        let date = nowDate.getDate();

        if (date < 10) {
          date = `0${date}`;
        }

        let month = nowDate.getMonth() + 1;

        if (month < 10) {
          month = `0${month}`;
        }

        const year = nowDate.getFullYear();
        Object(_tools_downloadBlob__WEBPACK_IMPORTED_MODULE_4__["default"])(blob, `tms-backup-${year}-${month}-${date}.zip`);
      });
    },

    importZip() {
      return Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(15)]).then(__webpack_require__.t.bind(null, /*! jszip */ 445, 7)).then(({
        default: JSZip
      }) => {
        return selectFile().then(file => {
          return JSZip.loadAsync(file).then(zip => {
            const typeStorage = {
              local: {},
              sync: {}
            };
            const promiseList = [];
            zip.forEach((path, zipEntry) => {
              if (zipEntry.dir) return;
              const m = /^(?:(.+)\/)?([^\/]+)\.json$/.exec(zipEntry.name);

              if (m) {
                const [, type = 'local', key] = m;

                if (!typeStorage[type]) {
                  logger.error('Storage type is not found!', zipEntry.name);
                  return;
                }

                const promise = zip.file(path).async("string").then(value => {
                  try {
                    typeStorage[type][key] = JSON.parse(value);
                  } catch (err) {
                    logger.error('Read file error!', path, err);
                  }
                });
                promiseList.push(promise);
              } else {
                logger.error('Math key name error!', zipEntry.name);
              }
            });
            return Promise.all(promiseList).then(() => {
              return Promise.all([Object(_tools_storageSet__WEBPACK_IMPORTED_MODULE_3__["default"])(typeStorage.local, 'local'), Object(_tools_storageSet__WEBPACK_IMPORTED_MODULE_3__["default"])(typeStorage.sync, 'sync')]);
            });
          });
        }).catch(err => {
          logger.error('Read file error', err);
          alert('Read file error! ' + err.message);
        });
      });
    },

    afterCreate() {
      chrome.storage.onChanged.addListener(storageChangeListener);
    },

    beforeDestroy() {
      chrome.storage.onChanged.removeListener(storageChangeListener);
    }

  };
});

const selectFile = () => {
  return new Promise(resolve => {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', e => {
      const file = e.target.files[0];
      resolve(file);
    });
    input.click();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OptionsStore);

/***/ }),
/* 5 */
/*!*********************************************************************!*\
  !*** ./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js ***!
  \*********************************************************************/
/*! exports provided: addDisposer, addMiddleware, applyAction, applyPatch, applySnapshot, cast, castFlowReturn, castToReferenceSnapshot, castToSnapshot, clone, createActionTrackingMiddleware, createActionTrackingMiddleware2, decorate, destroy, detach, escapeJsonPath, flow, getChildType, getEnv, getIdentifier, getLivelinessChecking, getMembers, getNodeId, getParent, getParentOfType, getPath, getPathParts, getPropertyMembers, getRelativePath, getRoot, getRunningActionContext, getSnapshot, getType, hasParent, hasParentOfType, isActionContextChildOf, isActionContextThisOrChildOf, isAlive, isArrayType, isFrozenType, isIdentifierType, isLateType, isLiteralType, isMapType, isModelType, isOptionalType, isPrimitiveType, isProtected, isReferenceType, isRefinementType, isRoot, isStateTreeNode, isType, isUnionType, isValidReference, joinJsonPath, onAction, onPatch, onSnapshot, process, protect, recordActions, recordPatches, resolveIdentifier, resolvePath, setLivelinessChecking, setLivelynessChecking, splitJsonPath, tryReference, tryResolve, typecheck, types, unescapeJsonPath, unprotect, walk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDisposer", function() { return addDisposer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMiddleware", function() { return addMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAction", function() { return applyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatch", function() { return applyPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applySnapshot", function() { return applySnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castFlowReturn", function() { return castFlowReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castToReferenceSnapshot", function() { return castToReferenceSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castToSnapshot", function() { return castToSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActionTrackingMiddleware", function() { return createActionTrackingMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActionTrackingMiddleware2", function() { return createActionTrackingMiddleware2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeJsonPath", function() { return escapeJsonPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildType", function() { return getChildType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdentifier", function() { return getIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLivelinessChecking", function() { return getLivelinessChecking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembers", function() { return getMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeId", function() { return getNodeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentOfType", function() { return getParentOfType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPath", function() { return getPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathParts", function() { return getPathParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyMembers", function() { return getPropertyMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativePath", function() { return getRelativePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoot", function() { return getRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunningActionContext", function() { return getRunningActionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSnapshot", function() { return getSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasParent", function() { return hasParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasParentOfType", function() { return hasParentOfType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActionContextChildOf", function() { return isActionContextChildOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActionContextThisOrChildOf", function() { return isActionContextThisOrChildOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlive", function() { return isAlive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayType", function() { return isArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFrozenType", function() { return isFrozenType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdentifierType", function() { return isIdentifierType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLateType", function() { return isLateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLiteralType", function() { return isLiteralType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapType", function() { return isMapType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModelType", function() { return isModelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOptionalType", function() { return isOptionalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitiveType", function() { return isPrimitiveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProtected", function() { return isProtected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReferenceType", function() { return isReferenceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRefinementType", function() { return isRefinementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRoot", function() { return isRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStateTreeNode", function() { return isStateTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return isUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidReference", function() { return isValidReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinJsonPath", function() { return joinJsonPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAction", function() { return onAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPatch", function() { return onPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSnapshot", function() { return onSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protect", function() { return protect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordActions", function() { return recordActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordPatches", function() { return recordPatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveIdentifier", function() { return resolveIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return resolvePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLivelinessChecking", function() { return setLivelinessChecking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLivelynessChecking", function() { return setLivelynessChecking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitJsonPath", function() { return splitJsonPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryReference", function() { return tryReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryResolve", function() { return tryResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typecheck", function() { return typecheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescapeJsonPath", function() { return unescapeJsonPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unprotect", function() { return unprotect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return walk; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ 1);


var livelinessChecking = "warn";
/**
 * Defines what MST should do when running into reads / writes to objects that have died.
 * By default it will print a warning.
 * Use the `"error"` option to easy debugging to see where the error was thrown and when the offending read / write took place
 *
 * @param mode `"warn"`, `"error"` or `"ignore"`
 */
function setLivelinessChecking(mode) {
    livelinessChecking = mode;
}
/**
 * Returns the current liveliness checking mode.
 *
 * @returns `"warn"`, `"error"` or `"ignore"`
 */
function getLivelinessChecking() {
    return livelinessChecking;
}
/**
 * @deprecated use setLivelinessChecking instead
 * @hidden
 *
 * Defines what MST should do when running into reads / writes to objects that have died.
 * By default it will print a warning.
 * Use the `"error"` option to easy debugging to see where the error was thrown and when the offending read / write took place
 *
 * @param mode `"warn"`, `"error"` or `"ignore"`
 */
function setLivelynessChecking(mode) {
    setLivelinessChecking(mode);
}

/**
 * @internal
 * @hidden
 */
var Hook;
(function (Hook) {
    Hook["afterCreate"] = "afterCreate";
    Hook["afterAttach"] = "afterAttach";
    Hook["afterCreationFinalization"] = "afterCreationFinalization";
    Hook["beforeDetach"] = "beforeDetach";
    Hook["beforeDestroy"] = "beforeDestroy";
})(Hook || (Hook = {}));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/**
 * Returns the _actual_ type of the given tree node. (Or throws)
 *
 * @param object
 * @returns
 */
function getType(object) {
    assertIsStateTreeNode(object, 1);
    return getStateTreeNode(object).type;
}
/**
 * Returns the _declared_ type of the given sub property of an object, array or map.
 * In the case of arrays and maps the property name is optional and will be ignored.
 *
 * Example:
 * ```ts
 * const Box = types.model({ x: 0, y: 0 })
 * const box = Box.create()
 *
 * console.log(getChildType(box, "x").name) // 'number'
 * ```
 *
 * @param object
 * @param propertyName
 * @returns
 */
function getChildType(object, propertyName) {
    assertIsStateTreeNode(object, 1);
    return getStateTreeNode(object).getChildType(propertyName);
}
/**
 * Registers a function that will be invoked for each mutation that is applied to the provided model instance, or to any of its children.
 * See [patches](https://github.com/mobxjs/mobx-state-tree#patches) for more details. onPatch events are emitted immediately and will not await the end of a transaction.
 * Patches can be used to deep observe a model tree.
 *
 * @param target the model instance from which to receive patches
 * @param callback the callback that is invoked for each patch. The reversePatch is a patch that would actually undo the emitted patch
 * @returns function to remove the listener
 */
function onPatch(target, callback) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsFunction(callback, 2);
    return getStateTreeNode(target).onPatch(callback);
}
/**
 * Registers a function that is invoked whenever a new snapshot for the given model instance is available.
 * The listener will only be fire at the end of the current MobX (trans)action.
 * See [snapshots](https://github.com/mobxjs/mobx-state-tree#snapshots) for more details.
 *
 * @param target
 * @param callback
 * @returns
 */
function onSnapshot(target, callback) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsFunction(callback, 2);
    return getStateTreeNode(target).onSnapshot(callback);
}
/**
 * Applies a JSON-patch to the given model instance or bails out if the patch couldn't be applied
 * See [patches](https://github.com/mobxjs/mobx-state-tree#patches) for more details.
 *
 * Can apply a single past, or an array of patches.
 *
 * @param target
 * @param patch
 * @returns
 */
function applyPatch(target, patch) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertArg(patch, function (p) { return typeof p === "object"; }, "object or array", 2);
    getStateTreeNode(target).applyPatches(asArray(patch));
}
/**
 * Small abstraction around `onPatch` and `applyPatch`, attaches a patch listener to a tree and records all the patches.
 * Returns an recorder object with the following signature:
 *
 * Example:
 * ```ts
 * export interface IPatchRecorder {
 *      // the recorded patches
 *      patches: IJsonPatch[]
 *      // the inverse of the recorded patches
 *      inversePatches: IJsonPatch[]
 *      // true if currently recording
 *      recording: boolean
 *      // stop recording patches
 *      stop(): void
 *      // resume recording patches
 *      resume(): void
 *      // apply all the recorded patches on the given target (the original subject if omitted)
 *      replay(target?: IAnyStateTreeNode): void
 *      // reverse apply the recorded patches on the given target  (the original subject if omitted)
 *      // stops the recorder if not already stopped
 *      undo(): void
 * }
 * ```
 *
 * The optional filter function allows to skip recording certain patches.
 *
 * @param subject
 * @param filter
 * @returns
 */
function recordPatches(subject, filter) {
    // check all arguments
    assertIsStateTreeNode(subject, 1);
    var data = {
        patches: [],
        reversedInversePatches: []
    };
    // we will generate the immutable copy of patches on demand for public consumption
    var publicData = {};
    var disposer;
    var recorder = {
        get recording() {
            return !!disposer;
        },
        get patches() {
            if (!publicData.patches) {
                publicData.patches = data.patches.slice();
            }
            return publicData.patches;
        },
        get reversedInversePatches() {
            if (!publicData.reversedInversePatches) {
                publicData.reversedInversePatches = data.reversedInversePatches.slice();
            }
            return publicData.reversedInversePatches;
        },
        get inversePatches() {
            if (!publicData.inversePatches) {
                publicData.inversePatches = data.reversedInversePatches.slice().reverse();
            }
            return publicData.inversePatches;
        },
        stop: function () {
            if (disposer) {
                disposer();
                disposer = undefined;
            }
        },
        resume: function () {
            if (disposer)
                return;
            disposer = onPatch(subject, function (patch, inversePatch) {
                // skip patches that are asked to be filtered if there's a filter in place
                if (filter && !filter(patch, inversePatch, getRunningActionContext())) {
                    return;
                }
                data.patches.push(patch);
                data.reversedInversePatches.unshift(inversePatch);
                // mark immutable public patches as dirty
                publicData.patches = undefined;
                publicData.inversePatches = undefined;
                publicData.reversedInversePatches = undefined;
            });
        },
        replay: function (target) {
            applyPatch(target || subject, data.patches);
        },
        undo: function (target) {
            applyPatch(target || subject, data.reversedInversePatches);
        }
    };
    recorder.resume();
    return recorder;
}
/**
 * The inverse of `unprotect`.
 *
 * @param target
 */
function protect(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    if (!node.isRoot)
        throw fail$1("`protect` can only be invoked on root nodes");
    node.isProtectionEnabled = true;
}
/**
 * By default it is not allowed to directly modify a model. Models can only be modified through actions.
 * However, in some cases you don't care about the advantages (like replayability, traceability, etc) this yields.
 * For example because you are building a PoC or don't have any middleware attached to your tree.
 *
 * In that case you can disable this protection by calling `unprotect` on the root of your tree.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *     done: false
 * }).actions(self => ({
 *     toggle() {
 *         self.done = !self.done
 *     }
 * }))
 *
 * const todo = Todo.create()
 * todo.done = true // throws!
 * todo.toggle() // OK
 * unprotect(todo)
 * todo.done = false // OK
 * ```
 */
function unprotect(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    if (!node.isRoot)
        throw fail$1("`unprotect` can only be invoked on root nodes");
    node.isProtectionEnabled = false;
}
/**
 * Returns true if the object is in protected mode, @see protect
 */
function isProtected(target) {
    return getStateTreeNode(target).isProtected;
}
/**
 * Applies a snapshot to a given model instances. Patch and snapshot listeners will be invoked as usual.
 *
 * @param target
 * @param snapshot
 * @returns
 */
function applySnapshot(target, snapshot) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).applySnapshot(snapshot);
}
/**
 * Calculates a snapshot from the given model instance. The snapshot will always reflect the latest state but use
 * structural sharing where possible. Doesn't require MobX transactions to be completed.
 *
 * @param target
 * @param applyPostProcess If true (the default) then postProcessSnapshot gets applied.
 * @returns
 */
function getSnapshot(target, applyPostProcess) {
    if (applyPostProcess === void 0) { applyPostProcess = true; }
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    if (applyPostProcess)
        return node.snapshot;
    return freeze(node.type.getSnapshot(node, false));
}
/**
 * Given a model instance, returns `true` if the object has a parent, that is, is part of another object, map or array.
 *
 * @param target
 * @param depth How far should we look upward? 1 by default.
 * @returns
 */
function hasParent(target, depth) {
    if (depth === void 0) { depth = 1; }
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsNumber(depth, 2, 0);
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (--depth === 0)
            return true;
        parent = parent.parent;
    }
    return false;
}
/**
 * Returns the immediate parent of this object, or throws.
 *
 * Note that the immediate parent can be either an object, map or array, and
 * doesn't necessarily refer to the parent model.
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired.
 *
 * @param target
 * @param depth How far should we look upward? 1 by default.
 * @returns
 */
function getParent(target, depth) {
    if (depth === void 0) { depth = 1; }
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsNumber(depth, 2, 0);
    var d = depth;
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (--d === 0)
            return parent.storedValue;
        parent = parent.parent;
    }
    throw fail$1("Failed to find the parent of " + getStateTreeNode(target) + " at depth " + depth);
}
/**
 * Given a model instance, returns `true` if the object has a parent of given type, that is, is part of another object, map or array
 *
 * @param target
 * @param type
 * @returns
 */
function hasParentOfType(target, type) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsType(type, 2);
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (type.is(parent.storedValue))
            return true;
        parent = parent.parent;
    }
    return false;
}
/**
 * Returns the target's parent of a given type, or throws.
 *
 * @param target
 * @param type
 * @returns
 */
function getParentOfType(target, type) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsType(type, 2);
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (type.is(parent.storedValue))
            return parent.storedValue;
        parent = parent.parent;
    }
    throw fail$1("Failed to find the parent of " + getStateTreeNode(target) + " of a given type");
}
/**
 * Given an object in a model tree, returns the root object of that tree.
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired.
 *
 * @param target
 * @returns
 */
function getRoot(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).root.storedValue;
}
/**
 * Returns the path of the given object in the model tree
 *
 * @param target
 * @returns
 */
function getPath(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).path;
}
/**
 * Returns the path of the given object as unescaped string array.
 *
 * @param target
 * @returns
 */
function getPathParts(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return splitJsonPath(getStateTreeNode(target).path);
}
/**
 * Returns true if the given object is the root of a model tree.
 *
 * @param target
 * @returns
 */
function isRoot(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).isRoot;
}
/**
 * Resolves a path relatively to a given object.
 * Returns undefined if no value can be found.
 *
 * @param target
 * @param path escaped json path
 * @returns
 */
function resolvePath(target, path) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsString(path, 2);
    var node = resolveNodeByPath(getStateTreeNode(target), path);
    return node ? node.value : undefined;
}
/**
 * Resolves a model instance given a root target, the type and the identifier you are searching for.
 * Returns undefined if no value can be found.
 *
 * @param type
 * @param target
 * @param identifier
 * @returns
 */
function resolveIdentifier(type, target, identifier) {
    // check all arguments
    assertIsType(type, 1);
    assertIsStateTreeNode(target, 2);
    assertIsValidIdentifier(identifier, 3);
    var node = getStateTreeNode(target).root.identifierCache.resolve(type, normalizeIdentifier(identifier));
    return node ? node.value : undefined;
}
/**
 * Returns the identifier of the target node.
 * This is the *string normalized* identifier, which might not match the type of the identifier attribute
 *
 * @param target
 * @returns
 */
function getIdentifier(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).identifier;
}
/**
 * Tests if a reference is valid (pointing to an existing node and optionally if alive) and returns such reference if it the check passes,
 * else it returns undefined.
 *
 * @param getter Function to access the reference.
 * @param checkIfAlive true to also make sure the referenced node is alive (default), false to skip this check.
 * @returns
 */
function tryReference(getter, checkIfAlive) {
    if (checkIfAlive === void 0) { checkIfAlive = true; }
    try {
        var node = getter();
        if (node === undefined || node === null) {
            return undefined;
        }
        else if (isStateTreeNode(node)) {
            if (!checkIfAlive) {
                return node;
            }
            else {
                return isAlive(node) ? node : undefined;
            }
        }
        else {
            throw fail$1("The reference to be checked is not one of node, null or undefined");
        }
    }
    catch (e) {
        if (e instanceof InvalidReferenceError) {
            return undefined;
        }
        throw e;
    }
}
/**
 * Tests if a reference is valid (pointing to an existing node and optionally if alive) and returns if the check passes or not.
 *
 * @param getter Function to access the reference.
 * @param checkIfAlive true to also make sure the referenced node is alive (default), false to skip this check.
 * @returns
 */
function isValidReference(getter, checkIfAlive) {
    if (checkIfAlive === void 0) { checkIfAlive = true; }
    try {
        var node = getter();
        if (node === undefined || node === null) {
            return false;
        }
        else if (isStateTreeNode(node)) {
            return checkIfAlive ? isAlive(node) : true;
        }
        else {
            throw fail$1("The reference to be checked is not one of node, null or undefined");
        }
    }
    catch (e) {
        if (e instanceof InvalidReferenceError) {
            return false;
        }
        throw e;
    }
}
/**
 * Try to resolve a given path relative to a given node.
 *
 * @param target
 * @param path
 * @returns
 */
function tryResolve(target, path) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsString(path, 2);
    var node = resolveNodeByPath(getStateTreeNode(target), path, false);
    if (node === undefined)
        return undefined;
    try {
        return node.value;
    }
    catch (e) {
        // For what ever reason not resolvable (e.g. totally not existing path, or value that cannot be fetched)
        // see test / issue: 'try resolve doesn't work #686'
        return undefined;
    }
}
/**
 * Given two state tree nodes that are part of the same tree,
 * returns the shortest jsonpath needed to navigate from the one to the other
 *
 * @param base
 * @param target
 * @returns
 */
function getRelativePath(base, target) {
    // check all arguments
    assertIsStateTreeNode(base, 1);
    assertIsStateTreeNode(target, 2);
    return getRelativePathBetweenNodes(getStateTreeNode(base), getStateTreeNode(target));
}
/**
 * Returns a deep copy of the given state tree node as new tree.
 * Short hand for `snapshot(x) = getType(x).create(getSnapshot(x))`
 *
 * _Tip: clone will create a literal copy, including the same identifiers. To modify identifiers etc during cloning, don't use clone but take a snapshot of the tree, modify it, and create new instance_
 *
 * @param source
 * @param keepEnvironment indicates whether the clone should inherit the same environment (`true`, the default), or not have an environment (`false`). If an object is passed in as second argument, that will act as the environment for the cloned tree.
 * @returns
 */
function clone(source, keepEnvironment) {
    if (keepEnvironment === void 0) { keepEnvironment = true; }
    // check all arguments
    assertIsStateTreeNode(source, 1);
    var node = getStateTreeNode(source);
    return node.type.create(node.snapshot, keepEnvironment === true
        ? node.root.environment
        : keepEnvironment === false
            ? undefined
            : keepEnvironment); // it's an object or something else
}
/**
 * Removes a model element from the state tree, and let it live on as a new state tree
 */
function detach(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    getStateTreeNode(target).detach();
    return target;
}
/**
 * Removes a model element from the state tree, and mark it as end-of-life; the element should not be used anymore
 */
function destroy(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    if (node.isRoot)
        node.die();
    else
        node.parent.removeChild(node.subpath);
}
/**
 * Returns true if the given state tree node is not killed yet.
 * This means that the node is still a part of a tree, and that `destroy`
 * has not been called. If a node is not alive anymore, the only thing one can do with it
 * is requesting it's last path and snapshot
 *
 * @param target
 * @returns
 */
function isAlive(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).observableIsAlive;
}
/**
 * Use this utility to register a function that should be called whenever the
 * targeted state tree node is destroyed. This is a useful alternative to managing
 * cleanup methods yourself using the `beforeDestroy` hook.
 *
 * This methods returns the same disposer that was passed as argument.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   title: types.string
 * }).actions(self => ({
 *   afterCreate() {
 *     const autoSaveDisposer = reaction(
 *       () => getSnapshot(self),
 *       snapshot => sendSnapshotToServerSomehow(snapshot)
 *     )
 *     // stop sending updates to server if this
 *     // instance is destroyed
 *     addDisposer(self, autoSaveDisposer)
 *   }
 * }))
 * ```
 *
 * @param target
 * @param disposer
 * @returns The same disposer that was passed as argument
 */
function addDisposer(target, disposer) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsFunction(disposer, 2);
    var node = getStateTreeNode(target);
    node.addDisposer(disposer);
    return disposer;
}
/**
 * Returns the environment of the current state tree. For more info on environments,
 * see [Dependency injection](https://github.com/mobxjs/mobx-state-tree#dependency-injection)
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired
 *
 * Returns an empty environment if the tree wasn't initialized with an environment
 *
 * @param target
 * @returns
 */
function getEnv(target) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    var env = node.root.environment;
    if (!env)
        return EMPTY_OBJECT;
    return env;
}
/**
 * Performs a depth first walk through a tree.
 */
function walk(target, processor) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertIsFunction(processor, 2);
    var node = getStateTreeNode(target);
    // tslint:disable-next-line:no_unused-variable
    node.getChildren().forEach(function (child) {
        if (isStateTreeNode(child.storedValue))
            walk(child.storedValue, processor);
    });
    processor(node.storedValue);
}
/**
 * Returns a reflection of the model type properties and name for either a model type or model node.
 *
 * @param typeOrNode
 * @returns
 */
function getPropertyMembers(typeOrNode) {
    var type;
    if (isStateTreeNode(typeOrNode)) {
        type = getType(typeOrNode);
    }
    else {
        type = typeOrNode;
    }
    assertArg(type, function (t) { return isModelType(t); }, "model type or model instance", 1);
    return {
        name: type.name,
        properties: __assign({}, type.properties)
    };
}
/**
 * Returns a reflection of the model node, including name, properties, views, volatile and actions.
 *
 * @param target
 * @returns
 */
function getMembers(target) {
    var type = getStateTreeNode(target).type;
    var reflected = __assign({}, getPropertyMembers(type), { actions: [], volatile: [], views: [] });
    var props = Object.getOwnPropertyNames(target);
    props.forEach(function (key) {
        if (key in reflected.properties)
            return;
        var descriptor = Object.getOwnPropertyDescriptor(target, key);
        if (descriptor.get) {
            if (Object(mobx__WEBPACK_IMPORTED_MODULE_0__["isComputedProp"])(target, key))
                reflected.views.push(key);
            else
                reflected.volatile.push(key);
            return;
        }
        if (descriptor.value._isMSTAction === true)
            reflected.actions.push(key);
        else if (Object(mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableProp"])(target, key))
            reflected.volatile.push(key);
        else
            reflected.views.push(key);
    });
    return reflected;
}
/**
 * Casts a node snapshot or instance type to an instance type so it can be assigned to a type instance.
 * Note that this is just a cast for the type system, this is, it won't actually convert a snapshot to an instance,
 * but just fool typescript into thinking so.
 * Either way, casting when outside an assignation operation won't compile.
 *
 * Example:
 * ```ts
 * const ModelA = types.model({
 *   n: types.number
 * }).actions(self => ({
 *   setN(aNumber: number) {
 *     self.n = aNumber
 *   }
 * }))
 *
 * const ModelB = types.model({
 *   innerModel: ModelA
 * }).actions(self => ({
 *   someAction() {
 *     // this will allow the compiler to assign a snapshot to the property
 *     self.innerModel = cast({ a: 5 })
 *   }
 * }))
 * ```
 *
 * @param snapshotOrInstance Snapshot or instance
 * @returns The same object casted as an instance
 */
function cast(snapshotOrInstance) {
    return snapshotOrInstance;
}
/**
 * Casts a node instance type to an snapshot type so it can be assigned to a type snapshot (e.g. to be used inside a create call).
 * Note that this is just a cast for the type system, this is, it won't actually convert an instance to a snapshot,
 * but just fool typescript into thinking so.
 *
 * Example:
 * ```ts
 * const ModelA = types.model({
 *   n: types.number
 * }).actions(self => ({
 *   setN(aNumber: number) {
 *     self.n = aNumber
 *   }
 * }))
 *
 * const ModelB = types.model({
 *   innerModel: ModelA
 * })
 *
 * const a = ModelA.create({ n: 5 });
 * // this will allow the compiler to use a model as if it were a snapshot
 * const b = ModelB.create({ innerModel: castToSnapshot(a)})
 * ```
 *
 * @param snapshotOrInstance Snapshot or instance
 * @returns The same object casted as an input (creation) snapshot
 */
function castToSnapshot(snapshotOrInstance) {
    return snapshotOrInstance;
}
/**
 * Casts a node instance type to a reference snapshot type so it can be assigned to a refernence snapshot (e.g. to be used inside a create call).
 * Note that this is just a cast for the type system, this is, it won't actually convert an instance to a refererence snapshot,
 * but just fool typescript into thinking so.
 *
 * Example:
 * ```ts
 * const ModelA = types.model({
 *   id: types.identifier,
 *   n: types.number
 * }).actions(self => ({
 *   setN(aNumber: number) {
 *     self.n = aNumber
 *   }
 * }))
 *
 * const ModelB = types.model({
 *   refA: types.reference(ModelA)
 * })
 *
 * const a = ModelA.create({ id: 'someId', n: 5 });
 * // this will allow the compiler to use a model as if it were a reference snapshot
 * const b = ModelB.create({ refA: castToReference(a)})
 * ```
 *
 * @param instance Instance
 * @returns The same object casted as an reference snapshot (string or number)
 */
function castToReferenceSnapshot(instance) {
    return instance;
}
/**
 * Returns the unique node id (not to be confused with the instance identifier) for a
 * given instance.
 * This id is a number that is unique for each instance.
 *
 * @export
 * @param target
 * @returns
 */
function getNodeId(target) {
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).nodeId;
}

/**
 * @internal
 * @hidden
 */
var BaseNode = /** @class */ (function () {
    function BaseNode(type, parent, subpath, environment) {
        this.type = type;
        this.environment = environment;
        this._state = NodeLifeCycle.INITIALIZING;
        this.environment = environment;
        this.baseSetParent(parent, subpath);
    }
    Object.defineProperty(BaseNode.prototype, "subpath", {
        get: function () {
            return this._subpath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "subpathUponDeath", {
        get: function () {
            return this._subpathUponDeath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "pathUponDeath", {
        get: function () {
            return this._pathUponDeath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "value", {
        get: function () {
            return this.type.getValue(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (val) {
            var wasAlive = this.isAlive;
            this._state = val;
            var isAlive = this.isAlive;
            if (this.aliveAtom && wasAlive !== isAlive) {
                this.aliveAtom.reportChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseNode.prototype.fireInternalHook = function (name) {
        if (this._hookSubscribers) {
            this._hookSubscribers.emit(name, this, name);
        }
    };
    BaseNode.prototype.registerHook = function (hook, hookHandler) {
        if (!this._hookSubscribers) {
            this._hookSubscribers = new EventHandlers();
        }
        return this._hookSubscribers.register(hook, hookHandler);
    };
    Object.defineProperty(BaseNode.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    BaseNode.prototype.baseSetParent = function (parent, subpath) {
        this._parent = parent;
        this._subpath = subpath;
        this._escapedSubpath = undefined; // regenerate when needed
        if (this.pathAtom) {
            this.pathAtom.reportChanged();
        }
    };
    Object.defineProperty(BaseNode.prototype, "path", {
        /*
         * Returns (escaped) path representation as string
         */
        get: function () {
            return this.getEscapedPath(true);
        },
        enumerable: true,
        configurable: true
    });
    BaseNode.prototype.getEscapedPath = function (reportObserved) {
        if (reportObserved) {
            if (!this.pathAtom) {
                this.pathAtom = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("path");
            }
            this.pathAtom.reportObserved();
        }
        if (!this.parent)
            return "";
        // regenerate escaped subpath if needed
        if (this._escapedSubpath === undefined) {
            this._escapedSubpath = !this._subpath ? "" : escapeJsonPath(this._subpath);
        }
        return this.parent.getEscapedPath(reportObserved) + "/" + this._escapedSubpath;
    };
    Object.defineProperty(BaseNode.prototype, "isRoot", {
        get: function () {
            return this.parent === null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "isAlive", {
        get: function () {
            return this.state !== NodeLifeCycle.DEAD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "isDetaching", {
        get: function () {
            return this.state === NodeLifeCycle.DETACHING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseNode.prototype, "observableIsAlive", {
        get: function () {
            if (!this.aliveAtom) {
                this.aliveAtom = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("alive");
            }
            this.aliveAtom.reportObserved();
            return this.isAlive;
        },
        enumerable: true,
        configurable: true
    });
    BaseNode.prototype.baseFinalizeCreation = function (whenFinalized) {
        if (devMode()) {
            if (!this.isAlive) {
                // istanbul ignore next
                throw fail("assertion failed: cannot finalize the creation of a node that is already dead");
            }
        }
        // goal: afterCreate hooks runs depth-first. After attach runs parent first, so on afterAttach the parent has completed already
        if (this.state === NodeLifeCycle.CREATED) {
            if (this.parent) {
                if (this.parent.state !== NodeLifeCycle.FINALIZED) {
                    // parent not ready yet, postpone
                    return;
                }
                this.fireHook(Hook.afterAttach);
            }
            this.state = NodeLifeCycle.FINALIZED;
            if (whenFinalized) {
                whenFinalized();
            }
        }
    };
    BaseNode.prototype.baseFinalizeDeath = function () {
        if (this._hookSubscribers) {
            this._hookSubscribers.clearAll();
        }
        this._subpathUponDeath = this._subpath;
        this._pathUponDeath = this.getEscapedPath(false);
        this.baseSetParent(null, "");
        this.state = NodeLifeCycle.DEAD;
    };
    BaseNode.prototype.baseAboutToDie = function () {
        this.fireHook(Hook.beforeDestroy);
    };
    return BaseNode;
}());

/**
 * @internal
 * @hidden
 */
var ScalarNode = /** @class */ (function (_super) {
    __extends(ScalarNode, _super);
    function ScalarNode(simpleType, parent, subpath, environment, initialSnapshot) {
        var _this = _super.call(this, simpleType, parent, subpath, environment) || this;
        try {
            _this.storedValue = simpleType.createNewInstance(initialSnapshot);
        }
        catch (e) {
            // short-cut to die the instance, to avoid the snapshot computed starting to throw...
            _this.state = NodeLifeCycle.DEAD;
            throw e;
        }
        _this.state = NodeLifeCycle.CREATED;
        // for scalar nodes there's no point in firing this event since it would fire on the constructor, before
        // anybody can actually register for/listen to it
        // this.fireHook(Hook.AfterCreate)
        _this.finalizeCreation();
        return _this;
    }
    Object.defineProperty(ScalarNode.prototype, "root", {
        get: function () {
            // future optimization: store root ref in the node and maintain it
            if (!this.parent)
                throw fail$1("This scalar node is not part of a tree");
            return this.parent.root;
        },
        enumerable: true,
        configurable: true
    });
    ScalarNode.prototype.setParent = function (newParent, subpath) {
        var parentChanged = this.parent !== newParent;
        var subpathChanged = this.subpath !== subpath;
        if (!parentChanged && !subpathChanged) {
            return;
        }
        if (devMode()) {
            if (!subpath) {
                // istanbul ignore next
                throw fail$1("assertion failed: subpath expected");
            }
            if (!newParent) {
                // istanbul ignore next
                throw fail$1("assertion failed: parent expected");
            }
            if (parentChanged) {
                // istanbul ignore next
                throw fail$1("assertion failed: scalar nodes cannot change their parent");
            }
        }
        this.environment = undefined; // use parent's
        this.baseSetParent(this.parent, subpath);
    };
    Object.defineProperty(ScalarNode.prototype, "snapshot", {
        get: function () {
            return freeze(this.getSnapshot());
        },
        enumerable: true,
        configurable: true
    });
    ScalarNode.prototype.getSnapshot = function () {
        return this.type.getSnapshot(this);
    };
    ScalarNode.prototype.toString = function () {
        var path = (this.isAlive ? this.path : this.pathUponDeath) || "<root>";
        return this.type.name + "@" + path + (this.isAlive ? "" : " [dead]");
    };
    ScalarNode.prototype.die = function () {
        if (!this.isAlive || this.state === NodeLifeCycle.DETACHING)
            return;
        this.aboutToDie();
        this.finalizeDeath();
    };
    ScalarNode.prototype.finalizeCreation = function () {
        this.baseFinalizeCreation();
    };
    ScalarNode.prototype.aboutToDie = function () {
        this.baseAboutToDie();
    };
    ScalarNode.prototype.finalizeDeath = function () {
        this.baseFinalizeDeath();
    };
    ScalarNode.prototype.fireHook = function (name) {
        this.fireInternalHook(name);
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
    ], ScalarNode.prototype, "die", null);
    return ScalarNode;
}(BaseNode));

var nextNodeId = 1;
var snapshotReactionOptions = {
    onError: function (e) {
        throw e;
    }
};
/**
 * @internal
 * @hidden
 */
var ObjectNode = /** @class */ (function (_super) {
    __extends(ObjectNode, _super);
    function ObjectNode(complexType, parent, subpath, environment, initialValue) {
        var _this = _super.call(this, complexType, parent, subpath, environment) || this;
        _this.nodeId = ++nextNodeId;
        _this.isProtectionEnabled = true;
        _this._autoUnbox = true; // unboxing is disabled when reading child nodes
        _this._isRunningAction = false; // only relevant for root
        _this._hasSnapshotReaction = false;
        _this._observableInstanceState = 0 /* UNINITIALIZED */;
        _this._cachedInitialSnapshotCreated = false;
        _this.unbox = _this.unbox.bind(_this);
        _this._initialSnapshot = freeze(initialValue);
        _this.identifierAttribute = complexType.identifierAttribute;
        if (!parent) {
            _this.identifierCache = new IdentifierCache();
        }
        _this._childNodes = complexType.initializeChildNodes(_this, _this._initialSnapshot);
        // identifier can not be changed during lifecycle of a node
        // so we safely can read it from initial snapshot
        _this.identifier = null;
        _this.unnormalizedIdentifier = null;
        if (_this.identifierAttribute && _this._initialSnapshot) {
            var id = _this._initialSnapshot[_this.identifierAttribute];
            if (id === undefined) {
                // try with the actual node if not (for optional identifiers)
                var childNode = _this._childNodes[_this.identifierAttribute];
                if (childNode) {
                    id = childNode.value;
                }
            }
            if (typeof id !== "string" && typeof id !== "number") {
                throw fail$1("Instance identifier '" + _this.identifierAttribute + "' for type '" + _this.type.name + "' must be a string or a number");
            }
            // normalize internal identifier to string
            _this.identifier = normalizeIdentifier(id);
            _this.unnormalizedIdentifier = id;
        }
        if (!parent) {
            _this.identifierCache.addNodeToCache(_this);
        }
        else {
            parent.root.identifierCache.addNodeToCache(_this);
        }
        return _this;
    }
    ObjectNode.prototype.applyPatches = function (patches) {
        this.createObservableInstanceIfNeeded();
        this._applyPatches(patches);
    };
    ObjectNode.prototype.applySnapshot = function (snapshot) {
        this.createObservableInstanceIfNeeded();
        this._applySnapshot(snapshot);
    };
    ObjectNode.prototype.createObservableInstanceIfNeeded = function () {
        var e_1, _a;
        if (this._observableInstanceState !== 0 /* UNINITIALIZED */) {
            return;
        }
        if (devMode()) {
            if (this.state !== NodeLifeCycle.INITIALIZING) {
                // istanbul ignore next
                throw fail$1("assertion failed: the creation of the observable instance must be done on the initializing phase");
            }
        }
        this._observableInstanceState = 1 /* CREATING */;
        // make sure the parent chain is created as well
        // array with parent chain from parent to child
        var parentChain = [];
        var parent = this.parent;
        // for performance reasons we never go back further than the most direct
        // uninitialized parent
        // this is done to avoid traversing the whole tree to the root when using
        // the same reference again
        while (parent &&
            parent._observableInstanceState === 0 /* UNINITIALIZED */) {
            parentChain.unshift(parent);
            parent = parent.parent;
        }
        try {
            // initialize the uninitialized parent chain from parent to child
            for (var parentChain_1 = __values(parentChain), parentChain_1_1 = parentChain_1.next(); !parentChain_1_1.done; parentChain_1_1 = parentChain_1.next()) {
                var p = parentChain_1_1.value;
                p.createObservableInstanceIfNeeded();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (parentChain_1_1 && !parentChain_1_1.done && (_a = parentChain_1.return)) _a.call(parentChain_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var type = this.type;
        try {
            this.storedValue = type.createNewInstance(this._childNodes);
            this.preboot();
            this._isRunningAction = true;
            type.finalizeNewInstance(this, this.storedValue);
        }
        catch (e) {
            // short-cut to die the instance, to avoid the snapshot computed starting to throw...
            this.state = NodeLifeCycle.DEAD;
            throw e;
        }
        finally {
            this._isRunningAction = false;
        }
        this._observableInstanceState = 2 /* CREATED */;
        // NOTE: we need to touch snapshot, because non-observable
        // "_observableInstanceState" field was touched
        invalidateComputed(this, "snapshot");
        if (this.isRoot)
            this._addSnapshotReaction();
        this._childNodes = EMPTY_OBJECT;
        this.state = NodeLifeCycle.CREATED;
        this.fireHook(Hook.afterCreate);
        this.finalizeCreation();
    };
    Object.defineProperty(ObjectNode.prototype, "root", {
        get: function () {
            var parent = this.parent;
            return parent ? parent.root : this;
        },
        enumerable: true,
        configurable: true
    });
    ObjectNode.prototype.clearParent = function () {
        if (!this.parent)
            return;
        // detach if attached
        this.fireHook(Hook.beforeDetach);
        var previousState = this.state;
        this.state = NodeLifeCycle.DETACHING;
        var root = this.root;
        var newEnv = root.environment;
        var newIdCache = root.identifierCache.splitCache(this);
        try {
            this.parent.removeChild(this.subpath);
            this.baseSetParent(null, "");
            this.environment = newEnv;
            this.identifierCache = newIdCache;
        }
        finally {
            this.state = previousState;
        }
    };
    ObjectNode.prototype.setParent = function (newParent, subpath) {
        var parentChanged = newParent !== this.parent;
        var subpathChanged = subpath !== this.subpath;
        if (!parentChanged && !subpathChanged) {
            return;
        }
        if (devMode()) {
            if (!subpath) {
                // istanbul ignore next
                throw fail$1("assertion failed: subpath expected");
            }
            if (!newParent) {
                // istanbul ignore next
                throw fail$1("assertion failed: new parent expected");
            }
            if (this.parent && parentChanged) {
                throw fail$1("A node cannot exists twice in the state tree. Failed to add " + this + " to path '" + newParent.path + "/" + subpath + "'.");
            }
            if (!this.parent && newParent.root === this) {
                throw fail$1("A state tree is not allowed to contain itself. Cannot assign " + this + " to path '" + newParent.path + "/" + subpath + "'");
            }
            if (!this.parent &&
                !!this.environment &&
                this.environment !== newParent.root.environment) {
                throw fail$1("A state tree cannot be made part of another state tree as long as their environments are different.");
            }
        }
        if (parentChanged) {
            // attach to new parent
            this.environment = undefined; // will use root's
            newParent.root.identifierCache.mergeCache(this);
            this.baseSetParent(newParent, subpath);
            this.fireHook(Hook.afterAttach);
        }
        else if (subpathChanged) {
            // moving to a new subpath on the same parent
            this.baseSetParent(this.parent, subpath);
        }
    };
    ObjectNode.prototype.fireHook = function (name) {
        var _this = this;
        this.fireInternalHook(name);
        var fn = this.storedValue &&
            typeof this.storedValue === "object" &&
            this.storedValue[name];
        if (typeof fn === "function") {
            // we check for it to allow old mobx peer dependencies that don't have the method to work (even when still bugged)
            if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChangesInsideComputed"]) {
                Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChangesInsideComputed"])(function () {
                    fn.apply(_this.storedValue);
                });
            }
            else {
                fn.apply(this.storedValue);
            }
        }
    };
    Object.defineProperty(ObjectNode.prototype, "snapshot", {
        // advantage of using computed for a snapshot is that nicely respects transactions etc.
        get: function () {
            return freeze(this.getSnapshot());
        },
        enumerable: true,
        configurable: true
    });
    // NOTE: we use this method to get snapshot without creating @computed overhead
    ObjectNode.prototype.getSnapshot = function () {
        if (!this.isAlive)
            return this._snapshotUponDeath;
        return this._observableInstanceState === 2 /* CREATED */
            ? this._getActualSnapshot()
            : this._getCachedInitialSnapshot();
    };
    ObjectNode.prototype._getActualSnapshot = function () {
        return this.type.getSnapshot(this);
    };
    ObjectNode.prototype._getCachedInitialSnapshot = function () {
        if (!this._cachedInitialSnapshotCreated) {
            var type = this.type;
            var childNodes = this._childNodes;
            var snapshot = this._initialSnapshot;
            this._cachedInitialSnapshot = type.processInitialSnapshot(childNodes, snapshot);
            this._cachedInitialSnapshotCreated = true;
        }
        return this._cachedInitialSnapshot;
    };
    ObjectNode.prototype.isRunningAction = function () {
        if (this._isRunningAction)
            return true;
        if (this.isRoot)
            return false;
        return this.parent.isRunningAction();
    };
    ObjectNode.prototype.assertAlive = function (context) {
        var livelinessChecking = getLivelinessChecking();
        if (!this.isAlive && livelinessChecking !== "ignore") {
            var error = this._getAssertAliveError(context);
            switch (livelinessChecking) {
                case "error":
                    throw fail$1(error);
                case "warn":
                    warnError(error);
            }
        }
    };
    ObjectNode.prototype._getAssertAliveError = function (context) {
        var escapedPath = this.getEscapedPath(false) || this.pathUponDeath || "";
        var subpath = (context.subpath && escapeJsonPath(context.subpath)) || "";
        var actionContext = context.actionContext || getCurrentActionContext();
        // try to use a real action context if possible since it includes the action name
        if (actionContext && actionContext.type !== "action" && actionContext.parentActionEvent) {
            actionContext = actionContext.parentActionEvent;
        }
        var actionFullPath = "";
        if (actionContext && actionContext.name != null) {
            // try to use the context, and if it not available use the node one
            var actionPath = (actionContext && actionContext.context && getPath(actionContext.context)) ||
                escapedPath;
            actionFullPath = actionPath + "." + actionContext.name + "()";
        }
        return "You are trying to read or write to an object that is no longer part of a state tree. (Object type: '" + this.type.name + "', Path upon death: '" + escapedPath + "', Subpath: '" + subpath + "', Action: '" + actionFullPath + "'). Either detach nodes first, or don't use objects after removing / replacing them in the tree.";
    };
    ObjectNode.prototype.getChildNode = function (subpath) {
        this.assertAlive({
            subpath: subpath
        });
        this._autoUnbox = false;
        try {
            return this._observableInstanceState === 2 /* CREATED */
                ? this.type.getChildNode(this, subpath)
                : this._childNodes[subpath];
        }
        finally {
            this._autoUnbox = true;
        }
    };
    ObjectNode.prototype.getChildren = function () {
        this.assertAlive(EMPTY_OBJECT);
        this._autoUnbox = false;
        try {
            return this._observableInstanceState === 2 /* CREATED */
                ? this.type.getChildren(this)
                : convertChildNodesToArray(this._childNodes);
        }
        finally {
            this._autoUnbox = true;
        }
    };
    ObjectNode.prototype.getChildType = function (propertyName) {
        return this.type.getChildType(propertyName);
    };
    Object.defineProperty(ObjectNode.prototype, "isProtected", {
        get: function () {
            return this.root.isProtectionEnabled;
        },
        enumerable: true,
        configurable: true
    });
    ObjectNode.prototype.assertWritable = function (context) {
        this.assertAlive(context);
        if (!this.isRunningAction() && this.isProtected) {
            throw fail$1("Cannot modify '" + this + "', the object is protected and can only be modified by using an action.");
        }
    };
    ObjectNode.prototype.removeChild = function (subpath) {
        this.type.removeChild(this, subpath);
    };
    // bound on the constructor
    ObjectNode.prototype.unbox = function (childNode) {
        if (!childNode)
            return childNode;
        this.assertAlive({
            subpath: childNode.subpath || childNode.subpathUponDeath
        });
        return this._autoUnbox ? childNode.value : childNode;
    };
    ObjectNode.prototype.toString = function () {
        var path = (this.isAlive ? this.path : this.pathUponDeath) || "<root>";
        var identifier = this.identifier ? "(id: " + this.identifier + ")" : "";
        return this.type.name + "@" + path + identifier + (this.isAlive ? "" : " [dead]");
    };
    ObjectNode.prototype.finalizeCreation = function () {
        var _this = this;
        this.baseFinalizeCreation(function () {
            var e_2, _a;
            try {
                for (var _b = __values(_this.getChildren()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.finalizeCreation();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.fireInternalHook(Hook.afterCreationFinalization);
        });
    };
    ObjectNode.prototype.detach = function () {
        if (!this.isAlive)
            throw fail$1("Error while detaching, node is not alive.");
        this.clearParent();
    };
    ObjectNode.prototype.preboot = function () {
        var self = this;
        this._applyPatches = createActionInvoker(this.storedValue, "@APPLY_PATCHES", function (patches) {
            patches.forEach(function (patch) {
                var parts = splitJsonPath(patch.path);
                var node = resolveNodeByPathParts(self, parts.slice(0, -1));
                node.applyPatchLocally(parts[parts.length - 1], patch);
            });
        });
        this._applySnapshot = createActionInvoker(this.storedValue, "@APPLY_SNAPSHOT", function (snapshot) {
            // if the snapshot is the same as the current one, avoid performing a reconcile
            if (snapshot === self.snapshot)
                return;
            // else, apply it by calling the type logic
            return self.type.applySnapshot(self, snapshot);
        });
        addHiddenFinalProp(this.storedValue, "$treenode", this);
        addHiddenFinalProp(this.storedValue, "toJSON", toJSON);
    };
    ObjectNode.prototype.die = function () {
        if (!this.isAlive || this.state === NodeLifeCycle.DETACHING)
            return;
        this.aboutToDie();
        this.finalizeDeath();
    };
    ObjectNode.prototype.aboutToDie = function () {
        if (this._observableInstanceState === 0 /* UNINITIALIZED */) {
            return;
        }
        this.getChildren().forEach(function (node) {
            node.aboutToDie();
        });
        // beforeDestroy should run before the disposers since else we could end up in a situation where
        // a disposer added with addDisposer at this stage (beforeDestroy) is actually never released
        this.baseAboutToDie();
        this._internalEventsEmit("dispose" /* Dispose */);
        this._internalEventsClear("dispose" /* Dispose */);
    };
    ObjectNode.prototype.finalizeDeath = function () {
        // invariant: not called directly but from "die"
        this.getChildren().forEach(function (node) {
            node.finalizeDeath();
        });
        this.root.identifierCache.notifyDied(this);
        // "kill" the computed prop and just store the last snapshot
        var snapshot = this.snapshot;
        this._snapshotUponDeath = snapshot;
        this._internalEventsClearAll();
        this.baseFinalizeDeath();
    };
    ObjectNode.prototype.onSnapshot = function (onChange) {
        this._addSnapshotReaction();
        return this._internalEventsRegister("snapshot" /* Snapshot */, onChange);
    };
    ObjectNode.prototype.emitSnapshot = function (snapshot) {
        this._internalEventsEmit("snapshot" /* Snapshot */, snapshot);
    };
    ObjectNode.prototype.onPatch = function (handler) {
        return this._internalEventsRegister("patch" /* Patch */, handler);
    };
    ObjectNode.prototype.emitPatch = function (basePatch, source) {
        if (this._internalEventsHasSubscribers("patch" /* Patch */)) {
            var localizedPatch = extend({}, basePatch, {
                path: source.path.substr(this.path.length) + "/" + basePatch.path // calculate the relative path of the patch
            });
            var _a = __read(splitPatch(localizedPatch), 2), patch = _a[0], reversePatch = _a[1];
            this._internalEventsEmit("patch" /* Patch */, patch, reversePatch);
        }
        if (this.parent)
            this.parent.emitPatch(basePatch, source);
    };
    ObjectNode.prototype.hasDisposer = function (disposer) {
        return this._internalEventsHas("dispose" /* Dispose */, disposer);
    };
    ObjectNode.prototype.addDisposer = function (disposer) {
        if (!this.hasDisposer(disposer)) {
            this._internalEventsRegister("dispose" /* Dispose */, disposer, true);
            return;
        }
        throw fail$1("cannot add a disposer when it is already registered for execution");
    };
    ObjectNode.prototype.removeDisposer = function (disposer) {
        if (!this._internalEventsHas("dispose" /* Dispose */, disposer)) {
            throw fail$1("cannot remove a disposer which was never registered for execution");
        }
        this._internalEventsUnregister("dispose" /* Dispose */, disposer);
    };
    ObjectNode.prototype.removeMiddleware = function (middleware) {
        if (this.middlewares) {
            var index = this.middlewares.indexOf(middleware);
            if (index >= 0) {
                this.middlewares.splice(index, 1);
            }
        }
    };
    ObjectNode.prototype.addMiddleWare = function (handler, includeHooks) {
        var _this = this;
        if (includeHooks === void 0) { includeHooks = true; }
        var middleware = { handler: handler, includeHooks: includeHooks };
        if (!this.middlewares)
            this.middlewares = [middleware];
        else
            this.middlewares.push(middleware);
        return function () {
            _this.removeMiddleware(middleware);
        };
    };
    ObjectNode.prototype.applyPatchLocally = function (subpath, patch) {
        this.assertWritable({
            subpath: subpath
        });
        this.createObservableInstanceIfNeeded();
        this.type.applyPatchLocally(this, subpath, patch);
    };
    ObjectNode.prototype._addSnapshotReaction = function () {
        var _this = this;
        if (!this._hasSnapshotReaction) {
            var snapshotDisposer = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["reaction"])(function () { return _this.snapshot; }, function (snapshot) { return _this.emitSnapshot(snapshot); }, snapshotReactionOptions);
            this.addDisposer(snapshotDisposer);
            this._hasSnapshotReaction = true;
        }
    };
    // we proxy the methods to avoid creating an EventHandlers instance when it is not needed
    ObjectNode.prototype._internalEventsHasSubscribers = function (event) {
        return !!this._internalEvents && this._internalEvents.hasSubscribers(event);
    };
    ObjectNode.prototype._internalEventsRegister = function (event, eventHandler, atTheBeginning) {
        if (atTheBeginning === void 0) { atTheBeginning = false; }
        if (!this._internalEvents) {
            this._internalEvents = new EventHandlers();
        }
        return this._internalEvents.register(event, eventHandler, atTheBeginning);
    };
    ObjectNode.prototype._internalEventsHas = function (event, eventHandler) {
        return !!this._internalEvents && this._internalEvents.has(event, eventHandler);
    };
    ObjectNode.prototype._internalEventsUnregister = function (event, eventHandler) {
        if (this._internalEvents) {
            this._internalEvents.unregister(event, eventHandler);
        }
    };
    ObjectNode.prototype._internalEventsEmit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._internalEvents) {
            (_a = this._internalEvents).emit.apply(_a, __spread([event], args));
        }
    };
    ObjectNode.prototype._internalEventsClear = function (event) {
        if (this._internalEvents) {
            this._internalEvents.clear(event);
        }
    };
    ObjectNode.prototype._internalEventsClearAll = function () {
        if (this._internalEvents) {
            this._internalEvents.clearAll();
        }
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
    ], ObjectNode.prototype, "createObservableInstanceIfNeeded", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
    ], ObjectNode.prototype, "snapshot", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
    ], ObjectNode.prototype, "detach", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
    ], ObjectNode.prototype, "die", null);
    return ObjectNode;
}(BaseNode));

/**
 * @internal
 * @hidden
 */
var TypeFlags;
(function (TypeFlags) {
    TypeFlags[TypeFlags["String"] = 1] = "String";
    TypeFlags[TypeFlags["Number"] = 2] = "Number";
    TypeFlags[TypeFlags["Boolean"] = 4] = "Boolean";
    TypeFlags[TypeFlags["Date"] = 8] = "Date";
    TypeFlags[TypeFlags["Literal"] = 16] = "Literal";
    TypeFlags[TypeFlags["Array"] = 32] = "Array";
    TypeFlags[TypeFlags["Map"] = 64] = "Map";
    TypeFlags[TypeFlags["Object"] = 128] = "Object";
    TypeFlags[TypeFlags["Frozen"] = 256] = "Frozen";
    TypeFlags[TypeFlags["Optional"] = 512] = "Optional";
    TypeFlags[TypeFlags["Reference"] = 1024] = "Reference";
    TypeFlags[TypeFlags["Identifier"] = 2048] = "Identifier";
    TypeFlags[TypeFlags["Late"] = 4096] = "Late";
    TypeFlags[TypeFlags["Refinement"] = 8192] = "Refinement";
    TypeFlags[TypeFlags["Union"] = 16384] = "Union";
    TypeFlags[TypeFlags["Null"] = 32768] = "Null";
    TypeFlags[TypeFlags["Undefined"] = 65536] = "Undefined";
    TypeFlags[TypeFlags["Integer"] = 131072] = "Integer";
    TypeFlags[TypeFlags["Custom"] = 262144] = "Custom";
    TypeFlags[TypeFlags["SnapshotProcessor"] = 524288] = "SnapshotProcessor";
})(TypeFlags || (TypeFlags = {}));
/**
 * @internal
 * @hidden
 */
var cannotDetermineSubtype = "cannotDetermine";
/**
 * A base type produces a MST node (Node in the state tree)
 *
 * @internal
 * @hidden
 */
var BaseType = /** @class */ (function () {
    function BaseType(name) {
        this.isType = true;
        this.name = name;
    }
    BaseType.prototype.create = function (snapshot, environment) {
        typecheckInternal(this, snapshot);
        return this.instantiate(null, "", environment, snapshot).value;
    };
    BaseType.prototype.getSnapshot = function (node, applyPostProcess) {
        // istanbul ignore next
        throw fail$1("unimplemented method");
    };
    BaseType.prototype.isAssignableFrom = function (type) {
        return type === this;
    };
    BaseType.prototype.validate = function (value, context) {
        var node = getStateTreeNodeSafe(value);
        if (node) {
            var valueType = getType(value);
            return this.isAssignableFrom(valueType)
                ? typeCheckSuccess()
                : typeCheckFailure(context, value);
            // it is tempting to compare snapshots, but in that case we should always clone on assignments...
        }
        return this.isValidSnapshot(value, context);
    };
    BaseType.prototype.is = function (thing) {
        return this.validate(thing, [{ path: "", type: this }]).length === 0;
    };
    Object.defineProperty(BaseType.prototype, "Type", {
        get: function () {
            // istanbul ignore next
            throw fail$1("Factory.Type should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.Type`");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseType.prototype, "TypeWithoutSTN", {
        get: function () {
            // istanbul ignore next
            throw fail$1("Factory.TypeWithoutSTN should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.TypeWithoutSTN`");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseType.prototype, "SnapshotType", {
        get: function () {
            // istanbul ignore next
            throw fail$1("Factory.SnapshotType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.SnapshotType`");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseType.prototype, "CreationType", {
        get: function () {
            // istanbul ignore next
            throw fail$1("Factory.CreationType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.CreationType`");
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
    ], BaseType.prototype, "create", null);
    return BaseType;
}());
/**
 * A complex type produces a MST node (Node in the state tree)
 *
 * @internal
 * @hidden
 */
var ComplexType = /** @class */ (function (_super) {
    __extends(ComplexType, _super);
    function ComplexType(name) {
        return _super.call(this, name) || this;
    }
    ComplexType.prototype.create = function (snapshot, environment) {
        if (snapshot === void 0) { snapshot = this.getDefaultSnapshot(); }
        return _super.prototype.create.call(this, snapshot, environment);
    };
    ComplexType.prototype.getValue = function (node) {
        node.createObservableInstanceIfNeeded();
        return node.storedValue;
    };
    ComplexType.prototype.tryToReconcileNode = function (current, newValue) {
        if (current.isDetaching)
            return false;
        if (current.snapshot === newValue) {
            // newValue is the current snapshot of the node, noop
            return true;
        }
        if (isStateTreeNode(newValue) && getStateTreeNode(newValue) === current) {
            // the current node is the same as the new one
            return true;
        }
        if (current.type === this &&
            isMutable(newValue) &&
            !isStateTreeNode(newValue) &&
            (!current.identifierAttribute ||
                current.identifier ===
                    normalizeIdentifier(newValue[current.identifierAttribute]))) {
            // the newValue has no node, so can be treated like a snapshot
            // we can reconcile
            current.applySnapshot(newValue);
            return true;
        }
        return false;
    };
    ComplexType.prototype.reconcile = function (current, newValue, parent, subpath) {
        var nodeReconciled = this.tryToReconcileNode(current, newValue);
        if (nodeReconciled) {
            current.setParent(parent, subpath);
            return current;
        }
        // current node cannot be recycled in any way
        current.die(); // noop if detaching
        // attempt to reuse the new one
        if (isStateTreeNode(newValue) && this.isAssignableFrom(getType(newValue))) {
            // newValue is a Node as well, move it here..
            var newNode = getStateTreeNode(newValue);
            newNode.setParent(parent, subpath);
            return newNode;
        }
        // nothing to do, we have to create a new node
        return this.instantiate(parent, subpath, undefined, newValue);
    };
    ComplexType.prototype.getSubTypes = function () {
        return null;
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
    ], ComplexType.prototype, "create", null);
    return ComplexType;
}(BaseType));
/**
 * @internal
 * @hidden
 */
var SimpleType = /** @class */ (function (_super) {
    __extends(SimpleType, _super);
    function SimpleType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleType.prototype.createNewInstance = function (snapshot) {
        return snapshot;
    };
    SimpleType.prototype.getValue = function (node) {
        // if we ever find a case where scalar nodes can be accessed without iterating through its parent
        // uncomment this to make sure the parent chain is created when this is accessed
        // if (node.parent) {
        //     node.parent.createObservableInstanceIfNeeded()
        // }
        return node.storedValue;
    };
    SimpleType.prototype.getSnapshot = function (node) {
        return node.storedValue;
    };
    SimpleType.prototype.reconcile = function (current, newValue, parent, subpath) {
        // reconcile only if type and value are still the same, and only if the node is not detaching
        if (!current.isDetaching && current.type === this && current.storedValue === newValue) {
            return current;
        }
        var res = this.instantiate(parent, subpath, undefined, newValue);
        current.die(); // noop if detaching
        return res;
    };
    SimpleType.prototype.getSubTypes = function () {
        return null;
    };
    return SimpleType;
}(BaseType));
/**
 * Returns if a given value represents a type.
 *
 * @param value Value to check.
 * @returns `true` if the value is a type.
 */
function isType(value) {
    return typeof value === "object" && value && value.isType === true;
}
/**
 * @internal
 * @hidden
 */
function assertIsType(type, argNumber) {
    assertArg(type, isType, "mobx-state-tree type", argNumber);
}

var runningActions = new Map();
/**
 * Note: Consider migrating to `createActionTrackingMiddleware2`, it is easier to use.
 *
 * Convenience utility to create action based middleware that supports async processes more easily.
 * All hooks are called for both synchronous and asynchronous actions. Except that either `onSuccess` or `onFail` is called
 *
 * The create middleware tracks the process of an action (assuming it passes the `filter`).
 * `onResume` can return any value, which will be passed as second argument to any other hook. This makes it possible to keep state during a process.
 *
 * See the `atomic` middleware for an example
 *
 * @param hooks
 * @returns
 */
function createActionTrackingMiddleware(hooks) {
    return function actionTrackingMiddleware(call, next, abort) {
        switch (call.type) {
            case "action": {
                if (!hooks.filter || hooks.filter(call) === true) {
                    var context = hooks.onStart(call);
                    hooks.onResume(call, context);
                    runningActions.set(call.id, {
                        call: call,
                        context: context,
                        async: false
                    });
                    try {
                        var res = next(call);
                        hooks.onSuspend(call, context);
                        if (runningActions.get(call.id).async === false) {
                            runningActions.delete(call.id);
                            hooks.onSuccess(call, context, res);
                        }
                        return res;
                    }
                    catch (e) {
                        runningActions.delete(call.id);
                        hooks.onFail(call, context, e);
                        throw e;
                    }
                }
                else {
                    return next(call);
                }
            }
            case "flow_spawn": {
                var root = runningActions.get(call.rootId);
                root.async = true;
                return next(call);
            }
            case "flow_resume":
            case "flow_resume_error": {
                var root = runningActions.get(call.rootId);
                hooks.onResume(call, root.context);
                try {
                    return next(call);
                }
                finally {
                    hooks.onSuspend(call, root.context);
                }
            }
            case "flow_throw": {
                var root = runningActions.get(call.rootId);
                runningActions.delete(call.rootId);
                hooks.onFail(call, root.context, call.args[0]);
                return next(call);
            }
            case "flow_return": {
                var root = runningActions.get(call.rootId);
                runningActions.delete(call.rootId);
                hooks.onSuccess(call, root.context, call.args[0]);
                return next(call);
            }
        }
    };
}

var RunningAction = /** @class */ (function () {
    function RunningAction(hooks, call) {
        this.hooks = hooks;
        this.call = call;
        this.flowsPending = 0;
        this.running = true;
        if (hooks) {
            hooks.onStart(call);
        }
    }
    RunningAction.prototype.finish = function (error) {
        if (this.running) {
            this.running = false;
            if (this.hooks) {
                this.hooks.onFinish(this.call, error);
            }
        }
    };
    RunningAction.prototype.incFlowsPending = function () {
        this.flowsPending++;
    };
    RunningAction.prototype.decFlowsPending = function () {
        this.flowsPending--;
    };
    Object.defineProperty(RunningAction.prototype, "hasFlowsPending", {
        get: function () {
            return this.flowsPending > 0;
        },
        enumerable: true,
        configurable: true
    });
    return RunningAction;
}());
/**
 * Convenience utility to create action based middleware that supports async processes more easily.
 * The flow is like this:
 * - for each action: if filter passes -> `onStart` -> (inner actions recursively) -> `onFinish`
 *
 * Example: if we had an action `a` that called inside an action `b1`, then `b2` the flow would be:
 * - `filter(a)`
 * - `onStart(a)`
 *   - `filter(b1)`
 *   - `onStart(b1)`
 *   - `onFinish(b1)`
 *   - `filter(b2)`
 *   - `onStart(b2)`
 *   - `onFinish(b2)`
 * - `onFinish(a)`
 *
 * The flow is the same no matter if the actions are sync or async.
 *
 * See the `atomic` middleware for an example
 *
 * @param hooks
 * @returns
 */
function createActionTrackingMiddleware2(middlewareHooks) {
    var runningActions = new WeakMap();
    return function actionTrackingMiddleware(call, next) {
        // find parentRunningAction
        var parentRunningAction = call.parentActionEvent
            ? runningActions.get(call.parentActionEvent)
            : undefined;
        if (call.type === "action") {
            var newCall = __assign({}, call, { 
                // make a shallow copy of the parent action env
                env: parentRunningAction && parentRunningAction.call.env, parentCall: parentRunningAction && parentRunningAction.call });
            var passesFilter = !middlewareHooks.filter || middlewareHooks.filter(newCall);
            var hooks = passesFilter ? middlewareHooks : undefined;
            var runningAction = new RunningAction(hooks, newCall);
            runningActions.set(call, runningAction);
            var res = void 0;
            try {
                res = next(call);
            }
            catch (e) {
                runningAction.finish(e);
                throw e;
            }
            if (!runningAction.hasFlowsPending) {
                // sync action finished
                runningAction.finish();
            }
            return res;
        }
        else {
            if (!parentRunningAction) {
                return next(call);
            }
            switch (call.type) {
                case "flow_spawn": {
                    parentRunningAction.incFlowsPending();
                    return next(call);
                }
                case "flow_resume":
                case "flow_resume_error": {
                    return next(call);
                }
                case "flow_throw": {
                    var error = call.args[0];
                    try {
                        return next(call);
                    }
                    finally {
                        parentRunningAction.decFlowsPending();
                        if (!parentRunningAction.hasFlowsPending) {
                            parentRunningAction.finish(error);
                        }
                    }
                }
                case "flow_return": {
                    try {
                        return next(call);
                    }
                    finally {
                        parentRunningAction.decFlowsPending();
                        if (!parentRunningAction.hasFlowsPending) {
                            parentRunningAction.finish();
                        }
                    }
                }
            }
        }
    };
}

function serializeArgument(node, actionName, index, arg) {
    if (arg instanceof Date)
        return { $MST_DATE: arg.getTime() };
    if (isPrimitive(arg))
        return arg;
    // We should not serialize MST nodes, even if we can, because we don't know if the receiving party can handle a raw snapshot instead of an
    // MST type instance. So if one wants to serialize a MST node that was pass in, either explitly pass: 1: an id, 2: a (relative) path, 3: a snapshot
    if (isStateTreeNode(arg))
        return serializeTheUnserializable("[MSTNode: " + getType(arg).name + "]");
    if (typeof arg === "function")
        return serializeTheUnserializable("[function]");
    if (typeof arg === "object" && !isPlainObject(arg) && !isArray(arg))
        return serializeTheUnserializable("[object " + ((arg && arg.constructor && arg.constructor.name) ||
            "Complex Object") + "]");
    try {
        // Check if serializable, cycle free etc...
        // MWE: there must be a better way....
        JSON.stringify(arg); // or throws
        return arg;
    }
    catch (e) {
        return serializeTheUnserializable("" + e);
    }
}
function deserializeArgument(adm, value) {
    if (value && typeof value === "object" && "$MST_DATE" in value)
        return new Date(value["$MST_DATE"]);
    return value;
}
function serializeTheUnserializable(baseType) {
    return {
        $MST_UNSERIALIZABLE: true,
        type: baseType
    };
}
/**
 * Applies an action or a series of actions in a single MobX transaction.
 * Does not return any value
 * Takes an action description as produced by the `onAction` middleware.
 *
 * @param target
 * @param actions
 */
function applyAction(target, actions) {
    // check all arguments
    assertIsStateTreeNode(target, 1);
    assertArg(actions, function (a) { return typeof a === "object"; }, "object or array", 2);
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
        asArray(actions).forEach(function (action) { return baseApplyAction(target, action); });
    });
}
function baseApplyAction(target, action) {
    var resolvedTarget = tryResolve(target, action.path || "");
    if (!resolvedTarget)
        throw fail$1("Invalid action path: " + (action.path || ""));
    var node = getStateTreeNode(resolvedTarget);
    // Reserved functions
    if (action.name === "@APPLY_PATCHES") {
        return applyPatch.call(null, resolvedTarget, action.args[0]);
    }
    if (action.name === "@APPLY_SNAPSHOT") {
        return applySnapshot.call(null, resolvedTarget, action.args[0]);
    }
    if (!(typeof resolvedTarget[action.name] === "function"))
        throw fail$1("Action '" + action.name + "' does not exist in '" + node.path + "'");
    return resolvedTarget[action.name].apply(resolvedTarget, action.args ? action.args.map(function (v) { return deserializeArgument(node, v); }) : []);
}
/**
 * Small abstraction around `onAction` and `applyAction`, attaches an action listener to a tree and records all the actions emitted.
 * Returns an recorder object with the following signature:
 *
 * Example:
 * ```ts
 * export interface IActionRecorder {
 *      // the recorded actions
 *      actions: ISerializedActionCall[]
 *      // true if currently recording
 *      recording: boolean
 *      // stop recording actions
 *      stop(): void
 *      // resume recording actions
 *      resume(): void
 *      // apply all the recorded actions on the given object
 *      replay(target: IAnyStateTreeNode): void
 * }
 * ```
 *
 * The optional filter function allows to skip recording certain actions.
 *
 * @param subject
 * @returns
 */
function recordActions(subject, filter) {
    // check all arguments
    assertIsStateTreeNode(subject, 1);
    var actions = [];
    var listener = function (call) {
        var recordThis = filter ? filter(call, getRunningActionContext()) : true;
        if (recordThis) {
            actions.push(call);
        }
    };
    var disposer;
    var recorder = {
        actions: actions,
        get recording() {
            return !!disposer;
        },
        stop: function () {
            if (disposer) {
                disposer();
                disposer = undefined;
            }
        },
        resume: function () {
            if (disposer)
                return;
            disposer = onAction(subject, listener);
        },
        replay: function (target) {
            applyAction(target, actions);
        }
    };
    recorder.resume();
    return recorder;
}
/**
 * Registers a function that will be invoked for each action that is called on the provided model instance, or to any of its children.
 * See [actions](https://github.com/mobxjs/mobx-state-tree#actions) for more details. onAction events are emitted only for the outermost called action in the stack.
 * Action can also be intercepted by middleware using addMiddleware to change the function call before it will be run.
 *
 * Not all action arguments might be serializable. For unserializable arguments, a struct like `{ $MST_UNSERIALIZABLE: true, type: "someType" }` will be generated.
 * MST Nodes are considered non-serializable as well (they could be serialized as there snapshot, but it is uncertain whether an replaying party will be able to handle such a non-instantiated snapshot).
 * Rather, when using `onAction` middleware, one should consider in passing arguments which are 1: an id, 2: a (relative) path, or 3: a snapshot. Instead of a real MST node.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.array(Todo)
 * }).actions(self => ({
 *   add(todo) {
 *     self.todos.push(todo);
 *   }
 * }))
 *
 * const s = TodoStore.create({ todos: [] })
 *
 * let disposer = onAction(s, (call) => {
 *   console.log(call);
 * })
 *
 * s.add({ task: "Grab a coffee" })
 * // Logs: { name: "add", path: "", args: [{ task: "Grab a coffee" }] }
 * ```
 *
 * @param target
 * @param listener
 * @param attachAfter (default false) fires the listener *after* the action has executed instead of before.
 * @returns
 */
function onAction(target, listener, attachAfter) {
    if (attachAfter === void 0) { attachAfter = false; }
    // check all arguments
    assertIsStateTreeNode(target, 1);
    if (devMode()) {
        if (!isRoot(target))
            warnError("Warning: Attaching onAction listeners to non root nodes is dangerous: No events will be emitted for actions initiated higher up in the tree.");
        if (!isProtected(target))
            warnError("Warning: Attaching onAction listeners to non protected nodes is dangerous: No events will be emitted for direct modifications without action.");
    }
    return addMiddleware(target, function handler(rawCall, next) {
        if (rawCall.type === "action" && rawCall.id === rawCall.rootId) {
            var sourceNode_1 = getStateTreeNode(rawCall.context);
            var info = {
                name: rawCall.name,
                path: getRelativePathBetweenNodes(getStateTreeNode(target), sourceNode_1),
                args: rawCall.args.map(function (arg, index) {
                    return serializeArgument(sourceNode_1, rawCall.name, index, arg);
                })
            };
            if (attachAfter) {
                var res = next(rawCall);
                listener(info);
                return res;
            }
            else {
                listener(info);
                return next(rawCall);
            }
        }
        else {
            return next(rawCall);
        }
    });
}

var nextActionId = 1;
var currentActionContext;
/**
 * @internal
 * @hidden
 */
function getCurrentActionContext() {
    return currentActionContext;
}
/**
 * @internal
 * @hidden
 */
function getNextActionId() {
    return nextActionId++;
}
// TODO: optimize away entire action context if there is no middleware in tree?
/**
 * @internal
 * @hidden
 */
function runWithActionContext(context, fn) {
    var node = getStateTreeNode(context.context);
    if (context.type === "action") {
        node.assertAlive({
            actionContext: context
        });
    }
    var baseIsRunningAction = node._isRunningAction;
    node._isRunningAction = true;
    var previousContext = currentActionContext;
    currentActionContext = context;
    try {
        return runMiddleWares(node, context, fn);
    }
    finally {
        currentActionContext = previousContext;
        node._isRunningAction = baseIsRunningAction;
    }
}
/**
 * @internal
 * @hidden
 */
function getParentActionContext(parentContext) {
    if (!parentContext)
        return undefined;
    if (parentContext.type === "action")
        return parentContext;
    return parentContext.parentActionEvent;
}
/**
 * @internal
 * @hidden
 */
function createActionInvoker(target, name, fn) {
    var res = function () {
        var id = getNextActionId();
        var parentContext = currentActionContext;
        var parentActionContext = getParentActionContext(parentContext);
        return runWithActionContext({
            type: "action",
            name: name,
            id: id,
            args: argsToArray(arguments),
            context: target,
            tree: getRoot(target),
            rootId: parentContext ? parentContext.rootId : id,
            parentId: parentContext ? parentContext.id : 0,
            allParentIds: parentContext
                ? __spread(parentContext.allParentIds, [parentContext.id]) : [],
            parentEvent: parentContext,
            parentActionEvent: parentActionContext
        }, fn);
    };
    res._isMSTAction = true;
    return res;
}
/**
 * Middleware can be used to intercept any action is invoked on the subtree where it is attached.
 * If a tree is protected (by default), this means that any mutation of the tree will pass through your middleware.
 *
 * For more details, see the [middleware docs](../middleware.md)
 *
 * @param target Node to apply the middleware to.
 * @param middleware Middleware to apply.
 * @returns A callable function to dispose the middleware.
 */
function addMiddleware(target, handler, includeHooks) {
    if (includeHooks === void 0) { includeHooks = true; }
    var node = getStateTreeNode(target);
    if (devMode()) {
        if (!node.isProtectionEnabled) {
            warnError("It is recommended to protect the state tree before attaching action middleware, as otherwise it cannot be guaranteed that all changes are passed through middleware. See `protect`");
        }
    }
    return node.addMiddleWare(handler, includeHooks);
}
/**
 * Binds middleware to a specific action.
 *
 * Example:
 * ```ts
 * type.actions(self => {
 *   function takeA____() {
 *       self.toilet.donate()
 *       self.wipe()
 *       self.wipe()
 *       self.toilet.flush()
 *   }
 *   return {
 *     takeA____: decorate(atomic, takeA____)
 *   }
 * })
 * ```
 *
 * @param handler
 * @param fn
 * @param includeHooks
 * @returns The original function
 */
function decorate(handler, fn, includeHooks) {
    if (includeHooks === void 0) { includeHooks = true; }
    var middleware = { handler: handler, includeHooks: includeHooks };
    fn.$mst_middleware = fn.$mst_middleware || [];
    fn.$mst_middleware.push(middleware);
    return fn;
}
var CollectedMiddlewares = /** @class */ (function () {
    function CollectedMiddlewares(node, fn) {
        this.arrayIndex = 0;
        this.inArrayIndex = 0;
        this.middlewares = [];
        // we just push middleware arrays into an array of arrays to avoid making copies
        if (fn.$mst_middleware) {
            this.middlewares.push(fn.$mst_middleware);
        }
        var n = node;
        // Find all middlewares. Optimization: cache this?
        while (n) {
            if (n.middlewares)
                this.middlewares.push(n.middlewares);
            n = n.parent;
        }
    }
    Object.defineProperty(CollectedMiddlewares.prototype, "isEmpty", {
        get: function () {
            return this.middlewares.length <= 0;
        },
        enumerable: true,
        configurable: true
    });
    CollectedMiddlewares.prototype.getNextMiddleware = function () {
        var array = this.middlewares[this.arrayIndex];
        if (!array)
            return undefined;
        var item = array[this.inArrayIndex++];
        if (!item) {
            this.arrayIndex++;
            this.inArrayIndex = 0;
            return this.getNextMiddleware();
        }
        return item;
    };
    return CollectedMiddlewares;
}());
function runMiddleWares(node, baseCall, originalFn) {
    var middlewares = new CollectedMiddlewares(node, originalFn);
    // Short circuit
    if (middlewares.isEmpty)
        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(originalFn).apply(null, baseCall.args);
    var result = null;
    function runNextMiddleware(call) {
        var middleware = middlewares.getNextMiddleware();
        var handler = middleware && middleware.handler;
        if (!handler) {
            return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(originalFn).apply(null, call.args);
        }
        // skip hooks if asked to
        if (!middleware.includeHooks && Hook[call.name]) {
            return runNextMiddleware(call);
        }
        var nextInvoked = false;
        function next(call2, callback) {
            nextInvoked = true;
            // the result can contain
            // - the non manipulated return value from an action
            // - the non manipulated abort value
            // - one of the above but manipulated through the callback function
            result = runNextMiddleware(call2);
            if (callback) {
                result = callback(result);
            }
        }
        var abortInvoked = false;
        function abort(value) {
            abortInvoked = true;
            // overwrite the result
            // can be manipulated through middlewares earlier in the queue using the callback fn
            result = value;
        }
        handler(call, next, abort);
        if (devMode()) {
            if (!nextInvoked && !abortInvoked) {
                var node2 = getStateTreeNode(call.tree);
                throw fail$1("Neither the next() nor the abort() callback within the middleware " + handler.name + " for the action: \"" + call.name + "\" on the node: " + node2.type.name + " was invoked.");
            }
            else if (nextInvoked && abortInvoked) {
                var node2 = getStateTreeNode(call.tree);
                throw fail$1("The next() and abort() callback within the middleware " + handler.name + " for the action: \"" + call.name + "\" on the node: " + node2.type.name + " were invoked.");
            }
        }
        return result;
    }
    return runNextMiddleware(baseCall);
}

/**
 * Returns the currently executing MST action context, or undefined if none.
 */
function getRunningActionContext() {
    var current = getCurrentActionContext();
    while (current && current.type !== "action") {
        current = current.parentActionEvent;
    }
    return current;
}
function _isActionContextThisOrChildOf(actionContext, sameOrParent, includeSame) {
    var parentId = typeof sameOrParent === "number" ? sameOrParent : sameOrParent.id;
    var current = includeSame
        ? actionContext
        : actionContext.parentActionEvent;
    while (current) {
        if (current.id === parentId) {
            return true;
        }
        current = current.parentActionEvent;
    }
    return false;
}
/**
 * Returns if the given action context is a parent of this action context.
 */
function isActionContextChildOf(actionContext, parent) {
    return _isActionContextThisOrChildOf(actionContext, parent, false);
}
/**
 * Returns if the given action context is this or a parent of this action context.
 */
function isActionContextThisOrChildOf(actionContext, parentOrThis) {
    return _isActionContextThisOrChildOf(actionContext, parentOrThis, true);
}

function safeStringify(value) {
    try {
        return JSON.stringify(value);
    }
    catch (e) {
        // istanbul ignore next
        return "<Unserializable: " + e + ">";
    }
}
/**
 * @internal
 * @hidden
 */
function prettyPrintValue(value) {
    return typeof value === "function"
        ? "<function" + (value.name ? " " + value.name : "") + ">"
        : isStateTreeNode(value)
            ? "<" + value + ">"
            : "`" + safeStringify(value) + "`";
}
function shortenPrintValue(valueInString) {
    return valueInString.length < 280
        ? valueInString
        : valueInString.substring(0, 272) + "......" + valueInString.substring(valueInString.length - 8);
}
function toErrorString(error) {
    var value = error.value;
    var type = error.context[error.context.length - 1].type;
    var fullPath = error.context
        .map(function (_a) {
        var path = _a.path;
        return path;
    })
        .filter(function (path) { return path.length > 0; })
        .join("/");
    var pathPrefix = fullPath.length > 0 ? "at path \"/" + fullPath + "\" " : "";
    var currentTypename = isStateTreeNode(value)
        ? "value of type " + getStateTreeNode(value).type.name + ":"
        : isPrimitive(value)
            ? "value"
            : "snapshot";
    var isSnapshotCompatible = type && isStateTreeNode(value) && type.is(getStateTreeNode(value).snapshot);
    return ("" + pathPrefix + currentTypename + " " + prettyPrintValue(value) + " is not assignable " + (type ? "to type: `" + type.name + "`" : "") +
        (error.message ? " (" + error.message + ")" : "") +
        (type
            ? isPrimitiveType(type) || isPrimitive(value)
                ? "."
                : ", expected an instance of `" + type.name + "` or a snapshot like `" + type.describe() + "` instead." +
                    (isSnapshotCompatible
                        ? " (Note that a snapshot of the provided value is compatible with the targeted type)"
                        : "")
            : "."));
}
/**
 * @internal
 * @hidden
 */
function getContextForPath(context, path, type) {
    return context.concat([{ path: path, type: type }]);
}
/**
 * @internal
 * @hidden
 */
function typeCheckSuccess() {
    return EMPTY_ARRAY;
}
/**
 * @internal
 * @hidden
 */
function typeCheckFailure(context, value, message) {
    return [{ context: context, value: value, message: message }];
}
/**
 * @internal
 * @hidden
 */
function flattenTypeErrors(errors) {
    return errors.reduce(function (a, i) { return a.concat(i); }, []);
}
// TODO; doublecheck: typecheck should only needed to be invoked from: type.create and array / map / value.property will change
/**
 * @internal
 * @hidden
 */
function typecheckInternal(type, value) {
    // if not in dev-mode, do not even try to run typecheck. Everything is developer fault!
    if (devMode()) {
        typecheck(type, value);
    }
}
/**
 * Run's the typechecker for the given type on the given value, which can be a snapshot or an instance.
 * Throws if the given value is not according the provided type specification.
 * Use this if you need typechecks even in a production build (by default all automatic runtime type checks will be skipped in production builds)
 *
 * @param type Type to check against.
 * @param value Value to be checked, either a snapshot or an instance.
 */
function typecheck(type, value) {
    var errors = type.validate(value, [{ path: "", type: type }]);
    if (errors.length > 0) {
        throw fail$1(validationErrorsToString(type, value, errors));
    }
}
function validationErrorsToString(type, value, errors) {
    if (errors.length === 0) {
        return undefined;
    }
    return ("Error while converting " + shortenPrintValue(prettyPrintValue(value)) + " to `" + type.name + "`:\n\n    " + errors.map(toErrorString).join("\n    "));
}

var identifierCacheId = 0;
/**
 * @internal
 * @hidden
 */
var IdentifierCache = /** @class */ (function () {
    function IdentifierCache() {
        this.cacheId = identifierCacheId++;
        // n.b. in cache all identifiers are normalized to strings
        this.cache = mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].map();
        // last time the cache (array) for a given time changed
        // n.b. it is not really the time, but just an integer that gets increased after each modification to the array
        this.lastCacheModificationPerId = mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].map();
    }
    IdentifierCache.prototype.updateLastCacheModificationPerId = function (identifier) {
        var lcm = this.lastCacheModificationPerId.get(identifier);
        // we start at 1 since 0 means no update since cache creation
        this.lastCacheModificationPerId.set(identifier, lcm === undefined ? 1 : lcm + 1);
    };
    IdentifierCache.prototype.getLastCacheModificationPerId = function (identifier) {
        var modificationId = this.lastCacheModificationPerId.get(identifier) || 0;
        return this.cacheId + "-" + modificationId;
    };
    IdentifierCache.prototype.addNodeToCache = function (node, lastCacheUpdate) {
        if (lastCacheUpdate === void 0) { lastCacheUpdate = true; }
        if (node.identifierAttribute) {
            var identifier = node.identifier;
            if (!this.cache.has(identifier)) {
                this.cache.set(identifier, mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].array([], mobxShallow));
            }
            var set = this.cache.get(identifier);
            if (set.indexOf(node) !== -1)
                throw fail$1("Already registered");
            set.push(node);
            if (lastCacheUpdate) {
                this.updateLastCacheModificationPerId(identifier);
            }
        }
    };
    IdentifierCache.prototype.mergeCache = function (node) {
        var _this = this;
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["values"])(node.identifierCache.cache).forEach(function (nodes) {
            return nodes.forEach(function (child) {
                _this.addNodeToCache(child);
            });
        });
    };
    IdentifierCache.prototype.notifyDied = function (node) {
        if (node.identifierAttribute) {
            var id = node.identifier;
            var set = this.cache.get(id);
            if (set) {
                set.remove(node);
                // remove empty sets from cache
                if (!set.length) {
                    this.cache.delete(id);
                }
                this.updateLastCacheModificationPerId(node.identifier);
            }
        }
    };
    IdentifierCache.prototype.splitCache = function (node) {
        var _this = this;
        var res = new IdentifierCache();
        var basePath = node.path;
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["entries"])(this.cache).forEach(function (_a) {
            var _b = __read(_a, 2), id = _b[0], nodes = _b[1];
            var modified = false;
            for (var i = nodes.length - 1; i >= 0; i--) {
                if (nodes[i].path.indexOf(basePath) === 0) {
                    res.addNodeToCache(nodes[i], false); // no need to update lastUpdated since it is a whole new cache
                    nodes.splice(i, 1);
                    modified = true;
                }
            }
            if (modified) {
                _this.updateLastCacheModificationPerId(id);
            }
        });
        return res;
    };
    IdentifierCache.prototype.has = function (type, identifier) {
        var set = this.cache.get(identifier);
        if (!set)
            return false;
        return set.some(function (candidate) { return type.isAssignableFrom(candidate.type); });
    };
    IdentifierCache.prototype.resolve = function (type, identifier) {
        var set = this.cache.get(identifier);
        if (!set)
            return null;
        var matches = set.filter(function (candidate) { return type.isAssignableFrom(candidate.type); });
        switch (matches.length) {
            case 0:
                return null;
            case 1:
                return matches[0];
            default:
                throw fail$1("Cannot resolve a reference to type '" + type.name + "' with id: '" + identifier + "' unambigously, there are multiple candidates: " + matches
                    .map(function (n) { return n.path; })
                    .join(", "));
        }
    };
    return IdentifierCache;
}());

/**
 * @internal
 * @hidden
 */
function createObjectNode(type, parent, subpath, environment, initialValue) {
    var existingNode = getStateTreeNodeSafe(initialValue);
    if (existingNode) {
        if (existingNode.parent) {
            // istanbul ignore next
            throw fail$1("Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" + (parent ? parent.path : "") + "/" + subpath + "', but it lives already at '" + existingNode.path + "'");
        }
        if (parent) {
            existingNode.setParent(parent, subpath);
        }
        // else it already has no parent since it is a pre-requisite
        return existingNode;
    }
    // not a node, a snapshot
    return new ObjectNode(type, parent, subpath, environment, initialValue);
}
/**
 * @internal
 * @hidden
 */
function createScalarNode(type, parent, subpath, environment, initialValue) {
    return new ScalarNode(type, parent, subpath, environment, initialValue);
}
/**
 * @internal
 * @hidden
 */
function isNode(value) {
    return value instanceof ScalarNode || value instanceof ObjectNode;
}

/**
 * @internal
 * @hidden
 */
var NodeLifeCycle;
(function (NodeLifeCycle) {
    NodeLifeCycle[NodeLifeCycle["INITIALIZING"] = 0] = "INITIALIZING";
    NodeLifeCycle[NodeLifeCycle["CREATED"] = 1] = "CREATED";
    NodeLifeCycle[NodeLifeCycle["FINALIZED"] = 2] = "FINALIZED";
    NodeLifeCycle[NodeLifeCycle["DETACHING"] = 3] = "DETACHING";
    NodeLifeCycle[NodeLifeCycle["DEAD"] = 4] = "DEAD"; // no coming back from this one
})(NodeLifeCycle || (NodeLifeCycle = {}));
/**
 * Returns true if the given value is a node in a state tree.
 * More precisely, that is, if the value is an instance of a
 * `types.model`, `types.array` or `types.map`.
 *
 * @param value
 * @returns true if the value is a state tree node.
 */
function isStateTreeNode(value) {
    return !!(value && value.$treenode);
}
/**
 * @internal
 * @hidden
 */
function assertIsStateTreeNode(value, argNumber) {
    assertArg(value, isStateTreeNode, "mobx-state-tree node", argNumber);
}
/**
 * @internal
 * @hidden
 */
function getStateTreeNode(value) {
    if (!isStateTreeNode(value)) {
        // istanbul ignore next
        throw fail$1("Value " + value + " is no MST Node");
    }
    return value.$treenode;
}
/**
 * @internal
 * @hidden
 */
function getStateTreeNodeSafe(value) {
    return (value && value.$treenode) || null;
}
/**
 * @internal
 * @hidden
 */
function toJSON() {
    return getStateTreeNode(this).snapshot;
}
var doubleDot = function (_) { return ".."; };
/**
 * @internal
 * @hidden
 */
function getRelativePathBetweenNodes(base, target) {
    // PRE condition target is (a child of) base!
    if (base.root !== target.root) {
        throw fail$1("Cannot calculate relative path: objects '" + base + "' and '" + target + "' are not part of the same object tree");
    }
    var baseParts = splitJsonPath(base.path);
    var targetParts = splitJsonPath(target.path);
    var common = 0;
    for (; common < baseParts.length; common++) {
        if (baseParts[common] !== targetParts[common])
            break;
    }
    // TODO: assert that no targetParts paths are "..", "." or ""!
    return (baseParts
        .slice(common)
        .map(doubleDot)
        .join("/") + joinJsonPath(targetParts.slice(common)));
}
/**
 * @internal
 * @hidden
 */
function resolveNodeByPath(base, path, failIfResolveFails) {
    if (failIfResolveFails === void 0) { failIfResolveFails = true; }
    return resolveNodeByPathParts(base, splitJsonPath(path), failIfResolveFails);
}
/**
 * @internal
 * @hidden
 */
function resolveNodeByPathParts(base, pathParts, failIfResolveFails) {
    if (failIfResolveFails === void 0) { failIfResolveFails = true; }
    var current = base;
    for (var i = 0; i < pathParts.length; i++) {
        var part = pathParts[i];
        if (part === "..") {
            current = current.parent;
            if (current)
                continue; // not everything has a parent
        }
        else if (part === ".") {
            continue;
        }
        else if (current) {
            if (current instanceof ScalarNode) {
                // check if the value of a scalar resolves to a state tree node (e.g. references)
                // then we can continue resolving...
                try {
                    var value = current.value;
                    if (isStateTreeNode(value)) {
                        current = getStateTreeNode(value);
                        // fall through
                    }
                }
                catch (e) {
                    if (!failIfResolveFails) {
                        return undefined;
                    }
                    throw e;
                }
            }
            if (current instanceof ObjectNode) {
                var subType = current.getChildType(part);
                if (subType) {
                    current = current.getChildNode(part);
                    if (current)
                        continue;
                }
            }
        }
        if (failIfResolveFails)
            throw fail$1("Could not resolve '" + part + "' in path '" + (joinJsonPath(pathParts.slice(0, i)) ||
                "/") + "' while resolving '" + joinJsonPath(pathParts) + "'");
        else
            return undefined;
    }
    return current;
}
/**
 * @internal
 * @hidden
 */
function convertChildNodesToArray(childNodes) {
    if (!childNodes)
        return EMPTY_ARRAY;
    var keys = Object.keys(childNodes);
    if (!keys.length)
        return EMPTY_ARRAY;
    var result = new Array(keys.length);
    keys.forEach(function (key, index) {
        result[index] = childNodes[key];
    });
    return result;
}

// based on: https://github.com/mobxjs/mobx-utils/blob/master/src/async-action.ts
/*
    All contents of this file are deprecated.

    The term `process` has been replaced with `flow` to avoid conflicts with the
    global `process` object.

    Refer to `flow.ts` for any further changes to this implementation.
*/
var DEPRECATION_MESSAGE = "See https://github.com/mobxjs/mobx-state-tree/issues/399 for more information. " +
    "Note that the middleware event types starting with `process` now start with `flow`.";
/**
 * @hidden
 *
 * @deprecated has been renamed to `flow()`.
 * See https://github.com/mobxjs/mobx-state-tree/issues/399 for more information.
 * Note that the middleware event types starting with `process` now start with `flow`.
 *
 * @returns {Promise}
 */
function process$1(asyncAction) {
    deprecated("process", "`process()` has been renamed to `flow()`. " + DEPRECATION_MESSAGE);
    return flow(asyncAction);
}

/**
 * @internal
 * @hidden
 */
var EMPTY_ARRAY = Object.freeze([]);
/**
 * @internal
 * @hidden
 */
var EMPTY_OBJECT = Object.freeze({});
/**
 * @internal
 * @hidden
 */
var mobxShallow = typeof mobx__WEBPACK_IMPORTED_MODULE_0__["$mobx"] === "string" ? { deep: false } : { deep: false, proxy: false };
Object.freeze(mobxShallow);
/**
 * @internal
 * @hidden
 */
function fail$1(message) {
    if (message === void 0) { message = "Illegal state"; }
    return new Error("[mobx-state-tree] " + message);
}
/**
 * @internal
 * @hidden
 */
function identity(_) {
    return _;
}
/**
 * pollyfill (for IE) suggested in MDN:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @internal
 * @hidden
 */
var isInteger = Number.isInteger ||
    function (value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
/**
 * @internal
 * @hidden
 */
function isArray(val) {
    return Array.isArray(val) || Object(mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"])(val);
}
/**
 * @internal
 * @hidden
 */
function asArray(val) {
    if (!val)
        return EMPTY_ARRAY;
    if (isArray(val))
        return val;
    return [val];
}
/**
 * @internal
 * @hidden
 */
function extend(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < b.length; i++) {
        var current = b[i];
        for (var key in current)
            a[key] = current[key];
    }
    return a;
}
/**
 * @internal
 * @hidden
 */
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
/**
 * @internal
 * @hidden
 */
function isMutable(value) {
    return (value !== null &&
        typeof value === "object" &&
        !(value instanceof Date) &&
        !(value instanceof RegExp));
}
/**
 * @internal
 * @hidden
 */
function isPrimitive(value, includeDate) {
    if (includeDate === void 0) { includeDate = true; }
    if (value === null || value === undefined)
        return true;
    if (typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean" ||
        (includeDate && value instanceof Date))
        return true;
    return false;
}
/**
 * @internal
 * @hidden
 * Freeze a value and return it (if not in production)
 */
function freeze(value) {
    if (!devMode())
        return value;
    return isPrimitive(value) || Object(mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"])(value) ? value : Object.freeze(value);
}
/**
 * @internal
 * @hidden
 * Recursively freeze a value (if not in production)
 */
function deepFreeze(value) {
    if (!devMode())
        return value;
    freeze(value);
    if (isPlainObject(value)) {
        Object.keys(value).forEach(function (propKey) {
            if (!isPrimitive(value[propKey]) &&
                !Object.isFrozen(value[propKey])) {
                deepFreeze(value[propKey]);
            }
        });
    }
    return value;
}
/**
 * @internal
 * @hidden
 */
function isSerializable(value) {
    return typeof value !== "function";
}
/**
 * @internal
 * @hidden
 */
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
/**
 * @internal
 * @hidden
 */
function addHiddenWritableProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
/**
 * @internal
 * @hidden
 */
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        this.handlers = [];
    }
    Object.defineProperty(EventHandler.prototype, "hasSubscribers", {
        get: function () {
            return this.handlers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    EventHandler.prototype.register = function (fn, atTheBeginning) {
        var _this = this;
        if (atTheBeginning === void 0) { atTheBeginning = false; }
        if (atTheBeginning) {
            this.handlers.unshift(fn);
        }
        else {
            this.handlers.push(fn);
        }
        return function () {
            _this.unregister(fn);
        };
    };
    EventHandler.prototype.has = function (fn) {
        return this.handlers.indexOf(fn) >= 0;
    };
    EventHandler.prototype.unregister = function (fn) {
        var index = this.handlers.indexOf(fn);
        if (index >= 0) {
            this.handlers.splice(index, 1);
        }
    };
    EventHandler.prototype.clear = function () {
        this.handlers.length = 0;
    };
    EventHandler.prototype.emit = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // make a copy just in case it changes
        var handlers = this.handlers.slice();
        handlers.forEach(function (f) { return f.apply(void 0, __spread(args)); });
    };
    return EventHandler;
}());
/**
 * @internal
 * @hidden
 */
var EventHandlers = /** @class */ (function () {
    function EventHandlers() {
    }
    EventHandlers.prototype.hasSubscribers = function (event) {
        var handler = this.eventHandlers && this.eventHandlers[event];
        return !!handler && handler.hasSubscribers;
    };
    EventHandlers.prototype.register = function (event, fn, atTheBeginning) {
        if (atTheBeginning === void 0) { atTheBeginning = false; }
        if (!this.eventHandlers) {
            this.eventHandlers = {};
        }
        var handler = this.eventHandlers[event];
        if (!handler) {
            handler = this.eventHandlers[event] = new EventHandler();
        }
        return handler.register(fn, atTheBeginning);
    };
    EventHandlers.prototype.has = function (event, fn) {
        var handler = this.eventHandlers && this.eventHandlers[event];
        return !!handler && handler.has(fn);
    };
    EventHandlers.prototype.unregister = function (event, fn) {
        var handler = this.eventHandlers && this.eventHandlers[event];
        if (handler) {
            handler.unregister(fn);
        }
    };
    EventHandlers.prototype.clear = function (event) {
        if (this.eventHandlers) {
            delete this.eventHandlers[event];
        }
    };
    EventHandlers.prototype.clearAll = function () {
        this.eventHandlers = undefined;
    };
    EventHandlers.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var handler = this.eventHandlers && this.eventHandlers[event];
        if (handler) {
            (_a = handler).emit.apply(_a, __spread(args));
        }
    };
    return EventHandlers;
}());
/**
 * @internal
 * @hidden
 */
function argsToArray(args) {
    var res = new Array(args.length);
    for (var i = 0; i < args.length; i++)
        res[i] = args[i];
    return res;
}
/**
 * @internal
 * @hidden
 */
function invalidateComputed(target, propName) {
    var atom = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["getAtom"])(target, propName);
    atom.trackAndCompute();
}
/**
 * @internal
 * @hidden
 */
function stringStartsWith(str, beginning) {
    return str.indexOf(beginning) === 0;
}
/**
 * @internal
 * @hidden
 */
var deprecated = function (id, message) {
    // skip if running production
    if (!devMode())
        return;
    // warn if hasn't been warned before
    if (deprecated.ids && !deprecated.ids.hasOwnProperty(id)) {
        warnError("Deprecation warning: " + message);
    }
    // mark as warned to avoid duplicate warn message
    if (deprecated.ids)
        deprecated.ids[id] = true;
};
deprecated.ids = {};
/**
 * @internal
 * @hidden
 */
function warnError(msg) {
    console.warn(new Error("[mobx-state-tree] " + msg));
}
/**
 * @internal
 * @hidden
 */
function devMode() {
    return "development" !== "production";
}
/**
 * @internal
 * @hidden
 */
function assertArg(value, fn, typeName, argNumber) {
    if (devMode()) {
        if (!fn(value)) {
            // istanbul ignore next
            throw fail$1("expected " + typeName + " as argument " + asArray(argNumber).join(" or ") + ", got " + value + " instead");
        }
    }
}
/**
 * @internal
 * @hidden
 */
function assertIsFunction(value, argNumber) {
    assertArg(value, function (fn) { return typeof fn === "function"; }, "function", argNumber);
}
/**
 * @internal
 * @hidden
 */
function assertIsNumber(value, argNumber, min, max) {
    assertArg(value, function (n) { return typeof n === "number"; }, "number", argNumber);
    if (min !== undefined) {
        assertArg(value, function (n) { return n >= min; }, "number greater than " + min, argNumber);
    }
    if (max !== undefined) {
        assertArg(value, function (n) { return n <= max; }, "number lesser than " + max, argNumber);
    }
}
/**
 * @internal
 * @hidden
 */
function assertIsString(value, argNumber, canBeEmpty) {
    if (canBeEmpty === void 0) { canBeEmpty = true; }
    assertArg(value, function (s) { return typeof s === "string"; }, "string", argNumber);
    if (!canBeEmpty) {
        assertArg(value, function (s) { return s !== ""; }, "not empty string", argNumber);
    }
}

/**
 * See [asynchronous actions](https://github.com/mobxjs/mobx-state-tree/blob/master/docs/async-actions.md).
 *
 * @returns The flow as a promise.
 */
function flow(generator) {
    return createFlowSpawner(generator.name, generator);
}
/**
 *  Used for TypeScript to make flows that return a promise return the actual promise result.
 *
 * @param val
 * @returns
 */
function castFlowReturn(val) {
    return val;
}
/**
 * @internal
 * @hidden
 */
function createFlowSpawner(name, generator) {
    var spawner = function flowSpawner() {
        // Implementation based on https://github.com/tj/co/blob/master/index.js
        var runId = getNextActionId();
        var parentContext = getCurrentActionContext();
        if (!parentContext) {
            throw fail$1("a mst flow must always have a parent context");
        }
        var parentActionContext = getParentActionContext(parentContext);
        if (!parentActionContext) {
            throw fail$1("a mst flow must always have a parent action context");
        }
        var contextBase = {
            name: name,
            id: runId,
            tree: parentContext.tree,
            context: parentContext.context,
            parentId: parentContext.id,
            allParentIds: __spread(parentContext.allParentIds, [parentContext.id]),
            rootId: parentContext.rootId,
            parentEvent: parentContext,
            parentActionEvent: parentActionContext
        };
        var args = arguments;
        function wrap(fn, type, arg) {
            fn.$mst_middleware = spawner.$mst_middleware; // pick up any middleware attached to the flow
            runWithActionContext(__assign({}, contextBase, { type: type, args: [arg] }), fn);
        }
        return new Promise(function (resolve, reject) {
            var gen;
            var init = function asyncActionInit() {
                gen = generator.apply(null, arguments);
                onFulfilled(undefined); // kick off the flow
            };
            init.$mst_middleware = spawner.$mst_middleware;
            runWithActionContext(__assign({}, contextBase, { type: "flow_spawn", args: argsToArray(args) }), init);
            function onFulfilled(res) {
                var ret;
                try {
                    // prettier-ignore
                    wrap(function (r) { ret = gen.next(r); }, "flow_resume", res);
                }
                catch (e) {
                    // prettier-ignore
                    setImmediate(function () {
                        wrap(function (r) { reject(e); }, "flow_throw", e);
                    });
                    return;
                }
                next(ret);
                return;
            }
            function onRejected(err) {
                var ret;
                try {
                    // prettier-ignore
                    wrap(function (r) { ret = gen.throw(r); }, "flow_resume_error", err); // or yieldError?
                }
                catch (e) {
                    // prettier-ignore
                    setImmediate(function () {
                        wrap(function (r) { reject(e); }, "flow_throw", e);
                    });
                    return;
                }
                next(ret);
            }
            function next(ret) {
                if (ret.done) {
                    // prettier-ignore
                    setImmediate(function () {
                        wrap(function (r) { resolve(r); }, "flow_return", ret.value);
                    });
                    return;
                }
                // TODO: support more type of values? See https://github.com/tj/co/blob/249bbdc72da24ae44076afd716349d2089b31c4c/index.js#L100
                if (!ret.value || typeof ret.value.then !== "function") {
                    // istanbul ignore next
                    throw fail$1("Only promises can be yielded to `async`, got: " + ret);
                }
                return ret.value.then(onFulfilled, onRejected);
            }
        });
    };
    return spawner;
}

/**
 * @internal
 * @hidden
 */
function splitPatch(patch) {
    if (!("oldValue" in patch))
        throw fail$1("Patches without `oldValue` field cannot be inversed");
    return [stripPatch(patch), invertPatch(patch)];
}
/**
 * @internal
 * @hidden
 */
function stripPatch(patch) {
    // strips `oldvalue` information from the patch, so that it becomes a patch conform the json-patch spec
    // this removes the ability to undo the patch
    switch (patch.op) {
        case "add":
            return { op: "add", path: patch.path, value: patch.value };
        case "remove":
            return { op: "remove", path: patch.path };
        case "replace":
            return { op: "replace", path: patch.path, value: patch.value };
    }
}
function invertPatch(patch) {
    switch (patch.op) {
        case "add":
            return {
                op: "remove",
                path: patch.path
            };
        case "remove":
            return {
                op: "add",
                path: patch.path,
                value: patch.oldValue
            };
        case "replace":
            return {
                op: "replace",
                path: patch.path,
                value: patch.oldValue
            };
    }
}
/**
 * Simple simple check to check it is a number.
 */
function isNumber(x) {
    return typeof x === "number";
}
/**
 * Escape slashes and backslashes.
 *
 * http://tools.ietf.org/html/rfc6901
 */
function escapeJsonPath(path) {
    if (isNumber(path) === true) {
        return "" + path;
    }
    if (path.indexOf("/") === -1 && path.indexOf("~") === -1)
        return path;
    return path.replace(/~/g, "~0").replace(/\//g, "~1");
}
/**
 * Unescape slashes and backslashes.
 */
function unescapeJsonPath(path) {
    return path.replace(/~1/g, "/").replace(/~0/g, "~");
}
/**
 * Generates a json-path compliant json path from path parts.
 *
 * @param path
 * @returns
 */
function joinJsonPath(path) {
    // `/` refers to property with an empty name, while `` refers to root itself!
    if (path.length === 0)
        return "";
    var getPathStr = function (p) { return p.map(escapeJsonPath).join("/"); };
    if (path[0] === "." || path[0] === "..") {
        // relative
        return getPathStr(path);
    }
    else {
        // absolute
        return "/" + getPathStr(path);
    }
}
/**
 * Splits and decodes a json path into several parts.
 *
 * @param path
 * @returns
 */
function splitJsonPath(path) {
    // `/` refers to property with an empty name, while `` refers to root itself!
    var parts = path.split("/").map(unescapeJsonPath);
    var valid = path === "" ||
        path === "." ||
        path === ".." ||
        stringStartsWith(path, "/") ||
        stringStartsWith(path, "./") ||
        stringStartsWith(path, "../");
    if (!valid) {
        throw fail$1("a json path must be either rooted, empty or relative, but got '" + path + "'");
    }
    // '/a/b/c' -> ["a", "b", "c"]
    // '../../b/c' -> ["..", "..", "b", "c"]
    // '' -> []
    // '/' -> ['']
    // './a' -> [".", "a"]
    // /./a' -> [".", "a"] equivalent to './a'
    if (parts[0] === "") {
        parts.shift();
    }
    return parts;
}

var SnapshotProcessor = /** @class */ (function (_super) {
    __extends(SnapshotProcessor, _super);
    function SnapshotProcessor(_subtype, _processors, name) {
        var _this = _super.call(this, name || _subtype.name) || this;
        _this._subtype = _subtype;
        _this._processors = _processors;
        return _this;
    }
    Object.defineProperty(SnapshotProcessor.prototype, "flags", {
        get: function () {
            return this._subtype.flags | TypeFlags.SnapshotProcessor;
        },
        enumerable: true,
        configurable: true
    });
    SnapshotProcessor.prototype.describe = function () {
        return "snapshotProcessor(" + this._subtype.describe() + ")";
    };
    SnapshotProcessor.prototype.preProcessSnapshot = function (sn) {
        if (this._processors.preProcessor) {
            return this._processors.preProcessor.call(null, sn);
        }
        return sn;
    };
    SnapshotProcessor.prototype.postProcessSnapshot = function (sn) {
        if (this._processors.postProcessor) {
            return this._processors.postProcessor.call(null, sn);
        }
        return sn;
    };
    SnapshotProcessor.prototype._fixNode = function (node) {
        var _this = this;
        // the node has to use these methods rather than the original type ones
        proxyNodeTypeMethods(node.type, this, "isAssignableFrom", "create");
        var oldGetSnapshot = node.getSnapshot;
        node.getSnapshot = function () {
            return _this.postProcessSnapshot(oldGetSnapshot.call(node));
        };
    };
    SnapshotProcessor.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var processedInitialValue = isStateTreeNode(initialValue)
            ? initialValue
            : this.preProcessSnapshot(initialValue);
        var node = this._subtype.instantiate(parent, subpath, environment, processedInitialValue);
        this._fixNode(node);
        return node;
    };
    SnapshotProcessor.prototype.reconcile = function (current, newValue, parent, subpath) {
        var node = this._subtype.reconcile(current, isStateTreeNode(newValue) ? newValue : this.preProcessSnapshot(newValue), parent, subpath);
        if (node !== current) {
            this._fixNode(node);
        }
        return node;
    };
    SnapshotProcessor.prototype.getSnapshot = function (node, applyPostProcess) {
        if (applyPostProcess === void 0) { applyPostProcess = true; }
        var sn = this._subtype.getSnapshot(node);
        return applyPostProcess ? this.postProcessSnapshot(sn) : sn;
    };
    SnapshotProcessor.prototype.isValidSnapshot = function (value, context) {
        var processedSn = this.preProcessSnapshot(value);
        return this._subtype.validate(processedSn, context);
    };
    SnapshotProcessor.prototype.getSubTypes = function () {
        return this._subtype;
    };
    return SnapshotProcessor;
}(BaseType));
function proxyNodeTypeMethods(nodeType, snapshotProcessorType) {
    var e_1, _a;
    var methods = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        methods[_i - 2] = arguments[_i];
    }
    try {
        for (var methods_1 = __values(methods), methods_1_1 = methods_1.next(); !methods_1_1.done; methods_1_1 = methods_1.next()) {
            var method = methods_1_1.value;
            nodeType[method] = snapshotProcessorType[method].bind(snapshotProcessorType);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (methods_1_1 && !methods_1_1.done && (_a = methods_1.return)) _a.call(methods_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * `types.snapshotProcessor` - Runs a pre/post snapshot processor before/after serializing a given type.
 *
 * Example:
 * ```ts
 * const Todo1 = types.model({ text: types.string })
 * // in the backend the text type must be null when empty
 * interface BackendTodo {
 *     text: string | null
 * }
 * const Todo2 = types.snapshotProcessor(Todo1, {
 *     // from snapshot to instance
 *     preProcessor(sn: BackendTodo) {
 *         return {
 *             text: sn.text || "";
 *         }
 *     },
 *     // from instance to snapshot
 *     postProcessor(sn): BackendTodo {
 *         return {
 *             text: !sn.text ? null : sn.text
 *         }
 *     }
 * })
 * ```
 *
 * @param type Type to run the processors over.
 * @param processors Processors to run.
 * @param name Type name, or undefined to inherit the inner type one.
 * @returns
 */
function snapshotProcessor(type, processors, name) {
    assertIsType(type, 1);
    if (devMode()) {
        if (processors.postProcessor && typeof processors.postProcessor !== "function") {
            // istanbul ignore next
            throw fail("postSnapshotProcessor must be a function");
        }
        if (processors.preProcessor && typeof processors.preProcessor !== "function") {
            // istanbul ignore next
            throw fail("preSnapshotProcessor must be a function");
        }
    }
    return new SnapshotProcessor(type, processors, name);
}

var needsIdentifierError = "Map.put can only be used to store complex values that have an identifier type attribute";
function tryCollectModelTypes(type, modelTypes) {
    var e_1, _a;
    var subtypes = type.getSubTypes();
    if (subtypes === cannotDetermineSubtype) {
        return false;
    }
    if (subtypes) {
        var subtypesArray = asArray(subtypes);
        try {
            for (var subtypesArray_1 = __values(subtypesArray), subtypesArray_1_1 = subtypesArray_1.next(); !subtypesArray_1_1.done; subtypesArray_1_1 = subtypesArray_1.next()) {
                var subtype = subtypesArray_1_1.value;
                if (!tryCollectModelTypes(subtype, modelTypes))
                    return false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (subtypesArray_1_1 && !subtypesArray_1_1.done && (_a = subtypesArray_1.return)) _a.call(subtypesArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    if (type instanceof ModelType) {
        modelTypes.push(type);
    }
    return true;
}
/**
 * @internal
 * @hidden
 */
var MapIdentifierMode;
(function (MapIdentifierMode) {
    MapIdentifierMode[MapIdentifierMode["UNKNOWN"] = 0] = "UNKNOWN";
    MapIdentifierMode[MapIdentifierMode["YES"] = 1] = "YES";
    MapIdentifierMode[MapIdentifierMode["NO"] = 2] = "NO";
})(MapIdentifierMode || (MapIdentifierMode = {}));
var MSTMap = /** @class */ (function (_super) {
    __extends(MSTMap, _super);
    function MSTMap(initialData) {
        return _super.call(this, initialData, mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref.enhancer) || this;
    }
    MSTMap.prototype.get = function (key) {
        // maybe this is over-enthousiastic? normalize numeric keys to strings
        return _super.prototype.get.call(this, "" + key);
    };
    MSTMap.prototype.has = function (key) {
        return _super.prototype.has.call(this, "" + key);
    };
    MSTMap.prototype.delete = function (key) {
        return _super.prototype.delete.call(this, "" + key);
    };
    MSTMap.prototype.set = function (key, value) {
        return _super.prototype.set.call(this, "" + key, value);
    };
    MSTMap.prototype.put = function (value) {
        if (!value)
            throw fail$1("Map.put cannot be used to set empty values");
        if (isStateTreeNode(value)) {
            var node = getStateTreeNode(value);
            if (devMode()) {
                if (!node.identifierAttribute) {
                    throw fail$1(needsIdentifierError);
                }
            }
            if (node.identifier === null) {
                throw fail$1(needsIdentifierError);
            }
            this.set(node.identifier, value);
            return value;
        }
        else if (!isMutable(value)) {
            throw fail$1("Map.put can only be used to store complex values");
        }
        else {
            var mapNode = getStateTreeNode(this);
            var mapType = mapNode.type;
            if (mapType.identifierMode !== MapIdentifierMode.YES) {
                throw fail$1(needsIdentifierError);
            }
            var idAttr = mapType.mapIdentifierAttribute;
            var id = value[idAttr];
            if (!isValidIdentifier(id)) {
                // try again but this time after creating a node for the value
                // since it might be an optional identifier
                var newNode = this.put(mapType.getChildType().create(value, mapNode.environment));
                return this.put(getSnapshot(newNode));
            }
            var key = normalizeIdentifier(id);
            this.set(key, value);
            return this.get(key);
        }
    };
    return MSTMap;
}(mobx__WEBPACK_IMPORTED_MODULE_0__["ObservableMap"]));
/**
 * @internal
 * @hidden
 */
var MapType = /** @class */ (function (_super) {
    __extends(MapType, _super);
    function MapType(name, _subType) {
        var _this = _super.call(this, name) || this;
        _this._subType = _subType;
        _this.identifierMode = MapIdentifierMode.UNKNOWN;
        _this.mapIdentifierAttribute = undefined;
        _this.flags = TypeFlags.Map;
        _this._determineIdentifierMode();
        return _this;
    }
    MapType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        this._determineIdentifierMode();
        return createObjectNode(this, parent, subpath, environment, initialValue);
    };
    MapType.prototype._determineIdentifierMode = function () {
        if (this.identifierMode !== MapIdentifierMode.UNKNOWN) {
            return;
        }
        var modelTypes = [];
        if (tryCollectModelTypes(this._subType, modelTypes)) {
            var identifierAttribute_1 = undefined;
            modelTypes.forEach(function (type) {
                if (type.identifierAttribute) {
                    if (identifierAttribute_1 && identifierAttribute_1 !== type.identifierAttribute) {
                        throw fail$1("The objects in a map should all have the same identifier attribute, expected '" + identifierAttribute_1 + "', but child of type '" + type.name + "' declared attribute '" + type.identifierAttribute + "' as identifier");
                    }
                    identifierAttribute_1 = type.identifierAttribute;
                }
            });
            if (identifierAttribute_1) {
                this.identifierMode = MapIdentifierMode.YES;
                this.mapIdentifierAttribute = identifierAttribute_1;
            }
            else {
                this.identifierMode = MapIdentifierMode.NO;
            }
        }
    };
    MapType.prototype.initializeChildNodes = function (objNode, initialSnapshot) {
        if (initialSnapshot === void 0) { initialSnapshot = {}; }
        var subType = objNode.type._subType;
        var result = {};
        Object.keys(initialSnapshot).forEach(function (name) {
            result[name] = subType.instantiate(objNode, name, undefined, initialSnapshot[name]);
        });
        return result;
    };
    MapType.prototype.createNewInstance = function (childNodes) {
        return new MSTMap(childNodes);
    };
    MapType.prototype.finalizeNewInstance = function (node, instance) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_interceptReads"])(instance, node.unbox);
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["intercept"])(instance, this.willChange);
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observe"])(instance, this.didChange);
    };
    MapType.prototype.describe = function () {
        return "Map<string, " + this._subType.describe() + ">";
    };
    MapType.prototype.getChildren = function (node) {
        // return (node.storedValue as ObservableMap<any>).values()
        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["values"])(node.storedValue);
    };
    MapType.prototype.getChildNode = function (node, key) {
        var childNode = node.storedValue.get("" + key);
        if (!childNode)
            throw fail$1("Not a child " + key);
        return childNode;
    };
    MapType.prototype.willChange = function (change) {
        var node = getStateTreeNode(change.object);
        var key = change.name;
        node.assertWritable({ subpath: key });
        var mapType = node.type;
        var subType = mapType._subType;
        switch (change.type) {
            case "update":
                {
                    var newValue = change.newValue;
                    var oldValue = change.object.get(key);
                    if (newValue === oldValue)
                        return null;
                    typecheckInternal(subType, newValue);
                    change.newValue = subType.reconcile(node.getChildNode(key), change.newValue, node, key);
                    mapType.processIdentifier(key, change.newValue);
                }
                break;
            case "add":
                {
                    typecheckInternal(subType, change.newValue);
                    change.newValue = subType.instantiate(node, key, undefined, change.newValue);
                    mapType.processIdentifier(key, change.newValue);
                }
                break;
        }
        return change;
    };
    MapType.prototype.processIdentifier = function (expected, node) {
        if (this.identifierMode === MapIdentifierMode.YES && node instanceof ObjectNode) {
            var identifier = node.identifier;
            if (identifier !== expected)
                throw fail$1("A map of objects containing an identifier should always store the object under their own identifier. Trying to store key '" + identifier + "', but expected: '" + expected + "'");
        }
    };
    MapType.prototype.getSnapshot = function (node) {
        var res = {};
        node.getChildren().forEach(function (childNode) {
            res[childNode.subpath] = childNode.snapshot;
        });
        return res;
    };
    MapType.prototype.processInitialSnapshot = function (childNodes) {
        var processed = {};
        Object.keys(childNodes).forEach(function (key) {
            processed[key] = childNodes[key].getSnapshot();
        });
        return processed;
    };
    MapType.prototype.didChange = function (change) {
        var node = getStateTreeNode(change.object);
        switch (change.type) {
            case "update":
                return void node.emitPatch({
                    op: "replace",
                    path: escapeJsonPath(change.name),
                    value: change.newValue.snapshot,
                    oldValue: change.oldValue ? change.oldValue.snapshot : undefined
                }, node);
            case "add":
                return void node.emitPatch({
                    op: "add",
                    path: escapeJsonPath(change.name),
                    value: change.newValue.snapshot,
                    oldValue: undefined
                }, node);
            case "delete":
                // a node got deleted, get the old snapshot and make the node die
                var oldSnapshot = change.oldValue.snapshot;
                change.oldValue.die();
                // emit the patch
                return void node.emitPatch({
                    op: "remove",
                    path: escapeJsonPath(change.name),
                    oldValue: oldSnapshot
                }, node);
        }
    };
    MapType.prototype.applyPatchLocally = function (node, subpath, patch) {
        var target = node.storedValue;
        switch (patch.op) {
            case "add":
            case "replace":
                target.set(subpath, patch.value);
                break;
            case "remove":
                target.delete(subpath);
                break;
        }
    };
    MapType.prototype.applySnapshot = function (node, snapshot) {
        typecheckInternal(this, snapshot);
        var target = node.storedValue;
        var currentKeys = {};
        Array.from(target.keys()).forEach(function (key) {
            currentKeys[key] = false;
        });
        if (snapshot) {
            // Don't use target.replace, as it will throw away all existing items first
            for (var key in snapshot) {
                target.set(key, snapshot[key]);
                currentKeys["" + key] = true;
            }
        }
        Object.keys(currentKeys).forEach(function (key) {
            if (currentKeys[key] === false)
                target.delete(key);
        });
    };
    MapType.prototype.getChildType = function () {
        return this._subType;
    };
    MapType.prototype.isValidSnapshot = function (value, context) {
        var _this = this;
        if (!isPlainObject(value)) {
            return typeCheckFailure(context, value, "Value is not a plain object");
        }
        return flattenTypeErrors(Object.keys(value).map(function (path) {
            return _this._subType.validate(value[path], getContextForPath(context, path, _this._subType));
        }));
    };
    MapType.prototype.getDefaultSnapshot = function () {
        return EMPTY_OBJECT;
    };
    MapType.prototype.removeChild = function (node, subpath) {
        node.storedValue.delete(subpath);
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
    ], MapType.prototype, "applySnapshot", null);
    return MapType;
}(ComplexType));
/**
 * `types.map` - Creates a key based collection type who's children are all of a uniform declared type.
 * If the type stored in a map has an identifier, it is mandatory to store the child under that identifier in the map.
 *
 * This type will always produce [observable maps](https://mobx.js.org/refguide/map.html)
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   id: types.identifier,
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.map(Todo)
 * })
 *
 * const s = TodoStore.create({ todos: {} })
 * unprotect(s)
 * s.todos.set(17, { task: "Grab coffee", id: 17 })
 * s.todos.put({ task: "Grab cookie", id: 18 }) // put will infer key from the identifier
 * console.log(s.todos.get(17).task) // prints: "Grab coffee"
 * ```
 *
 * @param subtype
 * @returns
 */
function map(subtype) {
    return new MapType("map<string, " + subtype.name + ">", subtype);
}
/**
 * Returns if a given value represents a map type.
 *
 * @param type
 * @returns `true` if it is a map type.
 */
function isMapType(type) {
    return isType(type) && (type.flags & TypeFlags.Map) > 0;
}

/**
 * @internal
 * @hidden
 */
var ArrayType = /** @class */ (function (_super) {
    __extends(ArrayType, _super);
    function ArrayType(name, _subType) {
        var _this = _super.call(this, name) || this;
        _this._subType = _subType;
        _this.flags = TypeFlags.Array;
        return _this;
    }
    ArrayType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        return createObjectNode(this, parent, subpath, environment, initialValue);
    };
    ArrayType.prototype.initializeChildNodes = function (objNode, snapshot) {
        if (snapshot === void 0) { snapshot = []; }
        var subType = objNode.type._subType;
        var result = {};
        snapshot.forEach(function (item, index) {
            var subpath = "" + index;
            result[subpath] = subType.instantiate(objNode, subpath, undefined, item);
        });
        return result;
    };
    ArrayType.prototype.createNewInstance = function (childNodes) {
        return mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].array(convertChildNodesToArray(childNodes), mobxShallow);
    };
    ArrayType.prototype.finalizeNewInstance = function (node, instance) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_getAdministration"])(instance).dehancer = node.unbox;
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["intercept"])(instance, this.willChange);
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observe"])(instance, this.didChange);
    };
    ArrayType.prototype.describe = function () {
        return this._subType.describe() + "[]";
    };
    ArrayType.prototype.getChildren = function (node) {
        return node.storedValue.slice();
    };
    ArrayType.prototype.getChildNode = function (node, key) {
        var index = Number(key);
        if (index < node.storedValue.length)
            return node.storedValue[index];
        throw fail$1("Not a child: " + key);
    };
    ArrayType.prototype.willChange = function (change) {
        var node = getStateTreeNode(change.object);
        node.assertWritable({ subpath: "" + change.index });
        var subType = node.type._subType;
        var childNodes = node.getChildren();
        switch (change.type) {
            case "update":
                {
                    if (change.newValue === change.object[change.index])
                        return null;
                    var updatedNodes = reconcileArrayChildren(node, subType, [childNodes[change.index]], [change.newValue], [change.index]);
                    if (!updatedNodes) {
                        return null;
                    }
                    change.newValue = updatedNodes[0];
                }
                break;
            case "splice":
                {
                    var index_1 = change.index, removedCount = change.removedCount, added = change.added;
                    var addedNodes = reconcileArrayChildren(node, subType, childNodes.slice(index_1, index_1 + removedCount), added, added.map(function (_, i) { return index_1 + i; }));
                    if (!addedNodes) {
                        return null;
                    }
                    change.added = addedNodes;
                    // update paths of remaining items
                    for (var i = index_1 + removedCount; i < childNodes.length; i++) {
                        childNodes[i].setParent(node, "" + (i + added.length - removedCount));
                    }
                }
                break;
        }
        return change;
    };
    ArrayType.prototype.getSnapshot = function (node) {
        return node.getChildren().map(function (childNode) { return childNode.snapshot; });
    };
    ArrayType.prototype.processInitialSnapshot = function (childNodes) {
        var processed = [];
        Object.keys(childNodes).forEach(function (key) {
            processed.push(childNodes[key].getSnapshot());
        });
        return processed;
    };
    ArrayType.prototype.didChange = function (change) {
        var node = getStateTreeNode(change.object);
        switch (change.type) {
            case "update":
                return void node.emitPatch({
                    op: "replace",
                    path: "" + change.index,
                    value: change.newValue.snapshot,
                    oldValue: change.oldValue ? change.oldValue.snapshot : undefined
                }, node);
            case "splice":
                for (var i = change.removedCount - 1; i >= 0; i--)
                    node.emitPatch({
                        op: "remove",
                        path: "" + (change.index + i),
                        oldValue: change.removed[i].snapshot
                    }, node);
                for (var i = 0; i < change.addedCount; i++)
                    node.emitPatch({
                        op: "add",
                        path: "" + (change.index + i),
                        value: node.getChildNode("" + (change.index + i)).snapshot,
                        oldValue: undefined
                    }, node);
                return;
        }
    };
    ArrayType.prototype.applyPatchLocally = function (node, subpath, patch) {
        var target = node.storedValue;
        var index = subpath === "-" ? target.length : Number(subpath);
        switch (patch.op) {
            case "replace":
                target[index] = patch.value;
                break;
            case "add":
                target.splice(index, 0, patch.value);
                break;
            case "remove":
                target.splice(index, 1);
                break;
        }
    };
    ArrayType.prototype.applySnapshot = function (node, snapshot) {
        typecheckInternal(this, snapshot);
        var target = node.storedValue;
        target.replace(snapshot);
    };
    ArrayType.prototype.getChildType = function () {
        return this._subType;
    };
    ArrayType.prototype.isValidSnapshot = function (value, context) {
        var _this = this;
        if (!isArray(value)) {
            return typeCheckFailure(context, value, "Value is not an array");
        }
        return flattenTypeErrors(value.map(function (item, index) {
            return _this._subType.validate(item, getContextForPath(context, "" + index, _this._subType));
        }));
    };
    ArrayType.prototype.getDefaultSnapshot = function () {
        return EMPTY_ARRAY;
    };
    ArrayType.prototype.removeChild = function (node, subpath) {
        node.storedValue.splice(Number(subpath), 1);
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
    ], ArrayType.prototype, "applySnapshot", null);
    return ArrayType;
}(ComplexType));
/**
 * `types.array` - Creates an index based collection type who's children are all of a uniform declared type.
 *
 * This type will always produce [observable arrays](https://mobx.js.org/refguide/array.html)
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.array(Todo)
 * })
 *
 * const s = TodoStore.create({ todos: [] })
 * unprotect(s) // needed to allow modifying outside of an action
 * s.todos.push({ task: "Grab coffee" })
 * console.log(s.todos[0]) // prints: "Grab coffee"
 * ```
 *
 * @param subtype
 * @returns
 */
function array(subtype) {
    assertIsType(subtype, 1);
    return new ArrayType(subtype.name + "[]", subtype);
}
function reconcileArrayChildren(parent, childType, oldNodes, newValues, newPaths) {
    var nothingChanged = true;
    for (var i = 0;; i++) {
        var hasNewNode = i <= newValues.length - 1;
        var oldNode = oldNodes[i];
        var newValue = hasNewNode ? newValues[i] : undefined;
        var newPath = "" + newPaths[i];
        // for some reason, instead of newValue we got a node, fallback to the storedValue
        // TODO: https://github.com/mobxjs/mobx-state-tree/issues/340#issuecomment-325581681
        if (isNode(newValue))
            newValue = newValue.storedValue;
        if (!oldNode && !hasNewNode) {
            // both are empty, end
            break;
        }
        else if (!hasNewNode) {
            // new one does not exists
            nothingChanged = false;
            oldNodes.splice(i, 1);
            if (oldNode instanceof ObjectNode) {
                // since it is going to be returned by pop/splice/shift better create it before killing it
                // so it doesn't end up in an undead state
                oldNode.createObservableInstanceIfNeeded();
            }
            oldNode.die();
            i--;
        }
        else if (!oldNode) {
            // there is no old node, create it
            // check if already belongs to the same parent. if so, avoid pushing item in. only swapping can occur.
            if (isStateTreeNode(newValue) && getStateTreeNode(newValue).parent === parent) {
                // this node is owned by this parent, but not in the reconcilable set, so it must be double
                throw fail$1("Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" + parent.path + "/" + newPath + "', but it lives already at '" + getStateTreeNode(newValue).path + "'");
            }
            nothingChanged = false;
            var newNode = valueAsNode(childType, parent, newPath, newValue);
            oldNodes.splice(i, 0, newNode);
        }
        else if (areSame(oldNode, newValue)) {
            // both are the same, reconcile
            oldNodes[i] = valueAsNode(childType, parent, newPath, newValue, oldNode);
        }
        else {
            // nothing to do, try to reorder
            var oldMatch = undefined;
            // find a possible candidate to reuse
            for (var j = i; j < oldNodes.length; j++) {
                if (areSame(oldNodes[j], newValue)) {
                    oldMatch = oldNodes.splice(j, 1)[0];
                    break;
                }
            }
            nothingChanged = false;
            var newNode = valueAsNode(childType, parent, newPath, newValue, oldMatch);
            oldNodes.splice(i, 0, newNode);
        }
    }
    return nothingChanged ? null : oldNodes;
}
/**
 * Convert a value to a node at given parent and subpath. Attempts to reuse old node if possible and given.
 */
function valueAsNode(childType, parent, subpath, newValue, oldNode) {
    // ensure the value is valid-ish
    typecheckInternal(childType, newValue);
    function getNewNode() {
        // the new value has a MST node
        if (isStateTreeNode(newValue)) {
            var childNode = getStateTreeNode(newValue);
            childNode.assertAlive(EMPTY_OBJECT);
            // the node lives here
            if (childNode.parent !== null && childNode.parent === parent) {
                childNode.setParent(parent, subpath);
                return childNode;
            }
        }
        // there is old node and new one is a value/snapshot
        if (oldNode) {
            return childType.reconcile(oldNode, newValue, parent, subpath);
        }
        // nothing to do, create from scratch
        return childType.instantiate(parent, subpath, undefined, newValue);
    }
    var newNode = getNewNode();
    if (oldNode && oldNode !== newNode) {
        if (oldNode instanceof ObjectNode) {
            // since it is going to be returned by pop/splice/shift better create it before killing it
            // so it doesn't end up in an undead state
            oldNode.createObservableInstanceIfNeeded();
        }
        oldNode.die();
    }
    return newNode;
}
/**
 * Check if a node holds a value.
 */
function areSame(oldNode, newValue) {
    // never consider dead old nodes for reconciliation
    if (!oldNode.isAlive) {
        return false;
    }
    // the new value has the same node
    if (isStateTreeNode(newValue)) {
        var newNode = getStateTreeNode(newValue);
        return newNode.isAlive && newNode === oldNode;
    }
    // the provided value is the snapshot of the old node
    if (oldNode.snapshot === newValue) {
        return true;
    }
    // new value is a snapshot with the correct identifier
    return (oldNode instanceof ObjectNode &&
        oldNode.identifier !== null &&
        oldNode.identifierAttribute &&
        isPlainObject(newValue) &&
        oldNode.identifier === normalizeIdentifier(newValue[oldNode.identifierAttribute]) &&
        oldNode.type.is(newValue));
}
/**
 * Returns if a given value represents an array type.
 *
 * @param type
 * @returns `true` if the type is an array type.
 */
function isArrayType(type) {
    return isType(type) && (type.flags & TypeFlags.Array) > 0;
}

var PRE_PROCESS_SNAPSHOT = "preProcessSnapshot";
var POST_PROCESS_SNAPSHOT = "postProcessSnapshot";
function objectTypeToString() {
    return getStateTreeNode(this).toString();
}
var defaultObjectOptions = {
    name: "AnonymousModel",
    properties: {},
    initializers: EMPTY_ARRAY
};
function toPropertiesObject(declaredProps) {
    // loop through properties and ensures that all items are types
    return Object.keys(declaredProps).reduce(function (props, key) {
        var _a, _b, _c;
        // warn if user intended a HOOK
        if (key in Hook)
            throw fail$1("Hook '" + key + "' was defined as property. Hooks should be defined as part of the actions");
        // the user intended to use a view
        var descriptor = Object.getOwnPropertyDescriptor(props, key);
        if ("get" in descriptor) {
            throw fail$1("Getters are not supported as properties. Please use views instead");
        }
        // undefined and null are not valid
        var value = descriptor.value;
        if (value === null || value === undefined) {
            throw fail$1("The default value of an attribute cannot be null or undefined as the type cannot be inferred. Did you mean `types.maybe(someType)`?");
            // its a primitive, convert to its type
        }
        else if (isPrimitive(value)) {
            return Object.assign({}, props, (_a = {},
                _a[key] = optional(getPrimitiveFactoryFromValue(value), value),
                _a));
            // map defaults to empty object automatically for models
        }
        else if (value instanceof MapType) {
            return Object.assign({}, props, (_b = {},
                _b[key] = optional(value, {}),
                _b));
        }
        else if (value instanceof ArrayType) {
            return Object.assign({}, props, (_c = {}, _c[key] = optional(value, []), _c));
            // its already a type
        }
        else if (isType(value)) {
            return props;
            // its a function, maybe the user wanted a view?
        }
        else if (devMode() && typeof value === "function") {
            throw fail$1("Invalid type definition for property '" + key + "', it looks like you passed a function. Did you forget to invoke it, or did you intend to declare a view / action?");
            // no other complex values
        }
        else if (devMode() && typeof value === "object") {
            throw fail$1("Invalid type definition for property '" + key + "', it looks like you passed an object. Try passing another model type or a types.frozen.");
            // WTF did you pass in mate?
        }
        else {
            throw fail$1("Invalid type definition for property '" + key + "', cannot infer a type from a value like '" + value + "' (" + typeof value + ")");
        }
    }, declaredProps);
}
/**
 * @internal
 * @hidden
 */
var ModelType = /** @class */ (function (_super) {
    __extends(ModelType, _super);
    function ModelType(opts) {
        var _this = _super.call(this, opts.name || defaultObjectOptions.name) || this;
        _this.flags = TypeFlags.Object;
        _this.named = function (name) {
            return _this.cloneAndEnhance({ name: name });
        };
        _this.props = function (properties) {
            return _this.cloneAndEnhance({ properties: properties });
        };
        _this.preProcessSnapshot = function (preProcessor) {
            var currentPreprocessor = _this.preProcessor;
            if (!currentPreprocessor)
                return _this.cloneAndEnhance({ preProcessor: preProcessor });
            else
                return _this.cloneAndEnhance({
                    preProcessor: function (snapshot) { return currentPreprocessor(preProcessor(snapshot)); }
                });
        };
        _this.postProcessSnapshot = function (postProcessor) {
            var currentPostprocessor = _this.postProcessor;
            if (!currentPostprocessor)
                return _this.cloneAndEnhance({ postProcessor: postProcessor });
            else
                return _this.cloneAndEnhance({
                    postProcessor: function (snapshot) { return postProcessor(currentPostprocessor(snapshot)); }
                });
        };
        var name = opts.name || defaultObjectOptions.name;
        // TODO: this test still needed?
        if (!/^\w[\w\d_]*$/.test(name))
            throw fail$1("Typename should be a valid identifier: " + name);
        Object.assign(_this, defaultObjectOptions, opts);
        // ensures that any default value gets converted to its related type
        _this.properties = toPropertiesObject(_this.properties);
        freeze(_this.properties); // make sure nobody messes with it
        _this.propertyNames = Object.keys(_this.properties);
        _this.identifierAttribute = _this._getIdentifierAttribute();
        return _this;
    }
    ModelType.prototype._getIdentifierAttribute = function () {
        var identifierAttribute = undefined;
        this.forAllProps(function (propName, propType) {
            if (propType.flags & TypeFlags.Identifier) {
                if (identifierAttribute)
                    throw fail$1("Cannot define property '" + propName + "' as object identifier, property '" + identifierAttribute + "' is already defined as identifier property");
                identifierAttribute = propName;
            }
        });
        return identifierAttribute;
    };
    ModelType.prototype.cloneAndEnhance = function (opts) {
        return new ModelType({
            name: opts.name || this.name,
            properties: Object.assign({}, this.properties, opts.properties),
            initializers: this.initializers.concat(opts.initializers || []),
            preProcessor: opts.preProcessor || this.preProcessor,
            postProcessor: opts.postProcessor || this.postProcessor
        });
    };
    ModelType.prototype.actions = function (fn) {
        var _this = this;
        var actionInitializer = function (self) {
            _this.instantiateActions(self, fn(self));
            return self;
        };
        return this.cloneAndEnhance({ initializers: [actionInitializer] });
    };
    ModelType.prototype.instantiateActions = function (self, actions) {
        // check if return is correct
        if (!isPlainObject(actions))
            throw fail$1("actions initializer should return a plain object containing actions");
        // bind actions to the object created
        Object.keys(actions).forEach(function (name) {
            // warn if preprocessor was given
            if (name === PRE_PROCESS_SNAPSHOT)
                throw fail$1("Cannot define action '" + PRE_PROCESS_SNAPSHOT + "', it should be defined using 'type.preProcessSnapshot(fn)' instead");
            // warn if postprocessor was given
            if (name === POST_PROCESS_SNAPSHOT)
                throw fail$1("Cannot define action '" + POST_PROCESS_SNAPSHOT + "', it should be defined using 'type.postProcessSnapshot(fn)' instead");
            var action2 = actions[name];
            // apply hook composition
            var baseAction = self[name];
            if (name in Hook && baseAction) {
                var specializedAction_1 = action2;
                action2 = function () {
                    baseAction.apply(null, arguments);
                    specializedAction_1.apply(null, arguments);
                };
            }
            // the goal of this is to make sure actions using "this" can call themselves,
            // while still allowing the middlewares to register them
            var middlewares = action2.$mst_middleware; // make sure middlewares are not lost
            var boundAction = action2.bind(actions);
            boundAction.$mst_middleware = middlewares;
            var actionInvoker = createActionInvoker(self, name, boundAction);
            actions[name] = actionInvoker;
            (!devMode() ? addHiddenFinalProp : addHiddenWritableProp)(self, name, actionInvoker);
        });
    };
    ModelType.prototype.volatile = function (fn) {
        var _this = this;
        var stateInitializer = function (self) {
            _this.instantiateVolatileState(self, fn(self));
            return self;
        };
        return this.cloneAndEnhance({ initializers: [stateInitializer] });
    };
    ModelType.prototype.instantiateVolatileState = function (self, state) {
        // check views return
        if (!isPlainObject(state))
            throw fail$1("volatile state initializer should return a plain object containing state");
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["set"])(self, state);
    };
    ModelType.prototype.extend = function (fn) {
        var _this = this;
        var initializer = function (self) {
            var _a = fn(self), actions = _a.actions, views = _a.views, state = _a.state, rest = __rest(_a, ["actions", "views", "state"]);
            for (var key in rest)
                throw fail$1("The `extend` function should return an object with a subset of the fields 'actions', 'views' and 'state'. Found invalid key '" + key + "'");
            if (state)
                _this.instantiateVolatileState(self, state);
            if (views)
                _this.instantiateViews(self, views);
            if (actions)
                _this.instantiateActions(self, actions);
            return self;
        };
        return this.cloneAndEnhance({ initializers: [initializer] });
    };
    ModelType.prototype.views = function (fn) {
        var _this = this;
        var viewInitializer = function (self) {
            _this.instantiateViews(self, fn(self));
            return self;
        };
        return this.cloneAndEnhance({ initializers: [viewInitializer] });
    };
    ModelType.prototype.instantiateViews = function (self, views) {
        // check views return
        if (!isPlainObject(views))
            throw fail$1("views initializer should return a plain object containing views");
        Object.keys(views).forEach(function (key) {
            // is this a computed property?
            var descriptor = Object.getOwnPropertyDescriptor(views, key);
            var value = descriptor.value;
            if ("get" in descriptor) {
                if (Object(mobx__WEBPACK_IMPORTED_MODULE_0__["isComputedProp"])(self, key)) {
                    var computedValue = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_getAdministration"])(self, key);
                    // TODO: mobx currently does not allow redefining computes yet, pending #1121
                    // FIXME: this binds to the internals of mobx!
                    computedValue.derivation = descriptor.get;
                    computedValue.scope = self;
                    if (descriptor.set)
                        computedValue.setter = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(computedValue.name + "-setter", descriptor.set);
                }
                else {
                    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["computed"])(self, key, descriptor, true);
                }
            }
            else if (typeof value === "function") {
                (!devMode() ? addHiddenFinalProp : addHiddenWritableProp)(self, key, value);
            }
            else {
                throw fail$1("A view member should either be a function or getter based property");
            }
        });
    };
    ModelType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var value = isStateTreeNode(initialValue)
            ? initialValue
            : this.applySnapshotPreProcessor(initialValue);
        return createObjectNode(this, parent, subpath, environment, value);
        // Optimization: record all prop- view- and action names after first construction, and generate an optimal base class
        // that pre-reserves all these fields for fast object-member lookups
    };
    ModelType.prototype.initializeChildNodes = function (objNode, initialSnapshot) {
        if (initialSnapshot === void 0) { initialSnapshot = {}; }
        var type = objNode.type;
        var result = {};
        type.forAllProps(function (name, childType) {
            result[name] = childType.instantiate(objNode, name, undefined, initialSnapshot[name]);
        });
        return result;
    };
    ModelType.prototype.createNewInstance = function (childNodes) {
        return mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].object(childNodes, EMPTY_OBJECT, mobxShallow);
    };
    ModelType.prototype.finalizeNewInstance = function (node, instance) {
        addHiddenFinalProp(instance, "toString", objectTypeToString);
        this.forAllProps(function (name) {
            Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_interceptReads"])(instance, name, node.unbox);
        });
        this.initializers.reduce(function (self, fn) { return fn(self); }, instance);
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["intercept"])(instance, this.willChange);
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observe"])(instance, this.didChange);
    };
    ModelType.prototype.willChange = function (chg) {
        // TODO: mobx typings don't seem to take into account that newValue can be set even when removing a prop
        var change = chg;
        var node = getStateTreeNode(change.object);
        var subpath = change.name;
        node.assertWritable({ subpath: subpath });
        var childType = node.type.properties[subpath];
        // only properties are typed, state are stored as-is references
        if (childType) {
            typecheckInternal(childType, change.newValue);
            change.newValue = childType.reconcile(node.getChildNode(subpath), change.newValue, node, subpath);
        }
        return change;
    };
    ModelType.prototype.didChange = function (chg) {
        // TODO: mobx typings don't seem to take into account that newValue can be set even when removing a prop
        var change = chg;
        var childNode = getStateTreeNode(change.object);
        var childType = childNode.type.properties[change.name];
        if (!childType) {
            // don't emit patches for volatile state
            return;
        }
        var oldChildValue = change.oldValue ? change.oldValue.snapshot : undefined;
        childNode.emitPatch({
            op: "replace",
            path: escapeJsonPath(change.name),
            value: change.newValue.snapshot,
            oldValue: oldChildValue
        }, childNode);
    };
    ModelType.prototype.getChildren = function (node) {
        var _this = this;
        var res = [];
        this.forAllProps(function (name) {
            res.push(_this.getChildNode(node, name));
        });
        return res;
    };
    ModelType.prototype.getChildNode = function (node, key) {
        if (!(key in this.properties))
            throw fail$1("Not a value property: " + key);
        var childNode = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_getAdministration"])(node.storedValue, key).value; // TODO: blegh!
        if (!childNode)
            throw fail$1("Node not available for property " + key);
        return childNode;
    };
    ModelType.prototype.getSnapshot = function (node, applyPostProcess) {
        var _this = this;
        if (applyPostProcess === void 0) { applyPostProcess = true; }
        var res = {};
        this.forAllProps(function (name, type) {
            Object(mobx__WEBPACK_IMPORTED_MODULE_0__["getAtom"])(node.storedValue, name).reportObserved();
            res[name] = _this.getChildNode(node, name).snapshot;
        });
        if (applyPostProcess) {
            return this.applySnapshotPostProcessor(res);
        }
        return res;
    };
    ModelType.prototype.processInitialSnapshot = function (childNodes) {
        var processed = {};
        Object.keys(childNodes).forEach(function (key) {
            processed[key] = childNodes[key].getSnapshot();
        });
        return this.applySnapshotPostProcessor(processed);
    };
    ModelType.prototype.applyPatchLocally = function (node, subpath, patch) {
        if (!(patch.op === "replace" || patch.op === "add")) {
            throw fail$1("object does not support operation " + patch.op);
        }
        node.storedValue[subpath] = patch.value;
    };
    ModelType.prototype.applySnapshot = function (node, snapshot) {
        var preProcessedSnapshot = this.applySnapshotPreProcessor(snapshot);
        typecheckInternal(this, preProcessedSnapshot);
        this.forAllProps(function (name) {
            node.storedValue[name] = preProcessedSnapshot[name];
        });
    };
    ModelType.prototype.applySnapshotPreProcessor = function (snapshot) {
        var processor = this.preProcessor;
        return processor ? processor.call(null, snapshot) : snapshot;
    };
    ModelType.prototype.applySnapshotPostProcessor = function (snapshot) {
        var postProcessor = this.postProcessor;
        if (postProcessor)
            return postProcessor.call(null, snapshot);
        return snapshot;
    };
    ModelType.prototype.getChildType = function (propertyName) {
        assertIsString(propertyName, 1);
        return this.properties[propertyName];
    };
    ModelType.prototype.isValidSnapshot = function (value, context) {
        var _this = this;
        var snapshot = this.applySnapshotPreProcessor(value);
        if (!isPlainObject(snapshot)) {
            return typeCheckFailure(context, snapshot, "Value is not a plain object");
        }
        return flattenTypeErrors(this.propertyNames.map(function (key) {
            return _this.properties[key].validate(snapshot[key], getContextForPath(context, key, _this.properties[key]));
        }));
    };
    ModelType.prototype.forAllProps = function (fn) {
        var _this = this;
        this.propertyNames.forEach(function (key) { return fn(key, _this.properties[key]); });
    };
    ModelType.prototype.describe = function () {
        var _this = this;
        // optimization: cache
        return ("{ " +
            this.propertyNames.map(function (key) { return key + ": " + _this.properties[key].describe(); }).join("; ") +
            " }");
    };
    ModelType.prototype.getDefaultSnapshot = function () {
        return EMPTY_OBJECT;
    };
    ModelType.prototype.removeChild = function (node, subpath) {
        node.storedValue[subpath] = undefined;
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
    ], ModelType.prototype, "applySnapshot", null);
    return ModelType;
}(ComplexType));
/**
 * `types.model` - Creates a new model type by providing a name, properties, volatile state and actions.
 *
 * See the [model type](https://github.com/mobxjs/mobx-state-tree#creating-models) description or the [getting started](https://github.com/mobxjs/mobx-state-tree/blob/master/docs/getting-started.md#getting-started-1) tutorial.
 */
function model() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name = typeof args[0] === "string" ? args.shift() : "AnonymousModel";
    var properties = args.shift() || {};
    return new ModelType({ name: name, properties: properties });
}
/**
 * `types.compose` - Composes a new model from one or more existing model types.
 * This method can be invoked in two forms:
 * Given 2 or more model types, the types are composed into a new Type.
 * Given first parameter as a string and 2 or more model types,
 * the types are composed into a new Type with the given name
 */
function compose() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // TODO: just join the base type names if no name is provided
    var hasTypename = typeof args[0] === "string";
    var typeName = hasTypename ? args[0] : "AnonymousModel";
    if (hasTypename) {
        args.shift();
    }
    // check all parameters
    if (devMode()) {
        args.forEach(function (type, i) {
            assertArg(type, isModelType, "mobx-state-tree model type", hasTypename ? i + 2 : i + 1);
        });
    }
    return args
        .reduce(function (prev, cur) {
        return prev.cloneAndEnhance({
            name: prev.name + "_" + cur.name,
            properties: cur.properties,
            initializers: cur.initializers,
            preProcessor: function (snapshot) {
                return cur.applySnapshotPreProcessor(prev.applySnapshotPreProcessor(snapshot));
            },
            postProcessor: function (snapshot) {
                return cur.applySnapshotPostProcessor(prev.applySnapshotPostProcessor(snapshot));
            }
        });
    })
        .named(typeName);
}
/**
 * Returns if a given value represents a model type.
 *
 * @param type
 * @returns
 */
function isModelType(type) {
    return isType(type) && (type.flags & TypeFlags.Object) > 0;
}

// TODO: implement CoreType using types.custom ?
/**
 * @internal
 * @hidden
 */
var CoreType = /** @class */ (function (_super) {
    __extends(CoreType, _super);
    function CoreType(name, flags, checker, initializer) {
        if (initializer === void 0) { initializer = identity; }
        var _this = _super.call(this, name) || this;
        _this.flags = flags;
        _this.checker = checker;
        _this.initializer = initializer;
        _this.flags = flags;
        return _this;
    }
    CoreType.prototype.describe = function () {
        return this.name;
    };
    CoreType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        return createScalarNode(this, parent, subpath, environment, initialValue);
    };
    CoreType.prototype.createNewInstance = function (snapshot) {
        return this.initializer(snapshot);
    };
    CoreType.prototype.isValidSnapshot = function (value, context) {
        if (isPrimitive(value) && this.checker(value)) {
            return typeCheckSuccess();
        }
        var typeName = this.name === "Date" ? "Date or a unix milliseconds timestamp" : this.name;
        return typeCheckFailure(context, value, "Value is not a " + typeName);
    };
    return CoreType;
}(SimpleType));
/**
 * `types.string` - Creates a type that can only contain a string value.
 * This type is used for string values by default
 *
 * Example:
 * ```ts
 * const Person = types.model({
 *   firstName: types.string,
 *   lastName: "Doe"
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var string = new CoreType("string", TypeFlags.String, function (v) { return typeof v === "string"; });
/**
 * `types.number` - Creates a type that can only contain a numeric value.
 * This type is used for numeric values by default
 *
 * Example:
 * ```ts
 * const Vector = types.model({
 *   x: types.number,
 *   y: 1.5
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var number = new CoreType("number", TypeFlags.Number, function (v) { return typeof v === "number"; });
/**
 * `types.integer` - Creates a type that can only contain an integer value.
 * This type is used for integer values by default
 *
 * Example:
 * ```ts
 * const Size = types.model({
 *   width: types.integer,
 *   height: 10
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var integer = new CoreType("integer", TypeFlags.Integer, function (v) { return isInteger(v); });
/**
 * `types.boolean` - Creates a type that can only contain a boolean value.
 * This type is used for boolean values by default
 *
 * Example:
 * ```ts
 * const Thing = types.model({
 *   isCool: types.boolean,
 *   isAwesome: false
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var boolean = new CoreType("boolean", TypeFlags.Boolean, function (v) { return typeof v === "boolean"; });
/**
 * `types.null` - The type of the value `null`
 */
var nullType = new CoreType("null", TypeFlags.Null, function (v) { return v === null; });
/**
 * `types.undefined` - The type of the value `undefined`
 */
var undefinedType = new CoreType("undefined", TypeFlags.Undefined, function (v) { return v === undefined; });
var _DatePrimitive = new CoreType("Date", TypeFlags.Date, function (v) { return typeof v === "number" || v instanceof Date; }, function (v) { return (v instanceof Date ? v : new Date(v)); });
_DatePrimitive.getSnapshot = function (node) {
    return node.storedValue.getTime();
};
/**
 * `types.Date` - Creates a type that can only contain a javascript Date value.
 *
 * Example:
 * ```ts
 * const LogLine = types.model({
 *   timestamp: types.Date,
 * })
 *
 * LogLine.create({ timestamp: new Date() })
 * ```
 */
var DatePrimitive = _DatePrimitive;
/**
 * @internal
 * @hidden
 */
function getPrimitiveFactoryFromValue(value) {
    switch (typeof value) {
        case "string":
            return string;
        case "number":
            return number; // In the future, isInteger(value) ? integer : number would be interesting, but would be too breaking for now
        case "boolean":
            return boolean;
        case "object":
            if (value instanceof Date)
                return DatePrimitive;
    }
    throw fail$1("Cannot determine primitive type from value " + value);
}
/**
 * Returns if a given value represents a primitive type.
 *
 * @param type
 * @returns
 */
function isPrimitiveType(type) {
    return (isType(type) &&
        (type.flags &
            (TypeFlags.String |
                TypeFlags.Number |
                TypeFlags.Integer |
                TypeFlags.Boolean |
                TypeFlags.Date)) >
            0);
}

/**
 * @internal
 * @hidden
 */
var Literal = /** @class */ (function (_super) {
    __extends(Literal, _super);
    function Literal(value) {
        var _this = _super.call(this, JSON.stringify(value)) || this;
        _this.flags = TypeFlags.Literal;
        _this.value = value;
        return _this;
    }
    Literal.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        return createScalarNode(this, parent, subpath, environment, initialValue);
    };
    Literal.prototype.describe = function () {
        return JSON.stringify(this.value);
    };
    Literal.prototype.isValidSnapshot = function (value, context) {
        if (isPrimitive(value) && value === this.value) {
            return typeCheckSuccess();
        }
        return typeCheckFailure(context, value, "Value is not a literal " + JSON.stringify(this.value));
    };
    return Literal;
}(SimpleType));
/**
 * `types.literal` - The literal type will return a type that will match only the exact given type.
 * The given value must be a primitive, in order to be serialized to a snapshot correctly.
 * You can use literal to match exact strings for example the exact male or female string.
 *
 * Example:
 * ```ts
 * const Person = types.model({
 *     name: types.string,
 *     gender: types.union(types.literal('male'), types.literal('female'))
 * })
 * ```
 *
 * @param value The value to use in the strict equal check
 * @returns
 */
function literal(value) {
    // check that the given value is a primitive
    assertArg(value, isPrimitive, "primitive", 1);
    return new Literal(value);
}
/**
 * Returns if a given value represents a literal type.
 *
 * @param type
 * @returns
 */
function isLiteralType(type) {
    return isType(type) && (type.flags & TypeFlags.Literal) > 0;
}

var Refinement = /** @class */ (function (_super) {
    __extends(Refinement, _super);
    function Refinement(name, _subtype, _predicate, _message) {
        var _this = _super.call(this, name) || this;
        _this._subtype = _subtype;
        _this._predicate = _predicate;
        _this._message = _message;
        return _this;
    }
    Object.defineProperty(Refinement.prototype, "flags", {
        get: function () {
            return this._subtype.flags | TypeFlags.Refinement;
        },
        enumerable: true,
        configurable: true
    });
    Refinement.prototype.describe = function () {
        return this.name;
    };
    Refinement.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        // create the child type
        return this._subtype.instantiate(parent, subpath, environment, initialValue);
    };
    Refinement.prototype.isAssignableFrom = function (type) {
        return this._subtype.isAssignableFrom(type);
    };
    Refinement.prototype.isValidSnapshot = function (value, context) {
        var subtypeErrors = this._subtype.validate(value, context);
        if (subtypeErrors.length > 0)
            return subtypeErrors;
        var snapshot = isStateTreeNode(value) ? getStateTreeNode(value).snapshot : value;
        if (!this._predicate(snapshot)) {
            return typeCheckFailure(context, value, this._message(value));
        }
        return typeCheckSuccess();
    };
    Refinement.prototype.reconcile = function (current, newValue, parent, subpath) {
        return this._subtype.reconcile(current, newValue, parent, subpath);
    };
    Refinement.prototype.getSubTypes = function () {
        return this._subtype;
    };
    return Refinement;
}(BaseType));
/**
 * `types.refinement` - Creates a type that is more specific than the base type, e.g. `types.refinement(types.string, value => value.length > 5)` to create a type of strings that can only be longer then 5.
 *
 * @param name
 * @param type
 * @param predicate
 * @returns
 */
function refinement() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name = typeof args[0] === "string" ? args.shift() : isType(args[0]) ? args[0].name : null;
    var type = args[0];
    var predicate = args[1];
    var message = args[2]
        ? args[2]
        : function (v) { return "Value does not respect the refinement predicate"; };
    // ensures all parameters are correct
    assertIsType(type, [1, 2]);
    assertIsString(name, 1);
    assertIsFunction(predicate, [2, 3]);
    assertIsFunction(message, [3, 4]);
    return new Refinement(name, type, predicate, message);
}
/**
 * Returns if a given value is a refinement type.
 *
 * @param type
 * @returns
 */
function isRefinementType(type) {
    return (type.flags & TypeFlags.Refinement) > 0;
}

/**
 * `types.enumeration` - Can be used to create an string based enumeration.
 * (note: this methods is just sugar for a union of string literals)
 *
 * Example:
 * ```ts
 * const TrafficLight = types.model({
 *   color: types.enumeration("Color", ["Red", "Orange", "Green"])
 * })
 * ```
 *
 * @param name descriptive name of the enumeration (optional)
 * @param options possible values this enumeration can have
 * @returns
 */
function enumeration(name, options) {
    var realOptions = typeof name === "string" ? options : name;
    // check all options
    if (devMode()) {
        realOptions.forEach(function (option, i) {
            assertIsString(option, i + 1);
        });
    }
    var type = union.apply(void 0, __spread(realOptions.map(function (option) { return literal("" + option); })));
    if (typeof name === "string")
        type.name = name;
    return type;
}

/**
 * @internal
 * @hidden
 */
var Union = /** @class */ (function (_super) {
    __extends(Union, _super);
    function Union(name, _types, options) {
        var _this = _super.call(this, name) || this;
        _this._types = _types;
        _this._eager = true;
        options = __assign({ eager: true, dispatcher: undefined }, options);
        _this._dispatcher = options.dispatcher;
        if (!options.eager)
            _this._eager = false;
        return _this;
    }
    Object.defineProperty(Union.prototype, "flags", {
        get: function () {
            var result = TypeFlags.Union;
            this._types.forEach(function (type) {
                result |= type.flags;
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Union.prototype.isAssignableFrom = function (type) {
        return this._types.some(function (subType) { return subType.isAssignableFrom(type); });
    };
    Union.prototype.describe = function () {
        return "(" + this._types.map(function (factory) { return factory.describe(); }).join(" | ") + ")";
    };
    Union.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var type = this.determineType(initialValue, undefined);
        if (!type)
            throw fail$1("No matching type for union " + this.describe()); // can happen in prod builds
        return type.instantiate(parent, subpath, environment, initialValue);
    };
    Union.prototype.reconcile = function (current, newValue, parent, subpath) {
        var type = this.determineType(newValue, current.type);
        if (!type)
            throw fail$1("No matching type for union " + this.describe()); // can happen in prod builds
        return type.reconcile(current, newValue, parent, subpath);
    };
    Union.prototype.determineType = function (value, reconcileCurrentType) {
        // try the dispatcher, if defined
        if (this._dispatcher) {
            return this._dispatcher(value);
        }
        // find the most accomodating type
        // if we are using reconciliation try the current node type first (fix for #1045)
        if (reconcileCurrentType) {
            if (reconcileCurrentType.is(value)) {
                return reconcileCurrentType;
            }
            return this._types.filter(function (t) { return t !== reconcileCurrentType; }).find(function (type) { return type.is(value); });
        }
        else {
            return this._types.find(function (type) { return type.is(value); });
        }
    };
    Union.prototype.isValidSnapshot = function (value, context) {
        if (this._dispatcher) {
            return this._dispatcher(value).validate(value, context);
        }
        var allErrors = [];
        var applicableTypes = 0;
        for (var i = 0; i < this._types.length; i++) {
            var type = this._types[i];
            var errors = type.validate(value, context);
            if (errors.length === 0) {
                if (this._eager)
                    return typeCheckSuccess();
                else
                    applicableTypes++;
            }
            else {
                allErrors.push(errors);
            }
        }
        if (applicableTypes === 1)
            return typeCheckSuccess();
        return typeCheckFailure(context, value, "No type is applicable for the union").concat(flattenTypeErrors(allErrors));
    };
    Union.prototype.getSubTypes = function () {
        return this._types;
    };
    return Union;
}(BaseType));
/**
 * `types.union` - Create a union of multiple types. If the correct type cannot be inferred unambiguously from a snapshot, provide a dispatcher function of the form `(snapshot) => Type`.
 *
 * @param optionsOrType
 * @param otherTypes
 * @returns
 */
function union(optionsOrType) {
    var otherTypes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherTypes[_i - 1] = arguments[_i];
    }
    var options = isType(optionsOrType) ? undefined : optionsOrType;
    var types = isType(optionsOrType) ? __spread([optionsOrType], otherTypes) : otherTypes;
    var name = "(" + types.map(function (type) { return type.name; }).join(" | ") + ")";
    // check all options
    if (devMode()) {
        if (options) {
            assertArg(options, function (o) { return isPlainObject(o); }, "object { eager?: boolean, dispatcher?: Function }", 1);
        }
        types.forEach(function (type, i) {
            assertIsType(type, options ? i + 2 : i + 1);
        });
    }
    return new Union(name, types, options);
}
/**
 * Returns if a given value represents a union type.
 *
 * @param type
 * @returns
 */
function isUnionType(type) {
    return (type.flags & TypeFlags.Union) > 0;
}

/**
 * @hidden
 * @internal
 */
var OptionalValue = /** @class */ (function (_super) {
    __extends(OptionalValue, _super);
    function OptionalValue(_subtype, _defaultValue, optionalValues) {
        var _this = _super.call(this, _subtype.name) || this;
        _this._subtype = _subtype;
        _this._defaultValue = _defaultValue;
        _this.optionalValues = optionalValues;
        return _this;
    }
    Object.defineProperty(OptionalValue.prototype, "flags", {
        get: function () {
            return this._subtype.flags | TypeFlags.Optional;
        },
        enumerable: true,
        configurable: true
    });
    OptionalValue.prototype.describe = function () {
        return this._subtype.describe() + "?";
    };
    OptionalValue.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        if (this.optionalValues.indexOf(initialValue) >= 0) {
            var defaultInstanceOrSnapshot = this.getDefaultInstanceOrSnapshot();
            return this._subtype.instantiate(parent, subpath, environment, defaultInstanceOrSnapshot);
        }
        return this._subtype.instantiate(parent, subpath, environment, initialValue);
    };
    OptionalValue.prototype.reconcile = function (current, newValue, parent, subpath) {
        return this._subtype.reconcile(current, this.optionalValues.indexOf(newValue) < 0 && this._subtype.is(newValue)
            ? newValue
            : this.getDefaultInstanceOrSnapshot(), parent, subpath);
    };
    OptionalValue.prototype.getDefaultInstanceOrSnapshot = function () {
        var defaultInstanceOrSnapshot = typeof this._defaultValue === "function"
            ? this._defaultValue()
            : this._defaultValue;
        // while static values are already snapshots and checked on types.optional
        // generator functions must always be rechecked just in case
        if (typeof this._defaultValue === "function") {
            typecheckInternal(this, defaultInstanceOrSnapshot);
        }
        return defaultInstanceOrSnapshot;
    };
    OptionalValue.prototype.isValidSnapshot = function (value, context) {
        // defaulted values can be skipped
        if (this.optionalValues.indexOf(value) >= 0) {
            return typeCheckSuccess();
        }
        // bounce validation to the sub-type
        return this._subtype.validate(value, context);
    };
    OptionalValue.prototype.isAssignableFrom = function (type) {
        return this._subtype.isAssignableFrom(type);
    };
    OptionalValue.prototype.getSubTypes = function () {
        return this._subtype;
    };
    return OptionalValue;
}(BaseType));
function checkOptionalPreconditions(type, defaultValueOrFunction) {
    // make sure we never pass direct instances
    if (typeof defaultValueOrFunction !== "function" && isStateTreeNode(defaultValueOrFunction)) {
        throw fail$1("default value cannot be an instance, pass a snapshot or a function that creates an instance/snapshot instead");
    }
    assertIsType(type, 1);
    if (devMode()) {
        // we only check default values if they are passed directly
        // if they are generator functions they will be checked once they are generated
        // we don't check generator function results here to avoid generating a node just for type-checking purposes
        // which might generate side-effects
        if (typeof defaultValueOrFunction !== "function") {
            typecheckInternal(type, defaultValueOrFunction);
        }
    }
}
/**
 * `types.optional` - Can be used to create a property with a default value.
 *
 * Depending on the third argument (`optionalValues`) there are two ways of operation:
 * - If the argument is not provided, then if a value is not provided in the snapshot (`undefined` or missing),
 *   it will default to the provided `defaultValue`
 * - If the argument is provided, then if the value in the snapshot matches one of the optional values inside the array then it will
 *   default to the provided `defaultValue`. Additionally, if one of the optional values inside the array is `undefined` then a missing
 *   property is also valid.
 *
 *   Note that it is also possible to include values of the same type as the intended subtype as optional values,
 *   in this case the optional value will be transformed into the `defaultValue` (e.g. `types.optional(types.string, "unnamed", [undefined, ""])`
 *   will transform the snapshot values `undefined` (and therefore missing) and empty strings into the string `"unnamed"` when it gets
 *   instantiated).
 *
 * If `defaultValue` is a function, the function will be invoked for every new instance.
 * Applying a snapshot in which the optional value is one of the optional values (or `undefined`/_not_ present if none are provided) causes the
 * value to be reset.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   title: types.string,
 *   subtitle1: types.optional(types.string, "", [null]),
 *   subtitle2: types.optional(types.string, "", [null, undefined]),
 *   done: types.optional(types.boolean, false),
 *   created: types.optional(types.Date, () => new Date()),
 * })
 *
 * // if done is missing / undefined it will become false
 * // if created is missing / undefined it will get a freshly generated timestamp
 * // if subtitle1 is null it will default to "", but it cannot be missing or undefined
 * // if subtitle2 is null or undefined it will default to ""; since it can be undefined it can also be missing
 * const todo = Todo.create({ title: "Get coffee", subtitle1: null })
 * ```
 *
 * @param type
 * @param defaultValueOrFunction
 * @param optionalValues an optional array with zero or more primitive values (string, number, boolean, null or undefined)
 *                       that will be converted into the default. `[ undefined ]` is assumed when none is provided
 * @returns
 */
function optional(type, defaultValueOrFunction, optionalValues) {
    checkOptionalPreconditions(type, defaultValueOrFunction);
    return new OptionalValue(type, defaultValueOrFunction, optionalValues ? optionalValues : undefinedAsOptionalValues);
}
var undefinedAsOptionalValues = [undefined];
/**
 * Returns if a value represents an optional type.
 *
 * @template IT
 * @param type
 * @returns
 */
function isOptionalType(type) {
    return isType(type) && (type.flags & TypeFlags.Optional) > 0;
}

var optionalUndefinedType = optional(undefinedType, undefined);
var optionalNullType = optional(nullType, null);
/**
 * `types.maybe` - Maybe will make a type nullable, and also optional.
 * The value `undefined` will be used to represent nullability.
 *
 * @param type
 * @returns
 */
function maybe(type) {
    assertIsType(type, 1);
    return union(type, optionalUndefinedType);
}
/**
 * `types.maybeNull` - Maybe will make a type nullable, and also optional.
 * The value `null` will be used to represent no value.
 *
 * @param type
 * @returns
 */
function maybeNull(type) {
    assertIsType(type, 1);
    return union(type, optionalNullType);
}

var Late = /** @class */ (function (_super) {
    __extends(Late, _super);
    function Late(name, _definition) {
        var _this = _super.call(this, name) || this;
        _this._definition = _definition;
        return _this;
    }
    Object.defineProperty(Late.prototype, "flags", {
        get: function () {
            return (this._subType ? this._subType.flags : 0) | TypeFlags.Late;
        },
        enumerable: true,
        configurable: true
    });
    Late.prototype.getSubType = function (mustSucceed) {
        if (!this._subType) {
            var t = undefined;
            try {
                t = this._definition();
            }
            catch (e) {
                if (e instanceof ReferenceError)
                    // can happen in strict ES5 code when a definition is self refering
                    t = undefined;
                else
                    throw e;
            }
            if (mustSucceed && t === undefined)
                throw fail$1("Late type seems to be used too early, the definition (still) returns undefined");
            if (t) {
                if (devMode() && !isType(t))
                    throw fail$1("Failed to determine subtype, make sure types.late returns a type definition.");
                this._subType = t;
            }
        }
        return this._subType;
    };
    Late.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        return this.getSubType(true).instantiate(parent, subpath, environment, initialValue);
    };
    Late.prototype.reconcile = function (current, newValue, parent, subpath) {
        return this.getSubType(true).reconcile(current, newValue, parent, subpath);
    };
    Late.prototype.describe = function () {
        var t = this.getSubType(false);
        return t ? t.name : "<uknown late type>";
    };
    Late.prototype.isValidSnapshot = function (value, context) {
        var t = this.getSubType(false);
        if (!t) {
            // See #916; the variable the definition closure is pointing to wasn't defined yet, so can't be evaluted yet here
            return typeCheckSuccess();
        }
        return t.validate(value, context);
    };
    Late.prototype.isAssignableFrom = function (type) {
        var t = this.getSubType(false);
        return t ? t.isAssignableFrom(type) : false;
    };
    Late.prototype.getSubTypes = function () {
        var subtype = this.getSubType(false);
        return subtype ? subtype : cannotDetermineSubtype;
    };
    return Late;
}(BaseType));
/**
 * `types.late` - Defines a type that gets implemented later. This is useful when you have to deal with circular dependencies.
 * Please notice that when defining circular dependencies TypeScript isn't smart enough to inference them.
 *
 * Example:
 * ```ts
 *   // TypeScript isn't smart enough to infer self referencing types.
 *  const Node = types.model({
 *       children: types.array(types.late((): IAnyModelType => Node)) // then typecast each array element to Instance<typeof Node>
 *  })
 * ```
 *
 * @param name The name to use for the type that will be returned.
 * @param type A function that returns the type that will be defined.
 * @returns
 */
function late(nameOrType, maybeType) {
    var name = typeof nameOrType === "string" ? nameOrType : "late(" + nameOrType.toString() + ")";
    var type = typeof nameOrType === "string" ? maybeType : nameOrType;
    // checks that the type is actually a late type
    if (devMode()) {
        if (!(typeof type === "function" && type.length === 0))
            throw fail$1("Invalid late type, expected a function with zero arguments that returns a type, got: " +
                type);
    }
    return new Late(name, type);
}
/**
 * Returns if a given value represents a late type.
 *
 * @param type
 * @returns
 */
function isLateType(type) {
    return isType(type) && (type.flags & TypeFlags.Late) > 0;
}

/**
 * @internal
 * @hidden
 */
var Frozen = /** @class */ (function (_super) {
    __extends(Frozen, _super);
    function Frozen(subType) {
        var _this = _super.call(this, subType ? "frozen(" + subType.name + ")" : "frozen") || this;
        _this.subType = subType;
        _this.flags = TypeFlags.Frozen;
        return _this;
    }
    Frozen.prototype.describe = function () {
        return "<any immutable value>";
    };
    Frozen.prototype.instantiate = function (parent, subpath, environment, value) {
        // create the node
        return createScalarNode(this, parent, subpath, environment, deepFreeze(value));
    };
    Frozen.prototype.isValidSnapshot = function (value, context) {
        if (!isSerializable(value)) {
            return typeCheckFailure(context, value, "Value is not serializable and cannot be frozen");
        }
        if (this.subType)
            return this.subType.validate(value, context);
        return typeCheckSuccess();
    };
    return Frozen;
}(SimpleType));
var untypedFrozenInstance = new Frozen();
/**
 * `types.frozen` - Frozen can be used to store any value that is serializable in itself (that is valid JSON).
 * Frozen values need to be immutable or treated as if immutable. They need be serializable as well.
 * Values stored in frozen will snapshotted as-is by MST, and internal changes will not be tracked.
 *
 * This is useful to store complex, but immutable values like vectors etc. It can form a powerful bridge to parts of your application that should be immutable, or that assume data to be immutable.
 *
 * Note: if you want to store free-form state that is mutable, or not serializeable, consider using volatile state instead.
 *
 * Frozen properties can be defined in three different ways
 * 1. `types.frozen(SubType)` - provide a valid MST type and frozen will check if the provided data conforms the snapshot for that type
 * 2. `types.frozen({ someDefaultValue: true})` - provide a primitive value, object or array, and MST will infer the type from that object, and also make it the default value for the field
 * 3. `types.frozen<TypeScriptType>()` - provide a typescript type, to help in strongly typing the field (design time only)
 *
 * Example:
 * ```ts
 * const GameCharacter = types.model({
 *   name: string,
 *   location: types.frozen({ x: 0, y: 0})
 * })
 *
 * const hero = GameCharacter.create({
 *   name: "Mario",
 *   location: { x: 7, y: 4 }
 * })
 *
 * hero.location = { x: 10, y: 2 } // OK
 * hero.location.x = 7 // Not ok!
 * ```
 *
 * ```ts
 * type Point = { x: number, y: number }
 *    const Mouse = types.model({
 *         loc: types.frozen<Point>()
 *    })
 * ```
 *
 * @param defaultValueOrType
 * @returns
 */
function frozen(arg) {
    if (arguments.length === 0)
        return untypedFrozenInstance;
    else if (isType(arg))
        return new Frozen(arg);
    else
        return optional(untypedFrozenInstance, arg);
}
/**
 * Returns if a given value represents a frozen type.
 *
 * @param type
 * @returns
 */
function isFrozenType(type) {
    return isType(type) && (type.flags & TypeFlags.Frozen) > 0;
}

function getInvalidationCause(hook) {
    switch (hook) {
        case Hook.beforeDestroy:
            return "destroy";
        case Hook.beforeDetach:
            return "detach";
        default:
            return undefined;
    }
}
var StoredReference = /** @class */ (function () {
    function StoredReference(value, targetType) {
        this.targetType = targetType;
        if (isValidIdentifier(value)) {
            this.identifier = value;
        }
        else if (isStateTreeNode(value)) {
            var targetNode = getStateTreeNode(value);
            if (!targetNode.identifierAttribute)
                throw fail$1("Can only store references with a defined identifier attribute.");
            var id = targetNode.unnormalizedIdentifier;
            if (id === null || id === undefined) {
                throw fail$1("Can only store references to tree nodes with a defined identifier.");
            }
            this.identifier = id;
        }
        else {
            throw fail$1("Can only store references to tree nodes or identifiers, got: '" + value + "'");
        }
    }
    StoredReference.prototype.updateResolvedReference = function (node) {
        var normalizedId = normalizeIdentifier(this.identifier);
        var root = node.root;
        var lastCacheModification = root.identifierCache.getLastCacheModificationPerId(normalizedId);
        if (!this.resolvedReference ||
            this.resolvedReference.lastCacheModification !== lastCacheModification) {
            var targetType = this.targetType;
            // reference was initialized with the identifier of the target
            var target = root.identifierCache.resolve(targetType, normalizedId);
            if (!target) {
                throw new InvalidReferenceError("[mobx-state-tree] Failed to resolve reference '" + this.identifier + "' to type '" + this.targetType.name + "' (from node: " + node.path + ")");
            }
            this.resolvedReference = {
                node: target,
                lastCacheModification: lastCacheModification
            };
        }
    };
    Object.defineProperty(StoredReference.prototype, "resolvedValue", {
        get: function () {
            this.updateResolvedReference(this.node);
            return this.resolvedReference.node.value;
        },
        enumerable: true,
        configurable: true
    });
    return StoredReference;
}());
/**
 * @internal
 * @hidden
 */
var InvalidReferenceError = /** @class */ (function (_super) {
    __extends(InvalidReferenceError, _super);
    function InvalidReferenceError(m) {
        var _this = _super.call(this, m) || this;
        Object.setPrototypeOf(_this, InvalidReferenceError.prototype);
        return _this;
    }
    return InvalidReferenceError;
}(Error));
/**
 * @internal
 * @hidden
 */
var BaseReferenceType = /** @class */ (function (_super) {
    __extends(BaseReferenceType, _super);
    function BaseReferenceType(targetType, onInvalidated) {
        var _this = _super.call(this, "reference(" + targetType.name + ")") || this;
        _this.targetType = targetType;
        _this.onInvalidated = onInvalidated;
        _this.flags = TypeFlags.Reference;
        return _this;
    }
    BaseReferenceType.prototype.describe = function () {
        return this.name;
    };
    BaseReferenceType.prototype.isAssignableFrom = function (type) {
        return this.targetType.isAssignableFrom(type);
    };
    BaseReferenceType.prototype.isValidSnapshot = function (value, context) {
        return isValidIdentifier(value)
            ? typeCheckSuccess()
            : typeCheckFailure(context, value, "Value is not a valid identifier, which is a string or a number");
    };
    BaseReferenceType.prototype.fireInvalidated = function (cause, storedRefNode, referenceId, refTargetNode) {
        // to actually invalidate a reference we need an alive parent,
        // since it is a scalar value (immutable-ish) and we need to change it
        // from the parent
        var storedRefParentNode = storedRefNode.parent;
        if (!storedRefParentNode || !storedRefParentNode.isAlive) {
            return;
        }
        var storedRefParentValue = storedRefParentNode.storedValue;
        if (!storedRefParentValue) {
            return;
        }
        this.onInvalidated({
            cause: cause,
            parent: storedRefParentValue,
            invalidTarget: refTargetNode ? refTargetNode.storedValue : undefined,
            invalidId: referenceId,
            replaceRef: function (newRef) {
                applyPatch(storedRefNode.root.storedValue, {
                    op: "replace",
                    value: newRef,
                    path: storedRefNode.path
                });
            },
            removeRef: function () {
                if (isModelType(storedRefParentNode.type)) {
                    this.replaceRef(undefined);
                }
                else {
                    applyPatch(storedRefNode.root.storedValue, {
                        op: "remove",
                        path: storedRefNode.path
                    });
                }
            }
        });
    };
    BaseReferenceType.prototype.addTargetNodeWatcher = function (storedRefNode, referenceId) {
        var _this = this;
        // this will make sure the target node becomes created
        var refTargetValue = this.getValue(storedRefNode);
        if (!refTargetValue) {
            return undefined;
        }
        var refTargetNode = getStateTreeNode(refTargetValue);
        var hookHandler = function (_, refTargetNodeHook) {
            var cause = getInvalidationCause(refTargetNodeHook);
            if (!cause) {
                return;
            }
            _this.fireInvalidated(cause, storedRefNode, referenceId, refTargetNode);
        };
        var refTargetDetachHookDisposer = refTargetNode.registerHook(Hook.beforeDetach, hookHandler);
        var refTargetDestroyHookDisposer = refTargetNode.registerHook(Hook.beforeDestroy, hookHandler);
        return function () {
            refTargetDetachHookDisposer();
            refTargetDestroyHookDisposer();
        };
    };
    BaseReferenceType.prototype.watchTargetNodeForInvalidations = function (storedRefNode, identifier, customGetSet) {
        var _this = this;
        if (!this.onInvalidated) {
            return;
        }
        var onRefTargetDestroyedHookDisposer;
        // get rid of the watcher hook when the stored ref node is destroyed
        // detached is ignored since scalar nodes (where the reference resides) cannot be detached
        storedRefNode.registerHook(Hook.beforeDestroy, function () {
            if (onRefTargetDestroyedHookDisposer) {
                onRefTargetDestroyedHookDisposer();
            }
        });
        var startWatching = function (sync) {
            // re-create hook in case the stored ref gets reattached
            if (onRefTargetDestroyedHookDisposer) {
                onRefTargetDestroyedHookDisposer();
            }
            // make sure the target node is actually there and initialized
            var storedRefParentNode = storedRefNode.parent;
            var storedRefParentValue = storedRefParentNode && storedRefParentNode.storedValue;
            if (storedRefParentNode && storedRefParentNode.isAlive && storedRefParentValue) {
                var refTargetNodeExists = void 0;
                if (customGetSet) {
                    refTargetNodeExists = !!customGetSet.get(identifier, storedRefParentValue);
                }
                else {
                    refTargetNodeExists = storedRefNode.root.identifierCache.has(_this.targetType, normalizeIdentifier(identifier));
                }
                if (!refTargetNodeExists) {
                    // we cannot change the reference in sync mode
                    // since we are in the middle of a reconciliation/instantiation and the change would be overwritten
                    // for those cases just let the wrong reference be assigned and fail upon usage
                    // (like current references do)
                    // this means that effectively this code will only run when it is created from a snapshot
                    if (!sync) {
                        _this.fireInvalidated("invalidSnapshotReference", storedRefNode, identifier, null);
                    }
                }
                else {
                    onRefTargetDestroyedHookDisposer = _this.addTargetNodeWatcher(storedRefNode, identifier);
                }
            }
        };
        if (storedRefNode.state === NodeLifeCycle.FINALIZED) {
            // already attached, so the whole tree is ready
            startWatching(true);
        }
        else {
            if (!storedRefNode.isRoot) {
                // start watching once the whole tree is ready
                storedRefNode.root.registerHook(Hook.afterCreationFinalization, function () {
                    // make sure to attach it so it can start listening
                    if (storedRefNode.parent) {
                        storedRefNode.parent.createObservableInstanceIfNeeded();
                    }
                });
            }
            // start watching once the node is attached somewhere / parent changes
            storedRefNode.registerHook(Hook.afterAttach, function () {
                startWatching(false);
            });
        }
    };
    return BaseReferenceType;
}(SimpleType));
/**
 * @internal
 * @hidden
 */
var IdentifierReferenceType = /** @class */ (function (_super) {
    __extends(IdentifierReferenceType, _super);
    function IdentifierReferenceType(targetType, onInvalidated) {
        return _super.call(this, targetType, onInvalidated) || this;
    }
    IdentifierReferenceType.prototype.getValue = function (storedRefNode) {
        if (!storedRefNode.isAlive)
            return undefined;
        var storedRef = storedRefNode.storedValue;
        return storedRef.resolvedValue;
    };
    IdentifierReferenceType.prototype.getSnapshot = function (storedRefNode) {
        var ref = storedRefNode.storedValue;
        return ref.identifier;
    };
    IdentifierReferenceType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var identifier = isStateTreeNode(initialValue)
            ? getIdentifier(initialValue)
            : initialValue;
        var storedRef = new StoredReference(initialValue, this.targetType);
        var storedRefNode = createScalarNode(this, parent, subpath, environment, storedRef);
        storedRef.node = storedRefNode;
        this.watchTargetNodeForInvalidations(storedRefNode, identifier, undefined);
        return storedRefNode;
    };
    IdentifierReferenceType.prototype.reconcile = function (current, newValue, parent, subpath) {
        if (!current.isDetaching && current.type === this) {
            var compareByValue = isStateTreeNode(newValue);
            var ref = current.storedValue;
            if ((!compareByValue && ref.identifier === newValue) ||
                (compareByValue && ref.resolvedValue === newValue)) {
                current.setParent(parent, subpath);
                return current;
            }
        }
        var newNode = this.instantiate(parent, subpath, undefined, newValue);
        current.die(); // noop if detaching
        return newNode;
    };
    return IdentifierReferenceType;
}(BaseReferenceType));
/**
 * @internal
 * @hidden
 */
var CustomReferenceType = /** @class */ (function (_super) {
    __extends(CustomReferenceType, _super);
    function CustomReferenceType(targetType, options, onInvalidated) {
        var _this = _super.call(this, targetType, onInvalidated) || this;
        _this.options = options;
        return _this;
    }
    CustomReferenceType.prototype.getValue = function (storedRefNode) {
        if (!storedRefNode.isAlive)
            return undefined;
        var referencedNode = this.options.get(storedRefNode.storedValue, storedRefNode.parent ? storedRefNode.parent.storedValue : null);
        return referencedNode;
    };
    CustomReferenceType.prototype.getSnapshot = function (storedRefNode) {
        return storedRefNode.storedValue;
    };
    CustomReferenceType.prototype.instantiate = function (parent, subpath, environment, newValue) {
        var identifier = isStateTreeNode(newValue)
            ? this.options.set(newValue, parent ? parent.storedValue : null)
            : newValue;
        var storedRefNode = createScalarNode(this, parent, subpath, environment, identifier);
        this.watchTargetNodeForInvalidations(storedRefNode, identifier, this.options);
        return storedRefNode;
    };
    CustomReferenceType.prototype.reconcile = function (current, newValue, parent, subpath) {
        var newIdentifier = isStateTreeNode(newValue)
            ? this.options.set(newValue, current ? current.storedValue : null)
            : newValue;
        if (!current.isDetaching &&
            current.type === this &&
            current.storedValue === newIdentifier) {
            current.setParent(parent, subpath);
            return current;
        }
        var newNode = this.instantiate(parent, subpath, undefined, newIdentifier);
        current.die(); // noop if detaching
        return newNode;
    };
    return CustomReferenceType;
}(BaseReferenceType));
/**
 * `types.reference` - Creates a reference to another type, which should have defined an identifier.
 * See also the [reference and identifiers](https://github.com/mobxjs/mobx-state-tree#references-and-identifiers) section.
 */
function reference(subType, options) {
    assertIsType(subType, 1);
    if (devMode()) {
        if (arguments.length === 2 && typeof arguments[1] === "string") {
            // istanbul ignore next
            throw fail$1("References with base path are no longer supported. Please remove the base path.");
        }
    }
    var getSetOptions = options ? options : undefined;
    var onInvalidated = options
        ? options.onInvalidated
        : undefined;
    if (getSetOptions && (getSetOptions.get || getSetOptions.set)) {
        if (devMode()) {
            if (!getSetOptions.get || !getSetOptions.set) {
                throw fail$1("reference options must either contain both a 'get' and a 'set' method or none of them");
            }
        }
        return new CustomReferenceType(subType, {
            get: getSetOptions.get,
            set: getSetOptions.set
        }, onInvalidated);
    }
    else {
        return new IdentifierReferenceType(subType, onInvalidated);
    }
}
/**
 * Returns if a given value represents a reference type.
 *
 * @param type
 * @returns
 */
function isReferenceType(type) {
    return (type.flags & TypeFlags.Reference) > 0;
}
/**
 * `types.safeReference` - A safe reference is like a standard reference, except that it accepts the undefined value by default
 * and automatically sets itself to undefined (when the parent is a model) / removes itself from arrays and maps
 * when the reference it is pointing to gets detached/destroyed.
 *
 * Strictly speaking it is a `types.maybe(types.reference(X))` with a customized `onInvalidate` option.
 *
 * @param subType
 * @param options
 * @returns
 */
function safeReference(subType, options) {
    return maybe(reference(subType, __assign({}, options, { onInvalidated: function (ev) {
            ev.removeRef();
        } })));
}

var BaseIdentifierType = /** @class */ (function (_super) {
    __extends(BaseIdentifierType, _super);
    function BaseIdentifierType(name, validType) {
        var _this = _super.call(this, name) || this;
        _this.validType = validType;
        _this.flags = TypeFlags.Identifier;
        return _this;
    }
    BaseIdentifierType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        if (!parent || !(parent.type instanceof ModelType))
            throw fail$1("Identifier types can only be instantiated as direct child of a model type");
        return createScalarNode(this, parent, subpath, environment, initialValue);
    };
    BaseIdentifierType.prototype.reconcile = function (current, newValue, parent, subpath) {
        // we don't consider detaching here since identifier are scalar nodes, and scalar nodes cannot be detached
        if (current.storedValue !== newValue)
            throw fail$1("Tried to change identifier from '" + current.storedValue + "' to '" + newValue + "'. Changing identifiers is not allowed.");
        current.setParent(parent, subpath);
        return current;
    };
    BaseIdentifierType.prototype.isValidSnapshot = function (value, context) {
        if (typeof value !== this.validType) {
            return typeCheckFailure(context, value, "Value is not a valid " + this.describe() + ", expected a " + this.validType);
        }
        return typeCheckSuccess();
    };
    return BaseIdentifierType;
}(SimpleType));
/**
 * @internal
 * @hidden
 */
var IdentifierType = /** @class */ (function (_super) {
    __extends(IdentifierType, _super);
    function IdentifierType() {
        var _this = _super.call(this, "identifier", "string") || this;
        _this.flags = TypeFlags.Identifier;
        return _this;
    }
    IdentifierType.prototype.describe = function () {
        return "identifier";
    };
    return IdentifierType;
}(BaseIdentifierType));
/**
 * @internal
 * @hidden
 */
var IdentifierNumberType = /** @class */ (function (_super) {
    __extends(IdentifierNumberType, _super);
    function IdentifierNumberType() {
        return _super.call(this, "identifierNumber", "number") || this;
    }
    IdentifierNumberType.prototype.getSnapshot = function (node) {
        return node.storedValue;
    };
    IdentifierNumberType.prototype.describe = function () {
        return "identifierNumber";
    };
    return IdentifierNumberType;
}(BaseIdentifierType));
/**
 * `types.identifier` - Identifiers are used to make references, lifecycle events and reconciling works.
 * Inside a state tree, for each type can exist only one instance for each given identifier.
 * For example there couldn't be 2 instances of user with id 1. If you need more, consider using references.
 * Identifier can be used only as type property of a model.
 * This type accepts as parameter the value type of the identifier field that can be either string or number.
 *
 * Example:
 * ```ts
 *  const Todo = types.model("Todo", {
 *      id: types.identifier,
 *      title: types.string
 *  })
 * ```
 *
 * @returns
 */
var identifier = new IdentifierType();
/**
 * `types.identifierNumber` - Similar to `types.identifier`. This one will serialize from / to a number when applying snapshots
 *
 * Example:
 * ```ts
 *  const Todo = types.model("Todo", {
 *      id: types.identifierNumber,
 *      title: types.string
 *  })
 * ```
 *
 * @returns
 */
var identifierNumber = new IdentifierNumberType();
/**
 * Returns if a given value represents an identifier type.
 *
 * @param type
 * @returns
 */
function isIdentifierType(type) {
    return isType(type) && (type.flags & TypeFlags.Identifier) > 0;
}
/**
 * @internal
 * @hidden
 */
function normalizeIdentifier(id) {
    return "" + id;
}
/**
 * @internal
 * @hidden
 */
function isValidIdentifier(id) {
    return typeof id === "string" || typeof id === "number";
}
/**
 * @internal
 * @hidden
 */
function assertIsValidIdentifier(id, argNumber) {
    assertArg(id, isValidIdentifier, "string or number (identifier)", argNumber);
}

/**
 * `types.custom` - Creates a custom type. Custom types can be used for arbitrary immutable values, that have a serializable representation. For example, to create your own Date representation, Decimal type etc.
 *
 * The signature of the options is:
 * ```ts
 * export interface CustomTypeOptions<S, T> {
 *     // Friendly name
 *     name: string
 *     // given a serialized value, how to turn it into the target type
 *     fromSnapshot(snapshot: S): T
 *     // return the serialization of the current value
 *     toSnapshot(value: T): S
 *     // if true, this is a converted value, if false, it's a snapshot
 *     isTargetType(value: T | S): value is T
 *     // a non empty string is assumed to be a validation error
 *     getValidationMessage?(snapshot: S): string
 * }
 * ```
 *
 * Example:
 * ```ts
 * const DecimalPrimitive = types.custom<string, Decimal>({
 *     name: "Decimal",
 *     fromSnapshot(value: string) {
 *         return new Decimal(value)
 *     },
 *     toSnapshot(value: Decimal) {
 *         return value.toString()
 *     },
 *     isTargetType(value: string | Decimal): boolean {
 *         return value instanceof Decimal
 *     },
 *     getValidationMessage(value: string): string {
 *         if (/^-?\d+\.\d+$/.test(value)) return "" // OK
 *         return `'${value}' doesn't look like a valid decimal number`
 *     }
 * })
 *
 * const Wallet = types.model({
 *     balance: DecimalPrimitive
 * })
 * ```
 *
 * @param options
 * @returns
 */
function custom(options) {
    return new CustomType(options);
}
/**
 * @internal
 * @hidden
 */
var CustomType = /** @class */ (function (_super) {
    __extends(CustomType, _super);
    function CustomType(options) {
        var _this = _super.call(this, options.name) || this;
        _this.options = options;
        _this.flags = TypeFlags.Custom;
        return _this;
    }
    CustomType.prototype.describe = function () {
        return this.name;
    };
    CustomType.prototype.isValidSnapshot = function (value, context) {
        if (this.options.isTargetType(value))
            return typeCheckSuccess();
        var typeError = this.options.getValidationMessage(value);
        if (typeError) {
            return typeCheckFailure(context, value, "Invalid value for type '" + this.name + "': " + typeError);
        }
        return typeCheckSuccess();
    };
    CustomType.prototype.getSnapshot = function (node) {
        return this.options.toSnapshot(node.storedValue);
    };
    CustomType.prototype.instantiate = function (parent, subpath, environment, initialValue) {
        var valueToStore = this.options.isTargetType(initialValue)
            ? initialValue
            : this.options.fromSnapshot(initialValue);
        return createScalarNode(this, parent, subpath, environment, valueToStore);
    };
    CustomType.prototype.reconcile = function (current, value, parent, subpath) {
        var isSnapshot = !this.options.isTargetType(value);
        // in theory customs use scalar nodes which cannot be detached, but still...
        if (!current.isDetaching) {
            var unchanged = current.type === this &&
                (isSnapshot ? value === current.snapshot : value === current.storedValue);
            if (unchanged) {
                current.setParent(parent, subpath);
                return current;
            }
        }
        var valueToStore = isSnapshot ? this.options.fromSnapshot(value) : value;
        var newNode = this.instantiate(parent, subpath, undefined, valueToStore);
        current.die(); // noop if detaching
        return newNode;
    };
    return CustomType;
}(SimpleType));

// we import the types to re-export them inside types.
var types = {
    enumeration: enumeration,
    model: model,
    compose: compose,
    custom: custom,
    reference: reference,
    safeReference: safeReference,
    union: union,
    optional: optional,
    literal: literal,
    maybe: maybe,
    maybeNull: maybeNull,
    refinement: refinement,
    string: string,
    boolean: boolean,
    number: number,
    integer: integer,
    Date: DatePrimitive,
    map: map,
    array: array,
    frozen: frozen,
    identifier: identifier,
    identifierNumber: identifierNumber,
    late: late,
    undefined: undefinedType,
    null: nullType,
    snapshotProcessor: snapshotProcessor
};

/*
 * All imports / exports should be proxied through this file.
 * Why? It gives us full control over the module load order, preventing circular dependency isses
 */

/* all code is initially loaded through internal, to avoid circular dep issues */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ 6).setImmediate))

/***/ }),
/* 6 */
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ 7);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 3)))

/***/ }),
/* 7 */
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./../process/browser.js */ 2)))

/***/ }),
/* 8 */
/*!********************************!*\
  !*** ./src/tools/getLogger.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @typedef {function} Logger
 * @property {function} log
 * @property {function} info
 * @property {function} warn
 * @property {function} error
 * @property {function} debug
 */
const colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

function selectColor(namespace) {
  let hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return colors[Math.abs(hash) % colors.length];
}
/**
 * @param {string} name
 * @return {Logger}
 */


const getLogger = name => {
  let fn = null;

  if (true) {
    const colorArgs = [];

    if (true) {
      colorArgs.push(`%c${name}`, `color: ${selectColor(name)}`);
    } else {}

    fn = console.log.bind(console, ...colorArgs);
    fn.log = fn;
    fn.info = console.info.bind(console, ...colorArgs);
    fn.warn = console.warn.bind(console, ...colorArgs);
    fn.error = console.error.bind(console, ...colorArgs);
    fn.debug = console.debug.bind(console, ...colorArgs);
  } else {}

  return fn;
};

/* harmony default export */ __webpack_exports__["default"] = (getLogger);

/***/ }),
/* 9 */
/*!*********************************!*\
  !*** ./src/tools/storageGet.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const storageGet = (data, area = 'local') => {
  return new Promise(resolve => chrome.storage[area].get(data, resolve));
};

/* harmony default export */ __webpack_exports__["default"] = (storageGet);

/***/ }),
/* 10 */
/*!*********************************!*\
  !*** ./src/tools/storageSet.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const storageSet = (data, area = 'local') => {
  return new Promise(resolve => chrome.storage[area].set(data, resolve));
};

/* harmony default export */ __webpack_exports__["default"] = (storageSet);

/***/ }),
/* 11 */
/*!***********************************!*\
  !*** ./src/tools/downloadBlob.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const downloadBlob = function (blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(function () {
    URL.revokeObjectURL(url);
  }, 250);
};

/* harmony default export */ __webpack_exports__["default"] = (downloadBlob);

/***/ }),
/* 12 */
/*!**********************************!*\
  !*** ./src/tools/mobxCompare.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ 5);
/* harmony import */ var fast_json_patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-json-patch */ 13);
/* harmony import */ var fast_json_patch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_json_patch__WEBPACK_IMPORTED_MODULE_1__);



const getParentPath = path => {
  return path.substr(0, path.lastIndexOf('/'));
};

const mobxCompare = (mobxOldValue, newValue) => {
  let oldValue = null;

  if (Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["isMapType"])(Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["getType"])(mobxOldValue))) {
    oldValue = mobxOldValue.toJSON();
  } else {
    oldValue = mobxOldValue;
  }

  return Object(fast_json_patch__WEBPACK_IMPORTED_MODULE_1__["compare"])(oldValue, newValue).filter(patch => {
    if (patch.op === 'remove') {
      const value = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(mobxOldValue, patch.path);

      if (value === undefined) {
        return false;
      }

      const placePath = getParentPath(patch.path);

      if (placePath !== patch.path) {
        const place = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(mobxOldValue, placePath);
        const placeType = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["getType"])(place);

        if (!Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["isArrayType"])(placeType) && !Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["isMapType"])(placeType)) {
          patch.op = 'replace';
          patch.value = undefined;
        }
      }
    }

    return true;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mobxCompare);

/***/ }),
/* 13 */
/*!****************************************************!*\
  !*** ./node_modules/fast-json-patch/lib/duplex.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017 Joachim Wester
 * MIT license
 */
var helpers_1 = __webpack_require__(/*! ./helpers */ 14);
var core_1 = __webpack_require__(/*! ./core */ 15);
/* export all core functions */
var core_2 = __webpack_require__(/*! ./core */ 15);
exports.applyOperation = core_2.applyOperation;
exports.applyPatch = core_2.applyPatch;
exports.applyReducer = core_2.applyReducer;
exports.getValueByPointer = core_2.getValueByPointer;
exports.validate = core_2.validate;
exports.validator = core_2.validator;
/* export some helpers */
var helpers_2 = __webpack_require__(/*! ./helpers */ 14);
exports.JsonPatchError = helpers_2.PatchError;
exports.deepClone = helpers_2._deepClone;
exports.escapePathComponent = helpers_2.escapePathComponent;
exports.unescapePathComponent = helpers_2.unescapePathComponent;
var beforeDict = new WeakMap();
var Mirror = (function () {
    function Mirror(obj) {
        this.observers = new Map();
        this.obj = obj;
    }
    return Mirror;
}());
var ObserverInfo = (function () {
    function ObserverInfo(callback, observer) {
        this.callback = callback;
        this.observer = observer;
    }
    return ObserverInfo;
}());
function getMirror(obj) {
    return beforeDict.get(obj);
}
function getObserverFromMirror(mirror, callback) {
    return mirror.observers.get(callback);
}
function removeObserverFromMirror(mirror, observer) {
    mirror.observers.delete(observer.callback);
}
/**
 * Detach an observer from an object
 */
function unobserve(root, observer) {
    observer.unobserve();
}
exports.unobserve = unobserve;
/**
 * Observes changes made to an object, which can then be retrieved using generate
 */
function observe(obj, callback) {
    var patches = [];
    var observer;
    var mirror = getMirror(obj);
    if (!mirror) {
        mirror = new Mirror(obj);
        beforeDict.set(obj, mirror);
    }
    else {
        var observerInfo = getObserverFromMirror(mirror, callback);
        observer = observerInfo && observerInfo.observer;
    }
    if (observer) {
        return observer;
    }
    observer = {};
    mirror.value = helpers_1._deepClone(obj);
    if (callback) {
        observer.callback = callback;
        observer.next = null;
        var dirtyCheck = function () {
            generate(observer);
        };
        var fastCheck = function () {
            clearTimeout(observer.next);
            observer.next = setTimeout(dirtyCheck);
        };
        if (typeof window !== 'undefined') {
            if (window.addEventListener) {
                window.addEventListener('mouseup', fastCheck);
                window.addEventListener('keyup', fastCheck);
                window.addEventListener('mousedown', fastCheck);
                window.addEventListener('keydown', fastCheck);
                window.addEventListener('change', fastCheck);
            }
            else {
                document.documentElement.attachEvent('onmouseup', fastCheck);
                document.documentElement.attachEvent('onkeyup', fastCheck);
                document.documentElement.attachEvent('onmousedown', fastCheck);
                document.documentElement.attachEvent('onkeydown', fastCheck);
                document.documentElement.attachEvent('onchange', fastCheck);
            }
        }
    }
    observer.patches = patches;
    observer.object = obj;
    observer.unobserve = function () {
        generate(observer);
        clearTimeout(observer.next);
        removeObserverFromMirror(mirror, observer);
        if (typeof window !== 'undefined') {
            if (window.removeEventListener) {
                window.removeEventListener('mouseup', fastCheck);
                window.removeEventListener('keyup', fastCheck);
                window.removeEventListener('mousedown', fastCheck);
                window.removeEventListener('keydown', fastCheck);
            }
            else {
                document.documentElement.detachEvent('onmouseup', fastCheck);
                document.documentElement.detachEvent('onkeyup', fastCheck);
                document.documentElement.detachEvent('onmousedown', fastCheck);
                document.documentElement.detachEvent('onkeydown', fastCheck);
            }
        }
    };
    mirror.observers.set(callback, new ObserverInfo(callback, observer));
    return observer;
}
exports.observe = observe;
/**
 * Generate an array of patches from an observer
 */
function generate(observer) {
    var mirror = beforeDict.get(observer.object);
    _generate(mirror.value, observer.object, observer.patches, "");
    if (observer.patches.length) {
        core_1.applyPatch(mirror.value, observer.patches);
    }
    var temp = observer.patches;
    if (temp.length > 0) {
        observer.patches = [];
        if (observer.callback) {
            observer.callback(temp);
        }
    }
    return temp;
}
exports.generate = generate;
// Dirty check if obj is different from mirror, generate patches and update mirror
function _generate(mirror, obj, patches, path) {
    if (obj === mirror) {
        return;
    }
    if (typeof obj.toJSON === "function") {
        obj = obj.toJSON();
    }
    var newKeys = helpers_1._objectKeys(obj);
    var oldKeys = helpers_1._objectKeys(mirror);
    var changed = false;
    var deleted = false;
    //if ever "move" operation is implemented here, make sure this test runs OK: "should not generate the same patch twice (move)"
    for (var t = oldKeys.length - 1; t >= 0; t--) {
        var key = oldKeys[t];
        var oldVal = mirror[key];
        if (helpers_1.hasOwnProperty(obj, key) && !(obj[key] === undefined && oldVal !== undefined && Array.isArray(obj) === false)) {
            var newVal = obj[key];
            if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null) {
                _generate(oldVal, newVal, patches, path + "/" + helpers_1.escapePathComponent(key));
            }
            else {
                if (oldVal !== newVal) {
                    changed = true;
                    patches.push({ op: "replace", path: path + "/" + helpers_1.escapePathComponent(key), value: helpers_1._deepClone(newVal) });
                }
            }
        }
        else if (Array.isArray(mirror) === Array.isArray(obj)) {
            patches.push({ op: "remove", path: path + "/" + helpers_1.escapePathComponent(key) });
            deleted = true; // property has been deleted
        }
        else {
            patches.push({ op: "replace", path: path, value: obj });
            changed = true;
        }
    }
    if (!deleted && newKeys.length == oldKeys.length) {
        return;
    }
    for (var t = 0; t < newKeys.length; t++) {
        var key = newKeys[t];
        if (!helpers_1.hasOwnProperty(mirror, key) && obj[key] !== undefined) {
            patches.push({ op: "add", path: path + "/" + helpers_1.escapePathComponent(key), value: helpers_1._deepClone(obj[key]) });
        }
    }
}
/**
 * Create an array of patches from the differences in two objects
 */
function compare(tree1, tree2) {
    var patches = [];
    _generate(tree1, tree2, patches, '');
    return patches;
}
exports.compare = compare;


/***/ }),
/* 14 */
/*!*****************************************************!*\
  !*** ./node_modules/fast-json-patch/lib/helpers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017 Joachim Wester
 * MIT license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
    return _hasOwnProperty.call(obj, key);
}
exports.hasOwnProperty = hasOwnProperty;
function _objectKeys(obj) {
    if (Array.isArray(obj)) {
        var keys = new Array(obj.length);
        for (var k = 0; k < keys.length; k++) {
            keys[k] = "" + k;
        }
        return keys;
    }
    if (Object.keys) {
        return Object.keys(obj);
    }
    var keys = [];
    for (var i in obj) {
        if (hasOwnProperty(obj, i)) {
            keys.push(i);
        }
    }
    return keys;
}
exports._objectKeys = _objectKeys;
;
/**
* Deeply clone the object.
* https://jsperf.com/deep-copy-vs-json-stringify-json-parse/25 (recursiveDeepCopy)
* @param  {any} obj value to clone
* @return {any} cloned obj
*/
function _deepClone(obj) {
    switch (typeof obj) {
        case "object":
            return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
        case "undefined":
            return null; //this is how JSON.stringify behaves for array items
        default:
            return obj; //no need to clone primitives
    }
}
exports._deepClone = _deepClone;
//3x faster than cached /^\d+$/.test(str)
function isInteger(str) {
    var i = 0;
    var len = str.length;
    var charCode;
    while (i < len) {
        charCode = str.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            i++;
            continue;
        }
        return false;
    }
    return true;
}
exports.isInteger = isInteger;
/**
* Escapes a json pointer path
* @param path The raw pointer
* @return the Escaped path
*/
function escapePathComponent(path) {
    if (path.indexOf('/') === -1 && path.indexOf('~') === -1)
        return path;
    return path.replace(/~/g, '~0').replace(/\//g, '~1');
}
exports.escapePathComponent = escapePathComponent;
/**
 * Unescapes a json pointer path
 * @param path The escaped pointer
 * @return The unescaped path
 */
function unescapePathComponent(path) {
    return path.replace(/~1/g, '/').replace(/~0/g, '~');
}
exports.unescapePathComponent = unescapePathComponent;
function _getPathRecursive(root, obj) {
    var found;
    for (var key in root) {
        if (hasOwnProperty(root, key)) {
            if (root[key] === obj) {
                return escapePathComponent(key) + '/';
            }
            else if (typeof root[key] === 'object') {
                found = _getPathRecursive(root[key], obj);
                if (found != '') {
                    return escapePathComponent(key) + '/' + found;
                }
            }
        }
    }
    return '';
}
exports._getPathRecursive = _getPathRecursive;
function getPath(root, obj) {
    if (root === obj) {
        return '/';
    }
    var path = _getPathRecursive(root, obj);
    if (path === '') {
        throw new Error("Object not found in root");
    }
    return '/' + path;
}
exports.getPath = getPath;
/**
* Recursively checks whether an object has any undefined values inside.
*/
function hasUndefined(obj) {
    if (obj === undefined) {
        return true;
    }
    if (obj) {
        if (Array.isArray(obj)) {
            for (var i = 0, len = obj.length; i < len; i++) {
                if (hasUndefined(obj[i])) {
                    return true;
                }
            }
        }
        else if (typeof obj === "object") {
            var objKeys = _objectKeys(obj);
            var objKeysLength = objKeys.length;
            for (var i = 0; i < objKeysLength; i++) {
                if (hasUndefined(obj[objKeys[i]])) {
                    return true;
                }
            }
        }
    }
    return false;
}
exports.hasUndefined = hasUndefined;
function patchErrorMessageFormatter(message, args) {
    var messageParts = [message];
    for (var key in args) {
        var value = typeof args[key] === 'object' ? JSON.stringify(args[key], null, 2) : args[key]; // pretty print
        if (typeof value !== 'undefined') {
            messageParts.push(key + ": " + value);
        }
    }
    return messageParts.join('\n');
}
var PatchError = (function (_super) {
    __extends(PatchError, _super);
    function PatchError(message, name, index, operation, tree) {
        _super.call(this, patchErrorMessageFormatter(message, { name: name, index: index, operation: operation, tree: tree }));
        this.name = name;
        this.index = index;
        this.operation = operation;
        this.tree = tree;
        this.message = patchErrorMessageFormatter(message, { name: name, index: index, operation: operation, tree: tree });
    }
    return PatchError;
}(Error));
exports.PatchError = PatchError;


/***/ }),
/* 15 */
/*!**************************************************!*\
  !*** ./node_modules/fast-json-patch/lib/core.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var equalsOptions = { strict: true };
var _equals = __webpack_require__(/*! deep-equal */ 16);
var areEquals = function (a, b) {
    return _equals(a, b, equalsOptions);
};
var helpers_1 = __webpack_require__(/*! ./helpers */ 14);
exports.JsonPatchError = helpers_1.PatchError;
exports.deepClone = helpers_1._deepClone;
/* We use a Javascript hash to store each
 function. Each hash entry (property) uses
 the operation identifiers specified in rfc6902.
 In this way, we can map each patch operation
 to its dedicated function in efficient way.
 */
/* The operations applicable to an object */
var objOps = {
    add: function (obj, key, document) {
        obj[key] = this.value;
        return { newDocument: document };
    },
    remove: function (obj, key, document) {
        var removed = obj[key];
        delete obj[key];
        return { newDocument: document, removed: removed };
    },
    replace: function (obj, key, document) {
        var removed = obj[key];
        obj[key] = this.value;
        return { newDocument: document, removed: removed };
    },
    move: function (obj, key, document) {
        /* in case move target overwrites an existing value,
        return the removed value, this can be taxing performance-wise,
        and is potentially unneeded */
        var removed = getValueByPointer(document, this.path);
        if (removed) {
            removed = helpers_1._deepClone(removed);
        }
        var originalValue = applyOperation(document, { op: "remove", path: this.from }).removed;
        applyOperation(document, { op: "add", path: this.path, value: originalValue });
        return { newDocument: document, removed: removed };
    },
    copy: function (obj, key, document) {
        var valueToCopy = getValueByPointer(document, this.from);
        // enforce copy by value so further operations don't affect source (see issue #177)
        applyOperation(document, { op: "add", path: this.path, value: helpers_1._deepClone(valueToCopy) });
        return { newDocument: document };
    },
    test: function (obj, key, document) {
        return { newDocument: document, test: areEquals(obj[key], this.value) };
    },
    _get: function (obj, key, document) {
        this.value = obj[key];
        return { newDocument: document };
    }
};
/* The operations applicable to an array. Many are the same as for the object */
var arrOps = {
    add: function (arr, i, document) {
        if (helpers_1.isInteger(i)) {
            arr.splice(i, 0, this.value);
        }
        else {
            arr[i] = this.value;
        }
        // this may be needed when using '-' in an array
        return { newDocument: document, index: i };
    },
    remove: function (arr, i, document) {
        var removedList = arr.splice(i, 1);
        return { newDocument: document, removed: removedList[0] };
    },
    replace: function (arr, i, document) {
        var removed = arr[i];
        arr[i] = this.value;
        return { newDocument: document, removed: removed };
    },
    move: objOps.move,
    copy: objOps.copy,
    test: objOps.test,
    _get: objOps._get
};
/**
 * Retrieves a value from a JSON document by a JSON pointer.
 * Returns the value.
 *
 * @param document The document to get the value from
 * @param pointer an escaped JSON pointer
 * @return The retrieved value
 */
function getValueByPointer(document, pointer) {
    if (pointer == '') {
        return document;
    }
    var getOriginalDestination = { op: "_get", path: pointer };
    applyOperation(document, getOriginalDestination);
    return getOriginalDestination.value;
}
exports.getValueByPointer = getValueByPointer;
/**
 * Apply a single JSON Patch Operation on a JSON document.
 * Returns the {newDocument, result} of the operation.
 * It modifies the `document` and `operation` objects - it gets the values by reference.
 * If you would like to avoid touching your values, clone them:
 * `jsonpatch.applyOperation(document, jsonpatch._deepClone(operation))`.
 *
 * @param document The document to patch
 * @param operation The operation to apply
 * @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
 * @param mutateDocument Whether to mutate the original document or clone it before applying
 * @param banPrototypeModifications Whether to ban modifications to `__proto__`, defaults to `true`.
 * @return `{newDocument, result}` after the operation
 */
function applyOperation(document, operation, validateOperation, mutateDocument, banPrototypeModifications, index) {
    if (validateOperation === void 0) { validateOperation = false; }
    if (mutateDocument === void 0) { mutateDocument = true; }
    if (banPrototypeModifications === void 0) { banPrototypeModifications = true; }
    if (index === void 0) { index = 0; }
    if (validateOperation) {
        if (typeof validateOperation == 'function') {
            validateOperation(operation, 0, document, operation.path);
        }
        else {
            validator(operation, 0);
        }
    }
    /* ROOT OPERATIONS */
    if (operation.path === "") {
        var returnValue = { newDocument: document };
        if (operation.op === 'add') {
            returnValue.newDocument = operation.value;
            return returnValue;
        }
        else if (operation.op === 'replace') {
            returnValue.newDocument = operation.value;
            returnValue.removed = document; //document we removed
            return returnValue;
        }
        else if (operation.op === 'move' || operation.op === 'copy') {
            returnValue.newDocument = getValueByPointer(document, operation.from); // get the value by json-pointer in `from` field
            if (operation.op === 'move') {
                returnValue.removed = document;
            }
            return returnValue;
        }
        else if (operation.op === 'test') {
            returnValue.test = areEquals(document, operation.value);
            if (returnValue.test === false) {
                throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
            }
            returnValue.newDocument = document;
            return returnValue;
        }
        else if (operation.op === 'remove') {
            returnValue.removed = document;
            returnValue.newDocument = null;
            return returnValue;
        }
        else if (operation.op === '_get') {
            operation.value = document;
            return returnValue;
        }
        else {
            if (validateOperation) {
                throw new exports.JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, document);
            }
            else {
                return returnValue;
            }
        }
    } /* END ROOT OPERATIONS */
    else {
        if (!mutateDocument) {
            document = helpers_1._deepClone(document);
        }
        var path = operation.path || "";
        var keys = path.split('/');
        var obj = document;
        var t = 1; //skip empty element - http://jsperf.com/to-shift-or-not-to-shift
        var len = keys.length;
        var existingPathFragment = undefined;
        var key = void 0;
        var validateFunction = void 0;
        if (typeof validateOperation == 'function') {
            validateFunction = validateOperation;
        }
        else {
            validateFunction = validator;
        }
        while (true) {
            key = keys[t];
            if (banPrototypeModifications && key == '__proto__') {
                throw new TypeError('JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README');
            }
            if (validateOperation) {
                if (existingPathFragment === undefined) {
                    if (obj[key] === undefined) {
                        existingPathFragment = keys.slice(0, t).join('/');
                    }
                    else if (t == len - 1) {
                        existingPathFragment = operation.path;
                    }
                    if (existingPathFragment !== undefined) {
                        validateFunction(operation, 0, document, existingPathFragment);
                    }
                }
            }
            t++;
            if (Array.isArray(obj)) {
                if (key === '-') {
                    key = obj.length;
                }
                else {
                    if (validateOperation && !helpers_1.isInteger(key)) {
                        throw new exports.JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", index, operation, document);
                    } // only parse key when it's an integer for `arr.prop` to work
                    else if (helpers_1.isInteger(key)) {
                        key = ~~key;
                    }
                }
                if (t >= len) {
                    if (validateOperation && operation.op === "add" && key > obj.length) {
                        throw new exports.JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", index, operation, document);
                    }
                    var returnValue = arrOps[operation.op].call(operation, obj, key, document); // Apply patch
                    if (returnValue.test === false) {
                        throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
                    }
                    return returnValue;
                }
            }
            else {
                if (key && key.indexOf('~') != -1) {
                    key = helpers_1.unescapePathComponent(key);
                }
                if (t >= len) {
                    var returnValue = objOps[operation.op].call(operation, obj, key, document); // Apply patch
                    if (returnValue.test === false) {
                        throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
                    }
                    return returnValue;
                }
            }
            obj = obj[key];
        }
    }
}
exports.applyOperation = applyOperation;
/**
 * Apply a full JSON Patch array on a JSON document.
 * Returns the {newDocument, result} of the patch.
 * It modifies the `document` object and `patch` - it gets the values by reference.
 * If you would like to avoid touching your values, clone them:
 * `jsonpatch.applyPatch(document, jsonpatch._deepClone(patch))`.
 *
 * @param document The document to patch
 * @param patch The patch to apply
 * @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
 * @param mutateDocument Whether to mutate the original document or clone it before applying
 * @param banPrototypeModifications Whether to ban modifications to `__proto__`, defaults to `true`.
 * @return An array of `{newDocument, result}` after the patch
 */
function applyPatch(document, patch, validateOperation, mutateDocument, banPrototypeModifications) {
    if (mutateDocument === void 0) { mutateDocument = true; }
    if (banPrototypeModifications === void 0) { banPrototypeModifications = true; }
    if (validateOperation) {
        if (!Array.isArray(patch)) {
            throw new exports.JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
        }
    }
    if (!mutateDocument) {
        document = helpers_1._deepClone(document);
    }
    var results = new Array(patch.length);
    for (var i = 0, length_1 = patch.length; i < length_1; i++) {
        // we don't need to pass mutateDocument argument because if it was true, we already deep cloned the object, we'll just pass `true`
        results[i] = applyOperation(document, patch[i], validateOperation, true, banPrototypeModifications, i);
        document = results[i].newDocument; // in case root was replaced
    }
    results.newDocument = document;
    return results;
}
exports.applyPatch = applyPatch;
/**
 * Apply a single JSON Patch Operation on a JSON document.
 * Returns the updated document.
 * Suitable as a reducer.
 *
 * @param document The document to patch
 * @param operation The operation to apply
 * @return The updated document
 */
function applyReducer(document, operation, index) {
    var operationResult = applyOperation(document, operation);
    if (operationResult.test === false) {
        throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
    }
    return operationResult.newDocument;
}
exports.applyReducer = applyReducer;
/**
 * Validates a single operation. Called from `jsonpatch.validate`. Throws `JsonPatchError` in case of an error.
 * @param {object} operation - operation object (patch)
 * @param {number} index - index of operation in the sequence
 * @param {object} [document] - object where the operation is supposed to be applied
 * @param {string} [existingPathFragment] - comes along with `document`
 */
function validator(operation, index, document, existingPathFragment) {
    if (typeof operation !== 'object' || operation === null || Array.isArray(operation)) {
        throw new exports.JsonPatchError('Operation is not an object', 'OPERATION_NOT_AN_OBJECT', index, operation, document);
    }
    else if (!objOps[operation.op]) {
        throw new exports.JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, document);
    }
    else if (typeof operation.path !== 'string') {
        throw new exports.JsonPatchError('Operation `path` property is not a string', 'OPERATION_PATH_INVALID', index, operation, document);
    }
    else if (operation.path.indexOf('/') !== 0 && operation.path.length > 0) {
        // paths that aren't empty string should start with "/"
        throw new exports.JsonPatchError('Operation `path` property must start with "/"', 'OPERATION_PATH_INVALID', index, operation, document);
    }
    else if ((operation.op === 'move' || operation.op === 'copy') && typeof operation.from !== 'string') {
        throw new exports.JsonPatchError('Operation `from` property is not present (applicable in `move` and `copy` operations)', 'OPERATION_FROM_REQUIRED', index, operation, document);
    }
    else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && operation.value === undefined) {
        throw new exports.JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_REQUIRED', index, operation, document);
    }
    else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && helpers_1.hasUndefined(operation.value)) {
        throw new exports.JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED', index, operation, document);
    }
    else if (document) {
        if (operation.op == "add") {
            var pathLen = operation.path.split("/").length;
            var existingPathLen = existingPathFragment.split("/").length;
            if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
                throw new exports.JsonPatchError('Cannot perform an `add` operation at the desired path', 'OPERATION_PATH_CANNOT_ADD', index, operation, document);
            }
        }
        else if (operation.op === 'replace' || operation.op === 'remove' || operation.op === '_get') {
            if (operation.path !== existingPathFragment) {
                throw new exports.JsonPatchError('Cannot perform the operation at a path that does not exist', 'OPERATION_PATH_UNRESOLVABLE', index, operation, document);
            }
        }
        else if (operation.op === 'move' || operation.op === 'copy') {
            var existingValue = { op: "_get", path: operation.from, value: undefined };
            var error = validate([existingValue], document);
            if (error && error.name === 'OPERATION_PATH_UNRESOLVABLE') {
                throw new exports.JsonPatchError('Cannot perform the operation from a path that does not exist', 'OPERATION_FROM_UNRESOLVABLE', index, operation, document);
            }
        }
    }
}
exports.validator = validator;
/**
 * Validates a sequence of operations. If `document` parameter is provided, the sequence is additionally validated against the object document.
 * If error is encountered, returns a JsonPatchError object
 * @param sequence
 * @param document
 * @returns {JsonPatchError|undefined}
 */
function validate(sequence, document, externalValidator) {
    try {
        if (!Array.isArray(sequence)) {
            throw new exports.JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
        }
        if (document) {
            //clone document and sequence so that we can safely try applying operations
            applyPatch(helpers_1._deepClone(document), helpers_1._deepClone(sequence), externalValidator || true);
        }
        else {
            externalValidator = externalValidator || validator;
            for (var i = 0; i < sequence.length; i++) {
                externalValidator(sequence[i], i, document, undefined);
            }
        }
    }
    catch (e) {
        if (e instanceof exports.JsonPatchError) {
            return e;
        }
        else {
            throw e;
        }
    }
}
exports.validate = validate;


/***/ }),
/* 16 */
/*!******************************************!*\
  !*** ./node_modules/deep-equal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(/*! ./lib/keys.js */ 17);
var isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ 18);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 17 */
/*!*********************************************!*\
  !*** ./node_modules/deep-equal/lib/keys.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 18 */
/*!*****************************************************!*\
  !*** ./node_modules/deep-equal/lib/is_arguments.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 19 */
/*!*********************************************!*\
  !*** ./node_modules/promise-limit/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function limiter (count) {
  var outstanding = 0
  var jobs = []

  function remove () {
    outstanding--

    if (outstanding < count) {
      dequeue()
    }
  }

  function dequeue () {
    var job = jobs.shift()
    semaphore.queue = jobs.length

    if (job) {
      run(job.fn).then(job.resolve).catch(job.reject)
    }
  }

  function queue (fn) {
    return new Promise(function (resolve, reject) {
      jobs.push({fn: fn, resolve: resolve, reject: reject})
      semaphore.queue = jobs.length
    })
  }

  function run (fn) {
    outstanding++
    try {
      return Promise.resolve(fn()).then(function (result) {
        remove()
        return result
      }, function (error) {
        remove()
        throw error
      })
    } catch (err) {
      remove()
      return Promise.reject(err)
    }
  }

  var semaphore = function (fn) {
    if (outstanding >= count) {
      return queue(fn)
    } else {
      return run(fn)
    }
  }

  return semaphore
}

function map (items, mapper) {
  var failed = false

  var limit = this

  return Promise.all(items.map(function () {
    var args = arguments
    return limit(function () {
      if (!failed) {
        return mapper.apply(undefined, args).catch(function (e) {
          failed = true
          throw e
        })
      }
    })
  }))
}

function addExtras (fn) {
  fn.queue = 0
  fn.map = map
  return fn
}

module.exports = function (count) {
  if (count) {
    return addExtras(limiter(count))
  } else {
    return addExtras(function (fn) {
      return fn()
    })
  }
}


/***/ }),
/* 20 */
/*!************************************!*\
  !*** ./src/stores/TrackerStore.js ***!
  \************************************/
/*! exports provided: default, TrackerOptionsStore, TrackerMetaStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerOptionsStore", function() { return TrackerOptionsStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerMetaStore", function() { return TrackerMetaStore; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ 5);
/* harmony import */ var _tools_trackerWorker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/trackerWorker */ 21);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/getLogger */ 8);
/* harmony import */ var _tools_getIconFromMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/getIconFromMeta */ 43);




const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_2__["default"])('TrackerStore');
/**
 * @typedef {{}} TrackerOptionsStore
 * @property {number} [lastUpdate]
 * @property {boolean} [autoUpdate]
 */

const TrackerOptionsStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('TrackerOptionsStore', {
  lastUpdate: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number, 0),
  autoUpdate: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true)
});
/**
 * @typedef {{}} TrackerMetaStore
 * @property {string} name
 * @property {string|undefined} version
 * @property {string|undefined} author
 * @property {string|undefined} description
 * @property {string|undefined} homepageURL
 * @property {string|undefined} icon
 * @property {string|undefined} icon64
 * @property {string|undefined} trackerURL
 * @property {string|undefined} updateURL
 * @property {string|undefined} downloadURL
 * @property {string|undefined} supportURL
 * @property {string[]} [require]
 * @property {string[]} [connect]
 */

const TrackerMetaStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('TrackerMetaStore', {
  name: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  version: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  author: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  description: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  homepageURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  icon: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  icon64: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  trackerURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  updateURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  downloadURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  supportURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  require: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string), []),
  connect: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string), [])
});
/**
 * @typedef {{}} TrackerStore
 * @property {string} [updateState]
 * @property {string} id
 * @property {TrackerOptionsStore} [options]
 * @property {TrackerMetaStore} meta
 * @property {string} code
 * @property {function} setOptions
 * @property {function:Promise} update
 * @property {function} getSnapshot
 * @property {function} getIconUrl
 * @property {*} attached
 * @property {*} worker
 * @property {function} attach
 * @property {function} deattach
 * @property {function} handleAttachedChange
 * @property {function} createWorker
 * @property {function} destroyWorker
 * @property {function} reloadWorker
 * @property {function} afterCreate
 * @property {function} beforeDestroy
 */

const TrackerStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('TrackerStore', {
  updateState: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier,
  options: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(TrackerOptionsStore, {}),
  meta: TrackerMetaStore,
  code: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string
}).actions(self => {
  return {
    setOptions(value) {
      self.options = value;
    },

    update: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["flow"])(function* () {
      self.updateState = 'pending';

      try {
        const result = yield new Promise((resolve, reject) => {
          chrome.runtime.sendMessage({
            action: 'updateTracker',
            id: self.id
          }, response => {
            let err = chrome.runtime.lastError;
            err ? reject(err) : resolve(response);
          });
        }).then(response => {
          if (!response) {
            throw new Error('Response is empty');
          }

          if (response.error) {
            throw Object.assign(new Error(), response.error);
          }

          return response.result;
        }).catch(err => {
          if (err.code !== 'NEW_VERSION_IS_NOT_FOUND') {
            throw err;
          }
        });
        logger('update response', result);

        if (Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["isAlive"])(self)) {
          self.updateState = 'done';
        }
      } catch (err) {
        logger.error('update error', err);

        if (Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["isAlive"])(self)) {
          self.updateState = 'error';
        }
      }
    })
  };
}).views(self => {
  let attached = 0;
  let worker = null;
  let profileOptions = null;
  return {
    getSnapshot() {
      const snapshot = JSON.parse(JSON.stringify(self));
      delete snapshot.updateState;
      return snapshot;
    },

    getIconUrl() {
      return Object(_tools_getIconFromMeta__WEBPACK_IMPORTED_MODULE_3__["default"])(self.meta);
    },

    get attached() {
      return attached;
    },

    get worker() {
      return worker;
    },

    setProfileOptions(options) {
      profileOptions = JSON.parse(JSON.stringify(options));

      if (worker) {
        worker.setProfileOptions(profileOptions);
      }
    },

    attach() {
      attached++;
      self.handleAttachedChange();
    },

    deattach() {
      attached--;
      setTimeout(() => {
        self.handleAttachedChange();
      }, 1);
    },

    handleAttachedChange() {
      if (attached) {
        self.createWorker();
      } else {
        self.destroyWorker();
      }
    },

    createWorker() {
      if (!worker) {
        worker = new _tools_trackerWorker__WEBPACK_IMPORTED_MODULE_1__["default"](self.toJSON(), profileOptions);
      }
    },

    destroyWorker() {
      if (worker) {
        worker.destroy();
      }

      worker = null;
    },

    reloadWorker() {
      if (worker) {
        self.destroyWorker();
        self.createWorker();
      }
    },

    afterCreate() {
      Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["onPatch"])(self, patch => {
        if (/^\/(code|meta\/connect\/\d+)$/.test(patch.path)) {
          self.reloadWorker();
        }
      });
    },

    beforeDestroy() {
      self.destroyWorker();
    }

  };
});
/* harmony default export */ __webpack_exports__["default"] = (TrackerStore);


/***/ }),
/* 21 */
/*!************************************!*\
  !*** ./src/tools/trackerWorker.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleWorker */ 22);


class TrackerWorker extends _moduleWorker__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);
    this.initPromise = null;
  }

  init() {
    if (this.initPromise) {
      return this.initPromise;
    }

    return this.initPromise = super.init();
  }

  search(query) {
    return this.init().then(() => {
      return this.callFn('events.search', [{
        query: query
      }]);
    });
  }

  searchNext(next) {
    return this.init().then(() => {
      return this.callFn('events.getNextPage', [next]);
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TrackerWorker);

/***/ }),
/* 22 */
/*!***********************************!*\
  !*** ./src/tools/moduleWorker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frameWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frameWorker */ 23);
/* harmony import */ var _exKitRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exKitRequest */ 33);
/* harmony import */ var _exKitBuildConnectRe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exKitBuildConnectRe */ 38);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLogger */ 8);




const logger = Object(_getLogger__WEBPACK_IMPORTED_MODULE_3__["default"])('moduleWorker');

class ModuleWorker {
  constructor(module, profileOptions) {
    this.module = module;
    this.profileOptions = null;
    this.worker = null;
    this.requests = [];
    this.connectRe = null;
    this.setProfileOptions(profileOptions);
    this.api = {
      request: details => {
        return Object(_exKitRequest__WEBPACK_IMPORTED_MODULE_1__["default"])(this, details);
      }
    };
  }

  init() {
    const module = this.module;
    this.connectRe = Object(_exKitBuildConnectRe__WEBPACK_IMPORTED_MODULE_2__["default"])(module.meta.connect);
    this.worker = new _frameWorker__WEBPACK_IMPORTED_MODULE_0__["default"]({
      moduleId: module.id
    }, this.api);
    const info = {
      locale: module.meta.locale
    };
    return this.worker.callFn('init', [module.code, module.meta.require, info]).catch(err => {
      this.destroyWorker();
      throw err;
    });
  }

  setProfileOptions(profileOptions) {
    this.profileOptions = profileOptions || {};
  }

  callFn(event, args) {
    return this.worker.callFn(event, args);
  }

  abortAllRequests() {
    this.requests.splice(0).forEach(req => {
      req.abort();
    });
  }

  destroyWorker() {
    if (this.worker) {
      this.worker.destroy();
      this.worker = null;
    }
  }

  destroy() {
    this.destroyWorker();
    this.abortAllRequests();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ModuleWorker);

/***/ }),
/* 23 */
/*!**********************************!*\
  !*** ./src/tools/frameWorker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLogger */ 8);
/* harmony import */ var _transport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport */ 24);
/* harmony import */ var _frameWorkerProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frameWorkerProxy */ 29);




const qs = __webpack_require__(/*! querystring */ 30);

const debug = Object(_getLogger__WEBPACK_IMPORTED_MODULE_0__["default"])('frameWorker');

class FrameWorker {
  constructor(query, actions) {
    if (typeof window === 'undefined' || !window.document) {
      return new _frameWorkerProxy__WEBPACK_IMPORTED_MODULE_2__["default"](query, actions);
    }

    this.query = query;
    this.actions = actions;
    this.frame = null;
    this.isLoaded = false;
    this.messageStack = [];
    this.frameListener = this.frameListener.bind(this);
    this.initTransport();
    this.init();
  }

  initTransport() {
    const self = this;
    this.transport = new _transport__WEBPACK_IMPORTED_MODULE_1__["default"]({
      onMessage(listener) {
        self.onMessage = listener;
      },

      postMessage(msg) {
        self.postMessage(msg);
      }

    }, this.actions);
    this.callFn = this.transport.callFn.bind(this.transport);
  }

  onMessage(msg) {
    debug('Message without listener', msg);
  }

  frameListener(e) {
    if (this.frame && e.source === this.frame.contentWindow) {
      this.onMessage(e.data);
    }
  }

  init() {
    this.destroyFrame();
    window.addEventListener("message", this.frameListener);
    const frame = this.frame = document.createElement('iframe');
    frame.src = 'sandbox.html' + '#' + qs.stringify(this.query);
    frame.style.display = 'none';
    frame.sandbox = 'allow-scripts';

    frame.onload = () => {
      frame.onload = null;
      this.isLoaded = true;

      while (this.messageStack.length) {
        this.postMessage(this.messageStack.shift());
      }
    };

    document.body.appendChild(frame);
  }

  postMessage(msg) {
    if (!this.isLoaded) {
      this.messageStack.push(msg);
    } else {
      if (this.frame.contentWindow) {
        this.frame.contentWindow.postMessage(msg, '*');
      } else {
        throw new Error('Window is closed');
      }
    }
  }

  destroyFrame() {
    window.removeEventListener("message", this.frameListener);

    if (this.frame) {
      if (this.frame.parentNode) {
        this.frame.parentNode.removeChild(this.frame);
      }
    }
  }

  destroy() {
    this.destroyFrame();
    this.transport.destroy();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FrameWorker);

/***/ }),
/* 24 */
/*!********************************!*\
  !*** ./src/tools/transport.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLogger */ 8);
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.once */ 25);
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deserialize_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deserialize-error */ 26);
/* harmony import */ var deserialize_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deserialize_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! serialize-error */ 28);
/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serialize_error__WEBPACK_IMPORTED_MODULE_3__);




const debug = Object(_getLogger__WEBPACK_IMPORTED_MODULE_0__["default"])('frameWorker');

const emptyFn = () => {};

const promiseCallbackMap = new WeakMap();

class Transport {
  /**
   * @param {{onMessage:function(function),postMessage:function(*)}} transport
   * @param {Object} actions
   **/
  constructor(transport, actions) {
    this.transportId = Math.trunc(Math.random() * 1000);
    this.callbackIndex = 0;
    this.transport = transport;
    this.actions = actions;
    this.cbMap = new Map();
    this.onMessage = this.onMessage.bind(this);
    this.transport.onMessage(this.onMessage);
  }
  /**
   * @param {*} msg
   * @param {{event:Object}} options
   * @param {function(*)} response
   * @return {boolean}
   * @private
   */


  listener(msg, response) {
    switch (msg.action) {
      case 'callFn':
        {
          this.responseFn(msg, response);
          return true;
        }
    }
  }
  /**
   * @param {{responseId: string, message:*, callbackId: string}} msg
   */


  onMessage(msg) {
    const cbMap = this.cbMap;

    if (msg.responseId) {
      const callback = cbMap.get(msg.responseId);

      if (callback) {
        callback(msg.message);
      } else {
        debug('Callback is not found', msg);
      }
    } else {
      let response;

      if (msg.callbackId) {
        response = lodash_once__WEBPACK_IMPORTED_MODULE_1___default()(message => {
          this.transport.postMessage({
            responseId: msg.callbackId,
            message: message
          });
        });
      } else {
        response = emptyFn;
      }

      let result = null;

      try {
        result = this.listener(msg.message, response);
      } catch (err) {
        debug('Call listener error', err);
      }

      if (result !== true) {
        response();
      }
    }
  }
  /**
   * @param {*} message
   * @param {function} [callback]
   */


  sendMessage(message, callback) {
    const cbMap = this.cbMap;
    const msg = {
      message: message
    };

    if (callback) {
      msg.callbackId = this.transportId + '_' + ++this.callbackIndex;

      const wrappedCallback = message => {
        cbMap.delete(msg.callbackId);
        callback(message);
      };

      cbMap.set(msg.callbackId, wrappedCallback);

      if (promiseCallbackMap.has(callback)) {
        promiseCallbackMap.delete(callback);
        promiseCallbackMap.set(wrappedCallback, true);
      }
    }

    try {
      this.transport.postMessage(msg);
    } catch (err) {
      cbMap.delete(msg.callbackId);
      throw err;
    }
  }
  /**
   * @param {*} msg
   * @return {Promise}
   * @private
   */


  waitPromise(msg) {
    return new Promise((resolve, reject) => {
      const cb = response => {
        if (!response) {
          return reject(new Error('Response is empty'));
        } else if (response.err) {
          return reject(deserialize_error__WEBPACK_IMPORTED_MODULE_2___default()(response.err));
        } else {
          return resolve(response.result);
        }
      };

      promiseCallbackMap.set(cb, true);
      this.sendMessage(msg, cb);
    });
  }
  /**
   * @param {string} fnName
   * @param {*[]} argsArray
   * @return {Promise}
   */


  callFn(fnName, argsArray = []) {
    const self = this;
    return self.waitPromise({
      action: 'callFn',
      fn: fnName,
      args: argsArray
    });
  }
  /**
   * @param {Promise} promise
   * @param {Function} response
   * @return {boolean}
   * @private
   */


  responsePromise(promise, response) {
    promise.then(result => {
      response({
        result: result
      });
    }, err => {
      response({
        err: serialize_error__WEBPACK_IMPORTED_MODULE_3___default()(err)
      });
    }).catch(function (err) {
      debug('responsePromise error', err);
    });
    return true;
  }
  /**
   * @param {string} path
   * @return {{scope: Object, endPoint: *}}
   * @private
   */


  resolvePath(path) {
    const parts = path.split('.');
    const endPoint = parts.pop();
    let scope = this.actions;

    while (parts.length) {
      scope = scope[parts.shift()];
    }

    return {
      scope,
      endPoint
    };
  }
  /**
   * @param {{fn:string,args:*[]}} msg
   * @param {Function} response
   * @return {boolean}
   * @private
   */


  responseFn(msg, response) {
    const promise = Promise.resolve().then(() => {
      const {
        scope,
        endPoint: fn
      } = this.resolvePath(msg.fn);
      return scope[fn].apply(scope, msg.args);
    });
    return this.responsePromise(promise, response);
  }

  destroy() {
    this.cbMap.forEach(cb => {
      if (promiseCallbackMap.has(cb)) {
        cb({
          err: serialize_error__WEBPACK_IMPORTED_MODULE_3___default()(new Error('Destroyed'))
        });
      } else {
        cb();
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Transport);

/***/ }),
/* 25 */
/*!*******************************************!*\
  !*** ./node_modules/lodash.once/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = once;


/***/ }),
/* 26 */
/*!*************************************************!*\
  !*** ./node_modules/deserialize-error/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var deserializeError = __webpack_require__(/*! ./lib/ */ 27).default
module.exports = deserializeError


/***/ }),
/* 27 */
/*!*****************************************************!*\
  !*** ./node_modules/deserialize-error/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol?'symbol':typeof obj};exports.default=deserializeError;exports.isSerializedError=isSerializedError;function deserializeError(obj){if(!isSerializedError(obj))return obj;return Object.assign(new Error,{stack:undefined},obj)}function isSerializedError(obj){return obj&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object'&&typeof obj.name==='string'&&typeof obj.message==='string'}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZXNlcmlhbGl6ZUVycm9yIiwiaXNTZXJpYWxpemVkRXJyb3IiLCJvYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJFcnJvciIsInN0YWNrIiwidW5kZWZpbmVkIiwibmFtZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJxU0FBd0JBLGdCLFNBS1JDLGlCLENBQUFBLGlCLENBTEQsUUFBU0QsaUJBQVQsQ0FBMkJFLEdBQTNCLENBQWdDLENBQzdDLEdBQUksQ0FBQ0Qsa0JBQWtCQyxHQUFsQixDQUFMLENBQTZCLE1BQU9BLElBQVAsQ0FDN0IsTUFBT0MsUUFBT0MsTUFBUCxDQUFjLEdBQUlDLE1BQWxCLENBQTJCLENBQUNDLE1BQU9DLFNBQVIsQ0FBM0IsQ0FBK0NMLEdBQS9DLENBQ1IsQ0FFTSxRQUFTRCxrQkFBVCxDQUE0QkMsR0FBNUIsQ0FBaUMsQ0FDdEMsTUFBT0EsTUFDTCxPQUFPQSxJQUFQLG1DQUFPQSxHQUFQLEtBQWUsUUFEVixFQUVMLE1BQU9BLEtBQUlNLElBQVgsR0FBb0IsUUFGZixFQUdMLE1BQU9OLEtBQUlPLE9BQVgsR0FBdUIsUUFDMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9yIChvYmopIHtcbiAgaWYgKCFpc1NlcmlhbGl6ZWRFcnJvcihvYmopKSByZXR1cm4gb2JqXG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcigpLCB7c3RhY2s6IHVuZGVmaW5lZH0sIG9iailcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2VyaWFsaXplZEVycm9yIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJlxuICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iai5uYW1lID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBvYmoubWVzc2FnZSA9PT0gJ3N0cmluZydcbn1cbiJdfQ==

/***/ }),
/* 28 */
/*!***********************************************!*\
  !*** ./node_modules/serialize-error/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const destroyCircular = (from, seen) => {
	const to = Array.isArray(from) ? [] : {};

	seen.push(from);

	for (const [key, value] of Object.entries(from)) {
		if (typeof value === 'function') {
			continue;
		}

		if (!value || typeof value !== 'object') {
			to[key] = value;
			continue;
		}

		if (!seen.includes(from[key])) {
			to[key] = destroyCircular(from[key], seen.slice());
			continue;
		}

		to[key] = '[Circular]';
	}

	const commonProperties = [
		'name',
		'message',
		'stack',
		'code'
	];

	for (const property of commonProperties) {
		if (typeof from[property] === 'string') {
			to[property] = from[property];
		}
	}

	return to;
};

const serializeError = value => {
	if (typeof value === 'object') {
		return destroyCircular(value, []);
	}

	// People sometimes throw things besides Error objects…
	if (typeof value === 'function') {
		// `JSON.stringify()` discards functions. We do too, unless a function is thrown directly.
		return `[Function: ${(value.name || 'anonymous')}]`;
	}

	return value;
};

module.exports = serializeError;
// TODO: Remove this for the next major release
module.exports.default = serializeError;


/***/ }),
/* 29 */
/*!***************************************!*\
  !*** ./src/tools/frameWorkerProxy.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLogger */ 8);

const logger = Object(_getLogger__WEBPACK_IMPORTED_MODULE_0__["default"])('frameWorkerProxy');

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

const proxies = new Map();
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.target === 'background' && msg.action === 'workerAction') {
    const proxy = proxies.get(msg.workerId);

    if (proxy) {
      proxy.handleAction(msg.fn, msg.args).then(result => sendResponse({
        result
      })).catch(err => sendResponse({
        error: err.toString()
      }));
      return true;
    } else {
      logger.warn('Proxy not found for workerAction', msg.workerId);
      sendResponse({
        error: 'Proxy not found'
      });
    }
  }
});
let creatingOffscreenParams = null;

class FrameWorkerProxy {
  constructor(query, actions) {
    this.id = uuidv4();
    this.query = query;
    this.actions = actions;
    this.isInitialized = false;
    proxies.set(this.id, this);
    this.init();
  }

  async handleAction(fn, args) {
    // Resolve path in actions
    const parts = fn.split('.');
    let scope = this.actions;
    let func = null;
    let context = this.actions;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      if (i === parts.length - 1) {
        func = scope[part];
      } else {
        scope = scope[part];
        context = scope;
      }

      if (!scope) throw new Error(`Action path ${fn} not found`);
    }

    if (typeof func !== 'function') {
      throw new Error(`Action ${fn} is not a function`);
    }

    return func.apply(context, args);
  }

  async ensureOffscreen() {
    if (await chrome.offscreen.hasDocument()) return;

    if (creatingOffscreenParams) {
      await creatingOffscreenParams;
      return;
    }

    creatingOffscreenParams = chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: [chrome.offscreen.Reason.DOM_SCRAPING],
      justification: 'Running sandbox for torrent trackers'
    });

    try {
      await creatingOffscreenParams;
    } finally {
      creatingOffscreenParams = null;
    }
  }

  async init() {
    try {
      await this.ensureOffscreen();
      const response = await chrome.runtime.sendMessage({
        target: 'offscreen',
        action: 'initWorker',
        workerId: this.id,
        query: this.query
      });

      if (response && response.error) {
        throw new Error(response.error);
      }

      this.isInitialized = true;
    } catch (err) {
      logger.error('init proxy error', err);
    }
  }

  async callFn(event, args) {
    if (!this.isInitialized) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({
        target: 'offscreen',
        action: 'callFn',
        workerId: this.id,
        event: event,
        args: args
      }, response => {
        if (chrome.runtime.lastError) {
          // Offscreen might have died
          logger.warn('offscreen communication error, retrying init', chrome.runtime.lastError);
          this.isInitialized = false;
          return reject(chrome.runtime.lastError);
        }

        if (!response) {
          return reject(new Error('Empty response from offscreen'));
        }

        if (response.error) {
          return reject(new Error(response.error));
        }

        resolve(response.result);
      });
    });
  }

  destroy() {
    proxies.delete(this.id);
    chrome.runtime.sendMessage({
      target: 'offscreen',
      action: 'destroyWorker',
      workerId: this.id
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FrameWorkerProxy);

/***/ }),
/* 30 */
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ 31);
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ 32);


/***/ }),
/* 31 */
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 32 */
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 33 */
/*!***********************************!*\
  !*** ./src/tools/exKitRequest.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ 34);
/* harmony import */ var abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! abortcontroller-polyfill/dist/abortcontroller-polyfill-only */ 35);
/* harmony import */ var abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLogger */ 8);
/* harmony import */ var _base64ToArrayBuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base64ToArrayBuffer */ 36);
 // import {fetch} from 'whatwg-fetch'; // Native fetch is available





const deserializeError = __webpack_require__(/*! deserialize-error */ 26);

const contentType = __webpack_require__(/*! content-type */ 37);

const logger = Object(_getLogger__WEBPACK_IMPORTED_MODULE_2__["default"])('exKitRequest');
/***
 * @typedef {{}} ExKitRequestOptions
 * @property {string} method
 * @property {string} url
 * @property {[string,string][]|{}<string,string>} headers
 * @property {string} charset
 * @property {string} body
 */

/**
 * @param tracker
 * @param {ExKitRequestOptions} options
 * @return {Promise}
 */

const exKitRequest = (tracker, options) => {
  if (typeof options !== 'object') {
    throw new _errors__WEBPACK_IMPORTED_MODULE_0__["ErrorWithCode"]('Options is not set', 'OPTIONS_IS_EMPTY');
  }

  const {
    url,
    charset,
    originUrl,
    ...fetchOptions
  } = options;

  if (typeof url !== 'string') {
    throw new _errors__WEBPACK_IMPORTED_MODULE_0__["ErrorWithCode"]('Incorrect request, url is not string', 'INCORRECT_REQUEST');
  }

  const {
    origin
  } = new URL(url);

  if (!tracker.connectRe || !tracker.connectRe.test(origin)) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_0__["ErrorWithCode"](`Connection is not allowed! ${origin} Add url patter in @connect!`, 'ORIGIN_IS_NOT_AVAILABLE');
  }

  let request = null;

  if (tracker.profileOptions.enableProxy) {
    request = tabFetchRequest(originUrl || origin, url, fetchOptions);
  } else {
    request = fetchRequest(url, fetchOptions);
  }

  tracker.requests.push(request);
  return request.then(({
    response,
    arrayBuffer
  }) => {
    let responseCharset = null;

    if (response.headers.has('Content-Type')) {
      try {
        const obj = contentType.parse(response.headers.get('Content-Type'));
        responseCharset = obj.parameters.charset;
      } catch (err) {
        logger.warn('contentType.parse error', err);
      }
    }

    const decoder = new TextDecoder(charset || responseCharset || 'utf-8');
    const body = decoder.decode(arrayBuffer);
    return {
      url: response.url,
      statusCode: response.status,
      statusText: response.statusText,
      body,
      headers: Array.from(response.headers.entries()).reduce((result, [key, value]) => {
        result[key] = value;
        return result;
      }, {})
    };
  }).then(result => {
    tracker.requests.splice(tracker.requests.indexOf(request), 1);
    return result;
  }, err => {
    tracker.requests.splice(tracker.requests.indexOf(request), 1);
    throw err;
  });
};

const tabFetchRequest = (origin, url, fetchOptions) => {
  let aborted = false;

  const deserializeResult = result => {
    if (result.error) {
      throw deserializeError(result.error);
    } else {
      return result.result;
    }
  };

  const request = new Promise(resolve => {
    const method = (fetchOptions.method || 'GET').toUpperCase();
    const fetchParams = {
      method: fetchOptions.method,
      headers: fetchOptions.headers
    };

    if (method !== 'GET' && method !== 'HEAD') {
      fetchParams.body = fetchOptions.body;
    }

    const params = {
      origin: origin,
      fetchUrl: url,
      fetchOptions: fetchParams
    };
    logger.debug('request', params.fetchUrl, params);
    chrome.runtime.sendMessage(Object.assign({
      action: 'search'
    }, params), resolve);
  }).then(deserializeResult).then(id => {
    request.id = id;

    if (aborted) {
      request.abort();
    }

    return new Promise(resolve => {
      chrome.runtime.sendMessage({
        action: 'initSearch',
        id: request.id
      }, resolve);
    }).then(deserializeResult).then(({
      response,
      base64
    }) => {
      const arrayBuffer = Object(_base64ToArrayBuffer__WEBPACK_IMPORTED_MODULE_3__["default"])(base64);
      response.headers = new Headers(response.headers);
      return {
        response,
        arrayBuffer
      };
    });
  });

  request.abort = () => {
    aborted = true;
    chrome.runtime.sendMessage({
      action: 'abortSearch',
      id: request.id
    });
  };

  return request;
};

const fetchRequest = (url, fetchOptions) => {
  const controller = new AbortController();
  const method = (fetchOptions.method || 'GET').toUpperCase();
  const requestOptions = {
    method: fetchOptions.method,
    headers: fetchOptions.headers,
    signal: controller.signal
  };

  if (method !== 'GET' && method !== 'HEAD') {
    requestOptions.body = fetchOptions.body;
  }

  const request = fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_0__["StatusCodeError"](response.status, null, null, response);
    }

    return response.arrayBuffer().then(arrayBuffer => {
      return {
        response,
        arrayBuffer
      };
    });
  });

  request.abort = () => {
    controller.abort();
  };

  return request;
};

/* harmony default export */ __webpack_exports__["default"] = (exKitRequest);

/***/ }),
/* 34 */
/*!*****************************!*\
  !*** ./src/tools/errors.js ***!
  \*****************************/
/*! exports provided: StatusCodeError, AbortError, ErrorWithCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCodeError", function() { return StatusCodeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return AbortError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorWithCode", function() { return ErrorWithCode; });
class StatusCodeError extends Error {
  constructor(statusCode, body, options, response) {
    const message = statusCode + ' - ' + JSON.stringify(body);
    super(message);
    this.name = 'StatusCodeError';
    this.statusCode = statusCode;
    this.options = options;
    this.response = response;
  }

}

class AbortError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AbortError';
    this.code = 'EABORT';
  }

}

class ErrorWithCode extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }

}



/***/ }),
/* 35 */
/*!*************************************************************************************!*\
  !*** ./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
  undefined;
}(function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var Emitter =
  /*#__PURE__*/
  function () {
    function Emitter() {
      _classCallCheck(this, Emitter);

      Object.defineProperty(this, 'listeners', {
        value: {},
        writable: true,
        configurable: true
      });
    }

    _createClass(Emitter, [{
      key: "addEventListener",
      value: function addEventListener(type, callback) {
        if (!(type in this.listeners)) {
          this.listeners[type] = [];
        }

        this.listeners[type].push(callback);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, callback) {
        if (!(type in this.listeners)) {
          return;
        }

        var stack = this.listeners[type];

        for (var i = 0, l = stack.length; i < l; i++) {
          if (stack[i] === callback) {
            stack.splice(i, 1);
            return;
          }
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var _this = this;

        if (!(event.type in this.listeners)) {
          return;
        }

        var debounce = function debounce(callback) {
          setTimeout(function () {
            return callback.call(_this, event);
          });
        };

        var stack = this.listeners[event.type];

        for (var i = 0, l = stack.length; i < l; i++) {
          debounce(stack[i]);
        }

        return !event.defaultPrevented;
      }
    }]);

    return Emitter;
  }();

  var AbortSignal =
  /*#__PURE__*/
  function (_Emitter) {
    _inherits(AbortSignal, _Emitter);

    function AbortSignal() {
      var _this2;

      _classCallCheck(this, AbortSignal);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AbortSignal).call(this)); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
      // constructor has failed to run, then "this.listeners" will still be undefined and then we call
      // the parent constructor directly instead as a workaround. For general details, see babel bug:
      // https://github.com/babel/babel/issues/3041
      // This hack was added as a fix for the issue described here:
      // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042

      if (!_this2.listeners) {
        Emitter.call(_assertThisInitialized(_this2));
      } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl


      Object.defineProperty(_assertThisInitialized(_this2), 'aborted', {
        value: false,
        writable: true,
        configurable: true
      });
      Object.defineProperty(_assertThisInitialized(_this2), 'onabort', {
        value: null,
        writable: true,
        configurable: true
      });
      return _this2;
    }

    _createClass(AbortSignal, [{
      key: "toString",
      value: function toString() {
        return '[object AbortSignal]';
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (event.type === 'abort') {
          this.aborted = true;

          if (typeof this.onabort === 'function') {
            this.onabort.call(this, event);
          }
        }

        _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
      }
    }]);

    return AbortSignal;
  }(Emitter);
  var AbortController =
  /*#__PURE__*/
  function () {
    function AbortController() {
      _classCallCheck(this, AbortController);

      // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController()) to be [] for compat with the native impl
      Object.defineProperty(this, 'signal', {
        value: new AbortSignal(),
        writable: true,
        configurable: true
      });
    }

    _createClass(AbortController, [{
      key: "abort",
      value: function abort() {
        var event;

        try {
          event = new Event('abort');
        } catch (e) {
          if (typeof document !== 'undefined') {
            if (!document.createEvent) {
              // For Internet Explorer 8:
              event = document.createEventObject();
              event.type = 'abort';
            } else {
              // For Internet Explorer 11:
              event = document.createEvent('Event');
              event.initEvent('abort', false, false);
            }
          } else {
            // Fallback where document isn't available:
            event = {
              type: 'abort',
              bubbles: false,
              cancelable: false
            };
          }
        }

        this.signal.dispatchEvent(event);
      }
    }, {
      key: "toString",
      value: function toString() {
        return '[object AbortController]';
      }
    }]);

    return AbortController;
  }();

  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    // These are necessary to make sure that we get correct output for:
    // Object.prototype.toString.call(new AbortController())
    AbortController.prototype[Symbol.toStringTag] = 'AbortController';
    AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
  }

  function polyfillNeeded(self) {
    if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
      return true;
    } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
    // defining window.Request, and this polyfill need to work on top of unfetch
    // so the below feature detection needs the !self.AbortController part.
    // The Request.prototype check is also needed because Safari versions 11.1.2
    // up to and including 12.1.x has a window.AbortController present but still
    // does NOT correctly implement abortable fetch:
    // https://bugs.webkit.org/show_bug.cgi?id=174980#c2


    return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
  }

  (function (self) {

    if (!polyfillNeeded(self)) {
      return;
    }

    self.AbortController = AbortController;
    self.AbortSignal = AbortSignal;
  })(typeof self !== 'undefined' ? self : global);

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 36 */
/*!******************************************!*\
  !*** ./src/tools/base64ToArrayBuffer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const base64ToArrayBuffer = base64 => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
};

/* harmony default export */ __webpack_exports__["default"] = (base64ToArrayBuffer);

/***/ }),
/* 37 */
/*!********************************************!*\
  !*** ./node_modules/content-type/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
 *
 * parameter     = token "=" ( token / quoted-string )
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
 * obs-text      = %x80-FF
 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
 */
var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g
var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
 *
 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
 * obs-text    = %x80-FF
 */
var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g

/**
 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
 */
var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp to match type in RFC 7231 sec 3.1.1.1
 *
 * media-type = type "/" subtype
 * type       = token
 * subtype    = token
 */
var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * Module exports.
 * @public
 */

exports.format = format
exports.parse = parse

/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */

function format (obj) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('argument obj is required')
  }

  var parameters = obj.parameters
  var type = obj.type

  if (!type || !TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  var string = type

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      if (!TOKEN_REGEXP.test(param)) {
        throw new TypeError('invalid parameter name')
      }

      string += '; ' + param + '=' + qstring(parameters[param])
    }
  }

  return string
}

/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */

function parse (string) {
  if (!string) {
    throw new TypeError('argument string is required')
  }

  // support req/res-like objects as argument
  var header = typeof string === 'object'
    ? getcontenttype(string)
    : string

  if (typeof header !== 'string') {
    throw new TypeError('argument string is required to be a string')
  }

  var index = header.indexOf(';')
  var type = index !== -1
    ? header.substr(0, index).trim()
    : header.trim()

  if (!TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid media type')
  }

  var obj = new ContentType(type.toLowerCase())

  // parse parameters
  if (index !== -1) {
    var key
    var match
    var value

    PARAM_REGEXP.lastIndex = index

    while ((match = PARAM_REGEXP.exec(header))) {
      if (match.index !== index) {
        throw new TypeError('invalid parameter format')
      }

      index += match[0].length
      key = match[1].toLowerCase()
      value = match[2]

      if (value[0] === '"') {
        // remove quotes and escapes
        value = value
          .substr(1, value.length - 2)
          .replace(QESC_REGEXP, '$1')
      }

      obj.parameters[key] = value
    }

    if (index !== header.length) {
      throw new TypeError('invalid parameter format')
    }
  }

  return obj
}

/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @private
 */

function getcontenttype (obj) {
  var header

  if (typeof obj.getHeader === 'function') {
    // res-like
    header = obj.getHeader('content-type')
  } else if (typeof obj.headers === 'object') {
    // req-like
    header = obj.headers && obj.headers['content-type']
  }

  if (typeof header !== 'string') {
    throw new TypeError('content-type header is missing from object')
  }

  return header
}

/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function qstring (val) {
  var str = String(val)

  // no need to quote tokens
  if (TOKEN_REGEXP.test(str)) {
    return str
  }

  if (str.length > 0 && !TEXT_REGEXP.test(str)) {
    throw new TypeError('invalid parameter value')
  }

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Class to represent a content type.
 * @private
 */
function ContentType (type) {
  this.parameters = Object.create(null)
  this.type = type
}


/***/ }),
/* 38 */
/*!******************************************!*\
  !*** ./src/tools/exKitBuildConnectRe.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _urlPatternToStrRe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlPatternToStrRe */ 39);


const exKitBuildConnectRe = connect => {
  const connectRe = [];

  if (connect) {
    connect.forEach(function (patter) {
      try {
        connectRe.push(...Object(_urlPatternToStrRe__WEBPACK_IMPORTED_MODULE_0__["default"])(patter));
      } catch (err) {
        console.error('Connect pattern error!', patter, err);
      }
    });
  }

  if (connectRe.length) {
    return new RegExp(connectRe.join('|'), 'i');
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (exKitBuildConnectRe);

/***/ }),
/* 39 */
/*!****************************************!*\
  !*** ./src/tools/urlPatternToStrRe.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.escaperegexp */ 40);
/* harmony import */ var lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getPortSchemes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPortSchemes */ 41);



const required = __webpack_require__(/*! requires-port */ 42);

const getScheme = scheme => {
  if (!scheme || scheme === '*:') {
    return '[^:]+:\/\/';
  }

  return lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0___default()(scheme.toLowerCase()) + '\/\/';
};

const getPort = (port, scheme) => {
  if (!port) {
    return '(?::\\\d+)?';
  }

  if (scheme && !required(port, scheme)) {
    return '';
  }

  return lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0___default()(':' + port);
};

const hostnameToRePatten = (scheme, hostname, port) => {
  return '^' + getScheme(scheme) + lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0___default()(hostname.toLowerCase()).replace(/\\\*\\\./g, '.+\\.') + getPort(port, scheme) + '$';
};

const normalizePattern = pattern => {
  const m1 = /^((?:[^:]+:\/\/)?[^\/]+)/.exec(pattern);

  if (m1) {
    return m1[1];
  } else {
    return pattern;
  }
};

const urlPatternToStrRe = function (pattern) {
  const result = [];
  pattern = normalizePattern(pattern);
  const m = /^(?:([^:]+:)\/\/)?(?:(.+):([0-9]+)|(.+))$/.exec(pattern);

  if (m) {
    const scheme = m[1];
    const hostnameOrIpLiteral = m[2] || m[4];
    const port = m[3];
    const schemes = [scheme, ...Object(_getPortSchemes__WEBPACK_IMPORTED_MODULE_1__["default"])(port)];
    schemes.forEach(scheme => {
      let hostname = hostnameOrIpLiteral;

      if (/^\./.test(hostname)) {
        hostname = '*' + hostname;
      }

      const hostnameList = [hostname];

      if (/^\*\./.test(hostname)) {
        hostnameList.push(hostname.substr(2));
      }

      hostnameList.forEach(hostname => {
        result.push(hostnameToRePatten(scheme, hostname, port));
      });
    });
  } else {
    throw new Error('Invalid url-pattern');
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (urlPatternToStrRe);

/***/ }),
/* 40 */
/*!***************************************************!*\
  !*** ./node_modules/lodash.escaperegexp/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 3)))

/***/ }),
/* 41 */
/*!*************************************!*\
  !*** ./src/tools/getPortSchemes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getPortSchemes = port => {
  const schemes = [];
  port = +port;

  if (port) {
    switch (port) {
      case 80:
        {
          schemes.push('http:');
          schemes.push('ws:');
          break;
        }

      case 443:
        {
          schemes.push('https:');
          schemes.push('wss:');
          break;
        }

      case 21:
        {
          schemes.push('ftp:');
          break;
        }

      case 70:
        {
          schemes.push('gopher:');
          break;
        }
    }
  }

  return schemes;
};

/* harmony default export */ __webpack_exports__["default"] = (getPortSchemes);

/***/ }),
/* 42 */
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 43 */
/*!**************************************!*\
  !*** ./src/tools/getIconFromMeta.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorToIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorToIcon */ 44);


const getIconFromMeta = meta => {
  let result = '';

  if (meta.icon64) {
    result = meta.icon64;
  } else if (meta.icon) {
    result = meta.icon;
  }

  return Object(_colorToIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(result);
};

/* harmony default export */ __webpack_exports__["default"] = (getIconFromMeta);

/***/ }),
/* 44 */
/*!**********************************!*\
  !*** ./src/tools/colorToIcon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colorToIcon = color => {
  if (!/^#/.test(color)) {
    return color;
  }

  const icon = btoa(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="${color}" /></svg>`);
  return `data:image/svg+xml;base64,${icon}`;
};

/* harmony default export */ __webpack_exports__["default"] = (colorToIcon);

/***/ }),
/* 45 */
/*!*****************************************!*\
  !*** ./src/tools/getTrackerCodeMeta.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCodeMeta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCodeMeta */ 46);

const fieldType = {
  name: '*string',
  version: '*string!version',
  author: 'string',
  description: 'string',
  homepageURL: 'string',
  icon: 'string',
  icon64: 'string',
  trackerURL: 'string',
  updateURL: 'string',
  downloadURL: 'string',
  supportURL: 'string',
  require: 'array',
  connect: '*array!connect'
};

const getTrackerCodeMeta = function (code) {
  return Object(_getCodeMeta__WEBPACK_IMPORTED_MODULE_0__["default"])(code, fieldType);
};

/* harmony default export */ __webpack_exports__["default"] = (getTrackerCodeMeta);

/***/ }),
/* 46 */
/*!**********************************!*\
  !*** ./src/tools/getCodeMeta.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLogger */ 8);
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compare-versions */ 47);
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compare_versions__WEBPACK_IMPORTED_MODULE_1__);


const debug = Object(_getLogger__WEBPACK_IMPORTED_MODULE_0__["default"])('getCodeMeta');

const processVersion = value => {
  compare_versions__WEBPACK_IMPORTED_MODULE_1___default()(value, value);
  return value;
};

const processConnect = value => {
  value = value.filter(function (pattern) {
    return !!pattern;
  });

  if (!value.length) {
    throw new Error("Connect field is empty!");
  }

  return value;
};

const processAction = value => {
  value = value.map(function (action) {
    const json = JSON.parse(action);

    if (!json.title || !json.command) {
      throw new Error('Action is incorrect');
    }

    return json;
  });

  if (!value.length) {
    throw new Error("Action field is empty!");
  }

  return value;
};

const processLocale = (localeObj, meta) => {
  const result = {};
  Object.keys(localeObj).forEach(key => {
    const json = localeObj[key];

    try {
      result[key] = JSON.parse(json);
    } catch (err) {
      debug(`Parse locale  ${key}: ${json} error: ${err.message}`);
    }
  });

  if (!meta.defaultLocale) {
    meta.defaultLocale = 'en';
  }

  if (!result[meta.defaultLocale]) {
    throw new Error(`Default locale ${meta.defaultLocale} is not found!`);
  }

  return result;
};

const getCodeMeta = (code, fieldScheme) => {
  const meta = {};
  const keyType = {};
  const importantKeys = [];
  const keyValidators = {};
  Object.keys(fieldScheme).forEach(key => {
    const value = fieldScheme[key];
    const m = /^(\*)?([^!]+)(?:!(.+))?$/.exec(value);
    const isImportant = m[1];
    const type = m[2];
    const typeValidators = !m[3] ? [] : m[3].split('!');
    const validators = typeValidators.map(type => {
      switch (type) {
        case 'version':
          {
            return processVersion;
          }

        case 'connect':
          {
            return processConnect;
          }

        case 'action':
          {
            return processAction;
          }

        case 'locale':
          {
            return processLocale;
          }

        default:
          {
            throw new Error(`Validator is not found ${type}`);
          }
      }
    });
    keyType[key] = type;

    if (isImportant) {
      importantKeys.push(key);
    }

    if (validators.length) {
      keyValidators[key] = validators;
    }
  });
  let readMeta = false;
  code.split(/\r?\n/).some(function (line) {
    if (/^\s*\/\//.test(line)) {
      if (!readMeta && /[=]+UserScript[=]+/.test(line)) {
        readMeta = true;
      }

      if (readMeta && /[=]+\/UserScript[=]+/.test(line)) {
        readMeta = false;
        return true;
      }

      if (readMeta) {
        const m = /^\s*\/\/\s*@([A-Za-z0-9]+)\s+(.+)$/.exec(line);

        if (m) {
          const key = m[1];
          const value = m[2].trim();
          const type = keyType[key];

          switch (type) {
            case 'string':
              {
                meta[key] = value;
                break;
              }

            case 'number':
              {
                const int = parseInt(value, 10);

                if (!Number.isFinite(int)) {
                  throw new Error(`Parse field ${key}: ${meta[key]} error!`);
                }

                meta[key] = int;
                break;
              }

            case 'array':
              {
                if (!meta[key]) {
                  meta[key] = [];
                }

                meta[key].push(value);
                break;
              }

            case 'object':
              {
                if (!meta[key]) {
                  meta[key] = {};
                }

                const m = /^([^\s]+)\s+(.+)$/.exec(value);

                if (!m) {
                  throw new Error(`Parse field ${key}: ${meta[key]} error!`);
                }

                const _key = m[1];

                const _value = m[2].trim();

                Object.assign(meta[key], {
                  [_key]: _value
                });
                break;
              }

            default:
              {
                debug(`Skip meta key ${key}: ${value}`);
              }
          }
        }
      }
    }
  });
  importantKeys.forEach(key => {
    if (!meta[key]) {
      throw new Error(`Field ${key} is important!`);
    }
  });
  Object.keys(keyValidators).forEach(key => {
    if (meta[key]) {
      const validators = keyValidators[key];
      validators.forEach(validator => {
        try {
          meta[key] = validator(meta[key], meta);
        } catch (err) {
          throw new Error(`Validate field ${key}: ${meta[key]} error: ${err.message}`);
        }
      });
    }
  });
  return meta;
};

/* harmony default export */ __webpack_exports__["default"] = (getCodeMeta);

/***/ }),
/* 47 */
/*!************************************************!*\
  !*** ./node_modules/compare-versions/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
(function (root, factory) {
  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

  function indexOrEnd(str, q) {
    return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
  }

  function split(v) {
    var c = v.replace(/^v/, '').replace(/\+.*$/, '');
    var patchIndex = indexOrEnd(c, '-');
    var arr = c.substring(0, patchIndex).split('.');
    arr.push(c.substring(patchIndex + 1));
    return arr;
  }

  function tryParse(v) {
    return isNaN(Number(v)) ? v : Number(v);
  }

  function validate(version) {
    if (typeof version !== 'string') {
      throw new TypeError('Invalid argument expected string');
    }
    if (!semver.test(version)) {
      throw new Error('Invalid argument not valid semver (\''+version+'\' received)');
    }
  }

  return function compareVersions(v1, v2) {
    [v1, v2].forEach(validate);

    var s1 = split(v1);
    var s2 = split(v2);

    for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
      var n1 = parseInt(s1[i] || 0, 10);
      var n2 = parseInt(s2[i] || 0, 10);

      if (n1 > n2) return 1;
      if (n2 > n1) return -1;
    }

    var sp1 = s1[s1.length - 1];
    var sp2 = s2[s2.length - 1];

    if (sp1 && sp2) {
      var p1 = sp1.split('.').map(tryParse);
      var p2 = sp2.split('.').map(tryParse);

      for (i = 0; i < Math.max(p1.length, p2.length); i++) {
        if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return -1;
        if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return 1;

        if (p1[i] > p2[i]) return 1;
        if (p2[i] > p1[i]) return -1;
      }
    } else if (sp1 || sp2) {
      return sp1 ? -1 : 1;
    }

    return 0;
  };

}));


/***/ }),
/* 48 */
/*!*****************************!*\
  !*** ./src/tools/getNow.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getNow = () => Math.trunc(Date.now() / 1000);

/* harmony default export */ __webpack_exports__["default"] = (getNow);

/***/ }),
/* 49 */
/*!****************************************************!*\
  !*** ./src/stores/Explorer/ExplorerModuleStore.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ 5);
/* harmony import */ var _TrackerStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TrackerStore */ 20);
/* harmony import */ var _tools_explorerModuleWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/explorerModuleWorker */ 50);
/* harmony import */ var _ExplorerModuleMetaStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExplorerModuleMetaStore */ 51);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/getLogger */ 8);





const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_4__["default"])('ExplorerModuleStore');
/**
 * @typedef {{}} ExplorerModuleStore
 * @property {string} id
 * @property {TrackerOptionsStore} [options]
 * @property {ExplorerModuleMetaStore} meta
 * @property {string} code
 * @property {function} setOptions
 * @property {function} getSnapshot
 * @property {*} worker
 * @property {function} attach
 * @property {function} deattach
 * @property {function} handleAttachedChange
 * @property {function} createWorker
 * @property {function} destroyWorker
 * @property {function} reloadWorker
 * @property {function} afterCreate
 * @property {function} beforeDestroy
 */

const ExplorerModuleStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('ExplorerModuleStore', {
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier,
  options: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(_TrackerStore__WEBPACK_IMPORTED_MODULE_1__["TrackerOptionsStore"], {}),
  meta: _ExplorerModuleMetaStore__WEBPACK_IMPORTED_MODULE_3__["default"],
  code: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string
}).actions(
/**ExplorerModuleStore*/
self => {
  return {
    setOptions(value) {
      self.options = value;
    }

  };
}).views(
/**ExplorerModuleStore*/
self => {
  let attached = 0;
  let worker = null;
  return {
    getSnapshot() {
      return JSON.parse(JSON.stringify(self));
    },

    get worker() {
      return worker;
    },

    attach() {
      attached++;
      self.handleAttachedChange();
    },

    deattach() {
      attached--;
      setTimeout(() => {
        self.handleAttachedChange();
      }, 1);
    },

    handleAttachedChange() {
      if (attached) {
        self.createWorker();
      } else {
        self.destroyWorker();
      }
    },

    createWorker() {
      if (!worker) {
        worker = new _tools_explorerModuleWorker__WEBPACK_IMPORTED_MODULE_2__["default"](self.toJSON());
      }
    },

    destroyWorker() {
      if (worker) {
        worker.destroy();
      }

      worker = null;
    },

    reloadWorker() {
      if (worker) {
        self.destroyWorker();
        self.createWorker();
      }
    },

    afterCreate() {
      Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["onPatch"])(self, patch => {
        if (/^\/(code)$/.test(patch.path)) {
          self.reloadWorker();
        }
      });
    },

    beforeDestroy() {
      self.destroyWorker();
    }

  };
});
/* harmony default export */ __webpack_exports__["default"] = (ExplorerModuleStore);

/***/ }),
/* 50 */
/*!*******************************************!*\
  !*** ./src/tools/explorerModuleWorker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleWorker */ 22);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ 34);



class ExplorerModuleWorker extends _moduleWorker__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);
    this.initPromise = null;
  }

  init() {
    if (this.initPromise) {
      return this.initPromise;
    }

    return this.initPromise = super.init();
  }

  getItems(params) {
    return this.init().then(() => {
      return this.callFn('events.getItems', [params]);
    }).then(postProcessResult);
  }

  sendCommand(command, params) {
    return this.init().then(() => {
      return this.callFn('events.command', [command, params]);
    }).then(postProcessResult);
  }

}

const postProcessResult = result => {
  if (!result) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorWithCode"](`Result is empty`, 'EMPTY_RESULT');
  }

  if (!result.success) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorWithCode"](`Result is not success`, 'NOT_SUCCESS');
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (ExplorerModuleWorker);

/***/ }),
/* 51 */
/*!********************************************************!*\
  !*** ./src/stores/Explorer/ExplorerModuleMetaStore.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ 5);
/* harmony import */ var _ExplorerModuleMetaActionStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExplorerModuleMetaActionStore */ 52);
/* harmony import */ var _tools_getLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/getLocale */ 54);
/* harmony import */ var _tools_processLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools/processLocale */ 53);




/**
 * @typedef {{}} ExplorerModuleMetaStore
 * @property {string} name
 * @property {string} version
 * @property {string|undefined} author
 * @property {string|undefined} description
 * @property {string|undefined} homepageURL
 * @property {string|undefined} icon
 * @property {string|undefined} icon64
 * @property {string|undefined} siteURL
 * @property {string|undefined} updateURL
 * @property {string|undefined} downloadURL
 * @property {string|undefined} supportURL
 * @property {string[]} require
 * @property {string[]} connect
 * @property {number} [cacheTTL]
 * @property {ExplorerModuleMetaActionStore[]} actions
 * @property {*} locales
 * @property {string|undefined} defaultLocale
 * @property {function} getLocale
 * @property {function} getName
 */

const ExplorerModuleMetaStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('ExplorerModuleMetaStore', {
  name: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  version: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  author: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  description: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  homepageURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  icon: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  icon64: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  siteURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  updateURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  downloadURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  supportURL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  require: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  connect: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string),
  cacheTTL: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number, 0),
  actions: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(_ExplorerModuleMetaActionStore__WEBPACK_IMPORTED_MODULE_1__["default"]),
  locales: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].frozen(),
  defaultLocale: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string)
}).views(self => {
  let locale = null;
  return {
    getLocale() {
      if (!locale) {
        locale = Object(_tools_getLocale__WEBPACK_IMPORTED_MODULE_2__["default"])(self.defaultLocale, self.locales);
      }

      return locale;
    },

    getName() {
      return Object(_tools_processLocale__WEBPACK_IMPORTED_MODULE_3__["default"])(self.name, self.getLocale());
    }

  };
});
/* harmony default export */ __webpack_exports__["default"] = (ExplorerModuleMetaStore);

/***/ }),
/* 52 */
/*!**************************************************************!*\
  !*** ./src/stores/Explorer/ExplorerModuleMetaActionStore.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ 5);
/* harmony import */ var _tools_processLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools/processLocale */ 53);
/* harmony import */ var _ExplorerModuleMetaStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExplorerModuleMetaStore */ 51);



/**
 * @typedef {{}} ExplorerModuleMetaActionStore
 * @property {string} icon
 * @property {string} title
 * @property {*} command
 * @property {function} getTitle
 */

const ExplorerModuleMetaActionStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('ExplorerModuleMetaActionStore', {
  icon: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  title: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  command: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].frozen()
}).views(self => {
  return {
    getTitle() {
      const moduleMetaStore =
      /**ExplorerModuleMetaStore*/
      Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["getParentOfType"])(self, _ExplorerModuleMetaStore__WEBPACK_IMPORTED_MODULE_2__["default"]);
      return Object(_tools_processLocale__WEBPACK_IMPORTED_MODULE_1__["default"])(self.title, moduleMetaStore.getLocale());
    }

  };
});
/* harmony default export */ __webpack_exports__["default"] = (ExplorerModuleMetaActionStore);

/***/ }),
/* 53 */
/*!************************************!*\
  !*** ./src/tools/processLocale.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const processLocale = (value, locale) => {
  const setLocale = value => {
    const key = value.substr(6, value.length - 6 - 2);
    return locale && locale[key] || value;
  };

  const readMsg = value => {
    const startMsg = 6;
    let endMsg = value.indexOf('__', startMsg);

    if (endMsg !== -1) {
      endMsg += 2;
    }

    let pos = null;
    let str = null;

    if (endMsg !== -1) {
      const msg = value.substr(0, endMsg);

      if (/^__MSG_[a-zA-Z_]+__$/.test(msg)) {
        str = setLocale(msg, locale);
        pos = endMsg - 1;
      } else {
        str = value.substr(0, startMsg);
        pos = startMsg - 1;
      }
    } else {
      str = value;
      pos = value.length - 1;
    }

    return {
      text: str,
      i: pos
    };
  };

  let str = '';

  for (let i = 0, symbol; symbol = value[i]; i++) {
    if (value.substr(i, 6) === '__MSG_') {
      const result = readMsg(value.substr(i));
      i += result.i;
      str += result.text;
    } else {
      str += symbol;
    }
  }

  return str;
};

/* harmony default export */ __webpack_exports__["default"] = (processLocale);

/***/ }),
/* 54 */
/*!********************************!*\
  !*** ./src/tools/getLocale.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getLocale = (defaultLocale, locales) => {
  const languages = [];
  const uiLang = chrome.i18n.getUILanguage();
  const m = /([^-]+)/.exec(uiLang);

  if (m) {
    languages.push(m[1]);
  }

  languages.push(defaultLocale);
  let result = null;

  if (locales) {
    languages.some(language => {
      return result = locales[language];
    });

    if (result) {
      result = Object.assign({}, locales[defaultLocale], result);
    }
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (getLocale);

/***/ }),
/* 55 */
/*!***********************************************!*\
  !*** ./src/tools/getExploreModuleCodeMeta.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCodeMeta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCodeMeta */ 46);

const fieldType = {
  name: '*string',
  version: '*string!version',
  author: 'string',
  description: 'string',
  homepageURL: 'string',
  icon: 'string',
  icon64: 'string',
  siteURL: 'string',
  updateURL: 'string',
  downloadURL: 'string',
  supportURL: 'string',
  cacheTTL: 'number',
  require: 'array',
  connect: '*array!connect',
  action: 'array!action',
  locale: 'object!locale',
  defaultLocale: 'string'
};

const getExploreModuleCodeMeta = function (code) {
  const result = Object(_getCodeMeta__WEBPACK_IMPORTED_MODULE_0__["default"])(code, fieldType);
  result.actions = result.action;
  delete result.action;
  result.locales = result.locale;
  delete result.locale;
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (getExploreModuleCodeMeta);

/***/ }),
/* 56 */
/*!**************************************!*\
  !*** ./src/background/tabFetchBg.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_promiseFinally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/promiseFinally */ 57);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ 58);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/getLogger */ 8);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const deserializeError = __webpack_require__(/*! deserialize-error */ 26);

const Events = __webpack_require__(/*! events */ 59);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_2__["default"])('TabFetchBg');
const DEBUG = false;

class TabFetchBg {
  constructor() {
    _defineProperty(this, "tabRemoveListener", tabId => {
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
    });

    this.senderTabMap = new Map();
    this.originTabMap = new Map();
    this.idRequestMap = new Map();
    this.requestIndex = 0;
    this.isMobile = /Mobile Safari\/(\d+)|Android (\d+)/.test(navigator.userAgent);
    DEBUG && logger.debug('constructor');
  }

  async request(senderTabId, originUrl, fetchUrl, fetchOptions) {
    DEBUG && logger.debug('request', senderTabId, originUrl, fetchUrl, fetchOptions);
    const permissions = {
      permissions: ['tabs']
    };
    const hasPermissions = await containsPermissions(permissions);

    if (!hasPermissions) {
      await requestPermissions(permissions);
    }

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

  deleteOriginTab(originUrl) {
    this.originTabMap.delete(originUrl);
  }

  addRemovedTabListener() {
    if (!chrome.tabs.onRemoved.hasListener(this.tabRemoveListener)) {
      DEBUG && logger.debug('addRemovedTabListener');
      chrome.tabs.onRemoved.addListener(this.tabRemoveListener);
    }
  }

  removeRemovedTabListener() {
    if (chrome.tabs.onRemoved.hasListener(this.tabRemoveListener)) {
      DEBUG && logger.debug('removeRemovedTabListener');
      chrome.tabs.onRemoved.removeListener(this.tabRemoveListener);
    }
  }

  initRequest(id) {
    DEBUG && logger.debug('initRequest', id);
    const request = this.idRequestMap.get(id);

    if (request) {
      return request.init();
    } else {
      throw new Error(`initRequest error ${id} is not found`);
    }
  }

  handleResponse(id, result) {
    DEBUG && logger.debug('handleResponse', id);
    const request = this.idRequestMap.get(id);

    if (request) {
      return request.handleResponse(result);
    } else {
      throw new Error(`handleResponse error ${id} is not found`);
    }
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
    this.idRequestMap.forEach(request => {
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
    this.requests.slice(0).forEach(requset => {
      requset.destroy();
    });
  }

}

class OriginTab {
  constructor(tabFetchBg, originUrl) {
    _defineProperty(this, "tabUpdatedListener", (tabId, changeInfo) => {
      if (tabId !== this.tabId) return;
      if (!changeInfo.url) return;
      DEBUG && logger.debug('OriginTab tabUpdatedListener', this.tabId, this.originUrl);
      this.requests.forEach(request => {
        request.initSession();
      });
    });

    _defineProperty(this, "closeOnIdleDebounce", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(this.closeOnIdle.bind(this), 250));

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
        this.closeOnIdleDebounce();
      }
    });
  }

  initTab() {
    DEBUG && logger.debug('OriginTab createTab', this.tabId, this.originUrl);
    if (this.tabPromise) return this.tabPromise;
    return this.tabPromise = Promise.resolve().then(() => {
      if (this.tabFetchBg.isMobile) {
        return createTab(this.originUrl);
      } else {
        return createPopup(this.originUrl);
      }
    }).then(tabId => {
      this.tabId = tabId;
      this.addTabUpdatedListener();
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

  closeOnIdle() {
    if (!this.requests.length) {
      DEBUG && logger.debug('OriginTab closeOnIdle', this.tabId, this.originUrl);
      this.tabFetchBg.deleteOriginTab(this.originUrl);
      chrome.tabs.remove(this.tabId);
    }
  }

  destroy() {
    DEBUG && logger.debug('OriginTab destroy', this.tabId, this.originUrl);
    this.requests.slice(0).forEach(request => {
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
    }).then(...Object(_tools_promiseFinally__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
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
    if (this.state === 'finished') return;
    DEBUG && logger.debug('Request initSession', this.id);
    const sessionId = ++this.sessionIndex;
    return this.originTab.initTab().then(() => {
      if (sessionId !== this.sessionIndex) return;
      return executeScriptPromise(this.originTab.tabId, {
        file: 'tabFetch.js'
      });
    }).then(() => {
      if (sessionId !== this.sessionIndex) return;
      const {
        origin: originTabOrigin
      } = new URL(this.originTab.originUrl);
      const {
        origin: urlOrigin
      } = new URL(this.url);
      const isSameOrigin = urlOrigin === originTabOrigin;
      return executeScriptPromise(this.originTab.tabId, {
        func: function (id, url, options, isSameOrigin) {
          try {
            window.tabFetch(id, url, options, isSameOrigin);
            return {
              result: true
            };
          } catch (err) {
            return {
              error: {
                message: err.message,
                stack: err.stack
              }
            };
          }
        },
        args: [this.id, this.url, this.options, isSameOrigin]
      }).then(results => results[0]);
    }).then(result => {
      if (sessionId !== this.sessionIndex) return;

      if (!result) {
        this.handleReject(new Error('tabFetch error'));
      } else if (result.error) {
        this.handleReject(deserializeError(result.error));
      }
    }, err => {
      if (sessionId !== this.sessionIndex) return;
      this.handleReject(err);
    });
  }

  handleResponse(result) {
    DEBUG && logger.debug('Request handleResponse', this.id);

    if (result.error) {
      this.handleReject(deserializeError(result.error));
    } else {
      this.handleResolve(result.result);
    }
  }

  abort(reason) {
    DEBUG && logger.debug('Request abort', this.id);

    if (this.state === 'pending') {
      executeScriptPromise(this.originTab.tabId, {
        func: function (id) {
          try {
            window.tabFetchAbort(id);
          } catch (err) {
            console.error('tabFetchAbort error', err);
          }
        },
        args: [this.id]
      });
    }

    this.handleReject(reason || new Error('Aborted'));
  }

  destroy() {
    DEBUG && logger.debug('Request destroy', this.id);
    this.abort(new Error('Destroyed'));
  }

}

const createPopup = originUrl => {
  return new Promise(resolve => chrome.windows.create({
    url: originUrl,
    focused: false,
    width: 120,
    height: 25,
    left: screen.availWidth,
    top: screen.availHeight,
    type: 'popup'
  }, resolve)).then(window => {
    const tabId = window.tabs[0].id;
    chrome.tabs.update(tabId, {
      muted: true
    });
    return tabId;
  });
};

const createTab = originUrl => {
  return new Promise(resolve => chrome.tabs.create({
    url: originUrl,
    active: false
  }, resolve)).then(tab => {
    const tabId = tab.id;
    chrome.tabs.update(tabId, {
      muted: true
    });
    return tabId;
  });
};

const executeScriptPromise = (tabId, options) => {
  const injection = {
    target: {
      tabId: tabId
    }
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

  if (options.runAt) {// strict runAt mapping might be needed, but 'document_start' is common
    // chrome.scripting doesn't support runAt in the same way for func, 
    // but works for files? No, it's property of ScriptInjection
    // Actually, chrome.scripting.executeScript DOES NOT support runAt directly in the injection object?
    // Wait, checked docs: 'injectImmediately' is boolean. 'world'?
    // For now, let's ignore runAt or assume default.
  }

  return chrome.scripting.executeScript(injection).then(results => {
    // results is array of {frameId, result}
    return results.map(r => r.result);
  });
};

const containsPermissions = permissions => {
  return new Promise((resolve, reject) => {
    chrome.permissions.contains(permissions, result => {
      const err = chrome.runtime.lastError;
      err ? reject(err) : resolve(result);
    });
  });
};

const requestPermissions = permissions => {
  return new Promise((resolve, reject) => {
    chrome.permissions.request(permissions, result => {
      const err = chrome.runtime.lastError;
      err ? reject(err) : resolve(result);
    });
  }).then(granted => {
    if (!granted) {
      throw new Error('Permissions is not granted');
    }
  });
};

const strArgs = (...args) => {
  return args.map(JSON.stringify).join(',');
};

/* harmony default export */ __webpack_exports__["default"] = (TabFetchBg);

/***/ }),
/* 57 */
/*!*************************************!*\
  !*** ./src/tools/promiseFinally.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param {function} finallyFn
 * @return {(function():Promise)[]}
 */
const promiseFinally = finallyFn => {
  return [result => Promise.resolve(finallyFn()).then(() => result), err => Promise.resolve(finallyFn()).then(() => {
    throw err;
  })];
};

/* harmony default export */ __webpack_exports__["default"] = (promiseFinally);

/***/ }),
/* 58 */
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 3)))

/***/ }),
/* 59 */
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 60 */
/*!******************************!*\
  !*** ./src/tools/migrate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storageGet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageGet */ 9);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLogger */ 8);
/* harmony import */ var _getTrackerCodeMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTrackerCodeMeta */ 45);
/* harmony import */ var _storageSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageSet */ 10);




const logger = Object(_getLogger__WEBPACK_IMPORTED_MODULE_1__["default"])('migrate');

const migrateProfiles = function (storage, oldStorage) {
  const profiles = storage.profiles;
  const oldProfiles = oldStorage.profiles;

  if (Array.isArray(oldProfiles)) {
    oldProfiles.forEach(profile => {
      profiles.push({
        id: `migrated-${profile.id}`,
        name: profile.name,
        trackers: profile.trackers
      });
    });
  }
};

const migrateCustomTrackers = function (storage, oldStorage) {
  const trackers = storage.trackers;
  const oldTrackers = oldStorage.trackers;

  if (oldTrackers) {
    Object.entries(oldTrackers).forEach(([id, tracker]) => {
      try {
        trackers[id] = {
          id: id,
          meta: Object(_getTrackerCodeMeta__WEBPACK_IMPORTED_MODULE_2__["default"])(tracker.code),
          info: {
            lastUpdate: 0,
            disableAutoUpdate: false
          },
          code: tracker.code
        };
      } catch (err) {
        logger.error('Migrate tracker error', err);
      }
    });
  }
};

const migrate = function () {
  return Object(_storageGet__WEBPACK_IMPORTED_MODULE_0__["default"])({
    migrate3: false
  }).then(storage => {
    if (storage.migrate3) return;
    return Object(_storageGet__WEBPACK_IMPORTED_MODULE_0__["default"])(null).then(function (oldStorage) {
      const syncStorage = {
        options: {},
        profiles: []
      };
      const localStorage = {
        trackers: {},
        migrate3: true
      };

      if (oldStorage.hasOwnProperty('contextMenu')) {
        syncStorage.options.contextMenu = !!oldStorage.contextMenu;
      }

      if (oldStorage.hasOwnProperty('hidePeerRow')) {
        syncStorage.options.hidePeerRow = !!oldStorage.hidePeerRow;
      }

      if (oldStorage.hasOwnProperty('hideSeedRow')) {
        syncStorage.options.hideSeedRow = !!oldStorage.hideSeedRow;
      }

      if (oldStorage.hasOwnProperty('invertIcon')) {
        syncStorage.options.invertIcon = !!oldStorage.invertIcon;
      }

      if (oldStorage.hasOwnProperty('kpFolderId') && typeof oldStorage.kpFolderId === 'string') {
        syncStorage.options.kpFolderId = oldStorage.kpFolderId;
      }

      if (oldStorage.hasOwnProperty('disablePopup')) {
        syncStorage.options.disablePopup = !!oldStorage.disablePopup;
      }

      if (oldStorage.hasOwnProperty('categoryWordFilter')) {
        syncStorage.options.categoryWordFilter = !!oldStorage.categoryWordFilter;
      }

      if (oldStorage.hasOwnProperty('trackerListHeight') && typeof trackerListHeight === 'number') {
        syncStorage.options.trackerListHeight = oldStorage.trackerListHeight;
      }

      if (oldStorage.hasOwnProperty('useEnglishPosterName') && oldStorage.useEnglishPosterName) {
        syncStorage.options.originalPosterName = true;
      } else if (!/^ru-?/.test(chrome.i18n.getUILanguage())) {
        syncStorage.options.originalPosterName = true;
      }

      migrateCustomTrackers(localStorage, oldStorage);
      migrateProfiles(syncStorage, oldStorage);

      if (Object.keys(localStorage.trackers).length === 0) {
        delete localStorage.trackers;
      }

      if (Object.keys(syncStorage.options).length === 0) {
        delete syncStorage.options;
      }

      if (syncStorage.profiles.length === 0) {
        delete syncStorage.profiles;
      }

      return Promise.all([Object(_storageSet__WEBPACK_IMPORTED_MODULE_3__["default"])(localStorage, 'local'), Object(_storageSet__WEBPACK_IMPORTED_MODULE_3__["default"])(syncStorage, 'sync')]);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (migrate);

/***/ }),
/* 61 */
/*!***********************************!*\
  !*** ./src/tools/errorTracker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLogger */ 8);
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracker */ 62);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const path = __webpack_require__(/*! path */ 63);

const logger = Object(_getLogger__WEBPACK_IMPORTED_MODULE_0__["default"])('errorTrackerUi');

class ErrorTracker {
  constructor() {
    _defineProperty(this, "trackError", (err, prefix) => {
      const errors = this.errors;

      try {
        const _prefix = prefix ? prefix + ': ' : '';

        const exd = this._stripDesc(_prefix + this._renameStack(this._getErrorStack(err))).substr(0, 500);

        if (errors.indexOf(exd) === -1) {
          errors.unshift(exd);
          errors.splice(10);
          this.track({
            exd: exd,
            t: 'exception'
          });
        }
      } catch (err) {
        logger.error('trackError error', err);
      }
    });

    _defineProperty(this, "_handleUncaughtException", errorEvent => {
      this.trackError(errorEvent.error, 'UncaughtException');
    });

    _defineProperty(this, "_handleUnhandledRejection", promiseRejectionEvent => {
      this.trackError(promiseRejectionEvent.reason, 'UnhandledRejection');
    });

    this.renameMap = [];
    this.errors = [];
  }
  /**
   * @param {Error} err
   * @param {string} [prefix]
   */


  bindExceptions() {
    const globalContext = typeof window !== 'undefined' ? window : self;
    globalContext.addEventListener('error', this._handleUncaughtException);
    globalContext.addEventListener('unhandledrejection', this._handleUnhandledRejection);
  }

  unbindExceptions() {
    const globalContext = typeof window !== 'undefined' ? window : self;
    globalContext.removeEventListener('error', this._handleUncaughtException);
    globalContext.removeEventListener('unhandledrejection', this._handleUnhandledRejection);
  }
  /**
   * @param {Object} params
   */


  track(params) {
    if (false) {} else {
      logger.debug('Skip track error', params);
    }
  }

  updateRenameMap() {
    if (typeof document === 'undefined') return;
    return Array.from(document.querySelectorAll('script:not([data-rename-matched])')).map(script => {
      script.dataset.renameMatched = 'true';

      const srcReStr = this._escapeRegExp(script.src);

      this.renameMap.push([new RegExp(srcReStr, 'g'), path.basename(script.src)]);
    });
  }
  /**
   * @param {Error} err
   * @return {string}
   */


  _getErrorStack(err) {
    const stack = !err ? 'UNKNOWN' : err.stack || `${err.name}: ${err.message}`;
    return '' + stack;
  }
  /**
   * @param {string} str
   * @return {string}
   */


  _stripDesc(str) {
    return ('' + str).replace(/\r/g, '').replace(/[\s\t]+/g, ' ').replace(/\n+/g, '\n');
  }
  /**
   * @param {string} str
   * @return {string}
   */


  _escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }
  /**
   * @param {string} str
   * @return {string}
   */


  _renameStack(str) {
    this.updateRenameMap();
    this.renameMap.forEach(([nameRe, newName]) => {
      str = str.replace(nameRe, newName);
    });
    return str;
  }

}

const errorTracker = new ErrorTracker();
/* harmony default export */ __webpack_exports__["default"] = (errorTracker);

/***/ }),
/* 62 */
/*!******************************!*\
  !*** ./src/tools/tracker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_storageGet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/storageGet */ 9);
/* harmony import */ var _tools_getNow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/getNow */ 48);
/* harmony import */ var _tools_storageSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/storageSet */ 10);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLogger */ 8);




const logger = Object(_getLogger__WEBPACK_IMPORTED_MODULE_3__["default"])('tracker');

class Tracker {
  init() {
    Object(_tools_storageGet__WEBPACK_IMPORTED_MODULE_0__["default"])('initTimeout').then(({
      initTimeout
    }) => {
      if (initTimeout > Object(_tools_getNow__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        // logger.debug('init skip cause: TIMEOUT');
        return;
      }

      return Object(_tools_storageSet__WEBPACK_IMPORTED_MODULE_2__["default"])({
        initTimeout: Object(_tools_getNow__WEBPACK_IMPORTED_MODULE_1__["default"])() + 5 * 60
      }).then(() => {
        return track({
          t: 'screenview',
          cd: 'init'
        }).then(() => {
          return Object(_tools_storageSet__WEBPACK_IMPORTED_MODULE_2__["default"])({
            initTimeout: Object(_tools_getNow__WEBPACK_IMPORTED_MODULE_1__["default"])() + 86400
          });
        }, err => {
          logger.error('init error', err);
        });
      });
    });
  }

  track(params) {
    track(params).catch(err => {
      logger.error('track error', err);
    });
  }

}

const track = params => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({
      action: 'track',
      params: params
    }, response => {
      if (!response) {
        return reject(new Error('Unknown error'));
      }

      if (response.error) {
        const err = new Error();
        Object.assign(err, response.error);
        return reject(err);
      }

      resolve();
    });
  });
};

const tracker = new Tracker();
/* harmony default export */ __webpack_exports__["default"] = (tracker);

/***/ }),
/* 63 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ 2)))

/***/ }),
/* 64 */
/*!********************************!*\
  !*** ./src/tools/getUserId.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storageGet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageGet */ 9);
/* harmony import */ var _storageSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageSet */ 10);



const uuid = __webpack_require__(/*! uuid/v4 */ 65);

let uuidCache = null;

const getUserId = () => {
  if (uuidCache) {
    return Promise.resolve(uuidCache);
  }

  return Object(_storageGet__WEBPACK_IMPORTED_MODULE_0__["default"])('uuid').then(storage => {
    if (!storage.uuid) {
      storage.uuid = uuid();
      return Object(_storageSet__WEBPACK_IMPORTED_MODULE_1__["default"])(storage).then(() => storage.uuid);
    } else {
      return storage.uuid;
    }
  }).then(uuid => {
    return uuidCache = uuid;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getUserId);

/***/ }),
/* 65 */
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ 66);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 67);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 66 */
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 67 */
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 68 */
/*!*******************************************!*\
  !*** ./src/tools/jsonCodeToUserscript.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convertCodeV1toV2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertCodeV1toV2 */ 69);
/* harmony import */ var _convertCodeV2toV3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convertCodeV2toV3 */ 70);
/* harmony import */ var _jsonToUserscript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsonToUserscript */ 71);




const jsonCodeToUserscript = text => {
  let json = JSON.parse(text);

  if (json.version === 1) {
    json = Object(_convertCodeV1toV2__WEBPACK_IMPORTED_MODULE_0__["default"])(json);
  }

  if (json.version === 2) {
    json = Object(_convertCodeV2toV3__WEBPACK_IMPORTED_MODULE_1__["default"])(json);
  }

  return Object(_jsonToUserscript__WEBPACK_IMPORTED_MODULE_2__["default"])(json);
};

/* harmony default export */ __webpack_exports__["default"] = (jsonCodeToUserscript);

/***/ }),
/* 69 */
/*!****************************************!*\
  !*** ./src/tools/convertCodeV1toV2.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @typedef {{}} CodeV2
 * @property {number} version
 * @property {string} type
 * @property {number} uid
 * @property {string} title
 * @property {string} icon
 * @property {string} desc
 * @property {string} updateUrl
 * @property {string} downloadUrl
 * @property {string} tVersion
 * @property {CodeV2Search} search
 */

/**
 * @typedef {{}} CodeV2Search
 * @property {string} [loginUrl]
 * @property {string} [loginFormSelector]
 * @property {string} searchUrl
 * @property {string} nextPageSelector
 * @property {string} [baseUrl]
 * @property {string} [requestType]
 * @property {string} [requestData]
 * @property {string} [requestMimeType]
 * @property {{name,type}[]} [onBeforeRequest]
 * @property {{}} listItemSelector
 * @property {[number, number]} [listItemSplice]
 * @property {{}} torrentSelector
 * @property {string|{selector,attr}} [torrentSelector.categoryTitle]
 * @property {{selector,attr}} [torrentSelector.categoryUrl]
 * @property {string} [torrentSelector.title]
 * @property {{selector,attr}} [torrentSelector.url]
 * @property {string|{selector,attr}} [torrentSelector.size]
 * @property {{selector,attr}} [torrentSelector.downloadUrl]
 * @property {string} [torrentSelector.seed]
 * @property {string} [torrentSelector.peer]
 * @property {string|{selector,attr}} [torrentSelector.date]
 * @property {{}} onGetValue
 * @property {{name,re,text}[]} [onGetValue.categoryTitle]
 * @property {{name,re,text}[]} [onGetValue.categoryUrl]
 * @property {{name,re,text}[]} [onGetValue.title]
 * @property {{name,re,text}[]} [onGetValue.url]
 * @property {{name,re,text}[]} [onGetValue.size]
 * @property {{name,re,text}[]} [onGetValue.downloadUrl]
 * @property {{name,re,text}[]} [onGetValue.seed]
 * @property {{name,re,text}[]} [onGetValue.peer]
 * @property {{name,re,text}[]|string[]|{name,format}[]} [onGetValue.date]
 */
const convertCodeV1toV2 = code => {
  const codeV2 = {};
  codeV2.version = 2;
  codeV2.type = 'kit';
  codeV2.uid = code.uid;
  codeV2.icon = code.icon;
  codeV2.title = code.name;
  codeV2.desc = code.about;
  const search = codeV2.search = {};
  const torrentSelector = search.torrentSelector = {};
  const onGetValue = search.onGetValue = {};
  search.searchUrl = code.search_path;

  if (code.root_url) {
    search.baseUrl = code.root_url;
  }

  if (code.auth) {
    search.loginUrl = code.auth;
  }

  if (code.post) {
    search.requestType = 'POST';
    search.requestData = code.post;
  }

  if (code.encode) {
    search.onBeforeRequest = [{
      name: 'encode',
      type: 'cp1251'
    }];
  }

  search.listItemSelector = code.items;

  if (code.charset) {
    search.requestMimeType = 'text/html; charset=' + code.charset;
  }

  if (code.cat_alt) {
    code.cat_attr = 'alt';
    code.cat_alt = undefined;
  }

  if (code.auth_f) {
    search.loginFormSelector = code.auth_f;
  }

  if (code.sf || code.sl) {
    search.listItemSplice = [code.sf || 0, -(code.sl || 0)];
  }

  torrentSelector.title = code.tr_name;
  torrentSelector.url = {
    selector: code.tr_link,
    attr: 'href'
  };

  if (code.cat_name) {
    torrentSelector.categoryTitle = code.cat_name;

    if (code.cat_attr) {
      torrentSelector.categoryTitle = {
        selector: torrentSelector.categoryTitle,
        attr: code.cat_attr
      };
    }

    if (code.cat_link) {
      torrentSelector.categoryUrl = {
        selector: code.cat_link,
        attr: 'href'
      };
    }
  }

  if (code.tr_size) {
    torrentSelector.size = code.tr_size;

    if (code.size_attr) {
      torrentSelector.size = {
        selector: torrentSelector.size,
        attr: code.size_attr
      };
    }

    const sizeFuncList = [];

    if (code.size_r && code.size_rp !== undefined) {
      sizeFuncList.push({
        name: 'replaceRe',
        re: code.size_r,
        text: code.size_rp
      });
    }

    if (code.s_c) {
      sizeFuncList.push('convertSize');
    }

    if (sizeFuncList.length) {
      onGetValue.size = sizeFuncList;
    }
  }

  if (code.tr_dl) {
    torrentSelector.downloadUrl = {
      selector: code.tr_dl,
      attr: 'href'
    };
  }

  if (code.seed) {
    torrentSelector.seed = code.seed;

    if (code.seed_r) {
      onGetValue.seed = [{
        name: 'replaceRe',
        re: code.seed_r,
        text: code.seed_rp
      }];
    }
  }

  if (code.peer) {
    torrentSelector.peer = code.peer;

    if (code.peer_r) {
      onGetValue.peer = [{
        name: 'replaceRe',
        re: code.peer_r,
        text: code.peer_rp
      }];
    }
  }

  if (code.date) {
    torrentSelector.date = code.date;

    if (code.date_attr) {
      torrentSelector.date = {
        selector: torrentSelector.date,
        attr: code.date_attr
      };
    }

    const dateFuncList = [];

    if (code.t_r) {
      dateFuncList.push({
        name: 'replaceRe',
        re: code.t_r,
        text: code.t_r_r
      });
    }

    if (code.t_t_r) {
      dateFuncList.push('replaceToday');
    }

    if (code.t_m_r) {
      dateFuncList.push('replaceMonth');
    }

    if (code.t_f !== undefined && code.t_f !== "-1") {
      dateFuncList.push({
        name: 'timeFormat',
        format: code.t_f
      });
    }

    if (dateFuncList.length) {
      onGetValue.date = dateFuncList;
    }
  }

  return codeV2;
};

/* harmony default export */ __webpack_exports__["default"] = (convertCodeV1toV2);

/***/ }),
/* 70 */
/*!****************************************!*\
  !*** ./src/tools/convertCodeV2toV3.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const convertSelector = (selector, postProcess) => {
  const result = {
    selector: null,
    pipeline: []
  };

  if (!selector) {
    return undefined;
  }

  if (!Array.isArray(postProcess)) {
    postProcess = [];
  }

  if (typeof selector === 'string') {
    selector = {
      selector
    };
  }

  result.selector = selector.selector;

  if (typeof selector.childNodeIndex === 'number') {
    result.pipeline.push({
      name: 'getChild',
      args: [selector.childNodeIndex]
    });
  }

  if (selector.attr) {
    result.pipeline.push({
      name: 'getAttr',
      args: [selector.attr]
    });
  } else if (selector.prop) {
    result.pipeline.push({
      name: 'getProp',
      args: [selector.prop]
    });
  } else if (selector.html) {
    result.pipeline.push({
      name: 'getHtml'
    });
    result.pipeline.push({
      name: 'trim'
    });
  } else {
    result.pipeline.push({
      name: 'getText'
    });
    result.pipeline.push({
      name: 'trim'
    });
  }

  postProcess.forEach(item => {
    if (item === 'convertSize') {
      result.pipeline.push({
        name: 'legacySizeFormat'
      });
    } else if (item === 'replaceToday') {
      result.pipeline.push({
        name: 'legacyReplaceToday'
      });
    } else if (item === 'replaceMonth') {
      result.pipeline.push({
        name: 'legacyReplaceMonth'
      });
    } else if (item.name === 'replaceRe') {
      result.pipeline.push({
        name: 'replaceRe',
        args: [item.re, item.text]
      });
    } else if (item.name === 'timeFormat') {
      result.pipeline.push({
        name: 'legacyParseDate',
        args: [item.format]
      });
    }
  });
  return result;
};

const convertCodeV2toV3 =
/**CodeV2*/
code => {
  const
  /**CodeStore*/
  codeV3 = {};
  codeV3.version = 3;
  codeV3.type = 'kit';
  const search = codeV3.search = {};
  search.url = code.search.searchUrl;
  const method = code.search.requestType;

  if (method) {
    search.method = method.toUpperCase();
  }

  const data = code.search.requestData;

  if (data) {
    if (search.method === 'POST') {
      search.body = data;
    } else {
      search.query = data;
    }
  }

  const onBeforeRequest = code.search.onBeforeRequest;

  if (Array.isArray(onBeforeRequest)) {
    onBeforeRequest.some(item => {
      if (item.name === 'encode') {
        if (item.type === 'cp1251') {
          search.encoding = item.type;
          return true;
        }
      }
    });
  }

  const overrideMimeType = code.search.requestMimeType;

  if (overrideMimeType) {
    const m = /charset=([^;]+)/.exec(code.search.requestMimeType);

    if (m) {
      code.search.charset = m[1];
    }
  }

  const auth = codeV3.auth = {};
  const loginUrl = code.search.loginUrl;

  if (loginUrl) {
    auth.url = loginUrl;
  }

  const loginFormSelector = code.search.loginFormSelector;

  if (loginFormSelector) {
    auth.loginForm = {
      selector: loginFormSelector
    };
  }

  const selectors = codeV3.selectors = {};
  selectors.row = convertSelector(code.search.listItemSelector);

  if (codeV3.search.listItemSplice) {
    selectors.skipFromStart = code.search.listItemSplice[0];
    selectors.skipFromEnd = code.search.listItemSplice[1] * -1;
  }

  code.search.onGetValue = code.search.onGetValue || {};
  selectors.categoryTitle = convertSelector(code.search.torrentSelector.categoryTitle, code.search.onGetValue.categoryTitle);
  selectors.categoryUrl = convertSelector(code.search.torrentSelector.categoryUrl, code.search.onGetValue.categoryUrl);
  selectors.categoryId = convertSelector(code.search.torrentSelector.categoryId, code.search.onGetValue.categoryId);
  selectors.title = convertSelector(code.search.torrentSelector.title, code.search.onGetValue.title);
  selectors.url = convertSelector(code.search.torrentSelector.url, code.search.onGetValue.url);
  selectors.size = convertSelector(code.search.torrentSelector.size, code.search.onGetValue.size);
  selectors.downloadUrl = convertSelector(code.search.torrentSelector.downloadUrl, code.search.onGetValue.downloadUrl);
  selectors.seeds = convertSelector(code.search.torrentSelector.seed, code.search.onGetValue.seed);
  selectors.peers = convertSelector(code.search.torrentSelector.peer, code.search.onGetValue.peer);
  selectors.date = convertSelector(code.search.torrentSelector.date, code.search.onGetValue.date);
  selectors.nextPageUrl = convertSelector(code.search.nextPageSelector, code.search.onGetValue.nextPageSelector);
  const description = codeV3.description = {};
  description.icon = code.icon;
  description.name = code.title;

  if (code.desc) {
    description.description = code.desc;
  }

  if (code.updateUrl) {
    description.updateUrl = code.updateUrl;
  }

  if (code.downloadUrl) {
    description.downloadUrl = code.downloadUrl;
  }

  const baseUrl = code.search.baseUrl;

  if (baseUrl) {
    description.url = baseUrl;
  }

  description.version = code.tVersion;
  return codeV3;
};

/* harmony default export */ __webpack_exports__["default"] = (convertCodeV2toV3);

/***/ }),
/* 71 */
/*!***************************************!*\
  !*** ./src/tools/jsonToUserscript.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stringify = __webpack_require__(/*! json-stringify-pretty-compact */ 72);

const jsonToUserscript = json => {
  const meta = [];
  meta.push('==UserScript==');
  const uri = new URL(json.search.url);
  const description = json.description || {};
  meta.push(`@name ${description.name}`);

  if (description.description) {
    meta.push(`@description ${description.description}`);
  }

  if (description.icon) {
    meta.push(`@icon ${description.icon}`);
  }

  if (description.updateUrl) {
    meta.push(`@updateURL ${description.updateUrl}`);
  }

  if (description.downloadUrl) {
    meta.push(`@downloadURL ${description.downloadUrl}`);
  }

  if (description.url) {
    meta.push(`@trackerURL ${description.url}`);
  } else {
    meta.push(`@trackerURL ${uri.protocol}//${uri.hostname}`);
  }

  if (description.version) {
    meta.push(`@version ${json.description.version}`);
  } else {
    meta.push(`@version 1.0`);
  }

  meta.push(`@connect *://${uri.hostname}`);
  meta.push('@require exKit');
  meta.push('==/UserScript==');
  const code = [];
  code.push(...meta.map(line => `// ${line}`));
  code.push('');
  code.push(`const code = ${stringify(json)};`);
  code.push('');
  code.push('API_exKit(code);');
  return code.join('\n');
};

/* harmony default export */ __webpack_exports__["default"] = (jsonToUserscript);

/***/ }),
/* 72 */
/*!*************************************************************!*\
  !*** ./node_modules/json-stringify-pretty-compact/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: This regex matches even invalid JSON strings, but since we’re
// working on the output of `JSON.stringify` we know that only valid strings
// are present (unless the user supplied a weird `options.indent` but in
// that case we don’t care since the output would be invalid anyway).
var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,]/g;

module.exports = function stringify(passedObj, options) {
  var indent, maxLength, replacer;

  options = options || {};
  indent = JSON.stringify(
    [1],
    undefined,
    options.indent === undefined ? 2 : options.indent
  ).slice(2, -3);
  maxLength =
    indent === ""
      ? Infinity
      : options.maxLength === undefined
      ? 80
      : options.maxLength;
  replacer = options.replacer;

  return (function _stringify(obj, currentIndent, reserved) {
    // prettier-ignore
    var end, index, items, key, keyPart, keys, length, nextIndent, prettified, start, string, value;

    if (obj && typeof obj.toJSON === "function") {
      obj = obj.toJSON();
    }

    string = JSON.stringify(obj, replacer);

    if (string === undefined) {
      return string;
    }

    length = maxLength - currentIndent.length - reserved;

    if (string.length <= length) {
      prettified = string.replace(stringOrChar, function(match, stringLiteral) {
        return stringLiteral || match + " ";
      });
      if (prettified.length <= length) {
        return prettified;
      }
    }

    if (replacer != null) {
      obj = JSON.parse(string);
      replacer = undefined;
    }

    if (typeof obj === "object" && obj !== null) {
      nextIndent = currentIndent + indent;
      items = [];
      index = 0;

      if (Array.isArray(obj)) {
        start = "[";
        end = "]";
        length = obj.length;
        for (; index < length; index++) {
          items.push(
            _stringify(obj[index], nextIndent, index === length - 1 ? 0 : 1) ||
              "null"
          );
        }
      } else {
        start = "{";
        end = "}";
        keys = Object.keys(obj);
        length = keys.length;
        for (; index < length; index++) {
          key = keys[index];
          keyPart = JSON.stringify(key) + ": ";
          value = _stringify(
            obj[key],
            nextIndent,
            keyPart.length + (index === length - 1 ? 0 : 1)
          );
          if (value !== undefined) {
            items.push(keyPart + value);
          }
        }
      }

      if (items.length > 0) {
        return [start, indent + items.join(",\n" + nextIndent), end].join(
          "\n" + currentIndent
        );
      }
    }

    return string;
  })(passedObj, "", 0);
};


/***/ }),
/* 73 */
/*!**********************************!*\
  !*** ./src/tools/setCodeMeta.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stripMetaFromCode = code => {
  let readFinish = false;
  let readMeta = false;
  return code.split(/\r?\n/).filter(function (line) {
    if (/^\s*\/\//.test(line)) {
      if (!readMeta && /[=]+UserScript[=]+/.test(line)) {
        readMeta = true;
      }

      if (readMeta && /[=]+\/UserScript[=]+/.test(line)) {
        readMeta = false;
        readFinish = true;
        return false;
      }

      if (!readFinish && readMeta) {
        return false;
      }
    }

    return true;
  }).join('\n').trim();
};

const fieldScheme = {
  require: ['array', 'string'],
  connect: ['array', 'string'],
  action: ['array', 'json'],
  locale: ['object', 'json']
};
const fieldProcessor = {
  json(value) {
    return JSON.stringify(value);
  },

  string(value) {
    return value;
  }

};

const metaToString = metadata => {
  const meta = [];
  meta.push('==UserScript==');
  Object.entries(metadata).forEach(([key, value]) => {
    const scheme = fieldScheme[key] || ['string', 'string'];
    const valueType = scheme[0];
    const valueProcessor = fieldProcessor[scheme[1]];

    switch (valueType) {
      case 'string':
        {
          meta.push(`@${key} ${valueProcessor(value)}`);
          break;
        }

      case 'array':
        {
          value.forEach(value => {
            meta.push(`@${key} ${valueProcessor(value)}`);
          });
          break;
        }

      case 'object':
        {
          Object.entries(value).forEach(([subKey, subValue]) => {
            meta.push(`@${key} ${subKey} ${valueProcessor(subValue)}`);
          });
          break;
        }
    }
  });
  meta.push('==/UserScript==');
  return meta.map(line => `// ${line}`).join('\n');
};

const setCodeMeta = (code, meta) => {
  return metaToString(meta) + '\n\n' + stripMetaFromCode(code);
};

/* harmony default export */ __webpack_exports__["default"] = (setCodeMeta);

/***/ })
/******/ ]);
//# sourceMappingURL=bg.js.map