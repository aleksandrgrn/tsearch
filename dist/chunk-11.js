(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[11],{

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

/***/ }),

/***/ 72:
/*!*************************************************************!*\
  !*** ./node_modules/json-stringify-pretty-compact/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: This regex matches even invalid JSON strings, but since we’re
// working on the output of `JSON.stringify` we know that only valid strings
// are present (unless the user supplied a weird `options.indent` but in
// that case we don’t care since the output would be invalid anyway).
var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,]/g;

module.exports = function stringify(passedObj, options) {
  var indent, maxLength, replacer;

  options = options || {};
  indent = JSON.stringify(
    [1],
    undefined,
    options.indent === undefined ? 2 : options.indent
  ).slice(2, -3);
  maxLength =
    indent === ""
      ? Infinity
      : options.maxLength === undefined
      ? 80
      : options.maxLength;
  replacer = options.replacer;

  return (function _stringify(obj, currentIndent, reserved) {
    // prettier-ignore
    var end, index, items, key, keyPart, keys, length, nextIndent, prettified, start, string, value;

    if (obj && typeof obj.toJSON === "function") {
      obj = obj.toJSON();
    }

    string = JSON.stringify(obj, replacer);

    if (string === undefined) {
      return string;
    }

    length = maxLength - currentIndent.length - reserved;

    if (string.length <= length) {
      prettified = string.replace(stringOrChar, function(match, stringLiteral) {
        return stringLiteral || match + " ";
      });
      if (prettified.length <= length) {
        return prettified;
      }
    }

    if (replacer != null) {
      obj = JSON.parse(string);
      replacer = undefined;
    }

    if (typeof obj === "object" && obj !== null) {
      nextIndent = currentIndent + indent;
      items = [];
      index = 0;

      if (Array.isArray(obj)) {
        start = "[";
        end = "]";
        length = obj.length;
        for (; index < length; index++) {
          items.push(
            _stringify(obj[index], nextIndent, index === length - 1 ? 0 : 1) ||
              "null"
          );
        }
      } else {
        start = "{";
        end = "}";
        keys = Object.keys(obj);
        length = keys.length;
        for (; index < length; index++) {
          key = keys[index];
          keyPart = JSON.stringify(key) + ": ";
          value = _stringify(
            obj[key],
            nextIndent,
            keyPart.length + (index === length - 1 ? 0 : 1)
          );
          if (value !== undefined) {
            items.push(keyPart + value);
          }
        }
      }

      if (items.length > 0) {
        return [start, indent + items.join(",\n" + nextIndent), end].join(
          "\n" + currentIndent
        );
      }
    }

    return string;
  })(passedObj, "", 0);
};


/***/ })

}]);
//# sourceMappingURL=chunk-11.js.map