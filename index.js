const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
    inquirer.prompt([
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
            message: 'What are the installation requirements?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Demonstrate how to use the application',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What is the command to run your test?',
        },
        // {
        //     type: 'list',
        //     name: 'license',
        //     message: 'Choose a license for your project',
        //     choices:[]
        // },
        {
            type: 'input',
            name: 'contribution',
            message: 'Would you like others to contribute to this project?',
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

questions()
    .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));


// function writeToFile(fileName, data) {
// }

// function call to initialize program

// init();


