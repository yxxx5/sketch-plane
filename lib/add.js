const path = require('path')
const chalk = require('chalk')
const program = require('commander')
const fs = require('fs')
const addToTemplate = require('./util.js').addToTemplate
const homedir = require('homedir')()
const tplPath = homedir + '/.splan/template.json'
const templates = require(tplPath) || {}

module.exports = function(name, repo, desc) {
    if (templates[name]) {
        console.log(chalk.red('template existed' + name + '!'))
    } else if (arguments.length) {
        fs.createWriteStream(tplPath)
            .write(
                JSON.stringify(
                    addToTemplate(templates, Array.from(arguments))
                )
            )
        console.log(chalk.green('new template: ' + name))
    }
};
