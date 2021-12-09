module.exports = function dangerous(cb) {
  return function() {
    try {
      return cb.apply(this, arguments)
    } catch(e) {
      console.error(e)
    }
  }
}