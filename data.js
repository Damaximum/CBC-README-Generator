const questions = [
    { 
        type: 'input',
        message: 'What is the repository name?',
        name: `RepoName`,
    }, 
    { 
        type: 'input',
        message: 'Please provide a quick description of the project.',
        name: `Desc`,
    }, 
    { 
        type: 'input',
        message: 'Please explain the usage of this project.',
        name: `Usage`,
    }, 
    { 
        type: 'input',
        message: 'What is your GitHub username?',
        name: `Username`,
    }, 
    { 
        type: 'input',
        message: 'Please enter your email address for people to contact you',
        name: `eMail`,
    }, 
    {
        type: 'confirm',
        message: 'Are there any particular installations?',
        name: `InstallConfirm`,
    }, 
    {
        type: 'input',
        message: 'Please input installation instructions for this process',
        name: `Install`, 
        when: ({InstallConfirm}) => {
            if (InstallConfirm) {
                return true;
            } else {
                return false;
            }
        }
    }, 
    {
        type: 'confirm',
        message: 'Are you allowing contributions?',
        name: `ContrConfirm`, 
    }, 
    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: `Contr`, 
        when: ({ContrConfirm}) => {
            if (ContrConfirm) {
                return true;
            } else {
                return false;
            }
        }
    }, 
    {
        type: 'confirm',
        message: 'Are there any special testing instructions?',
        name: `TestConfirm`, 
    }, 
    {
        type: 'input',
        message: 'Please input testing instructions for this process.',
        name: `Test`, 
        when: ({TestConfirm}) => {
            if (TestConfirm) {
                return true;
            } else {
                return false;
            }
        }
    }, 
    {
        type: 'list',
        message: 'Please choose a license.',
        name: `License`, 
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'Unlicensed', 'BSD 3-Clause', 'Creative Commons license family']
    }, 
]

// const licenses = ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'Unlicensed', 'BSD 3-Clause', 'Creative Commons license family']

module.exports = questions;