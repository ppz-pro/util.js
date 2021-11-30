/**
 * 给 list 建立映射关系
 * @param {Array} list 源数据
 * @param {Function | string} mapOne 转化函数 或 键名
 * @returns 转化结果
 */
module.exports = function(list, mapOne) {
  if(typeof mapOne == 'string')
    mapOne = createMapOne(mapOne)
  
  return list.reduce(function(result, item) {
    if(item)
      mapOne(result, item)
    return result
  }, {})
}

function createMapOne(key) {
  return function(result, item) {
    result[item[key]] = item
  }
}