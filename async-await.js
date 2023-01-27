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

(async () => {
  try {
    await getTodos();
    await createATodo("Watch Netflix");
    await getTodos();
  } catch (err) {
    console.log(err);
  }
})();
