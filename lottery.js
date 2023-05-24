const { random_index } = require('./random_int')

module.exports = function Lottery(array) {
  array = array.slice()
  return function roll() {
    if(array.length == 0)
      throw Error('No more items in the lottery')
    target = random_index(array.length)
    return array.splice(target, 1)[0]
  }
}
