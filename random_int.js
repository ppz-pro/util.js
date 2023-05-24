function random_int(min, max) {
  const diff = max - min + 1
  const random = Math.random()
  return Math.floor(diff * random) + min
}

random_int.random_index = function random_index(length) {
  return random_int(0, length - 1)
}

module.exports = random_int
