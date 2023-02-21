const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');

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




  const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
      if (err) {
        return console.log(err);
      }
      console.log("Team roster generated!");
    });
  }
  

  
  
  