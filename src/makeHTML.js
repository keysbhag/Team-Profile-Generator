const inquirer = require("inquirer")

// Started HTML Template which holds the top part of the HTML before any content is created
let htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💼</text></svg>">
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Team Profile Viewer</title>
</head>
<body>
    
    <header>
        <h1 class="title d-flex justify-content-center"> My Team </h1>
    </header>

    <main class="d-flex justify-content-center">
    `;

// Supporting function to return the htmlTemplate string literal
function generateHTML() {
    return htmlTemplate;
}

// When called, function will be passed the created instance Manager object and fill in the
// template literal, then concat that to the initial string 
function concatManager(manager) {
    htmlTemplate = htmlTemplate+ ` <div class="card" style="width: 20rem;">
    <div class="card-header d-flex flex-column">
      <h2 class="card-title"> ${manager.getName()}</h2>
      <p class="card-descr"> <i class='fa fa-coffee'></i> ${manager.getRole()} </p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush border">
            <li class="list-group-item"> ID: ${manager.getId()}</li>
            <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}" target="_blank"> ${manager.getEmail()} </a> </li>
            <li class="list-group-item"> Office Number: ${manager.getOfficeNum()}</li>
        </ul>
    </div>
    </div>`;

    return;
}

// When called, function will be passed the created instance Engineer object and fill in the
// template literal, then concat that to the main string template 
function concatEngineer(engineer) {
    htmlTemplate = htmlTemplate+ ` <div class="card" style="width: 20rem;">
    <div class="card-header d-flex flex-column">
      <h2 class="card-title"> ${engineer.getName()}</h2>
      <p class="card-descr"> <i class='fa fa-keyboard-o'></i> ${engineer.getRole()} </p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush border">
            <li class="list-group-item"> ID: ${engineer.getId()}</li>
            <li class="list-group-item"> Email: <a href="mailto:${engineer.getEmail()}" target="_blank"> ${engineer.getEmail()} </a> </li>
            <li class="list-group-item"> GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank"> ${engineer.getGitHub()}</a> </li>
        </ul>
    </div>
    </div>`;

    return;
}

// When called, function will be passed the created instance Intern object and fill in the
// template literal, then concat that to the main string template 
function concatIntern(intern) {
    htmlTemplate = htmlTemplate+ ` <div class="card" style="width: 20rem;">
    <div class="card-header d-flex flex-column">
      <h2 class="card-title"> ${intern.getName()}</h2>
      <p class="card-descr"> <i class='fa fa-graduation-cap'></i> ${intern.getRole()} </p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush border">
            <li class="list-group-item"> ID: ${intern.getId()}</li>
            <li class="list-group-item"> Email: <a href="mailto:${intern.getEmail()}" target="_blank"> ${intern.getEmail()} </a> </li>
            <li class="list-group-item"> School: ${intern.getSchool()}</li>
        </ul>
    </div>
    </div>`;

    return;
    
}

module.exports = {
    generateHTML,
    htmlTemplate,
    concatManager,
    concatEngineer,
    concatIntern
}