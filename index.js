const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./Logo Classes/generateSVG')
const { makeShape } = require('./Logo Classes/makeShape')

const questions = [
  inquirer
  .prompt({
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
    )];

    .then((data) => {
      const svgPath = './svgLogo.svg'
      const finalLogo = makeShape(data);
  
      //Generate the svg logo here.
      fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
      );
    })
    .catch((err) => console.error(err));