const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title of the Project: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation Instructions: ',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage Information: ',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What is your password?',
            name: 'license',
            choices: ['Public Domain', 'LGPL', 'Permissive', 'Copyleft', 'Proprietary'],
        },
        {
            type: 'input',
            message: 'Contribution Guidelines: ',
            name: 'contributing',
        },
        {
            type: 'editor',
            message: 'Test Instructions: ',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'GitHub Username: ',
            name: 'github_user',
        },
        {
            type: 'input',
            message: 'Email: ',
            name: 'email',
        },
    ])
    .then((response) => {
        let answers = response;
        console.log(answers);

    });



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