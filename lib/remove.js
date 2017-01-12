const chalk = require('chalk');
const templates = require('../template');
const program = require('commander');
const fs = require('fs');
const addToTemplate = require('./util.js').addToTemplate;

module.exports = function(name) {
  if (!templates[name]) {
    console.log(chalk.red('template is not existed!'));
  } else if (arguments.length){
    delete templates[name];
    fs.createWriteStream('../template.json')
      .write(
        JSON.stringify(
          templates
        )
      );
    console.log(chalk.green('remove template: ' + chalk.gray(name)));
  }
};
