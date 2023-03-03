import Event from '../event'

const resizeEvent = Event()

window.onresize = function() {
  resizeEvent.emit(...arguments)
}

export default resizeEvent
