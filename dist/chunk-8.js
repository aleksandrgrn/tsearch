(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[8],{

/***/ 292:
/*!*********************************!*\
  !*** ./src/tools/assertType.js ***!
  \*********************************/
/*! exports provided: default, isNode, isElement, isString, isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ 34);


const assertType = (inType, outType, fn) => {
  if (inType && outType) {
    return value => outType(fn(inType(value)));
  } else if (inType) {
    return value => fn(inType(value));
  } else {
    return value => outType(fn(value));
  }
};
/**
 * @param value
 * @return {Node}
 */


const isNode = value => {
  if (!value || !value.nodeType) {
    const err = new _errors__WEBPACK_IMPORTED_MODULE_0__["ErrorWithCode"]('Value is not Node', 'IS_NOT_NODE');
    err.value = value;
    throw err;
  }

  return value;
};
/**
 * @param value
 * @return {Element}
 */


const isElement = value => {
  if (!value || value.nodeType !== 1) {
    const err = new _errors__WEBPACK_IMPORTED_MODULE_0__["ErrorWithCode"]('Value is not Element', 'IS_NOT_ELEMENT');
    err.value = value;
    throw err;
  }

  return value;
};
/**
 * @param value
 * @return {String}
 */


const isString = value => {
  if (typeof value !== 'string') {
    const err = new _errors__WEBPACK_IMPORTED_MODULE_0__["ErrorWithCode"]('Value is not String', 'IS_NOT_STRING');
    err.value = value;
    throw err;
  }

  return value;
};
/**
 * @param value
 * @return {Number}
 */


const isNumber = value => {
  if (!Number.isFinite(value)) {
    const err = new _errors__WEBPACK_IMPORTED_MODULE_0__["ErrorWithCode"]('Value is not Finite Number', 'IS_NOT_NUMBER');
    err.value = value;
    throw err;
  }

  return value;
};

/* harmony default export */ __webpack_exports__["default"] = (assertType);


/***/ }),

/***/ 34:
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

/***/ 527:
/*!******************************!*\
  !*** ./src/sandbox/exKit.js ***!
  \******************************/
/*! exports provided: exKit, API_exKit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exKit", function() { return exKit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_exKit", function() { return API_exKit; });
/* harmony import */ var _tools_exKitLegacyFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/exKitLegacyFn */ 528);
/* harmony import */ var _legacyExKit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacyExKit */ 529);
/* harmony import */ var _exKitTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exKitTracker */ 530);
/* harmony import */ var _tools_encodeCp1251__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/encodeCp1251 */ 532);




const exKit = {
  funcList: {
    encodeCp1251: _tools_encodeCp1251__WEBPACK_IMPORTED_MODULE_3__["default"],
    idInCategoryList: function (tracker, cId) {
      const mapNameId = {
        serials: 0,
        music: 1,
        games: 2,
        films: 3,
        cartoon: 4,
        books: 5,
        soft: 6,
        anime: 7,
        doc: 8,
        sport: 9,
        xxx: 10,
        humor: 11
      };

      for (let key in tracker.categoryList) {
        const list = tracker.categoryList[key];

        if (list.indexOf(cId) !== -1) {
          return mapNameId[key];
        }
      }

      return -1;
    },
    idInCategoryListInt: function (tracker, url, regexp) {
      let cId = url.match(regexp);
      cId = cId && cId[1];

      if (cId === null) {
        return -1;
      }

      cId = parseInt(cId);
      return this.idInCategoryList(tracker, cId);
    },
    idInCategoryListStr: function (tracker, url, regexp) {
      let cId = url.match(regexp);
      cId = cId && cId[1];

      if (cId === null) {
        return -1;
      }

      return this.idInCategoryList(tracker, cId);
    }
  }
};
exKit.funcList.dateFormat = _tools_exKitLegacyFn__WEBPACK_IMPORTED_MODULE_0__["dateFormat"];
exKit.funcList.monthReplace = _tools_exKitLegacyFn__WEBPACK_IMPORTED_MODULE_0__["monthReplace"];
exKit.funcList.sizeFormat = _tools_exKitLegacyFn__WEBPACK_IMPORTED_MODULE_0__["sizeFormat"];
exKit.funcList.todayReplace = _tools_exKitLegacyFn__WEBPACK_IMPORTED_MODULE_0__["todayReplace"];

