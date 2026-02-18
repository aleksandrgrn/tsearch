(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[24],{

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

/***/ 630:
/*!*************************************!*\
  !*** ./src/pages/ProfileEditor.jsx ***!
  \*************************************/
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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ProfileEditor_ProfileEditorProfiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProfileEditor/ProfileEditorProfiles */ 631);
/* harmony import */ var _components_ProfileEditor_ProfileEditorProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ProfileEditor/ProfileEditorProfile */ 632);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools/getLogger */ 8);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ 298);
var _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_9__["default"])('ProfileEditor');
let ProfileEditor = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class = (_temp = _class2 = class ProfileEditor extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    if (this.props.rootStore.profiles.state === 'idle') {
      this.props.rootStore.profiles.fetchProfiles();
    }

    if (this.props.rootStore.trackers.state === 'idle') {
      this.props.rootStore.trackers.fetchTrackers();
    }
  }
  /**@return RootStore*/


  get rootStore() {
    return this.props.rootStore;
  }
  /**@return ProfilesStore*/


  get profilesStore() {
    return this.rootStore.profiles;
  }
  /**@return TrackersStore*/


  get trackersStore() {
    return this.rootStore.trackers;
  }

  render() {
    const profilesStore = this.profilesStore;
    const trackersStore = this.trackersStore;

    if (profilesStore.state !== 'done') {
      return `Loading profiles: ${profilesStore.state}`;
    }

    if (trackersStore.state !== 'done') {
      return `Loading trackers: ${trackersStore.state}`;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page-ctr profile-editor"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content content-row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "parameter_box"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profiles__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Filters__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileEditorPage, {
      id: this.props.id
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}, _defineProperty(_class2, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
}), _temp)) || _class) || _class);
let ProfileEditorPage = (_dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('rootStore'), _dec2(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class3 = (_temp2 = _class4 = class ProfileEditorPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    if (!this.profileEditorStore) {
      this.rootStore.createProfileEditor();
    }
  }
  /**@return RootStore*/


  get rootStore() {
    return this.props.rootStore;
  }
  /**@return ProfileEditorStore*/


  get profileEditorStore() {
    return this.rootStore.profileEditor;
  }

  componentWillUnmount() {
    this.rootStore.destroyProfileEditor();
  }

  render() {
    const profile = this.profileEditorStore.getProfileById(this.props.id);

    if (profile) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProfileEditor_ProfileEditorProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {
        profileEditorStore: this.profileEditorStore,
        profileEditorProfileStore: profile
      });
    } else if (this.props.id) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        to: `/profileEditor`
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProfileEditor_ProfileEditorProfiles__WEBPACK_IMPORTED_MODULE_7__["default"], {
        profileEditorStore: this.profileEditorStore
      });
    }
  }

}, _defineProperty(_class4, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
}), _temp2)) || _class3) || _class3);
/* harmony default export */ __webpack_exports__["default"] = (ProfileEditor);

/***/ }),

/***/ 631:
/*!****************************************************************!*\
  !*** ./src/components/ProfileEditor/ProfileEditorProfiles.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 298);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/getLogger */ 8);
/* harmony import */ var _tools_getTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tools/getTitle */ 440);
var _class, _class2, _temp, _class3, _class4, _temp2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const uuid = __webpack_require__(/*! uuid/v4 */ 65);

const Sortable = __webpack_require__(/*! sortablejs */ 600);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_4__["default"])('ProfileEditorProfiles');

