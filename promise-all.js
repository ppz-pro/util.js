module.exports = function(list) {
  return Promise.all(list.map( cb => cb() ))
}