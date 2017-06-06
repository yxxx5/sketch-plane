const chalk = require('chalk')
const homedir = require('homedir')()
const tplPath = homedir + '/.splan/template.json'
const templates = require(tplPath) || {}
const program = require('commander')
const fs = require('fs')
const addToTemplate = require('./util.js').addToTemplate

module.exports = (name) => {
    if (!templates[name]) {
        console.log(chalk.red('template is not existed!'))
    } else if (arguments.length) {
        delete templates[name]
        fs.createWriteStream(tplPath)
            .write(
                JSON.stringify(
                    templates
                )
            )
        console.log(chalk.green('remove template: ' + chalk.gray(name)))
    }
};
