/** 获取 urlSearchParams */
module.exports = function getUrlParams(key) {
  const params = new URLSearchParams(location.search)
  if(key !== undefined)
    return params.get(key)
  else
    return params
}
