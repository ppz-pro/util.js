/** 简陋的对象克隆 */
module.exports = function clone(target) {
  return JSON.parse(JSON.stringify(target))
}
