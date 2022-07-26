const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your password?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is your password?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is your password?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What is your password?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your password?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What is your password?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your password?',
            name: 'github_user',
        },
        {
            type: 'input',
            message: 'What is your password?',
            name: 'email',
        },
    ])
    .then((response) =>
        // response.forEach(answer => {
        //     console.log(answer);
        // }
        console.log(response)
    );


/*
Title

Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions
*/