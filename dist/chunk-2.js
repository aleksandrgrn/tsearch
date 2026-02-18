(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[2],{

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

/***/ 640:
/*!****************************!*\
  !*** ./src/pages/Main.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ 322);
/* harmony import */ var _components_Profiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Profiles */ 325);
/* harmony import */ var _components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScrollTop */ 438);
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Filters */ 336);
/* harmony import */ var _components_Explorer_Explorer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Explorer/Explorer */ 641);
/* harmony import */ var _tools_getTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/getTitle */ 440);








class Main extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    document.title = Object(_tools_getTitle__WEBPACK_IMPORTED_MODULE_6__["default"])();

    if (window.ga) {
      window.ga('send', 'pageview', {
        page: location.href,
        title: document.title
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page-ctr"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content content-row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "parameter_box"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profiles__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Filters__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Explorer_Explorer__WEBPACK_IMPORTED_MODULE_5__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ 641:
/*!**********************************************!*\
  !*** ./src/components/Explorer/Explorer.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_explore_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/css/explore.less */ 642);
/* harmony import */ var _assets_css_explore_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_explore_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react/index */ 326);
/* harmony import */ var mobx_react_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/getLogger */ 8);
/* harmony import */ var _ExploreSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExploreSection */ 643);
var _dec, _class, _class2, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Sortable = __webpack_require__(/*! sortablejs */ 600);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_4__["default"])('Explorer');
let Explorer = (_dec = Object(mobx_react_index__WEBPACK_IMPORTED_MODULE_2__["inject"])('rootStore'), _dec(_class = Object(mobx_react_index__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = (_temp = _class2 = class Explorer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "sortable", null);

    _defineProperty(this, "refSections", element => {
      if (!element) {
        if (this.sortable) {
          this.sortable.destroy();
          this.sortable = null; // debug('destroy');
        }
      } else if (this.sortable) {// debug('update');
      } else {
        // debug('create');
        this.sortable = new Sortable(element, {
          group: 'sections',
          handle: '.section__move',
          draggable: '.section',
          animation: 150,
          onStart: () => {
            element.classList.add('explore-sort');
          },
          onEnd: e => {
            element.classList.remove('explore-sort');
            const itemNode = e.item;
            const prevNode = itemNode.previousElementSibling;
            const nextNode = itemNode.nextElementSibling;
            const index = parseInt(itemNode.dataset.index, 10);
            const prev = prevNode && parseInt(prevNode.dataset.index, 10);
            const next = nextNode && parseInt(nextNode.dataset.index, 10);
            this.explorerStore.moveSection(index, prev, next);
            this.explorerStore.saveSections();
          }
        });
      }
    });

    if (this.optionsStore.state === 'idle') {
      this.optionsStore.fetchOptions();
    }

    if (this.explorerStore.state === 'idle') {
      this.explorerStore.fetch();
    }
  }
  /**@return {RootStore}*/


  get rootStore() {
    return this.props.rootStore;
  }
  /**@return {OptionsStore}*/


  get optionsStore() {
    return this.rootStore.options;
  }
  /**@return {ExplorerStore}*/


  get explorerStore() {
    return this.rootStore.explorer;
  }

  componentDidMount() {
    document.body.classList.add('force-y-scroll');
    this.rootStore.page.updateSize();
  }

  componentWillUnmount() {
    document.body.classList.remove('force-y-scroll');
    this.rootStore.page.updateSize();
  }

  render() {
    if (this.optionsStore.state !== 'done') {
      return `Loading options: ${this.optionsStore.state}`;
    }

    if (this.explorerStore.state !== 'done') {
      return `Loading explorer: ${this.explorerStore.state}`;
    }

    const sections = this.explorerStore.sections.reduce((result, section, index) => {
      if (this.optionsStore.options.explorerSections[section.moduleId]) {
        result.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExploreSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: section.id,
          index: index,
          explorerStore: this.explorerStore,
          sectionStore: section
        }));
      }

      return result;
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      ref: this.refSections,
      className: "explore"
    }, sections);
  }

}, _defineProperty(_class2, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
}), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Explorer);

/***/ }),

