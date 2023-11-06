// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide information on how to install your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide information on how to use your project:",
  },
  {
    type: "input",
    name: "testing",
    message:
      "Provide information on how to test that your project is working as intended:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide information on how to contribute to this project:",
  },
  {
    type: "input",
    name: "credits",
    message: "Provide information on who worked on this project:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license:",
    choices: ["Apache", "MIT", "none"],
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
async function init(path = "./output") {
  const userData = await inquirer.prompt(questions);
  const markdown = generateMarkdown(userData);

  writeToFile(`${path}/README.md`, markdown);
}

// TEST CASE
// console.log(
//   generateMarkdown({
//     title: "README generator",
//     description: "",
//     installation: "",
//     usage: "",
//     testing: "",
//     contributing: "",
//     credits: "",
//     github: "jkellogg01",
//     email: "kellogg.20.joshua@gmail.com",
//     license: "MIT",
//   })
// );

// Function call to initialize app
init(process.argv[2]);
