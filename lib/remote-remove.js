const fs = require('fs')
const homedir = require('homedir')()
const configPath = homedir + '/.splan/remote.json'
const config = require(configPath)
const chalk = require('chalk')

let m = new Map(config)

module.exports = (name) => {
    if (m.get(name)) {
        m.delete(name)
        fs.createWriteStream(configPath)
            .write(
                JSON.stringify(Array.from(m))
            )
        console.log(chalk.green('done!'))
    } else {
        console.log(chalk.red('Not found ' + name + '!'))
    }
}
