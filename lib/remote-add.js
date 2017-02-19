const fs = require('fs');
const config = require('../remote.json');
const axios = require('axios');
const template = require('../template.json');


let m = new Map(config);

module.exports = (name, url) => {
  if (m.get(name)) {
    return;
  }
  //config.json
  axios.get(url)
    .then((res) => {
      let data = res.data;
      if (data.indexOf && data.indexOf(' ')) {
        data = JSON.parse(
          data.replace(/(\s)/g,'')
        );
      }
      m.set(name, url);
      fs.createWriteStream('../template.json')
        .write(
          JSON.stringify(
            Object.assign(template, res.data)
          )
        );
      fs.createWriteStream('../remote.json')
        .write(
          JSON.stringify(Array.from(m))
        );
    })
    .catch((err) => {
        console.log(err);
    });
}
