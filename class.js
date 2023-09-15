//template untuk beberapa object
class Student {
    name = ""
    age = ""
    program = ""

    constructor(name, age, program) {
        this.name = name
        this.age = age
        this.program = program
    }

    greeting() {
        console.log(`Hello ${this.name}`)
    }
}

const student1 = new Student ("Andi", 25, "Digital Marketing")

console.log(student1.name)
student1.greeting()