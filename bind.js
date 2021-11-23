module.exports = function(that, ...methods) {
  for(let m of methods)
    that[m] = that[m].bind(that)
}