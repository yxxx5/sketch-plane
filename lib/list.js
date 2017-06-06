const chalk = require('chalk')
const path = require('path')
const homedir = require('homedir')()
const templates = require(homedir + '/.splan/template.json')
const names = Object.keys(templates)

module.exports = () => {
    console.log('Template list：')
    console.log()
    if (!names.length) {
        console.log('   ' + chalk.red('null'))
        console.log()
    } else {
        names.forEach(function(name) {
            var repo = templates[name]

            console.log(
                '   ' + chalk.green('#') +
                '   ' + chalk.black(repo.name) +
                '   ' + padding(10 - name.length - (name.indexOf('-') > -1 ? 0 : 1)) + chalk.gray(repo.description || '')
            )
        })
    }
}

function padding(l) {
    var padding = ''
    while (l >= 0) {
        padding += ' '
        l--;
    }
    return padding
}