let ProfileEditorProfiles = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class = (_temp = _class2 = class ProfileEditorProfiles extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "sortable", null);

    _defineProperty(this, "refProfiles", node => {
      if (!node) {
        if (this.sortable) {
          this.sortable.destroy();
          this.sortable = null;
        }
      } else if (!this.sortable) {
        this.sortable = new Sortable(node, {
          group: 'profiles',
          handle: '.item__move',
          draggable: '.item',
          animation: 150,
          onStart: () => {
            node.classList.add('sorting');
          },
          onEnd: e => {
            node.classList.remove('sorting');
            const itemNode = e.item;
            const prevNode = itemNode.previousElementSibling;
            const nextNode = itemNode.nextElementSibling;
            const id = itemNode.dataset.id;
            const prevId = prevNode && prevNode.dataset.id;
            const nextId = nextNode && nextNode.dataset.id;
            this.profileEditorStore.moveProfile(id, prevId, nextId);
          }
        });
      }
    });

    _defineProperty(this, "handleSave", e => {
      e.preventDefault();
      this.profileEditorStore.save();
    });

    _defineProperty(this, "handleCreate", e => {
      e.preventDefault();
      const id = uuid();
      this.profileEditorStore.createProfile(id);
      this.props.history.push(`/profileEditor/${id}`);
    });
  }

  componentDidMount() {
    document.title = Object(_tools_getTitle__WEBPACK_IMPORTED_MODULE_5__["default"])('Edit profiles');

    if (window.ga) {
      window.ga('send', 'pageview', {
        page: location.href,
        title: document.title
      });
    }
  }
  /**@return ProfileEditorStore*/


  get profileEditorStore() {
    return this.props.profileEditorStore;
  }

  render() {
    const profiles = this.profileEditorStore.profiles.map(profileEditorProfileStore => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileEditorProfileItem, {
        key: profileEditorProfileStore.id,
        profileEditorStore: this.profileEditorStore,
        profileEditorProfileStore: profileEditorProfileStore
      });
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager__body"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager__sub_header manager__sub_header-profiles"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "manager__new_profile",
      href: "#create",
      onClick: this.handleCreate
    }, chrome.i18n.getMessage('newProfile'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.refProfiles,
      className: "manager__profiles"
    }, profiles), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager__footer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "space"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "button manager__footer__btn",
      href: "#save",
      onClick: this.handleSave
    }, chrome.i18n.getMessage('save')))));
  }

}, _defineProperty(_class2, "propTypes", {
  profileEditorStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}), _temp)) || _class) || _class;

let ProfileEditorProfileItem = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(_class3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class3 = (_temp2 = _class4 = class ProfileEditorProfileItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRemove", e => {
      e.preventDefault();
      this.profileEditorStore.removeProfileById(this.profileEditorProfileStore.id);
    });

    _defineProperty(this, "handleClick", e => {
      if (e.target === this.item || e.target.classList.contains('item__name')) {
        this.props.history.push(`/profileEditor/${this.profileEditorProfileStore.id}`);
      }
    });

    _defineProperty(this, "item", null);

    _defineProperty(this, "refItem", element => {
      this.item = element;
    });
  }

  /**@return ProfileEditorStore*/
  get profileEditorStore() {
    return this.props.profileEditorStore;
  }
  /**@return ProfileEditorProfileStore*/


  get profileEditorProfileStore() {
    return this.props.profileEditorProfileStore;
  }

  render() {
    const profileEditorProfileStore = this.profileEditorProfileStore;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.refItem,
      onClick: this.handleClick,
      "data-id": profileEditorProfileStore.id,
      className: "item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__move"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__name"
    }, profileEditorProfileStore.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: `/profileEditor/${profileEditorProfileStore.id}`,
      className: "item__cell item__button button-edit",
      title: chrome.i18n.getMessage('edit')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: this.handleRemove,
      className: "item__cell item__button button-remove",
      href: "#remove",
      title: chrome.i18n.getMessage('delete')
    }));
  }

}, _defineProperty(_class4, "propTypes", {
  profileEditorStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  profileEditorProfileStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}), _temp2)) || _class3) || _class3;

/* harmony default export */ __webpack_exports__["default"] = (ProfileEditorProfiles);

/***/ }),

/***/ 632:
/*!***************************************************************!*\
  !*** ./src/components/ProfileEditor/ProfileEditorProfile.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools/getLogger */ 8);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 298);
/* harmony import */ var _tools_getTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tools/getTitle */ 440);
/* harmony import */ var _TackerStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TackerStore */ 633);
/* harmony import */ var _ProfileEditorTrackerItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileEditorTrackerItem */ 635);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Dialog */ 585);
var _dec, _class, _class2, _temp, _class3, _class4, _temp2, _class5, _class6, _temp3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Sortable = __webpack_require__(/*! sortablejs */ 600);

