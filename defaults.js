module.exports = function(options, d) {
  options = Object.assign({}, options) // 拷贝一份
  for(let k in d)
    if(options[k] == undefined)
      options[k] = d[k] // 因为是用 for in 取到的 k，所以 d[k] 应该是存在的
  return options
}