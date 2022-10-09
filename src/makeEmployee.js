const inquirer = require("inquirer")

function makeEngineer() {
    inquirer
      .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Engineer's name? "
        },
        {
            type: 'input',
            name: 'engID',
            message: "What is the employee's ID number: ",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return 'Please enter a valid number'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'engEmail',
            message: "What is the Engineer's email: "
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github: ",
        }
    ])
    .then((answersEng) => {
        // let {managerName, ID, email, officeNumber, chooseEmployee} = answers
        console.log(answersEng);
        // checkChoice(chooseEmployee);
      });
}

function makeIntern() {
    inquirer
      .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Intern's name? "
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the Intern's ID number: ",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return 'Please enter a valid number'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the Interns's email: "
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github: ",
        }
    ])
    .then((answersInt) => {
        // let {managerName, ID, email, officeNumber, chooseEmployee} = answers
        console.log(answersInt);
        // checkChoice(chooseEmployee);
      });
}


module.exports = {
    makeEngineer,
    makeIntern
}