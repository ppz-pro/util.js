/** 一次性的 value，存进来只可取一次 */
module.exports = function Disposable(value) {
  return function(newValue) {
    const tmp = value
    value = newValue
    return tmp
  }
}
