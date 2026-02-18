(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[26],{

/***/ 593:
/*!*********************************!*\
  !*** ./src/pages/CodeMaker.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_magic_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/magic.less */ 594);
/* harmony import */ var _assets_css_magic_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_magic_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 298);
/* harmony import */ var _tools_getRandomColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/getRandomColor */ 293);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/getLogger */ 8);
/* harmony import */ var _tools_convertCodeV1toV2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/convertCodeV1toV2 */ 69);
/* harmony import */ var _tools_convertCodeV2toV3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/convertCodeV2toV3 */ 70);
/* harmony import */ var _components_BindInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BindInput */ 595);
/* harmony import */ var _components_ElementSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ElementSelector */ 596);
/* harmony import */ var _components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PipelineSelector */ 597);
/* harmony import */ var _sandbox_exKitTracker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sandbox/exKitTracker */ 530);
/* harmony import */ var _tools_exKitRequestOptionsNormalize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tools/exKitRequestOptionsNormalize */ 76);
/* harmony import */ var _components_CodeMakerFrame__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/CodeMakerFrame */ 601);
/* harmony import */ var _tools_getTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tools/getTitle */ 440);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mobx */ 1);
/* harmony import */ var _tools_colorToIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../tools/colorToIcon */ 44);
var _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2, _dec3, _class5, _class6, _temp3, _dec4, _class7, _class8, _temp4, _dec5, _class9, _class10, _temp5, _dec6, _class11, _class12, _temp6;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_6__["default"])('codeMaker');
let CodeMaker = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class = (_temp = _class2 = class CodeMaker extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "pageTitleMap", {
      search: 'kitSearch',
      selectors: 'kitSelectors',
      auth: 'kitLogin',
      desc: 'kitDesc',
      save: 'kitSaveLoad'
    });

    _defineProperty(this, "frame", null);

    _defineProperty(this, "refFrame", element => {
      this.frame = element && element.wrappedInstance;
    });

    _defineProperty(this, "handleResolvePath", (path, options) => {
      return this.frame.resolvePath(path, options);
    });

    _defineProperty(this, "handleHighlightPath", (path, options) => {
      return this.frame.highlightPath(path, options);
    });

    this.props.rootStore.createCodeMaker();
  }

  componentDidMount() {
    document.title = Object(_tools_getTitle__WEBPACK_IMPORTED_MODULE_15__["default"])('Code maker');

    if (window.ga) {
      window.ga('send', 'pageview', {
        page: location.href,
        title: document.title
      });
    }
  }

  get codeMakerStore() {
    return this.props.rootStore.codeMaker;
  }

  componentWillUnmount() {
    this.props.rootStore.destroyCodeMaker();
  }

  render() {
    const menuItems = ['search', 'selectors', 'auth', 'desc', 'save'].map(page => {
      const isActive = this.props.page === page;
      const classList = [];

      if (isActive) {
        classList.push('active');
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        key: page,
        className: classList.join(' '),
        to: `/codeMaker/${page}`
      }, chrome.i18n.getMessage(this.pageTitleMap[page]));
    });
    let page = null;

    switch (this.props.page) {
      case 'search':
        {
          page = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CodeMakerSearchPage, {
            codeStore: this.codeMakerStore.code
          });
          break;
        }

      case 'auth':
        {
          page = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CodeMakerAuthPage, {
            onResolvePath: this.handleResolvePath,
            onHighlightPath: this.handleHighlightPath,
            codeStore: this.codeMakerStore.code
          });
          break;
        }

      case 'selectors':
        {
          page = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CodeMakerSelectorsPage, {
            onResolvePath: this.handleResolvePath,
            onHighlightPath: this.handleHighlightPath,
            codeStore: this.codeMakerStore.code
          });
          break;
        }

      case 'desc':
        {
          page = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CodeMakerDescriptionPage, {
            codeStore: this.codeMakerStore.code
          });
          break;
        }

      case 'save':
        {
          page = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CodeMakerSavePage, {
            codeMaker: this.codeMakerStore
          });
          break;
        }
    }

    let frame = null;

    if (this.codeMakerStore.frame.options) {
      frame = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CodeMakerFrame__WEBPACK_IMPORTED_MODULE_14__["default"], {
        ref: this.refFrame,
        key: `frame_${JSON.stringify(this.codeMakerStore.frame.options)}`
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "page-ctr page-ctr--code-maker"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tools"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "top-menu",
      id: "menu"
    }, menuItems), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "body",
      id: "container"
    }, page), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "status_bar",
      id: "status_bar"
    }, this.codeMakerStore.frame.path)), frame);
  }

}, _defineProperty(_class2, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  page: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
}), _temp)) || _class) || _class);
let CodeMakerSearchPage = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('rootStore'), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class3 = (_temp2 = _class4 = class CodeMakerSearchPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRequestPage", e => {
      e.preventDefault();
      const session = {};
      const query = this.searchQuery.value;
      const tracker = new CodeMakerExKitTracker();
      tracker.code = this.props.codeStore.getSnapshot();
      return Promise.resolve().then(() => {
        return tracker.search(session, query);
      }).then(options => {
        options._ = Date.now();
        this.frameStore.setOptions(options);
      });
    });

    _defineProperty(this, "encoding", null);

    _defineProperty(this, "refEncoding", element => {
      this.encoding = element;
    });

    _defineProperty(this, "handleEncodingChange", e => {
      this.codeSearchStore.set('encoding', this.encoding.value);
    });

    _defineProperty(this, "searchQuery", null);

    _defineProperty(this, "refSearchQuery", element => {
      this.searchQuery = element;
    });

    _defineProperty(this, "handleMethodChange", e => {
      this.codeSearchStore.set('method', this.method.value);
    });

    _defineProperty(this, "method", null);

    _defineProperty(this, "refMethod", element => {
      this.method = element;
    });
  }

  get frameStore() {
    return this.props.rootStore.codeMaker.frame;
  }
  /**@return CodeSearchStore*/


  get codeSearchStore() {
    return this.props.codeStore.search;
  }

  render() {
    const requestPageClassList = [];

    if (this.frameStore.state === 'error') {
      requestPageClassList.push('error');
    }

    let postBody = null;

    if (this.codeSearchStore.method === 'POST' || this.codeSearchStore.body) {
      postBody = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "field"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "field-name"
      }, chrome.i18n.getMessage('kitPostBody')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        store: this.codeSearchStore,
        id: 'body',
        type: "text",
        placeholder: "key=value&key2=value2"
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "page search"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, chrome.i18n.getMessage('kitSearch')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.handleRequestPage
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitSearchUrl')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: requestPageClassList,
      store: this.codeSearchStore,
      id: 'url',
      type: "text"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.refSearchQuery,
      type: "text",
      placeholder: "Search query"
    }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "submit",
      value: chrome.i18n.getMessage('kitOpen')
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitSearchMethod')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      onChange: this.handleMethodChange,
      ref: this.refMethod,
      defaultValue: this.codeSearchStore.method
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "GET"
    }, "GET"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "POST"
    }, "POST"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitQuery')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeSearchStore,
      id: 'query',
      type: "text"
    })), postBody, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitSearchQueryEncoding')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      onChange: this.handleEncodingChange,
      ref: this.refEncoding,
      defaultValue: this.codeSearchStore.encoding
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: ""
    }, "utf-8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "cp1251"
    }, "cp1251"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitPageCharset')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeSearchStore,
      id: 'charset',
      type: "text",
      placeholder: "auto"
    })));
  }

}, _defineProperty(_class4, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  codeStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}), _temp2)) || _class3) || _class3);
let CodeMakerAuthPage = (_dec3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('rootStore'), _dec3(_class5 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class5 = (_temp3 = _class6 = class CodeMakerAuthPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const tracker = new CodeMakerExKitTracker();
      tracker.code = this.props.codeStore.getSnapshot();
      const options = {
        method: 'GET',
        url: tracker.code.auth.url
      };
      options._ = Date.now();
      this.frameStore.setOptions(options);
    });
  }

  get frameStore() {
    return this.props.rootStore.codeMaker.frame;
  }

  get codeSearchAuth() {
    return this.props.codeStore.auth;
  }

  render() {
    const requestPageClassList = [];

    if (this.frameStore.state === 'error') {
      requestPageClassList.push('error');
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "page auth"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, chrome.i18n.getMessage('kitLogin')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitLoginUrl')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: requestPageClassList.join(' '),
      store: this.codeSearchAuth,
      id: 'url',
      type: "text"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "submit",
      "data-id": "auth_open",
      value: chrome.i18n.getMessage('kitOpen')
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ElementSelector__WEBPACK_IMPORTED_MODULE_10__["default"], {
      store: this.codeSearchAuth,
      onResolvePath: this.props.onResolvePath,
      onHighlightPath: this.props.onHighlightPath,
      id: 'loginForm',
      optional: true,
      type: "text",
      title: chrome.i18n.getMessage('kitLoginFormSelector')
    }));
  }

}, _defineProperty(_class6, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  codeStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onResolvePath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onHighlightPath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
}), _temp3)) || _class5) || _class5);
let CodeMakerSelectorsPage = (_dec4 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('rootStore'), _dec4(_class7 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class7 = (_temp4 = _class8 = class CodeMakerSelectorsPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "outputAutorun", null);

    _defineProperty(this, "activeSelector", null);

    _defineProperty(this, "setActiveSelector", component => {
      if (this.activeSelector !== component) {
        // logger('setActiveSelector', component && component.props.id);
        if (this.outputAutorun) {
          this.outputAutorun();
          this.outputAutorun = null;
        }

        this.activeSelector = component;

        if (this.activeSelector) {
          this.outputAutorun = Object(mobx__WEBPACK_IMPORTED_MODULE_16__["autorun"])(() => {
            if (this.activeSelector && JSON.stringify(this.activeSelector.selectorStore)) {
              this.activeSelector.updateResult();
            }
          });
        }
      }
    });
  }

  get codeSearchSelectors() {
    return this.props.codeStore.selectors;
  }

  componentWillUnmount() {
    if (this.outputAutorun) {
      this.outputAutorun();
      this.outputAutorun = null;
    }
  }

  render() {
    const pipelineProps = {
      store: this.codeSearchSelectors,
      onResolvePath: this.props.onResolvePath,
      onHighlightPath: this.props.onHighlightPath,
      setActiveSelector: this.setActiveSelector
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "page selectors"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, chrome.i18n.getMessage('kitSelectors')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ElementSelector__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, pipelineProps, {
      id: 'row',
      type: "text",
      className: 'input',
      title: chrome.i18n.getMessage('kitRowSelector')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field skip-field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'field-left'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitSkip'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'field-right'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, chrome.i18n.getMessage('kitSkipTop')), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeSearchSelectors,
      id: 'skipFromStart',
      type: "number"
    }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, chrome.i18n.getMessage('kitSkipEnd')), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeSearchSelectors,
      id: 'skipFromEnd',
      type: "number"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'categoryTitle',
      optional: true,
      container: 'row',
      title: chrome.i18n.getMessage('kitCategoryName')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'categoryUrl',
      optional: true,
      container: 'row',
      title: chrome.i18n.getMessage('kitCategoryLink')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'title',
      container: 'row',
      title: chrome.i18n.getMessage('kitTorrentTitle')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'url',
      container: 'row',
      title: chrome.i18n.getMessage('kitTorrentLink')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'size',
      optional: true,
      container: 'row',
      preview: true,
      previewType: 'size',
      title: chrome.i18n.getMessage('kitTorrentSize')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'downloadUrl',
      optional: true,
      container: 'row',
      title: chrome.i18n.getMessage('kitTorrentDownloadLink')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'seeds',
      optional: true,
      container: 'row',
      title: chrome.i18n.getMessage('kitSeedCount')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'peers',
      optional: true,
      container: 'row',
      title: chrome.i18n.getMessage('kitPeerCount')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'date',
      optional: true,
      container: 'row',
      preview: true,
      previewType: 'date',
      title: chrome.i18n.getMessage('kitAddTime')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PipelineSelector__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, pipelineProps, {
      id: 'nextPageUrl',
      optional: true,
      title: chrome.i18n.getMessage('kitNextPageLink')
    })));
  }

}, _defineProperty(_class8, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  codeStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onResolvePath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onHighlightPath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
}), _temp4)) || _class7) || _class7);
let CodeMakerDescriptionPage = (_dec5 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('rootStore'), _dec5(_class9 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class9 = (_temp5 = _class10 = class CodeMakerDescriptionPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleIconClick", e => {
      e.preventDefault();
      this.codeStoreDescription.set('icon', Object(_tools_getRandomColor__WEBPACK_IMPORTED_MODULE_4__["default"])());
    });

    _defineProperty(this, "iconData", null);

    _defineProperty(this, "iconDataInput", element => {
      this.iconData = element;
    });

    _defineProperty(this, "handleIconDataChange", e => {
      this.codeStoreDescription.set('icon', this.iconData.value);
    });

    _defineProperty(this, "handleIconFileChange", e => {
      const files = this.iconFile.files;

      const readFile = file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = e => {
            resolve(reader.result);
          };

          reader.onerror = e => {
            reject(new Error('Read file error'));
          };

          reader.readAsDataURL(file);
        }).then(data => {
          this.codeStoreDescription.set('icon', data);
        }).catch(err => {
          logger.error('readFile error', file.name, err);
        });
      };

      const imageType = /^image\/(x-icon|jpeg|png|svg)$/;

      for (let i = 0, file; file = files[i]; i++) {
        try {
          if (!imageType.test(file.type)) {
            throw new Error('Incorrect file type');
          }

          if (file.size > 1024 * 1024) {
            throw new Error('File size more then 1mb');
          }

          readFile(file);
        } catch (err) {
          logger('Skip file cause: ', file.name, err);
        }
      }
    });

    _defineProperty(this, "iconFile", null);

    _defineProperty(this, "iconFileInput", element => {
      this.iconFile = element;
    });
  }

  get codeStoreDescription() {
    return this.props.codeStore.description;
  }

  generateIcon(color) {
    return Object(_tools_colorToIcon__WEBPACK_IMPORTED_MODULE_17__["default"])(color);
  }

  render() {
    const codeStore = this.props.codeStore;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "page desk"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, chrome.i18n.getMessage('kitDesc')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitIcon')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      onClick: this.handleIconClick,
      style: {
        backgroundImage: `url(${this.generateIcon(codeStore.description.icon)})`
      },
      className: "tracker_iconPic",
      "data-id": "desk_tracker_iconPic"
    }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.iconDataInput,
      onChange: this.handleIconDataChange,
      "data-id": "desk_tracker_icon",
      value: codeStore.description.icon
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.iconFileInput,
      onChange: this.handleIconFileChange,
      type: "file",
      "data-id": "desk_tracker_iconFile"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitTrackerTitle')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeStoreDescription,
      id: 'name',
      type: 'text'
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitTrackerUrl')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeStoreDescription,
      id: 'url',
      type: "text",
      placeholder: "auto"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitTrackerDesc')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeStoreDescription,
      id: 'description',
      type: 'text'
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitTrackerUpdateUrl')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeStoreDescription,
      id: 'updateUrl',
      type: 'text'
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitTrackerIsDownloadUrl')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeStoreDescription,
      id: 'downloadUrl',
      type: 'text'
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "field-name"
    }, chrome.i18n.getMessage('kitTrackerVersion')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BindInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      store: this.codeStoreDescription,
      id: 'version',
      type: 'text',
      placeholder: "1.0"
    })));
  }

}, _defineProperty(_class10, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  codeStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
}), _temp5)) || _class9) || _class9);
let CodeMakerSavePage = (_dec6 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('rootStore'), _dec6(_class11 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class11 = (_temp6 = _class12 = class CodeMakerSavePage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSetCode", e => {
      e.preventDefault();
      let code = JSON.parse(this.textarea.value);

      if (code.version === 1) {
        code = Object(_tools_convertCodeV1toV2__WEBPACK_IMPORTED_MODULE_7__["default"])(code);
      }

      if (code.version === 2) {
        code = Object(_tools_convertCodeV2toV3__WEBPACK_IMPORTED_MODULE_8__["default"])(code);
      }

      if (!code.description) {
        code.description = {};
      }

      if (!code.description.icon) {
        code.description.icon = Object(_tools_getRandomColor__WEBPACK_IMPORTED_MODULE_4__["default"])();
      }

      if (!code.description.name) {
        code.description.name = '';
      }

      if (!code.description.version) {
        code.description.version = '1.0';
      }

      this.props.codeMaker.setCode(code);
    });

    _defineProperty(this, "handleGetCode", e => {
      e.preventDefault();
      this.textarea.value = this.props.codeMaker.codeJson;
    });

    _defineProperty(this, "textarea", null);

    _defineProperty(this, "refTextarea", element => {
      this.textarea = element;
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "page save"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, chrome.i18n.getMessage('kitSaveLoad')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      onClick: this.handleGetCode,
      type: "button",
      value: chrome.i18n.getMessage('kitGetCode')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      onClick: this.handleSetCode,
      type: "button",
      value: chrome.i18n.getMessage('kitReadCode')
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      ref: this.refTextarea,
      "data-id": "save_code_textarea",
      defaultValue: this.props.codeMaker.codeJson
    })));
  }

}, _defineProperty(_class12, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  codeMaker: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}), _temp6)) || _class11) || _class11);

