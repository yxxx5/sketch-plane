const fs = require('fs');
const config = require('../remote.json');
const template = require('../template.json');
const chalk = require('chalk');

let m = new Map(config);

module.exports = function(name) {
    if (m.get(name)) {
        m.delete(name);
        fs.createWriteStream('../remote.json')
            .write(
                JSON.stringify(Array.from(m))
            );
    } else {
        console.log(chalk.red('Not found ' + name + '!'));
    }
}