/***/ 642:
/*!*************************************!*\
  !*** ./src/assets/css/explore.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 643:
/*!****************************************************!*\
  !*** ./src/components/Explorer/ExploreSection.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ExplorerItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExplorerItem */ 644);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/getLogger */ 8);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 298);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.debounce */ 58);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
var _class, _class2, _temp, _class3, _class4, _temp2, _class5, _class6, _temp3, _class7, _class8, _temp4;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Sortable = __webpack_require__(/*! sortablejs */ 600);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_4__["default"])('ExploreSection');

let ExploreSection = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class = (_temp = _class2 = class ExploreSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setMinHeight", height => {
      this.setState({
        minHeight: height
      });
    });

    this.state = {
      minHeight: 0,
      showOptions: false
    };
  }
  /**@return {ExplorerStore}*/


  get explorerStore() {
    return this.props.explorerStore;
  }
  /**@return {ExplorerSectionStore}*/


  get sectionStore() {
    return this.props.sectionStore;
  }

  render() {
    const classList = ['section'];

    if (this.sectionStore.state === 'pending') {
      classList.push('section-loading');
    } else if (this.sectionStore.authRequired) {
      classList.push('section-login');
    } else if (this.sectionStore.state === 'error') {
      classList.push('section-error');
    }

    if (this.sectionStore.id === 'favorites' && !this.sectionStore.items.length) {
      classList.push('section-empty');
    }

    if (this.sectionStore.collapsed) {
      classList.push('section-collapsed');
    }

    let body = null;

    if (!this.sectionStore.collapsed) {
      body = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExplorerSectionBody, {
        setMinHeight: this.setMinHeight,
        minHeight: this.state.minHeight,
        sectionStore: this.sectionStore
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      "data-index": this.props.index,
      className: classList.join(' ')
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExplorerSectionHeader, {
      setMinHeight: this.setMinHeight,
      explorerStore: this.explorerStore,
      sectionStore: this.sectionStore
    }), body);
  }

}, _defineProperty(_class2, "propTypes", {
  explorerStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  sectionStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
}), _temp)) || _class;

