"use strict";

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  // solution
  const result = fruits.join(", ");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  // solution
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // solution
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // solution
  const result = array.slice(2);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // solution
  const result = students.find(function (student) {
    return student.score === 90;
  });
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // solution
  const result = students.filter((student) => {
    return student.enrolled;
  });
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // solution
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // solution
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // solution
  // reduce는 우리가 원하는 시작 점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용함.
  console.clear();
  const result = students.reduce((prev, curr) => {
    console.log("------------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // solution
  const result = students
    .map((student) => student.score)
    // .filter((score) => score > 50) // 점수가 50점 이상인 것만 필터링 하는 조건
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // solution
  console.clear();
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // a - b 는 오름차순으로 정렬
    .join();
  console.log(result);
}
