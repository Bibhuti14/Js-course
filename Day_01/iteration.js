// let array = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`For ${i}`);

//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i = i + 2;
// }

// let myArray = ["Superman", "Batman", "Flash"];

// let arr = 0;

// while (arr < myArray.length) {
//   console.log(`The value is ${myArray[arr]}`);
//   arr = arr + 1;
// }

// let myName = "Bibhuti";

// for (const i of myName) {
//   console.log(i);
// }

// let myObj = {
//   car1: "Maruti",
//   car2: "Maruti2",
//   car3: "Maruti3",
// };

// for (const key in myObj) {
//   console.log(myObj[key]);
// }

// let myname = "Bibhuti";
// for (const i in myname) {
//   console.log(i);
// }

// for in always print index numbers.

// let newArr = [1, 2, 3, 4, 5];

// newArr.forEach((val) => {
//   console.log(val);
// });

// let arr2 = [
//   { langName: "Java", langFile: "cs" },
//   { langName: "cpp", langFile: "rs" },
//   { langName: "python", langFile: "mozila" },
// ];

// arr2.forEach((item) => {
//   console.log(item.langName);
// });

// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 14];

// const newArr = arr.filter((i) => i > 4);

// console.log(newArr);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let selectBook = books.filter((bk) => bk.genre === "History");
// selectBook = books.filter((bk) => bk.genre === "History" && bk.edition > 1996);
// console.log(selectBook);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let newArr1 = arr
//   .map((i) => i * 10)
//   .map((i) => i + 1)
//   .filter((i) => i > 40);

//   console.log(newArr1);

// let arr = [1, 2, 3];

// let sumNum = arr.reduce((acc, curval) => acc + curval, 0);

// console.log(sumNum);

// const shoppingCart = [
//   {
//     itemName: "js course",
//     price: 2999,
//   },
//   {
//     itemName: "py course",
//     price: 999,
//   },
//   {
//     itemName: "mobile dev course",
//     price: 5999,
//   },
//   {
//     itemName: "data science course",
//     price: 12999,
//   },
// ];

// let pay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log(pay);