let ExplorerSectionHeader = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class3 = (_temp2 = _class4 = class ExplorerSectionHeader extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "saveSectionsDebounce", lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(() => {
      this.explorerStore.saveSections();
    }, 250));

    _defineProperty(this, "zoomRange", null);

    _defineProperty(this, "refZoomRange", element => {
      this.zoomRange = element;
    });

    _defineProperty(this, "handleZoomRangeChange", e => {
      this.props.setMinHeight(0);
      const zoom = parseInt(this.zoomRange.value, 10);
      this.sectionStore.setZoom(zoom);
      this.saveSectionsDebounce();
    });

    _defineProperty(this, "handleResetZoom", e => {
      e.preventDefault();
      this.props.setMinHeight(0);
      this.zoomRange.value = 100;
      this.sectionStore.setZoom(100);
      this.explorerStore.saveSections();
    });

    _defineProperty(this, "handleOptionsClick", e => {
      e.preventDefault();
      this.setState({
        showOptions: !this.state.showOptions
      });
    });

    _defineProperty(this, "handleCollapse", e => {
      if (e.target.classList.contains('section__head') || e.target.classList.contains('section__collapses') || e.target.classList.contains('section__title')) {
        e.preventDefault();
        this.sectionStore.toggleCollapse();
        this.explorerStore.saveSections();
      }
    });

    _defineProperty(this, "rowCount", null);

    _defineProperty(this, "refRowCount", element => {
      this.rowCount = element;
    });

    _defineProperty(this, "handleRowCountChange", e => {
      this.props.setMinHeight(0);
      const count = parseInt(this.rowCount.value, 10);
      this.sectionStore.setRowCount(count);
      this.explorerStore.saveSections();
    });

    _defineProperty(this, "handleForceUpdate", e => {
      e.preventDefault();
      this.sectionStore.fetchData(true);
    });

    this.state = {
      showOptions: false
    };
  }
  /**@return {ExplorerStore}*/


  get explorerStore() {
    return this.props.explorerStore;
  }
  /**@return {ExplorerSectionStore}*/


  get sectionStore() {
    return this.props.sectionStore;
  }
  /**@return {ExplorerModuleStore|undefined}*/


  get moduleStore() {
    return this.sectionStore.module;
  }

  render() {
    const sectionStore = this.sectionStore;
    const moduleStore = this.moduleStore;
    let actionsCtr = null;

    if (!sectionStore.collapsed) {
      let openSite = null;

      if (moduleStore && moduleStore.meta.siteURL) {
        openSite = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: moduleStore.meta.siteURL,
          title: chrome.i18n.getMessage('goToTheWebsite'),
          className: "action action__open",
          target: "_blank"
        });
      }

      let moduleActions = null;

      if (moduleStore) {
        moduleActions = moduleStore.meta.actions.map((action, i) => {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExplorerAction, {
            key: i,
            index: i,
            actionStore: action,
            sectionStore: this.sectionStore
          });
        });
      }
      /*if (sectionStore.authRequired) {
        moduleActions.unshift(
          <a key={'authRequired'} className="action  action__open" target="_blank" href={sectionStore.authRequired.url}
             title={chrome.i18n.getMessage('login')}/>
        );
      }*/


      let editBtn = null;

      if (this.sectionStore.id !== 'favorites') {
        const editUrl = `/editor/explorerModule/${this.sectionStore.id}`;
        editBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          className: "action action__edit",
          to: editUrl,
          target: "_blank",
          title: chrome.i18n.getMessage('edit')
        });
      }

      let options = null;

      if (this.state.showOptions) {
        options = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: 'section__setup'
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          ref: this.refZoomRange,
          onChange: this.handleZoomRangeChange,
          defaultValue: sectionStore.zoom,
          type: "range",
          className: "setup__size_range",
          min: "1",
          max: "150"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: this.handleResetZoom,
          title: chrome.i18n.getMessage('default'),
          className: "setup__size_default",
          href: "#"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          ref: this.refRowCount,
          onChange: this.handleRowCountChange,
          defaultValue: sectionStore.rowCount,
          className: "setup__lines"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "1"
        }, "1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2"
        }, "2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "3"
        }, "3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "4"
        }, "4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "5"
        }, "5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "6"
        }, "6")), editBtn, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: this.handleForceUpdate,
          title: chrome.i18n.getMessage('update'),
          className: "action action__update",
          href: "#"
        }));
      }

      actionsCtr = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "section__actions"
      }, openSite, moduleActions, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        onClick: this.handleOptionsClick,
        title: chrome.i18n.getMessage('setupView'),
        className: "action action__setup"
      }), options);
    }

    let title = null;

    if (sectionStore.id === 'favorites') {
      title = chrome.i18n.getMessage('favorites');
    } else if (moduleStore) {
      title = moduleStore.meta.getName();
    } else {
      title = sectionStore.id;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.handleCollapse,
      className: "section__head"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section__move"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section__title"
    }, title), actionsCtr, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section__collapses"
    }));
  }

}, _defineProperty(_class4, "propTypes", {
  explorerStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  sectionStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  setMinHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
}), _temp2)) || _class3;

let ExplorerAction = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class5 = (_temp3 = _class6 = class ExplorerAction extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();
      this.sectionStore.fetchCommand(this.commandStore, this.actionStore);
    });

    if (!this.commandStore) {
      this.sectionStore.createCommand(this.props.index);
    }
  }
  /**@return ExplorerSectionStore*/


  get sectionStore() {
    return this.props.sectionStore;
  }
  /**@return ExplorerCommandStore*/


  get commandStore() {
    return this.sectionStore.commands.get(this.props.index);
  }
  /**@return ExplorerModuleMetaActionStore*/


  get actionStore() {
    return this.props.actionStore;
  }

  render() {
    const actionStore = this.actionStore;
    const title = actionStore.getTitle();
    let child = title;
    const classList = ['action'];

    if (this.commandStore.state === 'pending') {
      classList.push('loading');
    }

    switch (actionStore.icon) {
      case 'update':
        {
          classList.push('action__update');
          child = null;
          break;
        }
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      onClick: this.handleClick,
      className: classList.join(' '),
      title: title
    }, child);
  }

}, _defineProperty(_class6, "propTypes", {
  sectionStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  actionStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
}), _temp3)) || _class5;

