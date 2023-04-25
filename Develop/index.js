// TODO: Include packages needed for this application

const inquirer = require('inquirer')
console.log('readme generator test run')
const fs = require('fs')
const MarkDown = require("./lib/generateReadMe")
//readme generator questions
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'None'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please briefly describe how users will use your application',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will users install your application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing instructions?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Any testing instructions?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where should users submit questions?',
    }
];

//run query function

function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function (err) {
            if (err) {
                console.log('File could not save', err)
            } else {
                console.log('Success! Your README.md file is generated inside the folder')
            }
        })

    })
    .catch((error)=>{
        console.log(error)
    })
}

runQuery()

