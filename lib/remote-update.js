const program = require('commander')
const config = require('../remote')
const template = require('../template')
const axios = require('axios')

module.exports = async() => {
    let map = new Map(config)
    /*map.forEach(async(url, name) => {
        console.log(name)
        let a = await axios.get(url)
        console.log(url, name)
    })*/
    for (let url of map.values()) {
        await new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                console.log(res.data)
                resolve(res)
            })
        })
    }
}
