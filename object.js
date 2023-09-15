const car = {
   brand: "BMW",
   model: "M135i xDrive",
   price: 800000000 
}

const car2 = new Object ({
    brand: "BMW", 
    model: "M135i xDrive", 
    price: 800000000 
})

// console.log(car2);

//accessing value
console.log(car.brand)
console.log(car.model)

console.log(car['brand'])

let user = {
    name: "David", 
    greet() {
        console.log("Hello!")
    }
}

user.greet()

//add property
user.age = 25
console.log(user);

user.name = "Budi"
console.log(user)

//delete property
delete user.greet
console.log(user)

//prop dalam prop

let person = {
    name: "Andi",
    address: {
        city: "Bandung"
    }
}

console.log(person.address?.city)


// accessing keys
console.log(Object.keys(person));
console.log(Object.keys(person.address));

//for in
for (const key in person) {
    console.log(person[key])
}

//getter & setter
let student = {
    firstname: "John", 
    lastName: "Smith", 

    getfullName() {
        return `${this.firstname} ${this.lastName}`
    },

    set fullName(value) {
        const splittedValue =  value.split (" ")
        this.firstname = splittedValue[0]
        this.lastName = splittedValue [1]

    }
}

console.log(student.fullName)

student.fullName = "Alice Cooper"
console.log(student.fullName)

//destructuring

//spreadnoperator

