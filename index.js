const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkDown = require(".generateMarkdown");


// array of questions for user

// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe what your project is',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'List the steps to take in order to install the application',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Demonstrate how to use the application',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Instructions on how to test application',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute to the application',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);
  };

  questions();

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


