// Engineer Test

const Engineer = require('../team/engineer');

describe('engineer',() =>{
    describe('name',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer');
            const testName = 'Jane';
            expect(testName).toEqual(engineerTest.getName());
        })
    })
    describe('id',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer');
            const testId = '4';
            expect(testId).toEqual(engineerTest.getId());
        })
    })
    describe('email',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer');
            const testEmail = 'engineer@protonmail.com';
            expect(testEmail).toEqual(engineerTest.getEmail());
        })
    })
    describe('position',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer');
            const testPosition = 'Engineer';
            expect(testPosition).toEqual(engineerTest.getPosition());
        })
    })
    describe('gitHubId',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer');
            const testGitId = 'engineer';
            expect(testGitId).toEqual(engineerTest.getGitHubId());
        })
    })
})