// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Your Project Title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Add Installation Instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Add Usage Information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Add Contribution Guidelines',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Add Test Instructions',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a License',
        name: 'license',
        // add a badge near the top of the README and a notice explaining which licence the app is covered under the License section
    },
    {
        type: 'input',
        message: 'Add Your Username',
        name: 'username',
        // Questions section
    },
    {
        type: 'input',
        message: 'Add Your GitHub profile link',
        name: 'githubLink',
        // Questions section
    },
    {
        type: 'input',
        message: 'Add Your Email Address',
        name: 'email',
        // Questions section
    },
    {
        type: 'input',
        message: 'Add Additional Contact Info',
        name: 'contactInfo',
        // Questions section
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
