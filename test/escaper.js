const target = require('../escaper')

let str = target.escape('<div>"')
console.log(str)

str = target.unescape(str)
console.log(str)