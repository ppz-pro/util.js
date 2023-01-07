const logError = require('./_config').log.error

/** 函数 throw Error 时，不中断执行，仅打印异常 */
function danger(func) {
  return function() {
    try {
      return func.apply(this, arguments)
    } catch(e) {
      logError(e)
    }
  }
}
module.exports = danger

/** 和 danger 一样，但接收异步函数 */
danger.async = function asyncDanger(func) {
  return async function() {
    try {
      return await func.apply(this, arguments)
    } catch(e) {
      logError(e)
    }
  }
}
