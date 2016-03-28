let submitButton = document.querySelector("#submitButton");
let toDoArray = [];

class Todo {
  constructor (item){
    this.item
    this.completed
  }
  completed(){
    this.completed=false;
  }
}
let todo = new Todo();

submitButton.addEventListener("click", createTodo);

function createTodo(){
  console.log(document.querySelector("#todoText").value);
  toDoArray.push(todo);
  document.querySelector("#todoText").value="";
  console.log(document.querySelector("#todoText").value);
}
