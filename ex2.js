//ex1
function findMax(a, b) {
  return a > b ? a : b;
}

console.log(findMax(10, 5));    // 10
console.log(findMax(12, 13));  // 13
console.log(findMax(10, -10)); // 10

//ex2
function isLandscape(width, height) {
  if (width > height) return true;
  return false;
}
console.log(isLandscape(800, 600)); // true
console.log(isLandscape(600, 800)); // false


//ex3
function fizzBuzz(input) {
  if (input % 3 == 0) console.log("Fizz");
  if (input % 5 == 0) console.log("Buzz");
  if (input % 3 == 0 && input % 5 == 0) console.log("FizzBuzz");
  if (input % 3 != 0 || input % 5 != 0) return input;
  if (typeof input != "number") console.log("Not a number");
}
console.log(fizzBuzz(3));    // Fizz
console.log(fizzBuzz(5));    // Buzz
console.log(fizzBuzz(15));   // Fizz, Buzz, FizzBuzz
console.log(fizzBuzz(7));    // 7
console.log(fizzBuzz("a"));  // Not a number


//ex4
function checkSpeed(speed) {
  if (speed <= 70) {
    console.log("OK");
    return;
  }
  const point = Math.floor((speed - 70) / 5);
  if (point > 12) console.log("License suspended");
  else console.log("Points:", point);
}

checkSpeed(70);   // OK
checkSpeed(75);   // Points: 1
checkSpeed(105);  // Points: 7
checkSpeed(130);  // License suspended


//ex5
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 == 0) console.log(i + "even");
    else console.log(i + "odd");
  }
}
showNumbers(5);
// 0even
// 1odd
// 2even
// 3odd
// 4even
// 5odd


//ex6
function countTruthy(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }
  return count;
}
console.log(countTruthy([0, null, undefined, "", 1, "a", true]));
// 3



//ex7
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(obj[key]);
    }
  }
}
// function showProperties(obj) {
//   Object.values(obj).forEach((value) => {
//     if (typeof value === "string") {
//       console.log(value);
//     }
//   });
// }
const movie = {
  title: "Avengers",
  year: 2018,
  rating: 4.5,
  director: "Tony"
};

showProperties(movie);
// Avengers
// Tony

//ex7
function calculateGrade(marks) {
  let average;
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  average = sum / marks.length;
  let grade;
  if (average > 89 && average < 100) grade = "A";
  else if (average > 79) grade = "B";
  else if (average > 69) grade = "C";
  else if (average > 59) grade = "D";
  else grade = "F";
}
console.log(calculateGrade([80, 80, 50]));


//ex9
function showStars(rows) {
  for (let i = 0; i < rows.length; i++) {
    line = "";
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
showStars(5);


//ex10
function showPrimes(limit) {
  if (limit < 2) return false;

  let result = [];

  for (let i = 2; i <= limit; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result.push(i);
    }
  }
  console.log(result);
}
