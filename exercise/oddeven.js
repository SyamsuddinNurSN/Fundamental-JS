// remove oddeven

function removeOdd(number) {
return number.filter(n => n % 2 !== 1); // jika ganjil maka dihapus
}

const evenNumber = removeOdd([1, 2, 3, 4, 5]);
console.log(evenNumber);