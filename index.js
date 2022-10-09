const inquirer = require('inquirer');
const fs = require('fs');
const makeEmployee = require('./src/makeEmployee.js');


const ManagerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Manager's name? "
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the manager's ID number: ",
        default: "69",
        validate: (answer) => {
            if (isNaN(answer)) {
                return 'Please enter a valid number'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email: "
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number: ",
        validate: (answer) => {
            if (isNaN(answer)) {
                return 'Please enter a valid number'
            }
            return true
        }
    }
]

function main() {
    inquirer
    .prompt([...ManagerQuestions, {
        type: 'list',
        name: 'chooseEmployee',
        message: "Which employee do you want to add?",
        choices: ['Engineer','Intern', 'Finish Team Build' ]
    }])
    .then((answers) => {
      let {managerName, ID, email, officeNumber, chooseEmployee} = answers
      console.log(answers);
      checkChoice(chooseEmployee);
    });
}

function checkChoice(employee) {
    if(employee === 'Engineer') {
        makeEmployee.makeEngineer();
    }
    else if(employee === 'Intern') {
        makeEmployee.makeIntern();
    } else {
        return;
    }
}

main();

