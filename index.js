const inquirer = require('inquirer');
const fs = require('fs');
const variable = fs.writeFile;

const teamGeneratorQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamManagerName',
            message: 'What is the name of the team manager?'
        },
        {
            type: 'input',
            name: 'teamManagerID',
            message: 'What is the team manager\'s ID?'
        },
        {
            type: 'input',
            name: 'teamManagerEmail',
            message: 'What is the team manager\'s email?'
        },
        {
            type: 'input',
            name: 'teamManagerPhone',
            message: 'What is the team manager\'s phone number?'
        },
        {
            type: 'input',
            name: 'teamMemberType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t need any more team members']
        }
    ])
}

function convertToFile (answers)  {
    return `
    `
}