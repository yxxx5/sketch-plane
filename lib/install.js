const mkdirp = require('mkdirp')
const homedir = require('homedir')()
const fs = require('fs')

mkdirp(homedir + '/.splan', function(err) {
    if (err) {
        console.error(err)
        return
    }
    fs.writeFileSync(homedir + '/.splan/template.json', '{}')
    fs.writeFileSync(homedir + '/.splan/remote.json', '[]')
})
