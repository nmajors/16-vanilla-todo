let submitButton = document.querySelector("#submitButton");
let toDoArray = [];

class Todo {
  constructor(item) {
    this.item = item;
    this.completed = false;
  }
}


submitButton.addEventListener("click", function(createToDoArray){
createToDoArray.preventDefault();
let item = (document.querySelector("#todoText").value);
let todo = new Todo(item);
toDoArray.push(item);
document.querySelector("#todoText").value = "";
return toDoArray;
});
