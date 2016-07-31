var path = require('path')
const globby = require('globby')

const extra = function (pattern = ['*'], context) {
  // parse params
  if (!Array.isArray(pattern)) {
    pattern = [pattern]
  }
  // join context and pattern
  if (context) {
    context = path.resolve(process.cwd(), context)
    pattern = pattern.map(item => {
      let index = 0
      let prefix = ''
      if (item.indexOf('!') === 0) {
        index = 1
        prefix = '!'
      }
      return prefix + path.join(context, item.slice(index))
    })
  }
  return globby(pattern)
}

module.exports = extra
