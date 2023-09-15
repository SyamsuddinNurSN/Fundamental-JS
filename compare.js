// Create a function to check if two objects are equal 

const one = {
  fruit: 'mango',
  energy: 255,
  minerals:'calcium'
    }

const two = {
  fruit: 'mango',
  energy: 255,
  minerals:'calcium'
    }

var equal = (JSON.stringify(one) === JSON.stringify(two))

console.log(equal)