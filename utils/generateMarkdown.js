const fs = require("fs");

const licenses = {
  MIT: {
    bodyFilename: "mitLicense.txt",
    badge:
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",

    url: "https://opensource.org/licenses/Apache-2.0",
  },
  Apache: {
    bodyFilename: "apacheLicense.txt",
    badge:
      "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    url: "https://opensource.org/licenses/MIT",
  },
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.includes("none")) return "";
  return licenses[license].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes("none")) return "";
  return licenses[license].url;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// To be clear, I don't -love- how I did this.
// It's perscriptive, it has a lot of overhead, and frankly, it looks pretty bad.
// The only alternative I can think of right now is having huge preformatted strings hard coded in this file.
// This method survives as the lesser of those two evils.
function renderLicenseSection(license) {
  if (license.includes("none")) return "";
  let filePath = `./utils/licenseBodies/${licenses[license].bodyFilename}`;
  const body = fs.readFileSync(filePath, "utf8", (err, data) => {
    if (err) console.error(err);
    return data;
  });
  return body;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  testing,
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

[${badge}](${licenseURL})

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

## [License - ${license}](${licenseURL})

${licenseBody}
`;
}

module.exports = generateMarkdown;
