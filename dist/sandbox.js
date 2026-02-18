/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk-" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = self["webpackJsonp"] = self["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 74:
/*!******************************!*\
  !*** ./src/sandbox/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_getLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/getLogger */ 8);
/* harmony import */ var _tools_transport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/transport */ 24);
/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseApi */ 75);



const logger = Object(_tools_getLogger__WEBPACK_IMPORTED_MODULE_0__["default"])('sandbox');

const altRequire = modules => {
  const promiseList = [];

  if (modules.indexOf('jquery') !== -1) {
    promiseList.push(__webpack_require__.e(/*! import() */ 16).then(__webpack_require__.t.bind(null, /*! jquery/dist/jquery.slim */ 525, 7)).then(jQuery => {
      window.$ = window.jQuery = jQuery.default;
    }));
  }

  if (modules.indexOf('sizzle') !== -1) {
    promiseList.push(__webpack_require__.e(/*! import() */ 17).then(__webpack_require__.t.bind(null, /*! sizzle */ 526, 7)).then(sizzle => {
      window.sizzle = sizzle.default;
    }));
  }

  if (modules.indexOf('moment') !== -1) {
    promiseList.push(Promise.all(/*! import() */[__webpack_require__.e(13), __webpack_require__.e(14)]).then(__webpack_require__.t.bind(null, /*! moment */ 122, 7)).then(moment => {
      window.moment = moment.default;
    }));
  }

  if (modules.indexOf('exKit') !== -1) {
    promiseList.push(Promise.all(/*! import() */[__webpack_require__.e(17), __webpack_require__.e(12), __webpack_require__.e(19), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./exKit */ 527)).then(module => {
      window.exKit = module.exKit;
      window.API_exKit = module.API_exKit;
    }));
  }

  if (modules.indexOf('datejs') !== -1) {
    promiseList.push(__webpack_require__.e(/*! import() */ 20).then(__webpack_require__.t.bind(null, /*! date.js */ 534, 7)).then(module => {
      window.datejs = module.default;
    }));
  }

  if (modules.indexOf('fecha') !== -1) {
    promiseList.push(__webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! fecha */ 546)).then(module => {
      window.fecha = module.default;
    }));
  }

  if (modules.indexOf('filesizeParser') !== -1) {
    promiseList.push(__webpack_require__.e(/*! import() */ 22).then(__webpack_require__.t.bind(null, /*! filesize-parser */ 547, 7)).then(module => {
      window.filesizeParser = module.default;
    }));
  }

  if (modules.indexOf('crypto-js') !== -1) {
    promiseList.push(__webpack_require__.e(/*! import() */ 23).then(__webpack_require__.t.bind(null, /*! crypto-js */ 548, 7)).then(module => {
      window.CryptoJS = module.default || module;
    }));
  }

  return Promise.all(promiseList);
};

const runCode = code => {
  return Promise.resolve().then(() => {
    let promiseList = [];

    window.API_async = fn => {
      const promise = Promise.resolve().then(() => {
        return fn();
      });
      promiseList && promiseList.push(promise);
      return promise;
    };

    new Function(code)();
    const result = Promise.all(promiseList).then(() => null);
    promiseList = null;
    return result;
  });
};

const api = {
  info: null,
  init: function (code, requireList, info) {
    api.info = info;
    return altRequire(requireList).then(() => {
      return runCode(code);
    }).catch(err => {
      logger.error('Init error', err);
      throw err;
    });
  },
  events: {}
};
const transport = new _tools_transport__WEBPACK_IMPORTED_MODULE_1__["default"]({
  postMessage: function (msg) {
    parent.postMessage(msg, '*');
  },
  onMessage: function (cb) {
    window.onmessage = function (e) {
      if (e.source === parent) {
        cb(e.data);
      }
    };
  }
}, api);
const baseApi = new _baseApi__WEBPACK_IMPORTED_MODULE_2__["default"](api, transport);
Object.assign(window, baseApi.public);

/***/ }),

/***/ 75:
/*!********************************!*\
  !*** ./src/sandbox/baseApi.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_exKitRequestOptionsNormalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/exKitRequestOptionsNormalize */ 76);
/* harmony import */ var _tools_exKitGetDoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/exKitGetDoc */ 78);
/* harmony import */ var _tools_exKitNormalizeUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/exKitNormalizeUrl */ 79);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class BaseApi {
  constructor(api, transport) {
    _defineProperty(this, "event", (name, callback) => {
      this.api.events[name] = function (...args) {
        return Promise.resolve().then(function () {
          return callback(...args);
        });
      };
    });

    _defineProperty(this, "getInfo", () => {
      return this.api.info;
    });

    _defineProperty(this, "request", rawOptions => {
      const {
        options,
        toJson
      } = Object(_tools_exKitRequestOptionsNormalize__WEBPACK_IMPORTED_MODULE_0__["default"])(rawOptions);
      return this.transport.callFn('request', [options]).then(response => {
        if (toJson) {
          response.body = JSON.parse(response.body);
        }

        return response;
      });
    });

    this.api = api;
    this.transport = transport;
    this.public = {
      API_getDom: getDom,
      API_sanitizeHtml: noop,
      API_deSanitizeHtml: noop,
      API_normalizeUrl: _tools_exKitNormalizeUrl__WEBPACK_IMPORTED_MODULE_2__["default"],
      API_getDoc: _tools_exKitGetDoc__WEBPACK_IMPORTED_MODULE_1__["default"],
      API_event: this.event,
      API_getInfo: this.getInfo,
      API_request: this.request
    };
  }

}
/**
 * @deprecated
 */


const getDom = html => {
  return new DOMParser().parseFromString(html, 'text/html');
};
/**
 * @deprecated
 */


const noop = a => a;

/* harmony default export */ __webpack_exports__["default"] = (BaseApi);

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

/***/ }),

/***/ 77:
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ 78:
/*!**********************************!*\
  !*** ./src/tools/exKitGetDoc.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param {string} html
 * @param {string} location
 * @returns {Document}
 */
const exKitGetDoc = (html, location) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const base = doc.head.querySelector('base');

  if (!base) {
    const base = doc.createElement('base');
    base.href = location;
    doc.head.appendChild(base);
  }

  return doc;
};

/* harmony default export */ __webpack_exports__["default"] = (exKitGetDoc);

/***/ }),

/***/ 79:
/*!****************************************!*\
  !*** ./src/tools/exKitNormalizeUrl.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class LinkNormalizer {
  constructor(location) {
    this.doc = document.implementation.createHTMLDocument('');
    const base = this.doc.createElement('base');
    base.href = location;
    this.doc.head.appendChild(base);
    this.link = document.createElement('a');
    this.doc.body.appendChild(this.link);
  }

  getUrl(href) {
    this.link.setAttribute('href', href);
    return this.link.href;
  }

}

const linkNormalizerCache = {};
/**
 * @param {string} location
 * @param {string} link
 * @returns {string}
 */

const exKitNormalizeUrl = (location, link) => {
  if (/^[^:\/]+:/.test(link)) {
    return link;
  }

  let linkNormalizer = linkNormalizerCache[location];

  if (!linkNormalizer) {
    linkNormalizer = linkNormalizerCache[location] = new LinkNormalizer(location);
  }

  return linkNormalizer.getUrl(link);
};

/* harmony default export */ __webpack_exports__["default"] = (exKitNormalizeUrl);

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
//# sourceMappingURL=sandbox.js.map