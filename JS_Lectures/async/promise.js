"use strict";

// Promise is a JavaScript object for asynchronous operation.(비동기적)
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 새로운 프로듀서가 만들어 질때는 executor라는 함수가 자동으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something");
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumer: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
