
let student = [{nama: 'budi', email: 'budi25@gmail.com'}]
function swapValues(obj) {

  const swapped = Object.entries(obj).map(
    ([key, value]) => ({[value]: key})
  );

  return Object.assign({}, ...swapped);
}

console.log(swapValues(student));

// cara 2
function myFunc(input) {
  let res = {}
  Object.keys(input[0]).map(key => {
    res[input[0][key]] = key
  })
  return res
}
console.log(myFunc(student));