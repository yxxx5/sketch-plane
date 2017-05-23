const download = require('git-repo-downloader')
const templateList = require('../template')
const chalk = require('chalk')
const ora = require('ora')

module.exports = (template, project) => {
    downloadAndGenerate(
        templateList[template].repository,
        project || template
    )
}

function downloadAndGenerate(source, template) {
    const spinner = ora('downloading template')
    spinner.start()
    download(source, {
            clone: true,
            dest: './' + template
        })
        .then(function() {
            // Done!
            spinner.stop()
            console.log(chalk.green(template + ' done!'))
        })
}
