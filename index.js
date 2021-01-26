const operations = require('./operations.js')

const result = operations.sum(2, 40)
console.log("The result is: " + result)

console.log(operations.sum(operations.sum(1, 2), 3))

console.log(operations.sum(7, 2, 3))

console.log(operations.sum(1))