const todos = ["Do laundry", "Eat lunch", "Read a book"];

function getTodos() {
  setTimeout(() => {
    todos.forEach((val) => console.log(val));
  }, 3000);
}

function createATodo(todo, cb) {
  setTimeout(() => {
    todos.push(todo);
    cb();
  }, 4000);
}

getTodos();
createATodo("Watch Netflix", getTodos);