let ExplorerSectionBody = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class7 = (_temp4 = _class8 = class ExplorerSectionBody extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "sortable", null);

    _defineProperty(this, "body", null);

    _defineProperty(this, "refBody", element => {
      this.body = element;

      if (!element) {
        if (this.sortable) {
          this.sortable.destroy();
          this.sortable = null; // debug('destroy');
        }
      } else if (this.sortable) {// debug('update');
      } else if (this.sectionStore.id === 'favorites') {
        // debug('create');
        this.sortable = new Sortable(element, {
          group: 'favorites',
          handle: '.action__move',
          draggable: '.section__poster',
          animation: 150,
          onEnd: e => {
            const itemNode = e.item;
            const prevNode = itemNode.previousElementSibling;
            const nextNode = itemNode.nextElementSibling;
            const index = parseInt(itemNode.dataset.index, 10);
            const prev = prevNode && parseInt(prevNode.dataset.index, 10);
            const next = nextNode && parseInt(nextNode.dataset.index, 10);
            this.sectionStore.moveItem(index, prev, next);
            this.sectionStore.saveItems();
          }
        });
      }
    });

    _defineProperty(this, "setPage", page => {
      const bodyHeight = this.body.clientHeight;

      if (bodyHeight > this.props.minHeight) {
        this.props.setMinHeight(bodyHeight);
      }

      this.setState({
        page: page
      });
    });

    this.state = {
      page: 0
    };

    if (this.sectionStore.state === 'idle') {
      this.sectionStore.fetchData();
    }
  }
  /**@return {ExplorerSectionStore}*/


  get sectionStore() {
    return this.props.sectionStore;
  }

  getDisplayItemCount() {
    const section = this.sectionStore;
    const itemCount = Math.floor((section.page.width - 176) / (120 * section.zoom / 100 + 10 * 2));
    return itemCount * section.rowCount;
  }

  render() {
    const items = this.sectionStore.items;
    const displayItemCount = this.getDisplayItemCount();
    let pageNumber = this.state.page;
    let from = 0;
    let pageItems = null;

    while (!pageItems || pageItems.length === 0 && pageNumber > 0) {
      if (pageItems) {
        pageNumber--;
      }

      from = displayItemCount * pageNumber;
      pageItems = items.slice(from, from + displayItemCount);
    }

    const contentItems = pageItems.map((item, i) => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExplorerItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: [from + i, item.url].join(':'),
        index: from + i,
        sectionStore: this.sectionStore,
        itemStore: item
      });
    });
    const bodyStyle = {
      minHeight: this.props.minHeight
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExplorerSectionPageSwitcher, {
      page: pageNumber,
      count: items.length,
      displayCount: displayItemCount,
      setPage: this.setPage
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      ref: this.refBody,
      style: bodyStyle,
      className: "section__body"
    }, contentItems));
  }

}, _defineProperty(_class8, "propTypes", {
  sectionStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  minHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  setMinHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
}), _temp4)) || _class7;

class ExplorerSectionPageSwitcher extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleMouseEnter", e => {
      const page = parseInt(e.target.dataset.page, 10);
      this.props.setPage(page);
    });
  }

  render() {
    const page = this.props.page;
    const coefficient = this.props.count / this.props.displayCount;
    let pageCount = Math.floor(coefficient);

    if (coefficient % 1 === 0) {
      pageCount--;
    }

    if (!Number.isFinite(pageCount)) {
      pageCount = 0;
    }

    const pages = [];

    for (let i = 0; i <= pageCount; i++) {
      const isActive = page === i;
      const classList = ['pages__item'];

      if (isActive) {
        classList.push('item-active');
      }

      pages.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: i,
        className: classList.join(' '),
        "data-page": i,
        onMouseEnter: this.handleMouseEnter
      }, i + 1));
    }

    let content = null;

    if (pages.length > 1) {
      content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "section__pages"
      }, pages);
    }

    return content;
  }

}

_defineProperty(ExplorerSectionPageSwitcher, "propTypes", {
  page: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  count: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  displayCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  setPage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (ExploreSection);

/***/ }),

/***/ 644:
/*!**************************************************!*\
  !*** ./src/components/Explorer/ExplorerItem.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dialog */ 585);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 298);
