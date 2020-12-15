define(["@grafana/data","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SimplePanel.tsx":
/*!*************************!*\
  !*** ./SimplePanel.tsx ***!
  \*************************/
/*! exports provided: SimplePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanel", function() { return SimplePanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var colorGray = '#202226';
var colorGreen = '#73bf69';
var SimplePanel = function SimplePanel(_a) {
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height;
  var firstColor;
  var secondColor;
  var thirdColor;

  switch (options.firstColor) {
    case 'red':
      firstColor = '#ed485b';
      break;

    case 'green':
      firstColor = '#73bf69';
      break;

    case 'blue':
      firstColor = '#5794f2';
      break;

    case 'orange':
      firstColor = '#f3973e';
      break;

    case 'purple':
      firstColor = '#b877d9';
      break;

    case 'yellow':
      firstColor = '#fadf4b';
      break;
  }

  switch (options.secondColor) {
    case 'red':
      secondColor = '#ed485b';
      break;

    case 'green':
      secondColor = '#73bf69';
      break;

    case 'blue':
      secondColor = '#5794f2';
      break;

    case 'orange':
      secondColor = '#f3973e';
      break;

    case 'purple':
      secondColor = '#b877d9';
      break;

    case 'yellow':
      secondColor = '#fadf4b';
      break;
  }

  switch (options.thirdColor) {
    case 'red':
      thirdColor = '#ed485b';
      break;

    case 'green':
      thirdColor = '#73bf69';
      break;

    case 'blue':
      thirdColor = '#5794f2';
      break;

    case 'orange':
      thirdColor = '#f3973e';
      break;

    case 'purple':
      thirdColor = '#b877d9';
      break;

    case 'yellow':
      thirdColor = '#fadf4b';
      break;
  }

  var scale = Math.min(height, width / 2);
  var heightUse = scale * 0.8;
  var outRadius = scale * 0.75;
  var outWidth = Math.min(5, scale / 45);
  var mainWidth = Math.min(15, scale / 15);
  var firstRadius = outRadius - outWidth * 2 - 1;
  var secondRadius = firstRadius - mainWidth - 1;
  var thirdRadius = secondRadius - mainWidth - 1;
  var fontSizeValue = Math.min(45, scale / 5);
  var fontSizeBaseName = Math.min(15, scale / 15);
  var mainArc = 210 / 360;
  var firstValue = 0;
  var secondValue = 0;
  var thirdValue = 0;
  var firstBaseName = 'null base';
  var secondBaseName = 'null base';
  var thirdBaseName = 'null base';
  var rotate = 'rotate(-195 ' + width / 2 + ' ' + heightUse + ')';
  var radii = data.series.filter(function (series) {
    return series.refId === 'A';
  }).map(function (series) {
    firstBaseName = series.name;
    return series;
  }).map(function (series) {
    return series.fields.find(function (field) {
      return field.type === 'number';
    });
  }).map(function (field) {
    return field === null || field === void 0 ? void 0 : field.values.get(field.values.length - 1);
  });
  var radiiB = data.series.filter(function (series) {
    return series.refId === 'B';
  }).map(function (series) {
    secondBaseName = series.name;
    return series;
  }).map(function (series) {
    return series.fields.find(function (field) {
      return field.type === 'number';
    });
  }).map(function (field) {
    return field === null || field === void 0 ? void 0 : field.values.get(field.values.length - 1);
  });
  var radiiC = data.series.filter(function (series) {
    return series.refId === 'C';
  }).map(function (series) {
    thirdBaseName = series.name;
    return series;
  }).map(function (series) {
    return series.fields.find(function (field) {
      return field.type === 'number';
    });
  }).map(function (field) {
    return field === null || field === void 0 ? void 0 : field.values.get(field.values.length - 1);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    baseProfile: "full",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: rotate
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "fon",
    r: outRadius,
    cx: width / 2,
    cy: heightUse,
    stroke: colorGreen,
    "stroke-width": outWidth,
    "stroke-dasharray": outRadius * Math.PI * 2 * mainArc,
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "fon",
    r: firstRadius,
    cx: width / 2,
    cy: heightUse,
    stroke: colorGray,
    "stroke-width": mainWidth,
    "stroke-dasharray": firstRadius * Math.PI * 2 * mainArc,
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "fon",
    r: secondRadius,
    cx: width / 2,
    cy: heightUse,
    stroke: colorGray,
    "stroke-width": mainWidth,
    "stroke-dasharray": secondRadius * Math.PI * 2 * mainArc,
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "fon",
    r: thirdRadius,
    cx: width / 2,
    cy: heightUse,
    stroke: colorGray,
    "stroke-width": mainWidth,
    "stroke-dasharray": thirdRadius * Math.PI * 2 * mainArc,
    fill: "none"
  }), radii.map(function (value) {
    if (value < options.firstMin) {
      value = options.firstMin;
    } else if (value > options.firstMax) {
      value = options.firstMax;
    }

    firstValue = Math.round(value);
    var arc = (firstValue - options.firstMin) / (options.firstMax - options.firstMin);
    var dashValue = firstRadius * Math.PI * 2 * mainArc * arc;
    var dashBalance = firstRadius * Math.PI * 2 - dashValue;
    var dashArray = dashValue + ' ' + dashBalance;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      id: "fon",
      r: firstRadius,
      cx: width / 2,
      cy: heightUse,
      stroke: firstColor,
      "stroke-width": mainWidth,
      "stroke-dasharray": dashArray,
      fill: "none"
    });
  }), radiiB.map(function (value) {
    if (value < options.secondMin) {
      value = options.secondMin;
    } else if (value > options.secondMax) {
      value = options.secondMax;
    }

    secondValue = Math.round(value);
    var arc = (secondValue - options.secondMin) / (options.secondMax - options.secondMin);
    var dashValue = secondRadius * Math.PI * 2 * mainArc * arc;
    var dashBalance = secondRadius * Math.PI * 2 - dashValue;
    var dashArray = dashValue + ' ' + dashBalance;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      id: "fon",
      r: secondRadius,
      cx: width / 2,
      cy: heightUse,
      stroke: secondColor,
      "stroke-width": mainWidth,
      "stroke-dasharray": dashArray,
      fill: "none"
    });
  }), radiiC.map(function (value) {
    if (value < options.thirdMin) {
      value = options.thirdMin;
    } else if (value > options.thirdMax) {
      value = options.thirdMax;
    }

    thirdValue = Math.round(value);
    var arc = (thirdValue - options.thirdMin) / (options.thirdMax - options.thirdMin);
    var dashValue = thirdRadius * Math.PI * 2 * mainArc * arc;
    var dashBalance = thirdRadius * Math.PI * 2 - dashValue;
    var dashArray = dashValue + ' ' + dashBalance;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      id: "fon",
      r: thirdRadius,
      cx: width / 2,
      cy: heightUse,
      stroke: thirdColor,
      "stroke-width": mainWidth,
      "stroke-dasharray": dashArray,
      fill: "none"
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: width / 2 - fontSizeValue,
    y: outRadius - fontSizeValue * 0.5,
    "text-anchor": "middle",
    "font-size": fontSizeValue,
    fill: firstColor
  }, firstValue), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: width / 2 - fontSizeValue,
    y: outRadius - fontSizeValue * 0.5 + mainWidth,
    "text-anchor": "middle",
    "font-size": fontSizeBaseName,
    fill: firstColor
  }, firstBaseName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: width / 2 + fontSizeValue,
    y: outRadius - fontSizeValue * 0.5,
    "text-anchor": "middle",
    "font-size": fontSizeValue,
    fill: secondColor
  }, secondValue), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: width / 2 + fontSizeValue,
    y: outRadius - fontSizeValue * 0.5 + mainWidth,
    "text-anchor": "middle",
    "font-size": fontSizeBaseName,
    fill: secondColor
  }, secondBaseName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: width / 2,
    y: outRadius + fontSizeValue * 0.75,
    "text-anchor": "middle",
    "font-size": fontSizeValue,
    fill: thirdColor
  }, thirdValue), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: width / 2,
    y: outRadius + fontSizeValue * 0.75 + mainWidth,
    "text-anchor": "middle",
    "font-size": fontSizeBaseName,
    fill: thirdColor
  }, thirdBaseName)));
};

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimplePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimplePanel */ "./SimplePanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_SimplePanel__WEBPACK_IMPORTED_MODULE_1__["SimplePanel"]).setPanelOptions(function (builder) {
  return builder.addNumberInput({
    path: 'firstMin',
    name: 'Min for first database',
    defaultValue: 0
  }).addNumberInput({
    path: 'firstMax',
    name: 'Max fo first database',
    defaultValue: 100
  }).addNumberInput({
    path: 'secondMin',
    name: 'Min fo second database',
    defaultValue: 0
  }).addNumberInput({
    path: 'secondMax',
    name: 'Max fo second database',
    defaultValue: 100
  }).addNumberInput({
    path: 'thirdMin',
    name: 'Min fo third database',
    defaultValue: 0
  }).addNumberInput({
    path: 'thirdMax',
    name: 'Max fo third database',
    defaultValue: 100
  }) // .addTextInput({
  //   path: 'text',
  //   name: 'Simple text option',
  //   description: 'Description of panel option',
  //   defaultValue: 'Default value of text input option',
  // })
  // .addBooleanSwitch({
  //   path: 'showSeriesCount',
  //   name: 'Show series counter',
  //   defaultValue: false,
  // })
  // .addRadio({
  //   path: 'seriesCountSize',
  //   defaultValue: 'sm',
  //   name: 'Series counter size',
  //   settings: {
  //     options: [
  //       {
  //         value: 'sm',
  //         label: 'Small',
  //       },
  //       {
  //         value: 'md',
  //         label: 'Medium',
  //       },
  //       {
  //         value: 'lg',
  //         label: 'Large',
  //       },
  //     ],
  //   },
  //   showIf: config => config.showSeriesCount,
  // })
  .addRadio({
    path: 'firstColor',
    name: 'Color of first database',
    defaultValue: 'yellow',
    settings: {
      options: [{
        value: 'red',
        label: 'Red'
      }, {
        value: 'green',
        label: 'Green'
      }, {
        value: 'blue',
        label: 'Blue'
      }, {
        value: 'yellow',
        label: 'Yellow'
      }, {
        value: 'orange',
        label: 'Orange'
      }, {
        value: 'purple',
        label: 'Purple'
      }]
    }
  }).addRadio({
    path: 'secondColor',
    name: 'Color of second database',
    defaultValue: 'blue',
    settings: {
      options: [{
        value: 'red',
        label: 'Red'
      }, {
        value: 'green',
        label: 'Green'
      }, {
        value: 'blue',
        label: 'Blue'
      }, {
        value: 'yellow',
        label: 'Yellow'
      }, {
        value: 'orange',
        label: 'Orange'
      }, {
        value: 'purple',
        label: 'Purple'
      }]
    }
  }).addRadio({
    path: 'thirdColor',
    name: 'Color of third database',
    defaultValue: 'red',
    settings: {
      options: [{
        value: 'red',
        label: 'Red'
      }, {
        value: 'green',
        label: 'Green'
      }, {
        value: 'blue',
        label: 'Blue'
      }, {
        value: 'yellow',
        label: 'Yellow'
      }, {
        value: 'orange',
        label: 'Orange'
      }, {
        value: 'purple',
        label: 'Purple'
      }]
    }
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map