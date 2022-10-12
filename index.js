const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const makeHTML = require('./src/makeHTML.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const idTracker = [];

let endHTML = `
    </main>
</body>
</html> 
`;


const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Employee's name? ",
        validate: (answer) => {
            if (!answer) {
                return 'Please enter a valid input'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the employee's ID number: ",
        validate: (answer) => {
            if (isNaN(answer) || !answer) {
                return 'Please enter a valid number'
            }
            for (let i = 0; i < idTracker.length; i++) {
                if(answer == idTracker[i]){
                    return 'Please enter a unique ID'
                }
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
                if (isNaN(answer) || !answer) {
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
      console.log(`\n`)
      console.log(`--------------------------------------`)
      console.log(`\n`)
      const {name, ID, email, officeNumber, chooseEmployee} = answers
      let manager = new Manager(name, ID, email, officeNumber);
      idTracker.push(ID);
      makeHTML.concatManager(manager);
      if (chooseEmployee == 'Finish Team Build'){
        fs.writeFile('./dist/index.html', makeHTML.generateHTML()+endHTML, (error) => error ?
        console.log(error) : console.log("Success!"));
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
            validate: (answer) => {
                if (!answer) {
                    return 'Please enter a valid input'
                }
                return true
            }
        },
        {
            type: 'list',
            name: 'chooseEmployee',
            message: "Do you want to add another employee?",
            choices: ['Engineer','Intern', 'Finish Team Build' ]
        }
    ])
    .then((answersEng) => {
        console.log(`\n`)
        console.log(`--------------------------------------`)
        console.log(`\n`)
        let {name, ID, email, github, chooseEmployee} = answersEng
        let engineer = new Engineer(name, ID, email, github);
        idTracker.push(ID);
        makeHTML.concatEngineer(engineer);
        if (chooseEmployee == 'Finish Team Build'){
          fs.writeFile('./dist/index.html', makeHTML.generateHTML()+endHTML, (error) => error ?
          console.log(error) : console.log("Success!"));
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
            validate: (answer) => {
                if (!answer) {
                    return 'Please enter a valid input'
                }
                return true
            }
        },
        {
            type: 'list',
            name: 'chooseEmployee',
            message: "Do you want to add another employee?",
            choices: ['Engineer','Intern', 'Finish Team Build' ]
        }
    ])
    .then((answersInt) => {
        console.log(`\n`)
        console.log(`--------------------------------------`)
        console.log(`\n`)
        let {name, ID, email, school, chooseEmployee} = answersInt
        let intern = new Intern(name, ID, email, school)
        idTracker.push(ID);
        makeHTML.concatIntern(intern);
        if (chooseEmployee == 'Finish Team Build'){
          fs.writeFile('./dist/index.html', makeHTML.generateHTML()+endHTML, (error) => error ?
          console.log(error) : console.log("Success! Your Team has been built! Check the distribution folder for your beautifully formatted team list"));
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
    }
}

main();

