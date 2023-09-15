// find the factorial with recursion
let num = 5
function factorial(x) { 
  if (x === 0) {
    return 1;
 }
  return x * factorial(x-1);
         
}
const result = factorial(num)
console.log(`faktorial dari ${num} adalah ${result}`)