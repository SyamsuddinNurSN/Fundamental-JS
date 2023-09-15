// smallest second

let numbers = [2, 4, 9, 2, 0, 16, 24];

let sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

const smallest = secondSmallest = sorted[1];

console.log(secondSmallest)

// sum values

let array = [10,"a", 20,"b", 40];
function amountTotal(input) {
  return input.filter(item => typeof item == "number")

}
console.log(amountTotal(array))

// sum from duplicate values

let array1 = [10, 20, 40, 10, 50, 30, 10, 60, 10]
function duplicate(array1) {
  const duplicates = array1.filter(elm => array1.indexOf(elm) !== array1.lastIndexOf(elm));
  return duplicates.reduce((a, b) => a + b);
}

console.log(duplicate(array1))



