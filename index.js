// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = require('./data');

// console.log(questions);
// console.log(licenses);
// TODO: Create a function to write README file
function writeToFile(response) {
    let fileTxt = `
# ${response.RepoName}

![Alt text](https://img.shields.io/badge/License-${response.License}-brightgreen "${response.License}")

## Description
​
${response.Desc}
​
## Table of Contents

* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
​
${response.Install}
​
## Usage
​
${response.Usage}
​
## License
​
This project is licensed under the ${response.License} license.
  
## Contributing
​
${response.Contr}

## Tests
​
${response.Test}
​
## Questions
​
If you have any questions about the repo, open an issue or contact [${response.Username}](https://github.com/${response.Username}) or ${response.eMail}.
    `
return fileTxt;
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((response) => {
        fs.writeFile('README.md', writeToFile(response), (err) =>
        err ? console.error(err) : console.log('Success!'));
        console.log(response);
    });
};

// Function call to initialize app
init();