const API_exKit = code => {
  return API_async(() => {
    if (!code.version) {
      return Object(_legacyExKit__WEBPACK_IMPORTED_MODULE_1__["API_legacyExKit"])(code);
    }

    const exKitTracker = new _exKitTracker__WEBPACK_IMPORTED_MODULE_2__["default"]();
    return exKitTracker.init(code).then(() => {
      const onResult = result => {
        let nextPageRequest = null;

        if (result.nextPageUrl) {
          nextPageRequest = {
            url: result.nextPageUrl
          };
        }

        return {
          success: true,
          results: result.results,
          nextPageRequest: nextPageRequest
        };
      };

      API_event('search', request => {
        const session = {
          tracker: exKitTracker,
          event: 'search',
          request
        };
        return exKitTracker.search(session, request.query).then(response => {
          return exKitTracker.parseResponse(session, response);
        }).then(onResult);
      });
      API_event('getNextPage', request => {
        const session = {
          tracker: exKitTracker,
          event: 'getNextPage',
          request
        };
        return exKitTracker.searchNext(session, request.url).then(response => {
          return exKitTracker.parseResponse(session, response);
        }).then(onResult);
      });
    });
  });
};



/***/ }),

/***/ 528:
/*!************************************!*\
  !*** ./src/tools/exKitLegacyFn.js ***!
  \************************************/
