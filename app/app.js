let submitButton = document.querySelector("#submitButton");
let toDoArray = [];

import Todo from './modules/Todo';

submitButton.addEventListener("click", function(createToDoArray) {
  createToDoArray.preventDefault();
  let item = (document.querySelector("#todoText").value);
  let todo = new Todo(item);
  toDoArray.push(todo);
  document.querySelector("#todoText").value = "";

  // return toDoArray;
});


//on click, this.completed=true
// let todoEntries = document.querySelectorAll(".todoEntry");
//  todoEntries.forEach(entry, )

//
// document
//   .querySelectorAll(".todoEntry")
//   .addEventListener("click", function(markComplete){
//
//   });
