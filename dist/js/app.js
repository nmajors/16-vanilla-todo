(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var submitButton = document.querySelector("#submitButton");
var toDoArray = [];

var Todo = function () {
  function Todo(item) {
    _classCallCheck(this, Todo);

    this.item;
    this.completed;
  }

  _createClass(Todo, [{
    key: "completed",
    value: function completed() {
      this.completed = false;
    }
  }]);

  return Todo;
}();

var todo = new Todo();

submitButton.addEventListener("click", createTodo);

function createTodo() {
  console.log(document.querySelector("#todoText").value);
  toDoArray.push(todo);
  document.querySelector("#todoText").value = "";
  console.log(document.querySelector("#todoText").value);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsSUFBSSxlQUFlLFNBQVMsYUFBVCxDQUF1QixlQUF2QixDQUFmO0FBQ0osSUFBSSxZQUFZLEVBQVo7O0lBRUU7QUFDSixXQURJLElBQ0osQ0FBYSxJQUFiLEVBQWtCOzBCQURkLE1BQ2M7O0FBQ2hCLFNBQUssSUFBTCxDQURnQjtBQUVoQixTQUFLLFNBQUwsQ0FGZ0I7R0FBbEI7O2VBREk7O2dDQUtPO0FBQ1QsV0FBSyxTQUFMLEdBQWUsS0FBZixDQURTOzs7O1NBTFA7OztBQVNOLElBQUksT0FBTyxJQUFJLElBQUosRUFBUDs7QUFFSixhQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQXZDOztBQUVBLFNBQVMsVUFBVCxHQUFxQjtBQUNuQixVQUFRLEdBQVIsQ0FBWSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0MsS0FBcEMsQ0FBWixDQURtQjtBQUVuQixZQUFVLElBQVYsQ0FBZSxJQUFmLEVBRm1CO0FBR25CLFdBQVMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxLQUFwQyxHQUEwQyxFQUExQyxDQUhtQjtBQUluQixVQUFRLEdBQVIsQ0FBWSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0MsS0FBcEMsQ0FBWixDQUptQjtDQUFyQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdXR0b25cIik7XG5sZXQgdG9Eb0FycmF5ID0gW107XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvciAoaXRlbSl7XG4gICAgdGhpcy5pdGVtXG4gICAgdGhpcy5jb21wbGV0ZWRcbiAgfVxuICBjb21wbGV0ZWQoKXtcbiAgICB0aGlzLmNvbXBsZXRlZD1mYWxzZTtcbiAgfVxufVxubGV0IHRvZG8gPSBuZXcgVG9kbygpO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRvZG8pO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKCl7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1RleHRcIikudmFsdWUpO1xuICB0b0RvQXJyYXkucHVzaCh0b2RvKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvVGV4dFwiKS52YWx1ZT1cIlwiO1xuICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UZXh0XCIpLnZhbHVlKTtcbn1cbiJdfQ==
