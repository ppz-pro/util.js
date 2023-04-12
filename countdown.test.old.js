const { fromDuration, fromDate } = require('./countdown')

console.log(fromDuration(
  233 +
  1000 * 2 +
  1000 * 60 * 1 +
  1000 * 60 * 60 * 10 +
  1000 * 60 * 60 * 24 * 200
))

console.log(fromDate(new Date(
  new Date() -
  233 -
  1000 * 2 -
  1000 * 60 * 1 -
  1000 * 60 * 60 * 10 -
  1000 * 60 * 60 * 24 * 200
)))

console.log(fromDate(new Date(
  new Date().getTime() +
  233 +
  1000 * 2 +
  1000 * 60 * 1 +
  1000 * 60 * 60 * 10 +
  1000 * 60 * 60 * 24 * 200
)))
