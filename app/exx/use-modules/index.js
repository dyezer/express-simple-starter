// https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js

const say1 = require('./module-1')
import say2 from './module-2'
const say3 = require('./module-3')

module.exports.useModules = () => {
  console.log('--- use my modules ---')
  console.log(say1.en())
  console.log(say1.spa())
  console.log(say2.by())
  console.log(say2.ua())
  console.log(say3.pl())
  console.log(say3.ru())
}
