// Employee Test

const Employee = require('../team/employee');

describe('Employee',() =>{
    describe('name',() => {
        it('Should return the name you give', () => {
            const employeeTest = new Employee('John', '1', 'employee@protonmail.com', 'employee');
            const testName = 'John';
            expect(testName).toEqual(employeeTest.getName());
        })
    })
    describe('id',() => {
        it('Should return the name you give', () => {
            const employeeTest = new Employee('John', '1', 'employee@protonmail.com', 'employee');
            const testId = '1';
            expect(testId).toEqual(employeeTest.getId());
        })
    })
    describe('email',() => {
        it('Should return the name you give', () => {
            const employeeTest = new Employee('John', '1', 'employee@protonmail.com', 'employee');
            const testEmail = 'employee@protonmail.com';
            expect(testEmail).toEqual(employeeTest.getEmail());
        })
    })
    describe('position',() => {
        it('Should return the name you give', () => {
            const employeeTest = new Employee('John', '1', 'employee@protonmail.com', 'employee');
            const testPosition = 'Employee';
            expect(testPosition).toEqual(employeeTest.getPosition());
        })
    })
})