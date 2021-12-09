/**
 * @param {number} duration 睡眠时间，单位：毫秒
 */
module.exports = function(duration = 1) {
  return new Promise(res => {
    setTimeout(res, duration)
  })
}