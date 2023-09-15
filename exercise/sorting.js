// get the lowest, highest and average with sort

const arr1 = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...arr1)
console.log(min)

const max = Math.max(...arr1)
console.log(max)
const avr =arr1.reduce((a, b) => a + b) /arr1.length
console.log(avr)


// with sorting
const arr = [1, 2, 3, 4, 5, 6, 7]
function myFunc(number) {
let sortArray = number.sort ((a,b) => a - b)
let low    
}
