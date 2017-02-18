const chalk = require('chalk');
const templates = require('../template') || {};
const program = require('commander');
const fs = require('fs');
const addToTemplate = require('./util.js').addToTemplate;

module.exports = function(name, repo, desc) {
  if (templates[name]) {
    console.log(chalk.red('template existed' + name + '!'));
  } else if (arguments.length){
    fs.createWriteStream('../template.json')
      .write(
        JSON.stringify(
          addToTemplate(templates, Array.from(arguments))
        )
      );
    console.log(chalk.green('new template: ' + name));
  }
};
