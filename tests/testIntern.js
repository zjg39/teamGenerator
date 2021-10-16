// Intern Test

const Intern = require('../team/intern');

describe('Intern',() =>{
    describe('name',() => {
        it('Should return the name you give', () => {
            const internTest = new Intern('Justin', '2', 'intern@protonmail.com', 'school university', 'intern');
            const testName = 'Justin';
            expect(testName).toEqual(internTest.testName());
        })
    })
    describe('id',() => {
        it('Should return the name you give', () => {
            const internTest = new Intern('Justin', '2', 'intern@protonmail.com', 'school university', 'intern');
            const testId = '2';
            expect(testId).toEqual(internTest.testId());
        })
    })
    describe('email',() => {
        it('Should return the name you give', () => {
            const internTest = new Intern('Justin', '2', 'intern@protonmail.com', 'school university', 'intern');
            const testEmail = 'intern@protonmail.com';
            expect(testEmail).toEqual(internTest.testEmail());
        })
    })
    describe('school',() => {
        it('Should return the name you give', () => {
            const internTest = new Intern('Justin', '2', 'intern@protonmail.com', 'school university', 'intern');
            const testSchool = 'school university';
            expect(testSchool).toEqual(internTest.testSchool());
        })
    })
    describe('position',() => {
        it('Should return the name you give', () => {
            const internTest = new Intern('Justin', '2', 'intern@protonmail.com', 'school university', 'intern');
            const testPosition = 'Intern';
            expect(testPosition).toEqual(internTest.testPosition());
        })
    })
})