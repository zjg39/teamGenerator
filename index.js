// The packages we need, the classes we need

const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

const employee = require('./team/employee');
const manager = require('./team/manager');
const engineer = require('./team/engineer');
const intern = require('./team/intern');


// Array to store employee team

let buildTeam = [];


// Init function containing the prompt sequence

function init(){
    promptSequence();
}


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
            createEmployeeCard();
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
        let addMemberEngineer = new engineer(response.name, response.id, response.email, response.gitHubId);
        buildTeam.push(addMemberEngineer);
        if (response.addMember === 'Intern') {
            internQuestions();
        } else if (response.addMember === 'Engineer') {
            engineerQuestions();
        } else if (response.addMember === 'Manager') {
            managerQuestions();
        } else {
            createEmployeeCard();
        }
    })
}

// If the user chooses a Manager for the team, the following code is executed.

function managerQuestions(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of the Manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Manager\'s email address?'
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What is the Manager\'s phone number?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: ' Would you like to add another employee to your team?',
            choices: ['Intern', 'Engineer', 'Manager', 'I don\'t need another employee for my team.']
        }
    ]).then(response =>{
        let addMemberManager = new manager(response.name, response.id, response.email, response.phone);
        buildTeam.push(addMemberManager);
        if (response.addMember === 'Intern') {
            internQuestions();
        } else if (response.addMember === 'Engineer') {
            engineerQuestions();
        } else if (response.addMember === 'Manager') {
            managerQuestions();
        } else {
            createEmployeeCard();
        }
    })
}

// The choices, once made, are fed through the following function to create the 'cards' that will display their information.

function createEmployeeCard(){
    let makeCard = '';
    for(i = 0; i < buildTeam.length; i++){
        console.log(buildTeam[i].position)
        if (buildTeam[i].position === 'Manager') {
            makeCard += `<div class="d-flex p-2 justify-content-center">
         <div class="card mb-5 mt-5 m-1 bg-white rounded" style="width: 18rem;">
         <div class="card-body"
            style="background-color:rgb(204,255,102);
            color:(170,153,255)">
                <h4 class="card-title p-1">${buildTeam[i].name}</h4>
                <h5 class="card-text">${buildTeam[i].getPosition()}</h5>
         </div>
            <ul class="list-group list-group-flush p-3">
                <li class="list-group-item">ID: ${buildTeam[i].id}</li>
                <li class="list-group-item">
                Email: <a href="mailto: ${buildTeam[i].email}"> ${buildTeam[i].email}</a></li>
                <li class="list-group-item">${buildTeam[i].getPhoneNumber()}</li>
            </ul>
         </div>
        </div>`
        } else if (buildTeam[i].position === 'Engineer') {
         makeCard += `<div class="d-flex p-2 justify-content-center">
         <div class="card mb-5 mt-5 m-1 bg-white rounded" style="width: 18rem;">
         <div class="card-body"
            style="background-color:rgb(204,255,102);
            color:(170,153,255)">
                <h4 class="card-title p-1">${buildTeam[i].name}</h4>
                <h5 class="card-text">${buildTeam[i].getPosition()}</h5>
         </div>
            <ul class="list-group list-group-flush p-3">
                <li class="list-group-item">ID: ${buildTeam[i].id}</li>
                <li class="list-group-item">
                Email: <a href="mailto: ${buildTeam[i].email}"> ${buildTeam[i].email}</a></li>
                <li class="list-group-item">${buildTeam[i].getGitHubId()}</li>
            </ul>
         </div>
        </div>`
        } else if (buildTeam[i].position === 'Intern') {
            makeCard += `<div class="d-flex p-2 justify-content-center">
         <div class="card mb-5 mt-5 m-1 bg-white rounded" style="width: 18rem;">
         <div class="card-body"
            style="background-color:rgb(204,255,102);
            color:(170,153,255)">
                <h4 class="card-title p-1">${buildTeam[i].name}</h4>
                <h5 class="card-text">${buildTeam[i].getPosition()}</h5>
         </div>
            <ul class="list-group list-group-flush p-3">
                <li class="list-group-item">ID: ${buildTeam[i].id}</li>
                <li class="list-group-item">
                Email: <a href="mailto: ${buildTeam[i].email}"> ${buildTeam[i].email}</a></li>
                <li class="list-group-item">${buildTeam[i].getSchool()}</li>
            </ul>
         </div>
        </div>`
        }
    }
    return makeCard;
    function makePage(buildTeam){
        fs.writeFile('teamPage.html', writePage(buildTeam), (err) =>
        err ? console.log(err) : console.log('HTML file created'))
    }
}

function writePage(buildTeam){
    return `<!DOCTYPE html>
    <html lang = 'en'>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    </html>`
}
init();