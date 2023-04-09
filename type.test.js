const { checkAll, nonEmptyString, isPInt, isPNum } = require('./type')
const assert = require('assert')

assert(checkAll(nonEmptyString, 'a', 'b', 'c'))
assert(!checkAll(nonEmptyString, 'a', 'b', ''))
assert(!checkAll(nonEmptyString, 1, 'b', 'c'))

assert(checkAll(isPInt, 1, 2, 3))
assert(!checkAll(isPInt, -1, 2, 3))
assert(!checkAll(isPInt, 1, 2, 3.1))

assert(checkAll(isPNum, 1, 2, 3))
assert(checkAll(isPNum, 1, 2, 3.1))
assert(!checkAll(isPNum, -1, 2, 3.1))
