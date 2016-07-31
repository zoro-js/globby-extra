const globby = require('../')

globby().then(console.log).then(() => {
  return globby('*', 'test').then(console.log)
}).then(() => {
  return globby('*.js', 'test').then(console.log)
}).then(() => {
  return globby('**/*', 'test').then(console.log)
}).then(() => {
  return globby([
    '*',
    '!foo*'
  ], 'test').then(console.log)
})
