(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],2:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],3:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],4:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],5:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],6:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],7:[function(require,module,exports){
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
},{}],8:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],9:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],10:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;
},{}],11:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],12:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":1,"./iterableToArrayLimit":9,"./nonIterableRest":10}],13:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":2,"./iterableToArray":8,"./nonIterableSpread":11}],14:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],15:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":21}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromBER = fromBER;
exports.compareSchema = compareSchema;
exports.verifySchema = verifySchema;
exports.fromJSON = fromJSON;
exports.RawData = exports.Repeated = exports.Any = exports.Choice = exports.TIME = exports.Duration = exports.DateTime = exports.TimeOfDay = exports.DATE = exports.GeneralizedTime = exports.UTCTime = exports.CharacterString = exports.GeneralString = exports.VisibleString = exports.GraphicString = exports.IA5String = exports.VideotexString = exports.TeletexString = exports.PrintableString = exports.NumericString = exports.UniversalString = exports.BmpString = exports.RelativeObjectIdentifier = exports.Utf8String = exports.ObjectIdentifier = exports.Enumerated = exports.Integer = exports.BitString = exports.OctetString = exports.Null = exports.Set = exports.Sequence = exports.Boolean = exports.EndOfContent = exports.Constructed = exports.Primitive = exports.BaseBlock = exports.ValueBlock = exports.HexBlock = void 0;

var _pvutils = require("pvutils");

/* eslint-disable indent */

/*
 * Copyright (c) 2016-2018, Peculiar Ventures
 * All rights reserved.
 *
 * Author 2016-2018, Yury Strozhevsky <www.strozhevsky.com>.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
 * OF SUCH DAMAGE.
 *
 */
//**************************************************************************************
//**************************************************************************************
//region Declaration of global variables
//**************************************************************************************
const powers2 = [new Uint8Array([1])];
const digitsString = "0123456789"; //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration for "LocalBaseBlock" class
//**************************************************************************************

/**
 * Class used as a base block for all remaining ASN.1 classes
 * @typedef LocalBaseBlock
 * @interface
 * @property {number} blockLength
 * @property {string} error
 * @property {Array.<string>} warnings
 * @property {ArrayBuffer} valueBeforeDecode
 */

class LocalBaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "LocalBaseBlock" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueBeforeDecode]
   */
  constructor(parameters = {}) {
    /**
     * @type {number} blockLength
     */
    this.blockLength = (0, _pvutils.getParametersValue)(parameters, "blockLength", 0);
    /**
     * @type {string} error
     */

    this.error = (0, _pvutils.getParametersValue)(parameters, "error", "");
    /**
     * @type {Array.<string>} warnings
     */

    this.warnings = (0, _pvutils.getParametersValue)(parameters, "warnings", []); //noinspection JSCheckFunctionSignatures

    /**
     * @type {ArrayBuffer} valueBeforeDecode
     */

    if ("valueBeforeDecode" in parameters) this.valueBeforeDecode = parameters.valueBeforeDecode.slice(0);else this.valueBeforeDecode = new ArrayBuffer(0);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "baseBlock";
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
   */


  toJSON() {
    return {
      blockName: this.constructor.blockName(),
      blockLength: this.blockLength,
      error: this.error,
      warnings: this.warnings,
      valueBeforeDecode: (0, _pvutils.bufferToHexCodes)(this.valueBeforeDecode, 0, this.valueBeforeDecode.byteLength)
    };
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Description for "HexBlock" class
//**************************************************************************************

/**
 * Class used as a base block for all remaining ASN.1 classes
 * @extends LocalBaseBlock
 * @typedef HexBlock
 * @property {number} blockLength
 * @property {string} error
 * @property {Array.<string>} warnings
 * @property {ArrayBuffer} valueBeforeDecode
 * @property {boolean} isHexOnly
 * @property {ArrayBuffer} valueHex
 */
//noinspection JSUnusedLocalSymbols


const HexBlock = BaseClass => class LocalHexBlockMixin extends BaseClass {
  //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Constructor for "HexBlock" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters);
    /**
     * @type {boolean}
     */

    this.isHexOnly = (0, _pvutils.getParametersValue)(parameters, "isHexOnly", false);
    /**
     * @type {ArrayBuffer}
     */

    if ("valueHex" in parameters) this.valueHex = parameters.valueHex.slice(0);else this.valueHex = new ArrayBuffer(0);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "hexBlock";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region Basic check for parameters
    //noinspection JSCheckFunctionSignatures
    if ((0, _pvutils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1; //endregion
    //region Getting Uint8Array from ArrayBuffer

    const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength); //endregion
    //region Initial checks

    if (intBuffer.length === 0) {
      this.warnings.push("Zero buffer length");
      return inputOffset;
    } //endregion
    //region Copy input buffer to internal buffer


    this.valueHex = inputBuffer.slice(inputOffset, inputOffset + inputLength); //endregion

    this.blockLength = inputLength;
    return inputOffset + inputLength;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    if (this.isHexOnly !== true) {
      this.error = "Flag \"isHexOnly\" is not set, abort";
      return new ArrayBuffer(0);
    }

    if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength); //noinspection JSCheckFunctionSignatures

    return this.valueHex.slice(0);
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.blockName = this.constructor.blockName();
    object.isHexOnly = this.isHexOnly;
    object.valueHex = (0, _pvutils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
    return object;
  } //**********************************************************************************


}; //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of identification block class
//**************************************************************************************


exports.HexBlock = HexBlock;

class LocalIdentificationBlock extends HexBlock(LocalBaseBlock) {
  //**********************************************************************************

  /**
   * Constructor for "LocalBaseBlock" class
   * @param {Object} [parameters={}]
   * @property {Object} [idBlock]
   */
  constructor(parameters = {}) {
    super();

    if ("idBlock" in parameters) {
      //region Properties from hexBlock class
      this.isHexOnly = (0, _pvutils.getParametersValue)(parameters.idBlock, "isHexOnly", false);
      this.valueHex = (0, _pvutils.getParametersValue)(parameters.idBlock, "valueHex", new ArrayBuffer(0)); //endregion

      this.tagClass = (0, _pvutils.getParametersValue)(parameters.idBlock, "tagClass", -1);
      this.tagNumber = (0, _pvutils.getParametersValue)(parameters.idBlock, "tagNumber", -1);
      this.isConstructed = (0, _pvutils.getParametersValue)(parameters.idBlock, "isConstructed", false);
    } else {
      this.tagClass = -1;
      this.tagNumber = -1;
      this.isConstructed = false;
    }
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "identificationBlock";
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    //region Initial variables
    let firstOctet = 0;
    let retBuf;
    let retView; //endregion

    switch (this.tagClass) {
      case 1:
        firstOctet |= 0x00; // UNIVERSAL

        break;

      case 2:
        firstOctet |= 0x40; // APPLICATION

        break;

      case 3:
        firstOctet |= 0x80; // CONTEXT-SPECIFIC

        break;

      case 4:
        firstOctet |= 0xC0; // PRIVATE

        break;

      default:
        this.error = "Unknown tag class";
        return new ArrayBuffer(0);
    }

    if (this.isConstructed) firstOctet |= 0x20;

    if (this.tagNumber < 31 && !this.isHexOnly) {
      retBuf = new ArrayBuffer(1);
      retView = new Uint8Array(retBuf);

      if (!sizeOnly) {
        let number = this.tagNumber;
        number &= 0x1F;
        firstOctet |= number;
        retView[0] = firstOctet;
      }

      return retBuf;
    }

    if (this.isHexOnly === false) {
      const encodedBuf = (0, _pvutils.utilToBase)(this.tagNumber, 7);
      const encodedView = new Uint8Array(encodedBuf);
      const size = encodedBuf.byteLength;
      retBuf = new ArrayBuffer(size + 1);
      retView = new Uint8Array(retBuf);
      retView[0] = firstOctet | 0x1F;

      if (!sizeOnly) {
        for (let i = 0; i < size - 1; i++) retView[i + 1] = encodedView[i] | 0x80;

        retView[size] = encodedView[size - 1];
      }

      return retBuf;
    }

    retBuf = new ArrayBuffer(this.valueHex.byteLength + 1);
    retView = new Uint8Array(retBuf);
    retView[0] = firstOctet | 0x1F;

    if (sizeOnly === false) {
      const curView = new Uint8Array(this.valueHex);

      for (let i = 0; i < curView.length - 1; i++) retView[i + 1] = curView[i] | 0x80;

      retView[this.valueHex.byteLength] = curView[curView.length - 1];
    }

    return retBuf;
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number}
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region Basic check for parameters
    //noinspection JSCheckFunctionSignatures
    if ((0, _pvutils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1; //endregion
    //region Getting Uint8Array from ArrayBuffer

    const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength); //endregion
    //region Initial checks

    if (intBuffer.length === 0) {
      this.error = "Zero buffer length";
      return -1;
    } //endregion
    //region Find tag class


    const tagClassMask = intBuffer[0] & 0xC0;

    switch (tagClassMask) {
      case 0x00:
        this.tagClass = 1; // UNIVERSAL

        break;

      case 0x40:
        this.tagClass = 2; // APPLICATION

        break;

      case 0x80:
        this.tagClass = 3; // CONTEXT-SPECIFIC

        break;

      case 0xC0:
        this.tagClass = 4; // PRIVATE

        break;

      default:
        this.error = "Unknown tag class";
        return -1;
    } //endregion
    //region Find it's constructed or not


    this.isConstructed = (intBuffer[0] & 0x20) === 0x20; //endregion
    //region Find tag number

    this.isHexOnly = false;
    const tagNumberMask = intBuffer[0] & 0x1F; //region Simple case (tag number < 31)

    if (tagNumberMask !== 0x1F) {
      this.tagNumber = tagNumberMask;
      this.blockLength = 1;
    } //endregion
    //region Tag number bigger or equal to 31
    else {
        let count = 1;
        this.valueHex = new ArrayBuffer(255);
        let tagNumberBufferMaxLength = 255;
        let intTagNumberBuffer = new Uint8Array(this.valueHex); //noinspection JSBitwiseOperatorUsage

        while (intBuffer[count] & 0x80) {
          intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
          count++;

          if (count >= intBuffer.length) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
          } //region In case if tag number length is greater than 255 bytes (rare but possible case)


          if (count === tagNumberBufferMaxLength) {
            tagNumberBufferMaxLength += 255;
            const tempBuffer = new ArrayBuffer(tagNumberBufferMaxLength);
            const tempBufferView = new Uint8Array(tempBuffer);

            for (let i = 0; i < intTagNumberBuffer.length; i++) tempBufferView[i] = intTagNumberBuffer[i];

            this.valueHex = new ArrayBuffer(tagNumberBufferMaxLength);
            intTagNumberBuffer = new Uint8Array(this.valueHex);
          } //endregion

        }

        this.blockLength = count + 1;
        intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F; // Write last byte to buffer
        //region Cut buffer

        const tempBuffer = new ArrayBuffer(count);
        const tempBufferView = new Uint8Array(tempBuffer);

        for (let i = 0; i < count; i++) tempBufferView[i] = intTagNumberBuffer[i];

        this.valueHex = new ArrayBuffer(count);
        intTagNumberBuffer = new Uint8Array(this.valueHex);
        intTagNumberBuffer.set(tempBufferView); //endregion
        //region Try to convert long tag number to short form

        if (this.blockLength <= 9) this.tagNumber = (0, _pvutils.utilFromBase)(intTagNumberBuffer, 7);else {
          this.isHexOnly = true;
          this.warnings.push("Tag too long, represented as hex-coded");
        } //endregion
      } //endregion
    //endregion
    //region Check if constructed encoding was using for primitive type


    if (this.tagClass === 1 && this.isConstructed) {
      switch (this.tagNumber) {
        case 1: // Boolean

        case 2: // REAL

        case 5: // Null

        case 6: // OBJECT IDENTIFIER

        case 9: // REAL

        case 13: // RELATIVE OBJECT IDENTIFIER

        case 14: // Time

        case 23:
        case 24:
        case 31:
        case 32:
        case 33:
        case 34:
          this.error = "Constructed encoding used for primitive type";
          return -1;

        default:
      }
    } //endregion


    return inputOffset + this.blockLength; // Return current offset in input buffer
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {{blockName: string,
   *  tagClass: number,
   *  tagNumber: number,
   *  isConstructed: boolean,
   *  isHexOnly: boolean,
   *  valueHex: ArrayBuffer,
   *  blockLength: number,
   *  error: string, warnings: Array.<string>,
   *  valueBeforeDecode: string}}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.blockName = this.constructor.blockName();
    object.tagClass = this.tagClass;
    object.tagNumber = this.tagNumber;
    object.isConstructed = this.isConstructed;
    return object;
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of length block class
//**************************************************************************************


class LocalLengthBlock extends LocalBaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "LocalLengthBlock" class
   * @param {Object} [parameters={}]
   * @property {Object} [lenBlock]
   */
  constructor(parameters = {}) {
    super();

    if ("lenBlock" in parameters) {
      this.isIndefiniteForm = (0, _pvutils.getParametersValue)(parameters.lenBlock, "isIndefiniteForm", false);
      this.longFormUsed = (0, _pvutils.getParametersValue)(parameters.lenBlock, "longFormUsed", false);
      this.length = (0, _pvutils.getParametersValue)(parameters.lenBlock, "length", 0);
    } else {
      this.isIndefiniteForm = false;
      this.longFormUsed = false;
      this.length = 0;
    }
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "lengthBlock";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number}
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region Basic check for parameters
    //noinspection JSCheckFunctionSignatures
    if ((0, _pvutils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1; //endregion
    //region Getting Uint8Array from ArrayBuffer

    const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength); //endregion
    //region Initial checks

    if (intBuffer.length === 0) {
      this.error = "Zero buffer length";
      return -1;
    }

    if (intBuffer[0] === 0xFF) {
      this.error = "Length block 0xFF is reserved by standard";
      return -1;
    } //endregion
    //region Check for length form type


    this.isIndefiniteForm = intBuffer[0] === 0x80; //endregion
    //region Stop working in case of indefinite length form

    if (this.isIndefiniteForm === true) {
      this.blockLength = 1;
      return inputOffset + this.blockLength;
    } //endregion
    //region Check is long form of length encoding using


    this.longFormUsed = !!(intBuffer[0] & 0x80); //endregion
    //region Stop working in case of short form of length value

    if (this.longFormUsed === false) {
      this.length = intBuffer[0];
      this.blockLength = 1;
      return inputOffset + this.blockLength;
    } //endregion
    //region Calculate length value in case of long form


    const count = intBuffer[0] & 0x7F;

    if (count > 8) // Too big length value
      {
        this.error = "Too big integer";
        return -1;
      }

    if (count + 1 > intBuffer.length) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }

    const lengthBufferView = new Uint8Array(count);

    for (let i = 0; i < count; i++) lengthBufferView[i] = intBuffer[i + 1];

    if (lengthBufferView[count - 1] === 0x00) this.warnings.push("Needlessly long encoded length");
    this.length = (0, _pvutils.utilFromBase)(lengthBufferView, 8);
    if (this.longFormUsed && this.length <= 127) this.warnings.push("Unneccesary usage of long length form");
    this.blockLength = count + 1; //endregion

    return inputOffset + this.blockLength; // Return current offset in input buffer
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    //region Initial variables
    let retBuf;
    let retView; //endregion

    if (this.length > 127) this.longFormUsed = true;

    if (this.isIndefiniteForm) {
      retBuf = new ArrayBuffer(1);

      if (sizeOnly === false) {
        retView = new Uint8Array(retBuf);
        retView[0] = 0x80;
      }

      return retBuf;
    }

    if (this.longFormUsed === true) {
      const encodedBuf = (0, _pvutils.utilToBase)(this.length, 8);

      if (encodedBuf.byteLength > 127) {
        this.error = "Too big length";
        return new ArrayBuffer(0);
      }

      retBuf = new ArrayBuffer(encodedBuf.byteLength + 1);
      if (sizeOnly === true) return retBuf;
      const encodedView = new Uint8Array(encodedBuf);
      retView = new Uint8Array(retBuf);
      retView[0] = encodedBuf.byteLength | 0x80;

      for (let i = 0; i < encodedBuf.byteLength; i++) retView[i + 1] = encodedView[i];

      return retBuf;
    }

    retBuf = new ArrayBuffer(1);

    if (sizeOnly === false) {
      retView = new Uint8Array(retBuf);
      retView[0] = this.length;
    }

    return retBuf;
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.blockName = this.constructor.blockName();
    object.isIndefiniteForm = this.isIndefiniteForm;
    object.longFormUsed = this.longFormUsed;
    object.length = this.length;
    return object;
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of value block class
//**************************************************************************************


class ValueBlock extends LocalBaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "ValueBlock" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "valueBlock";
  } //**********************************************************************************
  //noinspection JSUnusedLocalSymbols,JSUnusedLocalSymbols,JSUnusedLocalSymbols

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number}
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region Throw an exception for a function which needs to be specified in extended classes
    throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\""); //endregion
  } //**********************************************************************************
  //noinspection JSUnusedLocalSymbols

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    //region Throw an exception for a function which needs to be specified in extended classes
    throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\""); //endregion
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of basic ASN.1 block class
//**************************************************************************************


exports.ValueBlock = ValueBlock;

class BaseBlock extends LocalBaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "BaseBlock" class
   * @param {Object} [parameters={}]
   * @property {Object} [primitiveSchema]
   * @property {string} [name]
   * @property {boolean} [optional]
   * @param valueBlockType Type of value block
   */
  constructor(parameters = {}, valueBlockType = ValueBlock) {
    super(parameters);
    if ("name" in parameters) this.name = parameters.name;
    if ("optional" in parameters) this.optional = parameters.optional;
    if ("primitiveSchema" in parameters) this.primitiveSchema = parameters.primitiveSchema;
    this.idBlock = new LocalIdentificationBlock(parameters);
    this.lenBlock = new LocalLengthBlock(parameters);
    this.valueBlock = new valueBlockType(parameters);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "BaseBlock";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number}
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }

    if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
    if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
    if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    let retBuf;
    const idBlockBuf = this.idBlock.toBER(sizeOnly);
    const valueBlockSizeBuf = this.valueBlock.toBER(true);
    this.lenBlock.length = valueBlockSizeBuf.byteLength;
    const lenBlockBuf = this.lenBlock.toBER(sizeOnly);
    retBuf = (0, _pvutils.utilConcatBuf)(idBlockBuf, lenBlockBuf);
    let valueBlockBuf;
    if (sizeOnly === false) valueBlockBuf = this.valueBlock.toBER(sizeOnly);else valueBlockBuf = new ArrayBuffer(this.lenBlock.length);
    retBuf = (0, _pvutils.utilConcatBuf)(retBuf, valueBlockBuf);

    if (this.lenBlock.isIndefiniteForm === true) {
      const indefBuf = new ArrayBuffer(2);

      if (sizeOnly === false) {
        const indefView = new Uint8Array(indefBuf);
        indefView[0] = 0x00;
        indefView[1] = 0x00;
      }

      retBuf = (0, _pvutils.utilConcatBuf)(retBuf, indefBuf);
    }

    return retBuf;
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.idBlock = this.idBlock.toJSON();
    object.lenBlock = this.lenBlock.toJSON();
    object.valueBlock = this.valueBlock.toJSON();
    if ("name" in this) object.name = this.name;
    if ("optional" in this) object.optional = this.optional;
    if ("primitiveSchema" in this) object.primitiveSchema = this.primitiveSchema.toJSON();
    return object;
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of basic block for all PRIMITIVE types
//**************************************************************************************


exports.BaseBlock = BaseBlock;

class LocalPrimitiveValueBlock extends ValueBlock {
  //**********************************************************************************

  /**
   * Constructor for "LocalPrimitiveValueBlock" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueBeforeDecode]
   */
  constructor(parameters = {}) {
    super(parameters); //region Variables from "hexBlock" class

    if ("valueHex" in parameters) this.valueHex = parameters.valueHex.slice(0);else this.valueHex = new ArrayBuffer(0);
    this.isHexOnly = (0, _pvutils.getParametersValue)(parameters, "isHexOnly", true); //endregion
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number}
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region Basic check for parameters
    //noinspection JSCheckFunctionSignatures
    if ((0, _pvutils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1; //endregion
    //region Getting Uint8Array from ArrayBuffer

    const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength); //endregion
    //region Initial checks

    if (intBuffer.length === 0) {
      this.warnings.push("Zero buffer length");
      return inputOffset;
    } //endregion
    //region Copy input buffer into internal buffer


    this.valueHex = new ArrayBuffer(intBuffer.length);
    const valueHexView = new Uint8Array(this.valueHex);

    for (let i = 0; i < intBuffer.length; i++) valueHexView[i] = intBuffer[i]; //endregion


    this.blockLength = inputLength;
    return inputOffset + inputLength;
  } //**********************************************************************************
  //noinspection JSUnusedLocalSymbols

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    return this.valueHex.slice(0);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "PrimitiveValueBlock";
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.valueHex = (0, _pvutils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
    object.isHexOnly = this.isHexOnly;
    return object;
  } //**********************************************************************************


} //**************************************************************************************


class Primitive extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "Primitive" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters, LocalPrimitiveValueBlock);
    this.idBlock.isConstructed = false;
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "PRIMITIVE";
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of basic block for all CONSTRUCTED types
//**************************************************************************************


exports.Primitive = Primitive;

class LocalConstructedValueBlock extends ValueBlock {
  //**********************************************************************************

  /**
   * Constructor for "LocalConstructedValueBlock" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.value = (0, _pvutils.getParametersValue)(parameters, "value", []);
    this.isIndefiniteForm = (0, _pvutils.getParametersValue)(parameters, "isIndefiniteForm", false);
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number}
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region Store initial offset and length
    const initialOffset = inputOffset;
    const initialLength = inputLength; //endregion
    //region Basic check for parameters
    //noinspection JSCheckFunctionSignatures

    if ((0, _pvutils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1; //endregion
    //region Getting Uint8Array from ArrayBuffer

    const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength); //endregion
    //region Initial checks

    if (intBuffer.length === 0) {
      this.warnings.push("Zero buffer length");
      return inputOffset;
    } //endregion
    //region Aux function


    function checkLen(indefiniteLength, length) {
      if (indefiniteLength === true) return 1;
      return length;
    } //endregion


    let currentOffset = inputOffset;

    while (checkLen(this.isIndefiniteForm, inputLength) > 0) {
      const returnObject = LocalFromBER(inputBuffer, currentOffset, inputLength);

      if (returnObject.offset === -1) {
        this.error = returnObject.result.error;
        this.warnings.concat(returnObject.result.warnings);
        return -1;
      }

      currentOffset = returnObject.offset;
      this.blockLength += returnObject.result.blockLength;
      inputLength -= returnObject.result.blockLength;
      this.value.push(returnObject.result);
      if (this.isIndefiniteForm === true && returnObject.result.constructor.blockName() === EndOfContent.blockName()) break;
    }

    if (this.isIndefiniteForm === true) {
      if (this.value[this.value.length - 1].constructor.blockName() === EndOfContent.blockName()) this.value.pop();else this.warnings.push("No EndOfContent block encoded");
    } //region Copy "inputBuffer" to "valueBeforeDecode"


    this.valueBeforeDecode = inputBuffer.slice(initialOffset, initialOffset + initialLength); //endregion

    return currentOffset;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    let retBuf = new ArrayBuffer(0);

    for (let i = 0; i < this.value.length; i++) {
      const valueBuf = this.value[i].toBER(sizeOnly);
      retBuf = (0, _pvutils.utilConcatBuf)(retBuf, valueBuf);
    }

    return retBuf;
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "ConstructedValueBlock";
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.isIndefiniteForm = this.isIndefiniteForm;
    object.value = [];

    for (let i = 0; i < this.value.length; i++) object.value.push(this.value[i].toJSON());

    return object;
  } //**********************************************************************************


} //**************************************************************************************


class Constructed extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "Constructed" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters, LocalConstructedValueBlock);
    this.idBlock.isConstructed = true;
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "CONSTRUCTED";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number}
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }

    if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
    if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
    if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 EndOfContent type class
//**************************************************************************************


exports.Constructed = Constructed;

class LocalEndOfContentValueBlock extends ValueBlock {
  //**********************************************************************************

  /**
   * Constructor for "LocalEndOfContentValueBlock" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
  } //**********************************************************************************
  //noinspection JSUnusedLocalSymbols,JSUnusedLocalSymbols

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number}
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region There is no "value block" for EndOfContent type and we need to return the same offset
    return inputOffset; //endregion
  } //**********************************************************************************
  //noinspection JSUnusedLocalSymbols

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    return new ArrayBuffer(0);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "EndOfContentValueBlock";
  } //**********************************************************************************


} //**************************************************************************************


class EndOfContent extends BaseBlock {
  //**********************************************************************************
  constructor(paramaters = {}) {
    super(paramaters, LocalEndOfContentValueBlock);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 0; // EndOfContent
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "EndOfContent";
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Boolean type class
//**************************************************************************************


exports.EndOfContent = EndOfContent;

class LocalBooleanValueBlock extends ValueBlock {
  //**********************************************************************************

  /**
   * Constructor for "LocalBooleanValueBlock" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.value = (0, _pvutils.getParametersValue)(parameters, "value", false);
    this.isHexOnly = (0, _pvutils.getParametersValue)(parameters, "isHexOnly", false);
    if ("valueHex" in parameters) this.valueHex = parameters.valueHex.slice(0);else {
      this.valueHex = new ArrayBuffer(1);

      if (this.value === true) {
        const view = new Uint8Array(this.valueHex);
        view[0] = 0xFF;
      }
    }
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region Basic check for parameters
    //noinspection JSCheckFunctionSignatures
    if ((0, _pvutils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1; //endregion
    //region Getting Uint8Array from ArrayBuffer

    const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength); //endregion

    if (inputLength > 1) this.warnings.push("Boolean value encoded in more then 1 octet");
    this.isHexOnly = true; //region Copy input buffer to internal array

    this.valueHex = new ArrayBuffer(intBuffer.length);
    const view = new Uint8Array(this.valueHex);

    for (let i = 0; i < intBuffer.length; i++) view[i] = intBuffer[i]; //endregion


    if (_pvutils.utilDecodeTC.call(this) !== 0) this.value = true;else this.value = false;
    this.blockLength = inputLength;
    return inputOffset + inputLength;
  } //**********************************************************************************
  //noinspection JSUnusedLocalSymbols

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    return this.valueHex;
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "BooleanValueBlock";
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.value = this.value;
    object.isHexOnly = this.isHexOnly;
    object.valueHex = (0, _pvutils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
    return object;
  } //**********************************************************************************


} //**************************************************************************************


class Boolean extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "Boolean" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters, LocalBooleanValueBlock);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 1; // Boolean
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "Boolean";
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Sequence and Set type classes
//**************************************************************************************


exports.Boolean = Boolean;

class Sequence extends Constructed {
  //**********************************************************************************

  /**
   * Constructor for "Sequence" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 16; // Sequence
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "Sequence";
  } //**********************************************************************************


} //**************************************************************************************


exports.Sequence = Sequence;

class Set extends Constructed {
  //**********************************************************************************

  /**
   * Constructor for "Set" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 17; // Set
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "Set";
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Null type class
//**************************************************************************************


exports.Set = Set;

class Null extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "Null" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters, LocalBaseBlock); // We will not have a call to "Null value block" because of specified "fromBER" and "toBER" functions

    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 5; // Null
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "Null";
  } //**********************************************************************************
  //noinspection JSUnusedLocalSymbols

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    if (this.lenBlock.length > 0) this.warnings.push("Non-zero length of value block for Null type");
    if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
    if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
    this.blockLength += inputLength;

    if (inputOffset + inputLength > inputBuffer.byteLength) {
      this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
      return -1;
    }

    return inputOffset + inputLength;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    const retBuf = new ArrayBuffer(2);
    if (sizeOnly === true) return retBuf;
    const retView = new Uint8Array(retBuf);
    retView[0] = 0x05;
    retView[1] = 0x00;
    return retBuf;
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 OctetString type class
//**************************************************************************************


exports.Null = Null;

class LocalOctetStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
  //**********************************************************************************

  /**
   * Constructor for "LocalOctetStringValueBlock" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.isConstructed = (0, _pvutils.getParametersValue)(parameters, "isConstructed", false);
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = 0;

    if (this.isConstructed === true) {
      this.isHexOnly = false;
      resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
      if (resultOffset === -1) return resultOffset;

      for (let i = 0; i < this.value.length; i++) {
        const currentBlockName = this.value[i].constructor.blockName();

        if (currentBlockName === EndOfContent.blockName()) {
          if (this.isIndefiniteForm === true) break;else {
            this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
            return -1;
          }
        }

        if (currentBlockName !== OctetString.blockName()) {
          this.error = "OCTET STRING may consists of OCTET STRINGs only";
          return -1;
        }
      }
    } else {
      this.isHexOnly = true;
      resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
      this.blockLength = inputLength;
    }

    return resultOffset;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    if (this.isConstructed === true) return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly);
    let retBuf = new ArrayBuffer(this.valueHex.byteLength);
    if (sizeOnly === true) return retBuf;
    if (this.valueHex.byteLength === 0) return retBuf;
    retBuf = this.valueHex.slice(0);
    return retBuf;
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "OctetStringValueBlock";
  } //**********************************************************************************


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.isConstructed = this.isConstructed;
    object.isHexOnly = this.isHexOnly;
    object.valueHex = (0, _pvutils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
    return object;
  } //**********************************************************************************


} //**************************************************************************************


class OctetString extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "OctetString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters, LocalOctetStringValueBlock);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 4; // OctetString
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    this.valueBlock.isConstructed = this.idBlock.isConstructed;
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm; //region Ability to encode empty OCTET STRING

    if (inputLength === 0) {
      if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
      if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
      return inputOffset;
    } //endregion


    return super.fromBER(inputBuffer, inputOffset, inputLength);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "OctetString";
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Checking that two OCTETSTRINGs are equal
   * @param {OctetString} octetString
   */


  isEqual(octetString) {
    //region Check input type
    if (octetString instanceof OctetString === false) return false; //endregion
    //region Compare two JSON strings

    if (JSON.stringify(this) !== JSON.stringify(octetString)) return false; //endregion

    return true;
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 BitString type class
//**************************************************************************************


exports.OctetString = OctetString;

class LocalBitStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
  //**********************************************************************************

  /**
   * Constructor for "LocalBitStringValueBlock" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.unusedBits = (0, _pvutils.getParametersValue)(parameters, "unusedBits", 0);
    this.isConstructed = (0, _pvutils.getParametersValue)(parameters, "isConstructed", false);
    this.blockLength = this.valueHex.byteLength;
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region Ability to decode zero-length BitString value
    if (inputLength === 0) return inputOffset; //endregion

    let resultOffset = -1; //region If the BISTRING supposed to be a constructed value

    if (this.isConstructed === true) {
      resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
      if (resultOffset === -1) return resultOffset;

      for (let i = 0; i < this.value.length; i++) {
        const currentBlockName = this.value[i].constructor.blockName();

        if (currentBlockName === EndOfContent.blockName()) {
          if (this.isIndefiniteForm === true) break;else {
            this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
            return -1;
          }
        }

        if (currentBlockName !== BitString.blockName()) {
          this.error = "BIT STRING may consists of BIT STRINGs only";
          return -1;
        }

        if (this.unusedBits > 0 && this.value[i].valueBlock.unusedBits > 0) {
          this.error = "Usign of \"unused bits\" inside constructive BIT STRING allowed for least one only";
          return -1;
        }

        this.unusedBits = this.value[i].valueBlock.unusedBits;

        if (this.unusedBits > 7) {
          this.error = "Unused bits for BitString must be in range 0-7";
          return -1;
        }
      }

      return resultOffset;
    } //endregion
    //region If the BitString supposed to be a primitive value
    //region Basic check for parameters
    //noinspection JSCheckFunctionSignatures


    if ((0, _pvutils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1; //endregion

    const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
    this.unusedBits = intBuffer[0];

    if (this.unusedBits > 7) {
      this.error = "Unused bits for BitString must be in range 0-7";
      return -1;
    } //region Copy input buffer to internal buffer


    this.valueHex = new ArrayBuffer(intBuffer.length - 1);
    const view = new Uint8Array(this.valueHex);

    for (let i = 0; i < inputLength - 1; i++) view[i] = intBuffer[i + 1]; //endregion


    this.blockLength = intBuffer.length;
    return inputOffset + inputLength; //endregion
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    if (this.isConstructed === true) return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly);
    if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength + 1);
    if (this.valueHex.byteLength === 0) return new ArrayBuffer(0);
    const curView = new Uint8Array(this.valueHex);
    const retBuf = new ArrayBuffer(this.valueHex.byteLength + 1);
    const retView = new Uint8Array(retBuf);
    retView[0] = this.unusedBits;

    for (let i = 0; i < this.valueHex.byteLength; i++) retView[i + 1] = curView[i];

    return retBuf;
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "BitStringValueBlock";
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.unusedBits = this.unusedBits;
    object.isConstructed = this.isConstructed;
    object.isHexOnly = this.isHexOnly;
    object.valueHex = (0, _pvutils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
    return object;
  } //**********************************************************************************


} //**************************************************************************************


class BitString extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "BitString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters, LocalBitStringValueBlock);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 3; // BitString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "BitString";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    //region Ability to encode empty BitString
    if (inputLength === 0) return inputOffset; //endregion

    this.valueBlock.isConstructed = this.idBlock.isConstructed;
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    return super.fromBER(inputBuffer, inputOffset, inputLength);
  } //**********************************************************************************

  /**
   * Checking that two BITSTRINGs are equal
   * @param {BitString} bitString
   */


  isEqual(bitString) {
    //region Check input type
    if (bitString instanceof BitString === false) return false; //endregion
    //region Compare two JSON strings

    if (JSON.stringify(this) !== JSON.stringify(bitString)) return false; //endregion

    return true;
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Integer type class
//**************************************************************************************

/**
 * @extends ValueBlock
 */


exports.BitString = BitString;

class LocalIntegerValueBlock extends HexBlock(ValueBlock) {
  //**********************************************************************************

  /**
   * Constructor for "LocalIntegerValueBlock" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters);
    if ("value" in parameters) this.valueDec = parameters.value;
  } //**********************************************************************************

  /**
   * Setter for "valueHex"
   * @param {ArrayBuffer} _value
   */


  set valueHex(_value) {
    this._valueHex = _value.slice(0);

    if (_value.byteLength >= 4) {
      this.warnings.push("Too big Integer for decoding, hex only");
      this.isHexOnly = true;
      this._valueDec = 0;
    } else {
      this.isHexOnly = false;
      if (_value.byteLength > 0) this._valueDec = _pvutils.utilDecodeTC.call(this);
    }
  } //**********************************************************************************

  /**
   * Getter for "valueHex"
   * @returns {ArrayBuffer}
   */


  get valueHex() {
    return this._valueHex;
  } //**********************************************************************************

  /**
   * Getter for "valueDec"
   * @param {number} _value
   */


  set valueDec(_value) {
    this._valueDec = _value;
    this.isHexOnly = false;
    this._valueHex = (0, _pvutils.utilEncodeTC)(_value);
  } //**********************************************************************************

  /**
   * Getter for "valueDec"
   * @returns {number}
   */


  get valueDec() {
    return this._valueDec;
  } //**********************************************************************************

  /**
   * Base function for converting block from DER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 DER encoded array
   * @param {!number} inputOffset Offset in ASN.1 DER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @param {number} [expectedLength=0] Expected length of converted "valueHex" buffer
   * @returns {number} Offset after least decoded byte
   */


  fromDER(inputBuffer, inputOffset, inputLength, expectedLength = 0) {
    const offset = this.fromBER(inputBuffer, inputOffset, inputLength);
    if (offset === -1) return offset;
    const view = new Uint8Array(this._valueHex);

    if (view[0] === 0x00 && (view[1] & 0x80) !== 0) {
      const updatedValueHex = new ArrayBuffer(this._valueHex.byteLength - 1);
      const updatedView = new Uint8Array(updatedValueHex);
      updatedView.set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1));
      this._valueHex = updatedValueHex.slice(0);
    } else {
      if (expectedLength !== 0) {
        if (this._valueHex.byteLength < expectedLength) {
          if (expectedLength - this._valueHex.byteLength > 1) expectedLength = this._valueHex.byteLength + 1;
          const updatedValueHex = new ArrayBuffer(expectedLength);
          const updatedView = new Uint8Array(updatedValueHex);
          updatedView.set(view, expectedLength - this._valueHex.byteLength);
          this._valueHex = updatedValueHex.slice(0);
        }
      }
    }

    return offset;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (DER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toDER(sizeOnly = false) {
    const view = new Uint8Array(this._valueHex);

    switch (true) {
      case (view[0] & 0x80) !== 0:
        {
          const updatedValueHex = new ArrayBuffer(this._valueHex.byteLength + 1);
          const updatedView = new Uint8Array(updatedValueHex);
          updatedView[0] = 0x00;
          updatedView.set(view, 1);
          this._valueHex = updatedValueHex.slice(0);
        }
        break;

      case view[0] === 0x00 && (view[1] & 0x80) === 0:
        {
          const updatedValueHex = new ArrayBuffer(this._valueHex.byteLength - 1);
          const updatedView = new Uint8Array(updatedValueHex);
          updatedView.set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1));
          this._valueHex = updatedValueHex.slice(0);
        }
        break;

      default:
    }

    return this.toBER(sizeOnly);
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
    if (resultOffset === -1) return resultOffset;
    this.blockLength = inputLength;
    return inputOffset + inputLength;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    //noinspection JSCheckFunctionSignatures
    return this.valueHex.slice(0);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "IntegerValueBlock";
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.valueDec = this.valueDec;
    return object;
  } //**********************************************************************************

  /**
   * Convert current value to decimal string representation
   */


  toString() {
    //region Aux functions
    function viewAdd(first, second) {
      //region Initial variables
      const c = new Uint8Array([0]);
      let firstView = new Uint8Array(first);
      let secondView = new Uint8Array(second);
      let firstViewCopy = firstView.slice(0);
      const firstViewCopyLength = firstViewCopy.length - 1;
      let secondViewCopy = secondView.slice(0);
      const secondViewCopyLength = secondViewCopy.length - 1;
      let value = 0;
      const max = secondViewCopyLength < firstViewCopyLength ? firstViewCopyLength : secondViewCopyLength;
      let counter = 0; //endregion

      for (let i = max; i >= 0; i--, counter++) {
        switch (true) {
          case counter < secondViewCopy.length:
            value = firstViewCopy[firstViewCopyLength - counter] + secondViewCopy[secondViewCopyLength - counter] + c[0];
            break;

          default:
            value = firstViewCopy[firstViewCopyLength - counter] + c[0];
        }

        c[0] = value / 10;

        switch (true) {
          case counter >= firstViewCopy.length:
            firstViewCopy = (0, _pvutils.utilConcatView)(new Uint8Array([value % 10]), firstViewCopy);
            break;

          default:
            firstViewCopy[firstViewCopyLength - counter] = value % 10;
        }
      }

      if (c[0] > 0) firstViewCopy = (0, _pvutils.utilConcatView)(c, firstViewCopy);
      return firstViewCopy.slice(0);
    }

    function power2(n) {
      if (n >= powers2.length) {
        for (let p = powers2.length; p <= n; p++) {
          const c = new Uint8Array([0]);
          let digits = powers2[p - 1].slice(0);

          for (let i = digits.length - 1; i >= 0; i--) {
            const newValue = new Uint8Array([(digits[i] << 1) + c[0]]);
            c[0] = newValue[0] / 10;
            digits[i] = newValue[0] % 10;
          }

          if (c[0] > 0) digits = (0, _pvutils.utilConcatView)(c, digits);
          powers2.push(digits);
        }
      }

      return powers2[n];
    }

    function viewSub(first, second) {
      //region Initial variables
      let b = 0;
      let firstView = new Uint8Array(first);
      let secondView = new Uint8Array(second);
      let firstViewCopy = firstView.slice(0);
      const firstViewCopyLength = firstViewCopy.length - 1;
      let secondViewCopy = secondView.slice(0);
      const secondViewCopyLength = secondViewCopy.length - 1;
      let value;
      let counter = 0; //endregion

      for (let i = secondViewCopyLength; i >= 0; i--, counter++) {
        value = firstViewCopy[firstViewCopyLength - counter] - secondViewCopy[secondViewCopyLength - counter] - b;

        switch (true) {
          case value < 0:
            b = 1;
            firstViewCopy[firstViewCopyLength - counter] = value + 10;
            break;

          default:
            b = 0;
            firstViewCopy[firstViewCopyLength - counter] = value;
        }
      }

      if (b > 0) {
        for (let i = firstViewCopyLength - secondViewCopyLength + 1; i >= 0; i--, counter++) {
          value = firstViewCopy[firstViewCopyLength - counter] - b;

          if (value < 0) {
            b = 1;
            firstViewCopy[firstViewCopyLength - counter] = value + 10;
          } else {
            b = 0;
            firstViewCopy[firstViewCopyLength - counter] = value;
            break;
          }
        }
      }

      return firstViewCopy.slice();
    } //endregion
    //region Initial variables


    const firstBit = this._valueHex.byteLength * 8 - 1;
    let digits = new Uint8Array(this._valueHex.byteLength * 8 / 3);
    let bitNumber = 0;
    let currentByte;
    const asn1View = new Uint8Array(this._valueHex);
    let result = "";
    let flag = false; //endregion
    //region Calculate number

    for (let byteNumber = this._valueHex.byteLength - 1; byteNumber >= 0; byteNumber--) {
      currentByte = asn1View[byteNumber];

      for (let i = 0; i < 8; i++) {
        if ((currentByte & 1) === 1) {
          switch (bitNumber) {
            case firstBit:
              digits = viewSub(power2(bitNumber), digits);
              result = "-";
              break;

            default:
              digits = viewAdd(digits, power2(bitNumber));
          }
        }

        bitNumber++;
        currentByte >>= 1;
      }
    } //endregion
    //region Print number


    for (let i = 0; i < digits.length; i++) {
      if (digits[i]) flag = true;
      if (flag) result += digitsString.charAt(digits[i]);
    }

    if (flag === false) result += digitsString.charAt(0); //endregion

    return result;
  } //**********************************************************************************


} //**************************************************************************************


class Integer extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "Integer" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters, LocalIntegerValueBlock);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 2; // Integer
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "Integer";
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Compare two Integer object, or Integer and ArrayBuffer objects
   * @param {!Integer|ArrayBuffer} otherValue
   * @returns {boolean}
   */


  isEqual(otherValue) {
    if (otherValue instanceof Integer) {
      if (this.valueBlock.isHexOnly && otherValue.valueBlock.isHexOnly) // Compare two ArrayBuffers
        return (0, _pvutils.isEqualBuffer)(this.valueBlock.valueHex, otherValue.valueBlock.valueHex);
      if (this.valueBlock.isHexOnly === otherValue.valueBlock.isHexOnly) return this.valueBlock.valueDec === otherValue.valueBlock.valueDec;
      return false;
    }

    if (otherValue instanceof ArrayBuffer) return (0, _pvutils.isEqualBuffer)(this.valueBlock.valueHex, otherValue);
    return false;
  } //**********************************************************************************

  /**
   * Convert current Integer value from BER into DER format
   * @returns {Integer}
   */


  convertToDER() {
    const integer = new Integer({
      valueHex: this.valueBlock.valueHex
    });
    integer.valueBlock.toDER();
    return integer;
  } //**********************************************************************************

  /**
   * Convert current Integer value from DER to BER format
   * @returns {Integer}
   */


  convertFromDER() {
    const expectedLength = this.valueBlock.valueHex.byteLength % 2 ? this.valueBlock.valueHex.byteLength + 1 : this.valueBlock.valueHex.byteLength;
    const integer = new Integer({
      valueHex: this.valueBlock.valueHex
    });
    integer.valueBlock.fromDER(integer.valueBlock.valueHex, 0, integer.valueBlock.valueHex.byteLength, expectedLength);
    return integer;
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Enumerated type class
//**************************************************************************************


exports.Integer = Integer;

class Enumerated extends Integer {
  //**********************************************************************************

  /**
   * Constructor for "Enumerated" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 10; // Enumerated
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "Enumerated";
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 ObjectIdentifier type class
//**************************************************************************************


exports.Enumerated = Enumerated;

class LocalSidValueBlock extends HexBlock(LocalBaseBlock) {
  //**********************************************************************************

  /**
   * Constructor for "LocalSidValueBlock" class
   * @param {Object} [parameters={}]
   * @property {number} [valueDec]
   * @property {boolean} [isFirstSid]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.valueDec = (0, _pvutils.getParametersValue)(parameters, "valueDec", -1);
    this.isFirstSid = (0, _pvutils.getParametersValue)(parameters, "isFirstSid", false);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "sidBlock";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    if (inputLength === 0) return inputOffset; //region Basic check for parameters
    //noinspection JSCheckFunctionSignatures

    if ((0, _pvutils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1; //endregion

    const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
    this.valueHex = new ArrayBuffer(inputLength);
    let view = new Uint8Array(this.valueHex);

    for (let i = 0; i < inputLength; i++) {
      view[i] = intBuffer[i] & 0x7F;
      this.blockLength++;
      if ((intBuffer[i] & 0x80) === 0x00) break;
    } //region Ajust size of valueHex buffer


    const tempValueHex = new ArrayBuffer(this.blockLength);
    const tempView = new Uint8Array(tempValueHex);

    for (let i = 0; i < this.blockLength; i++) tempView[i] = view[i]; //noinspection JSCheckFunctionSignatures


    this.valueHex = tempValueHex.slice(0);
    view = new Uint8Array(this.valueHex); //endregion

    if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }

    if (view[0] === 0x00) this.warnings.push("Needlessly long format of SID encoding");
    if (this.blockLength <= 8) this.valueDec = (0, _pvutils.utilFromBase)(view, 7);else {
      this.isHexOnly = true;
      this.warnings.push("Too big SID for decoding, hex only");
    }
    return inputOffset + this.blockLength;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    //region Initial variables
    let retBuf;
    let retView; //endregion

    if (this.isHexOnly) {
      if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength);
      const curView = new Uint8Array(this.valueHex);
      retBuf = new ArrayBuffer(this.blockLength);
      retView = new Uint8Array(retBuf);

      for (let i = 0; i < this.blockLength - 1; i++) retView[i] = curView[i] | 0x80;

      retView[this.blockLength - 1] = curView[this.blockLength - 1];
      return retBuf;
    }

    const encodedBuf = (0, _pvutils.utilToBase)(this.valueDec, 7);

    if (encodedBuf.byteLength === 0) {
      this.error = "Error during encoding SID value";
      return new ArrayBuffer(0);
    }

    retBuf = new ArrayBuffer(encodedBuf.byteLength);

    if (sizeOnly === false) {
      const encodedView = new Uint8Array(encodedBuf);
      retView = new Uint8Array(retBuf);

      for (let i = 0; i < encodedBuf.byteLength - 1; i++) retView[i] = encodedView[i] | 0x80;

      retView[encodedBuf.byteLength - 1] = encodedView[encodedBuf.byteLength - 1];
    }

    return retBuf;
  } //**********************************************************************************

  /**
   * Create string representation of current SID block
   * @returns {string}
   */


  toString() {
    let result = "";
    if (this.isHexOnly === true) result = (0, _pvutils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);else {
      if (this.isFirstSid) {
        let sidValue = this.valueDec;
        if (this.valueDec <= 39) result = "0.";else {
          if (this.valueDec <= 79) {
            result = "1.";
            sidValue -= 40;
          } else {
            result = "2.";
            sidValue -= 80;
          }
        }
        result += sidValue.toString();
      } else result = this.valueDec.toString();
    }
    return result;
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.valueDec = this.valueDec;
    object.isFirstSid = this.isFirstSid;
    return object;
  } //**********************************************************************************


} //**************************************************************************************


class LocalObjectIdentifierValueBlock extends ValueBlock {
  //**********************************************************************************

  /**
   * Constructor for "LocalObjectIdentifierValueBlock" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.fromString((0, _pvutils.getParametersValue)(parameters, "value", ""));
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = inputOffset;

    while (inputLength > 0) {
      const sidBlock = new LocalSidValueBlock();
      resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);

      if (resultOffset === -1) {
        this.blockLength = 0;
        this.error = sidBlock.error;
        return resultOffset;
      }

      if (this.value.length === 0) sidBlock.isFirstSid = true;
      this.blockLength += sidBlock.blockLength;
      inputLength -= sidBlock.blockLength;
      this.value.push(sidBlock);
    }

    return resultOffset;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    let retBuf = new ArrayBuffer(0);

    for (let i = 0; i < this.value.length; i++) {
      const valueBuf = this.value[i].toBER(sizeOnly);

      if (valueBuf.byteLength === 0) {
        this.error = this.value[i].error;
        return new ArrayBuffer(0);
      }

      retBuf = (0, _pvutils.utilConcatBuf)(retBuf, valueBuf);
    }

    return retBuf;
  } //**********************************************************************************

  /**
   * Create "LocalObjectIdentifierValueBlock" class from string
   * @param {string} string Input string to convert from
   * @returns {boolean}
   */


  fromString(string) {
    this.value = []; // Clear existing SID values

    let pos1 = 0;
    let pos2 = 0;
    let sid = "";
    let flag = false;

    do {
      pos2 = string.indexOf(".", pos1);
      if (pos2 === -1) sid = string.substr(pos1);else sid = string.substr(pos1, pos2 - pos1);
      pos1 = pos2 + 1;

      if (flag) {
        const sidBlock = this.value[0];
        let plus = 0;

        switch (sidBlock.valueDec) {
          case 0:
            break;

          case 1:
            plus = 40;
            break;

          case 2:
            plus = 80;
            break;

          default:
            this.value = []; // clear SID array

            return false;
          // ???
        }

        const parsedSID = parseInt(sid, 10);
        if (isNaN(parsedSID)) return true;
        sidBlock.valueDec = parsedSID + plus;
        flag = false;
      } else {
        const sidBlock = new LocalSidValueBlock();
        sidBlock.valueDec = parseInt(sid, 10);
        if (isNaN(sidBlock.valueDec)) return true;

        if (this.value.length === 0) {
          sidBlock.isFirstSid = true;
          flag = true;
        }

        this.value.push(sidBlock);
      }
    } while (pos2 !== -1);

    return true;
  } //**********************************************************************************

  /**
   * Converts "LocalObjectIdentifierValueBlock" class to string
   * @returns {string}
   */


  toString() {
    let result = "";
    let isHexOnly = false;

    for (let i = 0; i < this.value.length; i++) {
      isHexOnly = this.value[i].isHexOnly;
      let sidStr = this.value[i].toString();
      if (i !== 0) result = `${result}.`;

      if (isHexOnly) {
        sidStr = `{${sidStr}}`;
        if (this.value[i].isFirstSid) result = `2.{${sidStr} - 80}`;else result += sidStr;
      } else result += sidStr;
    }

    return result;
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "ObjectIdentifierValueBlock";
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.value = this.toString();
    object.sidArray = [];

    for (let i = 0; i < this.value.length; i++) object.sidArray.push(this.value[i].toJSON());

    return object;
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends BaseBlock
 */


class ObjectIdentifier extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "ObjectIdentifier" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters, LocalObjectIdentifierValueBlock);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 6; // OBJECT IDENTIFIER
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "ObjectIdentifier";
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of all string's classes
//**************************************************************************************


exports.ObjectIdentifier = ObjectIdentifier;

class LocalUtf8StringValueBlock extends HexBlock(LocalBaseBlock) {
  //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Constructor for "LocalUtf8StringValueBlock" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.isHexOnly = true;
    this.value = ""; // String representation of decoded ArrayBuffer
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "Utf8StringValueBlock";
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.value = this.value;
    return object;
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends BaseBlock
 */


class Utf8String extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "Utf8String" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters, LocalUtf8StringValueBlock);
    if ("value" in parameters) this.fromString(parameters.value);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 12; // Utf8String
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "Utf8String";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }

    this.fromBuffer(this.valueBlock.valueHex);
    if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
    if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
    if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  } //**********************************************************************************

  /**
   * Function converting ArrayBuffer into ASN.1 internal string
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   */


  fromBuffer(inputBuffer) {
    this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(inputBuffer));

    try {
      //noinspection JSDeprecatedSymbols
      this.valueBlock.value = decodeURIComponent(escape(this.valueBlock.value));
    } catch (ex) {
      this.warnings.push(`Error during "decodeURIComponent": ${ex}, using raw string`);
    }
  } //**********************************************************************************

  /**
   * Function converting JavaScript string into ASN.1 internal class
   * @param {!string} inputString ASN.1 BER encoded array
   */


  fromString(inputString) {
    //noinspection JSDeprecatedSymbols
    const str = unescape(encodeURIComponent(inputString));
    const strLen = str.length;
    this.valueBlock.valueHex = new ArrayBuffer(strLen);
    const view = new Uint8Array(this.valueBlock.valueHex);

    for (let i = 0; i < strLen; i++) view[i] = str.charCodeAt(i);

    this.valueBlock.value = inputString;
  } //**********************************************************************************


} //**************************************************************************************
//region Declaration of ASN.1 RelativeObjectIdentifier type class
//**************************************************************************************


exports.Utf8String = Utf8String;

class LocalRelativeSidValueBlock extends HexBlock(LocalBaseBlock) {
  //**********************************************************************************

  /**
   * Constructor for "LocalRelativeSidValueBlock" class
   * @param {Object} [parameters={}]
   * @property {number} [valueDec]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.valueDec = (0, _pvutils.getParametersValue)(parameters, "valueDec", -1);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "relativeSidBlock";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    if (inputLength === 0) return inputOffset; //region Basic check for parameters
    //noinspection JSCheckFunctionSignatures

    if ((0, _pvutils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1; //endregion

    const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
    this.valueHex = new ArrayBuffer(inputLength);
    let view = new Uint8Array(this.valueHex);

    for (let i = 0; i < inputLength; i++) {
      view[i] = intBuffer[i] & 0x7F;
      this.blockLength++;
      if ((intBuffer[i] & 0x80) === 0x00) break;
    } //region Ajust size of valueHex buffer


    const tempValueHex = new ArrayBuffer(this.blockLength);
    const tempView = new Uint8Array(tempValueHex);

    for (let i = 0; i < this.blockLength; i++) tempView[i] = view[i]; //noinspection JSCheckFunctionSignatures


    this.valueHex = tempValueHex.slice(0);
    view = new Uint8Array(this.valueHex); //endregion

    if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }

    if (view[0] === 0x00) this.warnings.push("Needlessly long format of SID encoding");
    if (this.blockLength <= 8) this.valueDec = (0, _pvutils.utilFromBase)(view, 7);else {
      this.isHexOnly = true;
      this.warnings.push("Too big SID for decoding, hex only");
    }
    return inputOffset + this.blockLength;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    //region Initial variables
    let retBuf;
    let retView; //endregion

    if (this.isHexOnly) {
      if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength);
      const curView = new Uint8Array(this.valueHex);
      retBuf = new ArrayBuffer(this.blockLength);
      retView = new Uint8Array(retBuf);

      for (let i = 0; i < this.blockLength - 1; i++) retView[i] = curView[i] | 0x80;

      retView[this.blockLength - 1] = curView[this.blockLength - 1];
      return retBuf;
    }

    const encodedBuf = (0, _pvutils.utilToBase)(this.valueDec, 7);

    if (encodedBuf.byteLength === 0) {
      this.error = "Error during encoding SID value";
      return new ArrayBuffer(0);
    }

    retBuf = new ArrayBuffer(encodedBuf.byteLength);

    if (sizeOnly === false) {
      const encodedView = new Uint8Array(encodedBuf);
      retView = new Uint8Array(retBuf);

      for (let i = 0; i < encodedBuf.byteLength - 1; i++) retView[i] = encodedView[i] | 0x80;

      retView[encodedBuf.byteLength - 1] = encodedView[encodedBuf.byteLength - 1];
    }

    return retBuf;
  } //**********************************************************************************

  /**
   * Create string representation of current SID block
   * @returns {string}
   */


  toString() {
    let result = "";
    if (this.isHexOnly === true) result = (0, _pvutils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);else {
      result = this.valueDec.toString();
    }
    return result;
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.valueDec = this.valueDec;
    return object;
  } //**********************************************************************************


} //**************************************************************************************


class LocalRelativeObjectIdentifierValueBlock extends ValueBlock {
  //**********************************************************************************

  /**
   * Constructor for "LocalRelativeObjectIdentifierValueBlock" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.fromString((0, _pvutils.getParametersValue)(parameters, "value", ""));
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = inputOffset;

    while (inputLength > 0) {
      const sidBlock = new LocalRelativeSidValueBlock();
      resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);

      if (resultOffset === -1) {
        this.blockLength = 0;
        this.error = sidBlock.error;
        return resultOffset;
      }

      this.blockLength += sidBlock.blockLength;
      inputLength -= sidBlock.blockLength;
      this.value.push(sidBlock);
    }

    return resultOffset;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    let retBuf = new ArrayBuffer(0);

    for (let i = 0; i < this.value.length; i++) {
      const valueBuf = this.value[i].toBER(sizeOnly);

      if (valueBuf.byteLength === 0) {
        this.error = this.value[i].error;
        return new ArrayBuffer(0);
      }

      retBuf = (0, _pvutils.utilConcatBuf)(retBuf, valueBuf);
    }

    return retBuf;
  } //**********************************************************************************

  /**
   * Create "LocalRelativeObjectIdentifierValueBlock" class from string
   * @param {string} string Input string to convert from
   * @returns {boolean}
   */


  fromString(string) {
    this.value = []; // Clear existing SID values

    let pos1 = 0;
    let pos2 = 0;
    let sid = "";

    do {
      pos2 = string.indexOf(".", pos1);
      if (pos2 === -1) sid = string.substr(pos1);else sid = string.substr(pos1, pos2 - pos1);
      pos1 = pos2 + 1;
      const sidBlock = new LocalRelativeSidValueBlock();
      sidBlock.valueDec = parseInt(sid, 10);
      if (isNaN(sidBlock.valueDec)) return true;
      this.value.push(sidBlock);
    } while (pos2 !== -1);

    return true;
  } //**********************************************************************************

  /**
   * Converts "LocalRelativeObjectIdentifierValueBlock" class to string
   * @returns {string}
   */


  toString() {
    let result = "";
    let isHexOnly = false;

    for (let i = 0; i < this.value.length; i++) {
      isHexOnly = this.value[i].isHexOnly;
      let sidStr = this.value[i].toString();
      if (i !== 0) result = `${result}.`;

      if (isHexOnly) {
        sidStr = `{${sidStr}}`;
        result += sidStr;
      } else result += sidStr;
    }

    return result;
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "RelativeObjectIdentifierValueBlock";
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.value = this.toString();
    object.sidArray = [];

    for (let i = 0; i < this.value.length; i++) object.sidArray.push(this.value[i].toJSON());

    return object;
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends BaseBlock
 */


class RelativeObjectIdentifier extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "RelativeObjectIdentifier" class
   * @param {Object} [parameters={}]
   * @property {ArrayBuffer} [valueHex]
   */
  constructor(parameters = {}) {
    super(parameters, LocalRelativeObjectIdentifierValueBlock);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 13; // RELATIVE OBJECT IDENTIFIER
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "RelativeObjectIdentifier";
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************

/**
 * @extends LocalBaseBlock
 * @extends HexBlock
 */


exports.RelativeObjectIdentifier = RelativeObjectIdentifier;

class LocalBmpStringValueBlock extends HexBlock(LocalBaseBlock) {
  //**********************************************************************************

  /**
   * Constructor for "LocalBmpStringValueBlock" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.isHexOnly = true;
    this.value = "";
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "BmpStringValueBlock";
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.value = this.value;
    return object;
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends BaseBlock
 */


class BmpString extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "BmpString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters, LocalBmpStringValueBlock);
    if ("value" in parameters) this.fromString(parameters.value);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 30; // BmpString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "BmpString";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }

    this.fromBuffer(this.valueBlock.valueHex);
    if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
    if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
    if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  } //**********************************************************************************

  /**
   * Function converting ArrayBuffer into ASN.1 internal string
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   */


  fromBuffer(inputBuffer) {
    //noinspection JSCheckFunctionSignatures
    const copyBuffer = inputBuffer.slice(0);
    const valueView = new Uint8Array(copyBuffer);

    for (let i = 0; i < valueView.length; i += 2) {
      const temp = valueView[i];
      valueView[i] = valueView[i + 1];
      valueView[i + 1] = temp;
    }

    this.valueBlock.value = String.fromCharCode.apply(null, new Uint16Array(copyBuffer));
  } //**********************************************************************************

  /**
   * Function converting JavaScript string into ASN.1 internal class
   * @param {!string} inputString ASN.1 BER encoded array
   */


  fromString(inputString) {
    const strLength = inputString.length;
    this.valueBlock.valueHex = new ArrayBuffer(strLength * 2);
    const valueHexView = new Uint8Array(this.valueBlock.valueHex);

    for (let i = 0; i < strLength; i++) {
      const codeBuf = (0, _pvutils.utilToBase)(inputString.charCodeAt(i), 8);
      const codeView = new Uint8Array(codeBuf);
      if (codeView.length > 2) continue;
      const dif = 2 - codeView.length;

      for (let j = codeView.length - 1; j >= 0; j--) valueHexView[i * 2 + j + dif] = codeView[j];
    }

    this.valueBlock.value = inputString;
  } //**********************************************************************************


} //**************************************************************************************


exports.BmpString = BmpString;

class LocalUniversalStringValueBlock extends HexBlock(LocalBaseBlock) {
  //**********************************************************************************

  /**
   * Constructor for "LocalUniversalStringValueBlock" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.isHexOnly = true;
    this.value = "";
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "UniversalStringValueBlock";
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.value = this.value;
    return object;
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends BaseBlock
 */


class UniversalString extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "UniversalString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters, LocalUniversalStringValueBlock);
    if ("value" in parameters) this.fromString(parameters.value);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 28; // UniversalString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "UniversalString";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }

    this.fromBuffer(this.valueBlock.valueHex);
    if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
    if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
    if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  } //**********************************************************************************

  /**
   * Function converting ArrayBuffer into ASN.1 internal string
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   */


  fromBuffer(inputBuffer) {
    //noinspection JSCheckFunctionSignatures
    const copyBuffer = inputBuffer.slice(0);
    const valueView = new Uint8Array(copyBuffer);

    for (let i = 0; i < valueView.length; i += 4) {
      valueView[i] = valueView[i + 3];
      valueView[i + 1] = valueView[i + 2];
      valueView[i + 2] = 0x00;
      valueView[i + 3] = 0x00;
    }

    this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(copyBuffer));
  } //**********************************************************************************

  /**
   * Function converting JavaScript string into ASN.1 internal class
   * @param {!string} inputString ASN.1 BER encoded array
   */


  fromString(inputString) {
    const strLength = inputString.length;
    this.valueBlock.valueHex = new ArrayBuffer(strLength * 4);
    const valueHexView = new Uint8Array(this.valueBlock.valueHex);

    for (let i = 0; i < strLength; i++) {
      const codeBuf = (0, _pvutils.utilToBase)(inputString.charCodeAt(i), 8);
      const codeView = new Uint8Array(codeBuf);
      if (codeView.length > 4) continue;
      const dif = 4 - codeView.length;

      for (let j = codeView.length - 1; j >= 0; j--) valueHexView[i * 4 + j + dif] = codeView[j];
    }

    this.valueBlock.value = inputString;
  } //**********************************************************************************


} //**************************************************************************************


exports.UniversalString = UniversalString;

class LocalSimpleStringValueBlock extends HexBlock(LocalBaseBlock) {
  //**********************************************************************************

  /**
   * Constructor for "LocalSimpleStringValueBlock" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.value = "";
    this.isHexOnly = true;
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "SimpleStringValueBlock";
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.value = this.value;
    return object;
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends BaseBlock
 */


class LocalSimpleStringBlock extends BaseBlock {
  //**********************************************************************************

  /**
   * Constructor for "LocalSimpleStringBlock" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters, LocalSimpleStringValueBlock);
    if ("value" in parameters) this.fromString(parameters.value);
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "SIMPLESTRING";
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }

    this.fromBuffer(this.valueBlock.valueHex);
    if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
    if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
    if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  } //**********************************************************************************

  /**
   * Function converting ArrayBuffer into ASN.1 internal string
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   */


  fromBuffer(inputBuffer) {
    this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(inputBuffer));
  } //**********************************************************************************

  /**
   * Function converting JavaScript string into ASN.1 internal class
   * @param {!string} inputString ASN.1 BER encoded array
   */


  fromString(inputString) {
    const strLen = inputString.length;
    this.valueBlock.valueHex = new ArrayBuffer(strLen);
    const view = new Uint8Array(this.valueBlock.valueHex);

    for (let i = 0; i < strLen; i++) view[i] = inputString.charCodeAt(i);

    this.valueBlock.value = inputString;
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends LocalSimpleStringBlock
 */


class NumericString extends LocalSimpleStringBlock {
  //**********************************************************************************

  /**
   * Constructor for "NumericString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 18; // NumericString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "NumericString";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends LocalSimpleStringBlock
 */


exports.NumericString = NumericString;

class PrintableString extends LocalSimpleStringBlock {
  //**********************************************************************************

  /**
   * Constructor for "PrintableString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 19; // PrintableString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "PrintableString";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends LocalSimpleStringBlock
 */


exports.PrintableString = PrintableString;

class TeletexString extends LocalSimpleStringBlock {
  //**********************************************************************************

  /**
   * Constructor for "TeletexString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 20; // TeletexString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "TeletexString";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends LocalSimpleStringBlock
 */


exports.TeletexString = TeletexString;

class VideotexString extends LocalSimpleStringBlock {
  //**********************************************************************************

  /**
   * Constructor for "VideotexString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 21; // VideotexString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "VideotexString";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends LocalSimpleStringBlock
 */


exports.VideotexString = VideotexString;

class IA5String extends LocalSimpleStringBlock {
  //**********************************************************************************

  /**
   * Constructor for "IA5String" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 22; // IA5String
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "IA5String";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends LocalSimpleStringBlock
 */


exports.IA5String = IA5String;

class GraphicString extends LocalSimpleStringBlock {
  //**********************************************************************************

  /**
   * Constructor for "GraphicString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 25; // GraphicString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "GraphicString";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends LocalSimpleStringBlock
 */


exports.GraphicString = GraphicString;

class VisibleString extends LocalSimpleStringBlock {
  //**********************************************************************************

  /**
   * Constructor for "VisibleString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 26; // VisibleString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "VisibleString";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends LocalSimpleStringBlock
 */


exports.VisibleString = VisibleString;

class GeneralString extends LocalSimpleStringBlock {
  //**********************************************************************************

  /**
   * Constructor for "GeneralString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 27; // GeneralString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "GeneralString";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends LocalSimpleStringBlock
 */


exports.GeneralString = GeneralString;

class CharacterString extends LocalSimpleStringBlock {
  //**********************************************************************************

  /**
   * Constructor for "CharacterString" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 29; // CharacterString
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "CharacterString";
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of all date and time classes
//**************************************************************************************

/**
 * @extends VisibleString
 */


exports.CharacterString = CharacterString;

class UTCTime extends VisibleString {
  //**********************************************************************************

  /**
   * Constructor for "UTCTime" class
   * @param {Object} [parameters={}]
   * @property {string} [value] String representatio of the date
   * @property {Date} [valueDate] JavaScript "Date" object
   */
  constructor(parameters = {}) {
    super(parameters);
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0; //region Create UTCTime from ASN.1 UTC string value

    if ("value" in parameters) {
      this.fromString(parameters.value);
      this.valueBlock.valueHex = new ArrayBuffer(parameters.value.length);
      const view = new Uint8Array(this.valueBlock.valueHex);

      for (let i = 0; i < parameters.value.length; i++) view[i] = parameters.value.charCodeAt(i);
    } //endregion
    //region Create GeneralizedTime from JavaScript Date type


    if ("valueDate" in parameters) {
      this.fromDate(parameters.valueDate);
      this.valueBlock.valueHex = this.toBuffer();
    } //endregion


    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 23; // UTCTime
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }

    this.fromBuffer(this.valueBlock.valueHex);
    if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
    if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
    if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  } //**********************************************************************************

  /**
   * Function converting ArrayBuffer into ASN.1 internal string
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   */


  fromBuffer(inputBuffer) {
    this.fromString(String.fromCharCode.apply(null, new Uint8Array(inputBuffer)));
  } //**********************************************************************************

  /**
   * Function converting ASN.1 internal string into ArrayBuffer
   * @returns {ArrayBuffer}
   */


  toBuffer() {
    const str = this.toString();
    const buffer = new ArrayBuffer(str.length);
    const view = new Uint8Array(buffer);

    for (let i = 0; i < str.length; i++) view[i] = str.charCodeAt(i);

    return buffer;
  } //**********************************************************************************

  /**
   * Function converting "Date" object into ASN.1 internal string
   * @param {!Date} inputDate JavaScript "Date" object
   */


  fromDate(inputDate) {
    this.year = inputDate.getUTCFullYear();
    this.month = inputDate.getUTCMonth() + 1;
    this.day = inputDate.getUTCDate();
    this.hour = inputDate.getUTCHours();
    this.minute = inputDate.getUTCMinutes();
    this.second = inputDate.getUTCSeconds();
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Function converting ASN.1 internal string into "Date" object
   * @returns {Date}
   */


  toDate() {
    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
  } //**********************************************************************************

  /**
   * Function converting JavaScript string into ASN.1 internal class
   * @param {!string} inputString ASN.1 BER encoded array
   */


  fromString(inputString) {
    //region Parse input string
    const parser = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;
    const parserArray = parser.exec(inputString);

    if (parserArray === null) {
      this.error = "Wrong input string for convertion";
      return;
    } //endregion
    //region Store parsed values


    const year = parseInt(parserArray[1], 10);
    if (year >= 50) this.year = 1900 + year;else this.year = 2000 + year;
    this.month = parseInt(parserArray[2], 10);
    this.day = parseInt(parserArray[3], 10);
    this.hour = parseInt(parserArray[4], 10);
    this.minute = parseInt(parserArray[5], 10);
    this.second = parseInt(parserArray[6], 10); //endregion
  } //**********************************************************************************

  /**
   * Function converting ASN.1 internal class into JavaScript string
   * @returns {string}
   */


  toString() {
    const outputArray = new Array(7);
    outputArray[0] = (0, _pvutils.padNumber)(this.year < 2000 ? this.year - 1900 : this.year - 2000, 2);
    outputArray[1] = (0, _pvutils.padNumber)(this.month, 2);
    outputArray[2] = (0, _pvutils.padNumber)(this.day, 2);
    outputArray[3] = (0, _pvutils.padNumber)(this.hour, 2);
    outputArray[4] = (0, _pvutils.padNumber)(this.minute, 2);
    outputArray[5] = (0, _pvutils.padNumber)(this.second, 2);
    outputArray[6] = "Z";
    return outputArray.join("");
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "UTCTime";
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.year = this.year;
    object.month = this.month;
    object.day = this.day;
    object.hour = this.hour;
    object.minute = this.minute;
    object.second = this.second;
    return object;
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends VisibleString
 */


exports.UTCTime = UTCTime;

class GeneralizedTime extends VisibleString {
  //**********************************************************************************

  /**
   * Constructor for "GeneralizedTime" class
   * @param {Object} [parameters={}]
   * @property {string} [value] String representatio of the date
   * @property {Date} [valueDate] JavaScript "Date" object
   */
  constructor(parameters = {}) {
    super(parameters);
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0; //region Create UTCTime from ASN.1 UTC string value

    if ("value" in parameters) {
      this.fromString(parameters.value);
      this.valueBlock.valueHex = new ArrayBuffer(parameters.value.length);
      const view = new Uint8Array(this.valueBlock.valueHex);

      for (let i = 0; i < parameters.value.length; i++) view[i] = parameters.value.charCodeAt(i);
    } //endregion
    //region Create GeneralizedTime from JavaScript Date type


    if ("valueDate" in parameters) {
      this.fromDate(parameters.valueDate);
      this.valueBlock.valueHex = this.toBuffer();
    } //endregion


    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 24; // GeneralizedTime
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }

    this.fromBuffer(this.valueBlock.valueHex);
    if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
    if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
    if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  } //**********************************************************************************

  /**
   * Function converting ArrayBuffer into ASN.1 internal string
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   */


  fromBuffer(inputBuffer) {
    this.fromString(String.fromCharCode.apply(null, new Uint8Array(inputBuffer)));
  } //**********************************************************************************

  /**
   * Function converting ASN.1 internal string into ArrayBuffer
   * @returns {ArrayBuffer}
   */


  toBuffer() {
    const str = this.toString();
    const buffer = new ArrayBuffer(str.length);
    const view = new Uint8Array(buffer);

    for (let i = 0; i < str.length; i++) view[i] = str.charCodeAt(i);

    return buffer;
  } //**********************************************************************************

  /**
   * Function converting "Date" object into ASN.1 internal string
   * @param {!Date} inputDate JavaScript "Date" object
   */


  fromDate(inputDate) {
    this.year = inputDate.getUTCFullYear();
    this.month = inputDate.getUTCMonth() + 1;
    this.day = inputDate.getUTCDate();
    this.hour = inputDate.getUTCHours();
    this.minute = inputDate.getUTCMinutes();
    this.second = inputDate.getUTCSeconds();
    this.millisecond = inputDate.getUTCMilliseconds();
  } //**********************************************************************************
  //noinspection JSUnusedGlobalSymbols

  /**
   * Function converting ASN.1 internal string into "Date" object
   * @returns {Date}
   */


  toDate() {
    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
  } //**********************************************************************************

  /**
   * Function converting JavaScript string into ASN.1 internal class
   * @param {!string} inputString ASN.1 BER encoded array
   */


  fromString(inputString) {
    //region Initial variables
    let isUTC = false;
    let timeString = "";
    let dateTimeString = "";
    let fractionPart = 0;
    let parser;
    let hourDifference = 0;
    let minuteDifference = 0; //endregion
    //region Convert as UTC time

    if (inputString[inputString.length - 1] === "Z") {
      timeString = inputString.substr(0, inputString.length - 1);
      isUTC = true;
    } //endregion
    //region Convert as local time
    else {
        //noinspection JSPrimitiveTypeWrapperUsage
        const number = new Number(inputString[inputString.length - 1]);
        if (isNaN(number.valueOf())) throw new Error("Wrong input string for convertion");
        timeString = inputString;
      } //endregion
    //region Check that we do not have a "+" and "-" symbols inside UTC time


    if (isUTC) {
      if (timeString.indexOf("+") !== -1) throw new Error("Wrong input string for convertion");
      if (timeString.indexOf("-") !== -1) throw new Error("Wrong input string for convertion");
    } //endregion
    //region Get "UTC time difference" in case of local time
    else {
        let multiplier = 1;
        let differencePosition = timeString.indexOf("+");
        let differenceString = "";

        if (differencePosition === -1) {
          differencePosition = timeString.indexOf("-");
          multiplier = -1;
        }

        if (differencePosition !== -1) {
          differenceString = timeString.substr(differencePosition + 1);
          timeString = timeString.substr(0, differencePosition);
          if (differenceString.length !== 2 && differenceString.length !== 4) throw new Error("Wrong input string for convertion"); //noinspection JSPrimitiveTypeWrapperUsage

          let number = new Number(differenceString.substr(0, 2));
          if (isNaN(number.valueOf())) throw new Error("Wrong input string for convertion");
          hourDifference = multiplier * number;

          if (differenceString.length === 4) {
            //noinspection JSPrimitiveTypeWrapperUsage
            number = new Number(differenceString.substr(2, 2));
            if (isNaN(number.valueOf())) throw new Error("Wrong input string for convertion");
            minuteDifference = multiplier * number;
          }
        }
      } //endregion
    //region Get position of fraction point


    let fractionPointPosition = timeString.indexOf("."); // Check for "full stop" symbol

    if (fractionPointPosition === -1) fractionPointPosition = timeString.indexOf(","); // Check for "comma" symbol
    //endregion
    //region Get fraction part

    if (fractionPointPosition !== -1) {
      //noinspection JSPrimitiveTypeWrapperUsage
      const fractionPartCheck = new Number(`0${timeString.substr(fractionPointPosition)}`);
      if (isNaN(fractionPartCheck.valueOf())) throw new Error("Wrong input string for convertion");
      fractionPart = fractionPartCheck.valueOf();
      dateTimeString = timeString.substr(0, fractionPointPosition);
    } else dateTimeString = timeString; //endregion
    //region Parse internal date


    switch (true) {
      case dateTimeString.length === 8:
        // "YYYYMMDD"
        parser = /(\d{4})(\d{2})(\d{2})/ig;
        if (fractionPointPosition !== -1) throw new Error("Wrong input string for convertion"); // Here we should not have a "fraction point"

        break;

      case dateTimeString.length === 10:
        // "YYYYMMDDHH"
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})/ig;

        if (fractionPointPosition !== -1) {
          let fractionResult = 60 * fractionPart;
          this.minute = Math.floor(fractionResult);
          fractionResult = 60 * (fractionResult - this.minute);
          this.second = Math.floor(fractionResult);
          fractionResult = 1000 * (fractionResult - this.second);
          this.millisecond = Math.floor(fractionResult);
        }

        break;

      case dateTimeString.length === 12:
        // "YYYYMMDDHHMM"
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;

        if (fractionPointPosition !== -1) {
          let fractionResult = 60 * fractionPart;
          this.second = Math.floor(fractionResult);
          fractionResult = 1000 * (fractionResult - this.second);
          this.millisecond = Math.floor(fractionResult);
        }

        break;

      case dateTimeString.length === 14:
        // "YYYYMMDDHHMMSS"
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;

        if (fractionPointPosition !== -1) {
          const fractionResult = 1000 * fractionPart;
          this.millisecond = Math.floor(fractionResult);
        }

        break;

      default:
        throw new Error("Wrong input string for convertion");
    } //endregion
    //region Put parsed values at right places


    const parserArray = parser.exec(dateTimeString);
    if (parserArray === null) throw new Error("Wrong input string for convertion");

    for (let j = 1; j < parserArray.length; j++) {
      switch (j) {
        case 1:
          this.year = parseInt(parserArray[j], 10);
          break;

        case 2:
          this.month = parseInt(parserArray[j], 10);
          break;

        case 3:
          this.day = parseInt(parserArray[j], 10);
          break;

        case 4:
          this.hour = parseInt(parserArray[j], 10) + hourDifference;
          break;

        case 5:
          this.minute = parseInt(parserArray[j], 10) + minuteDifference;
          break;

        case 6:
          this.second = parseInt(parserArray[j], 10);
          break;

        default:
          throw new Error("Wrong input string for convertion");
      }
    } //endregion
    //region Get final date


    if (isUTC === false) {
      const tempDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
      this.year = tempDate.getUTCFullYear();
      this.month = tempDate.getUTCMonth();
      this.day = tempDate.getUTCDay();
      this.hour = tempDate.getUTCHours();
      this.minute = tempDate.getUTCMinutes();
      this.second = tempDate.getUTCSeconds();
      this.millisecond = tempDate.getUTCMilliseconds();
    } //endregion

  } //**********************************************************************************

  /**
   * Function converting ASN.1 internal class into JavaScript string
   * @returns {string}
   */


  toString() {
    const outputArray = [];
    outputArray.push((0, _pvutils.padNumber)(this.year, 4));
    outputArray.push((0, _pvutils.padNumber)(this.month, 2));
    outputArray.push((0, _pvutils.padNumber)(this.day, 2));
    outputArray.push((0, _pvutils.padNumber)(this.hour, 2));
    outputArray.push((0, _pvutils.padNumber)(this.minute, 2));
    outputArray.push((0, _pvutils.padNumber)(this.second, 2));

    if (this.millisecond !== 0) {
      outputArray.push(".");
      outputArray.push((0, _pvutils.padNumber)(this.millisecond, 3));
    }

    outputArray.push("Z");
    return outputArray.join("");
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "GeneralizedTime";
  } //**********************************************************************************

  /**
   * Convertion for the block to JSON object
   * @returns {Object}
   */


  toJSON() {
    let object = {}; //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object

    try {
      object = super.toJSON();
    } catch (ex) {} //endregion


    object.year = this.year;
    object.month = this.month;
    object.day = this.day;
    object.hour = this.hour;
    object.minute = this.minute;
    object.second = this.second;
    object.millisecond = this.millisecond;
    return object;
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends Utf8String
 */


exports.GeneralizedTime = GeneralizedTime;

class DATE extends Utf8String {
  //**********************************************************************************

  /**
   * Constructor for "DATE" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 31; // DATE
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "DATE";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends Utf8String
 */


exports.DATE = DATE;

class TimeOfDay extends Utf8String {
  //**********************************************************************************

  /**
   * Constructor for "TimeOfDay" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 32; // TimeOfDay
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "TimeOfDay";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends Utf8String
 */


exports.TimeOfDay = TimeOfDay;

class DateTime extends Utf8String {
  //**********************************************************************************

  /**
   * Constructor for "DateTime" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 33; // DateTime
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "DateTime";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends Utf8String
 */


exports.DateTime = DateTime;

class Duration extends Utf8String {
  //**********************************************************************************

  /**
   * Constructor for "Duration" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 34; // Duration
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "Duration";
  } //**********************************************************************************


} //**************************************************************************************

/**
 * @extends Utf8String
 */


exports.Duration = Duration;

class TIME extends Utf8String {
  //**********************************************************************************

  /**
   * Constructor for "Time" class
   * @param {Object} [parameters={}]
   */
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1; // UNIVERSAL

    this.idBlock.tagNumber = 14; // Time
  } //**********************************************************************************

  /**
   * Aux function, need to get a block name. Need to have it here for inhiritence
   * @returns {string}
   */


  static blockName() {
    return "TIME";
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type Choice
//**************************************************************************************


exports.TIME = TIME;

class Choice {
  //**********************************************************************************

  /**
   * Constructor for "Choice" class
   * @param {Object} [parameters={}]
   * @property {Array} [value] Array of ASN.1 types for make a choice from
   * @property {boolean} [optional]
   */
  constructor(parameters = {}) {
    this.value = (0, _pvutils.getParametersValue)(parameters, "value", []);
    this.optional = (0, _pvutils.getParametersValue)(parameters, "optional", false);
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type Any
//**************************************************************************************


exports.Choice = Choice;

class Any {
  //**********************************************************************************

  /**
   * Constructor for "Any" class
   * @param {Object} [parameters={}]
   * @property {string} [name]
   * @property {boolean} [optional]
   */
  constructor(parameters = {}) {
    this.name = (0, _pvutils.getParametersValue)(parameters, "name", "");
    this.optional = (0, _pvutils.getParametersValue)(parameters, "optional", false);
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type Repeated
//**************************************************************************************


exports.Any = Any;

class Repeated {
  //**********************************************************************************

  /**
   * Constructor for "Repeated" class
   * @param {Object} [parameters={}]
   * @property {string} [name]
   * @property {boolean} [optional]
   */
  constructor(parameters = {}) {
    this.name = (0, _pvutils.getParametersValue)(parameters, "name", "");
    this.optional = (0, _pvutils.getParametersValue)(parameters, "optional", false);
    this.value = (0, _pvutils.getParametersValue)(parameters, "value", new Any());
    this.local = (0, _pvutils.getParametersValue)(parameters, "local", false); // Could local or global array to store elements
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type RawData
//**************************************************************************************

/**
 * @description Special class providing ability to have "toBER/fromBER" for raw ArrayBuffer
 */


exports.Repeated = Repeated;

class RawData {
  //**********************************************************************************

  /**
   * Constructor for "Repeated" class
   * @param {Object} [parameters={}]
   * @property {string} [name]
   * @property {boolean} [optional]
   */
  constructor(parameters = {}) {
    this.data = (0, _pvutils.getParametersValue)(parameters, "data", new ArrayBuffer(0));
  } //**********************************************************************************

  /**
   * Base function for converting block from BER encoded array of bytes
   * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
   * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
   * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
   * @returns {number} Offset after least decoded byte
   */


  fromBER(inputBuffer, inputOffset, inputLength) {
    this.data = inputBuffer.slice(inputOffset, inputLength);
    return inputOffset + inputLength;
  } //**********************************************************************************

  /**
   * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
   * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
   * @returns {ArrayBuffer}
   */


  toBER(sizeOnly = false) {
    return this.data;
  } //**********************************************************************************


} //**************************************************************************************
//endregion
//**************************************************************************************
//region Major ASN.1 BER decoding function
//**************************************************************************************

/**
 * Internal library function for decoding ASN.1 BER
 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
 * @returns {{offset: number, result: Object}}
 */


exports.RawData = RawData;

function LocalFromBER(inputBuffer, inputOffset, inputLength) {
  const incomingOffset = inputOffset; // Need to store initial offset since "inputOffset" is changing in the function
  //region Local function changing a type for ASN.1 classes

  function localChangeType(inputObject, newType) {
    if (inputObject instanceof newType) return inputObject;
    const newObject = new newType();
    newObject.idBlock = inputObject.idBlock;
    newObject.lenBlock = inputObject.lenBlock;
    newObject.warnings = inputObject.warnings; //noinspection JSCheckFunctionSignatures

    newObject.valueBeforeDecode = inputObject.valueBeforeDecode.slice(0);
    return newObject;
  } //endregion
  //region Create a basic ASN.1 type since we need to return errors and warnings from the function


  let returnObject = new BaseBlock({}, Object); //endregion
  //region Basic check for parameters

  const baseBlock = new LocalBaseBlock();

  if ((0, _pvutils.checkBufferParams)(baseBlock, inputBuffer, inputOffset, inputLength) === false) {
    returnObject.error = baseBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  } //endregion
  //region Getting Uint8Array from ArrayBuffer


  const intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength); //endregion
  //region Initial checks

  if (intBuffer.length === 0) {
    this.error = "Zero buffer length";
    return {
      offset: -1,
      result: returnObject
    };
  } //endregion
  //region Decode indentifcation block of ASN.1 BER structure


  let resultOffset = returnObject.idBlock.fromBER(inputBuffer, inputOffset, inputLength);
  returnObject.warnings.concat(returnObject.idBlock.warnings);

  if (resultOffset === -1) {
    returnObject.error = returnObject.idBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }

  inputOffset = resultOffset;
  inputLength -= returnObject.idBlock.blockLength; //endregion
  //region Decode length block of ASN.1 BER structure

  resultOffset = returnObject.lenBlock.fromBER(inputBuffer, inputOffset, inputLength);
  returnObject.warnings.concat(returnObject.lenBlock.warnings);

  if (resultOffset === -1) {
    returnObject.error = returnObject.lenBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }

  inputOffset = resultOffset;
  inputLength -= returnObject.lenBlock.blockLength; //endregion
  //region Check for usign indefinite length form in encoding for primitive types

  if (returnObject.idBlock.isConstructed === false && returnObject.lenBlock.isIndefiniteForm === true) {
    returnObject.error = "Indefinite length form used for primitive encoding form";
    return {
      offset: -1,
      result: returnObject
    };
  } //endregion
  //region Switch ASN.1 block type


  let newASN1Type = BaseBlock;

  switch (returnObject.idBlock.tagClass) {
    //region UNIVERSAL
    case 1:
      //region Check for reserved tag numbers
      if (returnObject.idBlock.tagNumber >= 37 && returnObject.idBlock.isHexOnly === false) {
        returnObject.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
        return {
          offset: -1,
          result: returnObject
        };
      } //endregion


      switch (returnObject.idBlock.tagNumber) {
        //region EndOfContent type
        case 0:
          //region Check for EndOfContent type
          if (returnObject.idBlock.isConstructed === true && returnObject.lenBlock.length > 0) {
            returnObject.error = "Type [UNIVERSAL 0] is reserved";
            return {
              offset: -1,
              result: returnObject
            };
          } //endregion


          newASN1Type = EndOfContent;
          break;
        //endregion
        //region Boolean type

        case 1:
          newASN1Type = Boolean;
          break;
        //endregion
        //region Integer type

        case 2:
          newASN1Type = Integer;
          break;
        //endregion
        //region BitString type

        case 3:
          newASN1Type = BitString;
          break;
        //endregion
        //region OctetString type

        case 4:
          newASN1Type = OctetString;
          break;
        //endregion
        //region Null type

        case 5:
          newASN1Type = Null;
          break;
        //endregion
        //region OBJECT IDENTIFIER type

        case 6:
          newASN1Type = ObjectIdentifier;
          break;
        //endregion
        //region Enumerated type

        case 10:
          newASN1Type = Enumerated;
          break;
        //endregion
        //region Utf8String type

        case 12:
          newASN1Type = Utf8String;
          break;
        //endregion
        //region Time type
        //region RELATIVE OBJECT IDENTIFIER type

        case 13:
          newASN1Type = RelativeObjectIdentifier;
          break;
        //endregion

        case 14:
          newASN1Type = TIME;
          break;
        //endregion
        //region ASN.1 reserved type

        case 15:
          returnObject.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
          return {
            offset: -1,
            result: returnObject
          };
        //endregion
        //region Sequence type

        case 16:
          newASN1Type = Sequence;
          break;
        //endregion
        //region Set type

        case 17:
          newASN1Type = Set;
          break;
        //endregion
        //region NumericString type

        case 18:
          newASN1Type = NumericString;
          break;
        //endregion
        //region PrintableString type

        case 19:
          newASN1Type = PrintableString;
          break;
        //endregion
        //region TeletexString type

        case 20:
          newASN1Type = TeletexString;
          break;
        //endregion
        //region VideotexString type

        case 21:
          newASN1Type = VideotexString;
          break;
        //endregion
        //region IA5String type

        case 22:
          newASN1Type = IA5String;
          break;
        //endregion
        //region UTCTime type

        case 23:
          newASN1Type = UTCTime;
          break;
        //endregion
        //region GeneralizedTime type

        case 24:
          newASN1Type = GeneralizedTime;
          break;
        //endregion
        //region GraphicString type

        case 25:
          newASN1Type = GraphicString;
          break;
        //endregion
        //region VisibleString type

        case 26:
          newASN1Type = VisibleString;
          break;
        //endregion
        //region GeneralString type

        case 27:
          newASN1Type = GeneralString;
          break;
        //endregion
        //region UniversalString type

        case 28:
          newASN1Type = UniversalString;
          break;
        //endregion
        //region CharacterString type

        case 29:
          newASN1Type = CharacterString;
          break;
        //endregion
        //region BmpString type

        case 30:
          newASN1Type = BmpString;
          break;
        //endregion
        //region DATE type

        case 31:
          newASN1Type = DATE;
          break;
        //endregion
        //region TimeOfDay type

        case 32:
          newASN1Type = TimeOfDay;
          break;
        //endregion
        //region Date-Time type

        case 33:
          newASN1Type = DateTime;
          break;
        //endregion
        //region Duration type

        case 34:
          newASN1Type = Duration;
          break;
        //endregion
        //region default

        default:
          {
            let newObject;
            if (returnObject.idBlock.isConstructed === true) newObject = new Constructed();else newObject = new Primitive();
            newObject.idBlock = returnObject.idBlock;
            newObject.lenBlock = returnObject.lenBlock;
            newObject.warnings = returnObject.warnings;
            returnObject = newObject;
            resultOffset = returnObject.fromBER(inputBuffer, inputOffset, inputLength);
          }
        //endregion
      }

      break;
    //endregion
    //region All other tag classes

    case 2: // APPLICATION

    case 3: // CONTEXT-SPECIFIC

    case 4: // PRIVATE

    default:
      {
        if (returnObject.idBlock.isConstructed === true) newASN1Type = Constructed;else newASN1Type = Primitive;
      }
    //endregion
  } //endregion
  //region Change type and perform BER decoding


  returnObject = localChangeType(returnObject, newASN1Type);
  resultOffset = returnObject.fromBER(inputBuffer, inputOffset, returnObject.lenBlock.isIndefiniteForm === true ? inputLength : returnObject.lenBlock.length); //endregion
  //region Coping incoming buffer for entire ASN.1 block

  returnObject.valueBeforeDecode = inputBuffer.slice(incomingOffset, incomingOffset + returnObject.blockLength); //endregion

  return {
    offset: resultOffset,
    result: returnObject
  };
} //**************************************************************************************

/**
 * Major function for decoding ASN.1 BER array into internal library structuries
 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array of bytes
 */


function fromBER(inputBuffer) {
  if (inputBuffer.byteLength === 0) {
    const result = new BaseBlock({}, Object);
    result.error = "Input buffer has zero length";
    return {
      offset: -1,
      result
    };
  }

  return LocalFromBER(inputBuffer, 0, inputBuffer.byteLength);
} //**************************************************************************************
//endregion
//**************************************************************************************
//region Major scheme verification function
//**************************************************************************************

/**
 * Compare of two ASN.1 object trees
 * @param {!Object} root Root of input ASN.1 object tree
 * @param {!Object} inputData Input ASN.1 object tree
 * @param {!Object} inputSchema Input ASN.1 schema to compare with
 * @return {{verified: boolean}|{verified:boolean, result: Object}}
 */


function compareSchema(root, inputData, inputSchema) {
  //region Special case for Choice schema element type
  if (inputSchema instanceof Choice) {
    const choiceResult = false;

    for (let j = 0; j < inputSchema.value.length; j++) {
      const result = compareSchema(root, inputData, inputSchema.value[j]);

      if (result.verified === true) {
        return {
          verified: true,
          result: root
        };
      }
    }

    if (choiceResult === false) {
      const _result = {
        verified: false,
        result: {
          error: "Wrong values for Choice type"
        }
      };
      if (inputSchema.hasOwnProperty("name")) _result.name = inputSchema.name;
      return _result;
    }
  } //endregion
  //region Special case for Any schema element type


  if (inputSchema instanceof Any) {
    //region Add named component of ASN.1 schema
    if (inputSchema.hasOwnProperty("name")) root[inputSchema.name] = inputData; //endregion

    return {
      verified: true,
      result: root
    };
  } //endregion
  //region Initial check


  if (root instanceof Object === false) {
    return {
      verified: false,
      result: {
        error: "Wrong root object"
      }
    };
  }

  if (inputData instanceof Object === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 data"
      }
    };
  }

  if (inputSchema instanceof Object === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }

  if ("idBlock" in inputSchema === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  } //endregion
  //region Comparing idBlock properties in ASN.1 data and ASN.1 schema
  //region Encode and decode ASN.1 schema idBlock
  /// <remarks>This encoding/decoding is neccessary because could be an errors in schema definition</remarks>


  if ("fromBER" in inputSchema.idBlock === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }

  if ("toBER" in inputSchema.idBlock === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }

  const encodedId = inputSchema.idBlock.toBER(false);

  if (encodedId.byteLength === 0) {
    return {
      verified: false,
      result: {
        error: "Error encoding idBlock for ASN.1 schema"
      }
    };
  }

  const decodedOffset = inputSchema.idBlock.fromBER(encodedId, 0, encodedId.byteLength);

  if (decodedOffset === -1) {
    return {
      verified: false,
      result: {
        error: "Error decoding idBlock for ASN.1 schema"
      }
    };
  } //endregion
  //region tagClass


  if (inputSchema.idBlock.hasOwnProperty("tagClass") === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }

  if (inputSchema.idBlock.tagClass !== inputData.idBlock.tagClass) {
    return {
      verified: false,
      result: root
    };
  } //endregion
  //region tagNumber


  if (inputSchema.idBlock.hasOwnProperty("tagNumber") === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }

  if (inputSchema.idBlock.tagNumber !== inputData.idBlock.tagNumber) {
    return {
      verified: false,
      result: root
    };
  } //endregion
  //region isConstructed


  if (inputSchema.idBlock.hasOwnProperty("isConstructed") === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }

  if (inputSchema.idBlock.isConstructed !== inputData.idBlock.isConstructed) {
    return {
      verified: false,
      result: root
    };
  } //endregion
  //region isHexOnly


  if ("isHexOnly" in inputSchema.idBlock === false) // Since 'isHexOnly' is an inhirited property
    {
      return {
        verified: false,
        result: {
          error: "Wrong ASN.1 schema"
        }
      };
    }

  if (inputSchema.idBlock.isHexOnly !== inputData.idBlock.isHexOnly) {
    return {
      verified: false,
      result: root
    };
  } //endregion
  //region valueHex


  if (inputSchema.idBlock.isHexOnly === true) {
    if ("valueHex" in inputSchema.idBlock === false) // Since 'valueHex' is an inhirited property
      {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

    const schemaView = new Uint8Array(inputSchema.idBlock.valueHex);
    const asn1View = new Uint8Array(inputData.idBlock.valueHex);

    if (schemaView.length !== asn1View.length) {
      return {
        verified: false,
        result: root
      };
    }

    for (let i = 0; i < schemaView.length; i++) {
      if (schemaView[i] !== asn1View[1]) {
        return {
          verified: false,
          result: root
        };
      }
    }
  } //endregion
  //endregion
  //region Add named component of ASN.1 schema


  if (inputSchema.hasOwnProperty("name")) {
    inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
    if (inputSchema.name !== "") root[inputSchema.name] = inputData;
  } //endregion
  //region Getting next ASN.1 block for comparition


  if (inputSchema.idBlock.isConstructed === true) {
    let admission = 0;
    let result = {
      verified: false
    };
    let maxLength = inputSchema.valueBlock.value.length;

    if (maxLength > 0) {
      if (inputSchema.valueBlock.value[0] instanceof Repeated) maxLength = inputData.valueBlock.value.length;
    } //region Special case when constructive value has no elements


    if (maxLength === 0) {
      return {
        verified: true,
        result: root
      };
    } //endregion
    //region Special case when "inputData" has no values and "inputSchema" has all optional values


    if (inputData.valueBlock.value.length === 0 && inputSchema.valueBlock.value.length !== 0) {
      let _optional = true;

      for (let i = 0; i < inputSchema.valueBlock.value.length; i++) _optional = _optional && (inputSchema.valueBlock.value[i].optional || false);

      if (_optional === true) {
        return {
          verified: true,
          result: root
        };
      } //region Delete early added name of block


      if (inputSchema.hasOwnProperty("name")) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
        if (inputSchema.name !== "") delete root[inputSchema.name];
      } //endregion


      root.error = "Inconsistent object length";
      return {
        verified: false,
        result: root
      };
    } //endregion


    for (let i = 0; i < maxLength; i++) {
      //region Special case when there is an "optional" element of ASN.1 schema at the end
      if (i - admission >= inputData.valueBlock.value.length) {
        if (inputSchema.valueBlock.value[i].optional === false) {
          const _result = {
            verified: false,
            result: root
          };
          root.error = "Inconsistent length between ASN.1 data and schema"; //region Delete early added name of block

          if (inputSchema.hasOwnProperty("name")) {
            inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");

            if (inputSchema.name !== "") {
              delete root[inputSchema.name];
              _result.name = inputSchema.name;
            }
          } //endregion


          return _result;
        }
      } //endregion
      else {
          //region Special case for Repeated type of ASN.1 schema element
          if (inputSchema.valueBlock.value[0] instanceof Repeated) {
            result = compareSchema(root, inputData.valueBlock.value[i], inputSchema.valueBlock.value[0].value);

            if (result.verified === false) {
              if (inputSchema.valueBlock.value[0].optional === true) admission++;else {
                //region Delete early added name of block
                if (inputSchema.hasOwnProperty("name")) {
                  inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                  if (inputSchema.name !== "") delete root[inputSchema.name];
                } //endregion


                return result;
              }
            }

            if ("name" in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].name.length > 0) {
              let arrayRoot = {};
              if ("local" in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].local === true) arrayRoot = inputData;else arrayRoot = root;
              if (typeof arrayRoot[inputSchema.valueBlock.value[0].name] === "undefined") arrayRoot[inputSchema.valueBlock.value[0].name] = [];
              arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[i]);
            }
          } //endregion
          else {
              result = compareSchema(root, inputData.valueBlock.value[i - admission], inputSchema.valueBlock.value[i]);

              if (result.verified === false) {
                if (inputSchema.valueBlock.value[i].optional === true) admission++;else {
                  //region Delete early added name of block
                  if (inputSchema.hasOwnProperty("name")) {
                    inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                    if (inputSchema.name !== "") delete root[inputSchema.name];
                  } //endregion


                  return result;
                }
              }
            }
        }
    }

    if (result.verified === false) // The situation may take place if last element is "optional" and verification failed
      {
        const _result = {
          verified: false,
          result: root
        }; //region Delete early added name of block

        if (inputSchema.hasOwnProperty("name")) {
          inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");

          if (inputSchema.name !== "") {
            delete root[inputSchema.name];
            _result.name = inputSchema.name;
          }
        } //endregion


        return _result;
      }

    return {
      verified: true,
      result: root
    };
  } //endregion
  //region Ability to parse internal value for primitive-encoded value (value of OctetString, for example)


  if ("primitiveSchema" in inputSchema && "valueHex" in inputData.valueBlock) {
    //region Decoding of raw ASN.1 data
    const asn1 = fromBER(inputData.valueBlock.valueHex);

    if (asn1.offset === -1) {
      const _result = {
        verified: false,
        result: asn1.result
      }; //region Delete early added name of block

      if (inputSchema.hasOwnProperty("name")) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");

        if (inputSchema.name !== "") {
          delete root[inputSchema.name];
          _result.name = inputSchema.name;
        }
      } //endregion


      return _result;
    } //endregion


    return compareSchema(root, asn1.result, inputSchema.primitiveSchema);
  }

  return {
    verified: true,
    result: root
  }; //endregion
} //**************************************************************************************
//noinspection JSUnusedGlobalSymbols

/**
 * ASN.1 schema verification for ArrayBuffer data
 * @param {!ArrayBuffer} inputBuffer Input BER-encoded ASN.1 data
 * @param {!Object} inputSchema Input ASN.1 schema to verify against to
 * @return {{verified: boolean}|{verified:boolean, result: Object}}
 */


function verifySchema(inputBuffer, inputSchema) {
  //region Initial check
  if (inputSchema instanceof Object === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema type"
      }
    };
  } //endregion
  //region Decoding of raw ASN.1 data


  const asn1 = fromBER(inputBuffer);

  if (asn1.offset === -1) {
    return {
      verified: false,
      result: asn1.result
    };
  } //endregion
  //region Compare ASN.1 struct with input schema


  return compareSchema(asn1.result, asn1.result, inputSchema); //endregion
} //**************************************************************************************
//endregion
//**************************************************************************************
//region Major function converting JSON to ASN.1 objects
//**************************************************************************************
//noinspection JSUnusedGlobalSymbols

/**
 * Converting from JSON to ASN.1 objects
 * @param {string|Object} json JSON string or object to convert to ASN.1 objects
 */


function fromJSON(json) {} // TODO Implement
//**************************************************************************************
//endregion
//**************************************************************************************

},{"pvutils":17}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getUTCDate = getUTCDate;
exports.getParametersValue = getParametersValue;
exports.bufferToHexCodes = bufferToHexCodes;
exports.checkBufferParams = checkBufferParams;
exports.utilFromBase = utilFromBase;
exports.utilToBase = utilToBase;
exports.utilConcatBuf = utilConcatBuf;
exports.utilConcatView = utilConcatView;
exports.utilDecodeTC = utilDecodeTC;
exports.utilEncodeTC = utilEncodeTC;
exports.isEqualBuffer = isEqualBuffer;
exports.padNumber = padNumber;
exports.toBase64 = toBase64;
exports.fromBase64 = fromBase64;
exports.arrayBufferToString = arrayBufferToString;
exports.stringToArrayBuffer = stringToArrayBuffer;
exports.nearestPowerOf2 = nearestPowerOf2;
exports.clearProps = clearProps;
//**************************************************************************************
/**
 * Making UTC date from local date
 * @param {Date} date Date to convert from
 * @returns {Date}
 */
function getUTCDate(date) {
	// noinspection NestedFunctionCallJS, MagicNumberJS
	return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
}
//**************************************************************************************
// noinspection FunctionWithMultipleReturnPointsJS
/**
 * Get value for input parameters, or set a default value
 * @param {Object} parameters
 * @param {string} name
 * @param defaultValue
 */
function getParametersValue(parameters, name, defaultValue) {
	// noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS
	if (parameters instanceof Object === false) return defaultValue;

	// noinspection NonBlockStatementBodyJS
	if (name in parameters) return parameters[name];

	return defaultValue;
}
//**************************************************************************************
/**
 * Converts "ArrayBuffer" into a hexdecimal string
 * @param {ArrayBuffer} inputBuffer
 * @param {number} [inputOffset=0]
 * @param {number} [inputLength=inputBuffer.byteLength]
 * @param {boolean} [insertSpace=false]
 * @returns {string}
 */
function bufferToHexCodes(inputBuffer, inputOffset = 0, inputLength = inputBuffer.byteLength - inputOffset, insertSpace = false) {
	let result = "";

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = new Uint8Array(inputBuffer, inputOffset, inputLength)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			const item = _step.value;

			// noinspection ChainedFunctionCallJS
			const str = item.toString(16).toUpperCase();

			// noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS
			if (str.length === 1) result += "0";

			result += str;

			// noinspection NonBlockStatementBodyJS
			if (insertSpace) result += " ";
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return result.trim();
}
//**************************************************************************************
// noinspection JSValidateJSDoc, FunctionWithMultipleReturnPointsJS
/**
 * Check input "ArrayBuffer" for common functions
 * @param {LocalBaseBlock} baseBlock
 * @param {ArrayBuffer} inputBuffer
 * @param {number} inputOffset
 * @param {number} inputLength
 * @returns {boolean}
 */
function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
	// noinspection ConstantOnRightSideOfComparisonJS
	if (inputBuffer instanceof ArrayBuffer === false) {
		// noinspection JSUndefinedPropertyAssignment
		baseBlock.error = "Wrong parameter: inputBuffer must be \"ArrayBuffer\"";
		return false;
	}

	// noinspection ConstantOnRightSideOfComparisonJS
	if (inputBuffer.byteLength === 0) {
		// noinspection JSUndefinedPropertyAssignment
		baseBlock.error = "Wrong parameter: inputBuffer has zero length";
		return false;
	}

	// noinspection ConstantOnRightSideOfComparisonJS
	if (inputOffset < 0) {
		// noinspection JSUndefinedPropertyAssignment
		baseBlock.error = "Wrong parameter: inputOffset less than zero";
		return false;
	}

	// noinspection ConstantOnRightSideOfComparisonJS
	if (inputLength < 0) {
		// noinspection JSUndefinedPropertyAssignment
		baseBlock.error = "Wrong parameter: inputLength less than zero";
		return false;
	}

	// noinspection ConstantOnRightSideOfComparisonJS
	if (inputBuffer.byteLength - inputOffset - inputLength < 0) {
		// noinspection JSUndefinedPropertyAssignment
		baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
		return false;
	}

	return true;
}
//**************************************************************************************
// noinspection FunctionWithMultipleReturnPointsJS
/**
 * Convert number from 2^base to 2^10
 * @param {Uint8Array} inputBuffer
 * @param {number} inputBase
 * @returns {number}
 */
function utilFromBase(inputBuffer, inputBase) {
	let result = 0;

	// noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS
	if (inputBuffer.length === 1) return inputBuffer[0];

	// noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS
	for (let i = inputBuffer.length - 1; i >= 0; i--) result += inputBuffer[inputBuffer.length - 1 - i] * Math.pow(2, inputBase * i);

	return result;
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS
/**
 * Convert number from 2^10 to 2^base
 * @param {!number} value The number to convert
 * @param {!number} base The base for 2^base
 * @param {number} [reserved=0] Pre-defined number of bytes in output array (-1 = limited by function itself)
 * @returns {ArrayBuffer}
 */
function utilToBase(value, base, reserved = -1) {
	const internalReserved = reserved;
	let internalValue = value;

	let result = 0;
	let biggest = Math.pow(2, base);

	// noinspection ConstantOnRightSideOfComparisonJS
	for (let i = 1; i < 8; i++) {
		if (value < biggest) {
			let retBuf;

			// noinspection ConstantOnRightSideOfComparisonJS
			if (internalReserved < 0) {
				retBuf = new ArrayBuffer(i);
				result = i;
			} else {
				// noinspection NonBlockStatementBodyJS
				if (internalReserved < i) return new ArrayBuffer(0);

				retBuf = new ArrayBuffer(internalReserved);

				result = internalReserved;
			}

			const retView = new Uint8Array(retBuf);

			// noinspection ConstantOnRightSideOfComparisonJS
			for (let j = i - 1; j >= 0; j--) {
				const basis = Math.pow(2, j * base);

				retView[result - j - 1] = Math.floor(internalValue / basis);
				internalValue -= retView[result - j - 1] * basis;
			}

			return retBuf;
		}

		biggest *= Math.pow(2, base);
	}

	return new ArrayBuffer(0);
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS
/**
 * Concatenate two ArrayBuffers
 * @param {...ArrayBuffer} buffers Set of ArrayBuffer
 */
function utilConcatBuf(...buffers) {
	//region Initial variables
	let outputLength = 0;
	let prevLength = 0;
	//endregion

	//region Calculate output length

	// noinspection NonBlockStatementBodyJS
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = buffers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			const buffer = _step2.value;

			outputLength += buffer.byteLength;
		} //endregion
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	const retBuf = new ArrayBuffer(outputLength);
	const retView = new Uint8Array(retBuf);

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = buffers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			const buffer = _step3.value;

			// noinspection NestedFunctionCallJS
			retView.set(new Uint8Array(buffer), prevLength);
			prevLength += buffer.byteLength;
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return retBuf;
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS
/**
 * Concatenate two Uint8Array
 * @param {...Uint8Array} views Set of Uint8Array
 */
function utilConcatView(...views) {
	//region Initial variables
	let outputLength = 0;
	let prevLength = 0;
	//endregion

	//region Calculate output length
	// noinspection NonBlockStatementBodyJS
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = views[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			const view = _step4.value;

			outputLength += view.length;
		} //endregion
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	const retBuf = new ArrayBuffer(outputLength);
	const retView = new Uint8Array(retBuf);

	var _iteratorNormalCompletion5 = true;
	var _didIteratorError5 = false;
	var _iteratorError5 = undefined;

	try {
		for (var _iterator5 = views[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
			const view = _step5.value;

			retView.set(view, prevLength);
			prevLength += view.length;
		}
	} catch (err) {
		_didIteratorError5 = true;
		_iteratorError5 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion5 && _iterator5.return) {
				_iterator5.return();
			}
		} finally {
			if (_didIteratorError5) {
				throw _iteratorError5;
			}
		}
	}

	return retView;
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS
/**
 * Decoding of "two complement" values
 * The function must be called in scope of instance of "hexBlock" class ("valueHex" and "warnings" properties must be present)
 * @returns {number}
 */
function utilDecodeTC() {
	const buf = new Uint8Array(this.valueHex);

	// noinspection ConstantOnRightSideOfComparisonJS
	if (this.valueHex.byteLength >= 2) {
		//noinspection JSBitwiseOperatorUsage, ConstantOnRightSideOfComparisonJS, LocalVariableNamingConventionJS, MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const condition1 = buf[0] === 0xFF && buf[1] & 0x80;
		// noinspection ConstantOnRightSideOfComparisonJS, LocalVariableNamingConventionJS, MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const condition2 = buf[0] === 0x00 && (buf[1] & 0x80) === 0x00;

		// noinspection NonBlockStatementBodyJS
		if (condition1 || condition2) this.warnings.push("Needlessly long format");
	}

	//region Create big part of the integer
	const bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
	const bigIntView = new Uint8Array(bigIntBuffer);
	// noinspection NonBlockStatementBodyJS
	for (let i = 0; i < this.valueHex.byteLength; i++) bigIntView[i] = 0;

	// noinspection MagicNumberJS, NonShortCircuitBooleanExpressionJS
	bigIntView[0] = buf[0] & 0x80; // mask only the biggest bit

	const bigInt = utilFromBase(bigIntView, 8);
	//endregion

	//region Create small part of the integer
	const smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
	const smallIntView = new Uint8Array(smallIntBuffer);
	// noinspection NonBlockStatementBodyJS
	for (let j = 0; j < this.valueHex.byteLength; j++) smallIntView[j] = buf[j];

	// noinspection MagicNumberJS
	smallIntView[0] &= 0x7F; // mask biggest bit

	const smallInt = utilFromBase(smallIntView, 8);
	//endregion

	return smallInt - bigInt;
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS
/**
 * Encode integer value to "two complement" format
 * @param {number} value Value to encode
 * @returns {ArrayBuffer}
 */
function utilEncodeTC(value) {
	// noinspection ConstantOnRightSideOfComparisonJS, ConditionalExpressionJS
	const modValue = value < 0 ? value * -1 : value;
	let bigInt = 128;

	// noinspection ConstantOnRightSideOfComparisonJS
	for (let i = 1; i < 8; i++) {
		if (modValue <= bigInt) {
			// noinspection ConstantOnRightSideOfComparisonJS
			if (value < 0) {
				const smallInt = bigInt - modValue;

				const retBuf = utilToBase(smallInt, 8, i);
				const retView = new Uint8Array(retBuf);

				// noinspection MagicNumberJS
				retView[0] |= 0x80;

				return retBuf;
			}

			let retBuf = utilToBase(modValue, 8, i);
			let retView = new Uint8Array(retBuf);

			//noinspection JSBitwiseOperatorUsage, MagicNumberJS, NonShortCircuitBooleanExpressionJS
			if (retView[0] & 0x80) {
				//noinspection JSCheckFunctionSignatures
				const tempBuf = retBuf.slice(0);
				const tempView = new Uint8Array(tempBuf);

				retBuf = new ArrayBuffer(retBuf.byteLength + 1);
				// noinspection ReuseOfLocalVariableJS
				retView = new Uint8Array(retBuf);

				// noinspection NonBlockStatementBodyJS
				for (let k = 0; k < tempBuf.byteLength; k++) retView[k + 1] = tempView[k];

				// noinspection MagicNumberJS
				retView[0] = 0x00;
			}

			return retBuf;
		}

		bigInt *= Math.pow(2, 8);
	}

	return new ArrayBuffer(0);
}
//**************************************************************************************
// noinspection FunctionWithMultipleReturnPointsJS, ParameterNamingConventionJS
/**
 * Compare two array buffers
 * @param {!ArrayBuffer} inputBuffer1
 * @param {!ArrayBuffer} inputBuffer2
 * @returns {boolean}
 */
function isEqualBuffer(inputBuffer1, inputBuffer2) {
	// noinspection NonBlockStatementBodyJS
	if (inputBuffer1.byteLength !== inputBuffer2.byteLength) return false;

	// noinspection LocalVariableNamingConventionJS
	const view1 = new Uint8Array(inputBuffer1);
	// noinspection LocalVariableNamingConventionJS
	const view2 = new Uint8Array(inputBuffer2);

	for (let i = 0; i < view1.length; i++) {
		// noinspection NonBlockStatementBodyJS
		if (view1[i] !== view2[i]) return false;
	}

	return true;
}
//**************************************************************************************
// noinspection FunctionWithMultipleReturnPointsJS
/**
 * Pad input number with leade "0" if needed
 * @returns {string}
 * @param {number} inputNumber
 * @param {number} fullLength
 */
function padNumber(inputNumber, fullLength) {
	const str = inputNumber.toString(10);

	// noinspection NonBlockStatementBodyJS
	if (fullLength < str.length) return "";

	const dif = fullLength - str.length;

	const padding = new Array(dif);
	// noinspection NonBlockStatementBodyJS
	for (let i = 0; i < dif; i++) padding[i] = "0";

	const paddingString = padding.join("");

	return paddingString.concat(str);
}
//**************************************************************************************
const base64Template = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const base64UrlTemplate = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS, OverlyComplexFunctionJS, FunctionTooLongJS, FunctionNamingConventionJS
/**
 * Encode string into BASE64 (or "base64url")
 * @param {string} input
 * @param {boolean} useUrlTemplate If "true" then output would be encoded using "base64url"
 * @param {boolean} skipPadding Skip BASE-64 padding or not
 * @param {boolean} skipLeadingZeros Skip leading zeros in input data or not
 * @returns {string}
 */
function toBase64(input, useUrlTemplate = false, skipPadding = false, skipLeadingZeros = false) {
	let i = 0;

	// noinspection LocalVariableNamingConventionJS
	let flag1 = 0;
	// noinspection LocalVariableNamingConventionJS
	let flag2 = 0;

	let output = "";

	// noinspection ConditionalExpressionJS
	const template = useUrlTemplate ? base64UrlTemplate : base64Template;

	if (skipLeadingZeros) {
		let nonZeroPosition = 0;

		for (let i = 0; i < input.length; i++) {
			// noinspection ConstantOnRightSideOfComparisonJS
			if (input.charCodeAt(i) !== 0) {
				nonZeroPosition = i;
				// noinspection BreakStatementJS
				break;
			}
		}

		// noinspection AssignmentToFunctionParameterJS
		input = input.slice(nonZeroPosition);
	}

	while (i < input.length) {
		// noinspection LocalVariableNamingConventionJS, IncrementDecrementResultUsedJS
		const chr1 = input.charCodeAt(i++);
		// noinspection NonBlockStatementBodyJS
		if (i >= input.length) flag1 = 1;
		// noinspection LocalVariableNamingConventionJS, IncrementDecrementResultUsedJS
		const chr2 = input.charCodeAt(i++);
		// noinspection NonBlockStatementBodyJS
		if (i >= input.length) flag2 = 1;
		// noinspection LocalVariableNamingConventionJS, IncrementDecrementResultUsedJS
		const chr3 = input.charCodeAt(i++);

		// noinspection LocalVariableNamingConventionJS
		const enc1 = chr1 >> 2;
		// noinspection LocalVariableNamingConventionJS, MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const enc2 = (chr1 & 0x03) << 4 | chr2 >> 4;
		// noinspection LocalVariableNamingConventionJS, MagicNumberJS, NonShortCircuitBooleanExpressionJS
		let enc3 = (chr2 & 0x0F) << 2 | chr3 >> 6;
		// noinspection LocalVariableNamingConventionJS, MagicNumberJS, NonShortCircuitBooleanExpressionJS
		let enc4 = chr3 & 0x3F;

		// noinspection ConstantOnRightSideOfComparisonJS
		if (flag1 === 1) {
			// noinspection NestedAssignmentJS, AssignmentResultUsedJS, MagicNumberJS
			enc3 = enc4 = 64;
		} else {
			// noinspection ConstantOnRightSideOfComparisonJS
			if (flag2 === 1) {
				// noinspection MagicNumberJS
				enc4 = 64;
			}
		}

		// noinspection NonBlockStatementBodyJS
		if (skipPadding) {
			// noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS, MagicNumberJS
			if (enc3 === 64) output += `${template.charAt(enc1)}${template.charAt(enc2)}`;else {
				// noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS, MagicNumberJS
				if (enc4 === 64) output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}`;else output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;
			}
		} else output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;
	}

	return output;
}
//**************************************************************************************
// noinspection FunctionWithMoreThanThreeNegationsJS, FunctionWithMultipleLoopsJS, OverlyComplexFunctionJS, FunctionNamingConventionJS
/**
 * Decode string from BASE64 (or "base64url")
 * @param {string} input
 * @param {boolean} [useUrlTemplate=false] If "true" then output would be encoded using "base64url"
 * @param {boolean} [cutTailZeros=false] If "true" then cut tailing zeroz from function result
 * @returns {string}
 */
function fromBase64(input, useUrlTemplate = false, cutTailZeros = false) {
	// noinspection ConditionalExpressionJS
	const template = useUrlTemplate ? base64UrlTemplate : base64Template;

	//region Aux functions
	// noinspection FunctionWithMultipleReturnPointsJS, NestedFunctionJS
	function indexof(toSearch) {
		// noinspection ConstantOnRightSideOfComparisonJS, MagicNumberJS
		for (let i = 0; i < 64; i++) {
			// noinspection NonBlockStatementBodyJS
			if (template.charAt(i) === toSearch) return i;
		}

		// noinspection MagicNumberJS
		return 64;
	}

	// noinspection NestedFunctionJS
	function test(incoming) {
		// noinspection ConstantOnRightSideOfComparisonJS, ConditionalExpressionJS, MagicNumberJS
		return incoming === 64 ? 0x00 : incoming;
	}
	//endregion

	let i = 0;

	let output = "";

	while (i < input.length) {
		// noinspection NestedFunctionCallJS, LocalVariableNamingConventionJS, IncrementDecrementResultUsedJS
		const enc1 = indexof(input.charAt(i++));
		// noinspection NestedFunctionCallJS, LocalVariableNamingConventionJS, ConditionalExpressionJS, MagicNumberJS, IncrementDecrementResultUsedJS
		const enc2 = i >= input.length ? 0x00 : indexof(input.charAt(i++));
		// noinspection NestedFunctionCallJS, LocalVariableNamingConventionJS, ConditionalExpressionJS, MagicNumberJS, IncrementDecrementResultUsedJS
		const enc3 = i >= input.length ? 0x00 : indexof(input.charAt(i++));
		// noinspection NestedFunctionCallJS, LocalVariableNamingConventionJS, ConditionalExpressionJS, MagicNumberJS, IncrementDecrementResultUsedJS
		const enc4 = i >= input.length ? 0x00 : indexof(input.charAt(i++));

		// noinspection LocalVariableNamingConventionJS, NonShortCircuitBooleanExpressionJS
		const chr1 = test(enc1) << 2 | test(enc2) >> 4;
		// noinspection LocalVariableNamingConventionJS, MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const chr2 = (test(enc2) & 0x0F) << 4 | test(enc3) >> 2;
		// noinspection LocalVariableNamingConventionJS, MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const chr3 = (test(enc3) & 0x03) << 6 | test(enc4);

		output += String.fromCharCode(chr1);

		// noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS, MagicNumberJS
		if (enc3 !== 64) output += String.fromCharCode(chr2);

		// noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS, MagicNumberJS
		if (enc4 !== 64) output += String.fromCharCode(chr3);
	}

	if (cutTailZeros) {
		const outputLength = output.length;
		let nonZeroStart = -1;

		// noinspection ConstantOnRightSideOfComparisonJS
		for (let i = outputLength - 1; i >= 0; i--) {
			// noinspection ConstantOnRightSideOfComparisonJS
			if (output.charCodeAt(i) !== 0) {
				nonZeroStart = i;
				// noinspection BreakStatementJS
				break;
			}
		}

		// noinspection NonBlockStatementBodyJS, NegatedIfStatementJS
		if (nonZeroStart !== -1) output = output.slice(0, nonZeroStart + 1);else output = "";
	}

	return output;
}
//**************************************************************************************
function arrayBufferToString(buffer) {
	let resultString = "";
	const view = new Uint8Array(buffer);

	// noinspection NonBlockStatementBodyJS
	var _iteratorNormalCompletion6 = true;
	var _didIteratorError6 = false;
	var _iteratorError6 = undefined;

	try {
		for (var _iterator6 = view[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
			const element = _step6.value;

			resultString += String.fromCharCode(element);
		}
	} catch (err) {
		_didIteratorError6 = true;
		_iteratorError6 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion6 && _iterator6.return) {
				_iterator6.return();
			}
		} finally {
			if (_didIteratorError6) {
				throw _iteratorError6;
			}
		}
	}

	return resultString;
}
//**************************************************************************************
function stringToArrayBuffer(str) {
	const stringLength = str.length;

	const resultBuffer = new ArrayBuffer(stringLength);
	const resultView = new Uint8Array(resultBuffer);

	// noinspection NonBlockStatementBodyJS
	for (let i = 0; i < stringLength; i++) resultView[i] = str.charCodeAt(i);

	return resultBuffer;
}
//**************************************************************************************
const log2 = Math.log(2);
//**************************************************************************************
// noinspection FunctionNamingConventionJS
/**
 * Get nearest to input length power of 2
 * @param {number} length Current length of existing array
 * @returns {number}
 */
function nearestPowerOf2(length) {
	const base = Math.log(length) / log2;

	const floor = Math.floor(base);
	const round = Math.round(base);

	// noinspection ConditionalExpressionJS
	return floor === round ? floor : round;
}
//**************************************************************************************
/**
 * Delete properties by name from specified object
 * @param {Object} object Object to delete properties from
 * @param {Array.<string>} propsArray Array of properties names
 */
function clearProps(object, propsArray) {
	var _iteratorNormalCompletion7 = true;
	var _didIteratorError7 = false;
	var _iteratorError7 = undefined;

	try {
		for (var _iterator7 = propsArray[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
			const prop = _step7.value;

			delete object[prop];
		}
	} catch (err) {
		_didIteratorError7 = true;
		_iteratorError7 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion7 && _iterator7.return) {
				_iterator7.return();
			}
		} finally {
			if (_didIteratorError7) {
				throw _iteratorError7;
			}
		}
	}
}
//**************************************************************************************

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parseByteMap = parseByteMap;
/*
 * Copyright (c) 2016-2018, Peculiar Ventures
 * All rights reserved.
 *
 * Author 2016-2018, Yury Strozhevsky <www.strozhevsky.com>.
 *
 */
//**************************************************************************************
class ByteStream {
	//**********************************************************************************
	// noinspection FunctionWithMultipleLoopsJS
	/**
  * Constructor for ByteStream class
  * @param {{[length]: number, [stub]: number, [view]: Uint8Array, [buffer]: ArrayBuffer, [string]: string, [hexstring]: string}} parameters
  */
	constructor(parameters = {}) {
		this.clear();

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = Object.keys(parameters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				const key = _step.value;

				switch (key) {
					case "length":
						this.length = parameters.length;
						break;
					case "stub":
						// noinspection NonBlockStatementBodyJS
						for (let i = 0; i < this._view.length; i++) this._view[i] = parameters.stub;
						break;
					case "view":
						this.fromUint8Array(parameters.view);
						break;
					case "buffer":
						this.fromArrayBuffer(parameters.buffer);
						break;
					case "string":
						this.fromString(parameters.string);
						break;
					case "hexstring":
						this.fromHexString(parameters.hexstring);
						break;
					default:
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
	//**********************************************************************************
	/**
  * Setter for "buffer"
  * @param {ArrayBuffer} value
  */
	set buffer(value) {
		this._buffer = value.slice(0);
		this._view = new Uint8Array(this._buffer);
	}
	//**********************************************************************************
	/**
  * Getter for "buffer"
  * @returns {ArrayBuffer}
  */
	get buffer() {
		return this._buffer;
	}
	//**********************************************************************************
	/**
  * Setter for "view"
  * @param {Uint8Array} value
  */
	set view(value) {
		this._buffer = new ArrayBuffer(value.length);
		this._view = new Uint8Array(this._buffer);

		this._view.set(value);
	}
	//**********************************************************************************
	/**
  * Getter for "view"
  * @returns {Uint8Array}
  */
	get view() {
		return this._view;
	}
	//**********************************************************************************
	/**
  * Getter for "length"
  * @returns {number}
  */
	get length() {
		return this._buffer.byteLength;
	}
	//**********************************************************************************
	/**
  * Setter for "length"
  * @param {number} value
  */
	set length(value) {
		this._buffer = new ArrayBuffer(value);
		this._view = new Uint8Array(this._buffer);
	}
	//**********************************************************************************
	/**
  * Clear existing stream
  */
	clear() {
		this._buffer = new ArrayBuffer(0);
		this._view = new Uint8Array(this._buffer);
	}
	//**********************************************************************************
	/**
  * Initialize "Stream" object from existing "ArrayBuffer"
  * @param {!ArrayBuffer} array The ArrayBuffer to copy from
  */
	fromArrayBuffer(array) {
		this.buffer = array;
	}
	//**********************************************************************************
	// noinspection FunctionNamingConventionJS
	/**
  * Initialize "Stream" object from existing "Uint8Array"
  * @param {!Uint8Array} array The Uint8Array to copy from
  */
	fromUint8Array(array) {
		this._buffer = new ArrayBuffer(array.length);
		this._view = new Uint8Array(this._buffer);

		this._view.set(array);
	}
	//**********************************************************************************
	/**
  * Initialize "Stream" object from existing string
  * @param {string} string The string to initialize from
  */
	fromString(string) {
		const stringLength = string.length;

		this.length = stringLength;

		// noinspection NonBlockStatementBodyJS
		for (let i = 0; i < stringLength; i++) this.view[i] = string.charCodeAt(i);
	}
	//**********************************************************************************
	/**
  * Represent "Stream" object content as a string
  * @param {number} [start] Start position to convert to string
  * @param {number} [length] Length of array to convert to string
  * @returns {string}
  */
	toString(start = 0, length = this.view.length - start) {
		//region Initial variables
		let result = "";
		//endregion

		//region Check input parameters
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start >= this.view.length || start < 0) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length >= this.view.length || length < 0) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.view.length - start;
		}
		//endregion

		//region Convert array of bytes to string
		// noinspection NonBlockStatementBodyJS
		for (let i = start; i < start + length; i++) result += String.fromCharCode(this.view[i]);
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionTooLongJS
	/**
  * Initialize "Stream" object from existing hexdecimal string
  * @param {string} hexString String to initialize from
  */
	fromHexString(hexString) {
		//region Initial variables
		const stringLength = hexString.length;

		this.buffer = new ArrayBuffer(stringLength >> 1);
		this.view = new Uint8Array(this.buffer);

		const hexMap = new Map();

		// noinspection MagicNumberJS
		hexMap.set("0", 0x00);
		// noinspection MagicNumberJS
		hexMap.set("1", 0x01);
		// noinspection MagicNumberJS
		hexMap.set("2", 0x02);
		// noinspection MagicNumberJS
		hexMap.set("3", 0x03);
		// noinspection MagicNumberJS
		hexMap.set("4", 0x04);
		// noinspection MagicNumberJS
		hexMap.set("5", 0x05);
		// noinspection MagicNumberJS
		hexMap.set("6", 0x06);
		// noinspection MagicNumberJS
		hexMap.set("7", 0x07);
		// noinspection MagicNumberJS
		hexMap.set("8", 0x08);
		// noinspection MagicNumberJS
		hexMap.set("9", 0x09);
		// noinspection MagicNumberJS
		hexMap.set("A", 0x0A);
		// noinspection MagicNumberJS
		hexMap.set("a", 0x0A);
		// noinspection MagicNumberJS
		hexMap.set("B", 0x0B);
		// noinspection MagicNumberJS
		hexMap.set("b", 0x0B);
		// noinspection MagicNumberJS
		hexMap.set("C", 0x0C);
		// noinspection MagicNumberJS
		hexMap.set("c", 0x0C);
		// noinspection MagicNumberJS
		hexMap.set("D", 0x0D);
		// noinspection MagicNumberJS
		hexMap.set("d", 0x0D);
		// noinspection MagicNumberJS
		hexMap.set("E", 0x0E);
		// noinspection MagicNumberJS
		hexMap.set("e", 0x0E);
		// noinspection MagicNumberJS
		hexMap.set("F", 0x0F);
		// noinspection MagicNumberJS
		hexMap.set("f", 0x0F);

		let j = 0;
		// noinspection MagicNumberJS
		let temp = 0x00;
		//endregion

		//region Convert char-by-char
		for (let i = 0; i < stringLength; i++) {
			// noinspection NegatedIfStatementJS
			if (!(i % 2)) {
				// noinspection NestedFunctionCallJS
				temp = hexMap.get(hexString.charAt(i)) << 4;
			} else {
				// noinspection NestedFunctionCallJS
				temp |= hexMap.get(hexString.charAt(i));

				this.view[j] = temp;
				j++;
			}
		}
		//endregion
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Represent "Stream" object content as a hexdecimal string
  * @param {number} [start=0] Start position to convert to string
  * @param {number} [length=(this.view.length - start)] Length of array to convert to string
  * @returns {string}
  */
	toHexString(start = 0, length = this.view.length - start) {
		//region Initial variables
		let result = "";
		//endregion

		//region Check input parameters
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start >= this.view.length || start < 0) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length >= this.view.length || length < 0) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.view.length - start;
		}
		//endregion

		for (let i = start; i < start + length; i++) {
			// noinspection ChainedFunctionCallJS
			const str = this.view[i].toString(16).toUpperCase();
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, ConditionalExpressionJS, EqualityComparisonWithCoercionJS
			result = result + (str.length == 1 ? "0" : "") + str;
		}

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Return copy of existing "Stream"
  * @param {number} [start=0] Start position of the copy
  * @param {number} [length=this.view.length] Length of the copy
  * @returns {ByteStream}
  */
	copy(start = 0, length = this._buffer.byteLength - start) {
		//region Check input parameters
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (start === 0 && this._buffer.byteLength === 0) return new ByteStream();

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (start < 0 || start > this._buffer.byteLength - 1) throw new Error(`Wrong start position: ${start}`);
		//endregion

		const stream = new ByteStream();

		stream._buffer = this._buffer.slice(start, start + length);
		stream._view = new Uint8Array(stream._buffer);

		return stream;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Return slice of existing "Stream"
  * @param {number} [start=0] Start position of the slice
  * @param {number} [end=this._buffer.byteLength] End position of the slice
  * @returns {ByteStream}
  */
	slice(start = 0, end = this._buffer.byteLength) {
		//region Check input parameters
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (start === 0 && this._buffer.byteLength === 0) return new ByteStream();

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (start < 0 || start > this._buffer.byteLength - 1) throw new Error(`Wrong start position: ${start}`);
		//endregion

		const stream = new ByteStream();

		stream._buffer = this._buffer.slice(start, end);
		stream._view = new Uint8Array(stream._buffer);

		return stream;
	}
	//**********************************************************************************
	/**
  * Change size of existing "Stream"
  * @param {!number} size Size for new "Stream"
  */
	realloc(size) {
		//region Initial variables
		const buffer = new ArrayBuffer(size);
		const view = new Uint8Array(buffer);
		//endregion

		//region Create a new ArrayBuffer content
		// noinspection NonBlockStatementBodyJS
		if (size > this._view.length) view.set(this._view);else {
			// noinspection NestedFunctionCallJS
			view.set(new Uint8Array(this._buffer, 0, size));
		}
		//endregion

		//region Initialize "Stream" with new "ArrayBuffer"
		this._buffer = buffer.slice(0);
		this._view = new Uint8Array(this._buffer);
		//endregion
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Append a new "Stream" content to the current "Stream"
  * @param {ByteStream} stream A new "stream" to append to current "stream"
  */
	append(stream) {
		//region Initial variables
		const initialSize = this._buffer.byteLength;
		const streamViewLength = stream._buffer.byteLength;

		const copyView = stream._view.slice();
		//endregion

		//region Re-allocate current internal buffer
		this.realloc(initialSize + streamViewLength);
		//endregion

		//region Copy input stream content to a new place
		this._view.set(copyView, initialSize);
		//endregion
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Insert "Stream" content to the current "Stream" at specific position
  * @param {ByteStream} stream A new "stream" to insert to current "stream"
  * @param {number} [start=0] Start position to insert to
  * @param {number} [length]
  * @returns {boolean}
  */
	insert(stream, start = 0, length = this._buffer.byteLength - start) {
		//region Initial variables
		// noinspection NonBlockStatementBodyJS
		if (start > this._buffer.byteLength - 1) return false;

		if (length > this._buffer.byteLength - start) {
			// noinspection AssignmentToFunctionParameterJS
			length = this._buffer.byteLength - start;
		}
		//endregion

		//region Check input variables
		if (length > stream._buffer.byteLength) {
			// noinspection AssignmentToFunctionParameterJS
			length = stream._buffer.byteLength;
		}
		//endregion

		//region Update content of the current stream
		// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (length == stream._buffer.byteLength) this._view.set(stream._view, start);else {
			// noinspection NestedFunctionCallJS
			this._view.set(stream._view.slice(0, length), start);
		}
		//endregion

		return true;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Check that two "Stream" objects has equal content
  * @param {ByteStream} stream Stream to compare with
  * @returns {boolean}
  */
	isEqual(stream) {
		//region Check length of both buffers
		// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (this._buffer.byteLength != stream._buffer.byteLength) return false;
		//endregion

		//region Compare each byte of both buffers
		for (let i = 0; i < stream._buffer.byteLength; i++) {
			// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
			if (this.view[i] != stream.view[i]) return false;
		}
		//endregion

		return true;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Check that current "Stream" objects has equal content with input "Uint8Array"
  * @param {Uint8Array} view View to compare with
  * @returns {boolean}
  */
	isEqualView(view) {
		//region Check length of both buffers
		// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (view.length != this.view.length) return false;
		//endregion

		//region Compare each byte of both buffers
		for (let i = 0; i < view.length; i++) {
			// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
			if (this.view[i] != view[i]) return false;
		}
		//endregion

		return true;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS, OverlyComplexFunctionJS, FunctionTooLongJS
	/**
  * Find any byte pattern in "Stream"
  * @param {ByteStream} pattern Stream having pattern value
  * @param {?number} [start] Start position to search from
  * @param {?number} [length] Length of byte block to search at
  * @param {boolean} [backward] Flag to search in backward order
  * @returns {number}
  */
	findPattern(pattern, start = null, length = null, backward = false) {
		//region Check input variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS, ConditionalExpressionJS
			start = backward ? this.buffer.byteLength : 0;
		}

		if (start > this.buffer.byteLength) {
			// noinspection AssignmentToFunctionParameterJS
			start = this.buffer.byteLength;
		}

		if (backward) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}

			if (length > start) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}
		} else {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}

			if (length > this.buffer.byteLength - start) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}
		}
		//endregion

		//region Initial variables
		const patternLength = pattern.buffer.byteLength;
		// noinspection NonBlockStatementBodyJS
		if (patternLength > length) return -1;
		//endregion

		//region Make a "pre-read" array for pattern
		const patternArray = [];
		// noinspection NonBlockStatementBodyJS
		for (let i = 0; i < patternLength; i++) patternArray.push(pattern.view[i]);
		//endregion

		//region Search for pattern
		for (let i = 0; i <= length - patternLength; i++) {
			let equal = true;
			// noinspection ConditionalExpressionJS
			const equalStart = backward ? start - patternLength - i : start + i;

			for (let j = 0; j < patternLength; j++) {
				// noinspection EqualityComparisonWithCoercionJS
				if (this.view[j + equalStart] != patternArray[j]) {
					equal = false;
					// noinspection BreakStatementJS
					break;
				}
			}

			if (equal) {
				// noinspection ConditionalExpressionJS
				return backward ? start - patternLength - i : start + patternLength + i; // Position after the pattern found
			}
		}
		//endregion

		return -1;
	}
	//**********************************************************************************
	// noinspection OverlyComplexFunctionJS
	/**
  * Find first position of any pattern from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be found
  * @param {?number} [start] Start position to search from
  * @param {?number} [length] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {{id: number, position: number}}
  */
	findFirstIn(patterns, start = null, length = null, backward = false) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS, ConditionalExpressionJS
			start = backward ? this.buffer.byteLength : 0;
		}

		if (start > this.buffer.byteLength) {
			// noinspection AssignmentToFunctionParameterJS
			start = this.buffer.byteLength;
		}

		if (backward) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}

			if (length > start) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}
		} else {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}

			if (length > this.buffer.byteLength - start) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}
		}

		// noinspection ConditionalExpressionJS
		const result = {
			id: -1,
			position: backward ? 0 : start + length,
			length: 0
		};
		//endregion

		for (let i = 0; i < patterns.length; i++) {
			const position = this.findPattern(patterns[i], start, length, backward);
			// noinspection EqualityComparisonWithCoercionJS
			if (position != -1) {
				let valid = false;
				const patternLength = patterns[i].length;

				if (backward) {
					// noinspection NonBlockStatementBodyJS
					if (position - patternLength >= result.position - result.length) valid = true;
				} else {
					// noinspection NonBlockStatementBodyJS
					if (position - patternLength <= result.position - result.length) valid = true;
				}

				if (valid) {
					result.position = position;
					result.id = i;
					result.length = patternLength;
				}
			}
		}

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Find all positions of any pattern from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be found
  * @param {?number} [start] Start position to search from
  * @param {?number} [length] Length of byte block to search at
  * @returns {Array}
  */
	findAllIn(patterns, start = 0, length = this.buffer.byteLength - start) {
		//region Initial variables
		const result = [];

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection NonBlockStatementBodyJS
		if (start > this.buffer.byteLength - 1) return result;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length == null) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		if (length > this.buffer.byteLength - start) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		let patternFound = {
			id: -1,
			position: start
		};
		//endregion

		//region Find all accurences of patterns
		do {
			const position = patternFound.position;

			patternFound = this.findFirstIn(patterns, patternFound.position, length);

			// noinspection EqualityComparisonWithCoercionJS
			if (patternFound.id == -1) {
				// noinspection BreakStatementJS
				break;
			}

			// noinspection AssignmentToFunctionParameterJS
			length -= patternFound.position - position;

			result.push({
				id: patternFound.id,
				position: patternFound.position
			});
		} while (true); // eslint-disable-line
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS
	/**
  * Find all positions of a pattern
  * @param {ByteStream} pattern Stream having pattern value
  * @param {?number} [start] Start position to search from
  * @param {?number} [length] Length of byte block to search at
  * @returns {Array|number} Array with all pattern positions or (-1) if failed
  */
	findAllPatternIn(pattern, start = 0, length = this.buffer.byteLength - start) {
		//region Check input variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		if (start > this.buffer.byteLength) {
			// noinspection AssignmentToFunctionParameterJS
			start = this.buffer.byteLength;
		}

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length == null) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		if (length > this.buffer.byteLength - start) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}
		//endregion

		//region Initial variables
		const result = [];

		const patternLength = pattern.buffer.byteLength;
		// noinspection NonBlockStatementBodyJS
		if (patternLength > length) return -1;
		//endregion

		//region Make a "pre-read" array for pattern
		const patternArray = Array.from(pattern.view);
		//endregion

		//region Search for pattern
		for (let i = 0; i <= length - patternLength; i++) {
			let equal = true;
			const equalStart = start + i;

			for (let j = 0; j < patternLength; j++) {
				// noinspection EqualityComparisonWithCoercionJS
				if (this.view[j + equalStart] != patternArray[j]) {
					equal = false;
					// noinspection BreakStatementJS
					break;
				}
			}

			if (equal) {
				result.push(start + patternLength + i); // Position after the pattern found
				i += patternLength - 1; // On next step of "for" we will have "i++"
			}
		}
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection OverlyComplexFunctionJS, FunctionTooLongJS
	/**
  * Find first position of data, not included in patterns from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be ommited
  * @param {?number} [start] Start position to search from
  * @param {?number} [length] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {{left: {id: number, position: *}, right: {id: number, position: number}, value: ByteStream}}
  */
	findFirstNotIn(patterns, start = null, length = null, backward = false) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS, ConditionalExpressionJS
			start = backward ? this.buffer.byteLength : 0;
		}

		if (start > this.buffer.byteLength) {
			// noinspection AssignmentToFunctionParameterJS
			start = this.buffer.byteLength;
		}

		if (backward) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}

			if (length > start) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}
		} else {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}

			if (length > this.buffer.byteLength - start) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}
		}

		const result = {
			left: {
				id: -1,
				position: start
			},
			right: {
				id: -1,
				position: 0
			},
			value: new ByteStream()
		};

		let currentLength = length;
		//endregion

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		while (currentLength > 0) {
			//region Search for nearest "pattern"
			// noinspection ConditionalExpressionJS
			result.right = this.findFirstIn(patterns, backward ? start - length + currentLength : start + length - currentLength, currentLength, backward);
			//endregion

			//region No pattern at all
			// noinspection EqualityComparisonWithCoercionJS
			if (result.right.id == -1) {
				// noinspection AssignmentToFunctionParameterJS
				length = currentLength;

				if (backward) {
					// noinspection AssignmentToFunctionParameterJS
					start -= length;
				} else {
					// noinspection AssignmentToFunctionParameterJS
					start = result.left.position;
				}

				result.value = new ByteStream();

				result.value._buffer = this._buffer.slice(start, start + length);
				result.value._view = new Uint8Array(result.value._buffer);

				// noinspection BreakStatementJS
				break;
			}
			//endregion

			//region Check distance between two patterns
			// noinspection ConditionalExpressionJS, EqualityComparisonWithCoercionJS
			if (result.right.position != (backward ? result.left.position - patterns[result.right.id].buffer.byteLength : result.left.position + patterns[result.right.id].buffer.byteLength)) {
				if (backward) {
					// noinspection AssignmentToFunctionParameterJS
					start = result.right.position + patterns[result.right.id].buffer.byteLength;
					// noinspection AssignmentToFunctionParameterJS
					length = result.left.position - result.right.position - patterns[result.right.id].buffer.byteLength;
				} else {
					// noinspection AssignmentToFunctionParameterJS
					start = result.left.position;
					// noinspection AssignmentToFunctionParameterJS
					length = result.right.position - result.left.position - patterns[result.right.id].buffer.byteLength;
				}

				result.value = new ByteStream();

				result.value._buffer = this._buffer.slice(start, start + length);
				result.value._view = new Uint8Array(result.value._buffer);

				// noinspection BreakStatementJS
				break;
			}
			//endregion

			//region Store information about previous pattern
			result.left = result.right;
			//endregion

			//region Change current length
			currentLength -= patterns[result.right.id]._buffer.byteLength;
			//endregion
		}

		//region Swap "patterns" in case of backward order
		if (backward) {
			const temp = result.right;
			result.right = result.left;
			result.left = temp;
		}
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Find all positions of data, not included in patterns from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be ommited
  * @param {?number} [start] Start position to search from
  * @param {?number} [length] Length of byte block to search at
  * @returns {Array}
  */
	findAllNotIn(patterns, start = null, length = null) {
		//region Initial variables
		const result = [];

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection NonBlockStatementBodyJS
		if (start > this.buffer.byteLength - 1) return result;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length == null) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		if (length > this.buffer.byteLength - start) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		let patternFound = {
			left: {
				id: -1,
				position: start
			},
			right: {
				id: -1,
				position: start
			},
			value: new ByteStream()
		};
		//endregion

		//region Find all accurences of patterns
		// noinspection EqualityComparisonWithCoercionJS
		do {
			const position = patternFound.right.position;

			patternFound = this.findFirstNotIn(patterns, patternFound.right.position, length);

			// noinspection AssignmentToFunctionParameterJS
			length -= patternFound.right.position - position;

			result.push({
				left: {
					id: patternFound.left.id,
					position: patternFound.left.position
				},
				right: {
					id: patternFound.right.id,
					position: patternFound.right.position
				},
				value: patternFound.value
			});
		} while (patternFound.right.id != -1);
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS, OverlyComplexFunctionJS
	/**
  * Find position of a sequence of any patterns from input array
  * @param {Array.<ByteStream>} patterns Array of pattern to look for
  * @param {?number} [start] Start position to search from
  * @param {?number} [length] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {*}
  */
	findFirstSequence(patterns, start = null, length = null, backward = false) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS, ConditionalExpressionJS
			start = backward ? this.buffer.byteLength : 0;
		}

		if (start > this.buffer.byteLength) {
			// noinspection AssignmentToFunctionParameterJS
			start = this.buffer.byteLength;
		}

		if (backward) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}

			if (length > start) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}
		} else {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}

			if (length > this.buffer.byteLength - start) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}
		}
		//endregion

		//region Find first byte from sequence
		const firstIn = this.skipNotPatterns(patterns, start, length, backward);
		// noinspection EqualityComparisonWithCoercionJS
		if (firstIn == -1) {
			return {
				position: -1,
				value: new ByteStream()
			};
		}
		//endregion

		//region Find first byte not in sequence
		// noinspection ConditionalExpressionJS
		const firstNotIn = this.skipPatterns(patterns, firstIn, length - (backward ? start - firstIn : firstIn - start), backward);
		//endregion

		//region Make output value
		if (backward) {
			// noinspection AssignmentToFunctionParameterJS
			start = firstNotIn;
			// noinspection AssignmentToFunctionParameterJS
			length = firstIn - firstNotIn;
		} else {
			// noinspection AssignmentToFunctionParameterJS
			start = firstIn;
			// noinspection AssignmentToFunctionParameterJS
			length = firstNotIn - firstIn;
		}

		const value = new ByteStream();

		value._buffer = this._buffer.slice(start, start + length);
		value._view = new Uint8Array(value._buffer);
		//endregion

		return {
			position: firstNotIn,
			value
		};
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Find all positions of a sequence of any patterns from input array
  * @param {Array.<ByteStream>} patterns Array of patterns to search for
  * @param {?number} [start] Start position to search from
  * @param {?number} [length] Length of byte block to search at
  * @returns {Array}
  */
	findAllSequences(patterns, start = null, length = null) {
		//region Initial variables
		const result = [];

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection NonBlockStatementBodyJS
		if (start > this.buffer.byteLength - 1) return result;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length == null) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		if (length > this.buffer.byteLength - start) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		let patternFound = {
			position: start,
			value: new ByteStream()
		};
		//endregion

		//region Find all accurences of patterns
		// noinspection EqualityComparisonWithCoercionJS
		do {
			const position = patternFound.position;

			patternFound = this.findFirstSequence(patterns, patternFound.position, length);

			// noinspection EqualityComparisonWithCoercionJS
			if (patternFound.position != -1) {
				// noinspection AssignmentToFunctionParameterJS
				length -= patternFound.position - position;

				result.push({
					position: patternFound.position,
					value: patternFound.value
				});
			}
		} while (patternFound.position != -1);
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS, OverlyComplexFunctionJS, FunctionTooLongJS
	/**
  * Find all paired patterns in the stream
  * @param {ByteStream} leftPattern Left pattern to search for
  * @param {ByteStream} rightPattern Right pattern to search for
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @returns {Array}
  */
	findPairedPatterns(leftPattern, rightPattern, start = null, length = null) {
		//region Initial variables
		const result = [];

		// noinspection NonBlockStatementBodyJS
		if (leftPattern.isEqual(rightPattern)) return result;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection NonBlockStatementBodyJS
		if (start > this.buffer.byteLength - 1) return result;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length == null) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		if (length > this.buffer.byteLength - start) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		let currentPositionLeft = 0;
		//endregion

		//region Find all "left patterns" as sorted array
		const leftPatterns = this.findAllPatternIn(leftPattern, start, length);
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (leftPatterns.length == 0) return result;
		//endregion

		//region Find all "right patterns" as sorted array
		const rightPatterns = this.findAllPatternIn(rightPattern, start, length);
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (rightPatterns.length == 0) return result;
		//endregion

		//region Combine patterns
		while (currentPositionLeft < leftPatterns.length) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS
			if (rightPatterns.length == 0) {
				// noinspection BreakStatementJS
				break;
			}

			// noinspection EqualityComparisonWithCoercionJS
			if (leftPatterns[0] == rightPatterns[0]) {
				// Possible situation when one pattern is a part of another
				// For example "stream" and "endstream"
				// In case when we have only "endstream" in fact "stream" will be also found at the same position
				// (position of the pattern is an index AFTER the pattern)

				result.push({
					left: leftPatterns[0],
					right: rightPatterns[0]
				});

				leftPatterns.splice(0, 1);
				rightPatterns.splice(0, 1);

				// noinspection ContinueStatementJS
				continue;
			}

			if (leftPatterns[currentPositionLeft] > rightPatterns[0]) {
				// noinspection BreakStatementJS
				break;
			}

			while (leftPatterns[currentPositionLeft] < rightPatterns[0]) {
				currentPositionLeft++;

				if (currentPositionLeft >= leftPatterns.length) {
					// noinspection BreakStatementJS
					break;
				}
			}

			result.push({
				left: leftPatterns[currentPositionLeft - 1],
				right: rightPatterns[0]
			});

			leftPatterns.splice(currentPositionLeft - 1, 1);
			rightPatterns.splice(0, 1);

			currentPositionLeft = 0;
		}
		//endregion

		//region Sort result
		result.sort((a, b) => a.left - b.left);
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS, OverlyComplexFunctionJS, FunctionTooLongJS
	/**
  * Find all paired patterns in the stream
  * @param {Array.<ByteStream>} inputLeftPatterns Array of left patterns to search for
  * @param {Array.<ByteStream>} inputRightPatterns Array of right patterns to search for
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @returns {Array}
  */
	findPairedArrays(inputLeftPatterns, inputRightPatterns, start = null, length = null) {
		//region Initial variables
		const result = [];

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection NonBlockStatementBodyJS
		if (start > this.buffer.byteLength - 1) return result;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length == null) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		if (length > this.buffer.byteLength - start) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		let currentPositionLeft = 0;
		//endregion

		//region Find all "left patterns" as sorted array
		const leftPatterns = this.findAllIn(inputLeftPatterns, start, length);
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (leftPatterns.length == 0) return result;
		//endregion

		//region Find all "right patterns" as sorted array
		const rightPatterns = this.findAllIn(inputRightPatterns, start, length);
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (rightPatterns.length == 0) return result;
		//endregion

		//region Combine patterns
		while (currentPositionLeft < leftPatterns.length) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS
			if (rightPatterns.length == 0) {
				// noinspection BreakStatementJS
				break;
			}

			// noinspection EqualityComparisonWithCoercionJS
			if (leftPatterns[0].position == rightPatterns[0].position) {
				// Possible situation when one pattern is a part of another
				// For example "stream" and "endstream"
				// In case when we have only "endstream" in fact "stream" will be also found at the same position
				// (position of the pattern is an index AFTER the pattern)

				result.push({
					left: leftPatterns[0],
					right: rightPatterns[0]
				});

				leftPatterns.splice(0, 1);
				rightPatterns.splice(0, 1);

				// noinspection ContinueStatementJS
				continue;
			}

			if (leftPatterns[currentPositionLeft].position > rightPatterns[0].position) {
				// noinspection BreakStatementJS
				break;
			}

			while (leftPatterns[currentPositionLeft].position < rightPatterns[0].position) {
				currentPositionLeft++;

				if (currentPositionLeft >= leftPatterns.length) {
					// noinspection BreakStatementJS
					break;
				}
			}

			result.push({
				left: leftPatterns[currentPositionLeft - 1],
				right: rightPatterns[0]
			});

			leftPatterns.splice(currentPositionLeft - 1, 1);
			rightPatterns.splice(0, 1);

			currentPositionLeft = 0;
		}
		//endregion

		//region Sort result
		result.sort((a, b) => a.left.position - b.left.position);
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS, FunctionTooLongJS
	/**
  * Replace one patter with other
  * @param {ByteStream} searchPattern The pattern to search for
  * @param {ByteStream} replacePattern The pattern to replace initial pattern
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @param {Array|null} [findAllResult=null] Pre-calculated results of "findAllIn"
  * @returns {*}
  */
	replacePattern(searchPattern, replacePattern, start = null, length = null, findAllResult = null) {
		//region Initial variables
		let result;

		let i;
		const output = {
			status: -1,
			searchPatternPositions: [],
			replacePatternPositions: []
		};

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection NonBlockStatementBodyJS
		if (start > this.buffer.byteLength - 1) return false;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length == null) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}

		if (length > this.buffer.byteLength - start) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.buffer.byteLength - start;
		}
		//endregion

		//region Find a pattern to search for
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (findAllResult == null) {
			result = this.findAllIn([searchPattern], start, length);
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
			if (result.length == 0) return output;
		} else result = findAllResult;

		// noinspection NestedFunctionCallJS
		output.searchPatternPositions.push(...Array.from(result, element => element.position));
		//endregion

		//region Variables for new buffer initialization
		const patternDifference = searchPattern.buffer.byteLength - replacePattern.buffer.byteLength;

		const changedBuffer = new ArrayBuffer(this.view.length - result.length * patternDifference);
		const changedView = new Uint8Array(changedBuffer);
		//endregion

		//region Copy data from 0 to start
		// noinspection NestedFunctionCallJS
		changedView.set(new Uint8Array(this.buffer, 0, start));
		//endregion

		//region Replace pattern
		for (i = 0; i < result.length; i++) {
			//region Initial variables
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, ConditionalExpressionJS, EqualityComparisonWithCoercionJS
			const currentPosition = i == 0 ? start : result[i - 1].position;
			//endregion

			//region Copy bytes other then search pattern
			// noinspection NestedFunctionCallJS
			changedView.set(new Uint8Array(this.buffer, currentPosition, result[i].position - searchPattern.buffer.byteLength - currentPosition), currentPosition - i * patternDifference);
			//endregion

			//region Put replace pattern in a new buffer
			changedView.set(replacePattern.view, result[i].position - searchPattern.buffer.byteLength - i * patternDifference);

			output.replacePatternPositions.push(result[i].position - searchPattern.buffer.byteLength - i * patternDifference);
			//endregion
		}
		//endregion

		//region Copy data from the end of old buffer
		i--;
		// noinspection NestedFunctionCallJS
		changedView.set(new Uint8Array(this.buffer, result[i].position, this.buffer.byteLength - result[i].position), result[i].position - searchPattern.buffer.byteLength + replacePattern.buffer.byteLength - i * patternDifference);
		//endregion

		//region Re-initialize existing buffer
		this.buffer = changedBuffer;
		this.view = new Uint8Array(this.buffer);
		//endregion

		output.status = 1;

		return output;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS, OverlyComplexFunctionJS, FunctionTooLongJS
	/**
  * Skip any pattern from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be ommited
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {*}
  */
	skipPatterns(patterns, start = null, length = null, backward = false) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS, ConditionalExpressionJS
			start = backward ? this.buffer.byteLength : 0;
		}

		if (start > this.buffer.byteLength) {
			// noinspection AssignmentToFunctionParameterJS
			start = this.buffer.byteLength;
		}

		if (backward) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}

			if (length > start) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}
		} else {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}

			if (length > this.buffer.byteLength - start) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}
		}

		let result = start;
		//endregion

		//region Search for pattern
		for (let k = 0; k < patterns.length; k++) {
			const patternLength = patterns[k].buffer.byteLength;
			// noinspection ConditionalExpressionJS
			const equalStart = backward ? result - patternLength : result;
			let equal = true;

			for (let j = 0; j < patternLength; j++) {
				// noinspection EqualityComparisonWithCoercionJS
				if (this.view[j + equalStart] != patterns[k].view[j]) {
					equal = false;
					// noinspection BreakStatementJS
					break;
				}
			}

			if (equal) {
				k = -1;

				if (backward) {
					result -= patternLength;
					// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
					if (result <= 0) return result;
				} else {
					result += patternLength;
					// noinspection NonBlockStatementBodyJS
					if (result >= start + length) return result;
				}
			}
		}
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleLoopsJS, OverlyComplexFunctionJS, FunctionTooLongJS
	/**
  * Skip any pattern not from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should not be ommited
  * @param start
  * @param length
  * @param backward
  * @returns {number}
  */
	skipNotPatterns(patterns, start = null, length = null, backward = false) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS, ConditionalExpressionJS
			start = backward ? this.buffer.byteLength : 0;
		}

		if (start > this.buffer.byteLength) {
			// noinspection AssignmentToFunctionParameterJS
			start = this.buffer.byteLength;
		}

		if (backward) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}

			if (length > start) {
				// noinspection AssignmentToFunctionParameterJS
				length = start;
			}
		} else {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
			if (length == null) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}

			if (length > this.buffer.byteLength - start) {
				// noinspection AssignmentToFunctionParameterJS
				length = this.buffer.byteLength - start;
			}
		}

		let result = -1;
		//endregion

		//region Search for pattern
		for (let i = 0; i < length; i++) {
			for (let k = 0; k < patterns.length; k++) {
				const patternLength = patterns[k].buffer.byteLength;
				// noinspection ConditionalExpressionJS
				const equalStart = backward ? start - i - patternLength : start + i;
				let equal = true;

				for (let j = 0; j < patternLength; j++) {
					// noinspection EqualityComparisonWithCoercionJS
					if (this.view[j + equalStart] != patterns[k].view[j]) {
						equal = false;
						// noinspection BreakStatementJS
						break;
					}
				}

				if (equal) {
					// noinspection ConditionalExpressionJS
					result = backward ? start - i : start + i; // Exact position of pattern found
					// noinspection BreakStatementJS
					break;
				}
			}

			// noinspection EqualityComparisonWithCoercionJS
			if (result != -1) {
				// noinspection BreakStatementJS
				break;
			}
		}
		//endregion

		return result;
	}
	//**********************************************************************************
}
exports.ByteStream = ByteStream; //**************************************************************************************

class SeqStream {
	//**********************************************************************************
	/**
  * Constructor for "SeqStream" class
  * @param {{[stream]: ByteStream, [length]: number, [backward]: boolean, [start]: number, [appendBlock]: number}} parameters
  */
	constructor(parameters = {}) {
		/**
   * Major stream
   * @type {ByteStream}
   */
		this.stream = new ByteStream();
		/**
   * Length of the major stream
   * @type {number}
   */
		this._length = 0;
		/**
   * Flag to search in backward direction
   * @type {boolean}
   */
		this.backward = false;
		/**
   * Start position to search
   * @type {number}
   */
		this._start = 0;
		/**
   * Length of a block when append information to major stream
   * @type {number}
   */
		this.appendBlock = 0;

		this.prevLength = 0;
		this.prevStart = 0;

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = Object.keys(parameters)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				const key = _step2.value;

				switch (key) {
					case "stream":
						this.stream = parameters.stream;
						break;
					case "backward":
						this.backward = parameters.backward;
						// noinspection JSUnusedGlobalSymbols
						this._start = this.stream.buffer.byteLength;
						break;
					case "length":
						// noinspection JSUnusedGlobalSymbols
						this._length = parameters.length;
						break;
					case "start":
						// noinspection JSUnusedGlobalSymbols
						this._start = parameters.start;
						break;
					case "appendBlock":
						this.appendBlock = parameters.appendBlock;
						break;
					case "view":
						this.stream = new ByteStream({ view: parameters.view });
						break;
					case "buffer":
						this.stream = new ByteStream({ buffer: parameters.buffer });
						break;
					case "string":
						this.stream = new ByteStream({ string: parameters.string });
						break;
					case "hexstring":
						this.stream = new ByteStream({ hexstring: parameters.hexstring });
						break;
					default:
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}
	//**********************************************************************************
	/**
  * Setter for "stream" property
  * @param {ByteStream} value
  */
	set stream(value) {
		this._stream = value;

		this.prevLength = this._length;
		// noinspection JSUnusedGlobalSymbols
		this._length = value._buffer.byteLength;

		this.prevStart = this._start;
		// noinspection JSUnusedGlobalSymbols
		this._start = 0;
	}
	//**********************************************************************************
	/**
  * Getter for "stream" property
  * @returns {ByteStream}
  */
	get stream() {
		return this._stream;
	}
	//**********************************************************************************
	/**
  * Setter for "length" property
  * @param {number} value
  */
	set length(value) {
		this.prevLength = this._length;
		// noinspection JSUnusedGlobalSymbols
		this._length = value;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Getter for "length" property
  * @returns {number}
  */
	get length() {
		// noinspection NonBlockStatementBodyJS
		if (this.appendBlock) return this.start;

		return this._length;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Setter for "start" property
  * @param {number} value
  */
	set start(value) {
		// noinspection NonBlockStatementBodyJS
		if (value > this.stream.buffer.byteLength) return;

		//region Initialization of "prev" internal variables
		this.prevStart = this._start;
		this.prevLength = this._length;
		//endregion

		// noinspection JSUnusedGlobalSymbols, ConditionalExpressionJS
		this._length -= this.backward ? this._start - value : value - this._start;
		// noinspection JSUnusedGlobalSymbols
		this._start = value;
	}
	//**********************************************************************************
	/**
  * Getter for "start" property
  * @returns {number}
  */
	get start() {
		return this._start;
	}
	//**********************************************************************************
	/**
  * Return ArrayBuffer with having value of existing SeqStream length
  * @return {ArrayBuffer}
  */
	get buffer() {
		return this._stream._buffer.slice(0, this._length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Reset current position of the "SeqStream"
  */
	resetPosition() {
		// noinspection JSUnusedGlobalSymbols
		this._start = this.prevStart;
		// noinspection JSUnusedGlobalSymbols
		this._length = this.prevLength;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Find any byte pattern in "ByteStream"
  * @param {ByteStream} pattern Stream having pattern value
  * @param {?number} [gap] Maximum gap between start position and position of nearest object
  * @returns {number}
  */
	findPattern(pattern, gap = null) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (gap == null || gap > this.length) {
			// noinspection AssignmentToFunctionParameterJS
			gap = this.length;
		}
		//endregion

		//region Find pattern
		const result = this.stream.findPattern(pattern, this.start, this.length, this.backward);
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (result == -1) return result;

		if (this.backward) {
			// noinspection NonBlockStatementBodyJS
			if (result < this.start - pattern.buffer.byteLength - gap) return -1;
		} else {
			// noinspection NonBlockStatementBodyJS
			if (result > this.start + pattern.buffer.byteLength + gap) return -1;
		}
		//endregion

		//region Create new values
		this.start = result;
		//endregion ;

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Find first position of any pattern from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be found
  * @param {?number} [gap] Maximum gap between start position and position of nearest object
  * @returns {{id: number, position: number}}
  */
	findFirstIn(patterns, gap = null) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (gap == null || gap > this.length) {
			// noinspection AssignmentToFunctionParameterJS
			gap = this.length;
		}
		//endregion

		//region Search for patterns
		const result = this.stream.findFirstIn(patterns, this.start, this.length, this.backward);
		// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (result.id == -1) return result;

		if (this.backward) {
			if (result.position < this.start - patterns[result.id].buffer.byteLength - gap) {
				// noinspection ConditionalExpressionJS
				return {
					id: -1,
					position: this.backward ? 0 : this.start + this.length
				};
			}
		} else {
			if (result.position > this.start + patterns[result.id].buffer.byteLength + gap) {
				// noinspection ConditionalExpressionJS
				return {
					id: -1,
					position: this.backward ? 0 : this.start + this.length
				};
			}
		}
		//endregion

		//region Create new values
		this.start = result.position;
		//endregion ;

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find all positions of any pattern from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be found
  * @returns {Array}
  */
	findAllIn(patterns) {
		// In case of "backward order" the start position is at the end on stream.
		// In case of "normal order" the start position is at the begging of the stream.
		// But in fact for search for all patterns we need to have start position in "normal order".
		// noinspection ConditionalExpressionJS
		const start = this.backward ? this.start - this.length : this.start;

		return this.stream.findAllIn(patterns, start, this.length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS, OverlyComplexFunctionJS
	/**
  * Find first position of data, not included in patterns from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be ommited
  * @param {?number} gap Maximum gap between start position and position of nearest object
  * @returns {*}
  */
	findFirstNotIn(patterns, gap = null) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (gap == null || gap > this._length) {
			// noinspection AssignmentToFunctionParameterJS
			gap = this._length;
		}
		//endregion

		//region Search for patterns
		const result = this._stream.findFirstNotIn(patterns, this._start, this._length, this.backward);
		// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (result.left.id == -1 && result.right.id == -1) return result;

		if (this.backward) {
			// noinspection EqualityComparisonWithCoercionJS
			if (result.right.id != -1) {
				if (result.right.position < this._start - patterns[result.right.id]._buffer.byteLength - gap) {
					return {
						left: {
							id: -1,
							position: this._start
						},
						right: {
							id: -1,
							position: 0
						},
						value: new ByteStream()
					};
				}
			}
		} else {
			// noinspection EqualityComparisonWithCoercionJS
			if (result.left.id != -1) {
				if (result.left.position > this._start + patterns[result.left.id]._buffer.byteLength + gap) {
					return {
						left: {
							id: -1,
							position: this._start
						},
						right: {
							id: -1,
							position: 0
						},
						value: new ByteStream()
					};
				}
			}
		}
		//endregion

		//region Create new values
		if (this.backward) {
			// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
			if (result.left.id == -1) this.start = 0;else this.start = result.left.position;
		} else {
			// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
			if (result.right.id == -1) this.start = this._start + this._length;else this.start = result.right.position;
		}
		//endregion ;

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find all positions of data, not included in patterns from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be ommited
  * @returns {Array}
  */
	findAllNotIn(patterns) {
		// In case of "backward order" the start position is at the end on stream.
		// In case of "normal order" the start position is at the begging of the stream.
		// But in fact for search for all patterns we need to have start position in "normal order".
		// noinspection ConditionalExpressionJS
		const start = this.backward ? this._start - this._length : this._start;

		return this._stream.findAllNotIn(patterns, start, this._length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Find position of a sequence of any patterns from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be ommited
  * @param {?number} [length] Length to search sequence for
  * @param {?number} [gap] Maximum gap between start position and position of nearest object
  * @returns {*}
  */
	findFirstSequence(patterns, length = null, gap = null) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length == null || length > this._length) {
			// noinspection AssignmentToFunctionParameterJS
			length = this._length;
		}

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (gap == null || gap > length) {
			// noinspection AssignmentToFunctionParameterJS
			gap = length;
		}
		//endregion

		//region Search for sequence
		const result = this._stream.findFirstSequence(patterns, this._start, length, this.backward);
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (result.value.buffer.byteLength == 0) return result;

		if (this.backward) {
			if (result.position < this._start - result.value._buffer.byteLength - gap) {
				return {
					position: -1,
					value: new ByteStream()
				};
			}
		} else {
			if (result.position > this._start + result.value._buffer.byteLength + gap) {
				return {
					position: -1,
					value: new ByteStream()
				};
			}
		}
		//endregion

		//region Create new values
		this.start = result.position;
		//endregion ;

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find position of a sequence of any patterns from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be found
  * @returns {Array}
  */
	findAllSequences(patterns) {
		// In case of "backward order" the start position is at the end on stream.
		// In case of "normal order" the start position is at the begging of the stream.
		// But in fact for search for all patterns we need to have start position in "normal order".
		// noinspection ConditionalExpressionJS
		const start = this.backward ? this.start - this.length : this.start;

		return this.stream.findAllSequences(patterns, start, this.length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Find all paired patterns in the stream
  * @param {ByteStream} leftPattern Left pattern to search for
  * @param {ByteStream} rightPattern Right pattern to search for
  * @param {?number} [gap] Maximum gap between start position and position of nearest object
  * @returns {Array}
  */
	findPairedPatterns(leftPattern, rightPattern, gap = null) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (gap == null || gap > this.length) {
			// noinspection AssignmentToFunctionParameterJS
			gap = this.length;
		}
		//endregion

		// In case of "backward order" the start position is at the end on stream.
		// In case of "normal order" the start position is at the begging of the stream.
		// But in fact for search for all patterns we need to have start position in "normal order".
		// noinspection ConditionalExpressionJS
		const start = this.backward ? this.start - this.length : this.start;

		//region Search for patterns
		const result = this.stream.findPairedPatterns(leftPattern, rightPattern, start, this.length);
		if (result.length) {
			if (this.backward) {
				// noinspection NonBlockStatementBodyJS
				if (result[0].right < this.start - rightPattern.buffer.byteLength - gap) return [];
			} else {
				// noinspection NonBlockStatementBodyJS
				if (result[0].left > this.start + leftPattern.buffer.byteLength + gap) return [];
			}
		}
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Find all paired patterns in the stream
  * @param {Array.<ByteStream>} leftPatterns Array of left patterns to search for
  * @param {Array.<ByteStream>} rightPatterns Array of right patterns to search for
  * @param {?number} [gap] Maximum gap between start position and position of nearest object
  * @returns {Array}
  */
	findPairedArrays(leftPatterns, rightPatterns, gap = null) {
		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (gap == null || gap > this.length) {
			// noinspection AssignmentToFunctionParameterJS
			gap = this.length;
		}
		//endregion

		// In case of "backward order" the start position is at the end on stream.
		// In case of "normal order" the start position is at the begging of the stream.
		// But in fact for search for all patterns we need to have start position in "normal order".
		// noinspection ConditionalExpressionJS
		const start = this.backward ? this.start - this.length : this.start;

		//region Search for patterns
		const result = this.stream.findPairedArrays(leftPatterns, rightPatterns, start, this.length);
		if (result.length) {
			if (this.backward) {
				// noinspection NonBlockStatementBodyJS
				if (result[0].right.position < this.start - rightPatterns[result[0].right.id].buffer.byteLength - gap) return [];
			} else {
				// noinspection NonBlockStatementBodyJS
				if (result[0].left.position > this.start + leftPatterns[result[0].left.id].buffer.byteLength + gap) return [];
			}
		}
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Replace one patter with other
  * @param {ByteStream} searchPattern The pattern to search for
  * @param {ByteStream} replacePattern The pattern to replace initial pattern
  * @returns {*}
  */
	replacePattern(searchPattern, replacePattern) {
		// In case of "backward order" the start position is at the end on stream.
		// In case of "normal order" the start position is at the begging of the stream.
		// But in fact for search for all patterns we need to have start position in "normal order".
		// noinspection ConditionalExpressionJS
		const start = this.backward ? this.start - this.length : this.start;

		return this.stream.replacePattern(searchPattern, replacePattern, start, this.length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Skip of any pattern from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be ommited
  * @returns {*}
  */
	skipPatterns(patterns) {
		const result = this.stream.skipPatterns(patterns, this.start, this.length, this.backward);

		//region Create new values
		this.start = result;
		//endregion ;

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Skip of any pattern from input array
  * @param {Array.<ByteStream>} patterns Array with patterns which should be ommited
  * @returns {number}
  */
	skipNotPatterns(patterns) {
		const result = this.stream.skipNotPatterns(patterns, this.start, this.length, this.backward);
		// noinspection NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
		if (result == -1) return -1;

		//region Create new values
		this.start = result;
		//endregion ;

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Append a new "Stream" content to the current "Stream"
  * @param {ByteStream} stream A new "stream" to append to current "stream"
  */
	append(stream) {
		if (this._start + stream._buffer.byteLength > this._stream._buffer.byteLength) {
			if (stream._buffer.byteLength > this.appendBlock) {
				// noinspection MagicNumberJS
				this.appendBlock = stream._buffer.byteLength + 1000;
			}

			this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
		}

		this._stream._view.set(stream._view, this._start);

		this._length += stream._buffer.byteLength * 2;
		this.start = this._start + stream._buffer.byteLength;
		this.prevLength -= stream._buffer.byteLength * 2;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Append a "view" content to the current "Stream"
  * @param {Uint8Array} view A new "view" to append to current "stream"
  */
	appendView(view) {
		if (this._start + view.length > this._stream._buffer.byteLength) {
			if (view.length > this.appendBlock) {
				// noinspection MagicNumberJS
				this.appendBlock = view.length + 1000;
			}

			this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
		}

		this._stream._view.set(view, this._start);

		this._length += view.length * 2;
		this.start = this._start + view.length;
		this.prevLength -= view.length * 2;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Append a new char to the current "Stream"
  * @param {number} char A new char to append to current "stream"
  */
	appendChar(char) {
		if (this._start + 1 > this._stream._buffer.byteLength) {
			// noinspection ConstantOnLefSideOfComparisonJS
			if (1 > this.appendBlock) {
				// noinspection MagicNumberJS
				this.appendBlock = 1000;
			}

			this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
		}

		this._stream._view[this._start] = char;

		this._length += 2;
		this.start = this._start + 1;
		this.prevLength -= 2;
	}
	//**********************************************************************************
	// noinspection FunctionNamingConventionJS
	/**
  * Append a new number to the current "Stream"
  * @param {number} number A new unsigned 16-bit integer to append to current "stream"
  */
	appendUint16(number) {
		if (this._start + 2 > this._stream._buffer.byteLength) {
			// noinspection ConstantOnLefSideOfComparisonJS
			if (2 > this.appendBlock) {
				// noinspection MagicNumberJS
				this.appendBlock = 1000;
			}

			this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
		}

		const value = new Uint16Array([number]);
		const view = new Uint8Array(value.buffer);

		this._stream._view[this._start] = view[1];
		this._stream._view[this._start + 1] = view[0];

		this._length += 4;
		this.start = this._start + 2;
		this.prevLength -= 4;
	}
	//**********************************************************************************
	// noinspection FunctionNamingConventionJS
	/**
  * Append a new number to the current "Stream"
  * @param {number} number A new unsigned 24-bit integer to append to current "stream"
  */
	appendUint24(number) {
		if (this._start + 3 > this._stream._buffer.byteLength) {
			// noinspection ConstantOnLefSideOfComparisonJS
			if (3 > this.appendBlock) {
				// noinspection MagicNumberJS
				this.appendBlock = 1000;
			}

			this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
		}

		const value = new Uint32Array([number]);
		const view = new Uint8Array(value.buffer);

		this._stream._view[this._start] = view[2];
		this._stream._view[this._start + 1] = view[1];
		this._stream._view[this._start + 2] = view[0];

		this._length += 6;
		this.start = this._start + 3;
		this.prevLength -= 6;
	}
	//**********************************************************************************
	// noinspection FunctionNamingConventionJS
	/**
  * Append a new number to the current "Stream"
  * @param {number} number A new unsigned 32-bit integer to append to current "stream"
  */
	appendUint32(number) {
		if (this._start + 4 > this._stream._buffer.byteLength) {
			// noinspection ConstantOnLefSideOfComparisonJS
			if (4 > this.appendBlock) {
				// noinspection MagicNumberJS
				this.appendBlock = 1000;
			}

			this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
		}

		const value = new Uint32Array([number]);
		const view = new Uint8Array(value.buffer);

		this._stream._view[this._start] = view[3];
		this._stream._view[this._start + 1] = view[2];
		this._stream._view[this._start + 2] = view[1];
		this._stream._view[this._start + 3] = view[0];

		this._length += 8;
		this.start = this._start + 4;
		this.prevLength -= 8;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Get a block of data
  * @param {number} size Size of the data block to get
  * @param {boolean} [changeLength=true] Should we change "length" and "start" value after reading the data block
  * @returns {Array}
  */
	getBlock(size, changeLength = true) {
		//region Check input parameters
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (this._length <= 0) return [];

		if (this._length < size) {
			// noinspection AssignmentToFunctionParameterJS
			size = this._length;
		}
		//endregion

		//region Initial variables
		let result;
		//endregion

		//region Getting result depends on "backward" flag
		if (this.backward) {
			const buffer = this._stream._buffer.slice(this._length - size, this._length);
			const view = new Uint8Array(buffer);

			result = new Array(size);

			// noinspection NonBlockStatementBodyJS
			for (let i = 0; i < size; i++) result[size - 1 - i] = view[i];
		} else {
			const buffer = this._stream._buffer.slice(this._start, this._start + size);

			// noinspection NestedFunctionCallJS
			result = Array.from(new Uint8Array(buffer));
		}
		//endregion

		//region Change "length" value if needed
		if (changeLength) {
			// noinspection ConditionalExpressionJS
			this.start += this.backward ? -1 * size : size;
		}
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS, FunctionNamingConventionJS
	/**
  * Get 2-byte unsigned integer value
  * @param {boolean} [changeLength=true] Should we change "length" and "start" value after reading the data block
  * @returns {number}
  */
	getUint16(changeLength = true) {
		const block = this.getBlock(2, changeLength);

		//region Check posibility for convertion
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (block.length < 2) return 0;
		//endregion

		//region Convert byte array to "Uint16Array" value
		const value = new Uint16Array(1);
		const view = new Uint8Array(value.buffer);

		view[0] = block[1];
		view[1] = block[0];
		//endregion

		return value[0];
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS, FunctionNamingConventionJS
	/**
  * Get 2-byte signed integer value
  * @param {boolean} [changeLength=true] Should we change "length" and "start" value after reading the data block
  * @returns {number}
  */
	getInt16(changeLength = true) {
		const block = this.getBlock(2, changeLength);

		//region Check posibility for convertion
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (block.length < 2) return 0;
		//endregion

		//region Convert byte array to "Int16Array" value
		const value = new Int16Array(1);
		const view = new Uint8Array(value.buffer);

		view[0] = block[1];
		view[1] = block[0];
		//endregion

		return value[0];
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS, FunctionNamingConventionJS
	/**
  * Get 3-byte unsigned integer value
  * @param {boolean} [changeLength=true] Should we change "length" and "start" value after reading the data block
  * @returns {number}
  */
	getUint24(changeLength = true) {
		const block = this.getBlock(3, changeLength);

		//region Check posibility for convertion
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (block.length < 3) return 0;
		//endregion

		//region Convert byte array to "Uint32Array" value
		const value = new Uint32Array(1);
		const view = new Uint8Array(value.buffer);

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		for (let i = 3; i >= 1; i--) view[3 - i] = block[i - 1];
		//endregion

		return value[0];
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS, FunctionNamingConventionJS
	/**
  * Get 4-byte unsigned integer value
  * @param {boolean} [changeLength=true] Should we change "length" and "start" value after reading the data block
  * @returns {number}
  */
	getUint32(changeLength = true) {
		const block = this.getBlock(4, changeLength);

		//region Check posibility for convertion
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (block.length < 4) return 0;
		//endregion

		//region Convert byte array to "Uint32Array" value
		const value = new Uint32Array(1);
		const view = new Uint8Array(value.buffer);

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		for (let i = 3; i >= 0; i--) view[3 - i] = block[i];
		//endregion

		return value[0];
	}
	//**********************************************************************************
	/**
  * Get 4-byte signed integer value
  * @param {boolean} [changeLength=true] Should we change "length" and "start" value after reading the data block
  * @returns {number}
  */
	getInt32(changeLength = true) {
		const block = this.getBlock(4, changeLength);

		//region Check posibility for convertion
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (block.length < 4) return 0;
		//endregion

		//region Convert byte array to "Int32Array" value
		const value = new Int32Array(1);
		const view = new Uint8Array(value.buffer);

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		for (let i = 3; i >= 0; i--) view[3 - i] = block[i];
		//endregion

		return value[0];
	}
	//**********************************************************************************
}
exports.SeqStream = SeqStream; //**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS, OverlyComplexFunctionJS, FunctionTooLongJS
/**
 * Get parsed values from "byte map"
 * @param {ByteStream} stream Stream to parse data from
 * @param {Object} map Object with information how to parse "byte map"
 * @param {number} elements Number of elements in parsing byte map
 * @param {?number} [start=null] Start position to parse from
 * @param {?number} [length=null] Length of byte block to parse from
 * @returns {*}
 */

function parseByteMap(stream, map, elements, start = null, length = null) {
	/*
  Map example:
  
  let map = [
  {
  type: "string",
  name: "type",
  minlength: 1,
  maxlength: 1,
  func: function(array)
  {
  let result = {
  status: (-1),
  length: 1
  };
  
  switch(array[0])
  {
  case 0x6E: // "n"
  result.value = "n";
  break;
  case 0x66: // "f"
  result.value = "f";
  break;
  default:
  return result;
  }
  
  result.status = 1;
  
  return result;
  }
  },
  {
  type: "check",
  minlength: 1,
  maxlength: 2,
  func: function(array)
  {
  let position = (-1);
  
  if(array[0] == 0x0A)
  position = 1;
  if(array[1] == 0x0A)
  position = 2;
  
  return {
  status: (position > 0) ? 1 : (-1),
  length: position
  };
  }
  }
  ];
  */

	//region Initial variables
	// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
	if (start === null) {
		// noinspection AssignmentToFunctionParameterJS
		start = 0;
	}

	// noinspection NonBlockStatementBodyJS
	if (start > stream.buffer.byteLength - 1) return false;

	// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
	if (length === null) {
		// noinspection AssignmentToFunctionParameterJS
		length = stream.buffer.byteLength - start;
	}

	if (length > stream.buffer.byteLength - start) {
		// noinspection AssignmentToFunctionParameterJS
		length = stream.buffer.byteLength - start;
	}

	let dataView;

	// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
	if (start == 0 && length == stream.buffer.byteLength) dataView = stream.view;else dataView = new Uint8Array(stream.buffer, start, length);

	const resultArray = new Array(elements);
	let elementsCount = 0;

	let count = 0;
	const mapLength = map.length;
	//endregion

	//region Parse all byte, structure by structure
	while (count < length) {
		let structureLength = 0;

		resultArray[elementsCount] = {};

		for (let i = 0; i < mapLength; i++) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, JSUnresolvedVariable, EqualityComparisonWithCoercionJS
			if (map[i].maxlength == 0) {
				// noinspection NonBlockStatementBodyJS
				if ("defaultValue" in map[i]) resultArray[elementsCount][map[i].name] = map[i].defaultValue;

				// noinspection ContinueStatementJS
				continue;
			}

			// noinspection JSUnresolvedVariable
			const array = new Array(map[i].maxlength);

			// noinspection JSUnresolvedVariable
			for (let j = 0; j < map[i].maxlength; j++) {
				// noinspection IncrementDecrementResultUsedJS
				array[j] = dataView[count++];
			}

			// noinspection JSUnresolvedVariable
			const result = map[i].func(array);
			// noinspection EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
			if (result.status == -1) {
				// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS, EqualityComparisonWithCoercionJS
				if (resultArray.length == 1) return [];

				return resultArray.slice(0, resultArray.length - 1);
			}

			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
			if (map[i].type != "check") resultArray[elementsCount][map[i].name] = result.value;

			// noinspection JSUnresolvedVariable
			count -= map[i].maxlength - result.length;
			structureLength += result.length;
		}

		// noinspection IncrementDecrementResultUsedJS
		resultArray[elementsCount++].structureLength = structureLength;
	}
	//endregion

	return resultArray;
}
//**************************************************************************************
//region "Bits-to-string" array
const bitsToStringArray = ["00000000", "00000001", "00000010", "00000011", "00000100", "00000101", "00000110", "00000111", "00001000", "00001001", "00001010", "00001011", "00001100", "00001101", "00001110", "00001111", "00010000", "00010001", "00010010", "00010011", "00010100", "00010101", "00010110", "00010111", "00011000", "00011001", "00011010", "00011011", "00011100", "00011101", "00011110", "00011111", "00100000", "00100001", "00100010", "00100011", "00100100", "00100101", "00100110", "00100111", "00101000", "00101001", "00101010", "00101011", "00101100", "00101101", "00101110", "00101111", "00110000", "00110001", "00110010", "00110011", "00110100", "00110101", "00110110", "00110111", "00111000", "00111001", "00111010", "00111011", "00111100", "00111101", "00111110", "00111111", "01000000", "01000001", "01000010", "01000011", "01000100", "01000101", "01000110", "01000111", "01001000", "01001001", "01001010", "01001011", "01001100", "01001101", "01001110", "01001111", "01010000", "01010001", "01010010", "01010011", "01010100", "01010101", "01010110", "01010111", "01011000", "01011001", "01011010", "01011011", "01011100", "01011101", "01011110", "01011111", "01100000", "01100001", "01100010", "01100011", "01100100", "01100101", "01100110", "01100111", "01101000", "01101001", "01101010", "01101011", "01101100", "01101101", "01101110", "01101111", "01110000", "01110001", "01110010", "01110011", "01110100", "01110101", "01110110", "01110111", "01111000", "01111001", "01111010", "01111011", "01111100", "01111101", "01111110", "01111111", "10000000", "10000001", "10000010", "10000011", "10000100", "10000101", "10000110", "10000111", "10001000", "10001001", "10001010", "10001011", "10001100", "10001101", "10001110", "10001111", "10010000", "10010001", "10010010", "10010011", "10010100", "10010101", "10010110", "10010111", "10011000", "10011001", "10011010", "10011011", "10011100", "10011101", "10011110", "10011111", "10100000", "10100001", "10100010", "10100011", "10100100", "10100101", "10100110", "10100111", "10101000", "10101001", "10101010", "10101011", "10101100", "10101101", "10101110", "10101111", "10110000", "10110001", "10110010", "10110011", "10110100", "10110101", "10110110", "10110111", "10111000", "10111001", "10111010", "10111011", "10111100", "10111101", "10111110", "10111111", "11000000", "11000001", "11000010", "11000011", "11000100", "11000101", "11000110", "11000111", "11001000", "11001001", "11001010", "11001011", "11001100", "11001101", "11001110", "11001111", "11010000", "11010001", "11010010", "11010011", "11010100", "11010101", "11010110", "11010111", "11011000", "11011001", "11011010", "11011011", "11011100", "11011101", "11011110", "11011111", "11100000", "11100001", "11100010", "11100011", "11100100", "11100101", "11100110", "11100111", "11101000", "11101001", "11101010", "11101011", "11101100", "11101101", "11101110", "11101111", "11110000", "11110001", "11110010", "11110011", "11110100", "11110101", "11110110", "11110111", "11111000", "11111001", "11111010", "11111011", "11111100", "11111101", "11111110", "11111111"];
//endregion
//**************************************************************************************
class BitStream {
	//**********************************************************************************
	/**
  * Constructor for "BitStream" class
  * @param {{[byteStream]: ByteStream, [view]: Uint8Array, [buffer]: ArrayBuffer, [string]: string, [bitsCount]: number}} parameters
  */
	constructor(parameters = {}) {
		this.buffer = new ArrayBuffer(0);
		this.view = new Uint8Array(this.buffer);

		this.bitsCount = 0; // Number of bits stored in current "BitStream"

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = Object.keys(parameters)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				const key = _step3.value;

				switch (key) {
					case "byteStream":
						this.fromByteStream(parameters.byteStream);
						break;
					case "view":
						this.fromUint8Array(parameters.view);
						break;
					case "buffer":
						this.fromArrayBuffer(parameters.buffer);
						break;
					case "string":
						this.fromString(parameters.string);
						break;
					case "uint32":
						this.fromUint32(parameters.uint32);
						break;
					case "bitsCount":
						this.bitsCount = parameters.bitsCount;
						break;
					default:
				}
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}
	}
	//**********************************************************************************
	/**
  * Clear existing stream
  */
	clear() {
		this.buffer = new ArrayBuffer(0);
		this.view = new Uint8Array(this.buffer);

		this.bitsCount = 0;
	}
	//**********************************************************************************
	/**
  * Initialize "BitStream" by data from existing "ByteStream"
  * @param {ByteStream} stream
  */
	fromByteStream(stream) {
		this.buffer = stream.buffer.slice(0);
		this.view = new Uint8Array(this.buffer);

		this.bitsCount = this.view.length << 3;
	}
	//**********************************************************************************
	/**
  * Initialize "BitStream" object from existing "ArrayBuffer"
  * @param {ArrayBuffer} array The ArrayBuffer to copy from
  */
	fromArrayBuffer(array) {
		this.buffer = array.slice(0);
		this.view = new Uint8Array(this.buffer);

		this.bitsCount = this.view.length << 3;
	}
	//**********************************************************************************
	// noinspection FunctionNamingConventionJS
	/**
  * Initialize "BitStream" object from existing "Uint8Array"
  * @param {Uint8Array} array The Uint8Array to copy from
  */
	fromUint8Array(array) {
		this.buffer = new ArrayBuffer(array.length);
		this.view = new Uint8Array(this.buffer);

		this.view.set(array);

		this.bitsCount = this.view.length << 3;
	}
	//**********************************************************************************
	/**
  * Initialize "BitStream" object from existing bit string
  * @param {string} string The string to initialize from
  */
	fromString(string) {
		//region Initial variables
		const stringLength = string.length;

		// noinspection ConditionalExpressionJS
		this.buffer = new ArrayBuffer((stringLength >> 3) + (stringLength % 8 ? 1 : 0));
		this.view = new Uint8Array(this.buffer);

		this.bitsCount = (stringLength >> 3) + 1 << 3; // In order to handle correct shifting

		let byteIndex = 0;
		//endregion

		//region Convert from "bit string" to bytes
		for (let i = 0; i < stringLength; i++) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
			if (string[i] == "1") this.view[byteIndex] |= 1 << 7 - i % 8;

			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
			if (i && (i + 1) % 8 == 0) byteIndex++;
		}
		//endregion

		//region Shift "BitStream" into correct position
		// noinspection NonBlockStatementBodyJS
		if (stringLength % 8) this.shiftRight(8 - stringLength % 8);
		//endregion

		//region Change "bitsCount"
		this.bitsCount = stringLength;
		//endregion
	}
	//**********************************************************************************
	/**
  * Initialize "BitStream" object from existing uint32 number
  * @param {Number} number The string to initialize from
  */
	fromUint32(uint32) {
		this.buffer = new ArrayBuffer(4);
		this.view = new Uint8Array(this.buffer);

		const value = new Uint32Array([uint32]);
		const view = new Uint8Array(value.buffer);

		for (let i = 3; i >= 0; i--) this.view[i] = view[3 - i];

		this.bitsCount = 32;
	}
	//**********************************************************************************
	/**
  * Represent "BitStream" object content as a string
  * @param {?number} [start=null] Start number to convert to string from
  * @param {?number} [length=null] Length of BitStream to convert to string
  * @returns {string}
  */
	toString(start = null, length = null) {
		//region Check input parameters
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start >= this.view.length || start < 0) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length == null) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.view.length - start;
		}

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length >= this.view.length || length < 0) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.view.length - start;
		}
		//endregion

		//region Initial variables
		const result = [];
		//endregion

		//region Convert from bytes to "bit string"
		// noinspection NonBlockStatementBodyJS
		for (let i = start; i < start + length; i++) result.push(bitsToStringArray[this.view[i]]);
		//endregion

		// noinspection ChainedFunctionCallJS
		return result.join("").slice((this.view.length << 3) - this.bitsCount);
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Shift entire "BitStream" value right to number of bits
  * @param {number} shift Number of bits to shift value
  * @param {boolean} [needShrink=true] Need to shrink result or not
  */
	shiftRight(shift, needShrink = true) {
		//region Check parameters
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
		if (this.view.length == 0) return;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (shift < 0 || shift > 8) throw new Error("The \"shift\" parameter must be in range 0-8");

		// noinspection NonBlockStatementBodyJS
		if (shift > this.bitsCount) throw new Error("The \"shift\" parameter can not be bigger than \"this.bitsCount\"");
		//endregion

		//region Initial variables
		// noinspection MagicNumberJS
		const shiftMask = 0xFF >> 8 - shift;
		this.view[this.view.length - 1] >>= shift;
		//endregion

		//region Shift value
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		for (let i = this.view.length - 2; i >= 0; i--) {
			// noinspection NonShortCircuitBooleanExpressionJS
			this.view[i + 1] |= (this.view[i] & shiftMask) << 8 - shift;
			this.view[i] >>= shift;
		}
		//endregion

		//region Decrease number of bits stored into value
		this.bitsCount -= shift;
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
		if (this.bitsCount == 0) this.clear();
		//endregion

		//region Change stream size if needed
		// noinspection NonBlockStatementBodyJS
		if (needShrink) this.shrink();
		//endregion
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Shift entire "BitStream" value left to number of bits
  * @param {number} shift Number of bits to shift value
  */
	shiftLeft(shift) {
		/*
   NOTE: We do not really shift value because of internal structure of "BitStream":
   all bytes inside "BitStream" are aligned to right position. So, even if we will
   really shift value to left after that we will need again shift it right to the
   same number of bits. Thus all that we do here is hiding of left bits and descresing
   the "bitsCount" number.
   */

		//region Check parameters
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
		if (this.view.length == 0) return;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (shift < 0 || shift > 8) throw new Error("The \"shift\" parameter must be in range 0-8");

		// noinspection NonBlockStatementBodyJS
		if (shift > this.bitsCount) throw new Error("The \"shift\" parameter can not be bigger than \"this.bitsCount\"");
		//endregion

		//region Remove shifted bits
		// noinspection MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const bitsOffset = this.bitsCount & 0x07;
		if (bitsOffset > shift) {
			// noinspection MagicNumberJS
			this.view[0] &= 0xFF >> bitsOffset + shift;
		} else {
			//region Change size of buffer
			const buffer = new ArrayBuffer(this.buffer.byteLength - 1);
			const view = new Uint8Array(buffer);

			// noinspection NestedFunctionCallJS
			view.set(new Uint8Array(this.buffer, 1, this.buffer.byteLength - 1));
			//endregion

			//region Mask item with index 0
			// noinspection MagicNumberJS
			view[0] &= 0xFF >> shift - bitsOffset;
			//endregion

			//region Store final array into current stream
			this.buffer = buffer.slice(0);
			this.view = new Uint8Array(this.buffer);
			//endregion
		}
		//endregion

		//region Decrease number of bits stored into value
		this.bitsCount -= shift;
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
		if (this.bitsCount == 0) this.clear();
		//endregion
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS, FunctionTooLongJS
	/**
  * Return slice of existing "BitStream"
  * @param {?number} [start=null] Start position of the slice (in bits)
  * @param {?number} [end=null] End position of the slice (in bits)
  * @returns {BitStream}
  */
	slice(start = null, end = null) {
		//region Make ability to pass non-value bits
		let valueShift = 0;
		// noinspection NonBlockStatementBodyJS
		if (this.bitsCount % 8) valueShift = 8 - this.bitsCount % 8;

		// noinspection AssignmentToFunctionParameterJS
		start += valueShift;
		// noinspection AssignmentToFunctionParameterJS
		end += valueShift;
		//endregion

		//region Initial variables
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (start == null) {
			// noinspection AssignmentToFunctionParameterJS
			start = 0;
		}

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (start < 0 || start > (this.view.length << 3) - 1) return new BitStream(); //("Wrong start position: " + start);

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (end == null) {
			// noinspection AssignmentToFunctionParameterJS
			end = (this.view.length << 3) - 1;
		}

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (end < 0 || end > (this.view.length << 3) - 1) return new BitStream(); //("Wrong end position: " + end);

		// noinspection NonBlockStatementBodyJS
		if (end - start + 1 > this.bitsCount) return new BitStream(); //("Maximum length is " + this.bitsCount);

		const startIndex = start >> 3;
		// noinspection MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const startOffset = start & 0x07;

		const endIndex = end >> 3;
		// noinspection MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const endOffset = end & 0x07;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, ConditionalExpressionJS, EqualityComparisonWithCoercionJS
		const bitsLength = endIndex - startIndex == 0 ? 1 : endIndex - startIndex + 1;

		const result = new BitStream();
		//endregion

		//region Store "primary bytes"
		result.buffer = new ArrayBuffer(bitsLength);
		result.view = new Uint8Array(result.buffer);
		result.bitsCount = bitsLength << 3;

		// noinspection NestedFunctionCallJS
		result.view.set(new Uint8Array(this.buffer, startIndex, bitsLength));
		//endregion

		//region Change "start byte"
		// noinspection MagicNumberJS
		result.view[0] &= 0xFF >> startOffset;
		//endregion

		//region Change "end byte"
		// noinspection MagicNumberJS
		result.view[bitsLength] &= 0xFF << 7 - endOffset;
		//endregion

		//region Shift result array to right
		// noinspection NonBlockStatementBodyJS
		if (7 - endOffset) result.shiftRight(7 - endOffset, false);
		//endregion

		//region Set final number of bits
		result.bitsCount = end - start + 1;
		//endregion

		//region Cut unnecessary bytes from result
		result.shrink();
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	/**
  * Return copy of existing "BitStream"
  * @param {?number} [start=null] Start position of the copy (in bits)
  * @param {?number} [length=null] Length of the copy (in bits)
  * @returns {BitStream}
  */
	copy(start = null, length = null) {
		//region Check input parameters
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (start < 0 || start > (this.view.length << 3) - 1) return new BitStream(); //("Wrong start position: " + start);

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS
		if (length === null) {
			// noinspection AssignmentToFunctionParameterJS
			length = (this.view.length << 3) - start - 1;
		}

		// noinspection NonBlockStatementBodyJS
		if (length > this.bitsCount) return new BitStream(); //("Maximum length is " + this.bitsCount);
		//endregion

		return this.slice(start, start + length - 1);
	}
	//**********************************************************************************
	/**
  * Shrink unnecessary bytes in current stream accordingly to "bitsCount" value
  */
	shrink() {
		// noinspection ConditionalExpressionJS
		const currentLength = (this.bitsCount >> 3) + (this.bitsCount % 8 ? 1 : 0);
		if (currentLength < this.buffer.byteLength) {
			//region Change size of buffer
			const buffer = new ArrayBuffer(currentLength);
			const view = new Uint8Array(buffer);

			// noinspection NestedFunctionCallJS
			view.set(new Uint8Array(this.buffer, this.buffer.byteLength - currentLength, currentLength));
			//endregion

			//region Store final array into current stream
			this.buffer = buffer.slice(0);
			this.view = new Uint8Array(this.buffer);
			//endregion
		}
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Reverse bits order in each byte in the stream
  * Got it from here: http://graphics.stanford.edu/~seander/bithacks.html#ReverseByteWith32Bits
  */
	reverseBytes() {
		//region Reverse bits order in each byte in the stream
		for (let i = 0; i < this.view.length; i++) {
			// noinspection MagicNumberJS, NonShortCircuitBooleanExpressionJS
			this.view[i] = (this.view[i] * 0x0802 & 0x22110 | this.view[i] * 0x8020 & 0x88440) * 0x10101 >> 16;
		}
		//endregion

		//region Shift "most significant" byte
		if (this.bitsCount % 8) {
			// noinspection ConditionalExpressionJS
			const currentLength = (this.bitsCount >> 3) + (this.bitsCount % 8 ? 1 : 0);
			// noinspection MagicNumberJS, NonShortCircuitBooleanExpressionJS
			this.view[this.view.length - currentLength] >>= 8 - (this.bitsCount & 0x07);
		}
		//endregion
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Reverse all bits in entire "BitStream"
  */
	reverseValue() {
		const initialValue = this.toString();
		const initialValueLength = initialValue.length;

		const reversedValue = new Array(initialValueLength);

		// noinspection NonBlockStatementBodyJS
		for (let i = 0; i < initialValueLength; i++) reversedValue[initialValueLength - 1 - i] = initialValue[i];

		// noinspection NestedFunctionCallJS
		this.fromString(reversedValue.join(""));
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Trying to represent entire "BitStream" as an unsigned integer.
  * @return {number}
  */
	getNumberValue() {
		//region Initial variables
		const byteLength = this.buffer.byteLength - 1;
		//endregion

		//region Check posibility for convertion
		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		if (byteLength > 3) return -1;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
		if (byteLength == -1) return 0;
		//endregion

		//region Convert byte array to "Uint32Array" value
		const value = new Uint32Array(1);
		const view = new Uint8Array(value.buffer);

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, NonBlockStatementBodyJS
		for (let i = byteLength; i >= 0; i--) view[byteLength - i] = this.view[i];
		//endregion

		return value[0];
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find any bit pattern in "BitStream"
  * @param {BitStream} pattern Stream having pattern value
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {number}
  */
	findPattern(pattern, start = null, length = null, backward = false) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});
		const stringPattern = new ByteStream({
			string: pattern.toString()
		});
		//endregion

		return stringStream.findPattern(stringPattern, start, length, backward);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find first position of any pattern from input array
  * @param {Array.<BitStream>} patterns Array with patterns which should be found
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {{id: number, position: number}}
  */
	findFirstIn(patterns, start = null, length = null, backward = false) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});

		const stringPatterns = new Array(patterns.length);

		for (let i = 0; i < patterns.length; i++) {
			stringPatterns[i] = new ByteStream({
				string: patterns[i].toString()
			});
		}
		//endregion

		return stringStream.findFirstIn(stringPatterns, start, length, backward);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find all positions of any pattern from input array
  * @param {Array.<BitStream>} patterns Array with patterns which should be found
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @returns {Array}
  */
	findAllIn(patterns, start = null, length = null) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});

		const stringPatterns = new Array(patterns.length);

		for (let i = 0; i < patterns.length; i++) {
			stringPatterns[i] = new ByteStream({
				string: patterns[i].toString()
			});
		}
		//endregion

		return stringStream.findAllIn(stringPatterns, start, length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find all positions of a pattern
  * @param {BitStream} pattern Stream having pattern value
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @returns {Array|number}
  */
	findAllPatternIn(pattern, start = null, length = null) {
		//region Convert "BitStream" values to "ByteStream" 
		const stringStream = new ByteStream({
			string: this.toString()
		});
		const stringPattern = new ByteStream({
			string: pattern.toString()
		});
		//endregion 

		return stringStream.findAllPatternIn(stringPattern, start, length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find first position of data, not included in patterns from input array
  * @param {Array.<BitStream>} patterns Array with patterns which should be found
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {{left: {id: number, position: *}, right: {id: number, position: number}, value: ByteStream}}
  */
	findFirstNotIn(patterns, start = null, length = null, backward = false) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});

		const stringPatterns = new Array(patterns.length);

		for (let i = 0; i < patterns.length; i++) {
			stringPatterns[i] = new ByteStream({
				string: patterns[i].toString()
			});
		}
		//endregion

		return stringStream.findFirstNotIn(stringPatterns, start, length, backward);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find all positions of data, not included in patterns from input array
  * @param {Array.<BitStream>} patterns Array with patterns which should be found
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @returns {Array}
  */
	findAllNotIn(patterns, start = null, length = null) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});

		const stringPatterns = new Array(patterns.length);

		for (let i = 0; i < patterns.length; i++) {
			stringPatterns[i] = new ByteStream({
				string: patterns[i].toString()
			});
		}
		//endregion

		return stringStream.findAllNotIn(stringPatterns, start, length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find position of a sequence of any patterns from input array
  * @param {Array.<BitStream>} patterns Array with patterns which should be found
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {{position, value}|*}
  */
	findFirstSequence(patterns, start = null, length = null, backward = false) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});

		const stringPatterns = new Array(patterns.length);

		for (let i = 0; i < patterns.length; i++) {
			stringPatterns[i] = new ByteStream({
				string: patterns[i].toString()
			});
		}
		//endregion

		return stringStream.findFirstSequence(stringPatterns, start, length, backward);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find position of a sequence of any patterns from input array
  * @param {Array.<BitStream>} patterns Array with patterns which should be found
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @returns {Array}
  */
	findAllSequences(patterns, start, length) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});

		const stringPatterns = new Array(patterns.length);

		for (let i = 0; i < patterns.length; i++) {
			stringPatterns[i] = new ByteStream({
				string: patterns[i].toString()
			});
		}
		//endregion

		return stringStream.findAllSequences(stringPatterns, start, length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Find all paired patterns in the stream
  * @param {BitStream} leftPattern Left pattern to search for
  * @param {BitStream} rightPattern Right pattern to search for
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @returns {Array}
  */
	findPairedPatterns(leftPattern, rightPattern, start = null, length = null) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});
		const stringLeftPattern = new ByteStream({
			string: leftPattern.toString()
		});
		const stringRightPattern = new ByteStream({
			string: rightPattern.toString()
		});
		//endregion

		return stringStream.findPairedPatterns(stringLeftPattern, stringRightPattern, start, length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleLoopsJS
	/**
  * Find all paired patterns in the stream
  * @param {Array.<BitStream>} inputLeftPatterns Array of left patterns to search for
  * @param {Array.<BitStream>} inputRightPatterns Array of right patterns to search for
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @returns {Array}
  */
	findPairedArrays(inputLeftPatterns, inputRightPatterns, start = null, length = null) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});

		const stringLeftPatterns = new Array(inputLeftPatterns.length);

		for (let i = 0; i < inputLeftPatterns.length; i++) {
			stringLeftPatterns[i] = new ByteStream({
				string: inputLeftPatterns[i].toString()
			});
		}

		const stringRightPatterns = new Array(inputRightPatterns.length);

		for (let i = 0; i < inputRightPatterns.length; i++) {
			stringRightPatterns[i] = new ByteStream({
				string: inputRightPatterns[i].toString()
			});
		}
		//endregion

		return stringStream.findPairedArrays(stringLeftPatterns, stringRightPatterns, start, length);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleReturnPointsJS
	/**
  * Replace one pattern with other
  * @param {BitStream} searchPattern The pattern to search for
  * @param {BitStream} replacePattern The pattern to replace initial pattern
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @returns {boolean}
  */
	replacePattern(searchPattern, replacePattern, start = null, length = null) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});
		const stringSearchPattern = new ByteStream({
			string: searchPattern.toString()
		});
		const stringReplacePattern = new ByteStream({
			string: replacePattern.toString()
		});
		//endregion

		//region Re-initialize existing data
		if (stringStream.findPairedPatterns(stringSearchPattern, stringReplacePattern, start, length)) {
			// noinspection NestedFunctionCallJS
			this.fromString(stringStream.toString());
			return true;
		}
		//endregion

		return false;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Skip any pattern from input array
  * @param {Array.<BitStream>} patterns Array with patterns which should be ommited
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {*}
  */
	skipPatterns(patterns, start, length, backward) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});

		const stringPatterns = new Array(patterns.length);

		for (let i = 0; i < patterns.length; i++) {
			stringPatterns[i] = new ByteStream({
				string: patterns[i].toString()
			});
		}
		//endregion

		return stringStream.skipPatterns(stringPatterns, start, length, backward);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Skip any pattern not from input array
  * @param {Array.<BitStream>} patterns Array with patterns which should be ommited
  * @param {?number} [start=null] Start position to search from
  * @param {?number} [length=null] Length of byte block to search at
  * @param {boolean} [backward=false] Flag to search in backward order
  * @returns {number}
  */
	skipNotPatterns(patterns, start, length, backward) {
		//region Convert "BitStream" values to "ByteStream"
		const stringStream = new ByteStream({
			string: this.toString()
		});

		const stringPatterns = new Array(patterns.length);

		for (let i = 0; i < patterns.length; i++) {
			stringPatterns[i] = new ByteStream({
				string: patterns[i].toString()
			});
		}
		//endregion

		return stringStream.skipNotPatterns(stringPatterns, start, length, backward);
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Append a new "BitStream" content to the current "BitStream"
  * @param {BitStream} stream A new "stream" to append to current "stream"
  */
	append(stream) {
		//region Initialize current stream with new data
		// noinspection NestedFunctionCallJS
		this.fromString([this.toString(), stream.toString()].join(""));
		//endregion
	}
	//**********************************************************************************
}
exports.BitStream = BitStream; //**************************************************************************************

class SeqBitStream {
	//**********************************************************************************
	constructor(parameters = {}) {
		//region Internal variables
		this.stream = new BitStream();

		this._start = 0;
		this._length = this.stream.bitsCount;

		this.backward = false;

		this.appendBlock = 0;
		//endregion

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = Object.keys(parameters)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				const key = _step4.value;

				switch (key) {
					case "stream":
					case "start":
					case "length":
					case "backward":
					case "appendBlock":
						this[key] = parameters[key];
						break;
					default:
				}
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	set start(value) {
		// noinspection NonBlockStatementBodyJS
		if (value > this.stream.bitsCount) return;

		// noinspection ConditionalExpressionJS
		this._length -= this.backward ? this._start - value : value - this._start;
		this._start = value;

		//region Initialization of "prev" internal variables
		// noinspection JSUnusedGlobalSymbols
		this.prevStart = this._start;
		// noinspection JSUnusedGlobalSymbols
		this.prevLength = this._length;
		//endregion
	}
	//**********************************************************************************
	get start() {
		return this._start;
	}
	//**********************************************************************************
	// noinspection FunctionWithMultipleReturnPointsJS
	set length(value) {
		// noinspection NonBlockStatementBodyJS
		if (value > this.stream.bitsCount) return;

		// noinspection JSUnusedGlobalSymbols
		this.prevLength = this._length;
		this._length = value;
	}
	//**********************************************************************************
	get length() {
		return this._length;
	}
	//**********************************************************************************
	set stream(value) {
		this._stream = value;

		// noinspection JSUnusedGlobalSymbols
		this.prevLength = this._length;
		this._length = value.bitsCount;

		// noinspection JSUnusedGlobalSymbols
		this.prevStart = this._start;
		// noinspection ConditionalExpressionJS
		this._start = this.backward ? this.length : 0;
	}
	//**********************************************************************************
	get stream() {
		return this._stream;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols
	/**
  * Get next "length" bits from the stream
  * @param {number} length Number of bits to read
  * @returns {*}
  */
	getBits(length) {
		//region Check input parameters 
		if (this.start + length > this.stream.bitsCount) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.stream.bitsCount - this.start;
		}
		//endregion 

		//region Initial variables 
		let result;
		//endregion 

		//region Copy necessary length of bits
		if (this.backward) {
			result = this.stream.copy(this.start - length, length);
			this.start -= result.bitsCount;
		} else {
			result = this.stream.copy(this.start, length);
			this.start += result.bitsCount;
		}
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection FunctionTooLongJS
	/**
  * Get string representation for the next "length" bits from the stream
  * @param {number} length Number of bits to read
  * @returns {string}
  */
	getBitsString(length) {
		//region Check input parameters
		if (this.start + length > this.stream.bitsCount) {
			// noinspection AssignmentToFunctionParameterJS
			length = this.stream.bitsCount - this.start;
		}
		//endregion

		//region Initial variables
		let result = [];

		let start;

		// noinspection NonBlockStatementBodyJS
		if (this.backward) start = this.start - length;else start = this.start;

		let end = this.start + length - 1;

		//region Make ability to pass non-value bits
		let valueShift = 0;
		// noinspection NonBlockStatementBodyJS
		if (this.stream.bitsCount % 8) valueShift = 8 - this.stream.bitsCount % 8;

		start += valueShift;
		end += valueShift;
		//endregion

		const startIndex = start >> 3;
		// noinspection MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const startOffset = start & 0x07;

		const endIndex = end >> 3;
		// noinspection MagicNumberJS, NonShortCircuitBooleanExpressionJS
		const endOffset = end & 0x07;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, ConditionalExpressionJS, EqualityComparisonWithCoercionJS
		const bitsLengthIndex = startIndex + (endIndex - startIndex == 0 ? 1 : endIndex - startIndex + 1);
		//endregion

		//region Get string representation of bits
		for (let i = startIndex; i < bitsLengthIndex; i++) {
			let value = bitsToStringArray[this.stream.view[i]];

			// noinspection EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
			if (i == startIndex) value = value.slice(startOffset);

			// noinspection EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
			if (i == bitsLengthIndex - 1) value = value.slice(0, endOffset - 7 + value.length);

			result.push(value);
		}

		result = result.join("");
		//endregion

		//region Change internal values
		// noinspection NonBlockStatementBodyJS
		if (this.backward) this.start -= result.length;else this.start += result.length;
		//endregion

		return result;
	}
	//**********************************************************************************
	// noinspection JSUnusedGlobalSymbols, FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS
	/**
  * Get number value representation of the next "length" bits from the stream, preliminary reversed
  * @param {number} length Number of bits to read
  * @returns {*}
  */
	getBitsReversedValue(length) {
		//region Initial variables 
		const initialValue = this.getBitsString(length);
		const initialValueLength = initialValue.length;

		let byteIndex;

		const initialOffset = 8 - initialValueLength % 8;

		const reversedValue = new Array(initialValueLength);

		const value = new Uint32Array(1);
		const valueView = new Uint8Array(value.buffer, 0, 4);

		let i;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, MagicNumberJS, NonBlockStatementBodyJS
		if (initialValueLength > 32) return -1;

		// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, MagicNumberJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
		if (length == 32) byteIndex = 3;else byteIndex = initialValueLength - 1 >> 3;
		//endregion

		//region Reverse value 
		// noinspection NonBlockStatementBodyJS
		for (i = 0; i < initialValueLength; i++) reversedValue[initialValueLength - 1 - i] = initialValue[i];
		//endregion 

		//region Convert byte array to "Uint32Array" value 
		for (i = initialOffset; i < initialOffset + initialValueLength; i++) {
			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS
			if (reversedValue[i - initialOffset] == "1") {
				// noinspection MagicNumberJS
				valueView[byteIndex] |= 0x01 << 7 - i % 8;
			}

			// noinspection ConstantOnRightSideOfComparisonJS, ConstantOnLeftSideOfComparisonJS, EqualityComparisonWithCoercionJS, NonBlockStatementBodyJS
			if (i && (i + 1) % 8 == 0) byteIndex--;
		}
		//endregion 

		return value[0];
	}
	//**********************************************************************************
	/**
  * Represent remaining bits in "BitStream" as a string
  * @return {string}
  */
	toString() {
		const streamToDisplay = this.stream.copy(this.start, this.length);
		return streamToDisplay.toString();
	}
	//**********************************************************************************
}
exports.SeqBitStream = SeqBitStream; //**************************************************************************************

},{}],19:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],20:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"dup":17}],21:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],22:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _common = require("./helpers/common.js");

var _PublicKeyInfo = _interopRequireDefault(require("./helpers/PublicKeyInfo.js"));

var _RelativeDistinguishedNames = _interopRequireDefault(require("./helpers/RelativeDistinguishedNames.js"));

var _AlgorithmIdentifier = _interopRequireDefault(require("./helpers/AlgorithmIdentifier.js"));

var _Attribute = _interopRequireDefault(require("./helpers/Attribute.js"));

//**************************************************************************************
function CertificationRequestInfo() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  //CertificationRequestInfo ::= SEQUENCE {
  //    version       INTEGER { v1(0) } (v1,...),
  //    subject       Name,
  //    subjectPKInfo SubjectPublicKeyInfo{{ PKInfoAlgorithms }},
  //    attributes    [0] Attributes{{ CRIAttributes }}
  //}

  /**
   * @type {Object}
   * @property {string} [blockName]
   * @property {string} [CertificationRequestInfo]
   * @property {string} [CertificationRequestInfoVersion]
   * @property {string} [subject]
   * @property {string} [CertificationRequestInfoAttributes]
   * @property {string} [attributes]
   */
  var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
  return new asn1js.Sequence({
    name: names.CertificationRequestInfo || "CertificationRequestInfo",
    value: [new asn1js.Integer({
      name: names.CertificationRequestInfoVersion || "CertificationRequestInfo.version"
    }), _RelativeDistinguishedNames["default"].schema(names.subject || {
      names: {
        blockName: "CertificationRequestInfo.subject"
      }
    }), _PublicKeyInfo["default"].schema({
      names: {
        blockName: "CertificationRequestInfo.subjectPublicKeyInfo"
      }
    }), new asn1js.Constructed({
      optional: true,
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 0 // [0]

      },
      value: [new asn1js.Repeated({
        optional: true,
        // Because OpenSSL makes wrong "attributes" field
        name: names.CertificationRequestInfoAttributes || "CertificationRequestInfo.attributes",
        value: _Attribute["default"].schema(names.attributes || {})
      })]
    })]
  });
} //**************************************************************************************

/**
 * Class from RFC2986
 */


var CertificationRequest =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for Attribute class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function CertificationRequest() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CertificationRequest);
    //region Internal properties of the object

    /**
     * @type {ArrayBuffer}
     * @desc tbs
     */
    this.tbs = (0, _pvutils.getParametersValue)(parameters, "tbs", CertificationRequest.defaultValues("tbs"));
    /**
     * @type {number}
     * @desc version
     */

    this.version = (0, _pvutils.getParametersValue)(parameters, "version", CertificationRequest.defaultValues("version"));
    /**
     * @type {RelativeDistinguishedNames}
     * @desc subject
     */

    this.subject = (0, _pvutils.getParametersValue)(parameters, "subject", CertificationRequest.defaultValues("subject"));
    /**
     * @type {PublicKeyInfo}
     * @desc subjectPublicKeyInfo
     */

    this.subjectPublicKeyInfo = (0, _pvutils.getParametersValue)(parameters, "subjectPublicKeyInfo", CertificationRequest.defaultValues("subjectPublicKeyInfo"));
    if ("attributes" in parameters)
      /**
       * @type {Array.<Attribute>}
       * @desc attributes
       */
      this.attributes = (0, _pvutils.getParametersValue)(parameters, "attributes", CertificationRequest.defaultValues("attributes"));
    /**
     * @type {AlgorithmIdentifier}
     * @desc signatureAlgorithm
     */

    this.signatureAlgorithm = (0, _pvutils.getParametersValue)(parameters, "signatureAlgorithm", CertificationRequest.defaultValues("signatureAlgorithm"));
    /**
     * @type {BitString}
     * @desc signatureAlgorithm
     */

    this.signatureValue = (0, _pvutils.getParametersValue)(parameters, "signatureValue", CertificationRequest.defaultValues("signatureValue")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(CertificationRequest, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["CertificationRequestInfo", "CertificationRequestInfo.version", "CertificationRequestInfo.subject", "CertificationRequestInfo.subjectPublicKeyInfo", "CertificationRequestInfo.attributes", "signatureAlgorithm", "signatureValue"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, CertificationRequest.schema());
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CertificationRequest"); //endregion
      //region Get internal properties from parsed schema

      this.tbs = asn1.result.CertificationRequestInfo.valueBeforeDecode;
      this.version = asn1.result["CertificationRequestInfo.version"].valueBlock.valueDec;
      this.subject = new _RelativeDistinguishedNames["default"]({
        schema: asn1.result["CertificationRequestInfo.subject"]
      });
      this.subjectPublicKeyInfo = new _PublicKeyInfo["default"]({
        schema: asn1.result["CertificationRequestInfo.subjectPublicKeyInfo"]
      });
      if ("CertificationRequestInfo.attributes" in asn1.result) this.attributes = Array.from(asn1.result["CertificationRequestInfo.attributes"], function (element) {
        return new _Attribute["default"]({
          schema: element
        });
      });
      this.signatureAlgorithm = new _AlgorithmIdentifier["default"]({
        schema: asn1.result.signatureAlgorithm
      });
      this.signatureValue = asn1.result.signatureValue; //endregion
    } //**********************************************************************************

    /**
     * Aux function making ASN1js Sequence from current TBS
     * @returns {Sequence}
     */

  }, {
    key: "encodeTBS",
    value: function encodeTBS() {
      //region Create array for output sequence
      var outputArray = [new asn1js.Integer({
        value: this.version
      }), this.subject.toSchema(), this.subjectPublicKeyInfo.toSchema()];

      if ("attributes" in this) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: Array.from(this.attributes, function (element) {
            return element.toSchema();
          })
        }));
      } //endregion


      return new asn1js.Sequence({
        value: outputArray
      });
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      var encodeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      //region Decode stored TBS value
      var tbsSchema;

      if (encodeFlag === false) {
        if (this.tbs.byteLength === 0) // No stored TBS part
          return CertificationRequest.schema();
        tbsSchema = asn1js.fromBER(this.tbs).result;
      } //endregion
      //region Create TBS schema via assembling from TBS parts
      else tbsSchema = this.encodeTBS(); //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: [tbsSchema, this.signatureAlgorithm.toSchema(), this.signatureValue]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {
        tbs: (0, _pvutils.bufferToHexCodes)(this.tbs, 0, this.tbs.byteLength),
        version: this.version,
        subject: this.subject.toJSON(),
        subjectPublicKeyInfo: this.subjectPublicKeyInfo.toJSON(),
        signatureAlgorithm: this.signatureAlgorithm.toJSON(),
        signatureValue: this.signatureValue.toJSON()
      };
      if ("attributes" in this) object.attributes = Array.from(this.attributes, function (element) {
        return element.toJSON();
      });
      return object;
    } //**********************************************************************************

    /**
     * Makes signature for currect certification request
     * @param {Object} privateKey WebCrypto private key
     * @param {string} [hashAlgorithm=SHA-1] String representing current hashing algorithm
     */

  }, {
    key: "sign",
    value: function sign(privateKey) {
      var _this = this;

      var hashAlgorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "SHA-1";
      //region Initial checking
      //region Get a private key from function parameter
      if (typeof privateKey === "undefined") return Promise.reject("Need to provide a private key for signing"); //endregion
      //endregion
      //region Initial variables

      var sequence = Promise.resolve();
      var parameters;
      var engine = (0, _common.getEngine)(); //endregion
      //region Get a "default parameters" for current algorithm and set correct signature algorithm

      sequence = sequence.then(function () {
        return engine.subtle.getSignatureParameters(privateKey, hashAlgorithm);
      });
      sequence = sequence.then(function (result) {
        parameters = result.parameters;
        _this.signatureAlgorithm = result.signatureAlgorithm;
      }); //endregion
      //region Create TBS data for signing

      sequence = sequence.then(function () {
        _this.tbs = _this.encodeTBS().toBER(false);
      }); //endregion
      //region Signing TBS data on provided private key

      sequence = sequence.then(function () {
        return engine.subtle.signWithPrivateKey(_this.tbs, privateKey, parameters);
      });
      sequence = sequence.then(function (result) {
        _this.signatureValue = new asn1js.BitString({
          valueHex: result
        });
      }); //endregion

      return sequence;
    } //**********************************************************************************

    /**
     * Verify existing certification request signature
     * @returns {*}
     */

  }, {
    key: "verify",
    value: function verify() {
      return (0, _common.getEngine)().subtle.verifyWithPublicKey(this.tbs, this.signatureValue, this.subjectPublicKeyInfo, this.signatureAlgorithm);
    } //**********************************************************************************

    /**
     * Importing public key for current certificate request
     */

  }, {
    key: "getPublicKey",
    value: function getPublicKey() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return (0, _common.getEngine)().getPublicKey(this.subjectPublicKeyInfo, this.signatureAlgorithm, parameters);
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "tbs":
          return new ArrayBuffer(0);

        case "version":
          return 0;

        case "subject":
          return new _RelativeDistinguishedNames["default"]();

        case "subjectPublicKeyInfo":
          return new _PublicKeyInfo["default"]();

        case "attributes":
          return [];

        case "signatureAlgorithm":
          return new _AlgorithmIdentifier["default"]();

        case "signatureValue":
          return new asn1js.BitString();

        default:
          throw new Error("Invalid member name for CertificationRequest class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * CertificationRequest ::= SEQUENCE {
     *    certificationRequestInfo CertificationRequestInfo,
     *    signatureAlgorithm       AlgorithmIdentifier{{ SignatureAlgorithms }},
     *    signature                BIT STRING
     * }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [certificationRequestInfo]
       * @property {string} [signatureAlgorithm]
       * @property {string} [signatureValue]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        value: [CertificationRequestInfo(names.certificationRequestInfo || {}), new asn1js.Sequence({
          name: names.signatureAlgorithm || "signatureAlgorithm",
          value: [new asn1js.ObjectIdentifier(), new asn1js.Any({
            optional: true
          })]
        }), new asn1js.BitString({
          name: names.signatureValue || "signatureValue"
        })]
      });
    }
  }]);
  return CertificationRequest;
}(); //**************************************************************************************


exports["default"] = CertificationRequest;

},{"./helpers/AlgorithmIdentifier.js":24,"./helpers/Attribute.js":26,"./helpers/PublicKeyInfo.js":58,"./helpers/RelativeDistinguishedNames.js":63,"./helpers/common.js":66,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],23:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _GeneralName = _interopRequireDefault(require("./GeneralName.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var AccessDescription =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for AccessDescription class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function AccessDescription() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, AccessDescription);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc The type and format of the information are specified by the accessMethod field. This profile defines two accessMethod OIDs: id-ad-caIssuers and id-ad-ocsp
     */
    this.accessMethod = (0, _pvutils.getParametersValue)(parameters, "accessMethod", AccessDescription.defaultValues("accessMethod"));
    /**
     * @type {GeneralName}
     * @desc The accessLocation field specifies the location of the information
     */

    this.accessLocation = (0, _pvutils.getParametersValue)(parameters, "accessLocation", AccessDescription.defaultValues("accessLocation")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(AccessDescription, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["accessMethod", "accessLocation"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, AccessDescription.schema({
        names: {
          accessMethod: "accessMethod",
          accessLocation: {
            names: {
              blockName: "accessLocation"
            }
          }
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AccessDescription"); //endregion
      //region Get internal properties from parsed schema

      this.accessMethod = asn1.result.accessMethod.valueBlock.toString();
      this.accessLocation = new _GeneralName["default"]({
        schema: asn1.result.accessLocation
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: [new asn1js.ObjectIdentifier({
          value: this.accessMethod
        }), this.accessLocation.toSchema()]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        accessMethod: this.accessMethod,
        accessLocation: this.accessLocation.toJSON()
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "accessMethod":
          return "";

        case "accessLocation":
          return new _GeneralName["default"]();

        default:
          throw new Error("Invalid member name for AccessDescription class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * AccessDescription  ::=  SEQUENCE {
     *    accessMethod          OBJECT IDENTIFIER,
     *    accessLocation        GeneralName  }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [accessMethod]
       * @property {string} [accessLocation]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.accessMethod || ""
        }), _GeneralName["default"].schema(names.accessLocation || {})]
      });
    }
  }]);
  return AccessDescription;
}(); //**************************************************************************************


exports["default"] = AccessDescription;

},{"./GeneralName.js":42,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],24:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC5280
 */
var AlgorithmIdentifier =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for AlgorithmIdentifier class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   * @property {string} [algorithmId] ObjectIdentifier for algorithm (string representation)
   */
  function AlgorithmIdentifier() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, AlgorithmIdentifier);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc ObjectIdentifier for algorithm (string representation)
     */
    this.algorithmId = (0, _pvutils.getParametersValue)(parameters, "algorithmId", AlgorithmIdentifier.defaultValues("algorithmId"));
    if ("algorithmParams" in parameters)
      /**
       * @type {Object}
       * @desc Any algorithm parameters
       */
      this.algorithmParams = (0, _pvutils.getParametersValue)(parameters, "algorithmParams", AlgorithmIdentifier.defaultValues("algorithmParams")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(AlgorithmIdentifier, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["algorithm", "params"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, AlgorithmIdentifier.schema({
        names: {
          algorithmIdentifier: "algorithm",
          algorithmParams: "params"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AlgorithmIdentifier"); //endregion
      //region Get internal properties from parsed schema

      this.algorithmId = asn1.result.algorithm.valueBlock.toString();
      if ("params" in asn1.result) this.algorithmParams = asn1.result.params; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];
      outputArray.push(new asn1js.ObjectIdentifier({
        value: this.algorithmId
      }));
      if ("algorithmParams" in this && this.algorithmParams instanceof asn1js.Any === false) outputArray.push(this.algorithmParams); //endregion
      //region Construct and return new ASN.1 schema for this object

      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {
        algorithmId: this.algorithmId
      };
      if ("algorithmParams" in this && this.algorithmParams instanceof asn1js.Any === false) object.algorithmParams = this.algorithmParams.toJSON();
      return object;
    } //**********************************************************************************

    /**
     * Check that two "AlgorithmIdentifiers" are equal
     * @param {AlgorithmIdentifier} algorithmIdentifier
     * @returns {boolean}
     */

  }, {
    key: "isEqual",
    value: function isEqual(algorithmIdentifier) {
      //region Check input type
      if (algorithmIdentifier instanceof AlgorithmIdentifier === false) return false; //endregion
      //region Check "algorithm_id"

      if (this.algorithmId !== algorithmIdentifier.algorithmId) return false; //endregion
      //region Check "algorithm_params"

      if ("algorithmParams" in this) {
        if ("algorithmParams" in algorithmIdentifier) return JSON.stringify(this.algorithmParams) === JSON.stringify(algorithmIdentifier.algorithmParams);
        return false;
      }

      if ("algorithmParams" in algorithmIdentifier) return false; //endregion

      return true;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "algorithmId":
          return "";

        case "algorithmParams":
          return new asn1js.Any();

        default:
          throw new Error("Invalid member name for AlgorithmIdentifier class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "algorithmId":
          return memberValue === "";

        case "algorithmParams":
          return memberValue instanceof asn1js.Any;

        default:
          throw new Error("Invalid member name for AlgorithmIdentifier class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * AlgorithmIdentifier  ::=  Sequence  {
     *    algorithm               OBJECT IDENTIFIER,
     *    parameters              ANY DEFINED BY algorithm OPTIONAL  }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} algorithmIdentifier ObjectIdentifier for the algorithm
       * @property {string} algorithmParams Any algorithm parameters
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        optional: names.optional || false,
        value: [new asn1js.ObjectIdentifier({
          name: names.algorithmIdentifier || ""
        }), new asn1js.Any({
          name: names.algorithmParams || "",
          optional: true
        })]
      });
    }
  }]);
  return AlgorithmIdentifier;
}(); //**************************************************************************************


exports["default"] = AlgorithmIdentifier;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],25:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _GeneralName = _interopRequireDefault(require("./GeneralName.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var AltName =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for AltName class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function AltName() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, AltName);
    //region Internal properties of the object

    /**
     * @type {Array.<GeneralName>}
     * @desc Array of alternative names in GeneralName type
     */
    this.altNames = (0, _pvutils.getParametersValue)(parameters, "altNames", AltName.defaultValues("altNames")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(AltName, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["altNames"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, AltName.schema({
        names: {
          altNames: "altNames"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AltName"); //endregion
      //region Get internal properties from parsed schema

      if ("altNames" in asn1.result) this.altNames = Array.from(asn1.result.altNames, function (element) {
        return new _GeneralName["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.altNames, function (element) {
          return element.toSchema();
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        altNames: Array.from(this.altNames, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "altNames":
          return [];

        default:
          throw new Error("Invalid member name for AltName class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * AltName ::= GeneralNames
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [altNames]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.altNames || "",
          value: _GeneralName["default"].schema()
        })]
      });
    }
  }]);
  return AltName;
}(); //**************************************************************************************


exports["default"] = AltName;

},{"./GeneralName.js":42,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],26:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC2986
 */
var Attribute =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for Attribute class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function Attribute() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Attribute);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc ObjectIdentifier for attribute (string representation)
     */
    this.type = (0, _pvutils.getParametersValue)(parameters, "type", Attribute.defaultValues("type"));
    /**
     * @type {Array}
     * @desc Any attribute values
     */

    this.values = (0, _pvutils.getParametersValue)(parameters, "values", Attribute.defaultValues("values")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(Attribute, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["type", "values"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, Attribute.schema({
        names: {
          type: "type",
          values: "values"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for Attribute"); //endregion
      //region Get internal properties from parsed schema

      this.type = asn1.result.type.valueBlock.toString();
      this.values = asn1.result.values; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: [new asn1js.ObjectIdentifier({
          value: this.type
        }), new asn1js.Set({
          value: this.values
        })]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        type: this.type,
        values: Array.from(this.values, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "type":
          return "";

        case "values":
          return [];

        default:
          throw new Error("Invalid member name for Attribute class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "type":
          return memberValue === "";

        case "values":
          return memberValue.length === 0;

        default:
          throw new Error("Invalid member name for Attribute class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * Attribute { ATTRIBUTE:IOSet } ::= SEQUENCE {
     *    type   ATTRIBUTE.&id({IOSet}),
     *    values SET SIZE(1..MAX) OF ATTRIBUTE.&Type({IOSet}{@type})
     * }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [type]
       * @property {string} [setName]
       * @property {string} [values]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.type || ""
        }), new asn1js.Set({
          name: names.setName || "",
          value: [new asn1js.Repeated({
            name: names.values || "",
            value: new asn1js.Any()
          })]
        })]
      });
    }
  }]);
  return Attribute;
}(); //**************************************************************************************


exports["default"] = Attribute;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],27:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _common = require("./common.js");

//**************************************************************************************

/**
 * Class from RFC5280
 */
var AttributeTypeAndValue =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for AttributeTypeAndValue class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function AttributeTypeAndValue() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, AttributeTypeAndValue);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc type
     */
    this.type = (0, _pvutils.getParametersValue)(parameters, "type", AttributeTypeAndValue.defaultValues("type"));
    /**
     * @type {Object}
     * @desc Value of the AttributeTypeAndValue class
     */

    this.value = (0, _pvutils.getParametersValue)(parameters, "value", AttributeTypeAndValue.defaultValues("value")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(AttributeTypeAndValue, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["type", "typeValue"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, AttributeTypeAndValue.schema({
        names: {
          type: "type",
          value: "typeValue"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AttributeTypeAndValue"); //endregion
      //region Get internal properties from parsed schema

      this.type = asn1.result.type.valueBlock.toString(); // noinspection JSUnresolvedVariable

      this.value = asn1.result.typeValue; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: [new asn1js.ObjectIdentifier({
          value: this.type
        }), this.value]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _object = {
        type: this.type
      };
      if (Object.keys(this.value).length !== 0) _object.value = this.value.toJSON();else _object.value = this.value;
      return _object;
    } //**********************************************************************************

    /**
     * Compare two AttributeTypeAndValue values, or AttributeTypeAndValue with ArrayBuffer value
     * @param {(AttributeTypeAndValue|ArrayBuffer)} compareTo The value compare to current
     * @returns {boolean}
     */

  }, {
    key: "isEqual",
    value: function isEqual(compareTo) {
      var stringBlockNames = [asn1js.Utf8String.blockName(), asn1js.BmpString.blockName(), asn1js.UniversalString.blockName(), asn1js.NumericString.blockName(), asn1js.PrintableString.blockName(), asn1js.TeletexString.blockName(), asn1js.VideotexString.blockName(), asn1js.IA5String.blockName(), asn1js.GraphicString.blockName(), asn1js.VisibleString.blockName(), asn1js.GeneralString.blockName(), asn1js.CharacterString.blockName()];

      if (compareTo.constructor.blockName() === AttributeTypeAndValue.blockName()) {
        if (this.type !== compareTo.type) return false; //region Check we do have both strings

        var isString = false;
        var thisName = this.value.constructor.blockName();

        if (thisName === compareTo.value.constructor.blockName()) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = stringBlockNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var name = _step.value;

              if (thisName === name) {
                isString = true;
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } //endregion


        if (isString) {
          var value1 = (0, _common.stringPrep)(this.value.valueBlock.value);
          var value2 = (0, _common.stringPrep)(compareTo.value.valueBlock.value);
          if (value1.localeCompare(value2) !== 0) return false;
        } else // Comparing as two ArrayBuffers
          {
            if ((0, _pvutils.isEqualBuffer)(this.value.valueBeforeDecode, compareTo.value.valueBeforeDecode) === false) return false;
          }

        return true;
      }

      if (compareTo instanceof ArrayBuffer) return (0, _pvutils.isEqualBuffer)(this.value.valueBeforeDecode, compareTo);
      return false;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "type":
          return "";

        case "value":
          return {};

        default:
          throw new Error("Invalid member name for AttributeTypeAndValue class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * AttributeTypeAndValue ::= Sequence {
     *    type     AttributeType,
     *    value    AttributeValue }
     *
     * AttributeType ::= OBJECT IDENTIFIER
     *
     * AttributeValue ::= ANY -- DEFINED BY AttributeType
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName] Name for entire block
       * @property {string} [type] Name for "type" element
       * @property {string} [value] Name for "value" element
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.type || ""
        }), new asn1js.Any({
          name: names.value || ""
        })]
      });
    } //**********************************************************************************

  }, {
    key: "blockName",
    value: function blockName() {
      return "AttributeTypeAndValue";
    }
  }]);
  return AttributeTypeAndValue;
}(); //**************************************************************************************


exports["default"] = AttributeTypeAndValue;

},{"./common.js":66,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],28:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _GeneralName = _interopRequireDefault(require("./GeneralName.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var AuthorityKeyIdentifier =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for AuthorityKeyIdentifier class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function AuthorityKeyIdentifier() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, AuthorityKeyIdentifier);
    //region Internal properties of the object
    if ("keyIdentifier" in parameters)
      /**
       * @type {OctetString}
       * @desc keyIdentifier
       */
      this.keyIdentifier = (0, _pvutils.getParametersValue)(parameters, "keyIdentifier", AuthorityKeyIdentifier.defaultValues("keyIdentifier"));
    if ("authorityCertIssuer" in parameters)
      /**
       * @type {Array.<GeneralName>}
       * @desc authorityCertIssuer
       */
      this.authorityCertIssuer = (0, _pvutils.getParametersValue)(parameters, "authorityCertIssuer", AuthorityKeyIdentifier.defaultValues("authorityCertIssuer"));
    if ("authorityCertSerialNumber" in parameters)
      /**
       * @type {Integer}
       * @desc authorityCertIssuer
       */
      this.authorityCertSerialNumber = (0, _pvutils.getParametersValue)(parameters, "authorityCertSerialNumber", AuthorityKeyIdentifier.defaultValues("authorityCertSerialNumber")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(AuthorityKeyIdentifier, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["keyIdentifier", "authorityCertIssuer", "authorityCertSerialNumber"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, AuthorityKeyIdentifier.schema({
        names: {
          keyIdentifier: "keyIdentifier",
          authorityCertIssuer: "authorityCertIssuer",
          authorityCertSerialNumber: "authorityCertSerialNumber"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AuthorityKeyIdentifier"); //endregion
      //region Get internal properties from parsed schema

      if ("keyIdentifier" in asn1.result) this.keyIdentifier = new asn1js.OctetString({
        valueHex: asn1.result.keyIdentifier.valueBlock.valueHex
      });
      if ("authorityCertIssuer" in asn1.result) this.authorityCertIssuer = Array.from(asn1.result.authorityCertIssuer, function (element) {
        return new _GeneralName["default"]({
          schema: element
        });
      });
      if ("authorityCertSerialNumber" in asn1.result) this.authorityCertSerialNumber = new asn1js.Integer({
        valueHex: asn1.result.authorityCertSerialNumber.valueBlock.valueHex
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];

      if ("keyIdentifier" in this) {
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          valueHex: this.keyIdentifier.valueBlock.valueHex
        }));
      }

      if ("authorityCertIssuer" in this) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          value: Array.from(this.authorityCertIssuer, function (element) {
            return element.toSchema();
          })
        }));
      }

      if ("authorityCertSerialNumber" in this) {
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 2 // [2]

          },
          valueHex: this.authorityCertSerialNumber.valueBlock.valueHex
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {};
      if ("keyIdentifier" in this) object.keyIdentifier = this.keyIdentifier.toJSON();
      if ("authorityCertIssuer" in this) object.authorityCertIssuer = Array.from(this.authorityCertIssuer, function (element) {
        return element.toJSON();
      });
      if ("authorityCertSerialNumber" in this) object.authorityCertSerialNumber = this.authorityCertSerialNumber.toJSON();
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "keyIdentifier":
          return new asn1js.OctetString();

        case "authorityCertIssuer":
          return [];

        case "authorityCertSerialNumber":
          return new asn1js.Integer();

        default:
          throw new Error("Invalid member name for AuthorityKeyIdentifier class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * AuthorityKeyIdentifier OID ::= 2.5.29.35
     *
     * AuthorityKeyIdentifier ::= SEQUENCE {
     *    keyIdentifier             [0] KeyIdentifier           OPTIONAL,
     *    authorityCertIssuer       [1] GeneralNames            OPTIONAL,
     *    authorityCertSerialNumber [2] CertificateSerialNumber OPTIONAL  }
     *
     * KeyIdentifier ::= OCTET STRING
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [keyIdentifier]
       * @property {string} [authorityCertIssuer]
       * @property {string} [authorityCertSerialNumber]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Primitive({
          name: names.keyIdentifier || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          }
        }), new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          value: [new asn1js.Repeated({
            name: names.authorityCertIssuer || "",
            value: _GeneralName["default"].schema()
          })]
        }), new asn1js.Primitive({
          name: names.authorityCertSerialNumber || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 2 // [2]

          }
        })]
      });
    }
  }]);
  return AuthorityKeyIdentifier;
}(); //**************************************************************************************


exports["default"] = AuthorityKeyIdentifier;

},{"./GeneralName.js":42,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],29:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC5280
 */
var BasicConstraints =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for BasicConstraints class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   * @property {Object} [cA]
   * @property {Object} [pathLenConstraint]
   */
  function BasicConstraints() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, BasicConstraints);
    //region Internal properties of the object

    /**
     * @type {boolean}
     * @desc cA
     */
    this.cA = (0, _pvutils.getParametersValue)(parameters, "cA", false);
    if ("pathLenConstraint" in parameters)
      /**
       * @type {number|Integer}
       * @desc pathLenConstraint
       */
      this.pathLenConstraint = (0, _pvutils.getParametersValue)(parameters, "pathLenConstraint", 0); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(BasicConstraints, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["cA", "pathLenConstraint"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, BasicConstraints.schema({
        names: {
          cA: "cA",
          pathLenConstraint: "pathLenConstraint"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for BasicConstraints"); //endregion
      //region Get internal properties from parsed schema

      if ("cA" in asn1.result) this.cA = asn1.result.cA.valueBlock.value;

      if ("pathLenConstraint" in asn1.result) {
        if (asn1.result.pathLenConstraint.valueBlock.isHexOnly) this.pathLenConstraint = asn1.result.pathLenConstraint;else this.pathLenConstraint = asn1.result.pathLenConstraint.valueBlock.valueDec;
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];
      if (this.cA !== BasicConstraints.defaultValues("cA")) outputArray.push(new asn1js.Boolean({
        value: this.cA
      }));

      if ("pathLenConstraint" in this) {
        if (this.pathLenConstraint instanceof asn1js.Integer) outputArray.push(this.pathLenConstraint);else outputArray.push(new asn1js.Integer({
          value: this.pathLenConstraint
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {};
      if (this.cA !== BasicConstraints.defaultValues("cA")) object.cA = this.cA;

      if ("pathLenConstraint" in this) {
        if (this.pathLenConstraint instanceof asn1js.Integer) object.pathLenConstraint = this.pathLenConstraint.toJSON();else object.pathLenConstraint = this.pathLenConstraint;
      }

      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "cA":
          return false;

        default:
          throw new Error("Invalid member name for BasicConstraints class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * BasicConstraints ::= SEQUENCE {
     *    cA                      BOOLEAN DEFAULT FALSE,
     *    pathLenConstraint       INTEGER (0..MAX) OPTIONAL }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [cA]
       * @property {string} [pathLenConstraint]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Boolean({
          optional: true,
          name: names.cA || ""
        }), new asn1js.Integer({
          optional: true,
          name: names.pathLenConstraint || ""
        })]
      });
    }
  }]);
  return BasicConstraints;
}(); //**************************************************************************************


exports["default"] = BasicConstraints;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],30:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from https://docs.microsoft.com/en-us/windows/desktop/seccrypto/certification-authority-renewal
 */
var CAVersion =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for CAVersion class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function CAVersion() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CAVersion);
    //region Internal properties of the object

    /**
     * @type {number}
     * @desc certificateIndex
     */
    this.certificateIndex = (0, _pvutils.getParametersValue)(parameters, "certificateIndex", CAVersion.defaultValues("certificateIndex"));
    /**
     * @type {number}
     * @desc keyIndex
     */

    this.keyIndex = (0, _pvutils.getParametersValue)(parameters, "keyIndex", CAVersion.defaultValues("keyIndex")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(CAVersion, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Check the schema is valid
      if (schema.constructor.blockName() !== asn1js.Integer.blockName()) throw new Error("Object's schema was not verified against input data for CAVersion"); //endregion
      //region Check length of the input value and correct it if needed

      var value = schema.valueBlock.valueHex.slice(0);
      var valueView = new Uint8Array(value);

      switch (true) {
        case value.byteLength < 4:
          {
            var tempValue = new ArrayBuffer(4);
            var tempValueView = new Uint8Array(tempValue);
            tempValueView.set(valueView, 4 - value.byteLength);
            value = tempValue.slice(0);
          }
          break;

        case value.byteLength > 4:
          {
            var _tempValue = new ArrayBuffer(4);

            var _tempValueView = new Uint8Array(_tempValue);

            _tempValueView.set(valueView.slice(0, 4));

            value = _tempValue.slice(0);
          }
          break;

        default:
      } //endregion
      //region Get internal properties from parsed schema


      var keyIndexBuffer = value.slice(0, 2);
      var keyIndexView8 = new Uint8Array(keyIndexBuffer);
      var temp = keyIndexView8[0];
      keyIndexView8[0] = keyIndexView8[1];
      keyIndexView8[1] = temp;
      var keyIndexView16 = new Uint16Array(keyIndexBuffer);
      this.keyIndex = keyIndexView16[0];
      var certificateIndexBuffer = value.slice(2);
      var certificateIndexView8 = new Uint8Array(certificateIndexBuffer);
      temp = certificateIndexView8[0];
      certificateIndexView8[0] = certificateIndexView8[1];
      certificateIndexView8[1] = temp;
      var certificateIndexView16 = new Uint16Array(certificateIndexBuffer);
      this.certificateIndex = certificateIndexView16[0]; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create raw values
      var certificateIndexBuffer = new ArrayBuffer(2);
      var certificateIndexView = new Uint16Array(certificateIndexBuffer);
      certificateIndexView[0] = this.certificateIndex;
      var certificateIndexView8 = new Uint8Array(certificateIndexBuffer);
      var temp = certificateIndexView8[0];
      certificateIndexView8[0] = certificateIndexView8[1];
      certificateIndexView8[1] = temp;
      var keyIndexBuffer = new ArrayBuffer(2);
      var keyIndexView = new Uint16Array(keyIndexBuffer);
      keyIndexView[0] = this.keyIndex;
      var keyIndexView8 = new Uint8Array(keyIndexBuffer);
      temp = keyIndexView8[0];
      keyIndexView8[0] = keyIndexView8[1];
      keyIndexView8[1] = temp; //endregion
      //region Construct and return new ASN.1 schema for this object

      return new asn1js.Integer({
        valueHex: (0, _pvutils.utilConcatBuf)(keyIndexBuffer, certificateIndexBuffer)
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        certificateIndex: this.certificateIndex,
        keyIndex: this.keyIndex
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "certificateIndex":
        case "keyIndex":
          return 0;

        default:
          throw new Error("Invalid member name for CAVersion class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * CAVersion ::= INTEGER
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new asn1js.Integer();
    }
  }]);
  return CAVersion;
}(); //**************************************************************************************


exports["default"] = CAVersion;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],31:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _DistributionPoint = _interopRequireDefault(require("./DistributionPoint.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var CRLDistributionPoints =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for CRLDistributionPoints class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function CRLDistributionPoints() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CRLDistributionPoints);
    //region Internal properties of the object

    /**
     * @type {Array.<DistributionPoint>}
     * @desc distributionPoints
     */
    this.distributionPoints = (0, _pvutils.getParametersValue)(parameters, "distributionPoints", CRLDistributionPoints.defaultValues("distributionPoints")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(CRLDistributionPoints, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["distributionPoints"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, CRLDistributionPoints.schema({
        names: {
          distributionPoints: "distributionPoints"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CRLDistributionPoints"); //endregion
      //region Get internal properties from parsed schema

      this.distributionPoints = Array.from(asn1.result.distributionPoints, function (element) {
        return new _DistributionPoint["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.distributionPoints, function (element) {
          return element.toSchema();
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        distributionPoints: Array.from(this.distributionPoints, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "distributionPoints":
          return [];

        default:
          throw new Error("Invalid member name for CRLDistributionPoints class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * CRLDistributionPoints ::= SEQUENCE SIZE (1..MAX) OF DistributionPoint
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [distributionPoints]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.distributionPoints || "",
          value: _DistributionPoint["default"].schema()
        })]
      });
    }
  }]);
  return CRLDistributionPoints;
}(); //**************************************************************************************


exports["default"] = CRLDistributionPoints;

},{"./DistributionPoint.js":35,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],32:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _PolicyInformation = _interopRequireDefault(require("./PolicyInformation.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var CertificatePolicies =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for CertificatePolicies class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function CertificatePolicies() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CertificatePolicies);
    //region Internal properties of the object

    /**
     * @type {Array.<PolicyInformation>}
     * @desc certificatePolicies
     */
    this.certificatePolicies = (0, _pvutils.getParametersValue)(parameters, "certificatePolicies", CertificatePolicies.defaultValues("certificatePolicies")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(CertificatePolicies, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["certificatePolicies"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, CertificatePolicies.schema({
        names: {
          certificatePolicies: "certificatePolicies"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CertificatePolicies"); //endregion
      //region Get internal properties from parsed schema

      this.certificatePolicies = Array.from(asn1.result.certificatePolicies, function (element) {
        return new _PolicyInformation["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.certificatePolicies, function (element) {
          return element.toSchema();
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        certificatePolicies: Array.from(this.certificatePolicies, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "certificatePolicies":
          return [];

        default:
          throw new Error("Invalid member name for CertificatePolicies class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * certificatePolicies ::= SEQUENCE SIZE (1..MAX) OF PolicyInformation
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [certificatePolicies]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.certificatePolicies || "",
          value: _PolicyInformation["default"].schema()
        })]
      });
    }
  }]);
  return CertificatePolicies;
}(); //**************************************************************************************


exports["default"] = CertificatePolicies;

},{"./PolicyInformation.js":52,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],33:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from "[MS-WCCE]: Windows Client Certificate Enrollment Protocol"
 */
var CertificateTemplate =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for CertificateTemplate class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function CertificateTemplate() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CertificateTemplate);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc templateID
     */
    this.templateID = (0, _pvutils.getParametersValue)(parameters, "templateID", CertificateTemplate.defaultValues("templateID"));
    if ("templateMajorVersion" in parameters)
      /**
       * @type {number}
       * @desc templateMajorVersion
       */
      this.templateMajorVersion = (0, _pvutils.getParametersValue)(parameters, "templateMajorVersion", CertificateTemplate.defaultValues("templateMajorVersion"));
    if ("templateMinorVersion" in parameters)
      /**
       * @type {number}
       * @desc templateMinorVersion
       */
      this.templateMinorVersion = (0, _pvutils.getParametersValue)(parameters, "templateMinorVersion", CertificateTemplate.defaultValues("templateMinorVersion")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(CertificateTemplate, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["templateID", "templateMajorVersion", "templateMinorVersion"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, CertificateTemplate.schema({
        names: {
          templateID: "templateID",
          templateMajorVersion: "templateMajorVersion",
          templateMinorVersion: "templateMinorVersion"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CertificateTemplate"); //endregion
      //region Get internal properties from parsed schema

      this.templateID = asn1.result.templateID.valueBlock.toString();
      if ("templateMajorVersion" in asn1.result) this.templateMajorVersion = asn1.result.templateMajorVersion.valueBlock.valueDec;
      if ("templateMinorVersion" in asn1.result) this.templateMinorVersion = asn1.result.templateMinorVersion.valueBlock.valueDec; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];
      outputArray.push(new asn1js.ObjectIdentifier({
        value: this.templateID
      }));
      if ("templateMajorVersion" in this) outputArray.push(new asn1js.Integer({
        value: this.templateMajorVersion
      }));
      if ("templateMinorVersion" in this) outputArray.push(new asn1js.Integer({
        value: this.templateMinorVersion
      })); //endregion
      //region Construct and return new ASN.1 schema for this object

      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {
        extnID: this.templateID
      };
      if ("templateMajorVersion" in this) object.templateMajorVersion = this.templateMajorVersion;
      if ("templateMinorVersion" in this) object.templateMinorVersion = this.templateMinorVersion;
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "templateID":
          return "";

        case "templateMajorVersion":
        case "templateMinorVersion":
          return 0;

        default:
          throw new Error("Invalid member name for CertificateTemplate class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * CertificateTemplateOID ::= SEQUENCE {
        *    templateID              OBJECT IDENTIFIER,
        *    templateMajorVersion    INTEGER (0..4294967295) OPTIONAL,
        *    templateMinorVersion    INTEGER (0..4294967295) OPTIONAL
        * }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [templateID]
       * @property {string} [templateMajorVersion]
       * @property {string} [templateMinorVersion]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.templateID || ""
        }), new asn1js.Integer({
          name: names.templateMajorVersion || "",
          optional: true
        }), new asn1js.Integer({
          name: names.templateMinorVersion || "",
          optional: true
        })]
      });
    }
  }]);
  return CertificateTemplate;
}(); //**************************************************************************************


exports["default"] = CertificateTemplate;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],34:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _common = require("./common.js");

var _PublicKeyInfo = _interopRequireDefault(require("./PublicKeyInfo.js"));

var _PrivateKeyInfo = _interopRequireDefault(require("./PrivateKeyInfo.js"));

var _AlgorithmIdentifier = _interopRequireDefault(require("./AlgorithmIdentifier.js"));

var _EncryptedContentInfo = _interopRequireDefault(require("./EncryptedContentInfo.js"));

var _RSASSAPSSParams = _interopRequireDefault(require("./RSASSAPSSParams.js"));

var _PBKDF2Params = _interopRequireDefault(require("./PBKDF2Params.js"));

var _PBES2Params = _interopRequireDefault(require("./PBES2Params.js"));

//**************************************************************************************

/**
 * Making MAC key using algorithm described in B.2 of PKCS#12 standard.
 */
function makePKCS12B2Key(cryptoEngine, hashAlgorithm, keyLength, password, salt, iterationCount) {
  //region Initial variables
  var u;
  var v;
  var result = []; //endregion
  //region Get "u" and "v" values

  switch (hashAlgorithm.toUpperCase()) {
    case "SHA-1":
      u = 20; // 160

      v = 64; // 512

      break;

    case "SHA-256":
      u = 32; // 256

      v = 64; // 512

      break;

    case "SHA-384":
      u = 48; // 384

      v = 128; // 1024

      break;

    case "SHA-512":
      u = 64; // 512

      v = 128; // 1024

      break;

    default:
      throw new Error("Unsupported hashing algorithm");
  } //endregion
  //region Main algorithm making key
  //region Transform password to UTF-8 like string


  var passwordViewInitial = new Uint8Array(password);
  var passwordTransformed = new ArrayBuffer(password.byteLength * 2 + 2);
  var passwordTransformedView = new Uint8Array(passwordTransformed);

  for (var i = 0; i < passwordViewInitial.length; i++) {
    passwordTransformedView[i * 2] = 0x00;
    passwordTransformedView[i * 2 + 1] = passwordViewInitial[i];
  }

  passwordTransformedView[passwordTransformedView.length - 2] = 0x00;
  passwordTransformedView[passwordTransformedView.length - 1] = 0x00;
  password = passwordTransformed.slice(0); //endregion
  //region Construct a string D (the "diversifier") by concatenating v/8 copies of ID

  var D = new ArrayBuffer(v);
  var dView = new Uint8Array(D);

  for (var _i = 0; _i < D.byteLength; _i++) {
    dView[_i] = 3;
  } // The ID value equal to "3" for MACing (see B.3 of standard)
  //endregion
  //region Concatenate copies of the salt together to create a string S of length v * ceil(s / v) bytes (the final copy of the salt may be trunacted to create S)


  var saltLength = salt.byteLength;
  var sLen = v * Math.ceil(saltLength / v);
  var S = new ArrayBuffer(sLen);
  var sView = new Uint8Array(S);
  var saltView = new Uint8Array(salt);

  for (var _i2 = 0; _i2 < sLen; _i2++) {
    sView[_i2] = saltView[_i2 % saltLength];
  } //endregion
  //region Concatenate copies of the password together to create a string P of length v * ceil(p / v) bytes (the final copy of the password may be truncated to create P)


  var passwordLength = password.byteLength;
  var pLen = v * Math.ceil(passwordLength / v);
  var P = new ArrayBuffer(pLen);
  var pView = new Uint8Array(P);
  var passwordView = new Uint8Array(password);

  for (var _i3 = 0; _i3 < pLen; _i3++) {
    pView[_i3] = passwordView[_i3 % passwordLength];
  } //endregion
  //region Set I=S||P to be the concatenation of S and P


  var sPlusPLength = S.byteLength + P.byteLength;
  var I = new ArrayBuffer(sPlusPLength);
  var iView = new Uint8Array(I);
  iView.set(sView);
  iView.set(pView, sView.length); //endregion
  //region Set c=ceil(n / u)

  var c = Math.ceil((keyLength >> 3) / u); //endregion
  //region Initial variables

  var internalSequence = Promise.resolve(I); //endregion
  //region For i=1, 2, ..., c, do the following:

  for (var _i4 = 0; _i4 <= c; _i4++) {
    internalSequence = internalSequence.then(function (_I) {
      //region Create contecanetion of D and I
      var dAndI = new ArrayBuffer(D.byteLength + _I.byteLength);
      var dAndIView = new Uint8Array(dAndI);
      dAndIView.set(dView);
      dAndIView.set(iView, dView.length); //endregion

      return dAndI;
    }); //region Make "iterationCount" rounds of hashing

    for (var j = 0; j < iterationCount; j++) {
      internalSequence = internalSequence.then(function (roundBuffer) {
        return cryptoEngine.digest({
          name: hashAlgorithm
        }, new Uint8Array(roundBuffer));
      });
    } //endregion


    internalSequence = internalSequence.then(function (roundBuffer) {
      //region Concatenate copies of Ai to create a string B of length v bits (the final copy of Ai may be truncated to create B)
      var B = new ArrayBuffer(v);
      var bView = new Uint8Array(B);

      for (var _j = 0; _j < B.byteLength; _j++) {
        bView[_j] = roundBuffer[_j % roundBuffer.length];
      } //endregion
      //region Make new I value


      var k = Math.ceil(saltLength / v) + Math.ceil(passwordLength / v);
      var iRound = [];
      var sliceStart = 0;
      var sliceLength = v;

      for (var _j2 = 0; _j2 < k; _j2++) {
        var chunk = Array.from(new Uint8Array(I.slice(sliceStart, sliceStart + sliceLength)));
        sliceStart += v;
        if (sliceStart + v > I.byteLength) sliceLength = I.byteLength - sliceStart;
        var x = 0x1ff;

        for (var l = B.byteLength - 1; l >= 0; l--) {
          x >>= 8;
          x += bView[l] + chunk[l];
          chunk[l] = x & 0xff;
        }

        iRound.push.apply(iRound, (0, _toConsumableArray2["default"])(chunk));
      }

      I = new ArrayBuffer(iRound.length);
      iView = new Uint8Array(I);
      iView.set(iRound); //endregion

      result.push.apply(result, (0, _toConsumableArray2["default"])(new Uint8Array(roundBuffer)));
      return I;
    });
  } //endregion
  //region Initialize final key


  internalSequence = internalSequence.then(function () {
    var resultBuffer = new ArrayBuffer(keyLength >> 3);
    var resultView = new Uint8Array(resultBuffer);
    resultView.set(new Uint8Array(result).slice(0, keyLength >> 3));
    return resultBuffer;
  }); //endregion
  //endregion

  return internalSequence;
} //**************************************************************************************

/**
 * Default cryptographic engine for Web Cryptography API
 */


var CryptoEngine =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for CryptoEngine class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function CryptoEngine() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CryptoEngine);
    //region Internal properties of the object

    /**
     * @type {Object}
     * @desc Usually here we are expecting "window.crypto" or an equivalent from custom "crypto engine"
     */
    this.crypto = (0, _pvutils.getParametersValue)(parameters, "crypto", {});
    /**
     * @type {Object}
     * @desc Usually here we are expecting "window.crypto.subtle" or an equivalent from custom "crypto engine"
     */

    this.subtle = (0, _pvutils.getParametersValue)(parameters, "subtle", {});
    /**
     * @type {string}
     * @desc Name of the "crypto engine"
     */

    this.name = (0, _pvutils.getParametersValue)(parameters, "name", ""); //endregion
  } //**********************************************************************************

  /**
   * Import WebCrypto keys from different formats
   * @param {string} format
   * @param {ArrayBuffer|Uint8Array} keyData
   * @param {Object} algorithm
   * @param {boolean} extractable
   * @param {Array} keyUsages
   * @returns {Promise}
   */


  (0, _createClass2["default"])(CryptoEngine, [{
    key: "importKey",
    value: function importKey(format, keyData, algorithm, extractable, keyUsages) {
      var _this = this;

      //region Initial variables
      var jwk = {}; //endregion
      //region Change "keyData" type if needed

      if (keyData instanceof Uint8Array) keyData = keyData.buffer; //endregion

      switch (format.toLowerCase()) {
        case "raw":
          return this.subtle.importKey("raw", keyData, algorithm, extractable, keyUsages);

        case "spki":
          {
            var asn1 = asn1js.fromBER(keyData);
            if (asn1.offset === -1) return Promise.reject("Incorrect keyData");
            var publicKeyInfo = new _PublicKeyInfo["default"]();

            try {
              publicKeyInfo.fromSchema(asn1.result);
            } catch (ex) {
              return Promise.reject("Incorrect keyData");
            } // noinspection FallThroughInSwitchStatementJS


            switch (algorithm.name.toUpperCase()) {
              case "RSA-PSS":
                {
                  //region Get information about used hash function
                  switch (algorithm.hash.name.toUpperCase()) {
                    case "SHA-1":
                      jwk.alg = "PS1";
                      break;

                    case "SHA-256":
                      jwk.alg = "PS256";
                      break;

                    case "SHA-384":
                      jwk.alg = "PS384";
                      break;

                    case "SHA-512":
                      jwk.alg = "PS512";
                      break;

                    default:
                      return Promise.reject("Incorrect hash algorithm: ".concat(algorithm.hash.name.toUpperCase()));
                  } //endregion

                }
              // break omitted

              case "RSASSA-PKCS1-V1_5":
                {
                  keyUsages = ["verify"]; // Override existing keyUsages value since the key is a public key

                  jwk.kty = "RSA";
                  jwk.ext = extractable;
                  jwk.key_ops = keyUsages;
                  if (publicKeyInfo.algorithm.algorithmId !== "1.2.840.113549.1.1.1") return Promise.reject("Incorrect public key algorithm: ".concat(publicKeyInfo.algorithm.algorithmId)); //region Get information about used hash function

                  if ("alg" in jwk === false) {
                    switch (algorithm.hash.name.toUpperCase()) {
                      case "SHA-1":
                        jwk.alg = "RS1";
                        break;

                      case "SHA-256":
                        jwk.alg = "RS256";
                        break;

                      case "SHA-384":
                        jwk.alg = "RS384";
                        break;

                      case "SHA-512":
                        jwk.alg = "RS512";
                        break;

                      default:
                        return Promise.reject("Incorrect public key algorithm: ".concat(publicKeyInfo.algorithm.algorithmId));
                    }
                  } //endregion
                  //region Create RSA Public Key elements


                  var publicKeyJSON = publicKeyInfo.toJSON();

                  for (var _i5 = 0, _Object$keys = Object.keys(publicKeyJSON); _i5 < _Object$keys.length; _i5++) {
                    var key = _Object$keys[_i5];
                    jwk[key] = publicKeyJSON[key];
                  } //endregion

                }
                break;

              case "ECDSA":
                keyUsages = ["verify"];
              // Override existing keyUsages value since the key is a public key
              // break omitted

              case "ECDH":
                {
                  //region Initial variables
                  jwk = {
                    kty: "EC",
                    ext: extractable,
                    key_ops: keyUsages
                  }; //endregion
                  //region Get information about algorithm

                  if (publicKeyInfo.algorithm.algorithmId !== "1.2.840.10045.2.1") return Promise.reject("Incorrect public key algorithm: ".concat(publicKeyInfo.algorithm.algorithmId)); //endregion
                  //region Create ECDSA Public Key elements

                  var _publicKeyJSON = publicKeyInfo.toJSON();

                  for (var _i6 = 0, _Object$keys2 = Object.keys(_publicKeyJSON); _i6 < _Object$keys2.length; _i6++) {
                    var _key = _Object$keys2[_i6];
                    jwk[_key] = _publicKeyJSON[_key];
                  } //endregion

                }
                break;

              case "RSA-OAEP":
                {
                  jwk.kty = "RSA";
                  jwk.ext = extractable;
                  jwk.key_ops = keyUsages;
                  if (this.name.toLowerCase() === "safari") jwk.alg = "RSA-OAEP";else {
                    switch (algorithm.hash.name.toUpperCase()) {
                      case "SHA-1":
                        jwk.alg = "RSA-OAEP";
                        break;

                      case "SHA-256":
                        jwk.alg = "RSA-OAEP-256";
                        break;

                      case "SHA-384":
                        jwk.alg = "RSA-OAEP-384";
                        break;

                      case "SHA-512":
                        jwk.alg = "RSA-OAEP-512";
                        break;

                      default:
                        return Promise.reject("Incorrect public key algorithm: ".concat(publicKeyInfo.algorithm.algorithmId));
                    }
                  } //region Create ECDSA Public Key elements

                  var _publicKeyJSON2 = publicKeyInfo.toJSON();

                  for (var _i7 = 0, _Object$keys3 = Object.keys(_publicKeyJSON2); _i7 < _Object$keys3.length; _i7++) {
                    var _key2 = _Object$keys3[_i7];
                    jwk[_key2] = _publicKeyJSON2[_key2];
                  } //endregion

                }
                break;

              default:
                return Promise.reject("Incorrect algorithm name: ".concat(algorithm.name.toUpperCase()));
            }
          }
          break;

        case "pkcs8":
          {
            var privateKeyInfo = new _PrivateKeyInfo["default"](); //region Parse "PrivateKeyInfo" object

            var _asn = asn1js.fromBER(keyData);

            if (_asn.offset === -1) return Promise.reject("Incorrect keyData");

            try {
              privateKeyInfo.fromSchema(_asn.result);
            } catch (ex) {
              return Promise.reject("Incorrect keyData");
            }

            if ("parsedKey" in privateKeyInfo === false) return Promise.reject("Incorrect keyData"); //endregion
            // noinspection FallThroughInSwitchStatementJS
            // noinspection FallThroughInSwitchStatementJS

            switch (algorithm.name.toUpperCase()) {
              case "RSA-PSS":
                {
                  //region Get information about used hash function
                  switch (algorithm.hash.name.toUpperCase()) {
                    case "SHA-1":
                      jwk.alg = "PS1";
                      break;

                    case "SHA-256":
                      jwk.alg = "PS256";
                      break;

                    case "SHA-384":
                      jwk.alg = "PS384";
                      break;

                    case "SHA-512":
                      jwk.alg = "PS512";
                      break;

                    default:
                      return Promise.reject("Incorrect hash algorithm: ".concat(algorithm.hash.name.toUpperCase()));
                  } //endregion

                }
              // break omitted

              case "RSASSA-PKCS1-V1_5":
                {
                  keyUsages = ["sign"]; // Override existing keyUsages value since the key is a private key

                  jwk.kty = "RSA";
                  jwk.ext = extractable;
                  jwk.key_ops = keyUsages; //region Get information about used hash function

                  if (privateKeyInfo.privateKeyAlgorithm.algorithmId !== "1.2.840.113549.1.1.1") return Promise.reject("Incorrect private key algorithm: ".concat(privateKeyInfo.privateKeyAlgorithm.algorithmId)); //endregion
                  //region Get information about used hash function

                  if ("alg" in jwk === false) {
                    switch (algorithm.hash.name.toUpperCase()) {
                      case "SHA-1":
                        jwk.alg = "RS1";
                        break;

                      case "SHA-256":
                        jwk.alg = "RS256";
                        break;

                      case "SHA-384":
                        jwk.alg = "RS384";
                        break;

                      case "SHA-512":
                        jwk.alg = "RS512";
                        break;

                      default:
                        return Promise.reject("Incorrect hash algorithm: ".concat(algorithm.hash.name.toUpperCase()));
                    }
                  } //endregion
                  //region Create RSA Private Key elements


                  var privateKeyJSON = privateKeyInfo.toJSON();

                  for (var _i8 = 0, _Object$keys4 = Object.keys(privateKeyJSON); _i8 < _Object$keys4.length; _i8++) {
                    var _key3 = _Object$keys4[_i8];
                    jwk[_key3] = privateKeyJSON[_key3];
                  } //endregion

                }
                break;

              case "ECDSA":
                keyUsages = ["sign"];
              // Override existing keyUsages value since the key is a private key
              // break omitted

              case "ECDH":
                {
                  //region Initial variables
                  jwk = {
                    kty: "EC",
                    ext: extractable,
                    key_ops: keyUsages
                  }; //endregion
                  //region Get information about used hash function

                  if (privateKeyInfo.privateKeyAlgorithm.algorithmId !== "1.2.840.10045.2.1") return Promise.reject("Incorrect algorithm: ".concat(privateKeyInfo.privateKeyAlgorithm.algorithmId)); //endregion
                  //region Create ECDSA Private Key elements

                  var _privateKeyJSON = privateKeyInfo.toJSON();

                  for (var _i9 = 0, _Object$keys5 = Object.keys(_privateKeyJSON); _i9 < _Object$keys5.length; _i9++) {
                    var _key4 = _Object$keys5[_i9];
                    jwk[_key4] = _privateKeyJSON[_key4];
                  } //endregion

                }
                break;

              case "RSA-OAEP":
                {
                  jwk.kty = "RSA";
                  jwk.ext = extractable;
                  jwk.key_ops = keyUsages; //region Get information about used hash function

                  if (this.name.toLowerCase() === "safari") jwk.alg = "RSA-OAEP";else {
                    switch (algorithm.hash.name.toUpperCase()) {
                      case "SHA-1":
                        jwk.alg = "RSA-OAEP";
                        break;

                      case "SHA-256":
                        jwk.alg = "RSA-OAEP-256";
                        break;

                      case "SHA-384":
                        jwk.alg = "RSA-OAEP-384";
                        break;

                      case "SHA-512":
                        jwk.alg = "RSA-OAEP-512";
                        break;

                      default:
                        return Promise.reject("Incorrect hash algorithm: ".concat(algorithm.hash.name.toUpperCase()));
                    }
                  } //endregion
                  //region Create RSA Private Key elements

                  var _privateKeyJSON2 = privateKeyInfo.toJSON();

                  for (var _i10 = 0, _Object$keys6 = Object.keys(_privateKeyJSON2); _i10 < _Object$keys6.length; _i10++) {
                    var _key5 = _Object$keys6[_i10];
                    jwk[_key5] = _privateKeyJSON2[_key5];
                  } //endregion

                }
                break;

              default:
                return Promise.reject("Incorrect algorithm name: ".concat(algorithm.name.toUpperCase()));
            }
          }
          break;

        case "jwk":
          jwk = keyData;
          break;

        default:
          return Promise.reject("Incorrect format: ".concat(format));
      } //region Special case for Safari browser (since its acting not as WebCrypto standard describes)


      if (this.name.toLowerCase() === "safari") {
        // Try to use both ways - import using ArrayBuffer and pure JWK (for Safari Technology Preview)
        return Promise.resolve().then(function () {
          return _this.subtle.importKey("jwk", (0, _pvutils.stringToArrayBuffer)(JSON.stringify(jwk)), algorithm, extractable, keyUsages);
        }).then(function (result) {
          return result;
        }, function () {
          return _this.subtle.importKey("jwk", jwk, algorithm, extractable, keyUsages);
        });
      } //endregion


      return this.subtle.importKey("jwk", jwk, algorithm, extractable, keyUsages);
    } //**********************************************************************************

    /**
     * Export WebCrypto keys to different formats
     * @param {string} format
     * @param {Object} key
     * @returns {Promise}
     */

  }, {
    key: "exportKey",
    value: function exportKey(format, key) {
      var sequence = this.subtle.exportKey("jwk", key); //region Currently Safari returns ArrayBuffer as JWK thus we need an additional transformation

      if (this.name.toLowerCase() === "safari") {
        sequence = sequence.then(function (result) {
          // Some additional checks for Safari Technology Preview
          if (result instanceof ArrayBuffer) return JSON.parse((0, _pvutils.arrayBufferToString)(result));
          return result;
        });
      } //endregion


      switch (format.toLowerCase()) {
        case "raw":
          return this.subtle.exportKey("raw", key);

        case "spki":
          sequence = sequence.then(function (result) {
            var publicKeyInfo = new _PublicKeyInfo["default"]();

            try {
              publicKeyInfo.fromJSON(result);
            } catch (ex) {
              return Promise.reject("Incorrect key data");
            }

            return publicKeyInfo.toSchema().toBER(false);
          });
          break;

        case "pkcs8":
          sequence = sequence.then(function (result) {
            var privateKeyInfo = new _PrivateKeyInfo["default"]();

            try {
              privateKeyInfo.fromJSON(result);
            } catch (ex) {
              return Promise.reject("Incorrect key data");
            }

            return privateKeyInfo.toSchema().toBER(false);
          });
          break;

        case "jwk":
          break;

        default:
          return Promise.reject("Incorrect format: ".concat(format));
      }

      return sequence;
    } //**********************************************************************************

    /**
     * Convert WebCrypto keys between different export formats
     * @param {string} inputFormat
     * @param {string} outputFormat
     * @param {ArrayBuffer|Object} keyData
     * @param {Object} algorithm
     * @param {boolean} extractable
     * @param {Array} keyUsages
     * @returns {Promise}
     */

  }, {
    key: "convert",
    value: function convert(inputFormat, outputFormat, keyData, algorithm, extractable, keyUsages) {
      var _this2 = this;

      switch (inputFormat.toLowerCase()) {
        case "raw":
          switch (outputFormat.toLowerCase()) {
            case "raw":
              return Promise.resolve(keyData);

            case "spki":
              return Promise.resolve().then(function () {
                return _this2.importKey("raw", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("spki", result);
              });

            case "pkcs8":
              return Promise.resolve().then(function () {
                return _this2.importKey("raw", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("pkcs8", result);
              });

            case "jwk":
              return Promise.resolve().then(function () {
                return _this2.importKey("raw", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("jwk", result);
              });

            default:
              return Promise.reject("Incorrect outputFormat: ".concat(outputFormat));
          }

        case "spki":
          switch (outputFormat.toLowerCase()) {
            case "raw":
              return Promise.resolve().then(function () {
                return _this2.importKey("spki", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("raw", result);
              });

            case "spki":
              return Promise.resolve(keyData);

            case "pkcs8":
              return Promise.reject("Impossible to convert between SPKI/PKCS8");

            case "jwk":
              return Promise.resolve().then(function () {
                return _this2.importKey("spki", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("jwk", result);
              });

            default:
              return Promise.reject("Incorrect outputFormat: ".concat(outputFormat));
          }

        case "pkcs8":
          switch (outputFormat.toLowerCase()) {
            case "raw":
              return Promise.resolve().then(function () {
                return _this2.importKey("pkcs8", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("raw", result);
              });

            case "spki":
              return Promise.reject("Impossible to convert between SPKI/PKCS8");

            case "pkcs8":
              return Promise.resolve(keyData);

            case "jwk":
              return Promise.resolve().then(function () {
                return _this2.importKey("pkcs8", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("jwk", result);
              });

            default:
              return Promise.reject("Incorrect outputFormat: ".concat(outputFormat));
          }

        case "jwk":
          switch (outputFormat.toLowerCase()) {
            case "raw":
              return Promise.resolve().then(function () {
                return _this2.importKey("jwk", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("raw", result);
              });

            case "spki":
              return Promise.resolve().then(function () {
                return _this2.importKey("jwk", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("spki", result);
              });

            case "pkcs8":
              return Promise.resolve().then(function () {
                return _this2.importKey("jwk", keyData, algorithm, extractable, keyUsages);
              }).then(function (result) {
                return _this2.exportKey("pkcs8", result);
              });

            case "jwk":
              return Promise.resolve(keyData);

            default:
              return Promise.reject("Incorrect outputFormat: ".concat(outputFormat));
          }

        default:
          return Promise.reject("Incorrect inputFormat: ".concat(inputFormat));
      }
    } //**********************************************************************************

    /**
     * Wrapper for standard function "encrypt"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "encrypt",
    value: function encrypt() {
      var _this$subtle;

      return (_this$subtle = this.subtle).encrypt.apply(_this$subtle, arguments);
    } //**********************************************************************************

    /**
     * Wrapper for standard function "decrypt"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "decrypt",
    value: function decrypt() {
      var _this$subtle2;

      return (_this$subtle2 = this.subtle).decrypt.apply(_this$subtle2, arguments);
    } //**********************************************************************************

    /**
     * Wrapper for standard function "sign"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "sign",
    value: function sign() {
      var _this$subtle3;

      return (_this$subtle3 = this.subtle).sign.apply(_this$subtle3, arguments);
    } //**********************************************************************************

    /**
     * Wrapper for standard function "verify"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "verify",
    value: function verify() {
      var _this$subtle4;

      return (_this$subtle4 = this.subtle).verify.apply(_this$subtle4, arguments);
    } //**********************************************************************************

    /**
     * Wrapper for standard function "digest"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "digest",
    value: function digest() {
      var _this$subtle5;

      return (_this$subtle5 = this.subtle).digest.apply(_this$subtle5, arguments);
    } //**********************************************************************************

    /**
     * Wrapper for standard function "generateKey"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "generateKey",
    value: function generateKey() {
      var _this$subtle6;

      return (_this$subtle6 = this.subtle).generateKey.apply(_this$subtle6, arguments);
    } //**********************************************************************************

    /**
     * Wrapper for standard function "deriveKey"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "deriveKey",
    value: function deriveKey() {
      var _this$subtle7;

      return (_this$subtle7 = this.subtle).deriveKey.apply(_this$subtle7, arguments);
    } //**********************************************************************************

    /**
     * Wrapper for standard function "deriveBits"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "deriveBits",
    value: function deriveBits() {
      var _this$subtle8;

      return (_this$subtle8 = this.subtle).deriveBits.apply(_this$subtle8, arguments);
    } //**********************************************************************************

    /**
     * Wrapper for standard function "wrapKey"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "wrapKey",
    value: function wrapKey() {
      var _this$subtle9;

      return (_this$subtle9 = this.subtle).wrapKey.apply(_this$subtle9, arguments);
    } //**********************************************************************************

    /**
     * Wrapper for standard function "unwrapKey"
     * @param args
     * @returns {Promise}
     */

  }, {
    key: "unwrapKey",
    value: function unwrapKey() {
      var _this$subtle10;

      return (_this$subtle10 = this.subtle).unwrapKey.apply(_this$subtle10, arguments);
    } //**********************************************************************************

    /**
     * Initialize input Uint8Array by random values (with help from current "crypto engine")
     * @param {!Uint8Array} view
     * @returns {*}
     */

  }, {
    key: "getRandomValues",
    value: function getRandomValues(view) {
      if ("getRandomValues" in this.crypto === false) throw new Error("No support for getRandomValues");
      return this.crypto.getRandomValues(view);
    } //**********************************************************************************

    /**
     * Get WebCrypto algorithm by wel-known OID
     * @param {string} oid well-known OID to search for
     * @returns {Object}
     */

  }, {
    key: "getAlgorithmByOID",
    value: function getAlgorithmByOID(oid) {
      switch (oid) {
        case "1.2.840.113549.1.1.1":
        case "1.2.840.113549.1.1.5":
          return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
              name: "SHA-1"
            }
          };

        case "1.2.840.113549.1.1.11":
          return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
              name: "SHA-256"
            }
          };

        case "1.2.840.113549.1.1.12":
          return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
              name: "SHA-384"
            }
          };

        case "1.2.840.113549.1.1.13":
          return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
              name: "SHA-512"
            }
          };

        case "1.2.840.113549.1.1.10":
          return {
            name: "RSA-PSS"
          };

        case "1.2.840.113549.1.1.7":
          return {
            name: "RSA-OAEP"
          };

        case "1.2.840.10045.2.1":
        case "1.2.840.10045.4.1":
          return {
            name: "ECDSA",
            hash: {
              name: "SHA-1"
            }
          };

        case "1.2.840.10045.4.3.2":
          return {
            name: "ECDSA",
            hash: {
              name: "SHA-256"
            }
          };

        case "1.2.840.10045.4.3.3":
          return {
            name: "ECDSA",
            hash: {
              name: "SHA-384"
            }
          };

        case "1.2.840.10045.4.3.4":
          return {
            name: "ECDSA",
            hash: {
              name: "SHA-512"
            }
          };

        case "1.3.133.16.840.63.0.2":
          return {
            name: "ECDH",
            kdf: "SHA-1"
          };

        case "1.3.132.1.11.1":
          return {
            name: "ECDH",
            kdf: "SHA-256"
          };

        case "1.3.132.1.11.2":
          return {
            name: "ECDH",
            kdf: "SHA-384"
          };

        case "1.3.132.1.11.3":
          return {
            name: "ECDH",
            kdf: "SHA-512"
          };

        case "2.16.840.1.101.3.4.1.2":
          return {
            name: "AES-CBC",
            length: 128
          };

        case "2.16.840.1.101.3.4.1.22":
          return {
            name: "AES-CBC",
            length: 192
          };

        case "2.16.840.1.101.3.4.1.42":
          return {
            name: "AES-CBC",
            length: 256
          };

        case "2.16.840.1.101.3.4.1.6":
          return {
            name: "AES-GCM",
            length: 128
          };

        case "2.16.840.1.101.3.4.1.26":
          return {
            name: "AES-GCM",
            length: 192
          };

        case "2.16.840.1.101.3.4.1.46":
          return {
            name: "AES-GCM",
            length: 256
          };

        case "2.16.840.1.101.3.4.1.4":
          return {
            name: "AES-CFB",
            length: 128
          };

        case "2.16.840.1.101.3.4.1.24":
          return {
            name: "AES-CFB",
            length: 192
          };

        case "2.16.840.1.101.3.4.1.44":
          return {
            name: "AES-CFB",
            length: 256
          };

        case "2.16.840.1.101.3.4.1.5":
          return {
            name: "AES-KW",
            length: 128
          };

        case "2.16.840.1.101.3.4.1.25":
          return {
            name: "AES-KW",
            length: 192
          };

        case "2.16.840.1.101.3.4.1.45":
          return {
            name: "AES-KW",
            length: 256
          };

        case "1.2.840.113549.2.7":
          return {
            name: "HMAC",
            hash: {
              name: "SHA-1"
            }
          };

        case "1.2.840.113549.2.9":
          return {
            name: "HMAC",
            hash: {
              name: "SHA-256"
            }
          };

        case "1.2.840.113549.2.10":
          return {
            name: "HMAC",
            hash: {
              name: "SHA-384"
            }
          };

        case "1.2.840.113549.2.11":
          return {
            name: "HMAC",
            hash: {
              name: "SHA-512"
            }
          };

        case "1.2.840.113549.1.9.16.3.5":
          return {
            name: "DH"
          };

        case "1.3.14.3.2.26":
          return {
            name: "SHA-1"
          };

        case "2.16.840.1.101.3.4.2.1":
          return {
            name: "SHA-256"
          };

        case "2.16.840.1.101.3.4.2.2":
          return {
            name: "SHA-384"
          };

        case "2.16.840.1.101.3.4.2.3":
          return {
            name: "SHA-512"
          };

        case "1.2.840.113549.1.5.12":
          return {
            name: "PBKDF2"
          };
        //region Special case - OIDs for ECC curves

        case "1.2.840.10045.3.1.7":
          return {
            name: "P-256"
          };

        case "1.3.132.0.34":
          return {
            name: "P-384"
          };

        case "1.3.132.0.35":
          return {
            name: "P-521"
          };
        //endregion

        default:
      }

      return {};
    } //**********************************************************************************

    /**
     * Get OID for each specific algorithm
     * @param {Object} algorithm
     * @returns {string}
     */

  }, {
    key: "getOIDByAlgorithm",
    value: function getOIDByAlgorithm(algorithm) {
      var result = "";

      switch (algorithm.name.toUpperCase()) {
        case "RSASSA-PKCS1-V1_5":
          switch (algorithm.hash.name.toUpperCase()) {
            case "SHA-1":
              result = "1.2.840.113549.1.1.5";
              break;

            case "SHA-256":
              result = "1.2.840.113549.1.1.11";
              break;

            case "SHA-384":
              result = "1.2.840.113549.1.1.12";
              break;

            case "SHA-512":
              result = "1.2.840.113549.1.1.13";
              break;

            default:
          }

          break;

        case "RSA-PSS":
          result = "1.2.840.113549.1.1.10";
          break;

        case "RSA-OAEP":
          result = "1.2.840.113549.1.1.7";
          break;

        case "ECDSA":
          switch (algorithm.hash.name.toUpperCase()) {
            case "SHA-1":
              result = "1.2.840.10045.4.1";
              break;

            case "SHA-256":
              result = "1.2.840.10045.4.3.2";
              break;

            case "SHA-384":
              result = "1.2.840.10045.4.3.3";
              break;

            case "SHA-512":
              result = "1.2.840.10045.4.3.4";
              break;

            default:
          }

          break;

        case "ECDH":
          switch (algorithm.kdf.toUpperCase()) {
            // Non-standard addition - hash algorithm of KDF function
            case "SHA-1":
              result = "1.3.133.16.840.63.0.2"; // dhSinglePass-stdDH-sha1kdf-scheme

              break;

            case "SHA-256":
              result = "1.3.132.1.11.1"; // dhSinglePass-stdDH-sha256kdf-scheme

              break;

            case "SHA-384":
              result = "1.3.132.1.11.2"; // dhSinglePass-stdDH-sha384kdf-scheme

              break;

            case "SHA-512":
              result = "1.3.132.1.11.3"; // dhSinglePass-stdDH-sha512kdf-scheme

              break;

            default:
          }

          break;

        case "AES-CTR":
          break;

        case "AES-CBC":
          switch (algorithm.length) {
            case 128:
              result = "2.16.840.1.101.3.4.1.2";
              break;

            case 192:
              result = "2.16.840.1.101.3.4.1.22";
              break;

            case 256:
              result = "2.16.840.1.101.3.4.1.42";
              break;

            default:
          }

          break;

        case "AES-CMAC":
          break;

        case "AES-GCM":
          switch (algorithm.length) {
            case 128:
              result = "2.16.840.1.101.3.4.1.6";
              break;

            case 192:
              result = "2.16.840.1.101.3.4.1.26";
              break;

            case 256:
              result = "2.16.840.1.101.3.4.1.46";
              break;

            default:
          }

          break;

        case "AES-CFB":
          switch (algorithm.length) {
            case 128:
              result = "2.16.840.1.101.3.4.1.4";
              break;

            case 192:
              result = "2.16.840.1.101.3.4.1.24";
              break;

            case 256:
              result = "2.16.840.1.101.3.4.1.44";
              break;

            default:
          }

          break;

        case "AES-KW":
          switch (algorithm.length) {
            case 128:
              result = "2.16.840.1.101.3.4.1.5";
              break;

            case 192:
              result = "2.16.840.1.101.3.4.1.25";
              break;

            case 256:
              result = "2.16.840.1.101.3.4.1.45";
              break;

            default:
          }

          break;

        case "HMAC":
          switch (algorithm.hash.name.toUpperCase()) {
            case "SHA-1":
              result = "1.2.840.113549.2.7";
              break;

            case "SHA-256":
              result = "1.2.840.113549.2.9";
              break;

            case "SHA-384":
              result = "1.2.840.113549.2.10";
              break;

            case "SHA-512":
              result = "1.2.840.113549.2.11";
              break;

            default:
          }

          break;

        case "DH":
          result = "1.2.840.113549.1.9.16.3.5";
          break;

        case "SHA-1":
          result = "1.3.14.3.2.26";
          break;

        case "SHA-256":
          result = "2.16.840.1.101.3.4.2.1";
          break;

        case "SHA-384":
          result = "2.16.840.1.101.3.4.2.2";
          break;

        case "SHA-512":
          result = "2.16.840.1.101.3.4.2.3";
          break;

        case "CONCAT":
          break;

        case "HKDF":
          break;

        case "PBKDF2":
          result = "1.2.840.113549.1.5.12";
          break;
        //region Special case - OIDs for ECC curves

        case "P-256":
          result = "1.2.840.10045.3.1.7";
          break;

        case "P-384":
          result = "1.3.132.0.34";
          break;

        case "P-521":
          result = "1.3.132.0.35";
          break;
        //endregion

        default:
      }

      return result;
    } //**********************************************************************************

    /**
     * Get default algorithm parameters for each kind of operation
     * @param {string} algorithmName Algorithm name to get common parameters for
     * @param {string} operation Kind of operation: "sign", "encrypt", "generatekey", "importkey", "exportkey", "verify"
     * @returns {*}
     */

  }, {
    key: "getAlgorithmParameters",
    value: function getAlgorithmParameters(algorithmName, operation) {
      var result = {
        algorithm: {},
        usages: []
      };

      switch (algorithmName.toUpperCase()) {
        case "RSASSA-PKCS1-V1_5":
          switch (operation.toLowerCase()) {
            case "generatekey":
              result = {
                algorithm: {
                  name: "RSASSA-PKCS1-v1_5",
                  modulusLength: 2048,
                  publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                  hash: {
                    name: "SHA-256"
                  }
                },
                usages: ["sign", "verify"]
              };
              break;

            case "verify":
            case "sign":
            case "importkey":
              result = {
                algorithm: {
                  name: "RSASSA-PKCS1-v1_5",
                  hash: {
                    name: "SHA-256"
                  }
                },
                usages: ["verify"] // For importKey("pkcs8") usage must be "sign" only

              };
              break;

            case "exportkey":
            default:
              return {
                algorithm: {
                  name: "RSASSA-PKCS1-v1_5"
                },
                usages: []
              };
          }

          break;

        case "RSA-PSS":
          switch (operation.toLowerCase()) {
            case "sign":
            case "verify":
              result = {
                algorithm: {
                  name: "RSA-PSS",
                  hash: {
                    name: "SHA-1"
                  },
                  saltLength: 20
                },
                usages: ["sign", "verify"]
              };
              break;

            case "generatekey":
              result = {
                algorithm: {
                  name: "RSA-PSS",
                  modulusLength: 2048,
                  publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                  hash: {
                    name: "SHA-1"
                  }
                },
                usages: ["sign", "verify"]
              };
              break;

            case "importkey":
              result = {
                algorithm: {
                  name: "RSA-PSS",
                  hash: {
                    name: "SHA-1"
                  }
                },
                usages: ["verify"] // For importKey("pkcs8") usage must be "sign" only

              };
              break;

            case "exportkey":
            default:
              return {
                algorithm: {
                  name: "RSA-PSS"
                },
                usages: []
              };
          }

          break;

        case "RSA-OAEP":
          switch (operation.toLowerCase()) {
            case "encrypt":
            case "decrypt":
              result = {
                algorithm: {
                  name: "RSA-OAEP"
                },
                usages: ["encrypt", "decrypt"]
              };
              break;

            case "generatekey":
              result = {
                algorithm: {
                  name: "RSA-OAEP",
                  modulusLength: 2048,
                  publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                  hash: {
                    name: "SHA-256"
                  }
                },
                usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
              };
              break;

            case "importkey":
              result = {
                algorithm: {
                  name: "RSA-OAEP",
                  hash: {
                    name: "SHA-256"
                  }
                },
                usages: ["encrypt"] // encrypt for "spki" and decrypt for "pkcs8"

              };
              break;

            case "exportkey":
            default:
              return {
                algorithm: {
                  name: "RSA-OAEP"
                },
                usages: []
              };
          }

          break;

        case "ECDSA":
          switch (operation.toLowerCase()) {
            case "generatekey":
              result = {
                algorithm: {
                  name: "ECDSA",
                  namedCurve: "P-256"
                },
                usages: ["sign", "verify"]
              };
              break;

            case "importkey":
              result = {
                algorithm: {
                  name: "ECDSA",
                  namedCurve: "P-256"
                },
                usages: ["verify"] // "sign" for "pkcs8"

              };
              break;

            case "verify":
            case "sign":
              result = {
                algorithm: {
                  name: "ECDSA",
                  hash: {
                    name: "SHA-256"
                  }
                },
                usages: ["sign"]
              };
              break;

            default:
              return {
                algorithm: {
                  name: "ECDSA"
                },
                usages: []
              };
          }

          break;

        case "ECDH":
          switch (operation.toLowerCase()) {
            case "exportkey":
            case "importkey":
            case "generatekey":
              result = {
                algorithm: {
                  name: "ECDH",
                  namedCurve: "P-256"
                },
                usages: ["deriveKey", "deriveBits"]
              };
              break;

            case "derivekey":
            case "derivebits":
              result = {
                algorithm: {
                  name: "ECDH",
                  namedCurve: "P-256",
                  "public": [] // Must be a "publicKey"

                },
                usages: ["encrypt", "decrypt"]
              };
              break;

            default:
              return {
                algorithm: {
                  name: "ECDH"
                },
                usages: []
              };
          }

          break;

        case "AES-CTR":
          switch (operation.toLowerCase()) {
            case "importkey":
            case "exportkey":
            case "generatekey":
              result = {
                algorithm: {
                  name: "AES-CTR",
                  length: 256
                },
                usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
              };
              break;

            case "decrypt":
            case "encrypt":
              result = {
                algorithm: {
                  name: "AES-CTR",
                  counter: new Uint8Array(16),
                  length: 10
                },
                usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
              };
              break;

            default:
              return {
                algorithm: {
                  name: "AES-CTR"
                },
                usages: []
              };
          }

          break;

        case "AES-CBC":
          switch (operation.toLowerCase()) {
            case "importkey":
            case "exportkey":
            case "generatekey":
              result = {
                algorithm: {
                  name: "AES-CBC",
                  length: 256
                },
                usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
              };
              break;

            case "decrypt":
            case "encrypt":
              result = {
                algorithm: {
                  name: "AES-CBC",
                  iv: this.getRandomValues(new Uint8Array(16)) // For "decrypt" the value should be replaced with value got on "encrypt" step

                },
                usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
              };
              break;

            default:
              return {
                algorithm: {
                  name: "AES-CBC"
                },
                usages: []
              };
          }

          break;

        case "AES-GCM":
          switch (operation.toLowerCase()) {
            case "importkey":
            case "exportkey":
            case "generatekey":
              result = {
                algorithm: {
                  name: "AES-GCM",
                  length: 256
                },
                usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
              };
              break;

            case "decrypt":
            case "encrypt":
              result = {
                algorithm: {
                  name: "AES-GCM",
                  iv: this.getRandomValues(new Uint8Array(16)) // For "decrypt" the value should be replaced with value got on "encrypt" step

                },
                usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
              };
              break;

            default:
              return {
                algorithm: {
                  name: "AES-GCM"
                },
                usages: []
              };
          }

          break;

        case "AES-KW":
          switch (operation.toLowerCase()) {
            case "importkey":
            case "exportkey":
            case "generatekey":
            case "wrapkey":
            case "unwrapkey":
              result = {
                algorithm: {
                  name: "AES-KW",
                  length: 256
                },
                usages: ["wrapKey", "unwrapKey"]
              };
              break;

            default:
              return {
                algorithm: {
                  name: "AES-KW"
                },
                usages: []
              };
          }

          break;

        case "HMAC":
          switch (operation.toLowerCase()) {
            case "sign":
            case "verify":
              result = {
                algorithm: {
                  name: "HMAC"
                },
                usages: ["sign", "verify"]
              };
              break;

            case "importkey":
            case "exportkey":
            case "generatekey":
              result = {
                algorithm: {
                  name: "HMAC",
                  length: 32,
                  hash: {
                    name: "SHA-256"
                  }
                },
                usages: ["sign", "verify"]
              };
              break;

            default:
              return {
                algorithm: {
                  name: "HMAC"
                },
                usages: []
              };
          }

          break;

        case "HKDF":
          switch (operation.toLowerCase()) {
            case "derivekey":
              result = {
                algorithm: {
                  name: "HKDF",
                  hash: "SHA-256",
                  salt: new Uint8Array([]),
                  info: new Uint8Array([])
                },
                usages: ["encrypt", "decrypt"]
              };
              break;

            default:
              return {
                algorithm: {
                  name: "HKDF"
                },
                usages: []
              };
          }

          break;

        case "PBKDF2":
          switch (operation.toLowerCase()) {
            case "derivekey":
              result = {
                algorithm: {
                  name: "PBKDF2",
                  hash: {
                    name: "SHA-256"
                  },
                  salt: new Uint8Array([]),
                  iterations: 10000
                },
                usages: ["encrypt", "decrypt"]
              };
              break;

            default:
              return {
                algorithm: {
                  name: "PBKDF2"
                },
                usages: []
              };
          }

          break;

        default:
      }

      return result;
    } //**********************************************************************************

    /**
     * Getting hash algorithm by signature algorithm
     * @param {AlgorithmIdentifier} signatureAlgorithm Signature algorithm
     * @returns {string}
     */

  }, {
    key: "getHashAlgorithm",
    value: function getHashAlgorithm(signatureAlgorithm) {
      var result = "";

      switch (signatureAlgorithm.algorithmId) {
        case "1.2.840.10045.4.1": // ecdsa-with-SHA1

        case "1.2.840.113549.1.1.5":
          result = "SHA-1";
          break;

        case "1.2.840.10045.4.3.2": // ecdsa-with-SHA256

        case "1.2.840.113549.1.1.11":
          result = "SHA-256";
          break;

        case "1.2.840.10045.4.3.3": // ecdsa-with-SHA384

        case "1.2.840.113549.1.1.12":
          result = "SHA-384";
          break;

        case "1.2.840.10045.4.3.4": // ecdsa-with-SHA512

        case "1.2.840.113549.1.1.13":
          result = "SHA-512";
          break;

        case "1.2.840.113549.1.1.10":
          // RSA-PSS
          {
            try {
              var params = new _RSASSAPSSParams["default"]({
                schema: signatureAlgorithm.algorithmParams
              });

              if ("hashAlgorithm" in params) {
                var algorithm = this.getAlgorithmByOID(params.hashAlgorithm.algorithmId);
                if ("name" in algorithm === false) return "";
                result = algorithm.name;
              } else result = "SHA-1";
            } catch (ex) {}
          }
          break;

        default:
      }

      return result;
    } //**********************************************************************************

    /**
     * Specialized function encrypting "EncryptedContentInfo" object using parameters
     * @param {Object} parameters
     * @returns {Promise}
     */

  }, {
    key: "encryptEncryptedContentInfo",
    value: function encryptEncryptedContentInfo(parameters) {
      var _this3 = this;

      //region Check for input parameters
      if (parameters instanceof Object === false) return Promise.reject("Parameters must have type \"Object\"");
      if ("password" in parameters === false) return Promise.reject("Absent mandatory parameter \"password\"");
      if ("contentEncryptionAlgorithm" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentEncryptionAlgorithm\"");
      if ("hmacHashAlgorithm" in parameters === false) return Promise.reject("Absent mandatory parameter \"hmacHashAlgorithm\"");
      if ("iterationCount" in parameters === false) return Promise.reject("Absent mandatory parameter \"iterationCount\"");
      if ("contentToEncrypt" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentToEncrypt\"");
      if ("contentType" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentType\"");
      var contentEncryptionOID = this.getOIDByAlgorithm(parameters.contentEncryptionAlgorithm);
      if (contentEncryptionOID === "") return Promise.reject("Wrong \"contentEncryptionAlgorithm\" value");
      var pbkdf2OID = this.getOIDByAlgorithm({
        name: "PBKDF2"
      });
      if (pbkdf2OID === "") return Promise.reject("Can not find OID for PBKDF2");
      var hmacOID = this.getOIDByAlgorithm({
        name: "HMAC",
        hash: {
          name: parameters.hmacHashAlgorithm
        }
      });
      if (hmacOID === "") return Promise.reject("Incorrect value for \"hmacHashAlgorithm\": ".concat(parameters.hmacHashAlgorithm)); //endregion
      //region Initial variables

      var sequence = Promise.resolve();
      var ivBuffer = new ArrayBuffer(16); // For AES we need IV 16 bytes long

      var ivView = new Uint8Array(ivBuffer);
      this.getRandomValues(ivView);
      var saltBuffer = new ArrayBuffer(64);
      var saltView = new Uint8Array(saltBuffer);
      this.getRandomValues(saltView);
      var contentView = new Uint8Array(parameters.contentToEncrypt);
      var pbkdf2Params = new _PBKDF2Params["default"]({
        salt: new asn1js.OctetString({
          valueHex: saltBuffer
        }),
        iterationCount: parameters.iterationCount,
        prf: new _AlgorithmIdentifier["default"]({
          algorithmId: hmacOID,
          algorithmParams: new asn1js.Null()
        })
      }); //endregion
      //region Derive PBKDF2 key from "password" buffer

      sequence = sequence.then(function () {
        var passwordView = new Uint8Array(parameters.password);
        return _this3.importKey("raw", passwordView, "PBKDF2", false, ["deriveKey"]);
      }, function (error) {
        return Promise.reject(error);
      }); //endregion
      //region Derive key for "contentEncryptionAlgorithm"

      sequence = sequence.then(function (result) {
        return _this3.deriveKey({
          name: "PBKDF2",
          hash: {
            name: parameters.hmacHashAlgorithm
          },
          salt: saltView,
          iterations: parameters.iterationCount
        }, result, parameters.contentEncryptionAlgorithm, false, ["encrypt"]);
      }, function (error) {
        return Promise.reject(error);
      }); //endregion
      //region Encrypt content

      sequence = sequence.then(function (result) {
        return _this3.encrypt({
          name: parameters.contentEncryptionAlgorithm.name,
          iv: ivView
        }, result, contentView);
      }, function (error) {
        return Promise.reject(error);
      }); //endregion
      //region Store all parameters in EncryptedData object

      sequence = sequence.then(function (result) {
        var pbes2Parameters = new _PBES2Params["default"]({
          keyDerivationFunc: new _AlgorithmIdentifier["default"]({
            algorithmId: pbkdf2OID,
            algorithmParams: pbkdf2Params.toSchema()
          }),
          encryptionScheme: new _AlgorithmIdentifier["default"]({
            algorithmId: contentEncryptionOID,
            algorithmParams: new asn1js.OctetString({
              valueHex: ivBuffer
            })
          })
        });
        return new _EncryptedContentInfo["default"]({
          contentType: parameters.contentType,
          contentEncryptionAlgorithm: new _AlgorithmIdentifier["default"]({
            algorithmId: "1.2.840.113549.1.5.13",
            // pkcs5PBES2
            algorithmParams: pbes2Parameters.toSchema()
          }),
          encryptedContent: new asn1js.OctetString({
            valueHex: result
          })
        });
      }, function (error) {
        return Promise.reject(error);
      }); //endregion

      return sequence;
    } //**********************************************************************************

    /**
     * Decrypt data stored in "EncryptedContentInfo" object using parameters
     * @param parameters
     * @return {Promise}
     */

  }, {
    key: "decryptEncryptedContentInfo",
    value: function decryptEncryptedContentInfo(parameters) {
      var _this4 = this;

      //region Check for input parameters
      if (parameters instanceof Object === false) return Promise.reject("Parameters must have type \"Object\"");
      if ("password" in parameters === false) return Promise.reject("Absent mandatory parameter \"password\"");
      if ("encryptedContentInfo" in parameters === false) return Promise.reject("Absent mandatory parameter \"encryptedContentInfo\"");
      if (parameters.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId !== "1.2.840.113549.1.5.13") // pkcs5PBES2
        return Promise.reject("Unknown \"contentEncryptionAlgorithm\": ".concat(parameters.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId)); //endregion
      //region Initial variables

      var sequence = Promise.resolve();
      var pbes2Parameters;

      try {
        pbes2Parameters = new _PBES2Params["default"]({
          schema: parameters.encryptedContentInfo.contentEncryptionAlgorithm.algorithmParams
        });
      } catch (ex) {
        return Promise.reject("Incorrectly encoded \"pbes2Parameters\"");
      }

      var pbkdf2Params;

      try {
        pbkdf2Params = new _PBKDF2Params["default"]({
          schema: pbes2Parameters.keyDerivationFunc.algorithmParams
        });
      } catch (ex) {
        return Promise.reject("Incorrectly encoded \"pbkdf2Params\"");
      }

      var contentEncryptionAlgorithm = this.getAlgorithmByOID(pbes2Parameters.encryptionScheme.algorithmId);
      if ("name" in contentEncryptionAlgorithm === false) return Promise.reject("Incorrect OID for \"contentEncryptionAlgorithm\": ".concat(pbes2Parameters.encryptionScheme.algorithmId));
      var ivBuffer = pbes2Parameters.encryptionScheme.algorithmParams.valueBlock.valueHex;
      var ivView = new Uint8Array(ivBuffer);
      var saltBuffer = pbkdf2Params.salt.valueBlock.valueHex;
      var saltView = new Uint8Array(saltBuffer);
      var iterationCount = pbkdf2Params.iterationCount;
      var hmacHashAlgorithm = "SHA-1";

      if ("prf" in pbkdf2Params) {
        var algorithm = this.getAlgorithmByOID(pbkdf2Params.prf.algorithmId);
        if ("name" in algorithm === false) return Promise.reject("Incorrect OID for HMAC hash algorithm");
        hmacHashAlgorithm = algorithm.hash.name;
      } //endregion
      //region Derive PBKDF2 key from "password" buffer


      sequence = sequence.then(function () {
        return _this4.importKey("raw", parameters.password, "PBKDF2", false, ["deriveKey"]);
      }, function (error) {
        return Promise.reject(error);
      }); //endregion
      //region Derive key for "contentEncryptionAlgorithm"

      sequence = sequence.then(function (result) {
        return _this4.deriveKey({
          name: "PBKDF2",
          hash: {
            name: hmacHashAlgorithm
          },
          salt: saltView,
          iterations: iterationCount
        }, result, contentEncryptionAlgorithm, false, ["decrypt"]);
      }, function (error) {
        return Promise.reject(error);
      }); //endregion
      //region Decrypt internal content using derived key

      sequence = sequence.then(function (result) {
        //region Create correct data block for decryption
        var dataBuffer = new ArrayBuffer(0);
        if (parameters.encryptedContentInfo.encryptedContent.idBlock.isConstructed === false) dataBuffer = parameters.encryptedContentInfo.encryptedContent.valueBlock.valueHex;else {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = parameters.encryptedContentInfo.encryptedContent.valueBlock.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var content = _step.value;
              dataBuffer = (0, _pvutils.utilConcatBuf)(dataBuffer, content.valueBlock.valueHex);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } //endregion

        return _this4.decrypt({
          name: contentEncryptionAlgorithm.name,
          iv: ivView
        }, result, dataBuffer);
      }, function (error) {
        return Promise.reject(error);
      }); //endregion

      return sequence;
    } //**********************************************************************************

    /**
     * Stamping (signing) data using algorithm simular to HMAC
     * @param {Object} parameters
     * @return {Promise.<T>|Promise}
     */

  }, {
    key: "stampDataWithPassword",
    value: function stampDataWithPassword(parameters) {
      var _this5 = this;

      //region Check for input parameters
      if (parameters instanceof Object === false) return Promise.reject("Parameters must have type \"Object\"");
      if ("password" in parameters === false) return Promise.reject("Absent mandatory parameter \"password\"");
      if ("hashAlgorithm" in parameters === false) return Promise.reject("Absent mandatory parameter \"hashAlgorithm\"");
      if ("salt" in parameters === false) return Promise.reject("Absent mandatory parameter \"iterationCount\"");
      if ("iterationCount" in parameters === false) return Promise.reject("Absent mandatory parameter \"salt\"");
      if ("contentToStamp" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentToStamp\""); //endregion
      //region Choose correct length for HMAC key

      var length;

      switch (parameters.hashAlgorithm.toLowerCase()) {
        case "sha-1":
          length = 160;
          break;

        case "sha-256":
          length = 256;
          break;

        case "sha-384":
          length = 384;
          break;

        case "sha-512":
          length = 512;
          break;

        default:
          return Promise.reject("Incorrect \"parameters.hashAlgorithm\" parameter: ".concat(parameters.hashAlgorithm));
      } //endregion
      //region Initial variables


      var sequence = Promise.resolve();
      var hmacAlgorithm = {
        name: "HMAC",
        length: length,
        hash: {
          name: parameters.hashAlgorithm
        }
      }; //endregion
      //region Create PKCS#12 key for integrity checking

      sequence = sequence.then(function () {
        return makePKCS12B2Key(_this5, parameters.hashAlgorithm, length, parameters.password, parameters.salt, parameters.iterationCount);
      }); //endregion
      //region Import HMAC key
      // noinspection JSCheckFunctionSignatures

      sequence = sequence.then(function (result) {
        return _this5.importKey("raw", new Uint8Array(result), hmacAlgorithm, false, ["sign"]);
      }); //endregion
      //region Make signed HMAC value

      sequence = sequence.then(function (result) {
        return _this5.sign(hmacAlgorithm, result, new Uint8Array(parameters.contentToStamp));
      }, function (error) {
        return Promise.reject(error);
      }); //endregion

      return sequence;
    } //**********************************************************************************

  }, {
    key: "verifyDataStampedWithPassword",
    value: function verifyDataStampedWithPassword(parameters) {
      var _this6 = this;

      //region Check for input parameters
      if (parameters instanceof Object === false) return Promise.reject("Parameters must have type \"Object\"");
      if ("password" in parameters === false) return Promise.reject("Absent mandatory parameter \"password\"");
      if ("hashAlgorithm" in parameters === false) return Promise.reject("Absent mandatory parameter \"hashAlgorithm\"");
      if ("salt" in parameters === false) return Promise.reject("Absent mandatory parameter \"iterationCount\"");
      if ("iterationCount" in parameters === false) return Promise.reject("Absent mandatory parameter \"salt\"");
      if ("contentToVerify" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentToVerify\"");
      if ("signatureToVerify" in parameters === false) return Promise.reject("Absent mandatory parameter \"signatureToVerify\""); //endregion
      //region Choose correct length for HMAC key

      var length;

      switch (parameters.hashAlgorithm.toLowerCase()) {
        case "sha-1":
          length = 160;
          break;

        case "sha-256":
          length = 256;
          break;

        case "sha-384":
          length = 384;
          break;

        case "sha-512":
          length = 512;
          break;

        default:
          return Promise.reject("Incorrect \"parameters.hashAlgorithm\" parameter: ".concat(parameters.hashAlgorithm));
      } //endregion
      //region Initial variables


      var sequence = Promise.resolve();
      var hmacAlgorithm = {
        name: "HMAC",
        length: length,
        hash: {
          name: parameters.hashAlgorithm
        }
      }; //endregion
      //region Create PKCS#12 key for integrity checking

      sequence = sequence.then(function () {
        return makePKCS12B2Key(_this6, parameters.hashAlgorithm, length, parameters.password, parameters.salt, parameters.iterationCount);
      }); //endregion
      //region Import HMAC key
      // noinspection JSCheckFunctionSignatures

      sequence = sequence.then(function (result) {
        return _this6.importKey("raw", new Uint8Array(result), hmacAlgorithm, false, ["verify"]);
      }); //endregion
      //region Make signed HMAC value

      sequence = sequence.then(function (result) {
        return _this6.verify(hmacAlgorithm, result, new Uint8Array(parameters.signatureToVerify), new Uint8Array(parameters.contentToVerify));
      }, function (error) {
        return Promise.reject(error);
      }); //endregion

      return sequence;
    } //**********************************************************************************

    /**
     * Get signature parameters by analyzing private key algorithm
     * @param {Object} privateKey The private key user would like to use
     * @param {string} [hashAlgorithm="SHA-1"] Hash algorithm user would like to use
     * @return {Promise.<T>|Promise}
     */

  }, {
    key: "getSignatureParameters",
    value: function getSignatureParameters(privateKey) {
      var hashAlgorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "SHA-1";
      //region Check hashing algorithm
      var oid = this.getOIDByAlgorithm({
        name: hashAlgorithm
      });
      if (oid === "") return Promise.reject("Unsupported hash algorithm: ".concat(hashAlgorithm)); //endregion
      //region Initial variables

      var signatureAlgorithm = new _AlgorithmIdentifier["default"](); //endregion
      //region Get a "default parameters" for current algorithm

      var parameters = this.getAlgorithmParameters(privateKey.algorithm.name, "sign");
      parameters.algorithm.hash.name = hashAlgorithm; //endregion
      //region Fill internal structures base on "privateKey" and "hashAlgorithm"

      switch (privateKey.algorithm.name.toUpperCase()) {
        case "RSASSA-PKCS1-V1_5":
        case "ECDSA":
          signatureAlgorithm.algorithmId = this.getOIDByAlgorithm(parameters.algorithm);
          break;

        case "RSA-PSS":
          {
            //region Set "saltLength" as a length (in octets) of hash function result
            switch (hashAlgorithm.toUpperCase()) {
              case "SHA-256":
                parameters.algorithm.saltLength = 32;
                break;

              case "SHA-384":
                parameters.algorithm.saltLength = 48;
                break;

              case "SHA-512":
                parameters.algorithm.saltLength = 64;
                break;

              default:
            } //endregion
            //region Fill "RSASSA_PSS_params" object


            var paramsObject = {};

            if (hashAlgorithm.toUpperCase() !== "SHA-1") {
              var hashAlgorithmOID = this.getOIDByAlgorithm({
                name: hashAlgorithm
              });
              if (hashAlgorithmOID === "") return Promise.reject("Unsupported hash algorithm: ".concat(hashAlgorithm));
              paramsObject.hashAlgorithm = new _AlgorithmIdentifier["default"]({
                algorithmId: hashAlgorithmOID,
                algorithmParams: new asn1js.Null()
              });
              paramsObject.maskGenAlgorithm = new _AlgorithmIdentifier["default"]({
                algorithmId: "1.2.840.113549.1.1.8",
                // MGF1
                algorithmParams: paramsObject.hashAlgorithm.toSchema()
              });
            }

            if (parameters.algorithm.saltLength !== 20) paramsObject.saltLength = parameters.algorithm.saltLength;
            var pssParameters = new _RSASSAPSSParams["default"](paramsObject); //endregion
            //region Automatically set signature algorithm

            signatureAlgorithm.algorithmId = "1.2.840.113549.1.1.10";
            signatureAlgorithm.algorithmParams = pssParameters.toSchema(); //endregion
          }
          break;

        default:
          return Promise.reject("Unsupported signature algorithm: ".concat(privateKey.algorithm.name));
      } //endregion


      return Promise.resolve().then(function () {
        return {
          signatureAlgorithm: signatureAlgorithm,
          parameters: parameters
        };
      });
    } //**********************************************************************************

    /**
     * Sign data with pre-defined private key
     * @param {ArrayBuffer} data Data to be signed
     * @param {Object} privateKey Private key to use
     * @param {Object} parameters Parameters for used algorithm
     * @return {Promise.<T>|Promise}
     */

  }, {
    key: "signWithPrivateKey",
    value: function signWithPrivateKey(data, privateKey, parameters) {
      return this.sign(parameters.algorithm, privateKey, new Uint8Array(data)).then(function (result) {
        //region Special case for ECDSA algorithm
        if (parameters.algorithm.name === "ECDSA") result = (0, _common.createCMSECDSASignature)(result); //endregion

        return result;
      }, function (error) {
        return Promise.reject("Signing error: ".concat(error));
      });
    } //**********************************************************************************

  }, {
    key: "fillPublicKeyParameters",
    value: function fillPublicKeyParameters(publicKeyInfo, signatureAlgorithm) {
      var parameters = {}; //region Find signer's hashing algorithm

      var shaAlgorithm = this.getHashAlgorithm(signatureAlgorithm);
      if (shaAlgorithm === "") return Promise.reject("Unsupported signature algorithm: ".concat(signatureAlgorithm.algorithmId)); //endregion
      //region Get information about public key algorithm and default parameters for import

      var algorithmId;
      if (signatureAlgorithm.algorithmId === "1.2.840.113549.1.1.10") algorithmId = signatureAlgorithm.algorithmId;else algorithmId = publicKeyInfo.algorithm.algorithmId;
      var algorithmObject = this.getAlgorithmByOID(algorithmId);
      if ("name" in algorithmObject === "") return Promise.reject("Unsupported public key algorithm: ".concat(signatureAlgorithm.algorithmId));
      parameters.algorithm = this.getAlgorithmParameters(algorithmObject.name, "importkey");
      if ("hash" in parameters.algorithm.algorithm) parameters.algorithm.algorithm.hash.name = shaAlgorithm; //region Special case for ECDSA

      if (algorithmObject.name === "ECDSA") {
        //region Get information about named curve
        var algorithmParamsChecked = false;

        if ("algorithmParams" in publicKeyInfo.algorithm === true) {
          if ("idBlock" in publicKeyInfo.algorithm.algorithmParams) {
            if (publicKeyInfo.algorithm.algorithmParams.idBlock.tagClass === 1 && publicKeyInfo.algorithm.algorithmParams.idBlock.tagNumber === 6) algorithmParamsChecked = true;
          }
        }

        if (algorithmParamsChecked === false) return Promise.reject("Incorrect type for ECDSA public key parameters");
        var curveObject = this.getAlgorithmByOID(publicKeyInfo.algorithm.algorithmParams.valueBlock.toString());
        if ("name" in curveObject === false) return Promise.reject("Unsupported named curve algorithm: ".concat(publicKeyInfo.algorithm.algorithmParams.valueBlock.toString())); //endregion

        parameters.algorithm.algorithm.namedCurve = curveObject.name;
      } //endregion
      //endregion


      return parameters;
    } //**********************************************************************************

  }, {
    key: "getPublicKey",
    value: function getPublicKey(publicKeyInfo, signatureAlgorithm) {
      var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (parameters === null) parameters = this.fillPublicKeyParameters(publicKeyInfo, signatureAlgorithm);
      var publicKeyInfoSchema = publicKeyInfo.toSchema();
      var publicKeyInfoBuffer = publicKeyInfoSchema.toBER(false);
      var publicKeyInfoView = new Uint8Array(publicKeyInfoBuffer);
      return this.importKey("spki", publicKeyInfoView, parameters.algorithm.algorithm, true, parameters.algorithm.usages);
    } //**********************************************************************************

  }, {
    key: "verifyWithPublicKey",
    value: function verifyWithPublicKey(data, signature, publicKeyInfo, signatureAlgorithm) {
      var _this7 = this;

      var shaAlgorithm = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      //region Initial variables
      var sequence = Promise.resolve(); //endregion
      //region Find signer's hashing algorithm

      if (shaAlgorithm === null) {
        shaAlgorithm = this.getHashAlgorithm(signatureAlgorithm);
        if (shaAlgorithm === "") return Promise.reject("Unsupported signature algorithm: ".concat(signatureAlgorithm.algorithmId)); //region Import public key

        sequence = sequence.then(function () {
          return _this7.getPublicKey(publicKeyInfo, signatureAlgorithm);
        }); //endregion
      } else {
        var parameters = {}; //region Get information about public key algorithm and default parameters for import

        var algorithmId;
        if (signatureAlgorithm.algorithmId === "1.2.840.113549.1.1.10") algorithmId = signatureAlgorithm.algorithmId;else algorithmId = publicKeyInfo.algorithm.algorithmId;
        var algorithmObject = this.getAlgorithmByOID(algorithmId);
        if ("name" in algorithmObject === "") return Promise.reject("Unsupported public key algorithm: ".concat(signatureAlgorithm.algorithmId));
        parameters.algorithm = this.getAlgorithmParameters(algorithmObject.name, "importkey");
        if ("hash" in parameters.algorithm.algorithm) parameters.algorithm.algorithm.hash.name = shaAlgorithm; //region Special case for ECDSA

        if (algorithmObject.name === "ECDSA") {
          //region Get information about named curve
          var algorithmParamsChecked = false;

          if ("algorithmParams" in publicKeyInfo.algorithm === true) {
            if ("idBlock" in publicKeyInfo.algorithm.algorithmParams) {
              if (publicKeyInfo.algorithm.algorithmParams.idBlock.tagClass === 1 && publicKeyInfo.algorithm.algorithmParams.idBlock.tagNumber === 6) algorithmParamsChecked = true;
            }
          }

          if (algorithmParamsChecked === false) return Promise.reject("Incorrect type for ECDSA public key parameters");
          var curveObject = this.getAlgorithmByOID(publicKeyInfo.algorithm.algorithmParams.valueBlock.toString());
          if ("name" in curveObject === false) return Promise.reject("Unsupported named curve algorithm: ".concat(publicKeyInfo.algorithm.algorithmParams.valueBlock.toString())); //endregion

          parameters.algorithm.algorithm.namedCurve = curveObject.name;
        } //endregion
        //endregion
        //region Import public key


        sequence = sequence.then(function () {
          return _this7.getPublicKey(publicKeyInfo, null, parameters);
        }); //endregion
      } //endregion
      //region Verify signature


      sequence = sequence.then(function (publicKey) {
        //region Get default algorithm parameters for verification
        var algorithm = _this7.getAlgorithmParameters(publicKey.algorithm.name, "verify");

        if ("hash" in algorithm.algorithm) algorithm.algorithm.hash.name = shaAlgorithm; //endregion
        //region Special case for ECDSA signatures

        var signatureValue = signature.valueBlock.valueHex;

        if (publicKey.algorithm.name === "ECDSA") {
          var asn1 = asn1js.fromBER(signatureValue); // noinspection JSCheckFunctionSignatures

          signatureValue = (0, _common.createECDSASignatureFromCMS)(asn1.result);
        } //endregion
        //region Special case for RSA-PSS


        if (publicKey.algorithm.name === "RSA-PSS") {
          var pssParameters;

          try {
            pssParameters = new _RSASSAPSSParams["default"]({
              schema: signatureAlgorithm.algorithmParams
            });
          } catch (ex) {
            return Promise.reject(ex);
          }

          if ("saltLength" in pssParameters) algorithm.algorithm.saltLength = pssParameters.saltLength;else algorithm.algorithm.saltLength = 20;
          var hashAlgo = "SHA-1";

          if ("hashAlgorithm" in pssParameters) {
            var hashAlgorithm = _this7.getAlgorithmByOID(pssParameters.hashAlgorithm.algorithmId);

            if ("name" in hashAlgorithm === false) return Promise.reject("Unrecognized hash algorithm: ".concat(pssParameters.hashAlgorithm.algorithmId));
            hashAlgo = hashAlgorithm.name;
          }

          algorithm.algorithm.hash.name = hashAlgo;
        } //endregion


        return _this7.verify(algorithm.algorithm, publicKey, new Uint8Array(signatureValue), new Uint8Array(data));
      }); //endregion

      return sequence;
    } //**********************************************************************************

  }]);
  return CryptoEngine;
}(); //**************************************************************************************


exports["default"] = CryptoEngine;

},{"./AlgorithmIdentifier.js":24,"./EncryptedContentInfo.js":38,"./PBES2Params.js":49,"./PBKDF2Params.js":50,"./PrivateKeyInfo.js":56,"./PublicKeyInfo.js":58,"./RSASSAPSSParams.js":62,"./common.js":66,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"@babel/runtime/helpers/toConsumableArray":13,"asn1js":16,"pvutils":20}],35:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _GeneralName = _interopRequireDefault(require("./GeneralName.js"));

var _RelativeDistinguishedNames = _interopRequireDefault(require("./RelativeDistinguishedNames.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var DistributionPoint =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for DistributionPoint class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   * @property {Object} [distributionPoint]
   * @property {Object} [reasons]
   * @property {Object} [cRLIssuer]
   */
  function DistributionPoint() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, DistributionPoint);
    //region Internal properties of the object
    if ("distributionPoint" in parameters)
      /**
       * @type {Array.<GeneralName>}
       * @desc distributionPoint
       */
      this.distributionPoint = (0, _pvutils.getParametersValue)(parameters, "distributionPoint", DistributionPoint.defaultValues("distributionPoint"));
    if ("reasons" in parameters)
      /**
       * @type {BitString}
       * @desc values
       */
      this.reasons = (0, _pvutils.getParametersValue)(parameters, "reasons", DistributionPoint.defaultValues("reasons"));
    if ("cRLIssuer" in parameters)
      /**
       * @type {Array.<GeneralName>}
       * @desc cRLIssuer
       */
      this.cRLIssuer = (0, _pvutils.getParametersValue)(parameters, "cRLIssuer", DistributionPoint.defaultValues("cRLIssuer")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(DistributionPoint, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["distributionPoint", "distributionPointNames", "reasons", "cRLIssuer", "cRLIssuerNames"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, DistributionPoint.schema({
        names: {
          distributionPoint: "distributionPoint",
          distributionPointNames: "distributionPointNames",
          reasons: "reasons",
          cRLIssuer: "cRLIssuer",
          cRLIssuerNames: "cRLIssuerNames"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for DistributionPoint"); //endregion
      //region Get internal properties from parsed schema

      if ("distributionPoint" in asn1.result) {
        if (asn1.result.distributionPoint.idBlock.tagNumber === 0) // GENERAL_NAMES variant
          this.distributionPoint = Array.from(asn1.result.distributionPointNames, function (element) {
            return new _GeneralName["default"]({
              schema: element
            });
          });

        if (asn1.result.distributionPoint.idBlock.tagNumber === 1) // RDN variant
          {
            this.distributionPoint = new _RelativeDistinguishedNames["default"]({
              schema: new asn1js.Sequence({
                value: asn1.result.distributionPoint.valueBlock.value
              })
            });
          }
      }

      if ("reasons" in asn1.result) this.reasons = new asn1js.BitString({
        valueHex: asn1.result.reasons.valueBlock.valueHex
      });
      if ("cRLIssuer" in asn1.result) this.cRLIssuer = Array.from(asn1.result.cRLIssuerNames, function (element) {
        return new _GeneralName["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];

      if ("distributionPoint" in this) {
        var internalValue;

        if (this.distributionPoint instanceof Array) {
          internalValue = new asn1js.Constructed({
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: 0 // [0]

            },
            value: Array.from(this.distributionPoint, function (element) {
              return element.toSchema();
            })
          });
        } else {
          internalValue = new asn1js.Constructed({
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: 1 // [1]

            },
            value: [this.distributionPoint.toSchema()]
          });
        }

        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [internalValue]
        }));
      }

      if ("reasons" in this) {
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          valueHex: this.reasons.valueBlock.valueHex
        }));
      }

      if ("cRLIssuer" in this) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 2 // [2]

          },
          value: Array.from(this.cRLIssuer, function (element) {
            return element.toSchema();
          })
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {};

      if ("distributionPoint" in this) {
        if (this.distributionPoint instanceof Array) object.distributionPoint = Array.from(this.distributionPoint, function (element) {
          return element.toJSON();
        });else object.distributionPoint = this.distributionPoint.toJSON();
      }

      if ("reasons" in this) object.reasons = this.reasons.toJSON();
      if ("cRLIssuer" in this) object.cRLIssuer = Array.from(this.cRLIssuer, function (element) {
        return element.toJSON();
      });
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "distributionPoint":
          return [];

        case "reasons":
          return new asn1js.BitString();

        case "cRLIssuer":
          return [];

        default:
          throw new Error("Invalid member name for DistributionPoint class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * DistributionPoint ::= SEQUENCE {
     *    distributionPoint       [0]     DistributionPointName OPTIONAL,
     *    reasons                 [1]     ReasonFlags OPTIONAL,
     *    cRLIssuer               [2]     GeneralNames OPTIONAL }
     *
     * DistributionPointName ::= CHOICE {
     *    fullName                [0]     GeneralNames,
     *    nameRelativeToCRLIssuer [1]     RelativeDistinguishedName }
     *
     * ReasonFlags ::= BIT STRING {
     *    unused                  (0),
     *    keyCompromise           (1),
     *    cACompromise            (2),
     *    affiliationChanged      (3),
     *    superseded              (4),
     *    cessationOfOperation    (5),
     *    certificateHold         (6),
     *    privilegeWithdrawn      (7),
     *    aACompromise            (8) }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [distributionPoint]
       * @property {string} [distributionPointNames]
       * @property {string} [reasons]
       * @property {string} [cRLIssuer]
       * @property {string} [cRLIssuerNames]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [new asn1js.Choice({
            value: [new asn1js.Constructed({
              name: names.distributionPoint || "",
              optional: true,
              idBlock: {
                tagClass: 3,
                // CONTEXT-SPECIFIC
                tagNumber: 0 // [0]

              },
              value: [new asn1js.Repeated({
                name: names.distributionPointNames || "",
                value: _GeneralName["default"].schema()
              })]
            }), new asn1js.Constructed({
              name: names.distributionPoint || "",
              optional: true,
              idBlock: {
                tagClass: 3,
                // CONTEXT-SPECIFIC
                tagNumber: 1 // [1]

              },
              value: _RelativeDistinguishedNames["default"].schema().valueBlock.value
            })]
          })]
        }), new asn1js.Primitive({
          name: names.reasons || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          }
        }), // IMPLICIT bitstring value
        new asn1js.Constructed({
          name: names.cRLIssuer || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 2 // [2]

          },
          value: [new asn1js.Repeated({
            name: names.cRLIssuerNames || "",
            value: _GeneralName["default"].schema()
          })]
        }) // IMPLICIT bitstring value
        ]
      });
    }
  }]);
  return DistributionPoint;
}(); //**************************************************************************************


exports["default"] = DistributionPoint;

},{"./GeneralName.js":42,"./RelativeDistinguishedNames.js":63,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],36:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _ECPublicKey = _interopRequireDefault(require("./ECPublicKey.js"));

//**************************************************************************************

/**
 * Class from RFC5915
 */
var ECPrivateKey =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for ECPrivateKey class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function ECPrivateKey() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, ECPrivateKey);
    //region Internal properties of the object

    /**
     * @type {number}
     * @desc version
     */
    this.version = (0, _pvutils.getParametersValue)(parameters, "version", ECPrivateKey.defaultValues("version"));
    /**
     * @type {OctetString}
     * @desc privateKey
     */

    this.privateKey = (0, _pvutils.getParametersValue)(parameters, "privateKey", ECPrivateKey.defaultValues("privateKey"));
    if ("namedCurve" in parameters)
      /**
       * @type {string}
       * @desc namedCurve
       */
      this.namedCurve = (0, _pvutils.getParametersValue)(parameters, "namedCurve", ECPrivateKey.defaultValues("namedCurve"));
    if ("publicKey" in parameters)
      /**
       * @type {ECPublicKey}
       * @desc publicKey
       */
      this.publicKey = (0, _pvutils.getParametersValue)(parameters, "publicKey", ECPrivateKey.defaultValues("publicKey")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
    //region If input argument array contains "json" for this object

    if ("json" in parameters) this.fromJSON(parameters.json); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(ECPrivateKey, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["version", "privateKey", "namedCurve", "publicKey"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, ECPrivateKey.schema({
        names: {
          version: "version",
          privateKey: "privateKey",
          namedCurve: "namedCurve",
          publicKey: "publicKey"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for ECPrivateKey"); //endregion
      //region Get internal properties from parsed schema

      this.version = asn1.result.version.valueBlock.valueDec;
      this.privateKey = asn1.result.privateKey;
      if ("namedCurve" in asn1.result) this.namedCurve = asn1.result.namedCurve.valueBlock.toString();

      if ("publicKey" in asn1.result) {
        var publicKeyData = {
          schema: asn1.result.publicKey.valueBlock.valueHex
        };
        if ("namedCurve" in this) publicKeyData.namedCurve = this.namedCurve;
        this.publicKey = new _ECPublicKey["default"](publicKeyData);
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      var outputArray = [new asn1js.Integer({
        value: this.version
      }), this.privateKey];

      if ("namedCurve" in this) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [new asn1js.ObjectIdentifier({
            value: this.namedCurve
          })]
        }));
      }

      if ("publicKey" in this) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          value: [new asn1js.BitString({
            valueHex: this.publicKey.toSchema().toBER(false)
          })]
        }));
      }

      return new asn1js.Sequence({
        value: outputArray
      });
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      if ("namedCurve" in this === false || ECPrivateKey.compareWithDefault("namedCurve", this.namedCurve)) throw new Error("Not enough information for making JSON: absent \"namedCurve\" value");
      var crvName = "";

      switch (this.namedCurve) {
        case "1.2.840.10045.3.1.7":
          // P-256
          crvName = "P-256";
          break;

        case "1.3.132.0.34":
          // P-384
          crvName = "P-384";
          break;

        case "1.3.132.0.35":
          // P-521
          crvName = "P-521";
          break;

        default:
      }

      var privateKeyJSON = {
        crv: crvName,
        d: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.privateKey.valueBlock.valueHex), true, true, false)
      };

      if ("publicKey" in this) {
        var publicKeyJSON = this.publicKey.toJSON();
        privateKeyJSON.x = publicKeyJSON.x;
        privateKeyJSON.y = publicKeyJSON.y;
      }

      return privateKeyJSON;
    } //**********************************************************************************

    /**
     * Convert JSON value into current object
     * @param {Object} json
     */

  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      var coodinateLength = 0;

      if ("crv" in json) {
        switch (json.crv.toUpperCase()) {
          case "P-256":
            this.namedCurve = "1.2.840.10045.3.1.7";
            coodinateLength = 32;
            break;

          case "P-384":
            this.namedCurve = "1.3.132.0.34";
            coodinateLength = 48;
            break;

          case "P-521":
            this.namedCurve = "1.3.132.0.35";
            coodinateLength = 66;
            break;

          default:
        }
      } else throw new Error("Absent mandatory parameter \"crv\"");

      if ("d" in json) {
        var convertBuffer = (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.d, true));

        if (convertBuffer.byteLength < coodinateLength) {
          var buffer = new ArrayBuffer(coodinateLength);
          var view = new Uint8Array(buffer);
          var convertBufferView = new Uint8Array(convertBuffer);
          view.set(convertBufferView, 1);
          this.privateKey = new asn1js.OctetString({
            valueHex: buffer
          });
        } else this.privateKey = new asn1js.OctetString({
          valueHex: convertBuffer.slice(0, coodinateLength)
        });
      } else throw new Error("Absent mandatory parameter \"d\"");

      if ("x" in json && "y" in json) this.publicKey = new _ECPublicKey["default"]({
        json: json
      });
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "version":
          return 1;

        case "privateKey":
          return new asn1js.OctetString();

        case "namedCurve":
          return "";

        case "publicKey":
          return new _ECPublicKey["default"]();

        default:
          throw new Error("Invalid member name for ECCPrivateKey class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "version":
          return memberValue === ECPrivateKey.defaultValues(memberName);

        case "privateKey":
          return memberValue.isEqual(ECPrivateKey.defaultValues(memberName));

        case "namedCurve":
          return memberValue === "";

        case "publicKey":
          return _ECPublicKey["default"].compareWithDefault("namedCurve", memberValue.namedCurve) && _ECPublicKey["default"].compareWithDefault("x", memberValue.x) && _ECPublicKey["default"].compareWithDefault("y", memberValue.y);

        default:
          throw new Error("Invalid member name for ECCPrivateKey class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * ECPrivateKey ::= SEQUENCE {
     * version        INTEGER { ecPrivkeyVer1(1) } (ecPrivkeyVer1),
     * privateKey     OCTET STRING,
     * parameters [0] ECParameters {{ NamedCurve }} OPTIONAL,
     * publicKey  [1] BIT STRING OPTIONAL
     * }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [version]
       * @property {string} [privateKey]
       * @property {string} [namedCurve]
       * @property {string} [publicKey]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Integer({
          name: names.version || ""
        }), new asn1js.OctetString({
          name: names.privateKey || ""
        }), new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [new asn1js.ObjectIdentifier({
            name: names.namedCurve || ""
          })]
        }), new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          value: [new asn1js.BitString({
            name: names.publicKey || ""
          })]
        })]
      });
    }
  }]);
  return ECPrivateKey;
}(); //**************************************************************************************


exports["default"] = ECPrivateKey;

},{"./ECPublicKey.js":37,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],37:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC5480
 */
var ECPublicKey =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for ECCPublicKey class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function ECPublicKey() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, ECPublicKey);
    //region Internal properties of the object

    /**
     * @type {ArrayBuffer}
     * @desc type
     */
    this.x = (0, _pvutils.getParametersValue)(parameters, "x", ECPublicKey.defaultValues("x"));
    /**
     * @type {ArrayBuffer}
     * @desc values
     */

    this.y = (0, _pvutils.getParametersValue)(parameters, "y", ECPublicKey.defaultValues("y"));
    /**
     * @type {string}
     * @desc namedCurve
     */

    this.namedCurve = (0, _pvutils.getParametersValue)(parameters, "namedCurve", ECPublicKey.defaultValues("namedCurve")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
    //region If input argument array contains "json" for this object

    if ("json" in parameters) this.fromJSON(parameters.json); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(ECPublicKey, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert ArrayBuffer into current class
     * @param {!ArrayBuffer} schema Special case: schema is an ArrayBuffer
     */
    value: function fromSchema(schema) {
      //region Check the schema is valid
      if (schema instanceof ArrayBuffer === false) throw new Error("Object's schema was not verified against input data for ECPublicKey");
      var view = new Uint8Array(schema);
      if (view[0] !== 0x04) throw new Error("Object's schema was not verified against input data for ECPublicKey"); //endregion
      //region Get internal properties from parsed schema

      var coordinateLength;

      switch (this.namedCurve) {
        case "1.2.840.10045.3.1.7":
          // P-256
          coordinateLength = 32;
          break;

        case "1.3.132.0.34":
          // P-384
          coordinateLength = 48;
          break;

        case "1.3.132.0.35":
          // P-521
          coordinateLength = 66;
          break;

        default:
          throw new Error("Incorrect curve OID: ".concat(this.namedCurve));
      }

      if (schema.byteLength !== coordinateLength * 2 + 1) throw new Error("Object's schema was not verified against input data for ECPublicKey");
      this.x = schema.slice(1, coordinateLength + 1);
      this.y = schema.slice(1 + coordinateLength, coordinateLength * 2 + 1); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      return new asn1js.RawData({
        data: (0, _pvutils.utilConcatBuf)(new Uint8Array([0x04]).buffer, this.x, this.y)
      });
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var crvName = "";

      switch (this.namedCurve) {
        case "1.2.840.10045.3.1.7":
          // P-256
          crvName = "P-256";
          break;

        case "1.3.132.0.34":
          // P-384
          crvName = "P-384";
          break;

        case "1.3.132.0.35":
          // P-521
          crvName = "P-521";
          break;

        default:
      }

      return {
        crv: crvName,
        x: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.x), true, true, false),
        y: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.y), true, true, false)
      };
    } //**********************************************************************************

    /**
     * Convert JSON value into current object
     * @param {Object} json
     */

  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      var coodinateLength = 0;

      if ("crv" in json) {
        switch (json.crv.toUpperCase()) {
          case "P-256":
            this.namedCurve = "1.2.840.10045.3.1.7";
            coodinateLength = 32;
            break;

          case "P-384":
            this.namedCurve = "1.3.132.0.34";
            coodinateLength = 48;
            break;

          case "P-521":
            this.namedCurve = "1.3.132.0.35";
            coodinateLength = 66;
            break;

          default:
        }
      } else throw new Error("Absent mandatory parameter \"crv\"");

      if ("x" in json) {
        var convertBuffer = (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.x, true));

        if (convertBuffer.byteLength < coodinateLength) {
          this.x = new ArrayBuffer(coodinateLength);
          var view = new Uint8Array(this.x);
          var convertBufferView = new Uint8Array(convertBuffer);
          view.set(convertBufferView, 1);
        } else this.x = convertBuffer.slice(0, coodinateLength);
      } else throw new Error("Absent mandatory parameter \"x\"");

      if ("y" in json) {
        var _convertBuffer = (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.y, true));

        if (_convertBuffer.byteLength < coodinateLength) {
          this.y = new ArrayBuffer(coodinateLength);

          var _view = new Uint8Array(this.y);

          var _convertBufferView = new Uint8Array(_convertBuffer);

          _view.set(_convertBufferView, 1);
        } else this.y = _convertBuffer.slice(0, coodinateLength);
      } else throw new Error("Absent mandatory parameter \"y\"");
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "x":
        case "y":
          return new ArrayBuffer(0);

        case "namedCurve":
          return "";

        default:
          throw new Error("Invalid member name for ECCPublicKey class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "x":
        case "y":
          return (0, _pvutils.isEqualBuffer)(memberValue, ECPublicKey.defaultValues(memberName));

        case "namedCurve":
          return memberValue === "";

        default:
          throw new Error("Invalid member name for ECCPublicKey class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new asn1js.RawData();
    }
  }]);
  return ECPublicKey;
}(); //**************************************************************************************


exports["default"] = ECPublicKey;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],38:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _AlgorithmIdentifier = _interopRequireDefault(require("./AlgorithmIdentifier.js"));

//**************************************************************************************

/**
 * Class from RFC5652
 */
var EncryptedContentInfo =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for EncryptedContentInfo class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function EncryptedContentInfo() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, EncryptedContentInfo);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc contentType
     */
    this.contentType = (0, _pvutils.getParametersValue)(parameters, "contentType", EncryptedContentInfo.defaultValues("contentType"));
    /**
     * @type {AlgorithmIdentifier}
     * @desc contentEncryptionAlgorithm
     */

    this.contentEncryptionAlgorithm = (0, _pvutils.getParametersValue)(parameters, "contentEncryptionAlgorithm", EncryptedContentInfo.defaultValues("contentEncryptionAlgorithm"));

    if ("encryptedContent" in parameters) {
      /**
       * @type {OctetString}
       * @desc encryptedContent (!!!) could be contructive or primitive value (!!!)
       */
      this.encryptedContent = parameters.encryptedContent;

      if (this.encryptedContent.idBlock.tagClass === 1 && this.encryptedContent.idBlock.tagNumber === 4) {
        //region Divide OCTETSTRING value down to small pieces
        if (this.encryptedContent.idBlock.isConstructed === false) {
          var constrString = new asn1js.OctetString({
            idBlock: {
              isConstructed: true
            },
            isConstructed: true
          });
          var offset = 0;
          var length = this.encryptedContent.valueBlock.valueHex.byteLength;

          while (length > 0) {
            var pieceView = new Uint8Array(this.encryptedContent.valueBlock.valueHex, offset, offset + 1024 > this.encryptedContent.valueBlock.valueHex.byteLength ? this.encryptedContent.valueBlock.valueHex.byteLength - offset : 1024);

            var _array = new ArrayBuffer(pieceView.length);

            var _view = new Uint8Array(_array);

            for (var i = 0; i < _view.length; i++) {
              _view[i] = pieceView[i];
            }

            constrString.valueBlock.value.push(new asn1js.OctetString({
              valueHex: _array
            }));
            length -= pieceView.length;
            offset += pieceView.length;
          }

          this.encryptedContent = constrString;
        } //endregion

      }
    } //endregion
    //region If input argument array contains "schema" for this object


    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(EncryptedContentInfo, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["contentType", "contentEncryptionAlgorithm", "encryptedContent"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, EncryptedContentInfo.schema({
        names: {
          contentType: "contentType",
          contentEncryptionAlgorithm: {
            names: {
              blockName: "contentEncryptionAlgorithm"
            }
          },
          encryptedContent: "encryptedContent"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for EncryptedContentInfo"); //endregion
      //region Get internal properties from parsed schema

      this.contentType = asn1.result.contentType.valueBlock.toString();
      this.contentEncryptionAlgorithm = new _AlgorithmIdentifier["default"]({
        schema: asn1.result.contentEncryptionAlgorithm
      });

      if ("encryptedContent" in asn1.result) {
        this.encryptedContent = asn1.result.encryptedContent;
        this.encryptedContent.idBlock.tagClass = 1; // UNIVERSAL

        this.encryptedContent.idBlock.tagNumber = 4; // OCTETSTRING (!!!) The value still has instance of "in_window.org.pkijs.asn1.ASN1_CONSTRUCTED / ASN1_PRIMITIVE"
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var sequenceLengthBlock = {
        isIndefiniteForm: false
      };
      var outputArray = [];
      outputArray.push(new asn1js.ObjectIdentifier({
        value: this.contentType
      }));
      outputArray.push(this.contentEncryptionAlgorithm.toSchema());

      if ("encryptedContent" in this) {
        sequenceLengthBlock.isIndefiniteForm = this.encryptedContent.idBlock.isConstructed;
        var encryptedValue = this.encryptedContent;
        encryptedValue.idBlock.tagClass = 3; // CONTEXT-SPECIFIC

        encryptedValue.idBlock.tagNumber = 0; // [0]

        encryptedValue.lenBlock.isIndefiniteForm = this.encryptedContent.idBlock.isConstructed;
        outputArray.push(encryptedValue);
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        lenBlock: sequenceLengthBlock,
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _object = {
        contentType: this.contentType,
        contentEncryptionAlgorithm: this.contentEncryptionAlgorithm.toJSON()
      };
      if ("encryptedContent" in this) _object.encryptedContent = this.encryptedContent.toJSON();
      return _object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "contentType":
          return "";

        case "contentEncryptionAlgorithm":
          return new _AlgorithmIdentifier["default"]();

        case "encryptedContent":
          return new asn1js.OctetString();

        default:
          throw new Error("Invalid member name for EncryptedContentInfo class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "contentType":
          return memberValue === "";

        case "contentEncryptionAlgorithm":
          return memberValue.algorithmId === "" && "algorithmParams" in memberValue === false;

        case "encryptedContent":
          return memberValue.isEqual(EncryptedContentInfo.defaultValues(memberName));

        default:
          throw new Error("Invalid member name for EncryptedContentInfo class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * EncryptedContentInfo ::= SEQUENCE {
     *    contentType ContentType,
     *    contentEncryptionAlgorithm ContentEncryptionAlgorithmIdentifier,
     *    encryptedContent [0] IMPLICIT EncryptedContent OPTIONAL }
     *
     * Comment: Strange, but modern crypto engines create "encryptedContent" as "[0] EXPLICIT EncryptedContent"
     *
     * EncryptedContent ::= OCTET STRING
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [contentType]
       * @property {string} [contentEncryptionAlgorithm]
       * @property {string} [encryptedContent]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.contentType || ""
        }), _AlgorithmIdentifier["default"].schema(names.contentEncryptionAlgorithm || {}), // The CHOICE we need because "EncryptedContent" could have either "constructive"
        // or "primitive" form of encoding and we need to handle both variants
        new asn1js.Choice({
          value: [new asn1js.Constructed({
            name: names.encryptedContent || "",
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: 0 // [0]

            },
            value: [new asn1js.Repeated({
              value: new asn1js.OctetString()
            })]
          }), new asn1js.Primitive({
            name: names.encryptedContent || "",
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: 0 // [0]

            }
          })]
        })]
      });
    }
  }]);
  return EncryptedContentInfo;
}(); //**************************************************************************************


exports["default"] = EncryptedContentInfo;

},{"./AlgorithmIdentifier.js":24,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],39:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC5280
 */
var ExtKeyUsage =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for ExtKeyUsage class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function ExtKeyUsage() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, ExtKeyUsage);
    //region Internal properties of the object

    /**
     * @type {Array.<string>}
     * @desc keyPurposes
     */
    this.keyPurposes = (0, _pvutils.getParametersValue)(parameters, "keyPurposes", ExtKeyUsage.defaultValues("keyPurposes")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(ExtKeyUsage, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["keyPurposes"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, ExtKeyUsage.schema({
        names: {
          keyPurposes: "keyPurposes"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for ExtKeyUsage"); //endregion
      //region Get internal properties from parsed schema

      this.keyPurposes = Array.from(asn1.result.keyPurposes, function (element) {
        return element.valueBlock.toString();
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.keyPurposes, function (element) {
          return new asn1js.ObjectIdentifier({
            value: element
          });
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        keyPurposes: Array.from(this.keyPurposes)
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "keyPurposes":
          return [];

        default:
          throw new Error("Invalid member name for ExtKeyUsage class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * ExtKeyUsage ::= SEQUENCE SIZE (1..MAX) OF KeyPurposeId
     *
     * KeyPurposeId ::= OBJECT IDENTIFIER
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [keyPurposes]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.keyPurposes || "",
          value: new asn1js.ObjectIdentifier()
        })]
      });
    }
  }]);
  return ExtKeyUsage;
}(); //**************************************************************************************


exports["default"] = ExtKeyUsage;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],40:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _SubjectDirectoryAttributes = _interopRequireDefault(require("./SubjectDirectoryAttributes.js"));

var _PrivateKeyUsagePeriod = _interopRequireDefault(require("./PrivateKeyUsagePeriod.js"));

var _AltName = _interopRequireDefault(require("./AltName.js"));

var _BasicConstraints = _interopRequireDefault(require("./BasicConstraints.js"));

var _IssuingDistributionPoint = _interopRequireDefault(require("./IssuingDistributionPoint.js"));

var _GeneralNames = _interopRequireDefault(require("./GeneralNames.js"));

var _NameConstraints = _interopRequireDefault(require("./NameConstraints.js"));

var _CRLDistributionPoints = _interopRequireDefault(require("./CRLDistributionPoints.js"));

var _CertificatePolicies = _interopRequireDefault(require("./CertificatePolicies.js"));

var _PolicyMappings = _interopRequireDefault(require("./PolicyMappings.js"));

var _AuthorityKeyIdentifier = _interopRequireDefault(require("./AuthorityKeyIdentifier.js"));

var _PolicyConstraints = _interopRequireDefault(require("./PolicyConstraints.js"));

var _ExtKeyUsage = _interopRequireDefault(require("./ExtKeyUsage.js"));

var _InfoAccess = _interopRequireDefault(require("./InfoAccess.js"));

var _SignedCertificateTimestampList = _interopRequireDefault(require("./SignedCertificateTimestampList.js"));

var _CertificateTemplate = _interopRequireDefault(require("./CertificateTemplate.js"));

var _CAVersion = _interopRequireDefault(require("./CAVersion.js"));

var _QCStatements = _interopRequireDefault(require("./QCStatements.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var Extension =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for Extension class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function Extension() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Extension);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc extnID
     */
    this.extnID = (0, _pvutils.getParametersValue)(parameters, "extnID", Extension.defaultValues("extnID"));
    /**
     * @type {boolean}
     * @desc critical
     */

    this.critical = (0, _pvutils.getParametersValue)(parameters, "critical", Extension.defaultValues("critical"));
    /**
     * @type {OctetString}
     * @desc extnValue
     */

    if ("extnValue" in parameters) this.extnValue = new asn1js.OctetString({
      valueHex: parameters.extnValue
    });else this.extnValue = Extension.defaultValues("extnValue");
    if ("parsedValue" in parameters)
      /**
       * @type {Object}
       * @desc parsedValue
       */
      this.parsedValue = (0, _pvutils.getParametersValue)(parameters, "parsedValue", Extension.defaultValues("parsedValue")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(Extension, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["extnID", "critical", "extnValue"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, Extension.schema({
        names: {
          extnID: "extnID",
          critical: "critical",
          extnValue: "extnValue"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for Extension"); //endregion
      //region Get internal properties from parsed schema

      this.extnID = asn1.result.extnID.valueBlock.toString();
      if ("critical" in asn1.result) this.critical = asn1.result.critical.valueBlock.value;
      this.extnValue = asn1.result.extnValue; //region Get "parsedValue" for well-known extensions

      asn1 = asn1js.fromBER(this.extnValue.valueBlock.valueHex);
      if (asn1.offset === -1) return;

      switch (this.extnID) {
        case "2.5.29.9":
          // SubjectDirectoryAttributes
          try {
            this.parsedValue = new _SubjectDirectoryAttributes["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _SubjectDirectoryAttributes["default"]();
            this.parsedValue.parsingError = "Incorrectly formated SubjectDirectoryAttributes";
          }

          break;

        case "2.5.29.14":
          // SubjectKeyIdentifier
          this.parsedValue = asn1.result; // Should be just a simple OCTETSTRING

          break;

        case "2.5.29.15":
          // KeyUsage
          this.parsedValue = asn1.result; // Should be just a simple BITSTRING

          break;

        case "2.5.29.16":
          // PrivateKeyUsagePeriod
          try {
            this.parsedValue = new _PrivateKeyUsagePeriod["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _PrivateKeyUsagePeriod["default"]();
            this.parsedValue.parsingError = "Incorrectly formated PrivateKeyUsagePeriod";
          }

          break;

        case "2.5.29.17": // SubjectAltName

        case "2.5.29.18":
          // IssuerAltName
          try {
            this.parsedValue = new _AltName["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _AltName["default"]();
            this.parsedValue.parsingError = "Incorrectly formated AltName";
          }

          break;

        case "2.5.29.19":
          // BasicConstraints
          try {
            this.parsedValue = new _BasicConstraints["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _BasicConstraints["default"]();
            this.parsedValue.parsingError = "Incorrectly formated BasicConstraints";
          }

          break;

        case "2.5.29.20": // CRLNumber

        case "2.5.29.27":
          // BaseCRLNumber (delta CRL indicator)
          this.parsedValue = asn1.result; // Should be just a simple INTEGER

          break;

        case "2.5.29.21":
          // CRLReason
          this.parsedValue = asn1.result; // Should be just a simple ENUMERATED

          break;

        case "2.5.29.24":
          // InvalidityDate
          this.parsedValue = asn1.result; // Should be just a simple GeneralizedTime

          break;

        case "2.5.29.28":
          // IssuingDistributionPoint
          try {
            this.parsedValue = new _IssuingDistributionPoint["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _IssuingDistributionPoint["default"]();
            this.parsedValue.parsingError = "Incorrectly formated IssuingDistributionPoint";
          }

          break;

        case "2.5.29.29":
          // CertificateIssuer
          try {
            this.parsedValue = new _GeneralNames["default"]({
              schema: asn1.result
            }); // Should be just a simple
          } catch (ex) {
            this.parsedValue = new _GeneralNames["default"]();
            this.parsedValue.parsingError = "Incorrectly formated GeneralNames";
          }

          break;

        case "2.5.29.30":
          // NameConstraints
          try {
            this.parsedValue = new _NameConstraints["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _NameConstraints["default"]();
            this.parsedValue.parsingError = "Incorrectly formated NameConstraints";
          }

          break;

        case "2.5.29.31": // CRLDistributionPoints

        case "2.5.29.46":
          // FreshestCRL
          try {
            this.parsedValue = new _CRLDistributionPoints["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _CRLDistributionPoints["default"]();
            this.parsedValue.parsingError = "Incorrectly formated CRLDistributionPoints";
          }

          break;

        case "2.5.29.32": // CertificatePolicies

        case "1.3.6.1.4.1.311.21.10":
          // szOID_APPLICATION_CERT_POLICIES - Microsoft-specific OID
          try {
            this.parsedValue = new _CertificatePolicies["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _CertificatePolicies["default"]();
            this.parsedValue.parsingError = "Incorrectly formated CertificatePolicies";
          }

          break;

        case "2.5.29.33":
          // PolicyMappings
          try {
            this.parsedValue = new _PolicyMappings["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _PolicyMappings["default"]();
            this.parsedValue.parsingError = "Incorrectly formated CertificatePolicies";
          }

          break;

        case "2.5.29.35":
          // AuthorityKeyIdentifier
          try {
            this.parsedValue = new _AuthorityKeyIdentifier["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _AuthorityKeyIdentifier["default"]();
            this.parsedValue.parsingError = "Incorrectly formated AuthorityKeyIdentifier";
          }

          break;

        case "2.5.29.36":
          // PolicyConstraints
          try {
            this.parsedValue = new _PolicyConstraints["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _PolicyConstraints["default"]();
            this.parsedValue.parsingError = "Incorrectly formated PolicyConstraints";
          }

          break;

        case "2.5.29.37":
          // ExtKeyUsage
          try {
            this.parsedValue = new _ExtKeyUsage["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _ExtKeyUsage["default"]();
            this.parsedValue.parsingError = "Incorrectly formated ExtKeyUsage";
          }

          break;

        case "2.5.29.54":
          // InhibitAnyPolicy
          this.parsedValue = asn1.result; // Should be just a simple INTEGER

          break;

        case "1.3.6.1.5.5.7.1.1": // AuthorityInfoAccess

        case "1.3.6.1.5.5.7.1.11":
          // SubjectInfoAccess
          try {
            this.parsedValue = new _InfoAccess["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _InfoAccess["default"]();
            this.parsedValue.parsingError = "Incorrectly formated InfoAccess";
          }

          break;

        case "1.3.6.1.4.1.11129.2.4.2":
          // SignedCertificateTimestampList
          try {
            this.parsedValue = new _SignedCertificateTimestampList["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _SignedCertificateTimestampList["default"]();
            this.parsedValue.parsingError = "Incorrectly formated SignedCertificateTimestampList";
          }

          break;

        case "1.3.6.1.4.1.311.20.2":
          // szOID_ENROLL_CERTTYPE_EXTENSION - Microsoft-specific extension
          this.parsedValue = asn1.result; // Used to be simple Unicode string

          break;

        case "1.3.6.1.4.1.311.21.2":
          // szOID_CERTSRV_PREVIOUS_CERT_HASH - Microsoft-specific extension
          this.parsedValue = asn1.result; // Used to be simple OctetString

          break;

        case "1.3.6.1.4.1.311.21.7":
          // szOID_CERTIFICATE_TEMPLATE - Microsoft-specific extension
          try {
            this.parsedValue = new _CertificateTemplate["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _CertificateTemplate["default"]();
            this.parsedValue.parsingError = "Incorrectly formated CertificateTemplate";
          }

          break;

        case "1.3.6.1.4.1.311.21.1":
          // szOID_CERTSRV_CA_VERSION - Microsoft-specific extension
          try {
            this.parsedValue = new _CAVersion["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _CAVersion["default"]();
            this.parsedValue.parsingError = "Incorrectly formated CAVersion";
          }

          break;

        case "1.3.6.1.5.5.7.1.3":
          // QCStatements
          try {
            this.parsedValue = new _QCStatements["default"]({
              schema: asn1.result
            });
          } catch (ex) {
            this.parsedValue = new _QCStatements["default"]();
            this.parsedValue.parsingError = "Incorrectly formated QCStatements";
          }

          break;

        default:
      } //endregion
      //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];
      outputArray.push(new asn1js.ObjectIdentifier({
        value: this.extnID
      }));
      if (this.critical !== Extension.defaultValues("critical")) outputArray.push(new asn1js.Boolean({
        value: this.critical
      }));
      outputArray.push(this.extnValue); //endregion
      //region Construct and return new ASN.1 schema for this object

      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {
        extnID: this.extnID,
        extnValue: this.extnValue.toJSON()
      };
      if (this.critical !== Extension.defaultValues("critical")) object.critical = this.critical;

      if ("parsedValue" in this) {
        if ("toJSON" in this.parsedValue) object.parsedValue = this.parsedValue.toJSON();
      }

      return object;
    }
  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "extnID":
          return "";

        case "critical":
          return false;

        case "extnValue":
          return new asn1js.OctetString();

        case "parsedValue":
          return {};

        default:
          throw new Error("Invalid member name for Extension class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * Extension  ::=  SEQUENCE  {
     *    extnID      OBJECT IDENTIFIER,
     *    critical    BOOLEAN DEFAULT FALSE,
     *    extnValue   OCTET STRING
     * }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [extnID]
       * @property {string} [critical]
       * @property {string} [extnValue]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.extnID || ""
        }), new asn1js.Boolean({
          name: names.critical || "",
          optional: true
        }), new asn1js.OctetString({
          name: names.extnValue || ""
        })]
      });
    }
  }]);
  return Extension;
}();

exports["default"] = Extension;

},{"./AltName.js":25,"./AuthorityKeyIdentifier.js":28,"./BasicConstraints.js":29,"./CAVersion.js":30,"./CRLDistributionPoints.js":31,"./CertificatePolicies.js":32,"./CertificateTemplate.js":33,"./ExtKeyUsage.js":39,"./GeneralNames.js":43,"./InfoAccess.js":45,"./IssuingDistributionPoint.js":46,"./NameConstraints.js":47,"./PolicyConstraints.js":51,"./PolicyMappings.js":54,"./PrivateKeyUsagePeriod.js":57,"./QCStatements.js":59,"./SignedCertificateTimestampList.js":64,"./SubjectDirectoryAttributes.js":65,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],41:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _Extension = _interopRequireDefault(require("./Extension.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var Extensions =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for Extensions class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function Extensions() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Extensions);
    //region Internal properties of the object

    /**
     * @type {Array.<Extension>}
     * @desc type
     */
    this.extensions = (0, _pvutils.getParametersValue)(parameters, "extensions", Extensions.defaultValues("extensions")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(Extensions, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["extensions"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, Extensions.schema({
        names: {
          extensions: "extensions"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for Extensions"); //endregion
      //region Get internal properties from parsed schema

      this.extensions = Array.from(asn1.result.extensions, function (element) {
        return new _Extension["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.extensions, function (element) {
          return element.toSchema();
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        extensions: Array.from(this.extensions, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "extensions":
          return [];

        default:
          throw new Error("Invalid member name for Extensions class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * Extensions  ::=  SEQUENCE SIZE (1..MAX) OF Extension
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @param {boolean} optional Flag that current schema should be optional
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [extensions]
       * @property {string} [extension]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        optional: optional,
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.extensions || "",
          value: _Extension["default"].schema(names.extension || {})
        })]
      });
    }
  }]);
  return Extensions;
}(); //**************************************************************************************


exports["default"] = Extensions;

},{"./Extension.js":40,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],42:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _RelativeDistinguishedNames = _interopRequireDefault(require("./RelativeDistinguishedNames.js"));

//**************************************************************************************
//region Additional asn1js schema elements existing inside GeneralName schema
//**************************************************************************************

/**
 * Schema for "builtInStandardAttributes" of "ORAddress"
 * @param {Object} parameters
 * @property {Object} [names]
 * @param {boolean} optional
 * @returns {Sequence}
 */
function builtInStandardAttributes() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  //builtInStandardAttributes ::= Sequence {
  //    country-name                  CountryName OPTIONAL,
  //    administration-domain-name    AdministrationDomainName OPTIONAL,
  //    network-address           [0] IMPLICIT NetworkAddress OPTIONAL,
  //    terminal-identifier       [1] IMPLICIT TerminalIdentifier OPTIONAL,
  //    private-domain-name       [2] PrivateDomainName OPTIONAL,
  //    organization-name         [3] IMPLICIT OrganizationName OPTIONAL,
  //    numeric-user-identifier   [4] IMPLICIT NumericUserIdentifier OPTIONAL,
  //    personal-name             [5] IMPLICIT PersonalName OPTIONAL,
  //    organizational-unit-names [6] IMPLICIT OrganizationalUnitNames OPTIONAL }

  /**
   * @type {Object}
   * @property {string} [country_name]
   * @property {string} [administration_domain_name]
   * @property {string} [network_address]
   * @property {string} [terminal_identifier]
   * @property {string} [private_domain_name]
   * @property {string} [organization_name]
   * @property {string} [numeric_user_identifier]
   * @property {string} [personal_name]
   * @property {string} [organizational_unit_names]
   */
  var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
  return new asn1js.Sequence({
    optional: optional,
    value: [new asn1js.Constructed({
      optional: true,
      idBlock: {
        tagClass: 2,
        // APPLICATION-SPECIFIC
        tagNumber: 1 // [1]

      },
      name: names.country_name || "",
      value: [new asn1js.Choice({
        value: [new asn1js.NumericString(), new asn1js.PrintableString()]
      })]
    }), new asn1js.Constructed({
      optional: true,
      idBlock: {
        tagClass: 2,
        // APPLICATION-SPECIFIC
        tagNumber: 2 // [2]

      },
      name: names.administration_domain_name || "",
      value: [new asn1js.Choice({
        value: [new asn1js.NumericString(), new asn1js.PrintableString()]
      })]
    }), new asn1js.Primitive({
      optional: true,
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 0 // [0]

      },
      name: names.network_address || "",
      isHexOnly: true
    }), new asn1js.Primitive({
      optional: true,
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 1 // [1]

      },
      name: names.terminal_identifier || "",
      isHexOnly: true
    }), new asn1js.Constructed({
      optional: true,
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 2 // [2]

      },
      name: names.private_domain_name || "",
      value: [new asn1js.Choice({
        value: [new asn1js.NumericString(), new asn1js.PrintableString()]
      })]
    }), new asn1js.Primitive({
      optional: true,
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 3 // [3]

      },
      name: names.organization_name || "",
      isHexOnly: true
    }), new asn1js.Primitive({
      optional: true,
      name: names.numeric_user_identifier || "",
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 4 // [4]

      },
      isHexOnly: true
    }), new asn1js.Constructed({
      optional: true,
      name: names.personal_name || "",
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 5 // [5]

      },
      value: [new asn1js.Primitive({
        idBlock: {
          tagClass: 3,
          // CONTEXT-SPECIFIC
          tagNumber: 0 // [0]

        },
        isHexOnly: true
      }), new asn1js.Primitive({
        optional: true,
        idBlock: {
          tagClass: 3,
          // CONTEXT-SPECIFIC
          tagNumber: 1 // [1]

        },
        isHexOnly: true
      }), new asn1js.Primitive({
        optional: true,
        idBlock: {
          tagClass: 3,
          // CONTEXT-SPECIFIC
          tagNumber: 2 // [2]

        },
        isHexOnly: true
      }), new asn1js.Primitive({
        optional: true,
        idBlock: {
          tagClass: 3,
          // CONTEXT-SPECIFIC
          tagNumber: 3 // [3]

        },
        isHexOnly: true
      })]
    }), new asn1js.Constructed({
      optional: true,
      name: names.organizational_unit_names || "",
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 6 // [6]

      },
      value: [new asn1js.Repeated({
        value: new asn1js.PrintableString()
      })]
    })]
  });
} //**************************************************************************************

/**
 * Schema for "builtInDomainDefinedAttributes" of "ORAddress"
 * @param {boolean} optional
 * @returns {Sequence}
 */


function builtInDomainDefinedAttributes() {
  var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return new asn1js.Sequence({
    optional: optional,
    value: [new asn1js.PrintableString(), new asn1js.PrintableString()]
  });
} //**************************************************************************************

/**
 * Schema for "builtInDomainDefinedAttributes" of "ORAddress"
 * @param {boolean} optional
 * @returns {Set}
 */


function extensionAttributes() {
  var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return new asn1js.Set({
    optional: optional,
    value: [new asn1js.Primitive({
      optional: true,
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 0 // [0]

      },
      isHexOnly: true
    }), new asn1js.Constructed({
      optional: true,
      idBlock: {
        tagClass: 3,
        // CONTEXT-SPECIFIC
        tagNumber: 1 // [1]

      },
      value: [new asn1js.Any()]
    })]
  });
} //**************************************************************************************
//endregion
//**************************************************************************************

/**
 * Class from RFC5280
 */


var GeneralName =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for GeneralName class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   * @property {number} [type] value type - from a tagged value (0 for "otherName", 1 for "rfc822Name" etc.)
   * @property {Object} [value] asn1js object having GeneralName value (type depends on "type" value)
   */
  function GeneralName() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, GeneralName);
    //region Internal properties of the object

    /**
     * @type {number}
     * @desc value type - from a tagged value (0 for "otherName", 1 for "rfc822Name" etc.)
     */
    this.type = (0, _pvutils.getParametersValue)(parameters, "type", GeneralName.defaultValues("type"));
    /**
     * @type {Object}
     * @desc asn1js object having GeneralName value (type depends on "type" value)
     */

    this.value = (0, _pvutils.getParametersValue)(parameters, "value", GeneralName.defaultValues("value")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(GeneralName, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["blockName", "otherName", "rfc822Name", "dNSName", "x400Address", "directoryName", "ediPartyName", "uniformResourceIdentifier", "iPAddress", "registeredID"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, GeneralName.schema({
        names: {
          blockName: "blockName",
          otherName: "otherName",
          rfc822Name: "rfc822Name",
          dNSName: "dNSName",
          x400Address: "x400Address",
          directoryName: {
            names: {
              blockName: "directoryName"
            }
          },
          ediPartyName: "ediPartyName",
          uniformResourceIdentifier: "uniformResourceIdentifier",
          iPAddress: "iPAddress",
          registeredID: "registeredID"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for GeneralName"); //endregion
      //region Get internal properties from parsed schema

      this.type = asn1.result.blockName.idBlock.tagNumber;

      switch (this.type) {
        case 0:
          // otherName
          this.value = asn1.result.blockName;
          break;

        case 1: // rfc822Name + dNSName + uniformResourceIdentifier

        case 2:
        case 6:
          {
            var value = asn1.result.blockName;
            value.idBlock.tagClass = 1; // UNIVERSAL

            value.idBlock.tagNumber = 22; // IA5STRING

            var valueBER = value.toBER(false);
            this.value = asn1js.fromBER(valueBER).result.valueBlock.value;
          }
          break;

        case 3:
          // x400Address
          this.value = asn1.result.blockName;
          break;

        case 4:
          // directoryName
          this.value = new _RelativeDistinguishedNames["default"]({
            schema: asn1.result.directoryName
          });
          break;

        case 5:
          // ediPartyName
          this.value = asn1.result.ediPartyName;
          break;

        case 7:
          // iPAddress
          this.value = new asn1js.OctetString({
            valueHex: asn1.result.blockName.valueBlock.valueHex
          });
          break;

        case 8:
          // registeredID
          {
            var _value = asn1.result.blockName;
            _value.idBlock.tagClass = 1; // UNIVERSAL

            _value.idBlock.tagNumber = 6; // ObjectIdentifier

            var _valueBER = _value.toBER(false);

            this.value = asn1js.fromBER(_valueBER).result.valueBlock.toString(); // Getting a string representation of the ObjectIdentifier
          }
          break;

        default:
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      switch (this.type) {
        case 0:
        case 3:
        case 5:
          return new asn1js.Constructed({
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: this.type
            },
            value: [this.value]
          });

        case 1:
        case 2:
        case 6:
          {
            var value = new asn1js.IA5String({
              value: this.value
            });
            value.idBlock.tagClass = 3;
            value.idBlock.tagNumber = this.type;
            return value;
          }

        case 4:
          return new asn1js.Constructed({
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: 4
            },
            value: [this.value.toSchema()]
          });

        case 7:
          {
            var _value2 = this.value;
            _value2.idBlock.tagClass = 3;
            _value2.idBlock.tagNumber = this.type;
            return _value2;
          }

        case 8:
          {
            var _value3 = new asn1js.ObjectIdentifier({
              value: this.value
            });

            _value3.idBlock.tagClass = 3;
            _value3.idBlock.tagNumber = this.type;
            return _value3;
          }

        default:
          return GeneralName.schema();
      } //endregion

    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _object = {
        type: this.type,
        value: ""
      };
      if (typeof this.value === "string") _object.value = this.value;else {
        try {
          _object.value = this.value.toJSON();
        } catch (ex) {}
      }
      return _object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "type":
          return 9;

        case "value":
          return {};

        default:
          throw new Error("Invalid member name for GeneralName class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "type":
          return memberValue === GeneralName.defaultValues(memberName);

        case "value":
          return Object.keys(memberValue).length === 0;

        default:
          throw new Error("Invalid member name for GeneralName class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * GeneralName ::= Choice {
     *    otherName                       [0]     OtherName,
     *    rfc822Name                      [1]     IA5String,
     *    dNSName                         [2]     IA5String,
     *    x400Address                     [3]     ORAddress,
     *    directoryName                   [4]     value,
     *    ediPartyName                    [5]     EDIPartyName,
     *    uniformResourceIdentifier       [6]     IA5String,
     *    iPAddress                       [7]     OCTET STRING,
     *    registeredID                    [8]     OBJECT IDENTIFIER }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {Object} [directoryName]
       * @property {Object} [builtInStandardAttributes]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Choice({
        value: [new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          name: names.blockName || "",
          value: [new asn1js.ObjectIdentifier(), new asn1js.Constructed({
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: 0 // [0]

            },
            value: [new asn1js.Any()]
          })]
        }), new asn1js.Primitive({
          name: names.blockName || "",
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          }
        }), new asn1js.Primitive({
          name: names.blockName || "",
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 2 // [2]

          }
        }), new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 3 // [3]

          },
          name: names.blockName || "",
          value: [builtInStandardAttributes(names.builtInStandardAttributes || {}, false), builtInDomainDefinedAttributes(true), extensionAttributes(true)]
        }), new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 4 // [4]

          },
          name: names.blockName || "",
          value: [_RelativeDistinguishedNames["default"].schema(names.directoryName || {})]
        }), new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 5 // [5]

          },
          name: names.blockName || "",
          value: [new asn1js.Constructed({
            optional: true,
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: 0 // [0]

            },
            value: [new asn1js.Choice({
              value: [new asn1js.TeletexString(), new asn1js.PrintableString(), new asn1js.UniversalString(), new asn1js.Utf8String(), new asn1js.BmpString()]
            })]
          }), new asn1js.Constructed({
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: 1 // [1]

            },
            value: [new asn1js.Choice({
              value: [new asn1js.TeletexString(), new asn1js.PrintableString(), new asn1js.UniversalString(), new asn1js.Utf8String(), new asn1js.BmpString()]
            })]
          })]
        }), new asn1js.Primitive({
          name: names.blockName || "",
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 6 // [6]

          }
        }), new asn1js.Primitive({
          name: names.blockName || "",
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 7 // [7]

          }
        }), new asn1js.Primitive({
          name: names.blockName || "",
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 8 // [8]

          }
        })]
      });
    }
  }]);
  return GeneralName;
}(); //**************************************************************************************


exports["default"] = GeneralName;

},{"./RelativeDistinguishedNames.js":63,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],43:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _GeneralName = _interopRequireDefault(require("./GeneralName.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var GeneralNames =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for GeneralNames class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function GeneralNames() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, GeneralNames);
    //region Internal properties of the object

    /**
     * @type {Array.<GeneralName>}
     * @desc Array of "general names"
     */
    this.names = (0, _pvutils.getParametersValue)(parameters, "names", GeneralNames.defaultValues("names")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(GeneralNames, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["names", "generalNames"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, GeneralNames.schema({
        names: {
          blockName: "names",
          generalNames: "generalNames"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for GeneralNames"); //endregion
      //region Get internal properties from parsed schema

      this.names = Array.from(asn1.result.generalNames, function (element) {
        return new _GeneralName["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.names, function (element) {
          return element.toSchema();
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        names: Array.from(this.names, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "names":
          return [];

        default:
          throw new Error("Invalid member name for GeneralNames class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * GeneralNames ::= SEQUENCE SIZE (1..MAX) OF GeneralName
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @param {boolean} [optional=false] Flag would be element optional or not
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /**
       * @type {Object}
       * @property {string} utcTimeName Name for "utcTimeName" choice
       * @property {string} generalTimeName Name for "generalTimeName" choice
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        optional: optional,
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.generalNames || "",
          value: _GeneralName["default"].schema()
        })]
      });
    }
  }]);
  return GeneralNames;
}(); //**************************************************************************************


exports["default"] = GeneralNames;

},{"./GeneralName.js":42,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],44:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _GeneralName = _interopRequireDefault(require("./GeneralName.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var GeneralSubtree =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for GeneralSubtree class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function GeneralSubtree() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, GeneralSubtree);
    //region Internal properties of the object

    /**
     * @type {GeneralName}
     * @desc base
     */
    this.base = (0, _pvutils.getParametersValue)(parameters, "base", GeneralSubtree.defaultValues("base"));
    /**
     * @type {number|Integer}
     * @desc base
     */

    this.minimum = (0, _pvutils.getParametersValue)(parameters, "minimum", GeneralSubtree.defaultValues("minimum"));
    if ("maximum" in parameters)
      /**
       * @type {number|Integer}
       * @desc minimum
       */
      this.maximum = (0, _pvutils.getParametersValue)(parameters, "maximum", GeneralSubtree.defaultValues("maximum")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(GeneralSubtree, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["base", "minimum", "maximum"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, GeneralSubtree.schema({
        names: {
          base: {
            names: {
              blockName: "base"
            }
          },
          minimum: "minimum",
          maximum: "maximum"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for GeneralSubtree"); //endregion
      //region Get internal properties from parsed schema

      this.base = new _GeneralName["default"]({
        schema: asn1.result.base
      });

      if ("minimum" in asn1.result) {
        if (asn1.result.minimum.valueBlock.isHexOnly) this.minimum = asn1.result.minimum;else this.minimum = asn1.result.minimum.valueBlock.valueDec;
      }

      if ("maximum" in asn1.result) {
        if (asn1.result.maximum.valueBlock.isHexOnly) this.maximum = asn1.result.maximum;else this.maximum = asn1.result.maximum.valueBlock.valueDec;
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];
      outputArray.push(this.base.toSchema());

      if (this.minimum !== 0) {
        var valueMinimum = 0;
        if (this.minimum instanceof asn1js.Integer) valueMinimum = this.minimum;else valueMinimum = new asn1js.Integer({
          value: this.minimum
        });
        outputArray.push(new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [valueMinimum]
        }));
      }

      if ("maximum" in this) {
        var valueMaximum = 0;
        if (this.maximum instanceof asn1js.Integer) valueMaximum = this.maximum;else valueMaximum = new asn1js.Integer({
          value: this.maximum
        });
        outputArray.push(new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          value: [valueMaximum]
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {
        base: this.base.toJSON()
      };

      if (this.minimum !== 0) {
        if (typeof this.minimum === "number") object.minimum = this.minimum;else object.minimum = this.minimum.toJSON();
      }

      if ("maximum" in this) {
        if (typeof this.maximum === "number") object.maximum = this.maximum;else object.maximum = this.maximum.toJSON();
      }

      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "base":
          return new _GeneralName["default"]();

        case "minimum":
          return 0;

        case "maximum":
          return 0;

        default:
          throw new Error("Invalid member name for GeneralSubtree class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * GeneralSubtree ::= SEQUENCE {
     *    base                    GeneralName,
     *    minimum         [0]     BaseDistance DEFAULT 0,
     *    maximum         [1]     BaseDistance OPTIONAL }
     *
     * BaseDistance ::= INTEGER (0..MAX)
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [base]
       * @property {string} [minimum]
       * @property {string} [maximum]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [_GeneralName["default"].schema(names.base || {}), new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [new asn1js.Integer({
            name: names.minimum || ""
          })]
        }), new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          value: [new asn1js.Integer({
            name: names.maximum || ""
          })]
        })]
      });
    }
  }]);
  return GeneralSubtree;
}(); //**************************************************************************************


exports["default"] = GeneralSubtree;

},{"./GeneralName.js":42,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],45:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _AccessDescription = _interopRequireDefault(require("./AccessDescription.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var InfoAccess =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for InfoAccess class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function InfoAccess() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, InfoAccess);
    //region Internal properties of the object

    /**
     * @type {Array.<AccessDescription>}
     * @desc accessDescriptions
     */
    this.accessDescriptions = (0, _pvutils.getParametersValue)(parameters, "accessDescriptions", InfoAccess.defaultValues("accessDescriptions")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(InfoAccess, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["accessDescriptions"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, InfoAccess.schema({
        names: {
          accessDescriptions: "accessDescriptions"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for InfoAccess"); //endregion
      //region Get internal properties from parsed schema

      this.accessDescriptions = Array.from(asn1.result.accessDescriptions, function (element) {
        return new _AccessDescription["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.accessDescriptions, function (element) {
          return element.toSchema();
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        accessDescriptions: Array.from(this.accessDescriptions, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "accessDescriptions":
          return [];

        default:
          throw new Error("Invalid member name for InfoAccess class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * AuthorityInfoAccessSyntax  ::=
     * SEQUENCE SIZE (1..MAX) OF AccessDescription
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [accessDescriptions]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.accessDescriptions || "",
          value: _AccessDescription["default"].schema()
        })]
      });
    }
  }]);
  return InfoAccess;
}(); //**************************************************************************************


exports["default"] = InfoAccess;

},{"./AccessDescription.js":23,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],46:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _GeneralName = _interopRequireDefault(require("./GeneralName.js"));

var _RelativeDistinguishedNames = _interopRequireDefault(require("./RelativeDistinguishedNames.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var IssuingDistributionPoint =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for IssuingDistributionPoint class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function IssuingDistributionPoint() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, IssuingDistributionPoint);
    //region Internal properties of the object
    if ("distributionPoint" in parameters)
      /**
       * @type {Array.<GeneralName>|RelativeDistinguishedNames}
       * @desc distributionPoint
       */
      this.distributionPoint = (0, _pvutils.getParametersValue)(parameters, "distributionPoint", IssuingDistributionPoint.defaultValues("distributionPoint"));
    /**
     * @type {boolean}
     * @desc onlyContainsUserCerts
     */

    this.onlyContainsUserCerts = (0, _pvutils.getParametersValue)(parameters, "onlyContainsUserCerts", IssuingDistributionPoint.defaultValues("onlyContainsUserCerts"));
    /**
     * @type {boolean}
     * @desc onlyContainsCACerts
     */

    this.onlyContainsCACerts = (0, _pvutils.getParametersValue)(parameters, "onlyContainsCACerts", IssuingDistributionPoint.defaultValues("onlyContainsCACerts"));
    if ("onlySomeReasons" in parameters)
      /**
       * @type {number}
       * @desc onlySomeReasons
       */
      this.onlySomeReasons = (0, _pvutils.getParametersValue)(parameters, "onlySomeReasons", IssuingDistributionPoint.defaultValues("onlySomeReasons"));
    /**
     * @type {boolean}
     * @desc indirectCRL
     */

    this.indirectCRL = (0, _pvutils.getParametersValue)(parameters, "indirectCRL", IssuingDistributionPoint.defaultValues("indirectCRL"));
    /**
     * @type {boolean}
     * @desc onlyContainsAttributeCerts
     */

    this.onlyContainsAttributeCerts = (0, _pvutils.getParametersValue)(parameters, "onlyContainsAttributeCerts", IssuingDistributionPoint.defaultValues("onlyContainsAttributeCerts")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(IssuingDistributionPoint, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["distributionPoint", "distributionPointNames", "onlyContainsUserCerts", "onlyContainsCACerts", "onlySomeReasons", "indirectCRL", "onlyContainsAttributeCerts"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, IssuingDistributionPoint.schema({
        names: {
          distributionPoint: "distributionPoint",
          distributionPointNames: "distributionPointNames",
          onlyContainsUserCerts: "onlyContainsUserCerts",
          onlyContainsCACerts: "onlyContainsCACerts",
          onlySomeReasons: "onlySomeReasons",
          indirectCRL: "indirectCRL",
          onlyContainsAttributeCerts: "onlyContainsAttributeCerts"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for IssuingDistributionPoint"); //endregion
      //region Get internal properties from parsed schema

      if ("distributionPoint" in asn1.result) {
        switch (true) {
          case asn1.result.distributionPoint.idBlock.tagNumber === 0:
            // GENERAL_NAMES variant
            this.distributionPoint = Array.from(asn1.result.distributionPointNames, function (element) {
              return new _GeneralName["default"]({
                schema: element
              });
            });
            break;

          case asn1.result.distributionPoint.idBlock.tagNumber === 1:
            // RDN variant
            {
              this.distributionPoint = new _RelativeDistinguishedNames["default"]({
                schema: new asn1js.Sequence({
                  value: asn1.result.distributionPoint.valueBlock.value
                })
              });
            }
            break;

          default:
            throw new Error("Unknown tagNumber for distributionPoint: {$asn1.result.distributionPoint.idBlock.tagNumber}");
        }
      }

      if ("onlyContainsUserCerts" in asn1.result) {
        var view = new Uint8Array(asn1.result.onlyContainsUserCerts.valueBlock.valueHex);
        this.onlyContainsUserCerts = view[0] !== 0x00;
      }

      if ("onlyContainsCACerts" in asn1.result) {
        var _view = new Uint8Array(asn1.result.onlyContainsCACerts.valueBlock.valueHex);

        this.onlyContainsCACerts = _view[0] !== 0x00;
      }

      if ("onlySomeReasons" in asn1.result) {
        var _view2 = new Uint8Array(asn1.result.onlySomeReasons.valueBlock.valueHex);

        this.onlySomeReasons = _view2[0];
      }

      if ("indirectCRL" in asn1.result) {
        var _view3 = new Uint8Array(asn1.result.indirectCRL.valueBlock.valueHex);

        this.indirectCRL = _view3[0] !== 0x00;
      }

      if ("onlyContainsAttributeCerts" in asn1.result) {
        var _view4 = new Uint8Array(asn1.result.onlyContainsAttributeCerts.valueBlock.valueHex);

        this.onlyContainsAttributeCerts = _view4[0] !== 0x00;
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];

      if ("distributionPoint" in this) {
        var value;

        if (this.distributionPoint instanceof Array) {
          value = new asn1js.Constructed({
            idBlock: {
              tagClass: 3,
              // CONTEXT-SPECIFIC
              tagNumber: 0 // [0]

            },
            value: Array.from(this.distributionPoint, function (element) {
              return element.toSchema();
            })
          });
        } else {
          value = this.distributionPoint.toSchema();
          value.idBlock.tagClass = 3; // CONTEXT - SPECIFIC

          value.idBlock.tagNumber = 1; // [1]
        }

        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [value]
        }));
      }

      if (this.onlyContainsUserCerts !== IssuingDistributionPoint.defaultValues("onlyContainsUserCerts")) {
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          valueHex: new Uint8Array([0xFF]).buffer
        }));
      }

      if (this.onlyContainsCACerts !== IssuingDistributionPoint.defaultValues("onlyContainsCACerts")) {
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 2 // [2]

          },
          valueHex: new Uint8Array([0xFF]).buffer
        }));
      }

      if ("onlySomeReasons" in this) {
        var buffer = new ArrayBuffer(1);
        var view = new Uint8Array(buffer);
        view[0] = this.onlySomeReasons;
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 3 // [3]

          },
          valueHex: buffer
        }));
      }

      if (this.indirectCRL !== IssuingDistributionPoint.defaultValues("indirectCRL")) {
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 4 // [4]

          },
          valueHex: new Uint8Array([0xFF]).buffer
        }));
      }

      if (this.onlyContainsAttributeCerts !== IssuingDistributionPoint.defaultValues("onlyContainsAttributeCerts")) {
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 5 // [5]

          },
          valueHex: new Uint8Array([0xFF]).buffer
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {};

      if ("distributionPoint" in this) {
        if (this.distributionPoint instanceof Array) object.distributionPoint = Array.from(this.distributionPoint, function (element) {
          return element.toJSON();
        });else object.distributionPoint = this.distributionPoint.toJSON();
      }

      if (this.onlyContainsUserCerts !== IssuingDistributionPoint.defaultValues("onlyContainsUserCerts")) object.onlyContainsUserCerts = this.onlyContainsUserCerts;
      if (this.onlyContainsCACerts !== IssuingDistributionPoint.defaultValues("onlyContainsCACerts")) object.onlyContainsCACerts = this.onlyContainsCACerts;
      if ("onlySomeReasons" in this) object.onlySomeReasons = this.onlySomeReasons;
      if (this.indirectCRL !== IssuingDistributionPoint.defaultValues("indirectCRL")) object.indirectCRL = this.indirectCRL;
      if (this.onlyContainsAttributeCerts !== IssuingDistributionPoint.defaultValues("onlyContainsAttributeCerts")) object.onlyContainsAttributeCerts = this.onlyContainsAttributeCerts;
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "distributionPoint":
          return [];

        case "onlyContainsUserCerts":
          return false;

        case "onlyContainsCACerts":
          return false;

        case "onlySomeReasons":
          return 0;

        case "indirectCRL":
          return false;

        case "onlyContainsAttributeCerts":
          return false;

        default:
          throw new Error("Invalid member name for IssuingDistributionPoint class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * IssuingDistributionPoint ::= SEQUENCE {
     *    distributionPoint          [0] DistributionPointName OPTIONAL,
     *    onlyContainsUserCerts      [1] BOOLEAN DEFAULT FALSE,
     *    onlyContainsCACerts        [2] BOOLEAN DEFAULT FALSE,
     *    onlySomeReasons            [3] ReasonFlags OPTIONAL,
     *    indirectCRL                [4] BOOLEAN DEFAULT FALSE,
     *    onlyContainsAttributeCerts [5] BOOLEAN DEFAULT FALSE }
     *
     * ReasonFlags ::= BIT STRING {
     *    unused                  (0),
     *    keyCompromise           (1),
     *    cACompromise            (2),
     *    affiliationChanged      (3),
     *    superseded              (4),
     *    cessationOfOperation    (5),
     *    certificateHold         (6),
     *    privilegeWithdrawn      (7),
     *    aACompromise            (8) }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [distributionPoint]
       * @property {string} [distributionPointNames]
       * @property {string} [onlyContainsUserCerts]
       * @property {string} [onlyContainsCACerts]
       * @property {string} [onlySomeReasons]
       * @property {string} [indirectCRL]
       * @property {string} [onlyContainsAttributeCerts]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [new asn1js.Choice({
            value: [new asn1js.Constructed({
              name: names.distributionPoint || "",
              idBlock: {
                tagClass: 3,
                // CONTEXT-SPECIFIC
                tagNumber: 0 // [0]

              },
              value: [new asn1js.Repeated({
                name: names.distributionPointNames || "",
                value: _GeneralName["default"].schema()
              })]
            }), new asn1js.Constructed({
              name: names.distributionPoint || "",
              idBlock: {
                tagClass: 3,
                // CONTEXT-SPECIFIC
                tagNumber: 1 // [1]

              },
              value: _RelativeDistinguishedNames["default"].schema().valueBlock.value
            })]
          })]
        }), new asn1js.Primitive({
          name: names.onlyContainsUserCerts || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          }
        }), // IMPLICIT boolean value
        new asn1js.Primitive({
          name: names.onlyContainsCACerts || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 2 // [2]

          }
        }), // IMPLICIT boolean value
        new asn1js.Primitive({
          name: names.onlySomeReasons || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 3 // [3]

          }
        }), // IMPLICIT bitstring value
        new asn1js.Primitive({
          name: names.indirectCRL || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 4 // [4]

          }
        }), // IMPLICIT boolean value
        new asn1js.Primitive({
          name: names.onlyContainsAttributeCerts || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 5 // [5]

          }
        }) // IMPLICIT boolean value
        ]
      });
    }
  }]);
  return IssuingDistributionPoint;
}(); //**************************************************************************************


exports["default"] = IssuingDistributionPoint;

},{"./GeneralName.js":42,"./RelativeDistinguishedNames.js":63,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],47:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _GeneralSubtree = _interopRequireDefault(require("./GeneralSubtree.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var NameConstraints =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for NameConstraints class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function NameConstraints() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, NameConstraints);
    //region Internal properties of the object
    if ("permittedSubtrees" in parameters)
      /**
       * @type {Array.<GeneralSubtree>}
       * @desc permittedSubtrees
       */
      this.permittedSubtrees = (0, _pvutils.getParametersValue)(parameters, "permittedSubtrees", NameConstraints.defaultValues("permittedSubtrees"));
    if ("excludedSubtrees" in parameters)
      /**
       * @type {Array.<GeneralSubtree>}
       * @desc excludedSubtrees
       */
      this.excludedSubtrees = (0, _pvutils.getParametersValue)(parameters, "excludedSubtrees", NameConstraints.defaultValues("excludedSubtrees")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(NameConstraints, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["permittedSubtrees", "excludedSubtrees"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, NameConstraints.schema({
        names: {
          permittedSubtrees: "permittedSubtrees",
          excludedSubtrees: "excludedSubtrees"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for NameConstraints"); //endregion
      //region Get internal properties from parsed schema

      if ("permittedSubtrees" in asn1.result) this.permittedSubtrees = Array.from(asn1.result.permittedSubtrees, function (element) {
        return new _GeneralSubtree["default"]({
          schema: element
        });
      });
      if ("excludedSubtrees" in asn1.result) this.excludedSubtrees = Array.from(asn1.result.excludedSubtrees, function (element) {
        return new _GeneralSubtree["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];

      if ("permittedSubtrees" in this) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: Array.from(this.permittedSubtrees, function (element) {
            return element.toSchema();
          })
        }));
      }

      if ("excludedSubtrees" in this) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          value: Array.from(this.excludedSubtrees, function (element) {
            return element.toSchema();
          })
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {};
      if ("permittedSubtrees" in this) object.permittedSubtrees = Array.from(this.permittedSubtrees, function (element) {
        return element.toJSON();
      });
      if ("excludedSubtrees" in this) object.excludedSubtrees = Array.from(this.excludedSubtrees, function (element) {
        return element.toJSON();
      });
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "permittedSubtrees":
          return [];

        case "excludedSubtrees":
          return [];

        default:
          throw new Error("Invalid member name for NameConstraints class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * NameConstraints ::= SEQUENCE {
     *    permittedSubtrees       [0]     GeneralSubtrees OPTIONAL,
     *    excludedSubtrees        [1]     GeneralSubtrees OPTIONAL }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [permittedSubtrees]
       * @property {string} [excludedSubtrees]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [new asn1js.Repeated({
            name: names.permittedSubtrees || "",
            value: _GeneralSubtree["default"].schema()
          })]
        }), new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          value: [new asn1js.Repeated({
            name: names.excludedSubtrees || "",
            value: _GeneralSubtree["default"].schema()
          })]
        })]
      });
    }
  }]);
  return NameConstraints;
}(); //**************************************************************************************


exports["default"] = NameConstraints;

},{"./GeneralSubtree.js":44,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],48:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC3447
 */
var OtherPrimeInfo =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for OtherPrimeInfo class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function OtherPrimeInfo() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, OtherPrimeInfo);
    //region Internal properties of the object

    /**
     * @type {Integer}
     * @desc prime
     */
    this.prime = (0, _pvutils.getParametersValue)(parameters, "prime", OtherPrimeInfo.defaultValues("prime"));
    /**
     * @type {Integer}
     * @desc exponent
     */

    this.exponent = (0, _pvutils.getParametersValue)(parameters, "exponent", OtherPrimeInfo.defaultValues("exponent"));
    /**
     * @type {Integer}
     * @desc coefficient
     */

    this.coefficient = (0, _pvutils.getParametersValue)(parameters, "coefficient", OtherPrimeInfo.defaultValues("coefficient")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
    //region If input argument array contains "json" for this object

    if ("json" in parameters) this.fromJSON(parameters.json); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(OtherPrimeInfo, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["prime", "exponent", "coefficient"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, OtherPrimeInfo.schema({
        names: {
          prime: "prime",
          exponent: "exponent",
          coefficient: "coefficient"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for OtherPrimeInfo"); //endregion
      //region Get internal properties from parsed schema

      this.prime = asn1.result.prime.convertFromDER();
      this.exponent = asn1.result.exponent.convertFromDER();
      this.coefficient = asn1.result.coefficient.convertFromDER(); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: [this.prime.convertToDER(), this.exponent.convertToDER(), this.coefficient.convertToDER()]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        r: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.prime.valueBlock.valueHex), true, true),
        d: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.exponent.valueBlock.valueHex), true, true),
        t: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.coefficient.valueBlock.valueHex), true, true)
      };
    } //**********************************************************************************

    /**
     * Convert JSON value into current object
     * @param {Object} json
     */

  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      if ("r" in json) this.prime = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.r, true))
      });else throw new Error("Absent mandatory parameter \"r\"");
      if ("d" in json) this.exponent = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.d, true))
      });else throw new Error("Absent mandatory parameter \"d\"");
      if ("t" in json) this.coefficient = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.t, true))
      });else throw new Error("Absent mandatory parameter \"t\"");
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "prime":
          return new asn1js.Integer();

        case "exponent":
          return new asn1js.Integer();

        case "coefficient":
          return new asn1js.Integer();

        default:
          throw new Error("Invalid member name for OtherPrimeInfo class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * OtherPrimeInfo ::= Sequence {
     *    prime             Integer,  -- ri
     *    exponent          Integer,  -- di
     *    coefficient       Integer   -- ti
     * }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} prime
       * @property {string} exponent
       * @property {string} coefficient
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Integer({
          name: names.prime || ""
        }), new asn1js.Integer({
          name: names.exponent || ""
        }), new asn1js.Integer({
          name: names.coefficient || ""
        })]
      });
    }
  }]);
  return OtherPrimeInfo;
}(); //**************************************************************************************


exports["default"] = OtherPrimeInfo;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],49:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _AlgorithmIdentifier = _interopRequireDefault(require("./AlgorithmIdentifier.js"));

//**************************************************************************************

/**
 * Class from RFC2898
 */
var PBES2Params =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PBES2Params class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PBES2Params() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PBES2Params);
    //region Internal properties of the object

    /**
     * @type {AlgorithmIdentifier}
     * @desc keyDerivationFunc
     */
    this.keyDerivationFunc = (0, _pvutils.getParametersValue)(parameters, "keyDerivationFunc", PBES2Params.defaultValues("keyDerivationFunc"));
    /**
     * @type {AlgorithmIdentifier}
     * @desc encryptionScheme
     */

    this.encryptionScheme = (0, _pvutils.getParametersValue)(parameters, "encryptionScheme", PBES2Params.defaultValues("encryptionScheme")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PBES2Params, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["keyDerivationFunc", "encryptionScheme"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PBES2Params.schema({
        names: {
          keyDerivationFunc: {
            names: {
              blockName: "keyDerivationFunc"
            }
          },
          encryptionScheme: {
            names: {
              blockName: "encryptionScheme"
            }
          }
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PBES2Params"); //endregion
      //region Get internal properties from parsed schema

      this.keyDerivationFunc = new _AlgorithmIdentifier["default"]({
        schema: asn1.result.keyDerivationFunc
      });
      this.encryptionScheme = new _AlgorithmIdentifier["default"]({
        schema: asn1.result.encryptionScheme
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: [this.keyDerivationFunc.toSchema(), this.encryptionScheme.toSchema()]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        keyDerivationFunc: this.keyDerivationFunc.toJSON(),
        encryptionScheme: this.encryptionScheme.toJSON()
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "keyDerivationFunc":
          return new _AlgorithmIdentifier["default"]();

        case "encryptionScheme":
          return new _AlgorithmIdentifier["default"]();

        default:
          throw new Error("Invalid member name for PBES2Params class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * PBES2-params ::= SEQUENCE {
     *    keyDerivationFunc AlgorithmIdentifier {{PBES2-KDFs}},
     *    encryptionScheme AlgorithmIdentifier {{PBES2-Encs}} }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [keyDerivationFunc]
       * @property {string} [encryptionScheme]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [_AlgorithmIdentifier["default"].schema(names.keyDerivationFunc || {}), _AlgorithmIdentifier["default"].schema(names.encryptionScheme || {})]
      });
    }
  }]);
  return PBES2Params;
}(); //**************************************************************************************


exports["default"] = PBES2Params;

},{"./AlgorithmIdentifier.js":24,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],50:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _AlgorithmIdentifier = _interopRequireDefault(require("./AlgorithmIdentifier.js"));

//**************************************************************************************

/**
 * Class from RFC2898
 */
var PBKDF2Params =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PBKDF2Params class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PBKDF2Params() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PBKDF2Params);
    //region Internal properties of the object

    /**
     * @type {Object}
     * @desc salt
     */
    this.salt = (0, _pvutils.getParametersValue)(parameters, "salt", PBKDF2Params.defaultValues("salt"));
    /**
     * @type {number}
     * @desc iterationCount
     */

    this.iterationCount = (0, _pvutils.getParametersValue)(parameters, "iterationCount", PBKDF2Params.defaultValues("iterationCount"));
    if ("keyLength" in parameters)
      /**
       * @type {number}
       * @desc keyLength
       */
      this.keyLength = (0, _pvutils.getParametersValue)(parameters, "keyLength", PBKDF2Params.defaultValues("keyLength"));
    if ("prf" in parameters)
      /**
       * @type {AlgorithmIdentifier}
       * @desc prf
       */
      this.prf = (0, _pvutils.getParametersValue)(parameters, "prf", PBKDF2Params.defaultValues("prf")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PBKDF2Params, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["salt", "iterationCount", "keyLength", "prf"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PBKDF2Params.schema({
        names: {
          saltPrimitive: "salt",
          saltConstructed: {
            names: {
              blockName: "salt"
            }
          },
          iterationCount: "iterationCount",
          keyLength: "keyLength",
          prf: {
            names: {
              blockName: "prf",
              optional: true
            }
          }
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PBKDF2Params"); //endregion
      //region Get internal properties from parsed schema

      this.salt = asn1.result.salt;
      this.iterationCount = asn1.result.iterationCount.valueBlock.valueDec;
      if ("keyLength" in asn1.result) this.keyLength = asn1.result.keyLength.valueBlock.valueDec;
      if ("prf" in asn1.result) this.prf = new _AlgorithmIdentifier["default"]({
        schema: asn1.result.prf
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence 
      var outputArray = [];
      outputArray.push(this.salt);
      outputArray.push(new asn1js.Integer({
        value: this.iterationCount
      }));

      if ("keyLength" in this) {
        if (PBKDF2Params.defaultValues("keyLength") !== this.keyLength) outputArray.push(new asn1js.Integer({
          value: this.keyLength
        }));
      }

      if ("prf" in this) {
        if (PBKDF2Params.defaultValues("prf").isEqual(this.prf) === false) outputArray.push(this.prf.toSchema());
      } //endregion 
      //region Construct and return new ASN.1 schema for this object 


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion 
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _object = {
        salt: this.salt.toJSON(),
        iterationCount: this.iterationCount
      };

      if ("keyLength" in this) {
        if (PBKDF2Params.defaultValues("keyLength") !== this.keyLength) _object.keyLength = this.keyLength;
      }

      if ("prf" in this) {
        if (PBKDF2Params.defaultValues("prf").isEqual(this.prf) === false) _object.prf = this.prf.toJSON();
      }

      return _object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "salt":
          return {};

        case "iterationCount":
          return -1;

        case "keyLength":
          return 0;

        case "prf":
          return new _AlgorithmIdentifier["default"]({
            algorithmId: "1.3.14.3.2.26",
            // SHA-1
            algorithmParams: new asn1js.Null()
          });

        default:
          throw new Error("Invalid member name for PBKDF2Params class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * PBKDF2-params ::= SEQUENCE {
     *    salt CHOICE {
     *        specified OCTET STRING,
     *        otherSource AlgorithmIdentifier },
     *  iterationCount INTEGER (1..MAX),
     *  keyLength INTEGER (1..MAX) OPTIONAL,
     *  prf AlgorithmIdentifier
     *    DEFAULT { algorithm hMAC-SHA1, parameters NULL } }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [saltPrimitive]
       * @property {string} [saltConstructed]
       * @property {string} [iterationCount]
       * @property {string} [keyLength]
       * @property {string} [prf]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Choice({
          value: [new asn1js.OctetString({
            name: names.saltPrimitive || ""
          }), _AlgorithmIdentifier["default"].schema(names.saltConstructed || {})]
        }), new asn1js.Integer({
          name: names.iterationCount || ""
        }), new asn1js.Integer({
          name: names.keyLength || "",
          optional: true
        }), _AlgorithmIdentifier["default"].schema(names.prf || {
          names: {
            optional: true
          }
        })]
      });
    }
  }]);
  return PBKDF2Params;
}(); //**************************************************************************************


exports["default"] = PBKDF2Params;

},{"./AlgorithmIdentifier.js":24,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],51:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC5280
 */
var PolicyConstraints =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PolicyConstraints class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PolicyConstraints() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PolicyConstraints);
    //region Internal properties of the object
    if ("requireExplicitPolicy" in parameters)
      /**
       * @type {number}
       * @desc requireExplicitPolicy
       */
      this.requireExplicitPolicy = (0, _pvutils.getParametersValue)(parameters, "requireExplicitPolicy", PolicyConstraints.defaultValues("requireExplicitPolicy"));
    if ("inhibitPolicyMapping" in parameters)
      /**
       * @type {number}
       * @desc Value of the TIME class
       */
      this.inhibitPolicyMapping = (0, _pvutils.getParametersValue)(parameters, "inhibitPolicyMapping", PolicyConstraints.defaultValues("inhibitPolicyMapping")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PolicyConstraints, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["requireExplicitPolicy", "inhibitPolicyMapping"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PolicyConstraints.schema({
        names: {
          requireExplicitPolicy: "requireExplicitPolicy",
          inhibitPolicyMapping: "inhibitPolicyMapping"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyConstraints"); //endregion
      //region Get internal properties from parsed schema

      if ("requireExplicitPolicy" in asn1.result) {
        var field1 = asn1.result.requireExplicitPolicy;
        field1.idBlock.tagClass = 1; // UNIVERSAL

        field1.idBlock.tagNumber = 2; // INTEGER

        var ber1 = field1.toBER(false);
        var int1 = asn1js.fromBER(ber1);
        this.requireExplicitPolicy = int1.result.valueBlock.valueDec;
      }

      if ("inhibitPolicyMapping" in asn1.result) {
        var field2 = asn1.result.inhibitPolicyMapping;
        field2.idBlock.tagClass = 1; // UNIVERSAL

        field2.idBlock.tagNumber = 2; // INTEGER

        var ber2 = field2.toBER(false);
        var int2 = asn1js.fromBER(ber2);
        this.inhibitPolicyMapping = int2.result.valueBlock.valueDec;
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create correct values for output sequence
      var outputArray = [];

      if ("requireExplicitPolicy" in this) {
        var int1 = new asn1js.Integer({
          value: this.requireExplicitPolicy
        });
        int1.idBlock.tagClass = 3; // CONTEXT-SPECIFIC

        int1.idBlock.tagNumber = 0; // [0]

        outputArray.push(int1);
      }

      if ("inhibitPolicyMapping" in this) {
        var int2 = new asn1js.Integer({
          value: this.inhibitPolicyMapping
        });
        int2.idBlock.tagClass = 3; // CONTEXT-SPECIFIC

        int2.idBlock.tagNumber = 1; // [1]

        outputArray.push(int2);
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {};
      if ("requireExplicitPolicy" in this) object.requireExplicitPolicy = this.requireExplicitPolicy;
      if ("inhibitPolicyMapping" in this) object.inhibitPolicyMapping = this.inhibitPolicyMapping;
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "requireExplicitPolicy":
          return 0;

        case "inhibitPolicyMapping":
          return 0;

        default:
          throw new Error("Invalid member name for PolicyConstraints class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * PolicyConstraints ::= SEQUENCE {
     *    requireExplicitPolicy           [0] SkipCerts OPTIONAL,
     *    inhibitPolicyMapping            [1] SkipCerts OPTIONAL }
     *
     * SkipCerts ::= INTEGER (0..MAX)
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [requireExplicitPolicy]
       * @property {string} [inhibitPolicyMapping]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Primitive({
          name: names.requireExplicitPolicy || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          }
        }), // IMPLICIT integer value
        new asn1js.Primitive({
          name: names.inhibitPolicyMapping || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          }
        }) // IMPLICIT integer value
        ]
      });
    }
  }]);
  return PolicyConstraints;
}(); //**************************************************************************************


exports["default"] = PolicyConstraints;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],52:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _PolicyQualifierInfo = _interopRequireDefault(require("./PolicyQualifierInfo.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var PolicyInformation =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PolicyInformation class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PolicyInformation() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PolicyInformation);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc policyIdentifier
     */
    this.policyIdentifier = (0, _pvutils.getParametersValue)(parameters, "policyIdentifier", PolicyInformation.defaultValues("policyIdentifier"));
    if ("policyQualifiers" in parameters)
      /**
       * @type {Array.<PolicyQualifierInfo>}
       * @desc Value of the TIME class
       */
      this.policyQualifiers = (0, _pvutils.getParametersValue)(parameters, "policyQualifiers", PolicyInformation.defaultValues("policyQualifiers")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PolicyInformation, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["policyIdentifier", "policyQualifiers"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PolicyInformation.schema({
        names: {
          policyIdentifier: "policyIdentifier",
          policyQualifiers: "policyQualifiers"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyInformation"); //endregion
      //region Get internal properties from parsed schema

      this.policyIdentifier = asn1.result.policyIdentifier.valueBlock.toString();
      if ("policyQualifiers" in asn1.result) this.policyQualifiers = Array.from(asn1.result.policyQualifiers, function (element) {
        return new _PolicyQualifierInfo["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];
      outputArray.push(new asn1js.ObjectIdentifier({
        value: this.policyIdentifier
      }));

      if ("policyQualifiers" in this) {
        outputArray.push(new asn1js.Sequence({
          value: Array.from(this.policyQualifiers, function (element) {
            return element.toSchema();
          })
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {
        policyIdentifier: this.policyIdentifier
      };
      if ("policyQualifiers" in this) object.policyQualifiers = Array.from(this.policyQualifiers, function (element) {
        return element.toJSON();
      });
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "policyIdentifier":
          return "";

        case "policyQualifiers":
          return [];

        default:
          throw new Error("Invalid member name for PolicyInformation class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * PolicyInformation ::= SEQUENCE {
     *    policyIdentifier   CertPolicyId,
     *    policyQualifiers   SEQUENCE SIZE (1..MAX) OF
     *    PolicyQualifierInfo OPTIONAL }
     *
     * CertPolicyId ::= OBJECT IDENTIFIER
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [policyIdentifier]
       * @property {string} [policyQualifiers]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.policyIdentifier || ""
        }), new asn1js.Sequence({
          optional: true,
          value: [new asn1js.Repeated({
            name: names.policyQualifiers || "",
            value: _PolicyQualifierInfo["default"].schema()
          })]
        })]
      });
    }
  }]);
  return PolicyInformation;
}(); //**************************************************************************************


exports["default"] = PolicyInformation;

},{"./PolicyQualifierInfo.js":55,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],53:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC5280
 */
var PolicyMapping =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PolicyMapping class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PolicyMapping() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PolicyMapping);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc issuerDomainPolicy
     */
    this.issuerDomainPolicy = (0, _pvutils.getParametersValue)(parameters, "issuerDomainPolicy", PolicyMapping.defaultValues("issuerDomainPolicy"));
    /**
     * @type {string}
     * @desc subjectDomainPolicy
     */

    this.subjectDomainPolicy = (0, _pvutils.getParametersValue)(parameters, "subjectDomainPolicy", PolicyMapping.defaultValues("subjectDomainPolicy")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PolicyMapping, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["issuerDomainPolicy", "subjectDomainPolicy"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PolicyMapping.schema({
        names: {
          issuerDomainPolicy: "issuerDomainPolicy",
          subjectDomainPolicy: "subjectDomainPolicy"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyMapping"); //endregion
      //region Get internal properties from parsed schema

      this.issuerDomainPolicy = asn1.result.issuerDomainPolicy.valueBlock.toString();
      this.subjectDomainPolicy = asn1.result.subjectDomainPolicy.valueBlock.toString(); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: [new asn1js.ObjectIdentifier({
          value: this.issuerDomainPolicy
        }), new asn1js.ObjectIdentifier({
          value: this.subjectDomainPolicy
        })]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        issuerDomainPolicy: this.issuerDomainPolicy,
        subjectDomainPolicy: this.subjectDomainPolicy
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "issuerDomainPolicy":
          return "";

        case "subjectDomainPolicy":
          return "";

        default:
          throw new Error("Invalid member name for PolicyMapping class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * PolicyMapping ::= SEQUENCE {
     *    issuerDomainPolicy      CertPolicyId,
     *    subjectDomainPolicy     CertPolicyId }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [issuerDomainPolicy]
       * @property {string} [subjectDomainPolicy]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.issuerDomainPolicy || ""
        }), new asn1js.ObjectIdentifier({
          name: names.subjectDomainPolicy || ""
        })]
      });
    }
  }]);
  return PolicyMapping;
}(); //**************************************************************************************


exports["default"] = PolicyMapping;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],54:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _PolicyMapping = _interopRequireDefault(require("./PolicyMapping.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var PolicyMappings =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PolicyMappings class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PolicyMappings() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PolicyMappings);
    //region Internal properties of the object

    /**
     * @type {Array.<PolicyMapping>}
     * @desc mappings
     */
    this.mappings = (0, _pvutils.getParametersValue)(parameters, "mappings", PolicyMappings.defaultValues("mappings")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PolicyMappings, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["mappings"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PolicyMappings.schema({
        names: {
          mappings: "mappings"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyMappings"); //endregion
      //region Get internal properties from parsed schema

      this.mappings = Array.from(asn1.result.mappings, function (element) {
        return new _PolicyMapping["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.mappings, function (element) {
          return element.toSchema();
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        mappings: Array.from(this.mappings, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "mappings":
          return [];

        default:
          throw new Error("Invalid member name for PolicyMappings class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * PolicyMappings ::= SEQUENCE SIZE (1..MAX) OF PolicyMapping
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [utcTimeName] Name for "utcTimeName" choice
       * @property {string} [generalTimeName] Name for "generalTimeName" choice
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.mappings || "",
          value: _PolicyMapping["default"].schema()
        })]
      });
    }
  }]);
  return PolicyMappings;
}(); //**************************************************************************************


exports["default"] = PolicyMappings;

},{"./PolicyMapping.js":53,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],55:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC5280
 */
var PolicyQualifierInfo =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PolicyQualifierInfo class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PolicyQualifierInfo() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PolicyQualifierInfo);
    //region Internal properties of the object

    /**
     * @type {string}
     * @desc policyQualifierId
     */
    this.policyQualifierId = (0, _pvutils.getParametersValue)(parameters, "policyQualifierId", PolicyQualifierInfo.defaultValues("policyQualifierId"));
    /**
     * @type {Object}
     * @desc qualifier
     */

    this.qualifier = (0, _pvutils.getParametersValue)(parameters, "qualifier", PolicyQualifierInfo.defaultValues("qualifier")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PolicyQualifierInfo, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["policyQualifierId", "qualifier"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PolicyQualifierInfo.schema({
        names: {
          policyQualifierId: "policyQualifierId",
          qualifier: "qualifier"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyQualifierInfo"); //endregion
      //region Get internal properties from parsed schema

      this.policyQualifierId = asn1.result.policyQualifierId.valueBlock.toString();
      this.qualifier = asn1.result.qualifier; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: [new asn1js.ObjectIdentifier({
          value: this.policyQualifierId
        }), this.qualifier]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        policyQualifierId: this.policyQualifierId,
        qualifier: this.qualifier.toJSON()
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "policyQualifierId":
          return "";

        case "qualifier":
          return new asn1js.Any();

        default:
          throw new Error("Invalid member name for PolicyQualifierInfo class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * PolicyQualifierInfo ::= SEQUENCE {
     *    policyQualifierId  PolicyQualifierId,
     *    qualifier          ANY DEFINED BY policyQualifierId }
     *
     * id-qt          OBJECT IDENTIFIER ::=  { id-pkix 2 }
     * id-qt-cps      OBJECT IDENTIFIER ::=  { id-qt 1 }
     * id-qt-unotice  OBJECT IDENTIFIER ::=  { id-qt 2 }
     *
     * PolicyQualifierId ::= OBJECT IDENTIFIER ( id-qt-cps | id-qt-unotice )
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [policyQualifierId]
       * @property {string} [qualifier]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.policyQualifierId || ""
        }), new asn1js.Any({
          name: names.qualifier || ""
        })]
      });
    }
  }]);
  return PolicyQualifierInfo;
}(); //**************************************************************************************


exports["default"] = PolicyQualifierInfo;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],56:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _AlgorithmIdentifier = _interopRequireDefault(require("./AlgorithmIdentifier.js"));

var _Attribute = _interopRequireDefault(require("./Attribute.js"));

var _ECPrivateKey = _interopRequireDefault(require("./ECPrivateKey.js"));

var _RSAPrivateKey = _interopRequireDefault(require("./RSAPrivateKey.js"));

//**************************************************************************************

/**
 * Class from RFC5208
 */
var PrivateKeyInfo =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PrivateKeyInfo class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PrivateKeyInfo() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PrivateKeyInfo);
    //region Internal properties of the object

    /**
     * @type {number}
     * @desc version
     */
    this.version = (0, _pvutils.getParametersValue)(parameters, "version", PrivateKeyInfo.defaultValues("version"));
    /**
     * @type {AlgorithmIdentifier}
     * @desc privateKeyAlgorithm
     */

    this.privateKeyAlgorithm = (0, _pvutils.getParametersValue)(parameters, "privateKeyAlgorithm", PrivateKeyInfo.defaultValues("privateKeyAlgorithm"));
    /**
     * @type {OctetString}
     * @desc privateKey
     */

    this.privateKey = (0, _pvutils.getParametersValue)(parameters, "privateKey", PrivateKeyInfo.defaultValues("privateKey"));
    if ("attributes" in parameters)
      /**
       * @type {Array.<Attribute>}
       * @desc attributes
       */
      this.attributes = (0, _pvutils.getParametersValue)(parameters, "attributes", PrivateKeyInfo.defaultValues("attributes"));
    if ("parsedKey" in parameters)
      /**
       * @type {ECPrivateKey|RSAPrivateKey}
       * @desc Parsed public key value
       */
      this.parsedKey = (0, _pvutils.getParametersValue)(parameters, "parsedKey", PrivateKeyInfo.defaultValues("parsedKey")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
    //region If input argument array contains "json" for this object

    if ("json" in parameters) this.fromJSON(parameters.json); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PrivateKeyInfo, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["version", "privateKeyAlgorithm", "privateKey", "attributes"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PrivateKeyInfo.schema({
        names: {
          version: "version",
          privateKeyAlgorithm: {
            names: {
              blockName: "privateKeyAlgorithm"
            }
          },
          privateKey: "privateKey",
          attributes: "attributes"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PrivateKeyInfo"); //endregion
      //region Get internal properties from parsed schema

      this.version = asn1.result.version.valueBlock.valueDec;
      this.privateKeyAlgorithm = new _AlgorithmIdentifier["default"]({
        schema: asn1.result.privateKeyAlgorithm
      });
      this.privateKey = asn1.result.privateKey;
      if ("attributes" in asn1.result) this.attributes = Array.from(asn1.result.attributes, function (element) {
        return new _Attribute["default"]({
          schema: element
        });
      });

      switch (this.privateKeyAlgorithm.algorithmId) {
        case "1.2.840.113549.1.1.1":
          // RSA
          {
            var privateKeyASN1 = asn1js.fromBER(this.privateKey.valueBlock.valueHex);
            if (privateKeyASN1.offset !== -1) this.parsedKey = new _RSAPrivateKey["default"]({
              schema: privateKeyASN1.result
            });
          }
          break;

        case "1.2.840.10045.2.1":
          // ECDSA
          if ("algorithmParams" in this.privateKeyAlgorithm) {
            if (this.privateKeyAlgorithm.algorithmParams instanceof asn1js.ObjectIdentifier) {
              var _privateKeyASN = asn1js.fromBER(this.privateKey.valueBlock.valueHex);

              if (_privateKeyASN.offset !== -1) {
                this.parsedKey = new _ECPrivateKey["default"]({
                  namedCurve: this.privateKeyAlgorithm.algorithmParams.valueBlock.toString(),
                  schema: _privateKeyASN.result
                });
              }
            }
          }

          break;

        default:
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [new asn1js.Integer({
        value: this.version
      }), this.privateKeyAlgorithm.toSchema(), this.privateKey];

      if ("attributes" in this) {
        outputArray.push(new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: Array.from(this.attributes, function (element) {
            return element.toSchema();
          })
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      //region Return common value in case we do not have enough info fo making JWK
      if ("parsedKey" in this === false) {
        var object = {
          version: this.version,
          privateKeyAlgorithm: this.privateKeyAlgorithm.toJSON(),
          privateKey: this.privateKey.toJSON()
        };
        if ("attributes" in this) object.attributes = Array.from(this.attributes, function (element) {
          return element.toJSON();
        });
        return object;
      } //endregion
      //region Making JWK


      var jwk = {};

      switch (this.privateKeyAlgorithm.algorithmId) {
        case "1.2.840.10045.2.1":
          // ECDSA
          jwk.kty = "EC";
          break;

        case "1.2.840.113549.1.1.1":
          // RSA
          jwk.kty = "RSA";
          break;

        default:
      }

      var publicKeyJWK = this.parsedKey.toJSON();

      for (var _i = 0, _Object$keys = Object.keys(publicKeyJWK); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        jwk[key] = publicKeyJWK[key];
      }

      return jwk; //endregion
    } //**********************************************************************************

    /**
     * Convert JSON value into current object
     * @param {Object} json
     */

  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      if ("kty" in json) {
        switch (json.kty.toUpperCase()) {
          case "EC":
            this.parsedKey = new _ECPrivateKey["default"]({
              json: json
            });
            this.privateKeyAlgorithm = new _AlgorithmIdentifier["default"]({
              algorithmId: "1.2.840.10045.2.1",
              algorithmParams: new asn1js.ObjectIdentifier({
                value: this.parsedKey.namedCurve
              })
            });
            break;

          case "RSA":
            this.parsedKey = new _RSAPrivateKey["default"]({
              json: json
            });
            this.privateKeyAlgorithm = new _AlgorithmIdentifier["default"]({
              algorithmId: "1.2.840.113549.1.1.1",
              algorithmParams: new asn1js.Null()
            });
            break;

          default:
            throw new Error("Invalid value for \"kty\" parameter: ".concat(json.kty));
        }

        this.privateKey = new asn1js.OctetString({
          valueHex: this.parsedKey.toSchema().toBER(false)
        });
      }
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "version":
          return 0;

        case "privateKeyAlgorithm":
          return new _AlgorithmIdentifier["default"]();

        case "privateKey":
          return new asn1js.OctetString();

        case "attributes":
          return [];

        case "parsedKey":
          return {};

        default:
          throw new Error("Invalid member name for PrivateKeyInfo class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * PrivateKeyInfo ::= SEQUENCE {
     *    version Version,
     *    privateKeyAlgorithm AlgorithmIdentifier {{PrivateKeyAlgorithms}},
     *    privateKey PrivateKey,
     *    attributes [0] Attributes OPTIONAL }
     *
     * Version ::= INTEGER {v1(0)} (v1,...)
     *
     * PrivateKey ::= OCTET STRING
     *
     * Attributes ::= SET OF Attribute
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [version]
       * @property {string} [privateKeyAlgorithm]
       * @property {string} [privateKey]
       * @property {string} [attributes]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Integer({
          name: names.version || ""
        }), _AlgorithmIdentifier["default"].schema(names.privateKeyAlgorithm || {}), new asn1js.OctetString({
          name: names.privateKey || ""
        }), new asn1js.Constructed({
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [new asn1js.Repeated({
            name: names.attributes || "",
            value: _Attribute["default"].schema()
          })]
        })]
      });
    }
  }]);
  return PrivateKeyInfo;
}(); //**************************************************************************************


exports["default"] = PrivateKeyInfo;

},{"./AlgorithmIdentifier.js":24,"./Attribute.js":26,"./ECPrivateKey.js":36,"./RSAPrivateKey.js":60,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],57:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC5280
 */
var PrivateKeyUsagePeriod =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PrivateKeyUsagePeriod class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PrivateKeyUsagePeriod() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PrivateKeyUsagePeriod);
    //region Internal properties of the object
    if ("notBefore" in parameters)
      /**
       * @type {Date}
       * @desc notBefore
       */
      this.notBefore = (0, _pvutils.getParametersValue)(parameters, "notBefore", PrivateKeyUsagePeriod.defaultValues("notBefore"));
    if ("notAfter" in parameters)
      /**
       * @type {Date}
       * @desc notAfter
       */
      this.notAfter = (0, _pvutils.getParametersValue)(parameters, "notAfter", PrivateKeyUsagePeriod.defaultValues("notAfter")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PrivateKeyUsagePeriod, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["notBefore", "notAfter"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PrivateKeyUsagePeriod.schema({
        names: {
          notBefore: "notBefore",
          notAfter: "notAfter"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PrivateKeyUsagePeriod"); //endregion
      //region Get internal properties from parsed schema

      if ("notBefore" in asn1.result) {
        var localNotBefore = new asn1js.GeneralizedTime();
        localNotBefore.fromBuffer(asn1.result.notBefore.valueBlock.valueHex);
        this.notBefore = localNotBefore.toDate();
      }

      if ("notAfter" in asn1.result) {
        var localNotAfter = new asn1js.GeneralizedTime({
          valueHex: asn1.result.notAfter.valueBlock.valueHex
        });
        localNotAfter.fromBuffer(asn1.result.notAfter.valueBlock.valueHex);
        this.notAfter = localNotAfter.toDate();
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];

      if ("notBefore" in this) {
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          valueHex: new asn1js.GeneralizedTime({
            valueDate: this.notBefore
          }).valueBlock.valueHex
        }));
      }

      if ("notAfter" in this) {
        outputArray.push(new asn1js.Primitive({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          valueHex: new asn1js.GeneralizedTime({
            valueDate: this.notAfter
          }).valueBlock.valueHex
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {};
      if ("notBefore" in this) object.notBefore = this.notBefore;
      if ("notAfter" in this) object.notAfter = this.notAfter;
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "notBefore":
          return new Date();

        case "notAfter":
          return new Date();

        default:
          throw new Error("Invalid member name for PrivateKeyUsagePeriod class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * PrivateKeyUsagePeriod OID ::= 2.5.29.16
     *
     * PrivateKeyUsagePeriod ::= SEQUENCE {
     *    notBefore       [0]     GeneralizedTime OPTIONAL,
     *    notAfter        [1]     GeneralizedTime OPTIONAL }
     * -- either notBefore or notAfter MUST be present
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [notBefore]
       * @property {string} [notAfter]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Primitive({
          name: names.notBefore || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          }
        }), new asn1js.Primitive({
          name: names.notAfter || "",
          optional: true,
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          }
        })]
      });
    }
  }]);
  return PrivateKeyUsagePeriod;
}(); //**************************************************************************************


exports["default"] = PrivateKeyUsagePeriod;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],58:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _common = require("./common.js");

var _AlgorithmIdentifier = _interopRequireDefault(require("./AlgorithmIdentifier.js"));

var _ECPublicKey = _interopRequireDefault(require("./ECPublicKey.js"));

var _RSAPublicKey = _interopRequireDefault(require("./RSAPublicKey.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var PublicKeyInfo =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for PublicKeyInfo class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function PublicKeyInfo() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PublicKeyInfo);
    //region Internal properties of the object

    /**
     * @type {AlgorithmIdentifier}
     * @desc Algorithm identifier
     */
    this.algorithm = (0, _pvutils.getParametersValue)(parameters, "algorithm", PublicKeyInfo.defaultValues("algorithm"));
    /**
     * @type {BitString}
     * @desc Subject public key value
     */

    this.subjectPublicKey = (0, _pvutils.getParametersValue)(parameters, "subjectPublicKey", PublicKeyInfo.defaultValues("subjectPublicKey"));
    if ("parsedKey" in parameters)
      /**
       * @type {ECPublicKey|RSAPublicKey}
       * @desc Parsed public key value
       */
      this.parsedKey = (0, _pvutils.getParametersValue)(parameters, "parsedKey", PublicKeyInfo.defaultValues("parsedKey")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
    //region If input argument array contains "json" for this object

    if ("json" in parameters) this.fromJSON(parameters.json); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(PublicKeyInfo, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["algorithm", "subjectPublicKey"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, PublicKeyInfo.schema({
        names: {
          algorithm: {
            names: {
              blockName: "algorithm"
            }
          },
          subjectPublicKey: "subjectPublicKey"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PublicKeyInfo"); //endregion
      //region Get internal properties from parsed schema

      this.algorithm = new _AlgorithmIdentifier["default"]({
        schema: asn1.result.algorithm
      });
      this.subjectPublicKey = asn1.result.subjectPublicKey;

      switch (this.algorithm.algorithmId) {
        case "1.2.840.10045.2.1":
          // ECDSA
          if ("algorithmParams" in this.algorithm) {
            if (this.algorithm.algorithmParams.constructor.blockName() === asn1js.ObjectIdentifier.blockName()) {
              try {
                this.parsedKey = new _ECPublicKey["default"]({
                  namedCurve: this.algorithm.algorithmParams.valueBlock.toString(),
                  schema: this.subjectPublicKey.valueBlock.valueHex
                });
              } catch (ex) {} // Could be a problems during recognision of internal public key data here. Let's ignore them.

            }
          }

          break;

        case "1.2.840.113549.1.1.1":
          // RSA
          {
            var publicKeyASN1 = asn1js.fromBER(this.subjectPublicKey.valueBlock.valueHex);

            if (publicKeyASN1.offset !== -1) {
              try {
                this.parsedKey = new _RSAPublicKey["default"]({
                  schema: publicKeyASN1.result
                });
              } catch (ex) {} // Could be a problems during recognision of internal public key data here. Let's ignore them.

            }
          }
          break;

        default:
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: [this.algorithm.toSchema(), this.subjectPublicKey]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      //region Return common value in case we do not have enough info fo making JWK
      if ("parsedKey" in this === false) {
        return {
          algorithm: this.algorithm.toJSON(),
          subjectPublicKey: this.subjectPublicKey.toJSON()
        };
      } //endregion
      //region Making JWK


      var jwk = {};

      switch (this.algorithm.algorithmId) {
        case "1.2.840.10045.2.1":
          // ECDSA
          jwk.kty = "EC";
          break;

        case "1.2.840.113549.1.1.1":
          // RSA
          jwk.kty = "RSA";
          break;

        default:
      }

      var publicKeyJWK = this.parsedKey.toJSON();

      for (var _i = 0, _Object$keys = Object.keys(publicKeyJWK); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        jwk[key] = publicKeyJWK[key];
      }

      return jwk; //endregion
    } //**********************************************************************************

    /**
     * Convert JSON value into current object
     * @param {Object} json
     */

  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      if ("kty" in json) {
        switch (json.kty.toUpperCase()) {
          case "EC":
            this.parsedKey = new _ECPublicKey["default"]({
              json: json
            });
            this.algorithm = new _AlgorithmIdentifier["default"]({
              algorithmId: "1.2.840.10045.2.1",
              algorithmParams: new asn1js.ObjectIdentifier({
                value: this.parsedKey.namedCurve
              })
            });
            break;

          case "RSA":
            this.parsedKey = new _RSAPublicKey["default"]({
              json: json
            });
            this.algorithm = new _AlgorithmIdentifier["default"]({
              algorithmId: "1.2.840.113549.1.1.1",
              algorithmParams: new asn1js.Null()
            });
            break;

          default:
            throw new Error("Invalid value for \"kty\" parameter: ".concat(json.kty));
        }

        this.subjectPublicKey = new asn1js.BitString({
          valueHex: this.parsedKey.toSchema().toBER(false)
        });
      }
    } //**********************************************************************************

  }, {
    key: "importKey",
    value: function importKey(publicKey) {
      //region Initial variables
      var sequence = Promise.resolve();

      var _this = this; //endregion
      //region Initial check


      if (typeof publicKey === "undefined") return Promise.reject("Need to provide publicKey input parameter"); //endregion
      //region Get a "crypto" extension

      var crypto = (0, _common.getCrypto)();
      if (typeof crypto === "undefined") return Promise.reject("Unable to create WebCrypto object"); //endregion
      //region Export public key

      sequence = sequence.then(function () {
        return crypto.exportKey("spki", publicKey);
      }); //endregion
      //region Initialize internal variables by parsing exported value

      sequence = sequence.then(
      /**
       * @param {ArrayBuffer} exportedKey
       */
      function (exportedKey) {
        var asn1 = asn1js.fromBER(exportedKey);

        try {
          _this.fromSchema(asn1.result);
        } catch (exception) {
          return Promise.reject("Error during initializing object from schema");
        }

        return undefined;
      }, function (error) {
        return Promise.reject("Error during exporting public key: ".concat(error));
      }); //endregion

      return sequence;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "algorithm":
          return new _AlgorithmIdentifier["default"]();

        case "subjectPublicKey":
          return new asn1js.BitString();

        default:
          throw new Error("Invalid member name for PublicKeyInfo class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * SubjectPublicKeyInfo  ::=  Sequence  {
     *    algorithm            AlgorithmIdentifier,
     *    subjectPublicKey     BIT STRING  }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [algorithm]
       * @property {string} [subjectPublicKey]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [_AlgorithmIdentifier["default"].schema(names.algorithm || {}), new asn1js.BitString({
          name: names.subjectPublicKey || ""
        })]
      });
    }
  }]);
  return PublicKeyInfo;
}(); //**************************************************************************************


exports["default"] = PublicKeyInfo;

},{"./AlgorithmIdentifier.js":24,"./ECPublicKey.js":37,"./RSAPublicKey.js":61,"./common.js":66,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],59:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.QCStatement = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC3739
 */
var QCStatement =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for QCStatement class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function QCStatement() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, QCStatement);
    //region Internal properties of the object

    /**
     * @type {string}
     */
    this.id = (0, _pvutils.getParametersValue)(parameters, "id", QCStatement.defaultValues("id"));

    if ("type" in parameters) {
      /**
       * @type {*} Any data described by "id"
       */
      this.type = (0, _pvutils.getParametersValue)(parameters, "type", QCStatement.defaultValues("type"));
    } //endregion
    //region If input argument array contains "schema" for this object


    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(QCStatement, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["id", "type"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, QCStatement.schema({
        names: {
          id: "id",
          type: "type"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for QCStatement"); //endregion
      //region Get internal properties from parsed schema

      this.id = asn1.result.id.valueBlock.toString();
      if ("type" in asn1.result) this.type = asn1.result.type; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      var value = [new asn1js.ObjectIdentifier({
        value: this.id
      })];
      if ("type" in this) value.push(this.type); //region Construct and return new ASN.1 schema for this object

      return new asn1js.Sequence({
        value: value
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {
        id: this.id
      };
      if ("type" in this) object.type = this.type.toJSON();
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "id":
          return "";

        case "type":
          return new asn1js.Null();

        default:
          throw new Error("Invalid member name for QCStatement class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "id":
          return memberValue === "";

        case "type":
          return memberValue instanceof asn1js.Null;

        default:
          throw new Error("Invalid member name for QCStatement class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
    	 *	 QCStatement ::= SEQUENCE {
     *       statementId   QC-STATEMENT.&id({SupportedStatements}),
     *       statementInfo QC-STATEMENT.&Type({SupportedStatements}{@statementId}) OPTIONAL
     *   }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [id]
       * @property {string} [type]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.ObjectIdentifier({
          name: names.id || ""
        }), new asn1js.Any({
          name: names.type || "",
          optional: true
        })]
      });
    }
  }]);
  return QCStatement;
}(); //**************************************************************************************

/**
 * Class from RFC3739
 */


exports.QCStatement = QCStatement;

var QCStatements =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for QCStatements class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function QCStatements() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, QCStatements);
    //region Internal properties of the object

    /**
     * @type {Array<QCStatement>}
     */
    this.values = (0, _pvutils.getParametersValue)(parameters, "values", QCStatements.defaultValues("values")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(QCStatements, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["values"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, QCStatements.schema({
        names: {
          values: "values"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for QCStatements"); //endregion
      //region Get internal properties from parsed schema

      this.values = Array.from(asn1.result.values, function (element) {
        return new QCStatement({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.values, function (element) {
          return element.toSchema();
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        extensions: Array.from(this.values, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "values":
          return [];

        default:
          throw new Error("Invalid member name for QCStatements class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "values":
          return memberValue.length === 0;

        default:
          throw new Error("Invalid member name for QCStatements class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * QCStatements ::= SEQUENCE OF QCStatement
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [values]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.values || "",
          value: QCStatement.schema(names.value || {})
        })]
      });
    }
  }]);
  return QCStatements;
}(); //**************************************************************************************


exports["default"] = QCStatements;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],60:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _OtherPrimeInfo = _interopRequireDefault(require("./OtherPrimeInfo.js"));

//**************************************************************************************

/**
 * Class from RFC3447
 */
var RSAPrivateKey =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for RSAPrivateKey class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function RSAPrivateKey() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, RSAPrivateKey);
    //region Internal properties of the object

    /**
     * @type {number}
     * @desc version
     */
    this.version = (0, _pvutils.getParametersValue)(parameters, "version", RSAPrivateKey.defaultValues("version"));
    /**
     * @type {Integer}
     * @desc modulus
     */

    this.modulus = (0, _pvutils.getParametersValue)(parameters, "modulus", RSAPrivateKey.defaultValues("modulus"));
    /**
     * @type {Integer}
     * @desc publicExponent
     */

    this.publicExponent = (0, _pvutils.getParametersValue)(parameters, "publicExponent", RSAPrivateKey.defaultValues("publicExponent"));
    /**
     * @type {Integer}
     * @desc privateExponent
     */

    this.privateExponent = (0, _pvutils.getParametersValue)(parameters, "privateExponent", RSAPrivateKey.defaultValues("privateExponent"));
    /**
     * @type {Integer}
     * @desc prime1
     */

    this.prime1 = (0, _pvutils.getParametersValue)(parameters, "prime1", RSAPrivateKey.defaultValues("prime1"));
    /**
     * @type {Integer}
     * @desc prime2
     */

    this.prime2 = (0, _pvutils.getParametersValue)(parameters, "prime2", RSAPrivateKey.defaultValues("prime2"));
    /**
     * @type {Integer}
     * @desc exponent1
     */

    this.exponent1 = (0, _pvutils.getParametersValue)(parameters, "exponent1", RSAPrivateKey.defaultValues("exponent1"));
    /**
     * @type {Integer}
     * @desc exponent2
     */

    this.exponent2 = (0, _pvutils.getParametersValue)(parameters, "exponent2", RSAPrivateKey.defaultValues("exponent2"));
    /**
     * @type {Integer}
     * @desc coefficient
     */

    this.coefficient = (0, _pvutils.getParametersValue)(parameters, "coefficient", RSAPrivateKey.defaultValues("coefficient"));
    if ("otherPrimeInfos" in parameters)
      /**
       * @type {Array.<OtherPrimeInfo>}
       * @desc otherPrimeInfos
       */
      this.otherPrimeInfos = (0, _pvutils.getParametersValue)(parameters, "otherPrimeInfos", RSAPrivateKey.defaultValues("otherPrimeInfos")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
    //region If input argument array contains "json" for this object

    if ("json" in parameters) this.fromJSON(parameters.json); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(RSAPrivateKey, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["version", "modulus", "publicExponent", "privateExponent", "prime1", "prime2", "exponent1", "exponent2", "coefficient", "otherPrimeInfos"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, RSAPrivateKey.schema({
        names: {
          version: "version",
          modulus: "modulus",
          publicExponent: "publicExponent",
          privateExponent: "privateExponent",
          prime1: "prime1",
          prime2: "prime2",
          exponent1: "exponent1",
          exponent2: "exponent2",
          coefficient: "coefficient",
          otherPrimeInfo: {
            names: {
              blockName: "otherPrimeInfos"
            }
          }
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for RSAPrivateKey"); //endregion
      //region Get internal properties from parsed schema

      this.version = asn1.result.version.valueBlock.valueDec;
      this.modulus = asn1.result.modulus.convertFromDER(256);
      this.publicExponent = asn1.result.publicExponent;
      this.privateExponent = asn1.result.privateExponent.convertFromDER(256);
      this.prime1 = asn1.result.prime1.convertFromDER(128);
      this.prime2 = asn1.result.prime2.convertFromDER(128);
      this.exponent1 = asn1.result.exponent1.convertFromDER(128);
      this.exponent2 = asn1.result.exponent2.convertFromDER(128);
      this.coefficient = asn1.result.coefficient.convertFromDER(128);
      if ("otherPrimeInfos" in asn1.result) this.otherPrimeInfos = Array.from(asn1.result.otherPrimeInfos, function (element) {
        return new _OtherPrimeInfo["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];
      outputArray.push(new asn1js.Integer({
        value: this.version
      }));
      outputArray.push(this.modulus.convertToDER());
      outputArray.push(this.publicExponent);
      outputArray.push(this.privateExponent.convertToDER());
      outputArray.push(this.prime1.convertToDER());
      outputArray.push(this.prime2.convertToDER());
      outputArray.push(this.exponent1.convertToDER());
      outputArray.push(this.exponent2.convertToDER());
      outputArray.push(this.coefficient.convertToDER());

      if ("otherPrimeInfos" in this) {
        outputArray.push(new asn1js.Sequence({
          value: Array.from(this.otherPrimeInfos, function (element) {
            return element.toSchema();
          })
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var jwk = {
        n: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.modulus.valueBlock.valueHex), true, true, true),
        e: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.publicExponent.valueBlock.valueHex), true, true, true),
        d: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.privateExponent.valueBlock.valueHex), true, true, true),
        p: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.prime1.valueBlock.valueHex), true, true, true),
        q: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.prime2.valueBlock.valueHex), true, true, true),
        dp: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.exponent1.valueBlock.valueHex), true, true, true),
        dq: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.exponent2.valueBlock.valueHex), true, true, true),
        qi: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.coefficient.valueBlock.valueHex), true, true, true)
      };
      if ("otherPrimeInfos" in this) jwk.oth = Array.from(this.otherPrimeInfos, function (element) {
        return element.toJSON();
      });
      return jwk;
    } //**********************************************************************************

    /**
     * Convert JSON value into current object
     * @param {Object} json
     */

  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      if ("n" in json) this.modulus = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.n, true, true))
      });else throw new Error("Absent mandatory parameter \"n\"");
      if ("e" in json) this.publicExponent = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.e, true, true))
      });else throw new Error("Absent mandatory parameter \"e\"");
      if ("d" in json) this.privateExponent = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.d, true, true))
      });else throw new Error("Absent mandatory parameter \"d\"");
      if ("p" in json) this.prime1 = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.p, true, true))
      });else throw new Error("Absent mandatory parameter \"p\"");
      if ("q" in json) this.prime2 = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.q, true, true))
      });else throw new Error("Absent mandatory parameter \"q\"");
      if ("dp" in json) this.exponent1 = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.dp, true, true))
      });else throw new Error("Absent mandatory parameter \"dp\"");
      if ("dq" in json) this.exponent2 = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.dq, true, true))
      });else throw new Error("Absent mandatory parameter \"dq\"");
      if ("qi" in json) this.coefficient = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.qi, true, true))
      });else throw new Error("Absent mandatory parameter \"qi\"");
      if ("oth" in json) this.otherPrimeInfos = Array.from(json.oth, function (element) {
        return new _OtherPrimeInfo["default"]({
          json: element
        });
      });
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "version":
          return 0;

        case "modulus":
          return new asn1js.Integer();

        case "publicExponent":
          return new asn1js.Integer();

        case "privateExponent":
          return new asn1js.Integer();

        case "prime1":
          return new asn1js.Integer();

        case "prime2":
          return new asn1js.Integer();

        case "exponent1":
          return new asn1js.Integer();

        case "exponent2":
          return new asn1js.Integer();

        case "coefficient":
          return new asn1js.Integer();

        case "otherPrimeInfos":
          return [];

        default:
          throw new Error("Invalid member name for RSAPrivateKey class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * RSAPrivateKey ::= Sequence {
     *    version           Version,
     *    modulus           Integer,  -- n
     *    publicExponent    Integer,  -- e
     *    privateExponent   Integer,  -- d
     *    prime1            Integer,  -- p
     *    prime2            Integer,  -- q
     *    exponent1         Integer,  -- d mod (p-1)
     *    exponent2         Integer,  -- d mod (q-1)
     *    coefficient       Integer,  -- (inverse of q) mod p
     *    otherPrimeInfos   OtherPrimeInfos OPTIONAL
     * }
     *
     * OtherPrimeInfos ::= Sequence SIZE(1..MAX) OF OtherPrimeInfo
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [version]
       * @property {string} [modulus]
       * @property {string} [publicExponent]
       * @property {string} [privateExponent]
       * @property {string} [prime1]
       * @property {string} [prime2]
       * @property {string} [exponent1]
       * @property {string} [exponent2]
       * @property {string} [coefficient]
       * @property {string} [otherPrimeInfosName]
       * @property {Object} [otherPrimeInfo]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Integer({
          name: names.version || ""
        }), new asn1js.Integer({
          name: names.modulus || ""
        }), new asn1js.Integer({
          name: names.publicExponent || ""
        }), new asn1js.Integer({
          name: names.privateExponent || ""
        }), new asn1js.Integer({
          name: names.prime1 || ""
        }), new asn1js.Integer({
          name: names.prime2 || ""
        }), new asn1js.Integer({
          name: names.exponent1 || ""
        }), new asn1js.Integer({
          name: names.exponent2 || ""
        }), new asn1js.Integer({
          name: names.coefficient || ""
        }), new asn1js.Sequence({
          optional: true,
          value: [new asn1js.Repeated({
            name: names.otherPrimeInfosName || "",
            value: _OtherPrimeInfo["default"].schema(names.otherPrimeInfo || {})
          })]
        })]
      });
    }
  }]);
  return RSAPrivateKey;
}(); //**************************************************************************************


exports["default"] = RSAPrivateKey;

},{"./OtherPrimeInfo.js":48,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],61:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

//**************************************************************************************

/**
 * Class from RFC3447
 */
var RSAPublicKey =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for RSAPublicKey class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   * @property {Integer} [modulus]
   * @property {Integer} [publicExponent]
   */
  function RSAPublicKey() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, RSAPublicKey);
    //region Internal properties of the object

    /**
     * @type {Integer}
     * @desc Modulus part of RSA public key
     */
    this.modulus = (0, _pvutils.getParametersValue)(parameters, "modulus", RSAPublicKey.defaultValues("modulus"));
    /**
     * @type {Integer}
     * @desc Public exponent of RSA public key
     */

    this.publicExponent = (0, _pvutils.getParametersValue)(parameters, "publicExponent", RSAPublicKey.defaultValues("publicExponent")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
    //region If input argument array contains "json" for this object

    if ("json" in parameters) this.fromJSON(parameters.json); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(RSAPublicKey, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["modulus", "publicExponent"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, RSAPublicKey.schema({
        names: {
          modulus: "modulus",
          publicExponent: "publicExponent"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for RSAPublicKey"); //endregion
      //region Get internal properties from parsed schema

      this.modulus = asn1.result.modulus.convertFromDER(256);
      this.publicExponent = asn1.result.publicExponent; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: [this.modulus.convertToDER(), this.publicExponent]
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        n: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.modulus.valueBlock.valueHex), true, true, true),
        e: (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.publicExponent.valueBlock.valueHex), true, true, true)
      };
    } //**********************************************************************************

    /**
     * Convert JSON value into current object
     * @param {Object} json
     */

  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      if ("n" in json) {
        var array = (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.n, true));
        this.modulus = new asn1js.Integer({
          valueHex: array.slice(0, Math.pow(2, (0, _pvutils.nearestPowerOf2)(array.byteLength)))
        });
      } else throw new Error("Absent mandatory parameter \"n\"");

      if ("e" in json) this.publicExponent = new asn1js.Integer({
        valueHex: (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(json.e, true)).slice(0, 3)
      });else throw new Error("Absent mandatory parameter \"e\"");
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "modulus":
          return new asn1js.Integer();

        case "publicExponent":
          return new asn1js.Integer();

        default:
          throw new Error("Invalid member name for RSAPublicKey class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * RSAPublicKey ::= Sequence {
     *    modulus           Integer,  -- n
     *    publicExponent    Integer   -- e
     * }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} utcTimeName Name for "utcTimeName" choice
       * @property {string} generalTimeName Name for "generalTimeName" choice
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Integer({
          name: names.modulus || ""
        }), new asn1js.Integer({
          name: names.publicExponent || ""
        })]
      });
    }
  }]);
  return RSAPublicKey;
}(); //**************************************************************************************


exports["default"] = RSAPublicKey;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],62:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _AlgorithmIdentifier = _interopRequireDefault(require("./AlgorithmIdentifier.js"));

//**************************************************************************************

/**
 * Class from RFC4055
 */
var RSASSAPSSParams =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for RSASSAPSSParams class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function RSASSAPSSParams() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, RSASSAPSSParams);
    //region Internal properties of the object

    /**
     * @type {AlgorithmIdentifier}
     * @desc Algorithms of hashing (DEFAULT sha1)
     */
    this.hashAlgorithm = (0, _pvutils.getParametersValue)(parameters, "hashAlgorithm", RSASSAPSSParams.defaultValues("hashAlgorithm"));
    /**
     * @type {AlgorithmIdentifier}
     * @desc Algorithm of "mask generaion function (MGF)" (DEFAULT mgf1SHA1)
     */

    this.maskGenAlgorithm = (0, _pvutils.getParametersValue)(parameters, "maskGenAlgorithm", RSASSAPSSParams.defaultValues("maskGenAlgorithm"));
    /**
     * @type {number}
     * @desc Salt length (DEFAULT 20)
     */

    this.saltLength = (0, _pvutils.getParametersValue)(parameters, "saltLength", RSASSAPSSParams.defaultValues("saltLength"));
    /**
     * @type {number}
     * @desc (DEFAULT 1)
     */

    this.trailerField = (0, _pvutils.getParametersValue)(parameters, "trailerField", RSASSAPSSParams.defaultValues("trailerField")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(RSASSAPSSParams, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["hashAlgorithm", "maskGenAlgorithm", "saltLength", "trailerField"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, RSASSAPSSParams.schema({
        names: {
          hashAlgorithm: {
            names: {
              blockName: "hashAlgorithm"
            }
          },
          maskGenAlgorithm: {
            names: {
              blockName: "maskGenAlgorithm"
            }
          },
          saltLength: "saltLength",
          trailerField: "trailerField"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for RSASSAPSSParams"); //endregion
      //region Get internal properties from parsed schema

      if ("hashAlgorithm" in asn1.result) this.hashAlgorithm = new _AlgorithmIdentifier["default"]({
        schema: asn1.result.hashAlgorithm
      });
      if ("maskGenAlgorithm" in asn1.result) this.maskGenAlgorithm = new _AlgorithmIdentifier["default"]({
        schema: asn1.result.maskGenAlgorithm
      });
      if ("saltLength" in asn1.result) this.saltLength = asn1.result.saltLength.valueBlock.valueDec;
      if ("trailerField" in asn1.result) this.trailerField = asn1.result.trailerField.valueBlock.valueDec; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Create array for output sequence
      var outputArray = [];

      if (!this.hashAlgorithm.isEqual(RSASSAPSSParams.defaultValues("hashAlgorithm"))) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          value: [this.hashAlgorithm.toSchema()]
        }));
      }

      if (!this.maskGenAlgorithm.isEqual(RSASSAPSSParams.defaultValues("maskGenAlgorithm"))) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          value: [this.maskGenAlgorithm.toSchema()]
        }));
      }

      if (this.saltLength !== RSASSAPSSParams.defaultValues("saltLength")) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 2 // [2]

          },
          value: [new asn1js.Integer({
            value: this.saltLength
          })]
        }));
      }

      if (this.trailerField !== RSASSAPSSParams.defaultValues("trailerField")) {
        outputArray.push(new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 3 // [3]

          },
          value: [new asn1js.Integer({
            value: this.trailerField
          })]
        }));
      } //endregion
      //region Construct and return new ASN.1 schema for this object


      return new asn1js.Sequence({
        value: outputArray
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var object = {};
      if (!this.hashAlgorithm.isEqual(RSASSAPSSParams.defaultValues("hashAlgorithm"))) object.hashAlgorithm = this.hashAlgorithm.toJSON();
      if (!this.maskGenAlgorithm.isEqual(RSASSAPSSParams.defaultValues("maskGenAlgorithm"))) object.maskGenAlgorithm = this.maskGenAlgorithm.toJSON();
      if (this.saltLength !== RSASSAPSSParams.defaultValues("saltLength")) object.saltLength = this.saltLength;
      if (this.trailerField !== RSASSAPSSParams.defaultValues("trailerField")) object.trailerField = this.trailerField;
      return object;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "hashAlgorithm":
          return new _AlgorithmIdentifier["default"]({
            algorithmId: "1.3.14.3.2.26",
            // SHA-1
            algorithmParams: new asn1js.Null()
          });

        case "maskGenAlgorithm":
          return new _AlgorithmIdentifier["default"]({
            algorithmId: "1.2.840.113549.1.1.8",
            // MGF1
            algorithmParams: new _AlgorithmIdentifier["default"]({
              algorithmId: "1.3.14.3.2.26",
              // SHA-1
              algorithmParams: new asn1js.Null()
            }).toSchema()
          });

        case "saltLength":
          return 20;

        case "trailerField":
          return 1;

        default:
          throw new Error("Invalid member name for RSASSAPSSParams class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * RSASSA-PSS-params  ::=  Sequence  {
     *    hashAlgorithm      [0] HashAlgorithm DEFAULT sha1Identifier,
     *    maskGenAlgorithm   [1] MaskGenAlgorithm DEFAULT mgf1SHA1Identifier,
     *    saltLength         [2] Integer DEFAULT 20,
     *    trailerField       [3] Integer DEFAULT 1  }
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [hashAlgorithm]
       * @property {string} [maskGenAlgorithm]
       * @property {string} [saltLength]
       * @property {string} [trailerField]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 0 // [0]

          },
          optional: true,
          value: [_AlgorithmIdentifier["default"].schema(names.hashAlgorithm || {})]
        }), new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 1 // [1]

          },
          optional: true,
          value: [_AlgorithmIdentifier["default"].schema(names.maskGenAlgorithm || {})]
        }), new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 2 // [2]

          },
          optional: true,
          value: [new asn1js.Integer({
            name: names.saltLength || ""
          })]
        }), new asn1js.Constructed({
          idBlock: {
            tagClass: 3,
            // CONTEXT-SPECIFIC
            tagNumber: 3 // [3]

          },
          optional: true,
          value: [new asn1js.Integer({
            name: names.trailerField || ""
          })]
        })]
      });
    }
  }]);
  return RSASSAPSSParams;
}(); //**************************************************************************************


exports["default"] = RSASSAPSSParams;

},{"./AlgorithmIdentifier.js":24,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],63:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _AttributeTypeAndValue = _interopRequireDefault(require("./AttributeTypeAndValue.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var RelativeDistinguishedNames =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for RelativeDistinguishedNames class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   * @property {Array.<AttributeTypeAndValue>} [typesAndValues] Array of "type and value" objects
   * @property {ArrayBuffer} [valueBeforeDecode] Value of the RDN before decoding from schema
   */
  function RelativeDistinguishedNames() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, RelativeDistinguishedNames);
    //region Internal properties of the object

    /**
     * @type {Array.<AttributeTypeAndValue>}
     * @desc Array of "type and value" objects
     */
    this.typesAndValues = (0, _pvutils.getParametersValue)(parameters, "typesAndValues", RelativeDistinguishedNames.defaultValues("typesAndValues"));
    /**
     * @type {ArrayBuffer}
     * @desc Value of the RDN before decoding from schema
     */

    this.valueBeforeDecode = (0, _pvutils.getParametersValue)(parameters, "valueBeforeDecode", RelativeDistinguishedNames.defaultValues("valueBeforeDecode")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(RelativeDistinguishedNames, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["RDN", "typesAndValues"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, RelativeDistinguishedNames.schema({
        names: {
          blockName: "RDN",
          repeatedSet: "typesAndValues"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for RelativeDistinguishedNames"); //endregion
      //region Get internal properties from parsed schema

      if ("typesAndValues" in asn1.result) // Could be a case when there is no "types and values"
        this.typesAndValues = Array.from(asn1.result.typesAndValues, function (element) {
          return new _AttributeTypeAndValue["default"]({
            schema: element
          });
        }); // noinspection JSUnresolvedVariable

      this.valueBeforeDecode = asn1.result.RDN.valueBeforeDecode; //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Decode stored TBS value
      if (this.valueBeforeDecode.byteLength === 0) // No stored encoded array, create "from scratch"
        {
          return new asn1js.Sequence({
            value: [new asn1js.Set({
              value: Array.from(this.typesAndValues, function (element) {
                return element.toSchema();
              })
            })]
          });
        }

      var asn1 = asn1js.fromBER(this.valueBeforeDecode); //endregion
      //region Construct and return new ASN.1 schema for this object

      return asn1.result; //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        typesAndValues: Array.from(this.typesAndValues, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

    /**
     * Compare two RDN values, or RDN with ArrayBuffer value
     * @param {(RelativeDistinguishedNames|ArrayBuffer)} compareTo The value compare to current
     * @returns {boolean}
     */

  }, {
    key: "isEqual",
    value: function isEqual(compareTo) {
      if (compareTo instanceof RelativeDistinguishedNames) {
        if (this.typesAndValues.length !== compareTo.typesAndValues.length) return false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.typesAndValues.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
                index = _step$value[0],
                typeAndValue = _step$value[1];

            if (typeAndValue.isEqual(compareTo.typesAndValues[index]) === false) return false;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return true;
      }

      if (compareTo instanceof ArrayBuffer) return (0, _pvutils.isEqualBuffer)(this.valueBeforeDecode, compareTo);
      return false;
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "typesAndValues":
          return [];

        case "valueBeforeDecode":
          return new ArrayBuffer(0);

        default:
          throw new Error("Invalid member name for RelativeDistinguishedNames class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "typesAndValues":
          return memberValue.length === 0;

        case "valueBeforeDecode":
          return memberValue.byteLength === 0;

        default:
          throw new Error("Invalid member name for RelativeDistinguishedNames class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * RDNSequence ::= Sequence OF RelativeDistinguishedName
     *
     * RelativeDistinguishedName ::=
     * SET SIZE (1..MAX) OF AttributeTypeAndValue
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName] Name for entire block
       * @property {string} [repeatedSequence] Name for "repeatedSequence" block
       * @property {string} [repeatedSet] Name for "repeatedSet" block
       * @property {string} [typeAndValue] Name for "typeAndValue" block
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.repeatedSequence || "",
          value: new asn1js.Set({
            value: [new asn1js.Repeated({
              name: names.repeatedSet || "",
              value: _AttributeTypeAndValue["default"].schema(names.typeAndValue || {})
            })]
          })
        })]
      });
    }
  }]);
  return RelativeDistinguishedNames;
}(); //**************************************************************************************


exports["default"] = RelativeDistinguishedNames;

},{"./AttributeTypeAndValue.js":27,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"@babel/runtime/helpers/slicedToArray":12,"asn1js":16,"pvutils":20}],64:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifySCTsForCertificate = verifySCTsForCertificate;
exports["default"] = exports.SignedCertificateTimestamp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _bytestreamjs = require("bytestreamjs");

var _common = require("./common.js");

var _PublicKeyInfo = _interopRequireDefault(require("./PublicKeyInfo.js"));

//**************************************************************************************
var SignedCertificateTimestamp =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for SignedCertificateTimestamp class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function SignedCertificateTimestamp() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, SignedCertificateTimestamp);
    //region Internal properties of the object

    /**
     * @type {number}
     * @desc version
     */
    this.version = (0, _pvutils.getParametersValue)(parameters, "version", SignedCertificateTimestamp.defaultValues("version"));
    /**
     * @type {ArrayBuffer}
     * @desc logID
     */

    this.logID = (0, _pvutils.getParametersValue)(parameters, "logID", SignedCertificateTimestamp.defaultValues("logID"));
    /**
     * @type {Date}
     * @desc timestamp
     */

    this.timestamp = (0, _pvutils.getParametersValue)(parameters, "timestamp", SignedCertificateTimestamp.defaultValues("timestamp"));
    /**
     * @type {ArrayBuffer}
     * @desc extensions
     */

    this.extensions = (0, _pvutils.getParametersValue)(parameters, "extensions", SignedCertificateTimestamp.defaultValues("extensions"));
    /**
     * @type {string}
     * @desc hashAlgorithm
     */

    this.hashAlgorithm = (0, _pvutils.getParametersValue)(parameters, "hashAlgorithm", SignedCertificateTimestamp.defaultValues("hashAlgorithm"));
    /**
     * @type {string}
     * @desc signatureAlgorithm
     */

    this.signatureAlgorithm = (0, _pvutils.getParametersValue)(parameters, "signatureAlgorithm", SignedCertificateTimestamp.defaultValues("signatureAlgorithm"));
    /**
     * @type {Object}
     * @desc signature
     */

    this.signature = (0, _pvutils.getParametersValue)(parameters, "signature", SignedCertificateTimestamp.defaultValues("signature")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
    //region If input argument array contains "stream"

    if ("stream" in parameters) this.fromStream(parameters.stream); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(SignedCertificateTimestamp, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      if (schema instanceof asn1js.RawData === false) throw new Error("Object's schema was not verified against input data for SignedCertificateTimestamp");
      var seqStream = new _bytestreamjs.SeqStream({
        stream: new _bytestreamjs.ByteStream({
          buffer: schema.data
        })
      });
      this.fromStream(seqStream);
    } //**********************************************************************************

    /**
     * Convert SeqStream data into current class
     * @param {!SeqStream} stream
     */

  }, {
    key: "fromStream",
    value: function fromStream(stream) {
      var blockLength = stream.getUint16();
      this.version = stream.getBlock(1)[0];

      if (this.version === 0) {
        this.logID = new Uint8Array(stream.getBlock(32)).buffer.slice(0);
        this.timestamp = new Date((0, _pvutils.utilFromBase)(new Uint8Array(stream.getBlock(8)), 8)); //region Extensions

        var extensionsLength = stream.getUint16();
        this.extensions = new Uint8Array(stream.getBlock(extensionsLength)).buffer.slice(0); //endregion
        //region Hash algorithm

        switch (stream.getBlock(1)[0]) {
          case 0:
            this.hashAlgorithm = "none";
            break;

          case 1:
            this.hashAlgorithm = "md5";
            break;

          case 2:
            this.hashAlgorithm = "sha1";
            break;

          case 3:
            this.hashAlgorithm = "sha224";
            break;

          case 4:
            this.hashAlgorithm = "sha256";
            break;

          case 5:
            this.hashAlgorithm = "sha384";
            break;

          case 6:
            this.hashAlgorithm = "sha512";
            break;

          default:
            throw new Error("Object's stream was not correct for SignedCertificateTimestamp");
        } //endregion
        //region Signature algorithm


        switch (stream.getBlock(1)[0]) {
          case 0:
            this.signatureAlgorithm = "anonymous";
            break;

          case 1:
            this.signatureAlgorithm = "rsa";
            break;

          case 2:
            this.signatureAlgorithm = "dsa";
            break;

          case 3:
            this.signatureAlgorithm = "ecdsa";
            break;

          default:
            throw new Error("Object's stream was not correct for SignedCertificateTimestamp");
        } //endregion
        //region Signature


        var signatureLength = stream.getUint16();
        var signatureData = new Uint8Array(stream.getBlock(signatureLength)).buffer.slice(0);
        var asn1 = asn1js.fromBER(signatureData);
        if (asn1.offset === -1) throw new Error("Object's stream was not correct for SignedCertificateTimestamp");
        this.signature = asn1.result; //endregion

        if (blockLength !== 47 + extensionsLength + signatureLength) throw new Error("Object's stream was not correct for SignedCertificateTimestamp");
      }
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      var stream = this.toStream();
      return new asn1js.RawData({
        data: stream.stream.buffer
      });
    } //**********************************************************************************

    /**
     * Convert current object to SeqStream data
     * @returns {SeqStream} SeqStream object
     */

  }, {
    key: "toStream",
    value: function toStream() {
      var stream = new _bytestreamjs.SeqStream();
      stream.appendUint16(47 + this.extensions.byteLength + this.signature.valueBeforeDecode.byteLength);
      stream.appendChar(this.version);
      stream.appendView(new Uint8Array(this.logID));
      var timeBuffer = new ArrayBuffer(8);
      var timeView = new Uint8Array(timeBuffer);
      var baseArray = (0, _pvutils.utilToBase)(this.timestamp.valueOf(), 8);
      timeView.set(new Uint8Array(baseArray), 8 - baseArray.byteLength);
      stream.appendView(timeView);
      stream.appendUint16(this.extensions.byteLength);
      if (this.extensions.byteLength) stream.appendView(new Uint8Array(this.extensions));

      var _hashAlgorithm;

      switch (this.hashAlgorithm.toLowerCase()) {
        case "none":
          _hashAlgorithm = 0;
          break;

        case "md5":
          _hashAlgorithm = 1;
          break;

        case "sha1":
          _hashAlgorithm = 2;
          break;

        case "sha224":
          _hashAlgorithm = 3;
          break;

        case "sha256":
          _hashAlgorithm = 4;
          break;

        case "sha384":
          _hashAlgorithm = 5;
          break;

        case "sha512":
          _hashAlgorithm = 6;
          break;

        default:
          throw new Error("Incorrect data for hashAlgorithm: ".concat(this.hashAlgorithm));
      }

      stream.appendChar(_hashAlgorithm);

      var _signatureAlgorithm;

      switch (this.signatureAlgorithm.toLowerCase()) {
        case "anonymous":
          _signatureAlgorithm = 0;
          break;

        case "rsa":
          _signatureAlgorithm = 1;
          break;

        case "dsa":
          _signatureAlgorithm = 2;
          break;

        case "ecdsa":
          _signatureAlgorithm = 3;
          break;

        default:
          throw new Error("Incorrect data for signatureAlgorithm: ".concat(this.signatureAlgorithm));
      }

      stream.appendChar(_signatureAlgorithm);

      var _signature = this.signature.toBER(false);

      stream.appendUint16(_signature.byteLength);
      stream.appendView(new Uint8Array(_signature));
      return stream;
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        version: this.version,
        logID: (0, _pvutils.bufferToHexCodes)(this.logID),
        timestamp: this.timestamp,
        extensions: (0, _pvutils.bufferToHexCodes)(this.extensions),
        hashAlgorithm: this.hashAlgorithm,
        signatureAlgorithm: this.signatureAlgorithm,
        signature: this.signature.toJSON()
      };
    } //**********************************************************************************

    /**
     * Verify SignedCertificateTimestamp for specific input data
     * @param {Object[]} logs Array of objects with information about each CT Log (like here: https://ct.grahamedgecombe.com/logs.json)
     * @param {String} logs.log_id Identifier of the CT Log encoded in BASE-64 format
     * @param {String} logs.key Public key of the CT Log encoded in BASE-64 format
     * @param {ArrayBuffer} data Data to verify signature against. Could be encoded Certificate or encoded PreCert
     * @param {Number} [dataType=0] Type = 0 (data is encoded Certificate), type = 1 (data is encoded PreCert)
     * @return {Promise<void>}
     */

  }, {
    key: "verify",
    value: function () {
      var _verify = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(logs, data) {
        var dataType,
            logId,
            publicKeyBase64,
            publicKeyInfo,
            stream,
            _iteratorNormalCompletion,
            _didIteratorError,
            _iteratorError,
            _iterator,
            _step,
            log,
            asn1,
            timeBuffer,
            timeView,
            baseArray,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dataType = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
                //region Initial variables
                logId = (0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(this.logID));
                publicKeyBase64 = null;
                stream = new _bytestreamjs.SeqStream(); //endregion
                //region Found and init public key

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;
                _iterator = logs[Symbol.iterator]();

              case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 17;
                  break;
                }

                log = _step.value;

                if (!(log.log_id === logId)) {
                  _context.next = 14;
                  break;
                }

                publicKeyBase64 = log.key;
                return _context.abrupt("break", 17);

              case 14:
                _iteratorNormalCompletion = true;
                _context.next = 9;
                break;

              case 17:
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 23:
                _context.prev = 23;
                _context.prev = 24;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 26:
                _context.prev = 26;

                if (!_didIteratorError) {
                  _context.next = 29;
                  break;
                }

                throw _iteratorError;

              case 29:
                return _context.finish(26);

              case 30:
                return _context.finish(23);

              case 31:
                if (!(publicKeyBase64 === null)) {
                  _context.next = 33;
                  break;
                }

                throw new Error("Public key not found for CT with logId: ".concat(logId));

              case 33:
                asn1 = asn1js.fromBER((0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(publicKeyBase64)));

                if (!(asn1.offset === -1)) {
                  _context.next = 36;
                  break;
                }

                throw new Error("Incorrect key value for CT Log with logId: ".concat(logId));

              case 36:
                publicKeyInfo = new _PublicKeyInfo["default"]({
                  schema: asn1.result
                }); //endregion
                //region Initialize signed data block

                stream.appendChar(0x00); // sct_version

                stream.appendChar(0x00); // signature_type = certificate_timestamp

                timeBuffer = new ArrayBuffer(8);
                timeView = new Uint8Array(timeBuffer);
                baseArray = (0, _pvutils.utilToBase)(this.timestamp.valueOf(), 8);
                timeView.set(new Uint8Array(baseArray), 8 - baseArray.byteLength);
                stream.appendView(timeView);
                stream.appendUint16(dataType);
                if (dataType === 0) stream.appendUint24(data.byteLength);
                stream.appendView(new Uint8Array(data));
                stream.appendUint16(this.extensions.byteLength);
                if (this.extensions.byteLength !== 0) stream.appendView(new Uint8Array(this.extensions)); //endregion
                //region Perform verification

                return _context.abrupt("return", (0, _common.getEngine)().subtle.verifyWithPublicKey(stream._stream._buffer.slice(0, stream._length), {
                  valueBlock: {
                    valueHex: this.signature.toBER(false)
                  }
                }, publicKeyInfo, {
                  algorithmId: ""
                }, "SHA-256"));

              case 50:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 19, 23, 31], [24,, 26, 30]]);
      }));

      function verify(_x, _x2) {
        return _verify.apply(this, arguments);
      }

      return verify;
    }() //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "version":
          return 0;

        case "logID":
        case "extensions":
          return new ArrayBuffer(0);

        case "timestamp":
          return new Date(0);

        case "hashAlgorithm":
        case "signatureAlgorithm":
          return "";

        case "signature":
          return new asn1js.Any();

        default:
          throw new Error("Invalid member name for SignedCertificateTimestamp class: ".concat(memberName));
      }
    }
  }]);
  return SignedCertificateTimestamp;
}(); //**************************************************************************************

/**
 * Class from RFC6962
 */


exports.SignedCertificateTimestamp = SignedCertificateTimestamp;

var SignedCertificateTimestampList =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for SignedCertificateTimestampList class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function SignedCertificateTimestampList() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, SignedCertificateTimestampList);
    //region Internal properties of the object

    /**
     * @type {Array.<SignedCertificateTimestamp>}
     * @desc timestamps
     */
    this.timestamps = (0, _pvutils.getParametersValue)(parameters, "timestamps", SignedCertificateTimestampList.defaultValues("timestamps")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(SignedCertificateTimestampList, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Check the schema is valid
      if (schema instanceof asn1js.OctetString === false) throw new Error("Object's schema was not verified against input data for SignedCertificateTimestampList"); //endregion
      //region Get internal properties from parsed schema

      var seqStream = new _bytestreamjs.SeqStream({
        stream: new _bytestreamjs.ByteStream({
          buffer: schema.valueBlock.valueHex
        })
      });
      var dataLength = seqStream.getUint16();
      if (dataLength !== seqStream.length) throw new Error("Object's schema was not verified against input data for SignedCertificateTimestampList");

      while (seqStream.length) {
        this.timestamps.push(new SignedCertificateTimestamp({
          stream: seqStream
        }));
      } //endregion

    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Initial variables
      var stream = new _bytestreamjs.SeqStream();
      var overallLength = 0;
      var timestampsData = []; //endregion
      //region Get overall length

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.timestamps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var timestamp = _step2.value;
          var timestampStream = timestamp.toStream();
          timestampsData.push(timestampStream);
          overallLength += timestampStream.stream.buffer.byteLength;
        } //endregion

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      stream.appendUint16(overallLength); //region Set data from all timestamps

      for (var _i = 0, _timestampsData = timestampsData; _i < _timestampsData.length; _i++) {
        var _timestamp = _timestampsData[_i];
        stream.appendView(_timestamp.stream.view);
      } //endregion


      return new asn1js.OctetString({
        valueHex: stream.stream.buffer.slice(0)
      });
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        timestamps: Array.from(this.timestamps, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "timestamps":
          return [];

        default:
          throw new Error("Invalid member name for SignedCertificateTimestampList class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Compare values with default values for all class members
     * @param {string} memberName String name for a class member
     * @param {*} memberValue Value to compare with default value
     */

  }, {
    key: "compareWithDefault",
    value: function compareWithDefault(memberName, memberValue) {
      switch (memberName) {
        case "timestamps":
          return memberValue.length === 0;

        default:
          throw new Error("Invalid member name for SignedCertificateTimestampList class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * SignedCertificateTimestampList ::= OCTET STRING
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [optional]
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      if ("optional" in names === false) names.optional = false;
      return new asn1js.OctetString({
        name: names.blockName || "SignedCertificateTimestampList",
        optional: names.optional
      });
    }
  }]);
  return SignedCertificateTimestampList;
}(); //**************************************************************************************

/**
 * Verify SignedCertificateTimestamp for specific certificate content
 * @param {Certificate} certificate Certificate for which verification would be performed
 * @param {Certificate} issuerCertificate Certificate of the issuer of target certificate
 * @param {Object[]} logs Array of objects with information about each CT Log (like here: https://ct.grahamedgecombe.com/logs.json)
 * @param {String} logs.log_id Identifier of the CT Log encoded in BASE-64 format
 * @param {String} logs.key Public key of the CT Log encoded in BASE-64 format
 * @param {Number} [index=-1] Index of SignedCertificateTimestamp inside SignedCertificateTimestampList (for -1 would verify all)
 * @return {Array} Array of verification results
 */


exports["default"] = SignedCertificateTimestampList;

function verifySCTsForCertificate(_x3, _x4, _x5) {
  return _verifySCTsForCertificate.apply(this, arguments);
} //**********************************************************************************


function _verifySCTsForCertificate() {
  _verifySCTsForCertificate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(certificate, issuerCertificate, logs) {
    var index,
        parsedValue,
        tbs,
        issuerId,
        stream,
        preCert,
        crypto,
        i,
        verifyArray,
        _iteratorNormalCompletion3,
        _didIteratorError3,
        _iteratorError3,
        _iterator3,
        _step3,
        timestamp,
        verifyResult,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            index = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : -1;
            //region Initial variables
            parsedValue = null;
            stream = new _bytestreamjs.SeqStream();
            //endregion
            //region Get a "crypto" extension
            crypto = (0, _common.getCrypto)();

            if (!(typeof crypto === "undefined")) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", Promise.reject("Unable to create WebCrypto object"));

          case 6:
            i = 0;

          case 7:
            if (!(i < certificate.extensions.length)) {
              _context2.next = 19;
              break;
            }

            _context2.t0 = certificate.extensions[i].extnID;
            _context2.next = _context2.t0 === "1.3.6.1.4.1.11129.2.4.2" ? 11 : 16;
            break;

          case 11:
            parsedValue = certificate.extensions[i].parsedValue;

            if (!(parsedValue.timestamps.length === 0)) {
              _context2.next = 14;
              break;
            }

            throw new Error("Nothing to verify in the certificate");

          case 14:
            certificate.extensions.splice(i, 1);
            return _context2.abrupt("break", 16);

          case 16:
            i++;
            _context2.next = 7;
            break;

          case 19:
            if (!(parsedValue === null)) {
              _context2.next = 21;
              break;
            }

            throw new Error("No SignedCertificateTimestampList extension in the specified certificate");

          case 21:
            //endregion
            //region Prepare modifier TBS value
            tbs = certificate.encodeTBS().toBER(false); //endregion
            //region Initialize "issuer_key_hash" value

            _context2.next = 24;
            return crypto.digest({
              name: "SHA-256"
            }, new Uint8Array(issuerCertificate.subjectPublicKeyInfo.toSchema().toBER(false)));

          case 24:
            issuerId = _context2.sent;
            //endregion
            //region Make final "PreCert" value
            stream.appendView(new Uint8Array(issuerId));
            stream.appendUint24(tbs.byteLength);
            stream.appendView(new Uint8Array(tbs));
            preCert = stream._stream._buffer.slice(0, stream._length); //endregion
            //region Call verification function for specified index

            if (!(index === -1)) {
              _context2.next = 60;
              break;
            }

            verifyArray = [];
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context2.prev = 34;
            _iterator3 = parsedValue.timestamps[Symbol.iterator]();

          case 36:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context2.next = 45;
              break;
            }

            timestamp = _step3.value;
            _context2.next = 40;
            return timestamp.verify(logs, preCert, 1);

          case 40:
            verifyResult = _context2.sent;
            verifyArray.push(verifyResult);

          case 42:
            _iteratorNormalCompletion3 = true;
            _context2.next = 36;
            break;

          case 45:
            _context2.next = 51;
            break;

          case 47:
            _context2.prev = 47;
            _context2.t1 = _context2["catch"](34);
            _didIteratorError3 = true;
            _iteratorError3 = _context2.t1;

          case 51:
            _context2.prev = 51;
            _context2.prev = 52;

            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }

          case 54:
            _context2.prev = 54;

            if (!_didIteratorError3) {
              _context2.next = 57;
              break;
            }

            throw _iteratorError3;

          case 57:
            return _context2.finish(54);

          case 58:
            return _context2.finish(51);

          case 59:
            return _context2.abrupt("return", verifyArray);

          case 60:
            if (index >= parsedValue.timestamps.length) index = parsedValue.timestamps.length - 1;
            _context2.next = 63;
            return parsedValue.timestamps[index].verify(logs, preCert, 1);

          case 63:
            _context2.t2 = _context2.sent;
            return _context2.abrupt("return", [_context2.t2]);

          case 65:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[34, 47, 51, 59], [52,, 54, 58]]);
  }));
  return _verifySCTsForCertificate.apply(this, arguments);
}

},{"./PublicKeyInfo.js":58,"./common.js":66,"@babel/runtime/helpers/asyncToGenerator":3,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"@babel/runtime/regenerator":15,"asn1js":16,"bytestreamjs":18,"pvutils":20}],65:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _Attribute = _interopRequireDefault(require("./Attribute.js"));

//**************************************************************************************

/**
 * Class from RFC5280
 */
var SubjectDirectoryAttributes =
/*#__PURE__*/
function () {
  //**********************************************************************************

  /**
   * Constructor for SubjectDirectoryAttributes class
   * @param {Object} [parameters={}]
   * @param {Object} [parameters.schema] asn1js parsed value to initialize the class from
   */
  function SubjectDirectoryAttributes() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, SubjectDirectoryAttributes);
    //region Internal properties of the object

    /**
     * @type {Array.<Attribute>}
     * @desc attributes
     */
    this.attributes = (0, _pvutils.getParametersValue)(parameters, "attributes", SubjectDirectoryAttributes.defaultValues("attributes")); //endregion
    //region If input argument array contains "schema" for this object

    if ("schema" in parameters) this.fromSchema(parameters.schema); //endregion
  } //**********************************************************************************

  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */


  (0, _createClass2["default"])(SubjectDirectoryAttributes, [{
    key: "fromSchema",
    //**********************************************************************************

    /**
     * Convert parsed asn1js object into current class
     * @param {!Object} schema
     */
    value: function fromSchema(schema) {
      //region Clear input data first
      (0, _pvutils.clearProps)(schema, ["attributes"]); //endregion
      //region Check the schema is valid

      var asn1 = asn1js.compareSchema(schema, schema, SubjectDirectoryAttributes.schema({
        names: {
          attributes: "attributes"
        }
      }));
      if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for SubjectDirectoryAttributes"); //endregion
      //region Get internal properties from parsed schema

      this.attributes = Array.from(asn1.result.attributes, function (element) {
        return new _Attribute["default"]({
          schema: element
        });
      }); //endregion
    } //**********************************************************************************

    /**
     * Convert current object to asn1js object and set correct values
     * @returns {Object} asn1js object
     */

  }, {
    key: "toSchema",
    value: function toSchema() {
      //region Construct and return new ASN.1 schema for this object
      return new asn1js.Sequence({
        value: Array.from(this.attributes, function (element) {
          return element.toSchema();
        })
      }); //endregion
    } //**********************************************************************************

    /**
     * Convertion for the class to JSON object
     * @returns {Object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        attributes: Array.from(this.attributes, function (element) {
          return element.toJSON();
        })
      };
    } //**********************************************************************************

  }], [{
    key: "defaultValues",
    value: function defaultValues(memberName) {
      switch (memberName) {
        case "attributes":
          return [];

        default:
          throw new Error("Invalid member name for SubjectDirectoryAttributes class: ".concat(memberName));
      }
    } //**********************************************************************************

    /**
     * Return value of pre-defined ASN.1 schema for current class
     *
     * ASN.1 schema:
     * ```asn1
     * SubjectDirectoryAttributes ::= SEQUENCE SIZE (1..MAX) OF Attribute
     * ```
     *
     * @param {Object} parameters Input parameters for the schema
     * @returns {Object} asn1js schema object
     */

  }, {
    key: "schema",
    value: function schema() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /**
       * @type {Object}
       * @property {string} [blockName]
       * @property {string} [utcTimeName] Name for "utcTimeName" choice
       * @property {string} [generalTimeName] Name for "generalTimeName" choice
       */
      var names = (0, _pvutils.getParametersValue)(parameters, "names", {});
      return new asn1js.Sequence({
        name: names.blockName || "",
        value: [new asn1js.Repeated({
          name: names.attributes || "",
          value: _Attribute["default"].schema()
        })]
      });
    }
  }]);
  return SubjectDirectoryAttributes;
}(); //**************************************************************************************


exports["default"] = SubjectDirectoryAttributes;

},{"./Attribute.js":26,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}],66:[function(require,module,exports){
(function (process,global){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEngine = setEngine;
exports.getEngine = getEngine;
exports.getCrypto = getCrypto;
exports.getRandomValues = getRandomValues;
exports.getOIDByAlgorithm = getOIDByAlgorithm;
exports.getAlgorithmParameters = getAlgorithmParameters;
exports.createCMSECDSASignature = createCMSECDSASignature;
exports.stringPrep = stringPrep;
exports.createECDSASignatureFromCMS = createECDSASignatureFromCMS;
exports.getAlgorithmByOID = getAlgorithmByOID;
exports.getHashAlgorithm = getHashAlgorithm;
exports.kdfWithCounter = kdfWithCounter;
exports.kdf = kdf;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _CryptoEngine = _interopRequireDefault(require("./CryptoEngine.js"));

//**************************************************************************************
//region Crypto engine related function
//**************************************************************************************
var engine = {
  name: "none",
  crypto: null,
  subtle: null
}; //**************************************************************************************

function setEngine(name, crypto, subtle) {
  //region We are in Node
  // noinspection JSUnresolvedVariable
  if (typeof process !== "undefined" && "pid" in process && typeof global !== "undefined" && typeof window === "undefined") {
    // noinspection ES6ModulesDependencies, JSUnresolvedVariable
    if (typeof global[process.pid] === "undefined") {
      // noinspection JSUnresolvedVariable
      global[process.pid] = {};
    } else {
      // noinspection JSUnresolvedVariable
      if ((0, _typeof2["default"])(global[process.pid]) !== "object") {
        // noinspection JSUnresolvedVariable
        throw new Error("Name global.".concat(process.pid, " already exists and it is not an object"));
      }
    } // noinspection JSUnresolvedVariable


    if (typeof global[process.pid].pkijs === "undefined") {
      // noinspection JSUnresolvedVariable
      global[process.pid].pkijs = {};
    } else {
      // noinspection JSUnresolvedVariable
      if ((0, _typeof2["default"])(global[process.pid].pkijs) !== "object") {
        // noinspection JSUnresolvedVariable
        throw new Error("Name global.".concat(process.pid, ".pkijs already exists and it is not an object"));
      }
    } // noinspection JSUnresolvedVariable


    global[process.pid].pkijs.engine = {
      name: name,
      crypto: crypto,
      subtle: subtle
    };
  } //endregion
  //region We are in browser
  else {
      engine = {
        name: name,
        crypto: crypto,
        subtle: subtle
      };
    } //endregion

} //**************************************************************************************


function getEngine() {
  //region We are in Node
  // noinspection JSUnresolvedVariable
  if (typeof process !== "undefined" && "pid" in process && typeof global !== "undefined" && typeof window === "undefined") {
    var _engine;

    try {
      // noinspection JSUnresolvedVariable
      _engine = global[process.pid].pkijs.engine;
    } catch (ex) {
      throw new Error("Please call \"setEngine\" before call to \"getEngine\"");
    }

    return _engine;
  } //endregion


  return engine;
} //**************************************************************************************


(function initCryptoEngine() {
  if (typeof self !== "undefined") {
    if ("crypto" in self) {
      var engineName = "webcrypto";
      /**
       * Standard crypto object
       * @type {Object}
       * @property {Object} [webkitSubtle] Subtle object from Apple
       */

      var cryptoObject = self.crypto;
      var subtleObject; // Apple Safari support

      if ("webkitSubtle" in self.crypto) {
        try {
          subtleObject = self.crypto.webkitSubtle;
        } catch (ex) {
          subtleObject = self.crypto.subtle;
        }

        engineName = "safari";
      }

      if ("subtle" in self.crypto) subtleObject = self.crypto.subtle;

      if (typeof subtleObject === "undefined") {
        engine = {
          name: engineName,
          crypto: cryptoObject,
          subtle: null
        };
      } else {
        engine = {
          name: engineName,
          crypto: cryptoObject,
          subtle: new _CryptoEngine["default"]({
            name: engineName,
            crypto: self.crypto,
            subtle: subtleObject
          })
        };
      }
    }
  }

  setEngine(engine.name, engine.crypto, engine.subtle);
})(); //**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of common functions
//**************************************************************************************

/**
 * Get crypto subtle from current "crypto engine" or "undefined"
 * @returns {({decrypt, deriveKey, digest, encrypt, exportKey, generateKey, importKey, sign, unwrapKey, verify, wrapKey}|null)}
 */


function getCrypto() {
  var _engine = getEngine();

  if (_engine.subtle !== null) return _engine.subtle;
  return undefined;
} //**************************************************************************************

/**
 * Initialize input Uint8Array by random values (with help from current "crypto engine")
 * @param {!Uint8Array} view
 * @returns {*}
 */


function getRandomValues(view) {
  return getEngine().subtle.getRandomValues(view);
} //**************************************************************************************

/**
 * Get OID for each specific algorithm
 * @param {Object} algorithm
 * @returns {string}
 */


function getOIDByAlgorithm(algorithm) {
  return getEngine().subtle.getOIDByAlgorithm(algorithm);
} //**************************************************************************************

/**
 * Get default algorithm parameters for each kind of operation
 * @param {string} algorithmName Algorithm name to get common parameters for
 * @param {string} operation Kind of operation: "sign", "encrypt", "generatekey", "importkey", "exportkey", "verify"
 * @returns {*}
 */


function getAlgorithmParameters(algorithmName, operation) {
  return getEngine().subtle.getAlgorithmParameters(algorithmName, operation);
} //**************************************************************************************

/**
 * Create CMS ECDSA signature from WebCrypto ECDSA signature
 * @param {ArrayBuffer} signatureBuffer WebCrypto result of "sign" function
 * @returns {ArrayBuffer}
 */


function createCMSECDSASignature(signatureBuffer) {
  //region Initial check for correct length
  if (signatureBuffer.byteLength % 2 !== 0) return new ArrayBuffer(0); //endregion
  //region Initial variables

  var length = signatureBuffer.byteLength / 2; // There are two equal parts inside incoming ArrayBuffer

  var rBuffer = new ArrayBuffer(length);
  var rView = new Uint8Array(rBuffer);
  rView.set(new Uint8Array(signatureBuffer, 0, length));
  var rInteger = new asn1js.Integer({
    valueHex: rBuffer
  });
  var sBuffer = new ArrayBuffer(length);
  var sView = new Uint8Array(sBuffer);
  sView.set(new Uint8Array(signatureBuffer, length, length));
  var sInteger = new asn1js.Integer({
    valueHex: sBuffer
  }); //endregion

  return new asn1js.Sequence({
    value: [rInteger.convertToDER(), sInteger.convertToDER()]
  }).toBER(false);
} //**************************************************************************************

/**
 * String preparation function. In a future here will be realization of algorithm from RFC4518
 * @param {string} inputString JavaScript string. As soon as for each ASN.1 string type we have a specific transformation function here we will work with pure JavaScript string
 * @returns {string} Formated string
 */


function stringPrep(inputString) {
  //region Initial variables
  var isSpace = false;
  var cuttedResult = ""; //endregion

  var result = inputString.trim(); // Trim input string
  //region Change all sequence of SPACE down to SPACE char

  for (var i = 0; i < result.length; i++) {
    if (result.charCodeAt(i) === 32) {
      if (isSpace === false) isSpace = true;
    } else {
      if (isSpace) {
        cuttedResult += " ";
        isSpace = false;
      }

      cuttedResult += result[i];
    }
  } //endregion


  return cuttedResult.toLowerCase();
} //**************************************************************************************

/**
 * Create a single ArrayBuffer from CMS ECDSA signature
 * @param {Sequence} cmsSignature ASN.1 SEQUENCE contains CMS ECDSA signature
 * @returns {ArrayBuffer}
 */


function createECDSASignatureFromCMS(cmsSignature) {
  //region Check input variables
  if (cmsSignature instanceof asn1js.Sequence === false) return new ArrayBuffer(0);
  if (cmsSignature.valueBlock.value.length !== 2) return new ArrayBuffer(0);
  if (cmsSignature.valueBlock.value[0] instanceof asn1js.Integer === false) return new ArrayBuffer(0);
  if (cmsSignature.valueBlock.value[1] instanceof asn1js.Integer === false) return new ArrayBuffer(0); //endregion

  var rValue = cmsSignature.valueBlock.value[0].convertFromDER();
  var sValue = cmsSignature.valueBlock.value[1].convertFromDER(); //region Check the lengths of two parts are equal

  switch (true) {
    case rValue.valueBlock.valueHex.byteLength < sValue.valueBlock.valueHex.byteLength:
      {
        if (sValue.valueBlock.valueHex.byteLength - rValue.valueBlock.valueHex.byteLength !== 1) throw new Error("Incorrect DER integer decoding");
        var correctedLength = sValue.valueBlock.valueHex.byteLength;
        var rValueView = new Uint8Array(rValue.valueBlock.valueHex);
        var rValueBufferCorrected = new ArrayBuffer(correctedLength);
        var rValueViewCorrected = new Uint8Array(rValueBufferCorrected);
        rValueViewCorrected.set(rValueView, 1);
        rValueViewCorrected[0] = 0x00; // In order to be sure we do not have any garbage here

        return (0, _pvutils.utilConcatBuf)(rValueBufferCorrected, sValue.valueBlock.valueHex);
      }

    case rValue.valueBlock.valueHex.byteLength > sValue.valueBlock.valueHex.byteLength:
      {
        if (rValue.valueBlock.valueHex.byteLength - sValue.valueBlock.valueHex.byteLength !== 1) throw new Error("Incorrect DER integer decoding");
        var _correctedLength = rValue.valueBlock.valueHex.byteLength;
        var sValueView = new Uint8Array(sValue.valueBlock.valueHex);
        var sValueBufferCorrected = new ArrayBuffer(_correctedLength);
        var sValueViewCorrected = new Uint8Array(sValueBufferCorrected);
        sValueViewCorrected.set(sValueView, 1);
        sValueViewCorrected[0] = 0x00; // In order to be sure we do not have any garbage here

        return (0, _pvutils.utilConcatBuf)(rValue.valueBlock.valueHex, sValueBufferCorrected);
      }

    default:
      {
        //region In case we have equal length and the length is not even with 2
        if (rValue.valueBlock.valueHex.byteLength % 2) {
          var _correctedLength2 = rValue.valueBlock.valueHex.byteLength + 1;

          var _rValueView = new Uint8Array(rValue.valueBlock.valueHex);

          var _rValueBufferCorrected = new ArrayBuffer(_correctedLength2);

          var _rValueViewCorrected = new Uint8Array(_rValueBufferCorrected);

          _rValueViewCorrected.set(_rValueView, 1);

          _rValueViewCorrected[0] = 0x00; // In order to be sure we do not have any garbage here

          var _sValueView = new Uint8Array(sValue.valueBlock.valueHex);

          var _sValueBufferCorrected = new ArrayBuffer(_correctedLength2);

          var _sValueViewCorrected = new Uint8Array(_sValueBufferCorrected);

          _sValueViewCorrected.set(_sValueView, 1);

          _sValueViewCorrected[0] = 0x00; // In order to be sure we do not have any garbage here

          return (0, _pvutils.utilConcatBuf)(_rValueBufferCorrected, _sValueBufferCorrected);
        } //endregion

      }
  } //endregion


  return (0, _pvutils.utilConcatBuf)(rValue.valueBlock.valueHex, sValue.valueBlock.valueHex);
} //**************************************************************************************

/**
 * Get WebCrypto algorithm by wel-known OID
 * @param {string} oid well-known OID to search for
 * @returns {Object}
 */


function getAlgorithmByOID(oid) {
  return getEngine().subtle.getAlgorithmByOID(oid);
} //**************************************************************************************

/**
 * Getting hash algorithm by signature algorithm
 * @param {AlgorithmIdentifier} signatureAlgorithm Signature algorithm
 * @returns {string}
 */


function getHashAlgorithm(signatureAlgorithm) {
  return getEngine().subtle.getHashAlgorithm(signatureAlgorithm);
} //**************************************************************************************

/**
 * ANS X9.63 Key Derivation Function having a "Counter" as a parameter
 * @param {string} hashFunction Used hash function
 * @param {ArrayBuffer} Zbuffer ArrayBuffer containing ECDH shared secret to derive from
 * @param {number} Counter
 * @param {ArrayBuffer} SharedInfo Usually DER encoded "ECC_CMS_SharedInfo" structure
 */


function kdfWithCounter(hashFunction, Zbuffer, Counter, SharedInfo) {
  //region Check of input parameters
  switch (hashFunction.toUpperCase()) {
    case "SHA-1":
    case "SHA-256":
    case "SHA-384":
    case "SHA-512":
      break;

    default:
      return Promise.reject("Unknown hash function: ".concat(hashFunction));
  }

  if (Zbuffer instanceof ArrayBuffer === false) return Promise.reject("Please set \"Zbuffer\" as \"ArrayBuffer\"");
  if (Zbuffer.byteLength === 0) return Promise.reject("\"Zbuffer\" has zero length, error");
  if (SharedInfo instanceof ArrayBuffer === false) return Promise.reject("Please set \"SharedInfo\" as \"ArrayBuffer\"");
  if (Counter > 255) return Promise.reject("Please set \"Counter\" variable to value less or equal to 255"); //endregion
  //region Initial variables

  var counterBuffer = new ArrayBuffer(4);
  var counterView = new Uint8Array(counterBuffer);
  counterView[0] = 0x00;
  counterView[1] = 0x00;
  counterView[2] = 0x00;
  counterView[3] = Counter;
  var combinedBuffer = new ArrayBuffer(0); //endregion
  //region Get a "crypto" extension

  var crypto = getCrypto();
  if (typeof crypto === "undefined") return Promise.reject("Unable to create WebCrypto object"); //endregion
  //region Create a combined ArrayBuffer for digesting

  combinedBuffer = (0, _pvutils.utilConcatBuf)(combinedBuffer, Zbuffer);
  combinedBuffer = (0, _pvutils.utilConcatBuf)(combinedBuffer, counterBuffer);
  combinedBuffer = (0, _pvutils.utilConcatBuf)(combinedBuffer, SharedInfo); //endregion
  //region Return digest of combined ArrayBuffer and information about current counter

  return crypto.digest({
    name: hashFunction
  }, combinedBuffer).then(function (result) {
    return {
      counter: Counter,
      result: result
    };
  }); //endregion
} //**************************************************************************************

/**
 * ANS X9.63 Key Derivation Function
 * @param {string} hashFunction Used hash function
 * @param {ArrayBuffer} Zbuffer ArrayBuffer containing ECDH shared secret to derive from
 * @param {number} keydatalen Length (!!! in BITS !!!) of used kew derivation function
 * @param {ArrayBuffer} SharedInfo Usually DER encoded "ECC_CMS_SharedInfo" structure
 */


function kdf(hashFunction, Zbuffer, keydatalen, SharedInfo) {
  //region Initial variables
  var hashLength = 0;
  var maxCounter = 1;
  var kdfArray = []; //endregion
  //region Check of input parameters

  switch (hashFunction.toUpperCase()) {
    case "SHA-1":
      hashLength = 160; // In bits

      break;

    case "SHA-256":
      hashLength = 256; // In bits

      break;

    case "SHA-384":
      hashLength = 384; // In bits

      break;

    case "SHA-512":
      hashLength = 512; // In bits

      break;

    default:
      return Promise.reject("Unknown hash function: ".concat(hashFunction));
  }

  if (Zbuffer instanceof ArrayBuffer === false) return Promise.reject("Please set \"Zbuffer\" as \"ArrayBuffer\"");
  if (Zbuffer.byteLength === 0) return Promise.reject("\"Zbuffer\" has zero length, error");
  if (SharedInfo instanceof ArrayBuffer === false) return Promise.reject("Please set \"SharedInfo\" as \"ArrayBuffer\""); //endregion
  //region Calculated maximum value of "Counter" variable

  var quotient = keydatalen / hashLength;

  if (Math.floor(quotient) > 0) {
    maxCounter = Math.floor(quotient);
    if (quotient - maxCounter > 0) maxCounter++;
  } //endregion
  //region Create an array of "kdfWithCounter"


  for (var i = 1; i <= maxCounter; i++) {
    kdfArray.push(kdfWithCounter(hashFunction, Zbuffer, i, SharedInfo));
  } //endregion
  //region Return combined digest with specified length


  return Promise.all(kdfArray).then(function (incomingResult) {
    //region Initial variables
    var combinedBuffer = new ArrayBuffer(0);
    var currentCounter = 1;
    var found = true; //endregion
    //region Combine all buffer together

    while (found) {
      found = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = incomingResult[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var result = _step.value;

          if (result.counter === currentCounter) {
            combinedBuffer = (0, _pvutils.utilConcatBuf)(combinedBuffer, result.result);
            found = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      currentCounter++;
    } //endregion
    //region Create output buffer with specified length


    keydatalen >>= 3; // Divide by 8 since "keydatalen" is in bits

    if (combinedBuffer.byteLength > keydatalen) {
      var newBuffer = new ArrayBuffer(keydatalen);
      var newView = new Uint8Array(newBuffer);
      var combinedView = new Uint8Array(combinedBuffer);

      for (var _i = 0; _i < keydatalen; _i++) {
        newView[_i] = combinedView[_i];
      }

      return newBuffer;
    }

    return combinedBuffer; // Since the situation when "combinedBuffer.byteLength < keydatalen" here we have only "combinedBuffer.byteLength === keydatalen"
    //endregion
  }); //endregion
} //**************************************************************************************
//endregion
//**************************************************************************************

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./CryptoEngine.js":34,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"@babel/runtime/helpers/typeof":14,"_process":19,"asn1js":16,"pvutils":20}],67:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var asn1js = _interopRequireWildcard(require("asn1js"));

var _pvutils = require("pvutils");

var _common = require("./helpers/common.js");

var _CertificationRequest = _interopRequireDefault(require("./CertificationRequest.js"));

var _AttributeTypeAndValue = _interopRequireDefault(require("./helpers/AttributeTypeAndValue.js"));

var _Attribute = _interopRequireDefault(require("./helpers/Attribute.js"));

var _Extension = _interopRequireDefault(require("./helpers/Extension.js"));

var _Extensions = _interopRequireDefault(require("./helpers/Extensions.js"));

var _RSAPublicKey = _interopRequireDefault(require("./helpers/RSAPublicKey.js"));

var _GeneralNames = _interopRequireDefault(require("./helpers/GeneralNames.js"));

var _GeneralName = _interopRequireDefault(require("./helpers/GeneralName.js"));

/* eslint-disable no-undef,no-unreachable */
var pkcs10Buffer = new ArrayBuffer(0);
var hashAlg = "SHA-1";
var signAlg = "RSASSA-PKCS1-V1_5"; //Auxiliary functions

function formatPEM(pemString) {
  var stringLength = pemString.length;
  var resultString = "";

  for (var i = 0, count = 0; i < stringLength; i++, count++) {
    if (count > 63) {
      resultString = "".concat(resultString, "\r\n");
      count = 0;
    }

    resultString = "".concat(resultString).concat(pemString[i]);
  }

  return resultString;
} //Create PKCS#10


function createPKCS10Internal() {
  //Initial variables
  var sequence = Promise.resolve();
  var pkcs10 = new _CertificationRequest["default"]();
  var publicKey;
  var privateKey; //Get a "crypto" extension

  var crypto = (0, _common.getCrypto)();
  if (typeof crypto === "undefined") return Promise.reject("No WebCrypto extension found"); //Put a static values

  pkcs10.version = 0;
  pkcs10.subject.typesAndValues.push(new _AttributeTypeAndValue["default"]({
    type: "2.5.4.6",
    value: new asn1js.PrintableString({
      value: "RU"
    })
  }));
  pkcs10.subject.typesAndValues.push(new _AttributeTypeAndValue["default"]({
    type: "2.5.4.3",
    value: new asn1js.Utf8String({
      value: "Simple test (простой тест)"
    })
  }));
  var altNames = new _GeneralNames["default"]({
    names: [new _GeneralName["default"]({
      type: 1,
      // rfc822Name
      value: "email@address.com"
    }), new _GeneralName["default"]({
      type: 2,
      // dNSName
      value: "www.domain.com"
    }), new _GeneralName["default"]({
      type: 2,
      // dNSName
      value: "www.anotherdomain.com"
    }), new _GeneralName["default"]({
      type: 7,
      // iPAddress
      value: new asn1js.OctetString({
        valueHex: new Uint8Array([0xC0, 0xA8, 0x00, 0x01]).buffer
      })
    })]
  });
  pkcs10.attributes = []; //Create a new key pair

  sequence = sequence.then(function () {
    //Get default algorithm parameters for key generation
    var algorithm = (0, _common.getAlgorithmParameters)(signAlg, "generatekey");
    if ("hash" in algorithm.algorithm) algorithm.algorithm.hash.name = hashAlg;
    return crypto.generateKey(algorithm.algorithm, true, algorithm.usages);
  }); //Store new key in an interim variables

  sequence = sequence.then(function (keyPair) {
    publicKey = keyPair.publicKey;
    privateKey = keyPair.privateKey;
  }, function (error) {
    return Promise.reject("Error during key generation: ".concat(error));
  }); //Exporting public key into "subjectPublicKeyInfo" value of PKCS#10

  sequence = sequence.then(function () {
    return pkcs10.subjectPublicKeyInfo.importKey(publicKey);
  }); //SubjectKeyIdentifier

  sequence = sequence.then(function () {
    return crypto.digest({
      name: "SHA-1"
    }, pkcs10.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex);
  }).then(function (result) {
    pkcs10.attributes.push(new _Attribute["default"]({
      type: "1.2.840.113549.1.9.14",
      // pkcs-9-at-extensionRequest
      values: [new _Extensions["default"]({
        extensions: [new _Extension["default"]({
          extnID: "2.5.29.14",
          critical: false,
          extnValue: new asn1js.OctetString({
            valueHex: result
          }).toBER(false)
        }), new _Extension["default"]({
          extnID: "2.5.29.17",
          critical: false,
          extnValue: altNames.toSchema().toBER(false)
        }), new _Extension["default"]({
          extnID: "1.2.840.113549.1.9.7",
          critical: false,
          extnValue: new asn1js.PrintableString({
            value: "passwordChallenge"
          }).toBER(false)
        })]
      }).toSchema()]
    }));
  }); //Signing final PKCS#10 request

  sequence = sequence.then(function () {
    return pkcs10.sign(privateKey, hashAlg);
  }, function (error) {
    return Promise.reject("Error during exporting public key: ".concat(error));
  });
  return sequence.then(function () {
    pkcs10Buffer = pkcs10.toSchema().toBER(false);
  }, function (error) {
    return Promise.reject("Error signing PKCS#10: ".concat(error));
  });
} //Create PKCS#10


function createPKCS10() {
  return Promise.resolve().then(function () {
    return createPKCS10Internal();
  }).then(function () {
    var resultString = "-----BEGIN CERTIFICATE REQUEST-----\r\n";
    resultString = "".concat(resultString).concat(formatPEM((0, _pvutils.toBase64)((0, _pvutils.arrayBufferToString)(pkcs10Buffer))));
    resultString = "".concat(resultString, "\r\n-----END CERTIFICATE REQUEST-----\r\n");
    document.getElementById("pem-text-block").value = resultString;
  });
} //Verify existing PKCS#10


function verifyPKCS10Internal() {
  //region Decode existing PKCS#10
  var asn1 = asn1js.fromBER(pkcs10Buffer);
  var pkcs10 = new _CertificationRequest["default"]({
    schema: asn1.result
  }); //region Verify PKCS#10

  return pkcs10.verify();
}

function verifyPKCS10() {
  return Promise.resolve().then(function () {
    pkcs10Buffer = (0, _pvutils.stringToArrayBuffer)((0, _pvutils.fromBase64)(document.getElementById("pem-text-block").value.replace(/(-----(BEGIN|END) CERTIFICATE REQUEST-----|\n)/g, "")));
  }).then(function () {
    return verifyPKCS10Internal();
  }).then(function (result) {
    alert("Verification passed: ".concat(result));
  }, function (error) {
    alert("Error during verification: ".concat(error));
  });
}

function handleHashAlgOnChange() {
  var hashOption = document.getElementById("hashAlgorithm").value;

  switch (hashOption) {
    case "alg_SHA1":
      hashAlg = "sha-1";
      break;

    case "alg_SHA256":
      hashAlg = "sha-256";
      break;

    case "alg_SHA384":
      hashAlg = "sha-384";
      break;

    case "alg_SHA512":
      hashAlg = "sha-512";
      break;

    default:
  }
}

function handleSignAlgOnChange() {
  var signOption = document.getElementById("signAlgorithm").value;

  switch (signOption) {
    case "alg_RSA15":
      signAlg = "RSASSA-PKCS1-V1_5";
      break;

    case "alg_RSA2":
      signAlg = "RSA-PSS";
      break;

    case "alg_ECDSA":
      signAlg = "ECDSA";
      break;

    default:
  }
}

window.createPKCS10 = createPKCS10;
window.verifyPKCS10 = verifyPKCS10;
window.handleHashAlgOnChange = handleHashAlgOnChange;
window.handleSignAlgOnChange = handleSignAlgOnChange;

},{"./CertificationRequest.js":22,"./helpers/Attribute.js":26,"./helpers/AttributeTypeAndValue.js":27,"./helpers/Extension.js":40,"./helpers/Extensions.js":41,"./helpers/GeneralName.js":42,"./helpers/GeneralNames.js":43,"./helpers/RSAPublicKey.js":61,"./helpers/common.js":66,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/interopRequireWildcard":7,"asn1js":16,"pvutils":20}]},{},[67]);
