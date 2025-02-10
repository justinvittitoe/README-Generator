// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import { makeBadge } from 'badge-maker'

function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const format = {
    label: 'license',
    message: license,
    color: 'blue',
  };
  
  return `${makeBadge(format)}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `[${license}](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }

  return `## License
  This application is covered under ${renderLicenseBadge(license)}.

  * Here is a link to the license description: ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // renderLicenseBadge(data.license)
  // renderLicenseLink(data.license)
  renderLicenseSection(data.license)

  return `${renderLicenseBadge(data.license)}
  # ${data.title}
  
  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  
  ${renderLicenseSection(data.license)}

  

  ## Contributing

  How to contribute?

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  Here is the link to my GitHub profile https://github.com/${data.github}.

  Please reach out to me via: ${data.email}. I will get back to you!

`;
}

export default generateMarkdown;
