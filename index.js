// // TODO: Include packages needed for this application
// const inquirer = require("inquirer");
// const fs = require("fs");
// const path = require("path");
// const generateMarkdown = require("./utils/generateMarkdown");
// // TODO: Create an array of questions for user input

// const questions = [
//     {
//         type: "input",
//         name: "title",
//         message: "What is the title of your project?",
//       },
//       {
//         type: "input",
//         name: "description",
//         message: "Enter a description:",
//       },
//       {
//         type: "input",
//         name: "installation",
//         message: "Enter installation instructions:",
//       },
//       {
//         type: "input",
//         name: "usage",
//         message: "Enter usage information:",
//       },
//       {
//         type: "input",
//         name: "contributing",
//         message: "Enter contribution guidelines:",
//       },
//       {
//         type: "input",
//         name: "tests",
//         message: "Enter test instructions:",
//       },
//       {
//         type: "list",
//         name: "license",
//         message: "Choose a license:",
//         choices: ["MIT", "Apache 2.0", "GPL 3.0"],
//       },
//       {
//         type: "input",
//         name: "github",
//         message: "Enter your GitHub username:",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Enter your email address:",
//       },
//     ];
    
//     // Generate README content here
//     function generateREADME(answers) {
//       return `
//     # ${answers.title}
    
//     ## Description
//     ${answers.description}
    
//     ## Installation
//     ${answers.installation}
    
//     ## Usage
//     ${answers.usage}
    
//     ## Contributing
//     ${answers.contributing}
    
//     ## Tests
//     ${answers.tests}
    
//     ## License
//     This project is licensed under the ${answers.license} license.
    
//     ## Questions
//     If you have any questions, please contact me at [${answers.email}](mailto:${answers.email}). You can find more of my work at [${answers.github}](https://github.com/${answers.github}).
//     `;
//     }

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(),fileName), data);
//       console.log("README file has been created!");
// }

// // TODO: Create a function to initialize app
// function init() {
//       inquirer.prompt(questions).then((answers) => {
//         const readmeContent = generateREADME(answers);
//         writeToFile("README.md", readmeContent);
//       });
// }

// // Function call to initialize app
// init();










// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => (input ? true : "Title is required."),
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description:",
    validate: (input) => (input ? true : "Description is required."),
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
    validate: (input) => (input ? true : "Usage information is required."),
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
    default: "Feel free to contribute.",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: (input) => (input ? true : "GitHub username is required."),
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (input) =>
      /\S+@\S+\.\S+/.test(input) || "Please enter a valid email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(path.resolve(process.cwd(), fileName), data);
    console.log("README.md file has been successfully created!");
  } catch (error) {
    console.error("Error writing README.md file:", error.message);
  }
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Use generateMarkdown function to create README content
    const readmeContent = generateMarkdown(answers);

    // Write content to README.md file
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
