
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employee = require('./team/employee');
const manager = require('./team/manager');
const engineer = require('./team/engineer');
const intern = require('./team/intern');

let buildTeam = [];

const employee = [
    {
        type: "list",
        message: "Would you like to view info on your team?  Or add another team member?",
        name: "add",
        choices: ["View team info", "Add a team member"],
        }
];

const position = [
    {
        type: "list",
        message: "What is your position?",
        name: "position",
        choices: ["Intern", "Manager", "Engineer"],
    }
];


const intern = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your intern's ID number?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your intern's email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What school is your intern currently attending?",
        name: "school",
    },
];

const manager = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your manager's ID number?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your manager's email address?",
        name: "email",
    },
    {
        type: "input",
        message:"What is your manager's phone number?",
        name: "phone",
    },
];

const engineer = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name",
    },
    {
        type:"input",
        message: "What is your engineer's ID number?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your engineer's email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your engineer's GitHub ID?",
        name: "gitHub",
    },
];

function init() {
    inquirer.prompt(employee).then((choices) => {
        console.log(employee);
        if(choices.add === "add a member to your team") {
            addTeam();
        } else {
            makeHTML();
        }
    })
    };

    function addTeam() {
        inquirer.prompt(position).then((choices) => {
          if (choices.position === "Manager") {
            inquirer.prompt(manager).then((answers) => {
              let newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.position,
                answers.phone,
              );
              buildTeam.push(newManager);
              init();
            });
          } else if (choices.position === "Engineer") {
            inquirer.prompt(engineer).then((answers) => {
              let newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.position,
                answers.gitHubId,
              );
              buildTeam.push(newEngineer);
              init();
            });
          } else if (choices.position === "Intern") {
            inquirer.prompt(intern).then((answers) => {
              let newIntern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school,
                answers.position,
              );
              buildTeam.push(newIntern);
              init();
            });
          } else {
              makeHTML();
          }
        });
      }

      init();

      function makeHTML (buildTeam) {
        let renderPage;
        for(i = 0; i < buildTeam.length; i++){
            if (buildTeam[i].position == 'Manager'){
                managerCard();
            } else if (buildTeam[i].position == 'Intern') {
                internCard();
            } else if (buildTeam[i].position == 'Engineer') {
                engineerCard();
            }
        }
      }

      function managerCard(data){
          var managerText = `<div class="row">
          <div class="col s12">
              <div class="card-content">
                  <span class="title">${data.getPosition}</span>
                  <p>Name: ${data.getName()}</p>
                  <p>ID: ${data.getId()}</p>
                  <p>Email: ${data.getEmail()}</p>
              </div>
          </div>
      </div>`

      renderPage = managerText;
      }
      function internCard(data){
          var internText = `<div class="row">
          <div class="col s12">
              <div class="card-content">
                  <span class="title">${data.getPosition}</span>
                  <p>Name: ${data.getName()}</p>
                  <p>ID: ${data.getId()}</p>
                  <p>Email: ${data.getEmail()}</p>
              </div>
          </div>
      </div>`

      renderPage += internText;
      }

      function engineerCard(data){
        var engineerText = `<div class="row">
        <div class="col s12">
            <div class="card-content">
                <span class="title">${data.getPosition}</span>
                <p>Name: ${data.getName()}</p>
                <p>ID: ${data.getId()}</p>
                <p>Email: ${data.getEmail()}</p>
            </div>
        </div>
    </div>`

    renderPage += engineerText;
    }
    return renderPage;