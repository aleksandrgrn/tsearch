(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[12],{

/***/ 69:
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

/***/ 70:
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

/***/ })

}]);
//# sourceMappingURL=chunk-12.js.map