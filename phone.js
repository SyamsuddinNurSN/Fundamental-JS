const inputNumber = "1234567890"

function formatPhoneNumber(input) {
    let temp = "(xxx)-xxx-xxxx"
    input.split("").map(item => {
        temp = temp.replace("x", item)
    })
    return temp
  }
  
  console.log(formatPhoneNumber(inputNumber))