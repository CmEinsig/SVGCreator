const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want to use?',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want your text to be?',
      },
      {
        type: 'list',
        message: 'What shape are you using?',
        name: 'shape',
        choices: ['Circle', 'triangle', 'Square'],
      }, 
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape to be?',
      },
    ];
    console.log(questions)

  inquirer.prompt(questions).then((answers) => {
    generateSVG(answers);

    //Code for html goes here 
  });

  function generateSVG(logo) {}



fs.writeFile('logo.svg', logo, (err) => {
    if (err) throw err;
    console.log('SVG logo generated!');
  });