const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_3__["default"])('ProfileEditorProfile');
let ProfileEditorProfile = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class = (_temp = _class2 = class ProfileEditorProfile extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showOptions: false,
      showStore: false,
      sourcesDialog: false,
      repos: []
    });

    _defineProperty(this, "handleChangeName", () => {
      this.profileEditorProfileStore.setName(this.name.value);
    });

    _defineProperty(this, "name", null);

    _defineProperty(this, "refName", element => {
      this.name = element;
    });

    _defineProperty(this, "handleSearchChange", e => {
      const input = e.currentTarget;
      this.profileEditorProfileStore.setFilterText(input.value);
      this.profileEditorProfileStore.setCategory('all');
    });

    _defineProperty(this, "handleSave", e => {
      e.preventDefault();
      this.profileEditorStore.save();
    });

    _defineProperty(this, "handleShowOptions", e => {
      e.preventDefault();
      this.setState({
        showOptions: !this.state.showOptions
      });
    });

    _defineProperty(this, "handleCategoryClick", type => {
      if (this.state.showStore) {
        this.setState({
          showStore: false
        });
      }

      this.profileEditorProfileStore.setCategory(type);
    });

    _defineProperty(this, "handleStoreClick", () => {
      this.setState({
        showStore: true
      });
    });

    _defineProperty(this, "handleOpenSourcesDialog", e => {
      e.preventDefault();
      this.setState({
        sourcesDialog: true,
        repos: this.optionsStore.options.repositories.slice(0)
      });
    });

    _defineProperty(this, "onCloseSourcesDialog", () => {
      this.setState({
        sourcesDialog: false,
        repos: null
      });
    });

    _defineProperty(this, "handleSourcesSubmit", e => {
      e.preventDefault();
      this.optionsStore.options.setValue('repositories', this.state.repos);
      this.optionsStore.save();
      this.onCloseSourcesDialog();
    });

    _defineProperty(this, "handleSourcesCancel", e => {
      e.preventDefault();
      this.onCloseSourcesDialog();
    });

    _defineProperty(this, "repositoryInput", null);

    _defineProperty(this, "refRepositoryInput", element => {
      this.repositoryInput = element;
    });

    _defineProperty(this, "repositorySelect", null);

    _defineProperty(this, "refRepositorySelect", element => {
      this.repositorySelect = element;
    });

    _defineProperty(this, "handleSourceSelectChange", e => {
      this.repositoryInput.value = this.repositorySelect.value;
    });

    _defineProperty(this, "handlePutRepository", e => {
      e.preventDefault();
      const repos = this.state.repos.slice(0);
      const url = this.repositoryInput.value;

      if (repos.indexOf(url) === -1) {
        repos.push(url);
        this.setState({
          repos
        });
      }
    });

    _defineProperty(this, "handleDeleteRepository", e => {
      e.preventDefault();
      const repos = this.state.repos.slice(0);
      Array.from(this.repositorySelect.selectedOptions).forEach(option => {
        const url = option.value;
        const pos = repos.indexOf(url);

        if (pos !== -1) {
          repos.splice(pos, 1);
        }
      });
      this.setState({
        repos
      });
    });

    _defineProperty(this, "handleSourcesRefresh", e => {
      e.preventDefault();
      this.profileEditorStore.trackerStore.fetch();
    });
  }

  componentDidMount() {
    document.title = Object(_tools_getTitle__WEBPACK_IMPORTED_MODULE_5__["default"])(`Edit profile "${this.profileEditorProfileStore.name}"`);

    if (window.ga) {
      window.ga('send', 'pageview', {
        page: location.href,
        title: document.title
      });
    }
  }

  /**@return ProfileEditorStore*/
  get profileEditorStore() {
    return this.props.profileEditorStore;
  }
  /**@return ProfileEditorProfileStore*/


  get profileEditorProfileStore() {
    return this.props.profileEditorProfileStore;
  }
  /**@return OptionsStore*/


  get optionsStore() {
    return this.props.rootStore.options;
  }

  render() {
    const categories = ['all', 'withoutList', 'selected'].map(type => {
      const isActive = !this.state.showStore && type === this.profileEditorProfileStore.category;
      const count = this.profileEditorProfileStore.getTrackerCountByCategory(type);
      const title = chrome.i18n.getMessage('filter_' + type);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileEditorFilterButton, {
        key: `category-${type}`,
        title: title,
        onClick: this.handleCategoryClick,
        count: count,
        isActive: isActive,
        type: type
      });
    });
    categories.unshift(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileEditorFilterButton, {
      key: `category-${'store'}`,
      title: chrome.i18n.getMessage('external_trackers'),
      onClick: this.handleStoreClick,
      isActive: this.state.showStore,
      type: 'store'
    }));
    let sourcesDialog = null;
    let listControls = [];
    let trackerList = null;

    if (this.state.showStore) {
      trackerList = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TackerStore__WEBPACK_IMPORTED_MODULE_6__["default"], {
        profileEditorStore: this.props.profileEditorStore,
        showOptions: this.state.showOptions
      });
      listControls.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        key: 'sources',
        onClick: this.handleOpenSourcesDialog,
        className: "styled-button"
      }, chrome.i18n.getMessage('sources')));
      listControls.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        key: 'refresh',
        onClick: this.handleSourcesRefresh,
        className: "styled-button refresh-icon left-offset",
        title: chrome.i18n.getMessage('refresh')
      }));

      if (this.state.sourcesDialog) {
        const options = this.state.repos.map(url => {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: url,
            value: url
          }, url);
        });
        sourcesDialog = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Dialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "dialog-repositories",
          onClose: this.onCloseSourcesDialog
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: this.handleSourcesSubmit
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "dialog__label",
          htmlFor: "selectRepoUrls"
        }, chrome.i18n.getMessage('repositories')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          ref: this.refRepositorySelect,
          onChange: this.handleSourceSelectChange,
          id: "selectRepoUrls",
          multiple: true
        }, options)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: this.handleDeleteRepository,
          className: "styled-button",
          type: "button"
        }, chrome.i18n.getMessage('delete'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "dialog__label",
          htmlFor: "repoUrl"
        }, chrome.i18n.getMessage('add_repository')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          ref: this.refRepositoryInput,
          className: "input__input",
          id: "repoUrl",
          type: "text",
          placeholder: "https://..."
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: this.handlePutRepository,
          className: "styled-button",
          type: "button"
        }, chrome.i18n.getMessage('add'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dialog__button_box"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          value: chrome.i18n.getMessage('save'),
          className: "styled-button",
          type: "submit"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          onClick: this.handleSourcesCancel,
          value: chrome.i18n.getMessage('cancel'),
          className: "styled-button",
          type: "button"
        }))));
      }
    } else {
      trackerList = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileEditorTackerList, {
        key: this.profileEditorProfileStore.category,
        profileEditorProfileStore: this.profileEditorProfileStore,
        showOptions: this.state.showOptions
      });
      const showOptionsClassList = ['styled-button view-icon'];

      if (this.state.showOptions) {
        showOptionsClassList.push('pressed');
      }

      listControls.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        key: 'view',
        onClick: this.handleShowOptions,
        className: showOptionsClassList.join(' '),
        title: chrome.i18n.getMessage('advanced_options')
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager__body"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager__sub_header sub_header__profile"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "profile__input"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.refName,
      className: "input__input",
      type: "text",
      defaultValue: this.profileEditorProfileStore.name,
      onChange: this.handleChangeName
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager__sub_header sub_header__filter"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "filter__box"
    }, categories), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "filter__search"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "input__input filter__input",
      type: "text",
      placeholder: chrome.i18n.getMessage('quickSearch'),
      onChange: this.handleSearchChange
    }))), trackerList, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager__footer"
    }, listControls, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "space"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: '/codeMaker',
      target: "_blank",
      className: "button manager__footer__btn"
    }, chrome.i18n.getMessage('createCode')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: '/editor/tracker',
      target: "_blank",
      className: "button manager__footer__btn"
    }, chrome.i18n.getMessage('add')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "styled-button",
      onClick: this.handleSave
    }, chrome.i18n.getMessage('save')))), sourcesDialog);
  }

}, _defineProperty(_class2, "propTypes", {
  profileEditorStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  profileEditorProfileStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
}), _temp)) || _class) || _class);

