// Define a function that takes an array as a parameter
function filterPrimitives(arr) {
    // Create an empty array to store the result
    let result = [];
    // Loop through each element of the array
    for (let element of arr) {
      // Check if the element is not an object using typeof
      if (typeof element !== "object") {
        // Push the element to the result array
        result.push(element);
      }
    }
    // Return the result array
    return result;
  }
  
  // Test the function with the given array
  let arr = [1, 'string', null, false, undefined, 2, 'yes', undefined];
  console.log(filterPrimitives(arr)); // [1, 'string', false, 2, 'yes']
  