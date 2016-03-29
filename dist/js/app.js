(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var submitButton = document.querySelector("#submitButton");
var toDoArray = [];

var Todo = function Todo(item) {
  _classCallCheck(this, Todo);

  this.item = item;
  this.completed = false;
};

submitButton.addEventListener("click", function (createToDoArray) {
  createToDoArray.preventDefault();
  var item = document.querySelector("#todoText").value;
  var todo = new Todo(item);
  toDoArray.push(item);
  document.querySelector("#todoText").value = "";
  return toDoArray;
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBLElBQUksZUFBZSxTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZjtBQUNKLElBQUksWUFBWSxFQUFaOztJQUVFLE9BQ0osU0FESSxJQUNKLENBQVksSUFBWixFQUFrQjt3QkFEZCxNQUNjOztBQUNoQixPQUFLLElBQUwsR0FBWSxJQUFaLENBRGdCO0FBRWhCLE9BQUssU0FBTCxHQUFpQixLQUFqQixDQUZnQjtDQUFsQjs7QUFPRixhQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQVMsZUFBVCxFQUF5QjtBQUNoRSxrQkFBZ0IsY0FBaEIsR0FEZ0U7QUFFaEUsTUFBSSxPQUFRLFNBQVMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxLQUFwQyxDQUZvRDtBQUdoRSxNQUFJLE9BQU8sSUFBSSxJQUFKLENBQVMsSUFBVCxDQUFQLENBSDREO0FBSWhFLFlBQVUsSUFBVixDQUFlLElBQWYsRUFKZ0U7QUFLaEUsV0FBUyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLEtBQXBDLEdBQTRDLEVBQTVDLENBTGdFO0FBTWhFLFNBQU8sU0FBUCxDQU5nRTtDQUF6QixDQUF2QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdXR0b25cIik7XG5sZXQgdG9Eb0FycmF5ID0gW107XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG5cblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihjcmVhdGVUb0RvQXJyYXkpe1xuY3JlYXRlVG9Eb0FycmF5LnByZXZlbnREZWZhdWx0KCk7XG5sZXQgaXRlbSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UZXh0XCIpLnZhbHVlKTtcbmxldCB0b2RvID0gbmV3IFRvZG8oaXRlbSk7XG50b0RvQXJyYXkucHVzaChpdGVtKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1RleHRcIikudmFsdWUgPSBcIlwiO1xucmV0dXJuIHRvRG9BcnJheTtcbn0pO1xuIl19
