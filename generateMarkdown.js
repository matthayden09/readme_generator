// function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  # ${data.title}

  ## Table of Contents
  * Description
  * Installation
  * Usage
  * Contribution
  * Test
  * License
  * Questions
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
}

module.exports = generateMarkdown;



