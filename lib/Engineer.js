// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // `super` is used in the constructor of the Engineer class 
        // to call the constructor of its parent class
        super(name, id, email, github);
        this.github = github; 
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;