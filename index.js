// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: '',
        message: 'What is your title?',
        name: 'title',
    },
    {
        type: '',
        message: 'What is your user story?',
        name: 'userStory',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, {encoding:'utf-8'}, (error) => {
if (error) {
    console.error (error);
    return;
}
console.log ('Success');
    });
}

// TODO: Create a function to initialize app
function init() {}
// ask the questions
// name and place the file 

// Function call to initialize app
init();