class CodeMakerExKitTracker extends _sandbox_exKitTracker__WEBPACK_IMPORTED_MODULE_12__["default"] {
  request(session, rawOptions) {
    const {
      options
    } = Object(_tools_exKitRequestOptionsNormalize__WEBPACK_IMPORTED_MODULE_13__["default"])(rawOptions);
    return options;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CodeMaker);

/***/ }),

/***/ 594:
/*!***********************************!*\
  !*** ./src/assets/css/magic.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 595:
/*!**************************************!*\
  !*** ./src/components/BindInput.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BindInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "input", null);

    _defineProperty(this, "refInput", element => {
      this.input = element;
    });

    _defineProperty(this, "handleChange", e => {
      if (this.props.type === 'checkbox') {
        this.props.store.set(this.props.id, this.input.checked);
      } else {
        let value = this.input.value;

        if (this.props.type === 'number') {
          value = parseInt(value, 10);

          if (!Number.isFinite(value)) {
            value = 0;
          }
        }

        this.props.store.set(this.props.id, value);
      }
    });
  }

  render() {
    const {
      store,
      id,
      ...props
    } = this.props;

    if (props.type === 'checkbox') {
      props.defaultChecked = store[this.props.id];
    } else {
      props.defaultValue = store[this.props.id];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, props, {
      "data-id": id,
      ref: this.refInput,
      onChange: this.handleChange
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BindInput);

/***/ }),

