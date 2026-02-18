(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[19],{

/***/ 530:
/*!*************************************!*\
  !*** ./src/sandbox/exKitTracker.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_sizzleQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/sizzleQuery */ 531);
/* harmony import */ var _tools_convertCodeV1toV2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/convertCodeV1toV2 */ 69);
/* harmony import */ var _tools_convertCodeV2toV3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/convertCodeV2toV3 */ 70);
/* harmony import */ var _tools_encodeCp1251__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/encodeCp1251 */ 532);
/* harmony import */ var _tools_assertType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/assertType */ 292);
/* harmony import */ var _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools/exKitPipelineMethods */ 533);






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
      encodedQuery = Object(_tools_encodeCp1251__WEBPACK_IMPORTED_MODULE_3__["default"])(query);
    } else {
      encodedQuery = encodeURIComponent(query);
    }

    const options = {
      method: searchStore.method,
      url: searchStore.url.replace('%search%', encodedQuery),
      originUrl: searchStore.originUrl,
      query: (searchStore.query || '').replace('%search%', encodedQuery),
      body: (searchStore.body || '').replace('%search%', encodedQuery),
      charset: searchStore.charset
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
      charset: searchStore.charset
    };
    this.setHeaders(options);
    return this.request(session, options);
  }

  parseResponse(session, response) {
    const doc = session.doc = API_getDoc(response.body, response.url);

    if (this.code.hooks.onGetDoc) {
      this.code.hooks.onGetDoc(session, doc);
    }

    if (this.code.auth && this.code.auth.loginForm && Object(_tools_sizzleQuery__WEBPACK_IMPORTED_MODULE_0__["sizzleQuerySelector"])(doc, this.code.auth.loginForm.selector)) {
      throw new AuthError(this.code.auth.url);
    }

    const rows = Object(_tools_sizzleQuery__WEBPACK_IMPORTED_MODULE_0__["sizzleQuerySelectorAll"])(doc, this.code.selectors.row.selector);

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
      console.warn('parseRow warnings', {
        row,
        result,
        errors
      });
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
      node = cache[selector.selector] = Object(_tools_sizzleQuery__WEBPACK_IMPORTED_MODULE_0__["sizzleQuerySelector"])(container, selector.selector);
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
          result = Object(_tools_assertType__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(parseInt(Object(_tools_assertType__WEBPACK_IMPORTED_MODULE_4__["isString"])(result), 10));
        } else {
          result = Object(_tools_assertType__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(result);
        }
      } else if (urlFields.indexOf(key) !== -1) {
        result = API_normalizeUrl(session.response.url, Object(_tools_assertType__WEBPACK_IMPORTED_MODULE_4__["isString"])(result));
      } else if (strFields.indexOf(key) !== -1) {
        result = Object(_tools_assertType__WEBPACK_IMPORTED_MODULE_4__["isString"])(result);
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
        code = Object(_tools_convertCodeV1toV2__WEBPACK_IMPORTED_MODULE_1__["default"])(code);
      }

      if (code.version === 2) {
        code = Object(_tools_convertCodeV2toV3__WEBPACK_IMPORTED_MODULE_2__["default"])(code);
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
        const pipelineMethod = _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_5__["default"][method.name];
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

/* harmony default export */ __webpack_exports__["default"] = (ExKitTracker);

/***/ }),

/***/ 531:
/*!**********************************!*\
  !*** ./src/tools/sizzleQuery.js ***!
  \**********************************/
/*! exports provided: sizzleQuerySelector, sizzleQuerySelectorAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizzleQuerySelector", function() { return sizzleQuerySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizzleQuerySelectorAll", function() { return sizzleQuerySelectorAll; });
/* harmony import */ var sizzle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sizzle */ 526);
/* harmony import */ var sizzle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sizzle__WEBPACK_IMPORTED_MODULE_0__);


const sizzleQuerySelector = (target, selector) => {
  const results = [];

  if (isRequired(selector)) {
    sizzle__WEBPACK_IMPORTED_MODULE_0___default()(selector, target, results);
  } else {
    results.push(target.querySelector(selector));
  }

  return results[0] || null;
};

const sizzleQuerySelectorAll = (target, selector) => {
  const results = [];

  if (isRequired(selector)) {
    sizzle__WEBPACK_IMPORTED_MODULE_0___default()(selector, target, results);
  } else {
    results.push(...target.querySelectorAll(selector));
  }

  return results;
};

const isRequired = selector => {
  return /[^:]:(not|has|contains|empty|parent|header|first|last|eq|even|odd|lt|gt)|^\s*[~+]/.test(selector);
};



/***/ }),

/***/ 532:
/*!***********************************!*\
  !*** ./src/tools/encodeCp1251.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const encodeCp1251 = string => {
  let output = '',
      charCode,
      ExitValue,
      char;

  for (let i = 0, len = string.length; i < len; i++) {
    char = string.charAt(i);
    charCode = char.charCodeAt(0);
    let Acode = charCode;

    if (charCode > 1039 && charCode < 1104) {
      Acode -= 848;
      ExitValue = '%' + Acode.toString(16);
    } else if (charCode === 1025) {
      Acode = 168;
      ExitValue = '%' + Acode.toString(16);
    } else if (charCode === 1105) {
      Acode = 184;
      ExitValue = '%' + Acode.toString(16);
    } else if (charCode === 32) {
      Acode = 32;
      ExitValue = '%' + Acode.toString(16);
    } else if (charCode === 10) {
      ExitValue = '%0A';
    } else {
      ExitValue = char;
    }

    output = output + ExitValue;
  }

  return output;
};

/* harmony default export */ __webpack_exports__["default"] = (encodeCp1251);

