function on(name, handler, target) {
  target[name] = target[name] || []
  target[name].push(handler)
}
function emit(name, event, target) {
  if(!target[name]) return
  
  for(let h of target[name])
    try {
      h(event)
    } catch(e) {
      console.error(`处理 ${name} 事件时，发生异常：`, e)
    }
}

module.exports = function Events() {
  const x = {}
  const y = {}
  return {
    on(name, handler) {
      on(name, handler, x)
    },
    once(name, handler) {
      on(name, handler, y)
    },
    emit(name, event) {
      emit(name, event, x)
      emit(name, event, y)
      y[name] = null
    }
  }
}