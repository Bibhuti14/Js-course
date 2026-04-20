// let obj = {
//   name: "Bibhuti",
//   id: 1212,
//   age: 24,
// };

// console.log(obj.name);
// console.log(obj["name"]);
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