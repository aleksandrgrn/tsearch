(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[30],{

/***/ 638:
/*!*******************************!*\
  !*** ./src/pages/Options.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_css_options_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/assets/css/options.less */ 639);
/* harmony import */ var _src_assets_css_options_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_assets_css_options_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ 322);
/* harmony import */ var _components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScrollTop */ 438);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 298);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var _tools_getTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/getTitle */ 440);
/* harmony import */ var _tools_promiseFinally__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/promiseFinally */ 57);
var _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2, _dec3, _class5, _class6, _temp3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










let Options = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class = (_temp = _class2 = class Options extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleExport", e => {
      e.preventDefault();
      this.state.exportLock = true;
      this.optionsStore.exportZip().then(...Object(_tools_promiseFinally__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
        this.state.exportLock = false;
      }));
    });

    _defineProperty(this, "handleImport", e => {
      e.preventDefault();
      this.state.importLock = true;
      this.optionsStore.importZip().then(...Object(_tools_promiseFinally__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
        this.state.importLock = false;
      }));
    });

    this.state = {
      importLock: false,
      exportLock: false
    };

    if (this.optionsStore.state === 'idle') {
      this.optionsStore.fetchOptions();
    }
  }

  componentDidMount() {
    document.title = Object(_tools_getTitle__WEBPACK_IMPORTED_MODULE_7__["default"])('Options');

    if (window.ga) {
      window.ga('send', 'pageview', {
        page: location.href,
        title: document.title
      });
    }
  }
  /**@return OptionsStore*/


  get optionsStore() {
    return this.props.rootStore.options;
  }

  render() {
    const optionsStore = this.optionsStore;

    if (optionsStore.state !== 'done') {
      return `Loading options: ${optionsStore.state}`;
    }

    let page = null;

    switch (this.props.page) {
      case 'main':
        {
          page = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "page page-basic"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            className: "page__title"
          }, chrome.i18n.getMessage('basic')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'hidePeerRow'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'hideSeedRow'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'categoryWordFilter'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'contextMenu'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'disablePopup'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'invertIcon'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'defineCategory'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'requestQueryDescription'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'singleResultTable'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'doNotSendStatistics'
          }));
          break;
        }

      case 'explorer':
        {
          const sections = Object.keys(optionsStore.options.explorerSections).map(name => {
            if (name === 'favorite') return null;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
              store: optionsStore.options.explorerSections,
              key: name,
              name: name
            });
          });
          page = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "page page-mainPage"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            className: "page__title"
          }, chrome.i18n.getMessage('mainPage')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionCheckbox, {
            name: 'originalPosterName'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionText, {
            name: 'kpFolderId'
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            className: "page__sub_title"
          }, chrome.i18n.getMessage('showSections')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "mainPage__sections"
          }, sections));
          break;
        }

      case 'backup':
        {
          page = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "page page-backup"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            className: "page__title"
          }, chrome.i18n.getMessage('backupRestore')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "page__buttons"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            onClick: this.handleExport,
            type: "button",
            href: "#",
            className: "button backup__export-zip"
          }, chrome.i18n.getMessage('exportZip')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            onClick: this.handleImport,
            type: "button",
            href: "#",
            className: "button backup__import-zip"
          }, chrome.i18n.getMessage('importZip'))));
          break;
        }
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "page-ctr"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main options-ctr"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sections"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/options/main",
      className: "sections__item",
      "data-page": "basic"
    }, chrome.i18n.getMessage('basic')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/options/explorer",
      className: "sections__item",
      "data-page": "mainPage"
    }, chrome.i18n.getMessage('mainPage')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/options/backup",
      className: "sections__item",
      "data-page": "backup"
    }, chrome.i18n.getMessage('backupRestore'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "options"
    }, page), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "author"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      title: "email: leonardspbox@gmail.com",
      href: "mailto:leonardspbox@gmail.com"
    }, "Anton"), ", 2016")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}, _defineProperty(_class2, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  page: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
}), _temp)) || _class) || _class);
let OptionCheckbox = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('rootStore'), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class3 = (_temp2 = _class4 = class OptionCheckbox extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOptionChange", e => {
      const name = this.props.name;
      this.store.setValue(name, this.input.checked);
      this.props.rootStore.options.save();
    });

    _defineProperty(this, "refInput", element => {
      this.input = element;
    });

    this.input = null;
  }

  get store() {
    return this.props.store || this.props.rootStore.options.options;
  }

  render() {
    const name = this.props.name;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "option"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.refInput,
      checked: this.store[name],
      onChange: this.handleOptionChange,
      type: "checkbox"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, chrome.i18n.getMessage(name))));
  }

}, _defineProperty(_class4, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
}), _temp2)) || _class3) || _class3);
let OptionText = (_dec3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('rootStore'), _dec3(_class5 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class5 = (_temp3 = _class6 = class OptionText extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOptionChange", e => {
      const name = this.props.name;
      this.props.rootStore.options.options.setValue(name, this.input.value);
      this.props.rootStore.options.save();
    });

    _defineProperty(this, "refInput", element => {
      this.input = element;
    });

    this.input = null;
  }

  render() {
    const options = this.props.rootStore.options.options;
    const name = this.props.name;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "option"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, chrome.i18n.getMessage(name)), ":", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.refInput,
      defaultValue: options[name],
      onChange: this.handleOptionChange,
      type: "text"
    })));
  }

}, _defineProperty(_class6, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
}), _temp3)) || _class5) || _class5);
/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ 639:
/*!*************************************!*\
  !*** ./src/assets/css/options.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-30.js.map