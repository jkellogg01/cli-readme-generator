// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${title}

${badge}

## Description

${description}

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Testing](#testing)
[Contributing](#contributing)
[Questions](#Questions)
[Credits](#credits)
[License](#license)

## Installation

${installation}

## Usage

${usage}

## Testing

${testing}

## Contributing

${contributing}

## Questions

You can reach me:

- on GitHub [${githubName}](${githubURL})
- via email: ${email}

## Credits

${credits}

## [License - ${licenseName}](${licenseURL})

${licenseBody}
`;
}

module.exports = generateMarkdown;
