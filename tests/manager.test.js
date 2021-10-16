// Manager Test

const Manager = require('../team/manager');

describe('Manager',() =>{
    describe('name',() => {
        it('Should return the name you give', () => {
            const managerTest = new Manager('Jacob', '3', 'manager@protonmail.com', '555-5555', 'Manager');
            const testName = 'Jacob';
            expect(testName).toEqual(managerTest.getName());
        })
    })
    describe('id',() => {
        it('Should return the name you give', () => {
            const managerTest = new Manager('Jacob', '3', 'manager@protonmail.com', '555-5555', 'Manager');
            const testId = '3';
            expect(testId).toEqual(managerTest.getId());
        })
    })
    describe('email',() => {
        it('Should return the name you give', () => {
            const managerTest = new Manager('Jacob', '3', 'manager@protonmail.com', '555-5555', 'Manager');
            const testEmail = 'manager@protonmail.com';
            expect(testEmail).toEqual(managerTest.getEmail());
        })
    })
    describe('phone',() => {
        it('Should return the name you give', () => {
            const managerTest = new Manager('Jacob', '3', 'manager@protonmail.com', '555-5555', 'Manager');
            const testPhone = '555-5555';
            expect(testPhone).toEqual(managerTest.getPhoneNumber());
        })
    })
    describe('position',() => {
        it('Should return the name you give', () => {
            const managerTest = new Manager('Jacob', '3', 'manager@protonmail.com', '555-5555', 'Manager');
            const testPosition = 'Manager';
            expect(testPosition).toEqual(managerTest.getPosition());
        })
    })
})