/***/ }),

/***/ 533:
/*!*******************************************!*\
  !*** ./src/tools/exKitPipelineMethods.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assertType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assertType */ 292);

const exKitPipelineMethods = {
  getAttr: {
    in: 'node',
    args: [{
      name: 'Attribute',
      type: 'string'
    }],
    out: 'string',

    getMethod(attr) {
      return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isElement"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], value => value.getAttribute(attr));
    }

  },
  getProp: {
    in: 'node',
    args: [{
      name: 'Property',
      type: 'string'
    }],
    out: 'string',

    getMethod(prop) {
      return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isElement"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], value => value[prop]);
    }

  },
  getText: {
    in: 'node',
    out: 'string',

    getMethod() {
      return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isNode"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], value => value.textContent);
    }

  },
  getHtml: {
    in: 'node',
    out: 'string',

    getMethod() {
      return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isElement"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], value => value.innerHTML);
    }

  },
  getChild: {
    in: 'node',
    args: [{
      name: 'Index',
      type: 'number'
    }],
    out: 'node',

    getMethod(index) {
      if (index < 0) {
        return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isNode"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isNode"], value => value.childNodes[value.childNodes.length + index]);
      } else {
        return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isNode"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isNode"], value => value.childNodes[index]);
      }
    }

  },
  trim: {
    in: 'string',
    out: 'string',

    getMethod() {
      return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], value => value.trim());
    }

  },
  replace: {
    in: 'string',
    args: [{
      name: 'Pattern',
      type: 'string'
    }, {
      name: 'ReplaceTo',
      type: 'string'
    }],
    out: 'string',

    getMethod(pattern, replaceTo) {
      return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], value => value.replace(pattern, replaceTo));
    }

  },
  replaceRe: {
    in: 'string',
    args: [{
      name: 'Pattern',
      type: 'string'
    }, {
      name: 'ReplaceTo',
      type: 'string'
    }],
    out: 'string',

    getMethod(reStr, replaceTo) {
      const re = new RegExp(reStr, 'ig');
      return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], value => value.replace(re, replaceTo));
    }

  },
  parseDate: {
    in: 'string',
    args: [{
      name: 'Format',
      type: 'string'
    }],
    out: 'number',

    getMethod(format) {
      return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! fecha */ 546)).then(module => {
        const fechaParse = module.parse;
        return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isNumber"], value => fechaParse(value, format).getTime());
      });
    }

  },
  parseSize: {
    in: 'string',
    out: 'number',

    getMethod() {
      return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.t.bind(null, /*! filesize-parser */ 547, 7)).then(module => {
        const filesizeParser = (filesizeParser => {
          return (...args) => {
            try {
              return filesizeParser(...args);
            } catch (err) {
              if (typeof err === 'string') {
                err = new Error(err);
              }

              throw err;
            }
          };
        })(module.default);

        return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isNumber"], value => filesizeParser(value));
      });
    }

  },
  toInt: {
    in: 'string',
    out: 'number',

    getMethod() {
      return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isNumber"], value => parseInt(value, 10));
    }

  },
  toFloat: {
    in: 'string',
    out: 'number',

    getMethod() {
      return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isNumber"], value => parseFloat(value));
    }

  },
  legacyReplaceToday: {
    in: 'string',
    out: 'string',

    getMethod() {
      return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ../tools/exKitLegacyFn */ 528)).then(module => {
        const legacyReplaceToday = module.todayReplace;
        return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], value => legacyReplaceToday(value));
      });
    }

  },
  legacyReplaceMonth: {
    in: 'string',
    out: 'string',

    getMethod() {
      return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ../tools/exKitLegacyFn */ 528)).then(module => {
        const legacyReplaceMonth = module.monthReplace;
        return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], value => legacyReplaceMonth(value));
      });
    }

  },
  legacyParseDate: {
    in: 'string',
    args: [{
      name: 'Template',
      type: 'select',
      values: [{
        key: 0,
        text: '2013-04-31[[[ 07]:03]:27]'
      }, {
        key: 1,
        text: '31-04-2013[[[ 07]:03]:27]'
      }, {
        key: 2,
        text: 'n day ago'
      }, {
        key: 3,
        text: '04-31-2013[[[ 07]:03]:27]'
      }, {
        key: 4,
        text: '2d 1h 0m 0s ago'
      }]
    }],
    out: 'number',

    getMethod(format) {
      return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ../tools/exKitLegacyFn */ 528)).then(module => {
        const legacyParseDate = module.dateFormat;
        return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isNumber"], value => legacyParseDate(format, value));
      });
    }

  },
  legacySizeFormat: {
    in: 'string',
    out: 'number',

    getMethod() {
      return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ../tools/exKitLegacyFn */ 528)).then(module => {
        const legacySizeFormat = module.sizeFormat;
        return Object(_assertType__WEBPACK_IMPORTED_MODULE_0__["default"])(_assertType__WEBPACK_IMPORTED_MODULE_0__["isString"], _assertType__WEBPACK_IMPORTED_MODULE_0__["isNumber"], value => legacySizeFormat(value));
      });
    }

  }
};
/* harmony default export */ __webpack_exports__["default"] = (exKitPipelineMethods);

/***/ })

}]);
//# sourceMappingURL=chunk-19.js.map