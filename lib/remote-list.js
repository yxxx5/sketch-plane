const chalk = require('chalk')
const path = require('path')
const configPath = path.resolve(__dirname, '../remote.json')
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
