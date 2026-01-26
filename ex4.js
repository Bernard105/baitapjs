//ex1
let result = [];
let index = 0;
function arrayFromRange(min, max) {
  if (min > max) return result;
  for (let i = min; i <= max; i++) {
    result[index] = i;
    index++;
  }
  return result;
}

//ex2
function includes(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return true;
    }
  }
  return false;
}
function includes(array, searchElement) {
  return array.includes(searchElement);
}

//ex3- 0(n)
function except(original, remove) {
  let flag = 1;
  let result = [];
  let index = 0;
  for (let i = 0; i < original.length; i++) {
    for (let j = 0; j < remove.length; i++) {
      if (original[i] == remove[j]) {
        flag = 0;
      }
    }
    if ((flag = 1)) {
      result[index] = original[i];
      index++;
    }
  }
  return result;
}
//ex3 - 0(n)
function except1(original, remove) {
  let result = [];
  let index = 0;
  const set = new Set(remove);
  for (let value of original) {
    if (!set.has(value)) {
      result[index] = value;
      index++;
    }
  }
  return result;
}

//ex4
function move(array, index, offset) {
  const result = [...array];
  const newIndex = index + offset;
  if (newIndex < 0 || newIndex >= array.length) {
    console.error("Invalid offset");
    return result;
  }
  const temp = result[newIndex];
  result[newIndex] = result[index];
  result[index] = temp;
  return result;
}

//ex5
function countOccurrences(array, searchElement) {
  let count = 0;
  for (let value of array) {
    if (value === searchElement) count++;
  }
  return count;
}
// function countOccurrences(array, searchElement) {
//     let count = 0;
//     array.forEach(value => {
//         if (value === searchElement) count++;
//     });
//     return count;
// }
// function countOccurrences(array, searchElement) {
//     return array.reduce((count, value) => {
//         return value === searchElement ? count + 1 : count;
//     }, 0);
// }
// function countOccurrences(array, searchElement) {
//     return array.filter(value => value === searchElement).length;
// }
// function countOccurrences(array, searchElement) {
//     const map = new Map();
//     for (let value of array) {
//         map.set(value, (map.get(value) || 0) + 1);
//     }
//     return map.get(searchElement) || 0;
// }
// function countOccurrences(array, searchElement) {
//     const counts = {};

//     for (let value of array) {
//         counts[value] = (counts[value] || 0) + 1;
//     }

//     return counts[searchElement] || 0;
// }

//ex6
function getMax(array) {
  let max = 0;
  if (array.length == 0) return undefined;
  for (let value of array) {
    if (value > max) max = value;
  }
  return max;
}
function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((max, value) => (value > max ? value : max));
}

//ex7
const movies = [
  { title: "A", year: 2018, rating: 4.5 },
  { title: "B", year: 2018, rating: 4.7 },
  { title: "C", year: 2018, rating: 3 },
  { title: "D", year: 2017, rating: 4.5 },
];

movies.sort((a, b) => b.rating - a.rating);

function findFilm(movies) {
  for (let value of movies) {
    if (value.year === 2018 && value.rating > 4) {
      console.log(value.title);
    }
  }
}
findFilm(movies);

const result1 = movies
  .filter(movie => movie.year === 2018 && movie.rating > 4)
  .sort((a, b) => b.rating - a.rating)
  .map(movie => movie.title);

console.log(result.join(", "));