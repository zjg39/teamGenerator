const Employee = require('./team/employee');
const employee = require('./team/employee');

describe('Employee',() =>{
    describe('name',() => {
        it('Should return the name you give', () =>{
            const employeeTest = new Employee('John', '1', 'employee@protonmail.com', 'employee');
            const testName = 'John';
            expect(testName).toEqual(employeeTest.testName());
        })
    })
    describe('id',() => {
        it('Should return the name you give', () =>{
            const employeeTest = new Employee('John', '1', 'employee@protonmail.com', 'employee');
            const testId = '1';
            expect(testId).toEqual(employeeTest.testId());
        })
    })
    describe('email',() => {
        it('Should return the name you give', () =>{
            const employeeTest = new Employee('John', '1', 'employee@protonmail.com', 'employee');
            const testEmail = 'employee@protonmail.com';
            expect(testEmail).toEqual(employeeTest.testEmail());
        })
    })
    describe('position',() => {
        it('Should return the name you give', () =>{
            const employeeTest = new Employee('John', '1', 'employee@protonmail.com', 'employee');
            const testPosition = 'John';
            expect(testPosition).toEqual(employeeTest.testPosition());
        })
    })
})