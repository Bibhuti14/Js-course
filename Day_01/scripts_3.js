// let obj = {
//   name: "Bibhuti",
//   id: 1212,
//   age: 24,
//   "full name": "Bibhuti saikia",
// };

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj["full name"]);
// only this can access "full name"
// obj.age = 60;
// console.log(obj);
// delete obj.age;
// console.log(obj);

// let nested = {
//   greet: {
//     name: "Bibhuti",
//     math: 33,
//   },
// };

// console.log(nested.greet.math);

// let person = {
//   name: "Code",
//   age: 35,
//   isNaN: false,
// };
// for (let key in person) {
//   console.log(key, person[key]);
// }

// let obj1 = { name: "Bibhuti" };
// let obj2 = obj1;

// obj2.name = "Rahul";

// console.log(obj1.name); // Rahul 😲

// When an object is assigned to a variable, JavaScript does not copy the actual object.
// Instead, it stores a reference (address in memory) to that object.
// obj1 → points to the object in memory
// obj2 = obj1 → now both point to the same object

// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10 ✅ (no change)

// a and b are separate copies premitive data

// const mySymbol = Symbol("description");

// const user = {
//   name: "John",
//   [mySymbol]: 123, // Symbol as a key
// };

// console.log(user[mySymbol]);//123
// console.log(user);

// let obj = {
//   name: "Binod",
//   class: 5,
//   email: "bibhuti445@gail.com",
// };

// obj.name = "Rajiv";
// console.log(obj);

// Object.freeze(obj);

// obj.name = "Hassan";
// console.log(obj);

// let JsUser = {
//   email: "Bibhuti112@gmail.com",
// };

// JsUser.greetings = function () {
//   console.log("Hello User");
// };
// JsUser.greetings_2 = function () {
//   console.log(`Hello User ${this.email}`);
// };

// console.log(JsUser);

// console.log(JsUser.greetings());
// console.log(JsUser.greetings_2());

// let obj1 = {
//   1: "a",
//   2: "b",
// };
// let obj2 = {
//   3: "c",
//   4: "d",
// };

// let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// let obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// let tinder = {};

// tinder.name = "Vivek";
// tinder.email = "Vivek121@gmail.com";
// tinder.isLoggedIn = true;

// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(tinder.hasOwnProperty('isLoggedIn'));

// Object destructuring

// let course = new Object();

// course.name = "JavaScript";
// course.courseinstructor = "Hitesh Choudhary";

// const { courseinstructor: ins } = course;

// console.log(ins);
