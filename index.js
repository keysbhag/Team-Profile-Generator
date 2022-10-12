// Importation of required libraries and modules
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const makeHTML = require('./src/makeHTML.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// Used to make sure only unique ID's are created for each new team member added
const idTracker = [];

// Used to end the HTML template generated
let endHTML = `
    </main>
</body>
</html> 
`;

// General questions array used to create every employee
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

// Main function called to initially create the manager profile card, which uses the general questions plus an additional manager
// specific question and also prompts the user to choose between making more employees or finishing the team build
function main() {
    console.log(`Manager Build:`)
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
      // de-structures the answers that are returned from the inquirer prompt 
      const {name, ID, email, officeNumber, chooseEmployee} = answers
      // Creates a new manager instance object and passes in the inputted values
      let manager = new Manager(name, ID, email, officeNumber);
      // Tracks ID's by pushing it in an array
      idTracker.push(ID);
      // Concatenates the newly inputted employee profile into the HTML template literal
      makeHTML.concatManager(manager);
      // Depending on what the user chose in the team build menu, the if statement will finish the team build and write the HTML file
      // if user choses 'Finish Team Build'
      if (chooseEmployee == 'Finish Team Build'){
        fs.writeFile('./dist/index.html', makeHTML.generateHTML()+endHTML, (error) => error ?
        console.log(error) : console.log("Success! Your Team has been built! Check the distribution folder for your beautifully formatted team list"));
        return;
      }
      // Else the checkChoice function will open another function to either create a new Engineer or Intern 
      else {
      checkChoice(chooseEmployee);
      }
    });
}

// Function does the same as the Main function but prompts for the creation of an Engineer
function makeEngineer() {
    console.log(`\n`)
    console.log(`--------------------------------------`)
    console.log(`Engineer Build:`)
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
        // De-structures Answers, makes new instance, saves ID, and concatenates to the HTML template
        let {name, ID, email, github, chooseEmployee} = answersEng
        let engineer = new Engineer(name, ID, email, github);
        idTracker.push(ID);
        makeHTML.concatEngineer(engineer);
        // Finishes team build and writes HTML if chosen 
        if (chooseEmployee == 'Finish Team Build'){
          fs.writeFile('./dist/index.html', makeHTML.generateHTML()+endHTML, (error) => error ?
          console.log(error) : console.log("Success! Your Team has been built! Check the distribution folder for your beautifully formatted team list"));
          return;
        }
        // Else make inputted employee      
        else {
          checkChoice(chooseEmployee);
        }
      });
}

// Function does the same as the Main function but prompts for the creation of an Intern
function makeIntern() {
    console.log(`\n`)
    console.log(`--------------------------------------`)
    console.log(`Intern Build:`)
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
        // De-structures Answers, makes new instance, saves ID, and concatenates to the HTML template
        let {name, ID, email, school, chooseEmployee} = answersInt
        let intern = new Intern(name, ID, email, school)
        idTracker.push(ID);
        makeHTML.concatIntern(intern);
        // Finishes team build and writes HTML if chosen 
        if (chooseEmployee == 'Finish Team Build'){
          fs.writeFile('./dist/index.html', makeHTML.generateHTML()+endHTML, (error) => error ?
          console.log(error) : console.log("Success! Your Team has been built! Check the distribution folder for your beautifully formatted team list"));
          return;
        }
        // Else make inputted employee 
        else {
          checkChoice(chooseEmployee);
        }
      });
}

// Function gets passed the chosen employee to be created and calls the corresponding 
// function to prompt the user to make them
function checkChoice(employee) {
    if(employee === 'Engineer') {
        makeEngineer();
    }
    else if(employee === 'Intern') {
        makeIntern();
    }
    return;
}

main();

