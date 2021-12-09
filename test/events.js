const Events = require('../events')

const evt = Events()

evt.emit('haha')
evt.on('haha', function(e) {
  console.log('on', e)
})
evt.once('haha', function(e) {
  console.log('once', e)
})

evt.emit('haha', 1)
evt.emit('haha', 2)