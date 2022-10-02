// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenses = [
    
    {license: 'MIT',
      Badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      Link: 'https://opensource.org/licenses/MIT'
    },
    {license: 'ISC',
      Badge: 'https://img.shields.io/badge/License-ISC-blue.svg',
      Link: 'https://opensource.org/licenses/ISC'
    },
    {license: 'GNU',
      Badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      Link: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {license: 'MOZILLA',
      Badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
      Link: 'https://opensource.org/licenses/MPL-2.0'
    },
    {license: 'PERL',
      Badge: 'https://img.shields.io/badge/License-Perl-0298c3.svg',
      Link: 'https://opensource.org/licenses/Artistic-2.0'
    }

];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseChoice = data.license
  let licenseBadge = " "
  // if(!licenseChoice){
  //     return ``;
  // }
  if(licenseChoice === 'MIT'){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    }
    if(licenseChoice === 'ISC'){
      licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    }
    if(licenseChoice === 'GNU'){
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    }
    if(licenseChoice === 'MOZILLA'){
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    }
    if(licenseChoice === 'PERL'){
      licenseBadge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
    }
     return licenseBadge;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const licenseType = data.license
  let licenseLink = " "
  // if(!licenseChoice){
  //     return ``;
  // }
  if(licenseType === 'MIT'){
    licenseLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    }
    if(licenseType === 'ISC'){
      licenseLink = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    }
    if(licenseType === 'GNU'){
      licenseLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    }
    if(licenseType === 'MOZILLA'){
      licenseLink = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    }
    if(licenseType === 'PERL'){
      licenseLink = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
    }
     return licenseLink;
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    if(!licenses.license){
      return ` `;
    }
    else {
      return `A link to the license conditins can be found at ${renderLicenseLink(data.license)}`
    }}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  
# ${data.project}

${renderLicenseBadge(data) }

----------

## Table of Contents

  1. [Description](#description)
  2. [Installation](#install)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contribution](#contribution)
  6. [Test](#test)
  7. [Questions](#questions)
   
  ----------
 
## Description

  ${data.description}

  ----------
 
## Installation

  ${data.install}

  ----------

## Usage

  ${data.usage}

  ----------

## License

  ${data.license}

  ${renderLicenseSection(data)}

  
  ----------

## Contribution

  ${data.contribution}

  ----------

## Test 
  ${data.test}

  ----------

## Questions
  For additional Information you can go to Github <https://github.com/${data.github}>
 
  Alternatively you can email me at <${data.email}>

`;
}

module.exports = generateMarkdown;
