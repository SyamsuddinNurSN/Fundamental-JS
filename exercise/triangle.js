// create a triangle pattern

function drawTriangle(t){
let currentNumber = 1
  for (let i= 1; i <= t; i++)
  {
    let row = ''

      for (let j=1; j<=i; j++)
      {
        row += `${currentNumber.toString().padStart(2, "0")} `
      currentNumber++
      }
      console.log(row);
  }
}

let t = 4 ;
drawTriangle(t);

