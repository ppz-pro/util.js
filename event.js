// 注意 this！
// xxxEvent.listen 语义性更强，于是坚持使用 class

exports.Event =
class Event {
  #handlers = []

  listen(handler) {
    this.#handlers.push(handler)
    return () => this.stopListen(handler)
  }

  stopListen(handler) {
    this.#handlers.splice(
      this.#handlers.indexOf(handler),
      1
    )
  }

  emit() {
    for(let h of this.#handlers)
      h(...arguments)
  }
}
