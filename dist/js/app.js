(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _Todo = require("./modules/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var submitButton = document.querySelector("#submitButton");
var toDoArray = [];

submitButton.addEventListener("click", function (createToDoArray) {
  createToDoArray.preventDefault();
  var item = document.querySelector("#todoText").value;
  var todo = new _Todo2.default(item);
  toDoArray.push(todo);
  document.querySelector("#todoText").value = "";

  // return toDoArray;
});

},{"./modules/Todo":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function () {
  function Todo(item) {
    _classCallCheck(this, Todo);

    this.item = item;
    this.completed = false;
    this.render();
  }

  _createClass(Todo, [{
    key: "render",
    value: function render() {
      var toDoList = document.querySelector("#toDoList");
      var div = document.createElement("div");
      div.classList.add("todoEntry");
      toDoList.appendChild(div);
      div.textContent = this.item;
    }
  }]);

  return Todo;
}();

exports.default = Todo;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvVG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDR0E7Ozs7OztBQUhBLElBQUksZUFBZSxTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZjtBQUNKLElBQUksWUFBWSxFQUFaOztBQUlKLGFBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBUyxlQUFULEVBQTBCO0FBQy9ELGtCQUFnQixjQUFoQixHQUQrRDtBQUUvRCxNQUFJLE9BQVEsU0FBUyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLEtBQXBDLENBRm1EO0FBRy9ELE1BQUksT0FBTyxtQkFBUyxJQUFULENBQVAsQ0FIMkQ7QUFJL0QsWUFBVSxJQUFWLENBQWUsSUFBZixFQUorRDtBQUsvRCxXQUFTLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0MsS0FBcEMsR0FBNEMsRUFBNUM7OztBQUwrRCxDQUExQixDQUF2Qzs7Ozs7Ozs7Ozs7OztJQ0xNO0FBQ0osV0FESSxJQUNKLENBQVksSUFBWixFQUFrQjswQkFEZCxNQUNjOztBQUNoQixTQUFLLElBQUwsR0FBWSxJQUFaLENBRGdCO0FBRWhCLFNBQUssU0FBTCxHQUFpQixLQUFqQixDQUZnQjtBQUdoQixTQUFLLE1BQUwsR0FIZ0I7R0FBbEI7O2VBREk7OzZCQU9JO0FBQ04sVUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFYLENBREU7QUFFTixVQUFJLE1BQU0sU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQU4sQ0FGRTtBQUdOLFVBQUksU0FBSixDQUFjLEdBQWQsQ0FBa0IsV0FBbEIsRUFITTtBQUlOLGVBQVMsV0FBVCxDQUFxQixHQUFyQixFQUpNO0FBS04sVUFBSSxXQUFKLEdBQWtCLEtBQUssSUFBTCxDQUxaOzs7O1NBUEo7OztrQkFpQlMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnV0dG9uXCIpO1xubGV0IHRvRG9BcnJheSA9IFtdO1xuXG5pbXBvcnQgVG9kbyBmcm9tICcuL21vZHVsZXMvVG9kbyc7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oY3JlYXRlVG9Eb0FycmF5KSB7XG4gIGNyZWF0ZVRvRG9BcnJheS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgaXRlbSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UZXh0XCIpLnZhbHVlKTtcbiAgbGV0IHRvZG8gPSBuZXcgVG9kbyhpdGVtKTtcbiAgdG9Eb0FycmF5LnB1c2godG9kbyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1RleHRcIikudmFsdWUgPSBcIlwiO1xuXG4gIC8vIHJldHVybiB0b0RvQXJyYXk7XG59KTtcbiIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBsZXQgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9MaXN0XCIpO1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9kb0VudHJ5XCIpO1xuICAgIHRvRG9MaXN0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LnRleHRDb250ZW50ID0gdGhpcy5pdGVtO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdfQ==
