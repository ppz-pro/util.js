const p = require('../promise-all')

p([
  function() {
    return new Promise(res => {
      setTimeout(function() {
        console.log(11111111)
        res()
      }, 1000)
    })
  },
  function() {
    return new Promise(res => {
      setTimeout(function() {
        console.log(22222222)
        res()
      }, 2000)
    })
  },
  function() {
    return new Promise(res => {
      setTimeout(function() {
        console.log(33333)
        res()
      }, 3000)
    })
  }
])