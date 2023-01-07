// 数据结构 l11：一对一

exports.L11Error =
class L11Error extends Error {}

exports.L11 =
class L11 {
  #byLeft = new Map()
  #byRight = new Map()
  
  append(left, right) {
    if(this.hasLeft(left))
      throw L11Error('left already set')
    if(this.hasRight(right))
      throw L11Error('right already set')
    
    this.#byLeft.set(left, right)
    this.#byRight.set(right, left)
  }

  getByLeft(left) {
    return this.#byLeft.get(left)
  }
  setByLeft(left, right) {
    return this.#byLeft.set(left, right)
  }
  hasLeft(left) {
    return this.#byLeft.has(left)
  }

  getByRight(right) {
    return this.#byRight.get(right)
  }
  setByRight(left, right) {
    return this.#byRight.set(right, left)
  }
  hasRight(right) {
    return this.#byRight.has(right)
  }

  has(left, right) {
    return this.hasLeft(left) || this.hasRight(right)
  }
}