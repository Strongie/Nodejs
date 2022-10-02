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


function renderLicenseBadge(license) {
        


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
  
 ##${data.project}##

 ----------

 ##Table of Contents

  1. [Description] (#description)
  2. [Installation] (#install)
  3. [Usage] (#usage)
  4. [License] (#license)
  5. [Contribution] (#contribution)
  6. [Test] (#test)
  7. [Questions](#questions)
   
  ----------
 
##Description

  ${data.description}

  ----------
 
##Installation

  ${data.install}

  ----------

##Usage

  ${data.usage}

  ----------

##License

  ${data.license}

  ----------

##Contribution

  ${data.contribution}

  ----------

##Test 
  ${data.test}

  ----------

##Questions
  # For additional Information you can go to Github <https://github.com/${data.github}>
  # Alternatively you can email me at <${data.email}>

`;
}

module.exports = generateMarkdown;
