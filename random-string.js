module.exports = function randomString(length = 8, seed = 'abcdefghijklmnopqrstuvwxyz') {
  let result = ''
  for(let i=0; i<length; i++)
    result += seed[
      Math.floor(Math.random() * seed.length)
    ]
  return result
}
