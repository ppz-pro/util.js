exports.isNil = function(target) {
  return target === undefined || target === null
}

/** 判断数字 */
exports.isNumber = function(target) {
  return typeof(target) === 'number' && (!isNaN(target))
}

/** 判断整形 */
exports.isInt = function(target) {
  return isNumber(target) && (target === Math.floor(target))
}

/** 判断正整数 */
exports.isUnInt = function(target) {
  return isInt(target) && target >= 0
}

/** 判断正整数 */
exports.isPoInt = function(target) {
  return isInt(target) && target > 0
}