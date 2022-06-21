const path = require('path')
console.log(process.pid)
// console.log(process.env)
console.log(process.arch)
const fullPath =  path.resolve()
console.log(path.parse(fullPath))
// console.log(path.join(__dirname,'first'))

const siteUrl = 'https://www.listal.com/caitlin-monahan/pictures'
const url = new URL(siteUrl)

console.log(url)