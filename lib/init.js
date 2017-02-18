const download = require('git-downloader');
const templateList = require('../template');
const chalk = require('chalk');
const ora = require('ora');

module.exports = (template, project) => {
  downloadAndGenerate(
    templateList[template].repository,
    project || template
  );
};

function downloadAndGenerate (source, template) {
  const spinner = ora('downloading template');
  spinner.start();
  download({
      source : source,
      destination : './' + template
  })
  .then(function() {
    // Done!
    spinner.stop();
    console.log(chalk.green(template + ' done!'));
  });
}
