var x = { a: 1, b:2}

var y = { a: 1, c:3}

function intersection(a, b) {
    let res = {}

    for (const key in a) {
        if(a[key] === b[key]) {
            res[key] = a[key]
        }
    }
 return res       
    }
console.log(intersection(x, y));