/***/ 596:
/*!********************************************!*\
  !*** ./src/components/ElementSelector.jsx ***!
  \********************************************/
/*! exports provided: default, _ElementSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ElementSelector", function() { return _ElementSelector; });
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/getLogger */ 8);
var _dec, _class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_3__["default"])('ElementSelector');

class _ElementSelector extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      showAddDialog: false,
      snapshot: null,
      inputError: null
    });

    _defineProperty(this, "input", null);

    _defineProperty(this, "refInput", element => {
      this.input = element;
    });

    _defineProperty(this, "handleChange", e => {
      this.selectorStore.set('selector', this.input.value);
    });

    _defineProperty(this, "optionalCheckbox", null);

    _defineProperty(this, "refOptionalCheckbox", element => {
      this.optionalCheckbox = element;
    });

    _defineProperty(this, "handleOptionalChange", e => {
      if (this.optionalCheckbox.checked) {
        if (!this.selectorStore) {
          const snapshot = this.state.snapshot && JSON.parse(this.state.snapshot);
          this.store.set(this.props.id, snapshot || {
            selector: this.input.value
          });
        }
      } else {
        if (this.selectorStore) {
          this.state.snapshot = JSON.stringify(this.selectorStore);
          this.store.set(this.props.id, undefined);
          this.fireActiveSelect();
        }
      }
    });

    _defineProperty(this, "handleSelect", e => {
      e.preventDefault();
      this.setActiveSelector(this);
      this.frameStore.setSelect(true, {
        containerSelector: this.getContainerSelector(),
        skipFromStart: this.store.skipFromStart,
        skipFromEnd: this.store.skipFromEnd
      }, this.selectListener, this.handleSelectElement);

      this.activeSelect = () => {
        this.frameStore.setSelect();
      };
    });

    _defineProperty(this, "selectListener", path => {
      this.input.value = path;
      this.handleChange();
    });

    _defineProperty(this, "handleSelectElement", path => {
      this.fireActiveSelect();
      this.input.value = path;
      this.handleChange();
    });

    _defineProperty(this, "handleKeyup", e => {
      if (this.selectorStore) {
        this.updateResult();
      }
    });

    this.activeSelect = null;
  }

  componentWillUnmount() {
    this.setActiveSelector(null);
    this.fireActiveSelect();
  }

  get frameStore() {
    return this.props.rootStore.codeMaker.frame;
  }

  get store() {
    return this.props.store;
  }

  get selectorStore() {
    return this.props.store[this.props.id];
  }

  get isSelectMode() {
    return this.frameStore.props.selectListener === this.selectListener;
  }

  setActiveSelector(value) {
    if (this.props.setActiveSelector) {
      this.props.setActiveSelector(value);
    }
  }

  fireActiveSelect() {
    if (this.activeSelect) {
      this.activeSelect();
      this.activeSelect = null;
    }
  }

  updateResult() {
    this.setActiveSelector(this);

    if (this.state.inputError) {
      this.setState({
        inputError: null
      });
    }

    const selector = this.selectorStore.selector;

    try {
      const node = this.props.onResolvePath(selector);

      if (!node) {
        throw new Error('Node is not found');
      }
    } catch (err) {
      logger('updateResult error', selector, err);
      this.setState({
        inputError: err.message
      });
    }

    try {
      this.props.onHighlightPath(selector, {
        containerSelector: this.getContainerSelector(),
        skipFromStart: this.store.skipFromStart,
        skipFromEnd: this.store.skipFromEnd,
        scrollIntoView: !this.isSelectMode
      });
    } catch (err) {
      logger.error('highlightPath error', selector, err);
    }
  }

  getContainerSelector() {
    return '';
  }

  render() {
    const {
      id,
      children,
      optional
    } = this.props;
    const type = this.props.type;
    const isDisabled = !this.selectorStore;
    let title = null;

    if (optional) {
      title = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "field-name"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        ref: this.refOptionalCheckbox,
        defaultChecked: !isDisabled,
        onChange: this.handleOptionalChange,
        type: "checkbox",
        "data-id": `${id}-optional`
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, this.props.title));
    } else {
      title = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "field-name"
      }, this.props.title);
    }

    let defaultValue = null;

    if (this.selectorStore) {
      defaultValue = this.selectorStore.selector;
    }

    let inputClassList = [];

    if (this.state.inputError) {
      inputClassList.push('error');
    }

    let isReadonly = false;

    if (this.isSelectMode) {
      isReadonly = true;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "field"
    }, title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      disabled: isDisabled,
      readOnly: isReadonly,
      type: type,
      defaultValue: defaultValue,
      "data-id": id,
      ref: this.refInput,
      onChange: this.handleChange,
      onKeyUp: this.handleKeyup,
      className: inputClassList.join(' ')
    }), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      disabled: isDisabled,
      onClick: this.handleSelect,
      type: "button",
      "data-id": `${id}-btn`,
      value: chrome.i18n.getMessage('kitSelect')
    }));
  }

}

