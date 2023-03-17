const { isString } = require('../type')

module.exports =
function() {
  return Array.from(arguments)
    .flatMap(className)
    .filter(className => className).join(' ')
}

function className(target) {
  if(isString(target))
    return target
  
  const classNames = []
  for(let className in target)
    if(target[className])
      classNames.push(className)
  return classNames
}
