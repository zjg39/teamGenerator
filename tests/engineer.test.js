// Engineer Test

const Engineer = require('../team/engineer');

describe('Engineer',() =>{
    describe('name',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer', 'engineerGit');
            const testName = 'John';
            expect(testName).toEqual(engineerTest.testName());
        })
    })
    describe('id',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer', 'engineerGit');
            const testId = '1';
            expect(testId).toEqual(engineerTest.testId());
        })
    })
    describe('email',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer', 'engineerGit');
            const testEmail = 'engineer@protonmail.com';
            expect(testEmail).toEqual(engineerTest.testEmail());
        })
    })
    describe('position',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer', 'engineerGit');
            const testPosition = 'engineer';
            expect(testPosition).toEqual(engineerTest.testPosition());
        })
    })
    describe('gitHubId',() => {
        it('Should return the name you give', () => {
            const engineerTest = new Engineer('Jane', '4', 'engineer@protonmail.com', 'engineer', 'engineerGit');
            const testGitId = 'engineerGit';
            expect(testGitId).toEqual(engineerTest.testGitId());
        })
    })
})