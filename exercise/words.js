let arr = ['apple', 'orange', 'lemon', 'mango']

function myFunc (input) {
    let lastword = input[input.length - 1]
    input.pop()
    return input.join(", ") + " and " + lastword
}

console.log(myFunc(arr))