let ProfileEditorTackerList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class3 = (_temp2 = _class4 = class ProfileEditorTackerList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      trackerIds: []
    });

    _defineProperty(this, "sortable", null);

    _defineProperty(this, "refTrackers", node => {
      if (!node) {
        if (this.sortable) {
          this.sortable.destroy();
          this.sortable = null;
        }
      } else if (!this.sortable) {
        // fix sortable bug with checkbox
        node.getElementsByTagName = ((node, getElementsByTagName) => {
          return tagName => {
            if (tagName === 'input') {
              tagName = 'null-input';
            }

            return getElementsByTagName.call(node, tagName);
          };
        })(node, node.getElementsByTagName);

        const getPrevSelectedTracker = node => {
          node = node.previousElementSibling;

          while (node && !node.classList.contains('item__selected')) {
            node = node.previousElementSibling;
          }

          return node;
        };

        const getNextSelectedTracker = node => {
          node = node.nextElementSibling;

          while (node && !node.classList.contains('item__selected')) {
            node = node.nextElementSibling;
          }

          return node;
        };

        this.sortable = new Sortable(node, {
          group: 'trackers',
          handle: '.item__move',
          draggable: '.item',
          animation: 150,
          onStart: () => {
            node.classList.add('sorting');
          },
          onEnd: e => {
            node.classList.remove('sorting');
            const itemNode = e.item;
            const prevNode = getPrevSelectedTracker(itemNode);
            const nextNode = getNextSelectedTracker(itemNode);
            const id = itemNode.dataset.id;
            const prevId = prevNode && prevNode.dataset.id;
            const nextId = nextNode && nextNode.dataset.id;
            this.profileEditorProfileStore.moveTracker(id, prevId, nextId);
          }
        });
      }
    });
  }

  /**@return ProfileEditorProfileStore*/
  get profileEditorProfileStore() {
    return this.props.profileEditorProfileStore;
  }

  render() {
    const trackerIds = this.state.trackerIds;
    const removedIds = trackerIds.slice(0);
    const checkedTrackerIds = this.profileEditorProfileStore.selectedTrackerIds;
    const checkedTrackers = [];
    const uncheckedTrackers = [];

    const appendTracker = trackerStore => {
      const checked = checkedTrackerIds.indexOf(trackerStore.id) !== -1;
      const item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProfileEditorTrackerItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: `tracker-${trackerStore.id}`,
        profileEditorProfileStore: this.profileEditorProfileStore,
        trackerStore: trackerStore,
        showOptions: this.props.showOptions,
        checked: checked
      });

      if (checked) {
        checkedTrackers.push(item);
      } else {
        uncheckedTrackers.push(item);
      }
    };

    this.profileEditorProfileStore.categoryTrackers.forEach(trackerStore => {
      const id = trackerStore.id;
      const pos = removedIds.indexOf(id);

      if (pos !== -1) {
        removedIds.splice(pos, 1);
      }

      if (trackerIds.indexOf(id) === -1) {
        trackerIds.push(id);
      }

      appendTracker(trackerStore);
    });

    if (!this.profileEditorProfileStore.filterText) {
      removedIds.forEach(id => {
        const trackerStore = this.profileEditorProfileStore.getTrackerById(id);

        if (trackerStore) {
          appendTracker(trackerStore);
        }
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.refTrackers,
      className: "manager__trackers"
    }, checkedTrackers.concat(uncheckedTrackers));
  }

}, _defineProperty(_class4, "propTypes", {
  profileEditorProfileStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  showOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
}), _temp2)) || _class3;

