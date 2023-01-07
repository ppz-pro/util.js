module.exports = function(target, isOne) {
  const one = [], another = []
  for(let item of target)
    if(isOne(item))
      one.push(item)
    else
      another.push(item)
  return [one, another]
}