/* harmony import */ var _tools_highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tools/highlight */ 117);
var _dec, _class, _class2, _temp, _class3, _class4, _temp2, _dec2, _class5, _class6, _temp3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const qs = __webpack_require__(/*! querystring */ 30);

let ExplorerItem = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class = (_temp = _class2 = class ExplorerItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handlePosterError", e => {
      this.setState({
        posterError: true
      });
    });

    _defineProperty(this, "handleEditFavorite", e => {
      this.setState({
        edit: true
      });
    });

    _defineProperty(this, "handleDialogCancel", e => {
      e.preventDefault();
      this.handleDialogClose();
    });

    _defineProperty(this, "handleDialogClose", e => {
      this.setState({
        posterError: false,
        edit: false
      });
    });

    _defineProperty(this, "handleRemoveFavorite", e => {
      e.preventDefault();
      this.itemStore.removeFavorite();
    });

    _defineProperty(this, "handleRemoveFavoriteByUrl", e => {
      e.preventDefault();
      this.itemStore.removeFavoriteByUrl();
    });

    _defineProperty(this, "handleAddFavorite", e => {
      e.preventDefault();
      this.itemStore.addFavorite();
    });

    _defineProperty(this, "title", null);

    _defineProperty(this, "refTitle", element => {
      this.title = element;
    });

    _defineProperty(this, "titleOriginal", null);

    _defineProperty(this, "refTitleOriginal", element => {
      this.titleOriginal = element;
    });

    _defineProperty(this, "poster", null);

    _defineProperty(this, "refPoster", element => {
      this.poster = element;
    });

    _defineProperty(this, "url", null);

    _defineProperty(this, "refUrl", element => {
      this.url = element;
    });

    _defineProperty(this, "handleDialogSave", e => {
      e.preventDefault();
      this.itemStore.updateProps({
        title: this.title.value,
        titleOriginal: this.titleOriginal.value,
        poster: this.poster.value,
        url: this.url.value
      }).then(() => {
        this.handleDialogClose();
      });
    });

    _defineProperty(this, "handleQuickSearch", e => {
      e.preventDefault();
      this.itemStore.quickSearch();
    });

    _defineProperty(this, "handleQuickSearchMouseEnter", e => {
      this.setState({
        showQuickSearch: true
      });
    });

    _defineProperty(this, "handleQuickSearchMouseLeave", e => {
      this.setState({
        showQuickSearch: false
      });
    });

    this.state = {
      posterError: false,
      edit: false,
      showQuickSearch: false
    };
  }
  /**@return {RootStore}*/


  get rootStore() {
    return this.props.rootStore;
  }
  /**@return {ExplorerSectionStore}*/


  get sectionStore() {
    return this.props.sectionStore;
  }
  /**@return {ExplorerItemStore}*/


  get itemStore() {
    return this.props.itemStore;
  }

  render() {
    const sectionStore = this.sectionStore;
    const itemStore = this.itemStore;
    let posterUrl = itemStore.poster;

    if (!posterUrl || this.state.posterError) {
      posterUrl = __webpack_require__(/*! url-loader!../../assets/img/no_poster.png */ 645);
    }

    const actions = [];

    if (sectionStore.id === 'favorites') {
      actions.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: 'rmFavorite',
        onClick: this.handleRemoveFavorite,
        title: chrome.i18n.getMessage('removeFromFavorite'),
        className: "action__rmFavorite"
      }));
      actions.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: 'edit',
        onClick: this.handleEditFavorite,
        title: chrome.i18n.getMessage('edit'),
        className: "action__edit"
      }));
      actions.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: 'move',
        title: chrome.i18n.getMessage('move'),
        className: "action__move action--last"
      }));
    } else {
      if (itemStore.isFavorite) {
        actions.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: 'rmFavorite',
          onClick: this.handleRemoveFavoriteByUrl,
          title: chrome.i18n.getMessage('removeFromFavorite'),
          className: "action__rmFavorite action--last"
        }));
      } else {
        actions.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: 'favorite',
          onClick: this.handleAddFavorite,
          title: chrome.i18n.getMessage('addInFavorite'),
          className: "action__favorite action--last"
        }));
      }
    }

    let dialog = null;

    if (this.state.edit) {
      dialog = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: 'dialog-poster_edit',
        onClose: this.handleDialogClose
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleDialogSave
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "dialog__label"
      }, chrome.i18n.getMessage('title')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        ref: this.refTitle,
        defaultValue: itemStore.title,
        className: "input__input",
        name: "title",
        type: "text"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "dialog__label"
      }, chrome.i18n.getMessage('originalTitle')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        ref: this.refTitleOriginal,
        defaultValue: itemStore.titleOriginal,
        className: "input__input",
        name: "titleOriginal",
        type: "text"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "dialog__label"
      }, chrome.i18n.getMessage('imageUrl')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        ref: this.refPoster,
        defaultValue: itemStore.poster,
        className: "input__input",
        name: "poster",
        type: "text"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "dialog__label"
      }, chrome.i18n.getMessage('descUrl')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        ref: this.refUrl,
        defaultValue: itemStore.url,
        className: "input__input",
        name: "url",
        type: "text"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "dialog__button_box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        value: chrome.i18n.getMessage('save'),
        className: "button button-save",
        type: "submit"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        onClick: this.handleDialogCancel,
        value: chrome.i18n.getMessage('cancel'),
        className: "button button-cancel",
        type: "button"
      }))));
    }

    const itemStyle = {
      zoom: sectionStore.zoom / 100
    };
    const title = itemStore.localTitle;
    const searchUrl = '/search?' + qs.stringify({
      query: title
    });
    let quickSearchResults = null;
    let quickSearchLabel = '?';
    const quickSearchItem = itemStore.quickSearchItem;

    if (quickSearchItem) {
      if (quickSearchItem.state === 'pending') {
        quickSearchLabel = '...';
      } else {
        quickSearchLabel = quickSearchItem.label;
      }

      if (this.state.showQuickSearch) {
        quickSearchResults = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QuickSearchResults, {
          quickSearchItemStore: quickSearchItem,
          zoom: sectionStore.zoom
        });
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      "data-index": this.props.index,
      style: itemStyle,
      className: "section__poster poster"
    }, dialog, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "poster__image"
    }, actions, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.handleQuickSearch,
      onMouseEnter: this.handleQuickSearchMouseEnter,
      onMouseLeave: this.handleQuickSearchMouseLeave,
      title: chrome.i18n.getMessage('quickSearch'),
      className: "action__quick_search"
    }, quickSearchLabel, quickSearchResults), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: itemStore.url,
      title: chrome.i18n.getMessage('readMore'),
      className: "image__more_link",
      target: "_blank"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: searchUrl,
      title: title,
      className: "image__search_link"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: posterUrl,
      className: "image__image",
      onError: this.handlePosterError,
      alt: ""
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "poster__title"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: searchUrl,
      title: title,
      className: "poster__search_link"
    }, title))));
  }

}, _defineProperty(_class2, "propTypes", {
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  itemStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
}), _temp)) || _class) || _class);

