const inquirer = require('inquirer');
const fs = require('fs');

// Prompts
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
            message: 'License: ',
            name: 'license',
            choices: ['Perl', 'Open Database License', 'The Unlicense', 'The MIT License'],
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

//                                                                  //
//  Base on the license chosen it will decide on a Badge and a text //
//                                                                  //

        let licenseBadge = '';
        let licenseTxt = '';
        if (response.license == 'Perl') {
            licenseBadge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
            licenseTxt = `Perl License\n
Perl5 is Copyright (C) 1993-2005, by Larry Wall and others.

It is free software; you can redistribute it and/or modify it under the terms of either:

a) the GNU General Public License as published by the Free Software Foundation; either version 1, or (at your option) any later version, or

b) the "Artistic License".`;
        }else if (response.license == 'Open Database License') {
            licenseBadge = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
            licenseTxt = `Open Database License\n
The Open Database License (ODbL) is a copyleft license agreement intended to allow users to freely share, modify, and use a database while maintaining this same freedom for others.

ODbL is published by Open Data Commons, which is part of Open Knowledge Foundation.`;
        }else if (response.license == 'The Unlicense') {
            licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
            licenseTxt = `The Unlicense\n
The Unlicense is a public domain equivalent license with a focus on an anti-copyright message. 
It was first published on January 1 (Public Domain Day), 2010.

The Unlicense offers a public domain waiver text with a fall-back public-domain-like license, inspired by permissive licenses but without an attribution clause.
In 2015, GitHub reported that approximately 102,000 of their 5.1 million licensed projects (2% of licensed projects on GitHub.com) use the Unlicense.`;
        }else if (response.license == 'The MIT License') {
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            licenseTxt = `The MIT License\n
The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s.

As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.`;
        }

//                                                                  //
//      Creates the README file                                     //
//                                                                  //


        fs.writeFile('README.md', 
`# ${response.title}\n
${licenseBadge}
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
Github Profile:
![${response.github_user}](https://github.com/${response.github_user})\n

Any question further questions, please send me a mail to:
${response.email}\n
---
`,      (err) =>
            err ? console.error(err) : console.log('Success!')
        );
        

    });