let ProfileEditorFilterButton = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class5 = (_temp3 = _class6 = class ProfileEditorFilterButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();
      this.props.onClick(this.props.type);
    });
  }

  render() {
    const type = this.props.type;
    const classList = ['filter__item'];

    if (this.props.isActive) {
      classList.push('item__selected');
    }

    let count = null;

    if (typeof this.props.count === 'number') {
      count = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "item__count"
      }, this.props.count);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: classList.join(' '),
      onClick: this.handleClick,
      href: '#'
    }, this.props.title, ' ', count);
  }

}, _defineProperty(_class6, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  count: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
}), _temp3)) || _class5;

/* harmony default export */ __webpack_exports__["default"] = (ProfileEditorProfile);

/***/ }),

/***/ 633:
/*!******************************************************!*\
  !*** ./src/components/ProfileEditor/TackerStore.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TackerStoreItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TackerStoreItem */ 634);
var _class, _class2, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let TackerStore = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class = (_temp = _class2 = class TackerStore extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  /**@return ProfileEditorStore*/
  get profileEditorStore() {
    return this.props.profileEditorStore;
  }

  componentDidMount() {
    if (!this.profileEditorStore.trackerStore) {
      this.profileEditorStore.createTrackerStore();
      this.profileEditorStore.trackerStore.fetch();
    }
  }

  render() {
    let items = null;

    if (this.profileEditorStore.trackerStore) {
      if (this.profileEditorStore.trackerStore.state !== 'done') {
        return `Loading: ${this.profileEditorStore.trackerStore.state}`;
      }

      items = this.profileEditorStore.trackerStore.results.map(module => {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TackerStoreItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: module.download_url,
          module: module
        });
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "manager__trackers"
    }, items);
  }

}, _defineProperty(_class2, "propTypes", {
  profileEditorStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  showOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
}), _temp)) || _class;