_defineProperty(_ElementSelector, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  optional: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onResolvePath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onHighlightPath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  setActiveSelector: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
});

let ElementSelector = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class = class ElementSelector extends _ElementSelector {}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (ElementSelector);


/***/ }),

/***/ 597:
/*!*********************************************!*\
  !*** ./src/components/PipelineSelector.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var _ElementSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementSelector */ 596);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/exKitPipelineMethods */ 533);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AddMethodDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddMethodDialog */ 598);
/* harmony import */ var _EditMethodDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditMethodDialog */ 599);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/getLogger */ 8);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! filesize */ 261);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_8__);
var _dec, _class, _class2, _temp, _class3, _class4, _temp2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Sortable = __webpack_require__(/*! sortablejs */ 600);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_7__["default"])('PipelineSelector');
let PipelineSelector = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class = (_temp = _class2 = class PipelineSelector extends _ElementSelector__WEBPACK_IMPORTED_MODULE_1__["_ElementSelector"] {
  constructor(..._args) {
    super(..._args);

    _defineProperty(this, "state", {
      showAddDialog: false,
      snapshot: null,
      inputError: null,
      outputError: null,
      previewMode: false
    });

    _defineProperty(this, "sortable", null);

    _defineProperty(this, "refSortable", node => {
      if (!node) {
        if (this.sortable) {
          this.sortable.destroy();
          this.sortable = null;
        }
      } else if (!this.sortable) {
        this.sortable = new Sortable(node, {
          group: {
            name: 'methods',
            pull: false,
            put: false
          },
          handle: '.move',
          draggable: '.method-wrapper',
          animation: 150,
          onStart: () => {
            node.classList.add('sorting');
          },
          onEnd: e => {
            node.classList.remove('sorting');
            const itemNode = e.item;
            const prevNode = itemNode.previousElementSibling;
            const nextNode = itemNode.nextElementSibling;
            const index = itemNode.dataset.index;
            const prevIndex = prevNode && prevNode.dataset.index;
            const nextIndex = nextNode && nextNode.dataset.index;
            this.selectorStore.moveMethod(index, prevIndex, nextIndex);
            this.updateResult();
          }
        });
      }
    });

    _defineProperty(this, "handleOptionalChange", e => {
      if (this.optionalCheckbox.checked) {
        if (!this.selectorStore) {
          const snapshot = this.state.snapshot && JSON.parse(this.state.snapshot);
          const pipeline = this.store.getDefaultPipeline(this.props.id);
          this.store.set(this.props.id, snapshot || {
            selector: this.input.value,
            pipeline: pipeline
          });
        }
      } else {
        if (this.selectorStore) {
          this.state.snapshot = JSON.stringify(this.selectorStore);
          this.store.set(this.props.id, undefined);
          this.fireActiveSelect();
        }
      }
    });

    _defineProperty(this, "handleShowDialog", e => {
      e.preventDefault();
      this.setState({
        showAddDialog: true
      });
    });

    _defineProperty(this, "closeDialog", () => {
      this.setState({
        showAddDialog: false
      });
    });

    _defineProperty(this, "addMethod", (method, args) => {
      this.setActiveSelector(this);
      this.selectorStore.addMethod(method, args);
      this.closeDialog();
    });

    _defineProperty(this, "handleChangeMethod", () => {
      this.setActiveSelector(this);
    });

    _defineProperty(this, "handleRemoveMethod", method => {
      this.setActiveSelector(this);
      this.selectorStore.removeMethod(method);
    });

    _defineProperty(this, "selectListener", path => {
      this.input.value = path;
      this.handleChange();
    });

    _defineProperty(this, "output", null);

    _defineProperty(this, "refOutput", input => {
      this.output = input;
    });

    _defineProperty(this, "updateResult", () => {
      this.setActiveSelector(this);

      if (this.state.inputError) {
        this.setState({
          inputError: null
        });
      }

      const selector = this.selectorStore.selector;
      let node = null;

      try {
        node = this.props.onResolvePath(selector, {
          containerSelector: this.getContainerSelector(),
          skipFromStart: this.store.skipFromStart,
          skipFromEnd: this.store.skipFromEnd
        });

        if (!node) {
          throw new Error('Node is not found');
        }
      } catch (err) {
        logger('updateResult input error', selector, err);
        this.setState({
          inputError: err.message
        });
      }

      try {
        this.props.onHighlightPath(selector, {
          containerSelector: this.getContainerSelector(),
          skipFromStart: this.store.skipFromStart,
          skipFromEnd: this.store.skipFromEnd,
          scrollIntoView: !this.isSelectMode
        });
      } catch (err) {
        logger.error('highlightPath error', selector, err);
      }

      let lastResult = '';
      return this.selectorStore.pipeline.reduce((promise, method) => {
        return promise.then(result => {
          return Promise.resolve().then(() => {
            return _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_3__["default"][method.name].getMethod(...method.args);
          }).then(fn => lastResult = fn(result));
        });
      }, Promise.resolve(node)).then(result => {
        this.selectorStore.verifyType(result);

        if (this.state.previewMode) {
          switch (this.props.previewType) {
            case 'date':
              {
                result = new Date(result * 1000).toString();
                break;
              }

            case 'size':
              {
                try {
                  result = filesize__WEBPACK_IMPORTED_MODULE_8___default()(result);
                } catch (err) {
                  logger.warn('filesize error', result, err);
                  result = 'n/a';
                }

                break;
              }
          }
        }

        return result;
      }).then(result => {
        if (this.output) {
          this.output.value = result;
          this.setState({
            outputError: null
          });
        }
      }, err => {
        logger('updateResult output error', err);

        if (this.output) {
          this.output.value = lastResult;
          this.setState({
            outputError: err.message
          });
        }
      });
    });

    _defineProperty(this, "handlePreview", e => {
      e.preventDefault();
      this.setState({
        previewMode: !this.state.previewMode
      }, () => {
        this.updateResult();
      });
    });
  }

  getContainerSelector() {
    let result = '';
    const container = this.props.container;

    if (container) {
      result = this.store[container].selector;
    }

    return result;
  }

  render() {
    const {
      id,
      optional
    } = this.props;
    const isDisabled = !this.selectorStore;
    let title = null;

    if (optional) {
      title = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "field-name"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        ref: this.refOptionalCheckbox,
        defaultChecked: !isDisabled,
        onChange: this.handleOptionalChange,
        type: "checkbox",
        "data-id": `${id}-optional`
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, this.props.title));
    } else {
      title = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "field-name"
      }, this.props.title);
    }

    let previewBtn = null;

    if (this.props.preview) {
      const classList = ['preview-btn'];

      if (this.state.previewMode) {
        classList.push('active');
      }

      previewBtn = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        disabled: isDisabled,
        onClick: this.handlePreview,
        type: "button",
        title: chrome.i18n.getMessage('kitPreview'),
        className: classList.join(' ')
      });
    }

    let defaultValue = null;
    let pipeline = [];

    if (this.selectorStore) {
      defaultValue = this.selectorStore.selector || '';
      pipeline = this.selectorStore.pipeline.map((method, index) => {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Method, {
          key: `${index}_${method.name}`,
          index: index,
          method: method,
          onChange: this.handleChangeMethod,
          onRemove: this.handleRemoveMethod
        });
      });
    }

    const pipeControls = [react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      disabled: isDisabled,
      key: 'add',
      onClick: this.handleShowDialog,
      className: 'pipeline-button method-add',
      title: 'Add'
    }, "+")];
    let dialog = null;

    if (this.state.showAddDialog) {
      dialog = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AddMethodDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClose: this.closeDialog,
        onAdd: this.addMethod
      });
    }

    let inputClassList = ['input'];
    let outputClassList = ['output'];

    if (!isDisabled) {
      if (this.state.inputError) {
        inputClassList.push('error');
      }

      if (this.state.outputError) {
        outputClassList.push('error');
      }
    }

    let isReadonly = false;

    if (this.isSelectMode) {
      isReadonly = true;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: 'field pipeline-selector'
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: 'field-left'
    }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: 'field-right'
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "select"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      disabled: isDisabled,
      readOnly: isReadonly,
      type: "text",
      "data-id": id,
      ref: this.refInput,
      onChange: this.handleChange,
      onKeyUp: this.handleKeyup,
      defaultValue: defaultValue,
      className: inputClassList.join(' ')
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      disabled: isDisabled,
      type: "text",
      "data-id": `${id}-result`,
      ref: this.refOutput,
      className: outputClassList.join(' '),
      readOnly: true
    }), previewBtn, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      disabled: isDisabled,
      onClick: this.handleSelect,
      type: "button",
      "data-id": `${id}-btn`,
      value: chrome.i18n.getMessage('kitSelect')
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "pipeline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      ref: this.refSortable,
      className: 'pipeline-sortable'
    }, pipeline), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: 'controls'
    }, pipeControls))), dialog);
  }

}, _defineProperty(_class2, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  optional: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  container: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  onResolvePath: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onHighlightPath: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  setActiveSelector: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  preview: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  previewType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
}), _defineProperty(_class2, "defaultProps", {
  preview: false,
  optional: false
}), _temp)) || _class) || _class);

