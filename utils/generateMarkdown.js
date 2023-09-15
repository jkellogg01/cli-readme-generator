// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.includes(none)) return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes(none)) return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.includes(none)) return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  usage,
  contributing,
  credits,
  github,
  email,
  license,
}) {
  const badge = renderLicenseBadge(license);
  const licenseURL = renderLicenseLink(license);
  const licenseBody = renderLicenseSection(license);
  const githubURL = `https://www.github.com/${github}`;

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

- on GitHub [${github}](${githubURL})
- via email: ${email}

## Credits

${credits}

## [License - ${licenseName}](${licenseURL})

${licenseBody}
`;
}

module.exports = generateMarkdown;
