exports.Event =
class Event {
  #handlers = []

  listen(handler) {
    const index = this.#handlers.length
    this.#handlers.push(handler)
    return () => this.#handlers.splice(index, 1)
  }

  emit() {
    for(let h of this.#handlers)
      h(...arguments)
  }
}
