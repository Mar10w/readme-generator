// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';
import { questions } from './utils/questions.js';

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
      err ? console.error(err) : console.log('README.md has been generated!')
    );
  }
  

// TODO: Create a function to initialize app
//function init() {}
async function init() {
    try {
      const userInput = await inquirer.prompt(questions);
      const markdownContent = generateMarkdown(userInput);
      writeToFile('README.md', markdownContent);
    } catch (error) {
      console.error('Error initializing the application:', error);
    }
  }

// Function call to initialize app
init();
