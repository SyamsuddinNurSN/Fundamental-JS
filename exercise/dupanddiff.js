// find duplicate values in an array
let array = [1, 4, 8, 2, 4 , 2, 7]
const duplicates = array.filter((element, index, arr) =>
arr.indexOf(element) !== index)

console.log(duplicates)


// find the difference in 2 given array
function arrayDifference(arr1, arr2) {
const difference = [];

for (let i = 0; i < arr1.length; i++) {
   if (arr2.indexOf(arr1[i]) === -1) {
       difference.push(arr1[i]);
   }
}
return difference;
}

const arr1 = [1, 3, 4, 5, 8, 10, 11, 12];
const arr2 = [1, 3, 5, 7, 9, 11];
console.log(arrayDifference(arr1, arr2))
