const chalk = require('chalk')
const homedir = require('homedir')()
const configPath = homedir + '/.splan/remote.json'
const config = require(configPath)
const map = new Map(config)
const program = require('commander')

module.exports = () => {
    console.log('remote list')
    console.log()
    if (map.size) {
        map.forEach(function(url, name) {
            console.log(
                '    ' + chalk.green('#') + name +
                '    ' + chalk.red(url)
            )
        })

    } else {
        console.log('   ' + chalk.red('null'))
        console.log()
    }
}