let Method = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class3 = (_temp2 = _class4 = class Method extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showEditDialog: false
    });

    _defineProperty(this, "handleShowDialog", e => {
      e.preventDefault();
      this.setState({
        showEditDialog: true
      });
    });

    _defineProperty(this, "closeDialog", () => {
      this.setState({
        showEditDialog: false
      });
      this.props.onChange();
    });

    _defineProperty(this, "handleRemove", e => {
      e.preventDefault();
      this.props.onRemove(this.props.method);
    });
  }

  render() {
    const method = this.props.method;
    const methodScheme = _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_3__["default"][method.name];
    const args = method.args.map((arg, index) => {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: 'method-arg',
        key: index
      }, arg);
    });
    let dialog = null;

    if (this.state.showEditDialog) {
      dialog = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_EditMethodDialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
        method: this.props.method,
        onClose: this.closeDialog
      });
    }

    let editBtn = null;

    if (method.args.length) {
      editBtn = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleShowDialog,
        title: 'Edit',
        className: 'pipeline-button'
      }, "E");
    }

    const methodTypeClass = `color-${methodScheme.in}-${methodScheme.out}`;
    const methodInputTypeClass = `color-${methodScheme.in}`;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      "data-index": this.props.index,
      className: `method-wrapper ${methodTypeClass}`
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: `move ${methodInputTypeClass}`
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "method"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "method-name"
    }, method.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "method-args"
    }, args)), editBtn, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: this.handleRemove,
      title: 'Remove',
      className: 'pipeline-button'
    }, "X"), dialog);
  }

}, _defineProperty(_class4, "propTypes", {
  method: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
}), _temp2)) || _class3;

