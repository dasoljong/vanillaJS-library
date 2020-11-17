"use strict";

// JavaScript는 동기적이다. (순서대로 진행됨)
// hoisting: var, function delaration(함수선언) 등이 제일 위로 올라감.

console.log("1");
setTimeout(() => console.log("2"), 2000);
console.log("3");

// Synchronous callback
// 함수의 선언이기 때문에 맨 위로 호이스팅 됐을 것
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
// 함수의 선언이기 때문에 맨 위로 호이스팅 됐을 것

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 3000);

// Callback Hell Example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
