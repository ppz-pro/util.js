module.exports = function Events() {
  const map = {}
  
  function on(name, handler) {
    map[name] = map[name] || new Set()
    map[name].add(handler)
  }
  function off(name, handler) {
    if(map[name])
      return map[name].delete(handler)
  }
  function once(name, handler) {
    function onceHandler(e) {
      off(name, onceHandler)
      handler(e)
    }
    on(name, onceHandler)
  }
  function emit(name, event) {
    if(!map[name]) return

    for(let h of map[name])
      try {
        h(event)
      } catch(e) {
        console.error(`处理 ${name} 事件时，发生异常：`, e)
      }
  }
  return {
    on, off, once, emit
  }
}