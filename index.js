// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const licenseChoices = ["MIT", "BSD", "GNU", "none"];
const questions = [
  {
    type: "input",
    name: "title",
  },
  {
    type: "input",
    name: "description",
  },
  {
    type: "input",
    name: "usage",
  },
  {
    type: "input",
    name: "contributing",
  },
  {
    type: "input",
    name: "credits",
  },
  {
    type: "input",
    name: "github",
  },
  {
    type: "input",
    name: "email",
  },
  {
    type: "list",
    name: "license",
    choices: licenseChoices,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
  const userData = await inquirer.prompt(questions);
  const markdown = generateMarkdown(userData);

  const targetPath = process.argv[2] || "./output/";
  const filename = "README.md";
  writeToFile(targetPath + filename, markdown);
}

// Function call to initialize app
init();
