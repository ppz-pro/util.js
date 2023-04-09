const { checkAll, notEmptyString, isPInt, isPNum } = require('./type')
const assert = require('assert')

assert(checkAll(notEmptyString, 'a', 'b', 'c'))
assert(!checkAll(notEmptyString, 'a', 'b', ''))
assert(!checkAll(notEmptyString, 1, 'b', 'c'))

assert(checkAll(isPInt, 1, 2, 3))
assert(!checkAll(isPInt, -1, 2, 3))
assert(!checkAll(isPInt, 1, 2, 3.1))

assert(checkAll(isPNum, 1, 2, 3))
assert(checkAll(isPNum, 1, 2, 3.1))
assert(!checkAll(isPNum, -1, 2, 3.1))
