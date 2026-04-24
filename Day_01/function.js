// function addTwo(a, b) {
//   console.log(a + b);
// }

// addTwo(4, 6);

// function addTwo(a, b) {
//   let num = a + b;
//   return num;
// }

// let result = addTwo(9, 2);
// console.log(result);

function loginMessage(user) {
  if (user === undefined) {
    console.log("Plese give a Value");
  }
  return `${user} is loged in`;
}
console.log(loginMessage());
