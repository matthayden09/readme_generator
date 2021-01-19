// function to generate markdown for README
const generateMarkdown = (data) => `# ${data.title}
    
## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Test](#test)
    * [License](#license)
    * [Questions](#questions)
## Description
    ${data.description}
## Installation
    ${data.installation}
## Usage
    ${data.usage}
## Contribution
    ${data.contribution}
## Test
    ${data.test}
## License
## Questions
    * Github: https://github.com/${data.github}
    * Email: ${data.email}
  `;

module.exports = generateMarkdown;