let QuickSearchResults = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class3 = (_temp2 = _class4 = class QuickSearchResults extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onPopupClick", e => {
      e.stopPropagation();
    });

    _defineProperty(this, "popupNode", null);

    _defineProperty(this, "refPopupNode", element => {
      if (!this.popupNode && element) {
        element.addEventListener('click', this.onPopupClick);
      }

      this.popupNode = element;

      if (element) {
        this.updatePosition();
      }
    });

    _defineProperty(this, "angleNode", null);

    _defineProperty(this, "refAngleNode", element => {
      this.angleNode = element;
    });
  }

  /**@return ExplorerQuickSearchItemStore*/
  get quickSearchItemStore() {
    return this.props.quickSearchItemStore;
  }

  updatePosition() {
    const popupNode = this.popupNode;
    const labelNode = popupNode.parentNode;
    const angleNode = this.angleNode;

    if (labelNode && angleNode) {
      setPosition(labelNode, popupNode, this.angleNode, this.props.zoom);
    }
  }

  render() {
    const results = this.quickSearchItemStore.results.map(result => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QuickSearchResult, {
        key: result.url,
        result: result,
        query: this.quickSearchItemStore.query
      });
    });

    if (!results.length) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.refPopupNode,
      title: "",
      className: "quick_search quick_search__visible"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "popup"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.refAngleNode,
      className: "popup__angle_shadow"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "popup__angle"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "popup__body"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, results))));
  }

}, _defineProperty(_class4, "propTypes", {
  quickSearchItemStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  zoom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
}), _temp2)) || _class3;

