import { Event } from '../event'

const resizeEvent = new Event()

window.onresize = function() {
  resizeEvent.emit(...arguments)
}

export default resizeEvent
