export
const config = {
  baseUrl: '',
  jsonContent: true,
  handleRequest: null,
  handleResponse: null
}

async function _http({
  method, url, data,
  headers = {},

  baseUrl = config.baseUrl,
  jsonContent = config.jsonContent,
  handleRequest = config.handleRequest,
  handleResponse = config.handleResponse,
}) {
  const options = { method, headers }
  // formdata 不用设置 Content-Type
  if(jsonContent)
    headers['Content-Type'] = 'application/json'
  // 拼接 url
  url = baseUrl + url
  // 上传数据
  if(data) {
    if(method == 'get')
      url = urlAndParams(url, data)
    else if(jsonContent)
      options.body = JSON.stringify(data)
    else
      options.body = data
  }
  // handleRequest
  if(handleRequest)
    [url, options] = handleRequest(url, options)
  // fetch!
  let res = await fetch(url, options)
  // handleResponse
  if(handleResponse)
    res = handleResponse(res)
  return res
}

/** 拼接 url 和 params，用于“非简单请求”需要在 url 后加参数 */
export
function urlAndParams(url, params) {
  url =+ '?'
  for(let k in params)
    url += k + '=' + params[k]
  return url
}

export
const http = new Proxy({}, {
  get(target, method) {
    return (url, data, options) =>
      _http({
        method, url, data,
        ...options
      })
  }
})

export
const Api = new Proxy({}, {
  get(_, method) {
    return (url, _options = {}) =>
      (data, options) => http[method](url, data, Object.assign(_options, options))
  }
})