/* harmony default export */ __webpack_exports__["default"] = (TackerStore);

/***/ }),

/***/ 634:
/*!**********************************************************!*\
  !*** ./src/components/ProfileEditor/TackerStoreItem.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_blank_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/blank.svg */ 330);
/* harmony import */ var _assets_img_blank_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_blank_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_getIconFromMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/getIconFromMeta */ 43);
var _class, _class2, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







let TackerStoreItem = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class = (_temp = _class2 = class TackerStoreItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      installed: false
    });

    _defineProperty(this, "handleInstall", e => {
      e.preventDefault();
      this.module.save();
      this.setState({
        installed: true
      });
    });

    _defineProperty(this, "handleUninstall", e => {
      e.preventDefault();
      this.module.deleteTacker();
      this.setState({
        installed: false
      });
    });

    _defineProperty(this, "handleFetch", e => {
      e.preventDefault();
      this.module.fetch();
    });

    _defineProperty(this, "handleItemClick", e => {
      this.handleFetch(e);
    });
  }

  /**@return {TrackerStoreResultStore}*/
  get module() {
    return this.props.module;
  }

  render() {
    const tracker = this.module;
    let fetchBtn = null;
    let installBtn = null;
    let supportBtn = null;
    let homepageBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: tracker.html_url,
      className: "item__button button-home",
      target: "_blank"
    });
    let name = tracker.name;
    let icon = _assets_img_blank_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
    let version = null;
    let description = null;
    let author = null;
    let handleClick = null;

    if (tracker.meta) {
      name = tracker.meta.name || name;
      icon = Object(_tools_getIconFromMeta__WEBPACK_IMPORTED_MODULE_4__["default"])(tracker.meta) || icon;
      version = tracker.meta.version;

      if (tracker.meta.description) {
        description = tracker.meta.description;
      }

      if (tracker.meta.supportURL) {
        supportBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: tracker.meta.supportURL,
          className: "item__button button-support",
          target: "_blank"
        });
      }

      if (tracker.meta.author) {
        author = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "item__cell item__author"
        }, tracker.meta.author);
      }

      if (tracker.hasTracker || this.state.installed) {
        installBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: this.handleUninstall,
          className: "item__button button-remove",
          href: "#uninstall",
          title: chrome.i18n.getMessage('delete')
        });
      } else {
        installBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: this.handleInstall,
          className: "item__button button-plus",
          href: "#install",
          title: chrome.i18n.getMessage('add')
        });
      }
    } else {
      fetchBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: this.handleFetch,
        className: "item__button button-info",
        href: "#fetch",
        title: chrome.i18n.getMessage('fetchMeta')
      });
      handleClick = this.handleItemClick;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__cell item__icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: icon,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: handleClick,
      className: "item__cell item__name"
    }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: handleClick,
      className: "item__cell item__desc"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "desc"
    }, description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__cell item__version"
    }, version), author, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__cell item__actions"
    }, fetchBtn, installBtn, supportBtn, homepageBtn));
  }

}, _defineProperty(_class2, "propTypes", {
  module: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
}), _temp)) || _class;

/* harmony default export */ __webpack_exports__["default"] = (TackerStoreItem);

/***/ }),

/***/ 635:
/*!*******************************************************************!*\
  !*** ./src/components/ProfileEditor/ProfileEditorTrackerItem.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ 112);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 97);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_blank_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/blank.svg */ 330);
