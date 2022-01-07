module.exports = function(sum, cb) {
  return Array(sum).fill(0).map((item, i) => cb(i))
}