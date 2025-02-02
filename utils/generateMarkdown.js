// TODO: Create a function that returns a license badge based on which license is passed in

import { fileURLToPath } from "url";

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  fs.appendFile(filename, data, (license) => {
? (license.choices): return '';
  });
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.choices[0]) {data = '(https://opensource.org/licenses/MIT)';
    } else if (license.choices[1]) {data = '(https://opensource.org/licenses/Apache-2.0)';
    } else if (license.choices[2]) {data = '(https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license.choices[3]) {data = '';
      };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.choices[0]) { data = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    } else if (license.choices[1]) {data = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)])';
    } else if (license.choices[2]) {data = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)])';
    } else if (license.choices[3]) {data = '';
      };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.error(error) : console.log('README generated')
  });
  return `# ${data.title}\n 
  ## ${data.description}\n
  ## ${data.installation}\n
  ## ${data.usage}\n
  ## ${data.constributing}\n
  ## ${data.tests}\n
  ## ${data.license}\t
  ### ${data.username}\n
  ### ${data.githubLink}\n
  ### ${data.email}\n
  ### ${data.contactInfo}
`;
}

export default generateMarkdown;
