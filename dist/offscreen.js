/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
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

/***/ 24:
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

/***/ 25:
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

/***/ 26:
/*!*************************************************!*\
  !*** ./node_modules/deserialize-error/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var deserializeError = __webpack_require__(/*! ./lib/ */ 27).default
module.exports = deserializeError


/***/ }),

/***/ 27:
/*!*****************************************************!*\
  !*** ./node_modules/deserialize-error/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol?'symbol':typeof obj};exports.default=deserializeError;exports.isSerializedError=isSerializedError;function deserializeError(obj){if(!isSerializedError(obj))return obj;return Object.assign(new Error,{stack:undefined},obj)}function isSerializedError(obj){return obj&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object'&&typeof obj.name==='string'&&typeof obj.message==='string'}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZXNlcmlhbGl6ZUVycm9yIiwiaXNTZXJpYWxpemVkRXJyb3IiLCJvYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJFcnJvciIsInN0YWNrIiwidW5kZWZpbmVkIiwibmFtZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJxU0FBd0JBLGdCLFNBS1JDLGlCLENBQUFBLGlCLENBTEQsUUFBU0QsaUJBQVQsQ0FBMkJFLEdBQTNCLENBQWdDLENBQzdDLEdBQUksQ0FBQ0Qsa0JBQWtCQyxHQUFsQixDQUFMLENBQTZCLE1BQU9BLElBQVAsQ0FDN0IsTUFBT0MsUUFBT0MsTUFBUCxDQUFjLEdBQUlDLE1BQWxCLENBQTJCLENBQUNDLE1BQU9DLFNBQVIsQ0FBM0IsQ0FBK0NMLEdBQS9DLENBQ1IsQ0FFTSxRQUFTRCxrQkFBVCxDQUE0QkMsR0FBNUIsQ0FBaUMsQ0FDdEMsTUFBT0EsTUFDTCxPQUFPQSxJQUFQLG1DQUFPQSxHQUFQLEtBQWUsUUFEVixFQUVMLE1BQU9BLEtBQUlNLElBQVgsR0FBb0IsUUFGZixFQUdMLE1BQU9OLEtBQUlPLE9BQVgsR0FBdUIsUUFDMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9yIChvYmopIHtcbiAgaWYgKCFpc1NlcmlhbGl6ZWRFcnJvcihvYmopKSByZXR1cm4gb2JqXG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcigpLCB7c3RhY2s6IHVuZGVmaW5lZH0sIG9iailcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2VyaWFsaXplZEVycm9yIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJlxuICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iai5uYW1lID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBvYmoubWVzc2FnZSA9PT0gJ3N0cmluZydcbn1cbiJdfQ==

/***/ }),

/***/ 28:
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

/***/ 29:
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

/***/ 30:
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ 31);
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ 32);


/***/ }),

/***/ 31:
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

/***/ 32:
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

/***/ 73:
/*!********************************!*\
  !*** ./src/offscreen/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_frameWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/frameWorker */ 23);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/getLogger */ 8);


const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_1__["default"])('offscreen');
const workers = new Map();
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.target !== 'offscreen') return;
  handleMessage(msg).then(result => {
    sendResponse({
      result
    });
  }).catch(err => {
    sendResponse({
      error: err.message || err.toString()
    });
  });
  return true; // Keep channel open for async response
});

async function handleMessage(msg) {
  switch (msg.action) {
    case 'initWorker':
      {
        const {
          workerId,
          query
        } = msg;

        if (workers.has(workerId)) {
          return;
        }

        logger.debug('initWorker', workerId);

        const createProxy = (path = []) => {
          return new Proxy(() => {}, {
            get: (target, prop) => {
              return createProxy([...path, prop]);
            },
            apply: (target, thisArg, args) => {
              const fn = path.join('.');
              return new Promise((resolve, reject) => {
                chrome.runtime.sendMessage({
                  target: 'background',
                  action: 'workerAction',
                  workerId: workerId,
                  fn: fn,
                  args: args
                }, response => {
                  if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                  }

                  if (!response) {
                    return reject(new Error('Empty response from background'));
                  }

                  if (response.error) {
                    return reject(new Error(response.error));
                  }

                  resolve(response.result);
                });
              });
            }
          });
        };

        const actions = createProxy();
        const worker = new _tools_frameWorker__WEBPACK_IMPORTED_MODULE_0__["default"](query, actions);
        workers.set(workerId, worker);
        return true;
      }

    case 'callFn':
      {
        const {
          workerId,
          event,
          args
        } = msg;
        const worker = workers.get(workerId);

        if (!worker) {
          throw new Error(`Worker ${workerId} not found`);
        }

        return worker.callFn(event, args);
      }

    case 'destroyWorker':
      {
        const {
          workerId
        } = msg;
        const worker = workers.get(workerId);

        if (worker) {
          worker.destroy();
          workers.delete(workerId);
        }

        return true;
      }

    default:
      throw new Error(`Unknown action ${msg.action}`);
  }
} // Keep-alive mechanism for offscreen document


setInterval(() => {// Just a heartbeat if needed, but for offscreen docs created with specific reasoning, they should stay alive as long as SW is alive or until 30s of inactivity? 
  // Actually offscreen docs have a lifetime managed by the creating context.
  // We should be fine for now.
}, 10000);

/***/ }),

/***/ 8:
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

/***/ })

/******/ });
//# sourceMappingURL=offscreen.js.map