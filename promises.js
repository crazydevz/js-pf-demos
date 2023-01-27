const todos = ["Do laundry", "Eat lunch", "Read a book"];

function getTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.forEach((val) => {
        console.log(val);
      });
      resolve();
    }, 1000);
  });
}

function createATodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo);
      resolve();
    }, 2000);
  });
}

getTodos()
  .then(() => {
    return createATodo("Watch Netflix");
  })
  .then(() => {
    getTodos();
  })
  .catch(() => console.log("An error occured"));
