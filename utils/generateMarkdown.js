const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.includes("none")) return "";
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes("none")) return "";
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// To be clear, I don't -love- how I did this.
// It's perscriptive, it has a lot of overhead, and frankly, it looks pretty bad.
// The only alternative I can think of right now is having huge preformatted strings hard coded in this file.
// This method survives as the lesser of those two evils.
function renderLicenseSection(license) {
  if (license.includes("none")) return "";
  let filePath = "./utils/licenseBodies/";
  //TODO: maybe a licenses object could store these filepaths? Would look nicer than a switch statement but I'm not sure about the readability/functionality implications, so I'll have to look into that.
  switch (license) {
    case "MIT":
      filePath += "mitLicense.txt";
      break;
    case "Apache":
      filePath += "apacheLicense.txt";
      break;
  }
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

## [License - ${license}](${licenseURL})

${licenseBody}
`;
}

module.exports = generateMarkdown;
