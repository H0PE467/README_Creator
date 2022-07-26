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
            type: 'input',
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
            validate: (input) => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
                    return (true)
                }
                let err = new Error('Invalid Email')
                return (err)
            }
        },
    ])
    .then((response) => {


        let licenseTxt = '';
        if (response.license == 'Public Domain') {
            licenseTxt = `Public Domain\n
This is the most permissive type of software license. 
When software is in the public domain, anyone can modify and use the software without any restrictions. 
But you should always make sure it’s secure before adding it to your own codebase. 

Warning: Code that doesn’t have an explicit license is NOT automatically in the public domain. 
This includes code snippets you find on the internet.`;
        }else if (response.license == 'LGPL') {
            licenseTxt = `LGPL\n
The GNU Lesser General Public License allows you to link to open source libraries in your software. 
If you simply compile or link an LGPL-licensed library with your own code, you can release your application under any license you want, even a proprietary license. 
But if you modify the library or copy parts of it into your code, you’ll have to release your application under similar terms as the LGPL.`;
        }else if (response.license == 'Permissive') {
            licenseTxt = `Permissive\n
Permissive licenses are also known as “Apache style” or “BSD style”. 
They contain minimal requirements about how the software can be modified or redistributed. 
This type of software license is perhaps the most popular license used with free and open source software. 
Aside from the Apache License and the BSD License, another common variant is the MIT License.`;
        }else if (response.license == 'Copyleft') {
            licenseTxt = `Copyleft\n
Copyleft licenses are also known as reciprocal licenses or restrictive licenses. 
The most well-known example of a copyleft or reciprocal license is the GPL. 
These licenses allow you to modify the licensed code and distribute new works based on it, as long as you distribute any new works or adaptations under the same software license. 
For example, a component’s license might say the work is free to use and distribute for personal use only. 
So any derivative you create would also be limited to personal use only. 
(A derivative is any new software you develop that contains the component.)`;
        }else if (response.license == 'Proprietary') {
            licenseTxt = `Proprietary\n
Of all types of software licenses, this is the most restrictive. The idea behind it is that all rights are reserved. 
It’s generally used for proprietary software where the work may not be modified or redistributed.`;
        }

        fs.writeFile('README.md', 
`# ${response.title}\n
___
### Description\n
${response.description}\n
---\n
### Table of Contents\n
\n
- [Installation](#Installation)\n
- [Usage Information](#Usage-Information)\n
- [License](#License)\n
- [Contributing](#Contributing)\n
- [Tests](#Tests)\n
- [Questions](#Questions)\n
---\n
### Installation\n
${response.installation}\n
---\n
### Usage Information\n
${response.usage}\n
---\n
### License\n
${licenseTxt}\n
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