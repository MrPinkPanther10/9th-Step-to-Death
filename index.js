// required modules 
const fs = require('fs');
const inquirer = require('inquirer');

// the js where the readme structure is generated
const generatePage = require('./assets/generateStructure.js');

// array of questions for the README generator
const questions = () => {
    // inquirer to ask user the questions
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your Github Username (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!')
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
            message: "What is the name of your project?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!')
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Enter a short description about your project",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!')
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "What type of license should your project have?",
            choices: ["MIT", "GNU"],
            default: ["MIT"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license!')
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "install",
            message: "What are the required steps to install your project?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the installation steps for your project!')
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use the app?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be used run to run tests?',
            default: 'npm test',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the command!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who were the contributors to your repo?'
        }
    ])
}

questions()