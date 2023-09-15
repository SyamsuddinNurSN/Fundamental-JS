// function to merge two array
let arr1 = [
    { name: 'Student 1', email : 'student1@mail.com' }, 
    { name: 'Student 2', email : 'student2@mail.com' }
]
let arr2 = [
    { name: 'Student 1', email : 'student1@mail.com' }, 
    { name: 'Student 3', email : 'student3@mail.com' }
]

/*result → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
] */

function mergeDup(a, b) {

    let result = a.concat(b)
    return result.filter (
    (item, index, result ) =>(
    index == result.findIndex(value => item.name == value.name && item.email == value.email)
    ))
}
console.log(mergeDup(arr1, arr2))
