const inquirer = require('inquirer');
const fs = require('fs');
const makeHTML = require('./src/makeHTML.js');

const idTracker = [];


const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Employee's name? "
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the employee's ID number: ",
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
        message: "What is the employee's email: ",
        validate(email) {
            const value = email
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
            if (value){
                return true
            }
            return 'please enter valid email'
          }
    }
]

function main() {
    inquirer
    .prompt([...employeeQuestions,
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
        }, 
        {
        type: 'list',
        name: 'chooseEmployee',
        message: "Which employee do you want to add?",
        choices: ['Engineer','Intern', 'Finish Team Build' ]
    }])
    .then((answers) => {
      let {managerName, manID, manEmail, officeNumber, chooseEmployee} = answers
      let manager = new Manager(managerName, manID, manEmail, officeNumber);
      makeHTML.concatManager(manager);
      console.log(answers);
      if (chooseEmployee == 'Finish Team Build'){
        return;
      } else {
      checkChoice(chooseEmployee);
      }
    });
}

function makeEngineer() {
    inquirer
      .prompt([ ...employeeQuestions ,
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github: ",
        },
        {
            type: 'list',
            name: 'chooseEmployee',
            message: "Do you want to add another employee?",
            choices: ['Engineer','Intern', 'Finish Team Build' ]
        }
    ])
    .then((answersEng) => {
        let {engineerName, engID, engEmail, github, chooseEmployee} = answersEng
        let engineer = new Engineer(engineerName,engID,engEmail,github);
        makeHTML.concatEngineer(engineer);
        console.log(answersEng);
        if (chooseEmployee == 'Finish Team Build'){
          return;
        } else if (chooseEmployee == 'Engineer') {
            makeEngineer(chooseEmployee);
            return;
        } else if (chooseEmployee == 'Intern'){
            makeIntern(chooseEmployee);
            return;
        }
      });
}

function makeIntern() {
    inquirer
      .prompt([...employeeQuestions,
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's graduation school: ",
        },
        {
            type: 'list',
            name: 'chooseEmployee',
            message: "Do you want to add another employee?",
            choices: ['Engineer','Intern', 'Finish Team Build' ]
        }
    ])
    .then((answersInt) => {
        let {internName, internID, internEmail, school, chooseEmployee} = answersInt
        let intern = new Intern(internName,internID,internEmail,school)
        makeHTML.concatIntern(intern);
        console.log(answersInt);
        if (chooseEmployee == 'Finish Team Build'){
          return;
        } else if (chooseEmployee == 'Engineer') {
            makeEngineer(chooseEmployee);
            return;
        } else if (chooseEmployee == 'Intern'){
            makeIntern(chooseEmployee);
            return;
        }
      });
}

function checkChoice(employee) {
    if(employee === 'Engineer') {
        makeEngineer();
    }
    else if(employee === 'Intern') {
        makeIntern();
    } else {
        return;
    }
}

class Employee {
    constructor (_name, _id, _email) {
        this.name = _name;
        this.id = _id;
        this.email = _email;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee';
    }
}

class Manager extends Employee {
    constructor(_name, _id, _email, _officeNum) {
        super(_name, _id, _email);
        this.officeNumber = _officeNum;
    }

    getRole () {
        return 'Manager';
    }

}

class Engineer extends Employee {
    constructor(_name, _id, _email, _github) {
        super(_name, _id, _email);
        this.github = _github;
    }

    getGitHub () {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }

}

class Intern extends Employee {
    constructor(_name, _id, _email, _school) {
        super(_name, _id, _email);
        this.school = _school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return 'Intern';
    }

}

main();