let QuickSearchResult = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["inject"])('rootStore'), _dec2(_class5 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class5 = (_temp3 = _class6 = class QuickSearchResult extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", () => {
      const rootStore = this.props.rootStore;
      const query = this.props.query;
      const result = this.props.result;
      rootStore.history.addClick(query, result.title, result.url, result.trackerId);
    });
  }

  render() {
    const result = this.props.result;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "torrent__title"
    }, _tools_highlight__WEBPACK_IMPORTED_MODULE_5__["default"].getReactComponent('a', {
      className: 'title',
      target: '_blank',
      href: result.url,
      onMouseUp: this.handleClick
    }, result.title, result.titleHighlightMap), ", ", result.sizeText);
  }

}, _defineProperty(_class6, "propTypes", {
  result: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
}), _temp3)) || _class5) || _class5);

const getRectWithOffset = function (node, zoom) {
  const box = node.getBoundingClientRect();
  return {
    top: Math.round(box.top * zoom + window.pageYOffset),
    left: Math.round(box.left * zoom + window.pageXOffset),
    width: box.width * zoom,
    height: box.height * zoom
  };
};

const setPosition = function (labelNode, popupNode, angleNode, zoom) {
  zoom = zoom / 100;
  const popupWidth = 300 * zoom;
  const labelRect = getRectWithOffset(labelNode, zoom);
  const labelCenterPos = labelRect.left + labelRect.width / 2;
  const popupRightPos = labelCenterPos + popupWidth / 2;
  let popupLeftPos = labelCenterPos - popupWidth / 2;
  const docWidth = document.body.clientWidth;

  if (popupRightPos > docWidth) {
    popupLeftPos = docWidth - popupWidth;
  }

  if (popupLeftPos < 0) {
    popupLeftPos = 0;
  }

  const angleLeftPercent = 100 / popupWidth * (labelCenterPos - popupLeftPos);
  popupLeftPos -= labelRect.left;
  angleNode.style.left = angleLeftPercent + '%';
  popupNode.style.left = popupLeftPos / zoom + 'px';
  popupNode.style.top = (labelRect.height - 5) / zoom + 'px';
  popupNode.style.zoom = 1 / zoom;
};

/* harmony default export */ __webpack_exports__["default"] = (ExplorerItem);

/***/ }),

/***/ 645:
/*!****************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/assets/img/no_poster.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ5JREFUeNpi/P//P8NgBkwMgxyMOpBiAEqD2DAVQSAQPwTiw6TYD3cHDR2oAsRbQG5AwjakOpAWUcwJxHVAfAmIfwHxGiD+CJXLHOgo9gDi20B8FYjtkcSZgXgaED8ZqCiWA+LV0Gi8AcRmSHIGQHwAKm5DbweyAXEpEH9GS2v/oaG1ESpXB1VL10xiD43K7UC8FIjfYnEkKJMokpPEKHGgBBAvgqY1bzS5LqjDHkKLF7LzADkOBCX0HCD+AMT30DKBFjQk/0AdyUNpJiXVgaBEfx5LFD6HprOf0IJYi1qlCLEOFALimVDHgHLifCB+heZIUNpLoHZNRowDQ6CWP4SykUE11HEgx/PToqolxoFPoFHojaW8A0W3JS3bAsSG4B+ktLYaGr350AzDMNAOZICmLVha2wgtYujSmiIlF/+nId5LLQc2onm8EcmSHDxy/6HVHE55aoZgNR6LSsl1JLWjuAiPQ6rJcSQhBzLiqncZGRmRHUjLLgfjaK9u1IGjDhx14KgDRx04sA7cQUP7CZrNODoEPOrAUQfiBwABBgA8EIncQs5nkwAAAABJRU5ErkJggg=="

/***/ })

}]);
//# sourceMappingURL=chunk-2.js.map