//ex1
function sum(...number) {
  return number.reduce((result, number) => result + number, 0);
}

//ex1
function sum(array) {
  return array.reduce((result, value) => result + value, 0);
}

//ex2
let circle = {
  radius: 5,
  area: 3.14 * radius ** 2,
  get radius() {
    return this.radius;
  },
  set radius(value) {
    this.radius = value;
  },
  get area() {
    return this.area;
  },
};

//ex3
function countOccurrences(array, searchElement) {
  let count = 0;
  for (const value of array) {
    if (value === searchElement) {
      count++;
    }
  }
  if (count > 1) {
    throw new Error("Number is duplicate!");
  }
  return count;
}
try {
  console.log(countOccurrences([1, 1, 2, 4, 5, 2], 2));
} catch (err) {
  console.log(err.name + ":", err.message);
}
