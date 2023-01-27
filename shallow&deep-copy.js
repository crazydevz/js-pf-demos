const obj1 = {
  name: "ali",
  email: "ali@gmail.com",
};

const obj2 = {
  key1: "dummy-1",
  key2: "dummy-2",
  key3: obj1,
};

const obj3 = Object.assign({}, obj2); // Create a shallow copy
// const obj3 = { ...obj2 }; // OR Create a shallow copy via ES6 syntax

obj3.key3.email = "";
console.log(obj1); // obj1 has been mutated

const obj4 = JSON.parse(JSON.stringify(obj2)); // Create a deep copy
obj4.key3.name = "ahmad";
obj4.key3.email = "ahmad@yahoo.com";

console.log(obj4); // obj4 was saved a new, different object, with a different refernce
console.log(obj1); // obj1 did not mutate this time
