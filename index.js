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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log(`wrote successfully to ${fileName}!`);
  });
}

// TODO: Create a function to initialize app
async function init(path) {
  const userData = await inquirer.prompt(questions);
  const markdown = generateMarkdown(userData);

  const targetPath = path || "./output";
  writeToFile(`${targetPath}/README.md`, markdown);
}

// Function call to initialize app
init(process.argv[2]);
