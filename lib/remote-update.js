const path = require('path')
const program = require('commander')
const configPath = path.resolve(__dirname, '../remote.json')
const config = require(configPath)
const axios = require('axios')

module.exports = async() => {
    let map = new Map(config)
    for (let url of map.values()) {
        let data = await new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                console.log(res.data)
                resolve(res)
            })
        })
        //write
    }
}
