
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employee = require('./team/employee');
const manager = require('./team/manager');
const engineer = require('./team/engineer');
const intern = require('./team/intern');

// const { eventNames } = require("process")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

let buildTeam = [];

const employee = [
    {
        type: "list",
        message: "Would you like to view info on your team?  Or add another team member?",
        name: "add",
        choices: ["View team info", "Add a team member"],
        }
];

const role = [
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
    console.log(init);
    inquirer.prompt(employee).then((choices) => {
        console.log(employee);
        if(choices.add === "add a member") {
            addMember();
        } else {
            createHTML();
        }
    })
    };

    function addMember() {
        console.log(addMember);
        inquirer.prompt(role).then((choices) => {
          if (choices.role === "Manager") {
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
          } else if (choices.role === "Engineer") {
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
          } else if (choices.role === "Intern") {
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
              createHTML();
          }
        });
      }

      init();

    function createHTML () {
         if(!fs.existsSync(OUTPUT_DIR)) {
             fs.mkdirSync(OUTPUT_DIR);
         }
console.log(teamMembers);
         fs.writeFileSync(outputPath, render(teamMembers),  "utf-8");

    }