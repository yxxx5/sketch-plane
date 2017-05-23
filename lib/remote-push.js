const program = require('commander')
const axios = require('axios')
const config = require('../remote.json')
const chalk = require('chalk');

module.exports = (origin, name, repository, description) => {
    let map = new Map(config)
    let params = {
        name,
        repository,
        description
    }
    axios.post(map.get(origin), params)
        .then((res) => {
            console.log(chalk.green('done!'))
        })
        .catch((err) => {
            console.log(chalk.red('error'))
        })
}
