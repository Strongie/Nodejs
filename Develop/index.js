// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'project',
        message: 'What is the name of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of the project?',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Please provide installation details for the project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What can the project be used for?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license will be used?',
        choices: ["MIT", "ISC", "GNU", "MOZILLA", "PERL" ],
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the project?',
      },
      {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run tests?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync (fileName,data);
}



// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
        fs.writeFile("README.md", generateMarkdown(data), (err) =>
          err ? console.log(err) : console.log('Your README has been generated')
        );
      })};

// Function call to initialize app
init();


