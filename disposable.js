module.exports = function Disposable(value) {
  return function(newValue) {
    const tmp = value
    value = newValue
    return tmp
  }
}