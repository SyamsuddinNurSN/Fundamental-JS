//function declare

function square(number) {
    return number * number;
}

const x = square(4);
console.log (x);
console.log(square(5))

function additional(a, b) {
    return a + b
}
 console.log(additional(10, 5))
 console.log(additional(10, 20))

 // function expression
 const square2 = function(number) {
    return number * number
 }

 console.log(square2(6))


 //function scope

 let hello = "Hello"

 function greeting() {
    let hello = "Hi"
    return hello
 }

 console.log(greeting());
 console.log(hello);

 function multiply(a = 1, b = 1, ...other) { // rest parameter
    console.log(other);
    return a * b
 }

 console.log(multiply(10, 2, 3, 4, 5, 6, 7))

 function getMessage(firstname){ //nested function
   function sayHello() {
      return "Hello " + firstname + "."
   }
   function welcomeMesaage() {
      return "Welcome to purwadhika"
   }

   return sayHello() + " " + welcomeMesaage()
 }

 console.log(getMessage("Budi"));

 //function closure
 function greetingName(name) {
   const defaultMessage = "Hello "
   return function() {
      return defaultMessage + name
   }
 }
 const greetingDavid = greetingName("David")
 console.log(greetingDavid());


//  currying function
function multiplier (factor, number) {
   return number * factor;
}
console.log(multiplier(5, 3))
console.log(multiplier(10, 3))

// function multiplier(factor) {
//    return function (number) {
//       return number * factor;
//    }
// }
// const mul3 = multiplier(3)
// const mul5 = multiplier(5)
// console.log(mul3(3))
// console.log(mul5(3))

//recursive function


// arrow function
const square3 = (number) => number * number;
console.log(square3(5))
