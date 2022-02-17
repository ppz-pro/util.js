const Disposable = require('../disposable')
const _ = require('../log-dash')

const a = Disposable(0)
console.log(a())
console.log(a())

_(1)
a(1)
console.log(a())
console.log(a())

_(2)
console.log(a(2))
console.log(a())

_(3)
console.log(a(3))
console.log(a(4))
console.log(a())
console.log(a())
