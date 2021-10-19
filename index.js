// The packages we need, the classes we need

const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
const fs = require("fs");
const util = require('util');

const employee = require('./team/employee');
const manager = require('./team/manager');
const engineer = require('./team/engineer');
const intern = require('./team/intern');


// Array to store employee team

let buildTeam = [];


// Begin prompt sequence for user

function promptSequence() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'What kind of employee would you like to add to you team?',
            choices: ['Intern', 'Engineer', 'Manager']
        }
    ]).then(response => {
        if (response.position === 'Intern'){
            internQuestions();
        } else if (response.position === 'Engineer'){
            engineerQuestions();
        } else managerQuestions();
    })
}

// If the user chooses an Intern for the team, the following code is executed.

function internQuestions(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of the Intern?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Which school did the Intern attend?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Intern\'s email address?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: ' Would you like to add another employee to your team?',
            choices: ['Intern', 'Engineer', 'Manager', 'I don\'t need another employee for my team.']
        }
    ]).then(response =>{
        let addMemberIntern = new intern(response.name, response.id, response.email, response.school);
        buildTeam.push(addMemberIntern);
        if (response.addMember === 'Intern') {
            internQuestions();
        } else if (response.addMember === 'Engineer') {
            engineerQuestions();
        } else if (response.addMember === 'Manager') {
            managerQuestions();
        } else {
            creatEmployeeCard();
        }
    })
}

// If the user chooses an Engineer for the team, the following code is executed.

function engineerQuestions(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of the Engineer?'
        },
        {
            type: 'input',
            name: 'gitHubId',
            message: 'What is the GitHub ID of the Engineer?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineer\'s email address?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: ' Would you like to add another employee to your team?',
            choices: ['Intern', 'Engineer', 'Manager', 'I don\'t need another employee for my team.']
        }
    ]).then(response =>{
        let addMemberIntern = new engineer(response.name, response.id, response.email, response.gitHubId);
        buildTeam.push(addMemberIntern);
        if (response.addMember === 'Intern') {
            internQuestions();
        } else if (response.addMember === 'Engineer') {
            engineerQuestions();
        } else if (response.addMember === 'Manager') {
            managerQuestions();
        } else {
            creatEmployeeCard();
        }
    })
}