// Engineer Sub Class
const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(_name, _id, _email, _github) {
        super(_name, _id, _email);

        this.github = _github;
    }

    getGitHub () {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }

}

module.exports = Engineer;