// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
import { title } from "process";
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the project title?",
    name: "title"
  },
  {
    type: "input",
    message: "Enter a description about the application?",
    name: "description"
  },
  {
    type: "input",
    message: "Enter any installation instructions?",
    name: "installation"
  },
  {
    type: "input",
    message: "Explain the applications functionality and usage?",
    name: "usage"
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution"
  },
  {
    type: "input",
    message: "List the tests for this file?",
    name: "test"
  },
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "github"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: 'list',
    message: "Select a license type",
    name: "license",
    choices: [
        'MIT',
        'Mozilla',
        'ISC',
        'IBM'
    ]
  }  
];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName,data)
    fs.writeFile(fileName,generateMarkdown(data), (err)=>err?console.error(err):console.log("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
