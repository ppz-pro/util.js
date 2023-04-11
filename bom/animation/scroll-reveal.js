export function onScrollIn(el, cb) {
  function listenScroll() {
    if(Math.abs(el.getBoundingClientRect().top) < window.innerHeight) {
      removeEventListener() // 先移除时间，因为 cb 可能 fail
      cb()
    }
  }
  function removeEventListener() {
    window.removeEventListener('scroll', listenScroll)
  }
  window.addEventListener('scroll', listenScroll)

  listenScroll()
  return removeEventListener
}

export function fadeInFromBottom(el, {
  delay = 0,
  duration = 500,
  from = '100%',
  easing = 'ease'
} = {}) {
  el.style.opacity = 0
  onScrollIn(el, function() {
    const ani = el.animate([
      { opacity: 0, transform: `translateY(${from})` },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration, easing, delay
    })
    ani.onfinish = function() {
      el.style.opacity = ''
    }
  })
}