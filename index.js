const fs = require('fs');
const inquirer = require('inquirer');

let team = [];

// Prompt for team manager's information
const managerPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What's the team manager's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What's the team manager's ID?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What's the team manager's email?"
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What's the team manager's office number?"
      }
    ])
    .then(answers => {
      team.push({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        officeNumber: answers.officeNumber,
        role: 'Manager'
      });
      addTeamMember();
    });
};

// Add a new team member
const addTeamMember = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'What role would you like to add?',
        choices: ['Engineer', 'Intern', 'Finish building team']
      }
    ])
    .then(answers => {
      switch (answers.role) {
        case 'Engineer':
          engineerPrompt();
          break;
        case 'Intern':
          internPrompt();
          break;
        case 'Finish building team':
          generateHTML();
          break;
        default:
          console.log('Invalid option');
      }
    });
};

// Prompt for engineer's information
const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What's the engineer's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What's the engineer's ID?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What's the engineer's email?"
      },
      {
        type: 'input',
        name: 'github',
        message: "What's the engineer's GitHub username?"
      }
    ])
    .then(answers => {
      team.push({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        github: answers.github,
        role: 'Engineer'
      });
      addTeamMember();
    });
};

// Prompt for intern's information
const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What's the intern's ID?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What's the intern's email?"
      },
      {
        type: 'input',
        name: 'school',
        message: "Where did the student go to school?"
      }
    ])
    .then(answers => {
      team.push({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        school: answers.school,
        role: 'Intern'
      });
      addTeamMember();
    });
};

const generateHTML =  inquirer.prompt(questions).then((answers) => {
    let html = `
      <h1>Team Roster</h1>
      <h2>Manager</h2>
      <ul>
        <li>Name: ${answers.managerName}</li>
        <li>ID: ${answers.managerId}</li>
        <li>Email: ${answers.managerEmail}</li>
        <li>Office Number: ${answers.managerOfficeNumber}</li>
      </ul>
    `;




    // <!DOCTYPE html>
    // <html>
    //   <head>
    //     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    //     <link rel="stylesheet" type="text/css" href="team.css">
    //   </head>
    //   <body>
    //     <div class="container-fluid">
    //       <h1 class="text-center">Team Roster</h1>
    //       <div class="row">
    //         <div class="col-sm-4">
    //           <div class="card">
    //             <div class="card-header">
    //               Manager
    //             </div>
    //             <ul class="list-group list-group-flush">
    //               <li class="list-group-item">Name: John Smith</li>
    //               <li class="list-group-item">ID: 1</li>
    //               <li class="list-group-item">Email: johnsmith@example.com</li>
    //               <li class="list-group-item">Office Number: 123</li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div class="col-sm-4">
    //           <div class="card">
    //             <div class="card-header">
    //               Engineer
    //             </div>
    //             <ul class="list-group list-group-flush">
    //               <li class="list-group-item">Name: Jane Doe</li>
    //               <li class="list-group-item">ID: 2</li>
    //               <li class="list-group-item">Email: janedoe@




  
    fs.writeFile("team.html", html, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Team roster generated!");
    });
  });

  
  
  