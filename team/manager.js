//Manager

const Employee = require('./team/employee');

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email)
        this.phone = phone;
        this.position = 'Manager';
    }
    getPhoneNumber() {
        return this.phone
    }
}
module.exports = Manager;