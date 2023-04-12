const { checkAll, nonEmptyString, isPInt, isPNum, isPrimative } = require('./type')
const assert = require('assert')

test(
  "'a', 'b', 'c', 都是非空字符串",
  () => {
    expect(
      checkAll(nonEmptyString, 'a', 'b', 'c')
    ).toBe(true)
  }
)

test(
  "'' 不是非空字符串",
  () => {
    expect(
      checkAll(nonEmptyString, 'a', 'b', '')
    ).toBe(false)
  }
)

test(
  "1, 'b', 'c' 不是非空字符串",
  () => {
    expect(
      checkAll(nonEmptyString, 1, 'b', 'c')
    ).toBe(false)
  }
)

test(
  "1, 2, 3 都是正整数",
  () => {
    expect(
      checkAll(isPInt, 1, 2, 3)
    ).toBe(true)
  }
)

test(
  "3.1 不是正整数",
  () => {
    expect(
      checkAll(isPInt, 1, 2, 3.1)
    ).toBe(false)
  }
)

test(
  "1, 2, 3 都是正数",
  () => {
    expect(
      checkAll(isPNum, 1, 2, 3)
    ).toBe(true)
  }
)

test(
  "-1 不是正数",
  () => {
    expect(
      checkAll(isPNum, -1, 2, 3.1)
    ).toBe(false)
  }
)

test(
  '1, 2, 3.1 都是正数',
  () => {
    expect(
      checkAll(isPNum, 1, 2, 3.1)
    ).toBe(true)
  }
)

test(
  '-1 不是正数',
  () => {
    expect(
      checkAll(isPNum, -1, 2, 3.1)
    ).toBe(false)
  }
)

test(
  "0, 1, 0x11, 11n, -11n, 0n, '1', '', 'a', 'abc', false, true, null, undefined, Symbol('a'), Symbol() 都是基本数据类型",
  () => {
    expect(
      checkAll(isPrimative,
        0,
        1,
        0x11,
        11n,
        -11n,
        0n,
        '1',
        '',
        'a',
        'abc',
        false,
        true,
        null,
        undefined,
        Symbol('a'),
        Symbol()
      )
    ).toBe(true)
  }
)

test(
  "[] 不是基本数据类型",
  () => {
    expect(
      isPrimative([])
    ).toBe(false)
  }
)

test(
  "{} 不是基本数据类型",
  () => {
    expect(
      isPrimative({})
    ).toBe(false)
  }
)

test(
  "function() {} 不是基本数据类型",
  () => {
    expect(
      isPrimative(function() {})
    ).toBe(false)
  }
)

test(
  "new Date() 不是基本数据类型",
  () => {
    expect(
      isPrimative(new Date())
    ).toBe(false)
  }
)

test(
  "new Map() 不是基本数据类型",
  () => {
    expect(
      isPrimative(new Map())
    ).toBe(false)
  }
)

test(
  "new Set() 不是基本数据类型",
  () => {
    expect(
      isPrimative(new Set())
    ).toBe(false)
  }
)

test(
  "new WeakMap() 不是基本数据类型",
  () => {
    expect(
      isPrimative(new WeakMap())
    ).toBe(false)
  }
)

test(
  "new WeakSet() 不是基本数据类型",
  () => {
    expect(
      isPrimative(new WeakSet())
    ).toBe(false)
  }
)

test(
  "void 0 是基本数据类型",
  () => {
    expect(
      isPrimative(void 0)
    ).toBe(true)
  }
)

test(
  " 是基本数据类型",
  () => {
    expect(
      isPrimative()
    ).toBe(true)
  }
)

test(
  "new String() 不是基本数据类型",
  () => {
    expect(
      isPrimative(new String())
    ).toBe(false)
  }
)

test(
  "new Number() 不是基本数据类型",
  () => {
    expect(
      isPrimative(new Number())
    ).toBe(false)
  }
)

test(
  "new Boolean() 不是基本数据类型",
  () => {
    expect(
      isPrimative(new Boolean())
    ).toBe(false)
  }
)
