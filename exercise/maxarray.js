// function to insert multiple given integer into array

function integerToArr (maxSize, ...num) {
    return num.slice(0, maxSize)
}
console.log(integerToArr(5,1,2,4,5,6,7))