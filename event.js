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
    return handlers.map(h => {
      try {
        return h(...arguments)
      } catch(err) {
        Logger.error(err)
      }
    })
  }

  return {
    listen, stopListen, emit
  }
}