/* harmony import */ var _assets_img_blank_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_blank_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 298);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tools/getLogger */ 8);
var _dec, _class, _class2, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_5__["default"])('ProfileEditorTrackerItem');
let ProfileEditorTrackerItem = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["inject"])('rootStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(_class = (_temp = _class2 = class ProfileEditorTrackerItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChecked", () => {
      if (this.checkbox.checked) {
        this.profileEditorProfileStore.addTracker(this.trackerStore.id);
      } else {
        this.profileEditorProfileStore.removeTracker(this.trackerStore.id);
      }
    });

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();
      this.checkbox.checked = !this.checkbox.checked;
      this.handleChecked();
    });

    _defineProperty(this, "handleRemove", e => {
      e.preventDefault();
      this.trackersStore.deleteTracker(this.trackerStore.id);
      this.trackersStore.saveTrackers();
    });

    _defineProperty(this, "checkbox", null);

    _defineProperty(this, "refCheckbox", element => {
      this.checkbox = element;
    });

    _defineProperty(this, "handleUpdate", e => {
      e.preventDefault();
      this.trackerStore.update();
    });

    _defineProperty(this, "stopPropagation", e => {
      e.stopPropagation();
    });

    _defineProperty(this, "handleProxyChange", e => {
      this.profileTrackerStore.options.setEnableProxy(this.enableProxy.checked);
    });

    _defineProperty(this, "enableProxy", null);

    _defineProperty(this, "refEnableProxy", element => {
      this.enableProxy = element;
    });
  }

  /**@return RootStore*/
  get rootStore() {
    return this.props.rootStore;
  }
  /**@return TrackersStore*/


  get trackersStore() {
    return this.rootStore.trackers;
  }
  /**@return ProfileEditorProfileStore*/


  get profileEditorProfileStore() {
    return this.props.profileEditorProfileStore;
  }
  /**@return {ProfileEditorProfileTrackerStore|TrackerStore}*/


  get trackerStore() {
    return this.props.trackerStore;
  }
  /**@return ProfileEditorProfileTrackerStore*/


  get profileTrackerStore() {
    return this.props.profileEditorProfileStore.getProfileTracker(this.trackerStore.id);
  }

  render() {
    const tracker = this.trackerStore;
    const checked = this.props.checked;
    const classList = ['item'];

    if (checked) {
      classList.push('item__selected');
    }

    let updateBtn = null;
    let supportBtn = null;
    let homepageBtn = null;
    let deleteBtn = null;
    let author = null;
    let icon = tracker.getIconUrl() || _assets_img_blank_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
    const name = tracker.meta.name || tracker.id;
    let version = tracker.meta.version;

    if (tracker.updateState === 'pending') {
      version = '...';
    }

    if (tracker.meta.supportURL) {
      supportBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: tracker.meta.supportURL,
        className: "item__button button-support",
        target: "_blank"
      });
    }

    if (tracker.meta.updateURL || tracker.meta.downloadURL) {
      updateBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: this.handleUpdate,
        className: "item__button button-update",
        href: "#update",
        title: chrome.i18n.getMessage('update')
      });
    }

    if (tracker.meta.homepageURL) {
      homepageBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: tracker.meta.homepageURL,
        className: "item__button button-home",
        target: "_blank"
      });
    }

    if (tracker.meta.author) {
      author = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item__cell item__author"
      }, tracker.meta.author);
    }

    if (!tracker.isEditorProfileTrackerStore) {
      deleteBtn = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: this.handleRemove,
        className: "item__button button-remove",
        href: "#remove",
        title: chrome.i18n.getMessage('delete')
      });
    }

    const optionList = [];

    if (this.props.showOptions) {
      if (checked && this.profileTrackerStore) {
        optionList.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: 'enableProxy',
          className: "option__item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          ref: this.refEnableProxy,
          defaultChecked: this.profileTrackerStore.options.enableProxy,
          onChange: this.handleProxyChange,
          type: "checkbox"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, chrome.i18n.getMessage('enableProxy')))));
      }
    }

    let options = null;

    if (optionList.length) {
      options = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: this.stopPropagation,
        className: "options"
      }, optionList);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classList.join(' '),
      "data-id": tracker.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__cell item__move"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__cell item__checkbox"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.refCheckbox,
      onChange: this.handleChecked,
      type: "checkbox",
      defaultChecked: checked
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__cell item__icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: icon,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "item__cell item__name"
    }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "item__cell item__desc"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "desc"
    }, tracker.meta.description || null), options), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__cell item__version"
    }, version), author, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item__cell item__actions"
    }, updateBtn, supportBtn, homepageBtn, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: `/editor/tracker/${tracker.id}`,
      className: "item__cell item__button button-edit",
      target: "_blank",
      title: chrome.i18n.getMessage('edit')
    }), deleteBtn));
  }

}, _defineProperty(_class2, "propTypes", {
  rootStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  profileEditorProfileStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  trackerStore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  showOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
}), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (ProfileEditorTrackerItem);

/***/ })

}]);
//# sourceMappingURL=chunk-24.js.map