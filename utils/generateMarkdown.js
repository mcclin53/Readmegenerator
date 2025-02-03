// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "GNU General Public 3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "no license":
      return "";
  }
}

// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public 3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "no license":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return "";
  } else {
    return (`This project is licensed under the ${license}.
      Please click the link for more info: ${renderLicenseLink(license)}`)
    }
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}\n 
  ## Table of Contents\n
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](license)
  - [Questions](#questions)
  ## Description\n${data.description}\n
  ## Installation\n${data.installation}\n
  ## Usage\n${data.usage}\n
  ## Contributing\n${data.contributing}\n
  ## Tests\n${data.tests}\n
  ## License\n${renderLicenseSection(data.license)}\n
  ## Questions\n
  If you have any questions, please refer to my contact information below:\n
  ### GitHub Username: ${data.username}\n
  ### GitHub Link: ${data.githubLink}\n
  ### Email: ${data.email}\n
  ### Additional Contact Info: ${data.contactInfo}\n
`;

};
export default generateMarkdown;
