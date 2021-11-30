const target = require('../list2map')

const map = target([
  {
    name: 'Jerry',
    tel: '13520211130'
  },
  null,
  {
    name: 'Tom',
    tel: '13520211201'
  }
], 'name')

console.log(map)