const cn = require('./classnames')

console.log(cn('haha', false, undefined, null, '', {
  go: null,
  hei: false,
  wei: 0,
  hao: 1
})) // 'haha hao'
