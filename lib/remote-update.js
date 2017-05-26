const path = require('path')
const program = require('commander')
const configPath = path.resolve(__dirname, '../remote.json')
const tplPath = path.resolve(__dirname, '../template.json')
const templates = require(tplPath) || {}
const config = require(configPath)
const axios = require('axios')

module.exports = async() => {
    let map = new Map(config)
    let o = {}
    for (let url of map.values()) {
        let data = await new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                console.log(res.data)
                resolve(res)
            })

        })
        //write
        Object.assign(o, data, templates)
    }
    fs.createWriteStream(tplPath)
        .write(
            JSON.stringify(o)
        )
}
