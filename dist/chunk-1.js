(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[1],{

/***/ 582:
/*!******************************!*\
  !*** ./src/pages/Editor.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ 583);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_editor_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/css/editor.less */ 584);
/* harmony import */ var _assets_css_editor_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_editor_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var _components_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Dialog */ 585);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/getLogger */ 8);
/* harmony import */ var _tools_getTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/getTitle */ 440);
/* harmony import */ var _tools_jsonCodeToUserscript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/jsonCodeToUserscript */ 68);
var _dec, _class, _class2, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const CodeMirror = __webpack_require__(/*! codemirror */ 587);

__webpack_require__(/*! codemirror/mode/javascript/javascript */ 588);

__webpack_require__(/*! codemirror/addon/edit/matchbrackets */ 589);

__webpack_require__(/*! codemirror/addon/edit/closebrackets */ 590);

__webpack_require__(/*! codemirror/addon/comment/continuecomment */ 591);

__webpack_require__(/*! codemirror/addon/selection/active-line */ 592);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_6__["default"])('Editor');
let Editor = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = (_temp = _class2 = class Editor extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "refTextarea", element => {
      if (!element) {
        if (this.editor) {
          this.editor.off('change', this.handleTextareaChange);
          this.editor.toTextArea();
          this.editor = null;
        }
      } else if (!this.editor) {
        this.editor = CodeMirror.fromTextArea(element, {
          mode: 'javascript',
          lineWrapping: true,
          lineNumbers: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          continueComments: true,
          styleActiveLine: true,
          extraKeys: {
            "Ctrl-S": () => {
              this.handleSave();
            },
            "Cmd-S": () => {
              this.handleSave();
            }
          }
        });
        this.editor.on('change', this.handleTextareaChange);
      }
    });

    _defineProperty(this, "autoUpdate", null);

    _defineProperty(this, "refAutoUpdate", element => {
      this.autoUpdate = element;
    });

    _defineProperty(this, "refDialogTextarea", element => {
      this.dialogTextarea = element;
    });

    _defineProperty(this, "handleTextareaChange", e => {
      const editorStore = this.editorStore;
      editorStore.setCode(this.editor.getValue());
    });

    _defineProperty(this, "handleAutoUpdateChange", e => {
      const editorStore = this.editorStore;
      editorStore.options.setAutoUpdate(this.autoUpdate.checked);
    });

    _defineProperty(this, "handleAddCode", e => {
      e.preventDefault();
      this.setState({
        showAddCodeDialog: true
      });
    });

    _defineProperty(this, "handleCloseWindow", e => {
      e.preventDefault();
      window.close();
    });

    _defineProperty(this, "handleDialogCancel", e => {
      e && e.preventDefault();
      this.setState({
        showAddCodeDialog: false
      });
    });

    _defineProperty(this, "handleDialogSave", e => {
      e.preventDefault();
      const editorStore = this.editorStore;

      try {
        const text = this.dialogTextarea.value;
        const script = Object(_tools_jsonCodeToUserscript__WEBPACK_IMPORTED_MODULE_8__["default"])(text);
        editorStore.setCode(script);
        this.editor.setValue(script);
        this.setState({
          showAddCodeDialog: false
        });
      } catch (err) {
        logger.error('Add code error', err);
        alert('Add code error: \n' + err.stack);
      }
    });

    _defineProperty(this, "handleSave", e => {
      e && e.preventDefault();
      const editorStore = this.editorStore;
      editorStore.save();
    });

    this.state = {
      showAddCodeDialog: false
    };
    this.editor = null;
    this.dialogTextarea = null;
    this.props.rootStore.createEditor(props.type, props.id);

    if (this.editorStore.state === 'idle') {
      this.editorStore.fetchModule();
    }
  }

  componentDidMount() {
    document.title = Object(_tools_getTitle__WEBPACK_IMPORTED_MODULE_7__["default"])('Code editor');

    if (window.ga) {
      window.ga('send', 'pageview', {
        page: location.href,
        title: document.title
      });
    }
  }

  componentWillUnmount() {
    this.props.rootStore.destroyEditor();
  }
  /**@return EditorStore*/


  get editorStore() {
    return this.props.rootStore.editor;
  }

  render() {
    const editorStore = this.editorStore;

    if (editorStore.state !== 'done') {
      return `Loading editor: ${editorStore.state}`;
    }

    let saveBtn = null;

    if (editorStore.saveState === 'pending') {
      saveBtn = '...';
    } else {
      const classList = ['button head__action head__action-save'];

      if (editorStore.saveState === 'error') {
        classList.push('error');
      }

      saveBtn = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: this.handleSave,
        href: "#save",
        className: classList.join(' ')
      }, chrome.i18n.getMessage('save'), editorStore.hasChanges() ? '*' : '');
    }

    let addCodeBtn = null;

    if (editorStore.type === 'tracker') {
      addCodeBtn = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: this.handleAddCode,
        href: "#code",
        className: "button head__action head__action-add-code"
      }, chrome.i18n.getMessage('addTrackerCode'));
    }

    let dialog = null;

    if (this.state.showAddCodeDialog) {
      dialog = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: 'dialog-code',
        onClose: this.handleDialogCancel
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.handleDialogSave
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "dialog__label"
      }, chrome.i18n.getMessage('enterTrackerCode')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
        ref: this.refDialogTextarea,
        className: "dialog__textarea",
        name: "code"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "dialog__button_box"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        className: "button button-save",
        type: "submit",
        value: chrome.i18n.getMessage('save')
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        className: "button button-cancel",
        type: "button",
        onClick: this.handleDialogCancel,
        value: chrome.i18n.getMessage('cancel')
      }))));
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "page-ctr page-ctr--editor"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "editor__head"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "head__options"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      ref: this.refAutoUpdate,
      type: "checkbox",
      className: "option__auto-update",
      defaultChecked: editorStore.options.autoUpdate,
      onChange: this.handleAutoUpdateChange
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, chrome.i18n.getMessage('autoUpdate')))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "head__action"
    }, addCodeBtn, saveBtn, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      onClick: this.handleCloseWindow,
      href: "#close",
      className: "button head__action head__action-close"
    }, chrome.i18n.getMessage('close')))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "editor__body"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
      ref: this.refTextarea,
      className: "editor__textarea",
      defaultValue: editorStore.code
    })), dialog);
  }

}, _defineProperty(_class2, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
}), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ 584:
/*!************************************!*\
  !*** ./src/assets/css/editor.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 585:
/*!***********************************!*\
  !*** ./src/components/Dialog.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_dialog_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/dialog.less */ 586);
/* harmony import */ var _assets_css_dialog_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_dialog_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ 86);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Dialog extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleBodyClick", e => {
      if (!this.dialog.contains(e.target)) {
        this.props.onClose();
      }
    });

    _defineProperty(this, "refDialog", element => {
      this.dialog = element;
    });

    this.dialog = null;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleBodyClick);
  }

  render() {
    const classList = ['dialog__body'];

    if (this.props.className) {
      classList.push(this.props.className);
    }

    const {
      onClose,
      ...props
    } = this.props;
    const dialog = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, props, {
      ref: this.refDialog,
      className: classList.join(' ')
    }), this.props.children);
    return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(dialog, document.body);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

/***/ }),

/***/ 586:
/*!************************************!*\
  !*** ./src/assets/css/dialog.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 68:
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

/***/ 71:
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

/***/ })

}]);
//# sourceMappingURL=chunk-1.js.map