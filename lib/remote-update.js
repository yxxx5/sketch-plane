const fs = require('fs')
const program = require('commander')
const homedir = require('homedir')()
const tplPath = homedir + '/.splan/template.json'
const configPath = homedir + '/.splan/remote.json'
const templates = require(tplPath) || {}
const config = require(configPath)
const axios = require('axios')
const chalk = require('chalk')

module.exports = async() => {
    let map = new Map(config)
    let o = {}
    for (let url of map.values()) {
        let data = await new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                resolve(res.data)
            }).catch(() => {
                console.log(chalk.red(url + ' error!'))
                reject(null)
            })

        })
        //write
        if (data) {
            Object.assign(o, data, templates)
        }
    }
    fs.createWriteStream(tplPath)
        .write(
            JSON.stringify(o)
        )
    console.log(chalk.green('done!'))
}
