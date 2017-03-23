/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ua = __webpack_require__(2);

Object.defineProperty(exports, 'getAppUA', {
  enumerable: true,
  get: function get() {
    return _ua.getAppUA;
  }
});
Object.defineProperty(exports, 'compareVersion', {
  enumerable: true,
  get: function get() {
    return _ua.compareVersion;
  }
});

var _location = __webpack_require__(1);

Object.defineProperty(exports, 'isDev', {
  enumerable: true,
  get: function get() {
    return _location.isDev;
  }
});

var _date = __webpack_require__(4);

Object.defineProperty(exports, 'getDateInfo', {
  enumerable: true,
  get: function get() {
    return _date.getDateInfo;
  }
});
Object.defineProperty(exports, 'computationDay', {
  enumerable: true,
  get: function get() {
    return _date.computationDay;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDev = isDev;
/**
 * Created by lamho on 2017/3/23.
 */
/**
 * 判断是否为测试环境
 */
function isDev() {
    var host = window.location.host;
    if (host == 'm-dev.zuzuche.com') {
        return true;
    } else {
        return false;
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAppUA = getAppUA;
exports.compareVersion = compareVersion;


var obj = {
    type: '',
    version: ''
};
var reg = /\w+\.+\w+\.+\w+/;

/**
 * 获取app的版本号和设备类型
 */
function getAppUA() {
    var ua = window.navigator.userAgent.toLocaleLowerCase();
    var IOSUA = 'zzcios';
    var AndroidUA = 'zzcandroid';

    obj.type = ua.indexOf(IOSUA) != -1 ? 'ios' : ua.indexOf(AndroidUA) != -1 ? 'android' : null;

    if (obj.type == 'ios') {
        var text = ua.split('/')[1];
        obj.version = text.match(reg)[0];
    } else if (obj.type == 'android') {
        obj.version = ua.split('/')[1];
    } else {
        obj.version = null;
    }

    return obj;
}

/**
 * 比较版本号
 * @param targetVersion  --  传入目标版本号
 * 如果当前版本号大于传入版本号返回true否则false
 */
function compareVersion(targetVersion) {

    if (!reg.test(targetVersion)) {
        console.error('版本号格式不对，格式："5.1.1"');
        return;
    }

    var targetVersionArr = targetVersion.split('.'),
        currVersionArr = obj.version.split('.');

    for (var i = 0; i < currVersionArr.length; i++) {
        if (parseInt(currVersionArr[i]) < parseInt(targetVersionArr[i])) {
            return false;
        }
    }
    return true;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(0);

// var uaData = getAppUA();

// console.log(uaData);

// console.log(compareVersion('5.12.1'));

// console.log(isDev());

console.log((0, _lib.getDateInfo)(new Date()));
console.log((0, _lib.computationDay)(1490262698124, new Date()));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDateInfo = getDateInfo;
exports.computationDay = computationDay;
/**
 * Created by lamho on 2017/3/23.
 */

/**
 * 获取日期的所有参数
 * @param date  --  时间，可以为毫秒或者时间对象
 *
 * **/

function getDateInfo(date) {
    var dateInfo = new Date(date);
    if (dateInfo == 'Invalid Date') {
        console.error('请输入正确的时间毫秒数，或者时间对象');
        return false;
    }

    var data = {
        year: dateInfo.getFullYear(),
        month: dateInfo.getMonth() + 1 < 10 ? '0' + (dateInfo.getMonth() + 1) : dateInfo.getMonth() + 1,
        day: dateInfo.getDate() < 10 ? '0' + dateInfo.getDate() : dateInfo.getDate(),
        hour: dateInfo.getHours() < 10 ? '0' + dateInfo.getHours() : dateInfo.getHours(),
        minute: dateInfo.getMinutes() < 10 ? '0' + dateInfo.getMinutes() : dateInfo.getMinutes(),
        second: dateInfo.getSeconds() < 10 ? '0' + dateInfo.getSeconds() : dateInfo.getSeconds(),
        millisecond: dateInfo.getMilliseconds(),
        time: dateInfo.getTime(),
        week: dateInfo.getDay()
    };

    return data;
}

/**
 * 计算天数
 * @param currDate  --  当前时间
 * @param targetDate  --  目标时间
 *
 * **/

function computationDay(currDate, targetDate) {

    var cd = new Date(currDate),
        td = new Date(targetDate);

    if (cd == 'Invalid Date') {
        console.error('请输入正确的当前时间');
        return false;
    }
    if (td == 'Invalid Date') {
        console.error('请输入正确的目标时间');
        return false;
    }

    var fristTime = cd > td ? cd : td,
        secondTime = cd > td ? td : cd;

    var result = fristTime.getTime() - secondTime.getTime();
    result = parseInt(result) / 1000 / 60 / 60 / 24;
    return result;
}

/***/ })
/******/ ]);