"use strict";

// Array

// 배열의 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index Position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); // 맨 마지막 배열의 value 찾기

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("strawberries", "peach");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item from the beginning
fruits.unshift("watermelon");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are much slower than pop, push

// splice: remove an item by index position
fruits.push("berries", "orange");
console.log(fruits);
fruits.splice(2, 1); // splice(몇 번째 인덱스, 몇 개)
console.log(fruits);
fruits.splice(1, 1, "tomato", "cherry"); // 첫 번째 인덱스부터 한 개 삭제하고 그 자리에 "tomato"와 "cherry" 추가
console.log(fruits);

// combine two arrays (concat()을 통하여 두 가지 배열을 합칠 수 있음)
const fruits2 = ["pear", "apple"];
//concat
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // 기존에 있던 fruit와 fruits2가 합쳐짐

// 5. Searching
// find the index
console.clear();
console.log(fruits);
// indexOf : find the index
console.log(fruits.indexOf("tomato")); // 1
// includes
console.log(fruits.includes("cherry")); //true
// lastIndexOf
console.clear();
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple")); // 맨 첫 번째 "apple"의 index 출력 => 0
console.log(fruits.lastIndexOf("apple")); // 맨 마지막 "apple"의 index 출력 => 5
