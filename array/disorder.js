/** @param {Array<any>} list */
module.exports = function(list) {
  const random = list.map((item, index) => ({
    index,
    position: Math.random()
  })).sort(function(a, b) {
    return a.position - b.position
  })
  
  const result = []
  for(let item of random)
    result.push(list[item.index])
  return result
}