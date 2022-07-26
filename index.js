const inquirer = require('inquirer');
const fs = require('fs');


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


        fs.writeFile('README.md', 
`# ${response.title}\n
___\n
### Description\n
${response.description}\n
---\n
### Table of Contents\n
\n
\n
Installation\n
Usage\n
License\n
Contributing\n
Tests\n
Questions\n
---\n
### Installation\n
${response.installation}\n
---\n
### Usage Information\n
${response.usage}\n
---\n
### License\n
${response.license}\n
---\n
### Contributing\n
${response.contributing}\n
---\n
### Tests\n
${response.tests}\n
---\n
### Questions\n
${response.github_user}\n
${response.email}\n
---
`,      (err) =>
            err ? console.error(err) : console.log('Success!')
        );
        

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