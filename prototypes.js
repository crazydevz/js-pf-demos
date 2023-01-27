function User(name) {
  this.name = name;
}

User.prototype.login = function () {
  console.log(this.name + " has logged in");
};

User.prototype.logout = function () {
  console.log(this.name + " has logged out");
};

function Admin(...args) {
  User.apply(this, args);
  this.role = "super admin";
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function () {
  console.log("Delete a user");
};

// class User {
// 	constructor(name) {
// 		this.name = name
// 	}

// 	login() {
// 		console.log(this.name + " has logged in")
// 	}

// 	logout() {
// 		console.log(this.name + " has logged out")
// 	}
// }

// class Admin extends User {
// 	constructor(name) {
// 		super(name)
// 		this.role = "super admin"
// 	}

// 	deleteUser() {
// 		console.log("Deleted a user")
// 	}
// }
const user = new User("Ahmad");
user.login();
user.logout();

const admin = new Admin("Hassan");
admin.login();
admin.logout();
admin.deleteUser();

console.log(user, admin);
