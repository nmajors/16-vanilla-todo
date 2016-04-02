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
});

//below are just some of the ideas I was fooling around with

//on click, this.completed=true
// let todoEntries = document.querySelectorAll(".todoEntry");
//  todoEntries.forEach(entry, )

//
// document
//   .querySelectorAll(".todoEntry")
//   .addEventListener("click", function(markComplete){
//
//   });

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
      div.textContent = this.item;
      toDoList.appendChild(div);

      //vv this is where brain stopped, should probably be in markComplete() vv
      div.addEventListener("click", function (e) {
        if (this.classList.contains("completed")) {
          this.classList.remove("completed");
        } else {
          this.classList.add("completed");
        }
      });
    }

    // markComplete() {
    //   let todoEntries = document.querySelectorAll(".todoEntry");
    //   todoEntries.forEach(function(entry) {
    // if (this.completed) {
    //     todoEntry.classlist.add("completed");
    //   }
    // }

  }]);

  return Todo;
}();

exports.default = Todo;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvVG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDR0E7Ozs7OztBQUhBLElBQUksZUFBZSxTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZjtBQUNKLElBQUksWUFBWSxFQUFaOztBQUlKLGFBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBUyxlQUFULEVBQTBCO0FBQy9ELGtCQUFnQixjQUFoQixHQUQrRDtBQUUvRCxNQUFJLE9BQVEsU0FBUyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLEtBQXBDLENBRm1EO0FBRy9ELE1BQUksT0FBTyxtQkFBUyxJQUFULENBQVAsQ0FIMkQ7QUFJL0QsWUFBVSxJQUFWLENBQWUsSUFBZixFQUorRDtBQUsvRCxXQUFTLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0MsS0FBcEMsR0FBNEMsRUFBNUMsQ0FMK0Q7Q0FBMUIsQ0FBdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTE07QUFDSixXQURJLElBQ0osQ0FBWSxJQUFaLEVBQWtCOzBCQURkLE1BQ2M7O0FBQ2hCLFNBQUssSUFBTCxHQUFZLElBQVosQ0FEZ0I7QUFFaEIsU0FBSyxTQUFMLEdBQWlCLEtBQWpCLENBRmdCO0FBR2hCLFNBQUssTUFBTCxHQUhnQjtHQUFsQjs7ZUFESTs7NkJBUUs7QUFDUCxVQUFJLFdBQVcsU0FBUyxhQUFULENBQXVCLFdBQXZCLENBQVgsQ0FERztBQUVQLFVBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBTixDQUZHO0FBR1AsVUFBSSxTQUFKLENBQWMsR0FBZCxDQUFrQixXQUFsQixFQUhPO0FBSVAsVUFBSSxXQUFKLEdBQWtCLEtBQUssSUFBTCxDQUpYO0FBS1AsZUFBUyxXQUFULENBQXFCLEdBQXJCOzs7QUFMTyxTQVFQLENBQUksZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBUyxDQUFULEVBQVc7QUFDdkMsWUFBRyxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCLFdBQXhCLENBQUgsRUFBd0M7QUFDdEMsZUFBSyxTQUFMLENBQWUsTUFBZixDQUFzQixXQUF0QixFQURzQztTQUF4QyxNQUVLO0FBQ0gsZUFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixXQUFuQixFQURHO1NBRkw7T0FENEIsQ0FBOUIsQ0FSTzs7Ozs7Ozs7Ozs7OztTQVJMOzs7a0JBa0NTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJ1dHRvblwiKTtcbmxldCB0b0RvQXJyYXkgPSBbXTtcblxuaW1wb3J0IFRvZG8gZnJvbSAnLi9tb2R1bGVzL1RvZG8nO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGNyZWF0ZVRvRG9BcnJheSkge1xuICBjcmVhdGVUb0RvQXJyYXkucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IGl0ZW0gPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvVGV4dFwiKS52YWx1ZSk7XG4gIGxldCB0b2RvID0gbmV3IFRvZG8oaXRlbSk7XG4gIHRvRG9BcnJheS5wdXNoKHRvZG8pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UZXh0XCIpLnZhbHVlID0gXCJcIjtcbn0pO1xuXG4vL2JlbG93IGFyZSBqdXN0IHNvbWUgb2YgdGhlIGlkZWFzIEkgd2FzIGZvb2xpbmcgYXJvdW5kIHdpdGhcblxuLy9vbiBjbGljaywgdGhpcy5jb21wbGV0ZWQ9dHJ1ZVxuLy8gbGV0IHRvZG9FbnRyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvRW50cnlcIik7XG4vLyAgdG9kb0VudHJpZXMuZm9yRWFjaChlbnRyeSwgKVxuXG4vL1xuLy8gZG9jdW1lbnRcbi8vICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb0VudHJ5XCIpXG4vLyAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24obWFya0NvbXBsZXRlKXtcbi8vXG4vLyAgIH0pO1xuIiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKGl0ZW0pIHtcbiAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB0b0RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb0xpc3RcIik7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvRW50cnlcIik7XG4gICAgZGl2LnRleHRDb250ZW50ID0gdGhpcy5pdGVtO1xuICAgIHRvRG9MaXN0LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAvL3Z2IHRoaXMgaXMgd2hlcmUgYnJhaW4gc3RvcHBlZCwgc2hvdWxkIHByb2JhYmx5IGJlIGluIG1hcmtDb21wbGV0ZSgpIHZ2XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGVkXCIpKXtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIG1hcmtDb21wbGV0ZSgpIHtcbiAgLy8gICBsZXQgdG9kb0VudHJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9FbnRyeVwiKTtcbiAgLy8gICB0b2RvRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5KSB7XG4gIC8vIGlmICh0aGlzLmNvbXBsZXRlZCkge1xuICAvLyAgICAgdG9kb0VudHJ5LmNsYXNzbGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXX0=
