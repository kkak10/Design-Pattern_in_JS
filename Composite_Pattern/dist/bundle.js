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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Composite = __webpack_require__(2);
	
	var _Composite2 = _interopRequireDefault(_Composite);
	
	var _Leaf = __webpack_require__(3);
	
	var _Leaf2 = _interopRequireDefault(_Leaf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	{
	    var composite = new _Composite2.default();
	    var composite_c1 = new _Composite2.default("c1");
	    var composite_c2 = new _Composite2.default("c2");
	
	    composite.add(composite_c1);
	    composite.add(composite_c2);
	    console.log(composite.getChild(0));
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Component = function () {
	    function Component() {
	        _classCallCheck(this, Component);
	    }
	
	    _createClass(Component, [{
	        key: "add",
	        value: function add() {}
	    }, {
	        key: "remove",
	        value: function remove() {}
	    }, {
	        key: "getChild",
	        value: function getChild() {}
	    }, {
	        key: "getChildren",
	        value: function getChildren() {}
	    }, {
	        key: "getName",
	        value: function getName() {}
	    }, {
	        key: "exec",
	        value: function exec() {}
	    }]);
	
	    return Component;
	}();
	
	exports.default = Component;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(1);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _objectAssign = __webpack_require__(4);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Composite = function (_Component) {
	    _inherits(Composite, _Component);
	
	    function Composite(name) {
	        _classCallCheck(this, Composite);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Composite).call(this));
	
	        _this.name = name;
	        _this.children = [];
	        return _this;
	    }
	
	    _createClass(Composite, [{
	        key: "add",
	        value: function add(component) {
	            if (component) this.children.push(component);
	        }
	    }, {
	        key: "remove",
	        value: function remove(component) {
	            for (var i = 0; i < component.length; i++) {
	                if (this.children[i] === component) {
	                    this.children.splice(i, 1);
	                }
	            }
	        }
	    }, {
	        key: "getChild",
	        value: function getChild(key) {
	            var child_list = "";
	            if (key !== undefined) return this.children[key];
	
	            for (var component_key in this.children) {
	                child_list += " - " + this.children[component_key].name + " \n";
	            }
	
	            return child_list;
	        }
	    }, {
	        key: "getChildren",
	        value: function getChildren() {
	            return (0, _objectAssign2.default)([], this.children);
	        }
	    }, {
	        key: "Operation",
	        value: function Operation() {
	            console.log("Composite Operation for: " + this.name);
	            for (var i in this.children) {
	                this.children[i].Operation();
	            }
	        }
	    }]);
	
	    return Composite;
	}(_Component3.default);
	
	exports.default = Composite;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(1);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Leaf = function (_Component) {
	    _inherits(Leaf, _Component);
	
	    function Leaf(name) {
	        _classCallCheck(this, Leaf);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Leaf).call(this));
	
	        _this.name = name;
	        return _this;
	    }
	
	    _createClass(Leaf, [{
	        key: "Operation",
	        value: function Operation() {
	            console.log(this.name + " Operation");
	        }
	    }]);
	
	    return Leaf;
	}(_Component3.default);
	
	exports.default = Leaf;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODBiOTA0YTRiYTA4NDM0ZjdhOGEiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGVhZi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNJLFNBQUksWUFBWSx5QkFBaEI7QUFDQSxTQUFJLGVBQWUsd0JBQWMsSUFBZCxDQUFuQjtBQUNBLFNBQUksZUFBZSx3QkFBYyxJQUFkLENBQW5COztBQUVBLGVBQVUsR0FBVixDQUFjLFlBQWQ7QUFDQSxlQUFVLEdBQVYsQ0FBYyxZQUFkO0FBQ0EsYUFBUSxHQUFSLENBQVksVUFBVSxRQUFWLENBQW1CLENBQW5CLENBQVo7QUFDSCxFOzs7Ozs7Ozs7Ozs7Ozs7O0tDWkssUztBQUNGLDBCQUFjO0FBQUE7QUFFYjs7OzsrQkFFSyxDQUNMOzs7a0NBRVEsQ0FDUjs7O29DQUVVLENBQ1Y7Ozt1Q0FFYSxDQUNiOzs7bUNBRVMsQ0FDVDs7O2dDQUVNLENBQ047Ozs7OzttQkFHVSxTOzs7Ozs7Ozs7Ozs7OztBQ3hCZjs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTSxTOzs7QUFDRix3QkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBRWQsZUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGVBQUssUUFBTCxHQUFnQixFQUFoQjtBQUhjO0FBSWpCOzs7OzZCQUVHLFMsRUFBVztBQUNYLGlCQUFJLFNBQUosRUFBZSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLFNBQW5CO0FBQ2xCOzs7Z0NBRU0sUyxFQUFXO0FBQ2Qsa0JBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxVQUFVLE1BQTlCLEVBQXNDLEdBQXRDLEVBQTJDO0FBQ3ZDLHFCQUFJLEtBQUssUUFBTCxDQUFjLENBQWQsTUFBcUIsU0FBekIsRUFBb0M7QUFDaEMsMEJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDSDtBQUNKO0FBQ0o7OztrQ0FFUSxHLEVBQUs7QUFDVixpQkFBSSxhQUFhLEVBQWpCO0FBQ0EsaUJBQUksUUFBUSxTQUFaLEVBQXVCLE9BQU8sS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFQOztBQUV2QixrQkFBSyxJQUFJLGFBQVQsSUFBMEIsS0FBSyxRQUEvQixFQUF5QztBQUNyQyx1Q0FBb0IsS0FBSyxRQUFMLENBQWMsYUFBZCxFQUE2QixJQUFqRDtBQUNIOztBQUVELG9CQUFPLFVBQVA7QUFDSDs7O3VDQUVZO0FBQ1Qsb0JBQU8sNEJBQWEsRUFBYixFQUFpQixLQUFLLFFBQXRCLENBQVA7QUFDSDs7O3FDQUVXO0FBQ1IscUJBQVEsR0FBUiwrQkFBd0MsS0FBSyxJQUE3QztBQUNBLGtCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssUUFBbkI7QUFBNkIsc0JBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsU0FBakI7QUFBN0I7QUFDSDs7Ozs7O21CQUdVLFM7Ozs7Ozs7Ozs7Ozs7O0FDM0NmOzs7Ozs7Ozs7Ozs7S0FFTSxJOzs7QUFDRixtQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBRWQsZUFBSyxJQUFMLEdBQVksSUFBWjtBQUZjO0FBR2pCOzs7O3FDQUVXO0FBQ1IscUJBQVEsR0FBUixDQUFlLEtBQUssSUFBcEI7QUFDSDs7Ozs7O21CQUdVLEk7Ozs7OztBQ2JmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILG1DQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODBiOTA0YTRiYTA4NDM0ZjdhOGFcbiAqKi8iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL3NyYy9Db21wb25lbnRcIlxuaW1wb3J0IENvbXBvc2l0ZSBmcm9tIFwiLi9zcmMvQ29tcG9zaXRlXCJcbmltcG9ydCBMZWFmIGZyb20gXCIuL3NyYy9MZWFmXCJcblxue1xuICAgIGxldCBjb21wb3NpdGUgPSBuZXcgQ29tcG9zaXRlKCk7XG4gICAgbGV0IGNvbXBvc2l0ZV9jMSA9IG5ldyBDb21wb3NpdGUoXCJjMVwiKTtcbiAgICBsZXQgY29tcG9zaXRlX2MyID0gbmV3IENvbXBvc2l0ZShcImMyXCIpO1xuXG4gICAgY29tcG9zaXRlLmFkZChjb21wb3NpdGVfYzEpO1xuICAgIGNvbXBvc2l0ZS5hZGQoY29tcG9zaXRlX2MyKTtcbiAgICBjb25zb2xlLmxvZyhjb21wb3NpdGUuZ2V0Q2hpbGQoMCkpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwLmpzXG4gKiovIiwiY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGQoKSB7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICB9XG5cbiAgICBleGVjKCkge1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0NvbXBvbmVudC5qc1xuICoqLyIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgb2JqZWN0QXNzaWduIGZyb20gXCJvYmplY3QtYXNzaWduXCI7XG5cbmNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgYWRkKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoY29tcG9uZW50KSB0aGlzLmNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmUoY29tcG9uZW50KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDaGlsZChrZXkpIHtcbiAgICAgICAgbGV0IGNoaWxkX2xpc3QgPSBcIlwiO1xuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV07XG5cbiAgICAgICAgZm9yIChsZXQgY29tcG9uZW50X2tleSBpbiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjaGlsZF9saXN0ICs9IGAgLSAke3RoaXMuY2hpbGRyZW5bY29tcG9uZW50X2tleV0ubmFtZX0gXFxuYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZF9saXN0O1xuICAgIH1cblxuICAgIGdldENoaWxkcmVuKCl7XG4gICAgICAgIHJldHVybiBvYmplY3RBc3NpZ24oW10sIHRoaXMuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIE9wZXJhdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBvc2l0ZSBPcGVyYXRpb24gZm9yOiAke3RoaXMubmFtZX1gKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmNoaWxkcmVuKSB0aGlzLmNoaWxkcmVuW2ldLk9wZXJhdGlvbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zaXRlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0NvbXBvc2l0ZS5qc1xuICoqLyIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50LmpzXCJcblxuY2xhc3MgTGVhZiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIE9wZXJhdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBPcGVyYXRpb25gKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWY7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvTGVhZi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==