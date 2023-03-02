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
exports.isUInt = function(target) {
  return isInt(target) && target >= 0
}

/** 判断正整数 */
exports.isPoInt = function(target) {
  return isInt(target) && target > 0
}

/** 判断字符串 */
exports.isString = function(target) {
  // 本来简单的逻辑不应出现在库里
  // 但考虑到这个“简单的逻辑”可能是错的，于是以后如果发现是错的，可以在此处修改逻辑，以免到处改
  return typeof target == 'string'
}

/** 判断空字符串 */
exports.notEmptyString = function(target) {
  return exports.isString(target) && target.length > 0
}
