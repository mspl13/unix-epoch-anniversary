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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "main.css";

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["c"] = updateCalculatedValues;
/* harmony export (immutable) */ __webpack_exports__["b"] = updateTimestampDisplay;
/* harmony export (immutable) */ __webpack_exports__["a"] = getNextEvent;


// DOM elements used in this javascript file
const domCalculatedDays = document.getElementById("uea-calculated__days");
const domCalculatedHours = document.getElementById("uea-calculated__hours");
const domCalculatedMinutes = document.getElementById("uea-calculated__minutes");

// The next timestamp goal in seconds
const nextTimestampGoal = getNextEvent() || 0;

/**
 * Updates the calculated values DOM elements to the current
 * calculated values.
 * TODO: only temp
 */
function updateCalculatedValues() {
  // Real unix timestamp is in seconds, not milliseconds (each day 86400 seconds are added (according to Wikipedia)
  let countdownTime = nextTimestampGoal - Math.floor(Date.now() / 1000);

  // Calculated manually because UTC is relative
  let calculatedDays = Math.floor(countdownTime / 60 / 60 / 24);
  let calculatedHours = Math.floor(countdownTime / 60 / 60 - (calculatedDays * 24));
  let calculatedMinutes = Math.floor(countdownTime / 60) - (calculatedHours * 60) - (calculatedDays * 24 * 60);

  domCalculatedDays.innerHTML = calculatedDays;
  domCalculatedHours.innerHTML = calculatedHours;
  domCalculatedMinutes.innerHTML = calculatedMinutes;
}

/**
 * Updates the inner HTML of a given DOM element with the
 * current countdown timestamp
 * 
 * @param {element} domTimestamp 
 */
function updateTimestampDisplay(domTimestamp) {
  domTimestamp.innerHTML = nextTimestampGoal - Math.floor(Date.now() / 1000);
}

/**
 * Returns the next event from the event array. If no new
 * event is available to track, the function will return null.
 */
function getNextEvent() {
  for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__events__["a" /* ueaEvents */].length; i++) {
    let element = __WEBPACK_IMPORTED_MODULE_0__events__["a" /* ueaEvents */][i];
    
    // If the event timestamp is smaller then the current one
    if (element["timestamp"] > parseInt(Date.now() / 1000)) {
      return element["timestamp"];
    }
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ueaEvents = [
  // Test event
  {
    "timestamp": 1490779300,
    "text": "foobar"
  },

  // Next "half billennium"
  {
    "timestamp": 1500000000,
    "text": "foobar"
  },

  // Next billennium
  {
    "timestamp": 2000000000,
    "text": "foobar"
  },

  // End of (32-bit) time
  {
    "timestamp": 2147483647,
    "text": "foobar"
  },
]
/* harmony export (immutable) */ __webpack_exports__["a"] = ueaEvents;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timestamp__ = __webpack_require__(2);


const index = __webpack_require__(0);
const style = __webpack_require__(1);

// The DOM timestamp display element
const domTimestamp = document.getElementById("uea-timestamp");

// Set the DOM timestamp goal display elements
let nextEventTimestamp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timestamp__["a" /* getNextEvent */])();
const nextEventDate = new Date(nextEventTimestamp * 1000).toUTCString();

document.getElementById("uea-timestamp-goal").innerHTML = nextEventTimestamp;
document.getElementById("uea-timestamp-goal__date").innerHTML = nextEventDate;

// Refresh certain DOM elements to ensure a live counter
// TODO: execute setInterval without initial wait
let timerInterval = setInterval(() => {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timestamp__["b" /* updateTimestampDisplay */])(domTimestamp);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timestamp__["c" /* updateCalculatedValues */])();
}, 1000);


/***/ })
/******/ ]);