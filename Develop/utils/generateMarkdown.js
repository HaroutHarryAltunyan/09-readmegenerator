// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license && license.toLowerCase() !== "none") {
//     return `![Github license](https://img.shields.io/badge/license-${encodeURIComponent(license)}-yellowgreen.svg)`;
//   }
//   return "";
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license && license.toLowerCase() !== "none") {
//     return `\n* [License](#license)\n`;
//   }
//   return "";
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license && license.toLowerCase() !== "none") {
//     return `## License

// Licensed under the ${license} license.`;
//   }
//   return "";
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// by ${data.name}

// ${renderLicenseBadge(data.license)}

// ## Table of Contents
// - [Description](#description)
// - [Requirements](#requirements)
// - [Usage](#usage)
// - [Contact Me](#contact-me)
// - [Contributors](#contributors)
// - [Testing](#testing)
// ${renderLicenseLink(data.license)}

// ## Description
// ${data.description}

// ## Requirements
// ${data.require}

// ## Usage
// ${data.usage}

// ## Contact Me
// Name: ${data.name}  
// Email: ${data.email}  
// GitHub: [${data.creator}](https://github.com/${data.creator}/)

// ## Contributors
// ${data.contributors}

// ## Testing
// \`\`\`
// ${data.test}
// \`\`\`

// ${renderLicenseSection(data.license)}
// `;
// }

// module.exports = generateMarkdown;




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license.toLowerCase() !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${encodeURIComponent(license)}-yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && license.toLowerCase() !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license.toLowerCase() !== "none") {
    return `## License

Licensed under the ${license.charAt(0).toUpperCase() + license.slice(1)} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title || "Project Title"}
by ${data.name || "Your Name"}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Requirements](#requirements)
- [Usage](#usage)
- [Contact Me](#contact-me)
- [Contributors](#contributors)
- [Testing](#testing)
${renderLicenseLink(data.license)}

## Description
${data.description || "Project description goes here."}

## Requirements
${data.require || "List any project dependencies or requirements here."}

## Usage
${data.usage || "Provide instructions on how to use the project."}

## Contact Me
Name: ${data.name || "Your Name"}  
Email: ${data.email || "your-email@example.com"}  
GitHub: [${data.creator || "GitHub Username"}](https://github.com/${data.creator || "GitHubUsername"}/)

## Contributors
${data.contributors || "List project contributors here."}

## Testing
\`\`\`
${data.test || "Provide testing instructions here."}
\`\`\`

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;