/*! exports provided: sizeFormat, monthReplace, todayReplace, dateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeFormat", function() { return sizeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthReplace", function() { return monthReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todayReplace", function() { return todayReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
const size_check = /[^0-9.,кбмгтkmgtb]/g;
const size_kb = /кб|kb/;
const size_mb = /мб|mb/;
const size_gb = /гб|gb/;
const size_tb = /тб|tb/;
const today_now = /сейчас|now/;
const today_today = /сегодня|today/;
const today_yest = /вчера|yesterday/;
const ex_num = /[^0-9]/g;
const spaces = /\s+/g;
const timeFormat4 = /([0-9]{1,2}d)?[^0-9]*([0-9]{1,2}h)?[^0-9]*([0-9]{1,2}m)?[^0-9]*([0-9]{1,2}s)?/;

const sizeFormat = function (s) {
  const size = s.toLowerCase().replace(size_check, '').replace(',', '.');
  let t = size.replace(size_kb, '');
  const size_len = size.length;

  if (t.length !== size_len) {
    t = parseFloat(t);
    return Math.round(t * 1024);
  }

  t = size.replace(size_mb, '');

  if (t.length !== size_len) {
    t = parseFloat(t);
    return Math.round(t * 1024 * 1024);
  }

  t = size.replace(size_gb, '');

  if (t.length !== size_len) {
    t = parseFloat(t);
    return Math.round(t * 1024 * 1024 * 1024);
  }

  t = size.replace(size_tb, '');

  if (t.length !== size_len) {
    t = parseFloat(t);
    return Math.round(t * 1024 * 1024 * 1024 * 1024);
  }

  return 0;
};

const monthReplace = function (t) {
  return t.toLowerCase().replace('янв', '1').replace('фев', '2').replace('мар', '3').replace('апр', '4').replace('мая', '5').replace('май', '5').replace('июн', '6').replace('июл', '7').replace('авг', '8').replace('сен', '9').replace('окт', '10').replace('ноя', '11').replace('дек', '12').replace('jan', '1').replace('feb', '2').replace('mar', '3').replace('apr', '4').replace('may', '5').replace('jun', '6').replace('jul', '7').replace('aug', '8').replace('sep', '9').replace('oct', '10').replace('nov', '11').replace('dec', '12');
};

const todayReplace = function (t, f) {
  f = parseInt(f);
  t = t.toLowerCase();
  const tt = new Date();

  if (today_now.test(t)) {
    t = 'today ' + tt.getHours() + ':' + tt.getMinutes();
  }

  const tty = new Date((Math.round(tt.getTime() / 1000) - 24 * 60 * 60) * 1000);
  let today;
  let yesterday;

  if (f === 0) {
    today = tt.getFullYear() + ' ' + (tt.getMonth() + 1) + ' ' + tt.getDate() + ' ';
    yesterday = tty.getFullYear() + ' ' + (tty.getMonth() + 1) + ' ' + tty.getDate() + ' ';
  } else if (f === 3) {
    today = tt.getMonth() + 1 + ' ' + tt.getDate() + ' ' + tt.getFullYear() + ' ';
    yesterday = tty.getMonth() + 1 + ' ' + tty.getDate() + ' ' + tty.getFullYear() + ' ';
  } else {
    today = tt.getDate() + ' ' + (tt.getMonth() + 1) + ' ' + tt.getFullYear() + ' ';
    yesterday = tty.getDate() + ' ' + (tty.getMonth() + 1) + ' ' + tty.getFullYear() + ' ';
  }

  t = t.replace(today_today, today).replace(today_yest, yesterday);
  return t;
};

const dateFormat = function (f, t) {
  if (f === undefined) {
    return ['2013-04-31[[[ 07]:03]:27]', '31-04-2013[[[ 07]:03]:27]', 'n day ago', '04-31-2013[[[ 07]:03]:27]', '2d 1h 0m 0s ago'];
  }

  f = parseInt(f);

  if (f === 0) {
    // || f === '2013-04-31[[[ 07]:03]:27]') {
    const dd = t.replace(ex_num, ' ').replace(spaces, ' ').trim().split(' ');

    for (let i = 0; i < 6; i++) {
      if (dd[i] === undefined) {
        dd[i] = 0;
      } else {
        dd[i] = parseInt(dd[i]);

        if (isNaN(dd[i])) {
          if (i < 3) {
            return 0;
          } else {
            dd[i] = 0;
          }
        }
      }
    }

    if (dd[0] < 10) {
      dd[0] = '200' + dd[0];
    } else if (dd[0] < 100) {
      dd[0] = '20' + dd[0];
    }

    return Math.round(new Date(dd[0], dd[1] - 1, dd[2], dd[3], dd[4], dd[5]).getTime() / 1000);
  }

  if (f === 1) {
    //  || f === '31-04-2013[[[ 07]:03]:27]') {
    const dd = t.replace(ex_num, ' ').replace(spaces, ' ').trim().split(' ');

    for (let i = 0; i < 6; i++) {
      if (dd[i] === undefined) {
        dd[i] = 0;
      } else {
        dd[i] = parseInt(dd[i]);

        if (isNaN(dd[i])) {
          if (i < 3) {
            return 0;
          } else {
            dd[i] = 0;
          }
        }
      }
    }

    if (dd[2] < 10) {
      dd[2] = '200' + dd[2];
    } else if (dd[2] < 100) {
      dd[2] = '20' + dd[2];
    }

    return Math.round(new Date(dd[2], dd[1] - 1, dd[0], dd[3], dd[4], dd[5]).getTime() / 1000);
  }

  if (f === 2) {
    //  || f === 'n day ago') {
    const old = parseFloat(t.replace(ex_num, '')) * 24 * 60 * 60;
    return Math.round(Date.now() / 1000) - old;
  }

  if (f === 3) {
    //  || f === '04-31-2013[[[ 07]:03]:27]') {
    const dd = t.replace(ex_num, ' ').replace(spaces, ' ').trim().split(' ');

    for (let i = 0; i < 6; i++) {
      if (dd[i] === undefined) {
        dd[i] = 0;
      } else {
        dd[i] = parseInt(dd[i]);

        if (isNaN(dd[i])) {
          if (i < 3) {
            return 0;
          } else {
            dd[i] = 0;
          }
        }
      }
    }

    if (dd[2] < 10) {
      dd[2] = '200' + dd[2];
    } else if (dd[2] < 100) {
      dd[2] = '20' + dd[2];
    }

    return Math.round(new Date(dd[2], dd[0] - 1, dd[1], dd[3], dd[4], dd[5]).getTime() / 1000);
  }

  if (f === 4) {
    //  || f === '2d 1h 0m 0s ago') {
    const match = t.match(timeFormat4);

    if (match) {
      const d = parseInt(match[1]) || 0;
      const h = parseInt(match[2]) || 0;
      const m = parseInt(match[3]) || 0;
      const s = parseInt(match[4]) || 0;
      const time = d * 24 * 60 * 60 + h * 60 * 60 + m * 60 + s;

      if (time === 0) {
        return 0;
      }

      return parseInt(Date.now() / 1000) - time;
    }

    return 0;
  }
};



/***/ }),

