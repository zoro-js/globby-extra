const globby = require('../')

console.log(globby.sync())
console.log()
console.log(globby.sync('*', 'test'))
console.log()
console.log(globby.sync('*.js', 'test'))
console.log()
console.log(globby.sync('**/*', 'test'))
console.log()
console.log(globby.sync('**/*.js', 'test'))
console.log()
console.log(globby.sync([
  '*',
  '!foo*'
], 'test'))
console.log()

globby().then(console.log).then(() => {
  console.log()
  return globby('*', 'test').then(console.log)
}).then(() => {
  console.log()
  return globby('*.js', 'test').then(console.log)
}).then(() => {
  console.log()
  return globby('**/*', 'test').then(console.log)
}).then(() => {
  console.log()
  return globby('**/*.js', 'test').then(console.log)
}).then(() => {
  console.log()
  return globby([
    '*',
    '!foo*'
  ], 'test').then(console.log)
})
