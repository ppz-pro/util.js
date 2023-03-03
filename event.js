const Logger = () => globalThis?.__logger || console

module.exports = function Event() {
  const handlers = []

  function listen(handler) {
    handlers.push(handler)
    return () => stopListen(handler)
  }

  function stopListen(handler) {
    handlers.splice(
      handlers.indexOf(handler),
      1
    )
  }

  function emit() {
    for(let h of handlers)
      try {
        h(...arguments)
      } catch(err) {
        Logger.error(err)
      }
  }

  return {
    listen, stopListen, emit
  }
}
