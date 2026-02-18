(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[29],{

/***/ 636:
/*!*******************************!*\
  !*** ./src/pages/History.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_css_history_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/assets/css/history.less */ 637);
/* harmony import */ var _src_assets_css_history_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_assets_css_history_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ 322);
/* harmony import */ var _components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScrollTop */ 438);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_highlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/highlight */ 117);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ 298);
/* harmony import */ var _tools_getTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/getTitle */ 440);
var _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2, _dec3, _class5, _class6, _temp3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const qs = __webpack_require__(/*! querystring */ 30);

let History = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = (_temp = _class2 = class History extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    if (this.props.rootStore.history.state === 'idle') {
      this.props.rootStore.history.fetchHistory();
    }
  }

  componentDidMount() {
    document.title = Object(_tools_getTitle__WEBPACK_IMPORTED_MODULE_8__["default"])('History');

    if (window.ga) {
      window.ga('send', 'pageview', {
        page: location.href,
        title: document.title
      });
    }
  }
  /**@return HistoryStore*/


  get historyStore() {
    return this.props.rootStore.history;
  }

  render() {
    const historyStore = this.historyStore;

    if (historyStore.state !== 'done') {
      return `Loading history: ${historyStore.state}`;
    }

    const queries = historyStore.getHistorySortByTime().map(query => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HistoryQuery, {
        key: query.query,
        query: query
      });
    });
    const body = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "history"
    }, queries);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "page-ctr"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content content-row"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main history-ctr"
    }, body)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}, _defineProperty(_class2, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
}), _temp)) || _class) || _class);
let HistoryQuery = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])('rootStore'), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class3 = (_temp2 = _class4 = class HistoryQuery extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRemove", e => {
      e.preventDefault();
      const history = this.props.rootStore.history;
      const query = this.props.query;
      history.removeQuery(query.query);
      history.save();
    });
  }

  render() {
    const query = this.props.query;
    const links = query.getClicksSortByTime().map(link => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HistoryQueryLink, {
        key: link.url,
        query: query,
        link: link
      });
    });
    const link = '/search?' + qs.stringify({
      query: query.query
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "history__item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item item-query"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "item__remove",
      "data-action": "remove-query",
      href: "#remove",
      title: chrome.i18n.getMessage('delete'),
      onClick: this.handleRemove
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      className: "item__link",
      to: link
    }, query.query || '""')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "click_history item__click_history"
    }, links));
  }

}, _defineProperty(_class4, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
}), _temp2)) || _class3) || _class3);
let HistoryQueryLink = (_dec3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])('rootStore'), _dec3(_class5 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class5 = (_temp3 = _class6 = class HistoryQueryLink extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRemove", e => {
      e.preventDefault();
      const history = this.props.rootStore.history;
      const query = this.props.query;
      const link = this.props.link;
      query.removeClick(link.url);
      history.save();
    });
  }

  render() {
    const link = this.props.link;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item item-click_history"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "item__remove",
      "data-action": "remove-click_history",
      href: "#remove",
      title: chrome.i18n.getMessage('delete'),
      onClick: this.handleRemove
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "item__date"
    }, link.timeString), _tools_highlight__WEBPACK_IMPORTED_MODULE_6__["default"].getReactComponent('a', {
      className: 'item__link',
      target: '_blank',
      href: link.url
    }, link.title, link.titleHighlightMap));
  }

}, _defineProperty(_class6, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  link: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
}), _temp3)) || _class5) || _class5);
/* harmony default export */ __webpack_exports__["default"] = (History);

/***/ }),

/***/ 637:
/*!*************************************!*\
  !*** ./src/assets/css/history.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-29.js.map