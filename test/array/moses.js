const target = require('../../array/moses')

console.log(
  target([1,2,3,4], item => item % 2 == 0)
)

console.log(
  target([
    { yes: true },
    { no: true },
    { yes: 1 },
    { yes: 2 },
    { yes: false },
    {}
  ], item => item.yes)
)