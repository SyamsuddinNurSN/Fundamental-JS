function bodymassIndex(weight, height) {

    let bmi = weight / (height * height)
    console.log(bmi) 
if (bmi < 18.5) {
    console.log("less weight")
}else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("ideal") 
} else if (bmi >= 25.0 && bmi <= 29.9) {
    console.log("overweight")
} else if (bmi >= 30 && bmi <= 39.9) {
    console.log("very overweight")
} else if (bmi >= 40) {
    console.log("obesity")
}
}
bodymassIndex(60, 1.7)