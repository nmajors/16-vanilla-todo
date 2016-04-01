class Todo {
  constructor(item) {
    this.item = item;
    this.completed = false;
    this.render();
  }

  render(){
    let toDoList = document.querySelector("#toDoList");
    let div = document.createElement("div");
    div.classList.add("todoEntry");
    toDoList.appendChild(div);
    div.textContent = this.item;
  }

}

export default Todo;
