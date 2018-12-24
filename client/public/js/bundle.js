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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const onSecond = function() {\n  const target = new Date(2019,2,29,23,0,0);\n  const now = new Date();\n\n  const diff = target - now;\n  const diff_secs = diff/1000.0;\n  const diff_mins = diff_secs/60.0;\n  const diff_hours = diff_mins/60.0;\n  const diff_days = diff_hours/24.0;\n\n  // whole days\n  const whole_days = parseInt(diff_days);\n\n  const fractional_days = diff_days - whole_days;\n\n  // whole hours\n  const whole_hours = parseInt(((fractional_days)*86400)/(60.0*60.0));\n\n  const diffAfterHours = diff_secs - ((whole_days*86400)+(whole_hours*3600))\n  const whole_mins = parseInt(diffAfterHours/60.0);\n\n  const whole_seconds = parseInt(diffAfterHours - (whole_mins*60.0));\n  console.log(`${whole_days} Days ${whole_hours} Hours ${whole_mins} Mins ${whole_seconds} secs`);\n\n  // as there's less than 100 days to brexit, just need 2 digits even for days\n\n  const days0 = parseInt(whole_days/10);\n  const days1 = parseInt(whole_days%10);\n  const hours0 = parseInt(whole_hours/10);\n  const hours1 = parseInt(whole_hours%10);\n  const mins0 = parseInt(whole_mins/10);\n  const mins1 = parseInt(whole_mins%10);\n  const secs0 = parseInt(whole_seconds/10);\n  const secs1 = parseInt(whole_seconds%10);\n\n  const digits = [days0,days1,hours0,hours1,mins0,mins1,secs0,secs1];\n  console.log(digits);\n\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log(\"DOM has loaded\");\n  const t=setInterval(onSecond,1000);\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ })

/******/ });