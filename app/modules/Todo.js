class Todo {
  constructor(item) {
    this.item = item;
    this.completed = false;
    this.render();

  }

  render() {
    let toDoList = document.querySelector("#toDoList");
    let div = document.createElement("div");
    div.classList.add("todoEntry");
    div.textContent = this.item;
    toDoList.appendChild(div);

    //vv this is where brain stopped, should probably be in markComplete() vv
    div.addEventListener("click", function(e){
      div.classList.add("completed")
    });
  }

  // markComplete() {
  //   let todoEntry = document.querySelector(".todoEntry");
  //   if (this.completed) {
  //     todoEntry.classlist.add("completed");
  //   }
  // }
}

export default Todo;
