const inquirer = require("inquirer")

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
    <title>Team Profile Viewer</title>
</head>
<body>
    
    <header>
        <h1 class="title d-flex justify-content-center"> My Team </h1>
    </header>

    <main class="d-flex justify-content-center">
    `

function generateHTML() {
    return htmlTemplate;
}

function concatManager(manager) {
    htmlTemplate = htmlTemplate+ ` <div class="card" style="width: 20rem;">
    <div class="card-header d-flex flex-column">
      <h2 class="card-title"> ${manager.getName()}</h2>
      <p class="card-descr"> ${manager.getRole()} </p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush border">
            <li class="list-group-item">${manager.getId()}</li>
            <li class="list-group-item">${manager.getEmail()}</li>
            <li class="list-group-item">${manager.getOfficeNum()}</li>
        </ul>
    </div>
  </div>`;

    return;
}

function concatEngineer(engineer) {
    
}

function concatIntern(intern) {
    
    
}

module.exports = {
    generateHTML,
    htmlTemplate,
    concatManager,
    concatEngineer,
    concatIntern
}