/* harmony default export */ __webpack_exports__["default"] = (PipelineSelector);

/***/ }),

/***/ 598:
/*!********************************************!*\
  !*** ./src/components/AddMethodDialog.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/exKitPipelineMethods */ 533);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ 86);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class AddMethodDialog extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "select", null);

    _defineProperty(this, "refSelect", element => {
      this.select = element;
    });

    _defineProperty(this, "args", {});

    _defineProperty(this, "refArg", (index, element) => {
      if (element) {
        this.args[index] = element;
      } else {
        delete this.args[index];
      }
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const args = Object.keys(this.args).map(key => this.args[key].value);
      this.props.onAdd(this.state.methodName || this.select.value, args);
    });

    _defineProperty(this, "handleCancel", e => {
      e.preventDefault();
      this.props.onClose();
    });

    _defineProperty(this, "handleSelect", e => {
      this.setState({
        methodName: this.select.value
      });
    });

    _defineProperty(this, "handleAddArg", e => {
      e.preventDefault();
      this.setState({
        clonedInputs: this.state.clonedInputs + 1
      });
    });

    _defineProperty(this, "handleRemoveArg", e => {
      e.preventDefault();

      if (this.state.clonedInputs !== 0) {
        this.setState({
          clonedInputs: this.state.clonedInputs - 1
        });
      }
    });

    const defaultMethod = Object.keys(_tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_1__["default"])[0] || null;
    this.state = {
      methodName: defaultMethod,
      clonedInputs: 0
    };
  }

  render() {
    const methodName = this.state.methodName;
    const methodScheme = _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_1__["default"][this.state.methodName];
    const options = Object.keys(_tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_1__["default"]).map(key => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: key,
        value: key
      }, key);
    });
    let args = null;

    if (methodScheme) {
      if (methodScheme.args) {
        args = methodScheme.args.map((arg, index) => {
          let element = null;

          if (arg.type === 'select') {
            element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
              ref: this.refArg.bind(this, index)
            }, arg.values.map(({
              key,
              text
            }) => {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
                key: key,
                value: key
              }, text);
            }));
          } else {
            element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              ref: this.refArg.bind(this, index),
              type: arg.type
            });
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'method-arg',
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'arg-name'
          }, arg.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'arg-input'
          }, element));
        });

        if (methodScheme.multipleArgs) {
          const fistsArg = methodScheme.args[0];

          for (let i = 0; i < this.state.clonedInputs; i++) {
            const index = args.length;
            args.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: 'method-arg',
              key: index
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: 'arg-name'
            }, fistsArg.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: 'arg-input'
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              ref: this.refArg.bind(this, index),
              type: fistsArg.type
            }))));
          }

          let removeBtn = null;

          if (this.state.clonedInputs > 0) {
            removeBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: this.handleRemoveArg
            }, "Remove argument");
          }

          args.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'arg-controls'
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: this.handleAddArg
          }, "Add argument"), removeBtn));
        }
      }
    }

    return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'method-dialog'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'method-select-wrapper'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: 'method-select',
      ref: this.refSelect,
      onChange: this.handleSelect,
      defaultValue: methodName
    }, options)), args, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'dialog-footer'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'dialog-button dialog-button-submit',
      type: "submit"
    }, "Add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'dialog-button',
      onClick: this.handleCancel
    }, "Cancel")))), document.body);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddMethodDialog);

/***/ }),

/***/ 599:
/*!*********************************************!*\
  !*** ./src/components/EditMethodDialog.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/exKitPipelineMethods */ 533);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ 86);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class EditMethodDialog extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "args", {});

    _defineProperty(this, "refArg", (index, element) => {
      if (element) {
        this.args[index] = element;
      } else {
        delete this.args[index];
      }
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const args = Object.keys(this.args).map(key => this.args[key].value);
      this.props.method.setArgs(args);
      this.props.onClose();
    });

    _defineProperty(this, "handleCancel", e => {
      e.preventDefault();
      this.props.onClose();
    });

    _defineProperty(this, "handleAddArg", e => {
      e.preventDefault();
      this.setState({
        clonedInputs: this.state.clonedInputs + 1
      });
    });

    _defineProperty(this, "handleRemoveArg", e => {
      e.preventDefault();

      if (this.state.clonedInputs !== 0) {
        this.setState({
          clonedInputs: this.state.clonedInputs - 1
        });
      }
    });

    const method = props.method;
    const methodScheme = _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_1__["default"][method.name];
    this.state = {
      clonedInputs: 0
    };

    if (methodScheme.args) {
      this.state.clonedInputs = method.args.length - methodScheme.args.length;
    }
  }

  render() {
    const method = this.props.method;
    const methodScheme = _tools_exKitPipelineMethods__WEBPACK_IMPORTED_MODULE_1__["default"][method.name];
    let args = null;

    if (methodScheme) {
      if (methodScheme.args) {
        args = methodScheme.args.map((arg, index) => {
          let element = null;

          if (arg.type === 'select') {
            element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
              ref: this.refArg.bind(this, index),
              defaultValue: method.args[index]
            }, arg.values.map(({
              key,
              text
            }) => {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
                key: key,
                value: key
              }, text);
            }));
          } else {
            element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              ref: this.refArg.bind(this, index),
              type: arg.type,
              defaultValue: method.args[index]
            });
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'method-arg',
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'arg-name'
          }, arg.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'arg-input'
          }, element));
        });

        if (methodScheme.multipleArgs) {
          const fistsArg = methodScheme.args[0];

          for (let i = 0; i < this.state.clonedInputs; i++) {
            const index = args.length;
            args.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: 'method-arg',
              key: index
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: 'arg-name'
            }, fistsArg.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: 'arg-input'
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              ref: this.refArg.bind(this, index),
              type: fistsArg.type,
              defaultValue: method.args[index]
            }))));
          }

          let removeBtn = null;

          if (this.state.clonedInputs > 0) {
            removeBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: this.handleRemoveArg
            }, "Remove argument");
          }

          args.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'arg-controls'
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: this.handleAddArg
          }, "Add argument"), removeBtn));
        }
      }
    }

    return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'method-dialog'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "method-title"
    }, method.name), args, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'dialog-footer'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'dialog-button dialog-button-submit',
      type: "submit"
    }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'dialog-button',
      onClick: this.handleCancel
    }, "Cancel")))), document.body);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EditMethodDialog);

/***/ }),

/***/ 601:
/*!*******************************************!*\
  !*** ./src/components/CodeMakerFrame.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_exKitRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/exKitRequest */ 33);
