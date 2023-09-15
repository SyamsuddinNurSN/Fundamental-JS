let students = [ {
  name: "Andi"
  email: "Andi123@gmail.com"
  age: 25
  Score: 85
}, {
  name: "Budi"
  email: "Budi123@gmail.com"
  age: 27
  Score: 80
}, {
  name: "Cony"
  email: "Cony123@gmail.com"
  age: 26
  Score: 82
}, {
  name: "Doni"
  email: "Doni123@gmail.com"
  age: 27 
  Score: 87
}
]


function calculateStudentData (students) {

  let result = {
    score: {
      highest: 0,
      lowest: Infinity,
      average: 0
    },
    age: {
      highest: 0,
      lowest: Infinity,
      average: 0
    }
  };


  let sumScore = 0;
  let sumAge = 0;

  for (let student of students) {
  
    let {name, email, age, score} = student;

    sumScore += score;
    sumAge += age;

    if (score > result.score.highest) {
      result.score.highest = score;
    }
    if (score < result.score.lowest) {
      result.score.lowest = score;
    }

    if (age > result.age.highest) {
      result.age.highest = age;
    }
    if (age < result.age.lowest) {
      result.age.lowest = age;
    }
  }

  result.score.average = sumScore / students.length;
  result.age.average = sumAge / students.length;

  return result;
}
console.log