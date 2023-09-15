let arr = ["a", "b", "c", "d", "e"]

let arr2 = new Array("a", "b", "c", "d", "e")

console.log(arr)
console.log(arr2)

console.log(arr[2])

let data = [1, 2, 3]

data.push(4) // tambah value dibelakang
console.log(data)

data.unshift(0) // tambah value didepan
console.log(data)

data.pop() // kurangin value di belakang
console.log(data)

data.shift() // kuramgin value didepan
console.log(data)

let str = "purwadhika bandung" // string -> array
let strSplit = str.split(" ")
console.log(strSplit)

let strJoin = strSplit.join(" - ") // array->string
console.log(strJoin)

let student = ["budi", "andi", "doni"]
console.log(student.sort().reverse())

let nilai = [80, 100, 90] // 80, 90, 100
console.log(nilai.sort((a, b) => a - b)) // ascen
console.log(nilai.sort((a, b) => b - a)) // descen

let city =["jakarta", "bsd", "batam", "bandung", "jogja"]

city.forEach(item=> {
    console.log(item)
});

// looping array dan index
city.map((item, index, arr) => {
    console.log(`${item} ada di index ${index} dalam array ${arr}`);
})

let age = [20, 30, 40, 50, 60, 70] // filter age > 30
console.log(age.filter(item => item > 30))

let fruits = ["apple", "orange", "plum"] // for of buat array
for (const item of fruits) {
    console.log(item)
}

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}