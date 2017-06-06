const fs = require('fs')
const axios = require('axios')
const homedir = require('homedir')()
const tplPath = homedir + '/.splan/template.json'
const configPath = homedir + '/.splan/remote.json'
const templates = require(tplPath) || {}
const config = require(configPath)
const chalk = require('chalk');


let m = new Map(config);

module.exports = (name, url) => {
    if (m.get(name)) {
        return console.log(chalk.red('name already exsits!'))
    }
    //config.json
    axios.get(url)
        .then((res) => {
            let data = res.data;
            if (data.indexOf && data.indexOf(' ')) {
                data = JSON.parse(
                    data.replace(/(\s)/g, '')
                );
            }
            m.set(name, url);
            fs.createWriteStream(tplPath)
                .write(
                    JSON.stringify(
                        Object.assign(templates, res.data)
                    )
                );
            fs.createWriteStream(configPath)
                .write(
                    JSON.stringify(Array.from(m))
                );
            console.log(chalk.green('done!'))
        })
        .catch((err) => {
            console.log(chalk.red('error!'))
            console.log(err)
        });
}