/***/ 529:
/*!************************************!*\
  !*** ./src/sandbox/legacyExKit.js ***!
  \************************************/
/*! exports provided: API_legacyExKit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_legacyExKit", function() { return API_legacyExKit; });
const legacyExKit = {
  prepareTrackerR: {
    hasEndSlash: /\/$/
  },
  prepareTracker: function (tracker) {
    const itemList = ['onGetValue', 'onSelectorIsNotFound', 'onEmptySelectorValue'];

    for (let i = 0, item; item = itemList[i]; i++) {
      if (!tracker.search[item]) {
        tracker.search[item] = {};
      }
    }

    if (!tracker.search.requestType) {
      tracker.search.requestType = 'GET';
    } else {
      tracker.search.requestType = tracker.search.requestType.toUpperCase();
    }

    if (tracker.search.rootUrl && !legacyExKit.prepareTrackerR.hasEndSlash.test(tracker.search.rootUrl)) {
      tracker.search.rootUrl = tracker.search.rootUrl + '/';
    }

    if (tracker.search.baseUrl && !legacyExKit.prepareTrackerR.hasEndSlash.test(tracker.search.baseUrl)) {
      tracker.search.baseUrl = tracker.search.baseUrl + '/';
    }

    return tracker;
  },
  parseHtml: function (html, location) {
    return API_getDoc(html, location);
  },
  intList: ['categoryId', 'size', 'seed', 'peer', 'date'],
  isUrlList: ['categoryUrl', 'url', 'downloadUrl', 'nextPageUrl'],
  urlCheck: function (details, tracker, value) {
    return API_normalizeUrl(details.responseUrl, value);
  },
  matchSelector: function (result, details) {
    const _this = this;

    const key = details.key;
    let item = details.item;
    const $dom = details.$dom;
    const tracker = details.tracker;
    const search = tracker.search;
    const error = {};

    if (typeof item === 'string') {
      item = {
        selector: item
      };
    }

    let node = $dom.find(item.selector).get(0);

    if (!node && search.onSelectorIsNotFound[key]) {
      node = search.onSelectorIsNotFound[key](details);
    }

    if (item.childNodeIndex !== undefined && node) {
      let childNodeIndex = item.childNodeIndex;

      if (childNodeIndex < 0) {
        childNodeIndex = node.childNodes.length + item.childNodeIndex;
      }

      node = node.childNodes[childNodeIndex];
    }

    if (!node) {
      error[key] = node;
      error[key + '!'] = 'Selector is not found!';
      error[key + 'Selector'] = item.selector;
      return;
    }

    let value = null;

    if (item.attr) {
      value = node.getAttribute(item.attr);
    } else if (item.prop) {
      value = node[item.prop];
    } else if (item.html) {
      value = node.innerHTML;
    } else {
      value = node.textContent;
    }

    if (value) {
      value = $.trim(value);
    }

    if (!value && search.onEmptySelectorValue[key]) {
      value = search.onEmptySelectorValue[key](details);
    }

    if (!value && value !== 0) {
      error[key] = value;

      if (item.attr) {
        error[key + '!'] = 'Attribute is not found!';
      } else if (item.prop) {
        error[key + '!'] = 'Property is not found!';
      } else if (item.html) {
        error[key + '!'] = 'Html content is empty!';
      } else {
        error[key + '!'] = 'Text content is empty!';
      }

      return;
    }

    if (search.onGetValue[key]) {
      value = search.onGetValue[key](details, value);
    }

    if (legacyExKit.intList.indexOf(key) !== -1) {
      let intValue = parseInt(value);

      if (isNaN(intValue)) {
        intValue = -1;
        error[key] = value;
        error[key + '!'] = 'isNaN';
      }

      value = intValue;
    } else {
      if (legacyExKit.isUrlList.indexOf(key) !== -1) {
        value = legacyExKit.urlCheck(details, tracker, value);
      }
    }

    result[key] = value;
  },
  matchTorrentSelector: function (trObj, details) {
    const _this = this;

    const key = details.key;
    let item = details.item;
    const $node = details.$node;
    const tracker = details.tracker;
    const search = tracker.search;

    if (typeof item === 'string') {
      item = {
        selector: item
      };
    }

    let node = trObj.cache[item.selector];

    if (!node) {
      node = trObj.cache[item.selector] = $node.find(item.selector).get(0);
    }

    if (!node && search.onSelectorIsNotFound[key]) {
      node = search.onSelectorIsNotFound[key](details);
    }

    if (item.childNodeIndex !== undefined && node) {
      let childNodeIndex = item.childNodeIndex;

      if (childNodeIndex < 0) {
        childNodeIndex = node.childNodes.length + item.childNodeIndex;
      }

      node = node.childNodes[childNodeIndex];
    }

    if (!node) {
      trObj.error[key] = node;
      trObj.error[key + '!'] = 'Selector is not found!';
      trObj.error[key + 'Selector'] = item.selector;
      return;
    }

    let value = null;

    if (item.attr) {
      value = node.getAttribute(item.attr);
    } else if (item.prop) {
      value = node[item.prop];
    } else if (item.html) {
      value = node.innerHTML;
    } else {
      value = node.textContent;
    }

    if (value) {
      value = $.trim(value.replace(/\r?\n/g, ' '));
    }

    if (!value && search.onEmptySelectorValue[key]) {
      value = search.onEmptySelectorValue[key](details);
    }

    if (!value && value !== 0) {
      trObj.error[key] = value;

      if (item.attr) {
        trObj.error[key + '!'] = 'Attribute is not found!';
      } else if (item.prop) {
        trObj.error[key + '!'] = 'Property is not found!';
      } else if (item.html) {
        trObj.error[key + '!'] = 'Html content is empty!';
      } else {
        trObj.error[key + '!'] = 'Text content is empty!';
      }

      return;
    }

    if (search.onGetValue[key]) {
      value = search.onGetValue[key](details, value);
    }

    if (legacyExKit.intList.indexOf(key) !== -1) {
      let intValue = parseInt(value);

      if (isNaN(intValue)) {
        intValue = -1;
        trObj.error[key] = value;
        trObj.error[key + '!'] = 'isNaN';
      }

      value = intValue;
    } else {
      if (legacyExKit.isUrlList.indexOf(key) !== -1) {
        value = legacyExKit.urlCheck(details, tracker, value);
      }
    }

    trObj.column[key] = value;
    return value;
  },
  isEmptyObject: function (obj) {
    for (let item in obj) {
      return false;
    }

    return true;
  },
  matchTorrentItem: function ($node, details) {
    const _this = this;

    details.$node = $node;
    const tracker = details.tracker;
    const search = tracker.search;

    if (search.onGetListItem) {
      search.onGetListItem(details);
    }

    const trObj = Object.create({
      cache: {}
    });
    trObj.column = {};
    trObj.error = {};

    for (let key in search.torrentSelector) {
      const selDetails = Object.create(details);
      selDetails.item = search.torrentSelector[key];
      selDetails.key = key;

      _this.matchTorrentSelector(trObj, selDetails);
    }

    if (!trObj.column.title || !trObj.column.url) {
      console.debug('[' + tracker.id + ']', 'Skip torrent:', trObj);
      return;
    }

    if (!trObj.column.categoryId && trObj.column.categoryId !== 0) {
      trObj.column.categoryId = -1;
    }

    if (!trObj.column.date) {
      trObj.column.date = -1;
    }

    if (!_this.isEmptyObject(trObj.error)) {
      console.debug('[' + tracker.id + ']', 'Torrent has problems:', trObj);
    }

    return trObj.column;
  },
  parseDom: function (details) {
    const _this = this;

    const tracker = details.tracker;
    const search = tracker.search;

    if (search.onBeforeDomParse) {
      search.onBeforeDomParse(details);
    }

    if (details.result) {
      return details.result;
    }

    const dom = legacyExKit.parseHtml(details.data, details.responseUrl);
    const $dom = details.$dom = $(dom);

    if (search.onAfterDomParse) {
      search.onAfterDomParse(details);

      if (details.result) {
        return details.result;
      }
    }

    if (search.loginFormSelector && $dom.find(search.loginFormSelector).length) {
      return {
        requireAuth: 1
      };
    }

    const torrentElList = $dom.find(search.listItemSelector);

    if (search.listItemSplice) {
      if (search.listItemSplice[0] !== 0) {
        torrentElList.splice(0, search.listItemSplice[0]);
      }

      if (search.listItemSplice[1] !== 0) {
        torrentElList.splice(search.listItemSplice[1]);
      }
    }

    const resultObj = {};
    const torrentList = resultObj.torrentList = [];
    let item;

    for (let i = 0, len = torrentElList.length; i < len; i++) {
      item = _this.matchTorrentItem(torrentElList.eq(i), Object.create(details));
      item && torrentList.push(item);
    }

    if (search.nextPageSelector) {
      const selDetails = Object.create(details);
      selDetails.item = search.nextPageSelector;
      selDetails.key = 'nextPageUrl';

      _this.matchSelector(resultObj, selDetails);
    }

    return resultObj;
  },
  search: function (tracker, _details) {
    const _this = this;

    const query = _details.query;
    const details = {
      tracker: tracker,
      query: query
    };
    let charset = tracker.search.charset;

    if (!charset && tracker.search.requestMimeType) {
      const m = /charset=([^;]+)/.exec(tracker.search.requestMimeType);

      if (m) {
        charset = m[1];
      }
    }

    if (tracker.search.onBeforeRequest) {
      tracker.search.onBeforeRequest(details);
    } else {
      details.query = encodeURIComponent(details.query);
    }

    const requestOptions = {};
    let headers = {};

    if (tracker.search.requestHeaders) {
      headers = JSON.parse(tracker.search.requestHeaders);
    }

    if (!_details.url) {
      Object.assign(requestOptions, {
        method: tracker.search.requestType,
        url: tracker.search.searchUrl.replace('%search%', details.query),
        data: (tracker.search.requestData || '').replace('%search%', details.query),
        charset: charset,
        headers: headers
      });
    } else {
      Object.assign(requestOptions, {
        method: 'GET',
        url: _details.url,
        charset: charset,
        headers: headers
      });
    }

    return API_request(requestOptions).then(function (response) {
      details.data = response.body;
      details.responseUrl = response.url;
      details.requestUrl = requestOptions.url;
    }).then(function () {
      if (tracker.search.onAfterRequest) {
        tracker.search.onAfterRequest(details);

        if (details.result) {
          return details.result;
        }
      }

      return _this.parseDom(details);
    }).then(function (result) {
      if (result.requireAuth) {
        result.requireAuth = tracker.search.loginUrl;
      }

      return result;
    });
  }
};

const API_legacyExKit = function (trackerObj) {
  return API_async(() => {
    return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.t.bind(null, /*! jquery/dist/jquery.slim */ 525, 7)).then(jQuery => {
      window.$ = window.jQuery = jQuery.default;
    }).then(() => {
      const tracker = trackerObj;
      legacyExKit.prepareTracker(tracker);

      const search = function (query, nextPageUrl) {
        return legacyExKit.search(tracker, {
          query: query,
          url: nextPageUrl
        }).then(function (result) {
          if (result.requireAuth) {
            const err = new Error('Auth required');
            err.code = 'AUTH_REQUIRED';
            err.url = result.requireAuth;
            throw err;
          }

          return {
            success: true,
            results: result.torrentList.map(item => {
              return {
                categoryTitle: item.categoryTitle,
                categoryUrl: item.categoryUrl,
                categoryId: item.categoryId,
                title: item.title,
                url: item.url,
                size: item.size,
                downloadUrl: item.downloadUrl,
                seeds: item.seed,
                peers: item.peer,
                date: item.date
              };
            }),
            nextPageRequest: result.nextPageUrl && {
              event: 'getNextPage',
              url: result.nextPageUrl,
              query: query
            }
          };
        });
      };

      API_event('getNextPage', function (request) {
        return search(request.query, request.url);
      });
      API_event('search', function (request) {
        return search(request.query);
      });
    });
  });
};



/***/ })

}]);
//# sourceMappingURL=chunk-8.js.map