/* harmony import */ var _tools_exKitGetDoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/exKitGetDoc */ 78);
/* harmony import */ var _sandbox_getDoc5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sandbox/getDoc5 */ 602);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools/getLogger */ 8);
/* harmony import */ var _tools_getNodePath__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/getNodePath */ 629);
/* harmony import */ var _tools_sizzleQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/sizzleQuery */ 531);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ 112);
var _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_5__["default"])('CodeMakerFrame');
let CodeMakerFrame = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class = (_temp = _class2 = class CodeMakerFrame extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "frameDoc", null);

    _defineProperty(this, "doc", null);

    _defineProperty(this, "frame", null);

    _defineProperty(this, "refFrame", element => {
      this.frame = element;
    });

    _defineProperty(this, "reqTracker", {
      connectRe: /.+/,
      requests: [],
      profileOptions: {}
    });

    _defineProperty(this, "hideSelect", () => {
      Array.from(this.frameDoc.querySelectorAll(`.${this.selectClassName}`)).forEach(element => {
        element.classList.remove(this.selectClassName);
      });
    });

    this.frameStore.setState('idle');
    this.selectClassName = 'kit_select';
  }

  get frameStore() {
    return this.props.rootStore.codeMaker.frame;
  }

  componentDidMount() {
    if (this.frameStore.options) {
      this.requestPage(this.frameStore.options);
    }
  }

  componentWillUnmount() {
    this.abort();
  }

  requestPage(options) {
    this.abort();
    this.frameStore.setState('pending');
    return Promise.resolve().then(() => {
      return Object(_tools_exKitRequest__WEBPACK_IMPORTED_MODULE_2__["default"])(this.reqTracker, options);
    }).then(response => {
      const doc = Object(_tools_exKitGetDoc__WEBPACK_IMPORTED_MODULE_3__["default"])(response.body, response.url);
      const newFrameDoc = Object(_sandbox_getDoc5__WEBPACK_IMPORTED_MODULE_4__["default"])(response.body, response.url, this.frame.contentDocument);
      const kitStyle = document.createElement('style');
      kitStyle.textContent = `
      .${this.selectClassName} {
        color:#000 !important;
        background-color:#FFCC33 !important;
        cursor:pointer;
        box-shadow: 0 0 3px red, inset 0 0 3px red !important;
      }`;

      if (newFrameDoc.head) {
        newFrameDoc.head.appendChild(kitStyle);
      } else if (newFrameDoc.body) {
        newFrameDoc.body.appendChild(kitStyle);
      } else {
        newFrameDoc.appendChild(kitStyle);
      }

      const frameDoc = this.frame.contentDocument.documentElement.parentNode;
      frameDoc.textContent = '';

      while (frameDoc.childNodes.length) {
        frameDoc.removeChild(frameDoc.firstChild);
      }

      while (newFrameDoc.childNodes.length) {
        frameDoc.appendChild(newFrameDoc.firstChild);
      }

      this.doc = doc;
      this.frameDoc = frameDoc;
      this.frameStore.setState('done');
      return response;
    }, err => {
      this.frameStore.setState('error');
      logger.error('requestPage error', err);
    });
  }

  abort() {
    this.reqTracker.requests.forEach(request => {
      request.abort();
    });
  }

  resolvePath(path, options = {}) {
    const doc = options.doc || this.doc;
    const container = getContainer(doc, options);
    return Object(_tools_sizzleQuery__WEBPACK_IMPORTED_MODULE_7__["sizzleQuerySelector"])(container, path);
  }

  highlightPath(path, options = {}) {
    const node = this.resolvePath(path, Object.assign({}, options, {
      doc: this.frameDoc
    }));
    this.hideSelect();

    if (node) {
      node.classList.add(this.selectClassName);

      if (options.scrollIntoView) {
        node.scrollIntoView();
      }
    }
  }

  render() {
    let selectMode = null;

    if (this.frameStore.state === 'done' && this.frameStore.selectMode) {
      selectMode = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CodeMakerFrameSelectMode, {
        key: 'selectMode',
        frameDoc: this.frameDoc,
        selectClassName: this.selectClassName,
        hideSelect: this.hideSelect
      });
    }

    return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      key: 'frame',
      ref: this.refFrame,
      sandbox: "allow-same-origin allow-scripts"
    }), selectMode];
  }

}, _defineProperty(_class2, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
}), _temp)) || _class) || _class);

const getContainer = (doc, options) => {
  let container = null;

  if (options.containerSelector) {
    container = Object(_tools_sizzleQuery__WEBPACK_IMPORTED_MODULE_7__["sizzleQuerySelectorAll"])(doc, options.containerSelector);

    if (options.skipFromStart) {
      container.splice(0, options.skipFromStart);
    }

    if (options.skipFromEnd) {
      container.splice(options.skipFromEnd * -1);
    }

    container = container[0];
  } else {
    container = doc;
  }

  if (!container) {
    logger.error('Container is not found', options);
    throw new Error('Container is not found');
  }

  return container;
};

let CodeMakerFrameSelectMode = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('rootStore'), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class3 = (_temp2 = _class4 = class CodeMakerFrameSelectMode extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", e => {
      const node = e.target;

      if (node.nodeType === 1) {
        const path = this.getPath(node);
        this.frameStore.selectHandler(path);
      }
    });

    _defineProperty(this, "handleMouseOver", e => {
      const node = e.target;

      if (node.nodeType === 1) {
        this.props.hideSelect();
        node.classList.add(this.props.selectClassName);
        const path = this.getPath(node);
        this.frameStore.selectListener(path);
      }
    });
  }

  get frameStore() {
    return this.props.rootStore.codeMaker.frame;
  }

  componentDidMount() {
    this.props.frameDoc.addEventListener('mouseover', this.handleMouseOver);
    this.props.frameDoc.addEventListener('mouseup', this.handleClick);
  }

  componentWillUnmount() {
    this.props.hideSelect();
    this.props.frameDoc.removeEventListener('mouseover', this.handleMouseOver);
    this.props.frameDoc.removeEventListener('mouseup', this.handleClick);
  }

  getPath(node) {
    let container = null;
    const options = this.frameStore.selectOptions;

    if (options && options.containerSelector) {
      container = Object(_tools_sizzleQuery__WEBPACK_IMPORTED_MODULE_7__["sizzleQuerySelectorAll"])(this.props.frameDoc, options.containerSelector);

      if (options.skipFromStart) {
        container.splice(0, options.skipFromStart);
      }

      if (options.skipFromEnd) {
        container.splice(options.skipFromEnd * -1);
      }

      container = container[0];
    } else {
      container = this.props.frameDoc;
    }

    if (!container.contains(node)) {
      return '';
    }

    return Object(_tools_getNodePath__WEBPACK_IMPORTED_MODULE_6__["default"])(node, container, {
      skipClassNames: [this.props.selectClassName]
    });
  }

  render() {
    return null;
  }

}, _defineProperty(_class4, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  frameDoc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  selectClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hideSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}), _temp2)) || _class3) || _class3);
/* harmony default export */ __webpack_exports__["default"] = (CodeMakerFrame);

