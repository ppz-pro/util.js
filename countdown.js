exports.fromDate = function(date) {
  return exports.fromDuration(new Date() - date)
}

const day = 1000 * 60 * 60 * 24
const hou = 1000 * 60 * 60
const min = 1000 * 60
const sec = 1000

exports.fromDuration = function(dur) {
  dur = Math.abs(dur)
  
  let last = dur % day
  const d = (dur - last) / day
  dur = last
  
  last = dur % hou
  const h = (dur - last) / hou
  dur = last

  last = dur % min
  const m = (dur - last) / min
  dur = last

  last = dur % sec
  const s = (dur - last) / sec

  return {
    d, h, m, s,
    ms: last
  }
}
