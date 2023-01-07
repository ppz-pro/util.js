const replace = String.prototype.replace

exports.escape = create(
  /[&<>'"]/g,
  {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }
)

exports.unescape = create(
  /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
  {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"'
  }
)

function create(regexp, map) {
  const replacerFunction = m => map[m]
  return target => replace.call(target, regexp, replacerFunction)
}