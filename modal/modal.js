"use strict";

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("xxx");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal_overlay");

const modalOpen = () => {
  modal.classList.remove("hidden");
};

const modalClose = () => {
  modal.classList.add("hidden");
};

openBtn.addEventListener("click", modalOpen);
closeBtn.addEventListener("click", modalClose);
modalOverlay.addEventListener("click", modalClose);

// const openButton = document.getElementById("open");
// const modal = document.querySelector(".modal");
// const closeButton = document.querySelector(".xbtn");
// const backgroudModal = document.querySelector(".modal_overlay");

// const openModal = () => {
//   console.log("open works");
//   modal.classList.remove("hidden");
// };

// const closeModal = () => {
//   console.log("close works");
//   modal.classList.add("hidden");
// };
// openButton.addEventListener("click", openModal);
// backgroudModal.addEventListener("click", closeModal);
// closeButton.addEventListener("click", closeModal);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     console.log(`hello, my name is ${this.name} and I'm ${this.age}`);
//   }
// }

// const ellie = new Person("ellie", 19);

// class User {
//   constructor(firstname, lastname, age) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//   }
//   speak() {
//     console.log(`hello, im ${this.firstname} and only ${this.age}`);
//   }
//   get age() {
//     return this._age;
//   }

//   set age(value) {
//     this._age = value > 0 ? value : "null";
//   }
// }

// const david = new User("david", "jong", -1);

// console.log(david.age);
// david.speak();