/***/ }),

/***/ 602:
/*!********************************!*\
  !*** ./src/sandbox/getDoc5.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treeAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treeAdapter */ 603);


const parse5 = __webpack_require__(/*! parse5 */ 605);

const getDoc5 = (html, location, document) => {
  const doc = parse5.parse(html, {
    treeAdapter: new _treeAdapter__WEBPACK_IMPORTED_MODULE_0__["default"](document)
  });
  const base = doc.head.querySelector('base');

  if (!base) {
    const base = doc.createElement('base');
    base.href = location;
    doc.head.appendChild(base);
  }

  return doc;
};

/* harmony default export */ __webpack_exports__["default"] = (getDoc5);

/***/ }),

/***/ 603:
/*!************************************!*\
  !*** ./src/sandbox/treeAdapter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/getLogger */ 8);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const DomTreeAdapter = __webpack_require__(/*! dom-treeadapter */ 604);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_0__["default"])('treeAdapter');

class Adapter {
  constructor(document) {
    let proto = this;

    while (proto = proto.__proto__) {
      if (proto.constructor === Adapter) {
        Object.assign(proto, DomTreeAdapter(document));
        break;
      }
    }
  }

}

class TreeAdapter extends Adapter {
  createElement(tagName, nameSpaceUri, attrs) {
    attrs.forEach(pair => {
      if (TreeAdapter.denyPropsRe.test(pair.name)) {
        pair.name = 'deny-' + pair.name;
      }

      if (pair.name === 'href' && /^javascript:/.test(pair.value)) {
        pair.value = 'deny-' + pair.value;
      }
    });
    const tagNameU = tagName.toUpperCase();

    if (TreeAdapter.denyTags.indexOf(tagNameU) !== -1) {
      tagName = `DENY_${tagNameU}`;
      const styleAttr = getAttr(attrs, 'style');

      if (styleAttr) {
        styleAttr.value += ';display: none';
      } else {
        attrs.push({
          name: 'style',
          value: 'display: none'
        });
      }
    }

    let element = null;

    try {
      element = document.createElementNS(nameSpaceUri, tagName);
    } catch (err) {
      if (err.name === 'InvalidCharacterError') {
        logger.warn('createElement error: InvalidCharacterError, replaced', tagName, 'div');
        element = document.createElementNS(nameSpaceUri, 'div');
      } else {
        throw err;
      }
    }

    attrs.forEach(pair => {
      try {
        return element.setAttribute(pair.name, pair.value);
      } catch (err) {
        logger.error('setAttribute error', pair);
      }
    });

    if (tagNameU === 'A') {
      element.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        logger.warn('Event: click blocked');
      });
    } else if (tagNameU === 'FORM') {
      element.addEventListener('submit', e => {
        e.preventDefault();
        e.stopPropagation();
        logger.warn('Event: click blocked');
      });
    }

    return element;
  }

}

_defineProperty(TreeAdapter, "denyPropsRe", /^(on|src$|srcset$|style$)/i);

_defineProperty(TreeAdapter, "denyTags", ['NOSCRIPT', 'LINK', 'SCRIPT', 'IFRAME', 'STYLE']);

const getAttr = (attrs, name) => {
  let result = null;
  attrs.some(attr => {
    if (attr.name === name) {
      result = attr;
      return true;
    }
  });
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (TreeAdapter);

/***/ }),

/***/ 629:
/*!**********************************!*\
  !*** ./src/tools/getNodePath.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getNodePath = (target, container, options = {}) => {
  const skipClassNames = options.skipClassNames || [];
  const pathParts = [];
  let parent = target;
  let element;

  while (element = parent) {
    parent = element.parentNode;

    if (!parent || parent.nodeType !== 1) {
      break;
    }

    if (element === container) {
      break;
    }

    if (element.id) {
      const selector = `#${element.id}`;

      if (container.querySelectorAll(selector).length === 1) {
        pathParts.unshift(selector);
        break;
      }
    }

    const tagName = element.tagName;
    const tagNameLow = tagName.toLowerCase();
    const classList = Array.from(element.classList).filter(name => skipClassNames.indexOf(name) === -1);
    const childNodesWithSameTagName = Array.from(parent.childNodes).filter(child => child.tagName === tagName);

    if (childNodesWithSameTagName.length === 1) {
      pathParts.unshift(tagNameLow);
    } else {
      const childNodesWithSameTagNameAndClasses = childNodesWithSameTagName.filter(child => {
        return classList.every(name => child.classList.contains(name));
      });

      if (childNodesWithSameTagNameAndClasses.length === 1) {
        const selector = `${tagNameLow}.${classList.join('.')}`;
        pathParts.unshift(selector);

        if (container.querySelectorAll(selector).length === 1) {
          break;
        }
      } else {
        const index = childNodesWithSameTagName.indexOf(element);
        pathParts.unshift(`${tagNameLow}:eq(${index})`);
      }
    }
  }

  return pathParts.join(' > ');
};

/* harmony default export */ __webpack_exports__["default"] = (getNodePath);

/***/ }),

/***/ 76:
/*!***************************************************!*\
  !*** ./src/tools/exKitRequestOptionsNormalize.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ 77);


const qs = __webpack_require__(/*! querystring */ 30);

const exKitRequestOptionsNormalize = options => {
  if (typeof options !== 'object') {
    options = {
      url: options
    };
  }

  if (options.type) {
    options.method = options.type;
    delete options.type;
  }

  if (!options.method) {
    options.method = 'GET';
  }

  options.method = options.method.toUpperCase();

  if (options.data) {
    if (options.method === 'POST') {
      options.body = options.data;
    } else {
      options.query = options.data;
    }

    delete options.data;
  }

  const headers = new whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__["Headers"](options.headers);

  if (options.body) {
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }

    if (typeof options.body !== 'string') {
      if (/^application\/x-www-form-urlencoded/.test(headers.get('Content-Type'))) {
        options.body = qs.stringify(options.body);
      } else if (/^application\/json/.test(headers.get('Content-Type'))) {
        options.body = JSON.stringify(options.body);
      }
    }
  }

  if (options.query) {
    if (typeof options.query !== 'string') {
      options.query = qs.stringify(options.query);
    }

    options.url += (/\?/.test(options.url) ? '&' : '?') + options.query;
    delete options.query;
  }

  const toJson = options.json;
  delete options.json;
  options.headers = Array.from(headers.entries()).reduce((result, entry) => {
    result.push(entry);
    return result;
  }, []);
  return {
    options,
    toJson
  };
};

/* harmony default export */ __webpack_exports__["default"] = (exKitRequestOptionsNormalize);

/***/ })

}]);
//# sourceMappingURL=chunk-26.js.map