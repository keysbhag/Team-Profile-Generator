// Manager Sub Class
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (_name, _id, _email, _officeNum) {
        super(_name, _id, _email);
        this.officeNumber = _officeNum;
    }

    getOfficeNum () {
        return this.officeNumber;
    }

    getRole () {
        return 'Manager';
    }

}

module.exports = Manager;