// let userName = "Giorgi"; // 'Giorgi'   `Giorgi`

// console.log(typeof userName);

// let age = 30;

// console.log(typeof age);

// let isStudent = false;

// console.log(typeof isStudent);

// let Temo;

// console.log(typeof Temo);

// let testOne = null;

// console.log(typeof testOne);

// let user1 = {
//   id: 1234,
//   userName: "Mindia",
//   isStudent: false,
//   email: "Mindiaarabuli4@gmail.com",
//   recoverEmail: null,
//   address: {
//     country: "Georgia",
//     city: "Tbilisi",
//   },
// };
// let user2 = {
//   id: 1235,
//   userName: "Giorgi",
//   isStudent: true,
//   email: "GiorgiTest@gmail.com",
//   recoverEmail: "Giorgi@gmail.com",
//   address: {
//     country: "Georgia",
//     city: "Tbilisi",
//     homeId: 10,
//     street: "Agmashenebeli",
//   },
// };

// let userArray = ["Mindia", 10, false, "Mindiaarabuli4@gmail.com"];

// let userList = [{   }]

// console.log(userArray);

// console.log(user1.userName);
// console.log(user1.email);
// console.log(user1.isStudent);
// console.log(user1.id);
// console.log(user1.recoverEmail);

// console.log(user2.address.city);

// let keyWord = "userName";

// console.log(user2["address"]["street"]);

// console.log(user1[keyWord]);

//  let userArray = ["Mindia", 10, false, "Mindiaarabuli4@gmail.com"];

let themp = 10;

let hotthemp = 30;
let coldthemp = 0;

if (themp >= hotthemp) {
  console.log("ცხელა მზიანი ამინდია");
} else if (themp <= coldthemp) {
  console.log("ცივა ცუდი ამინდია");
} else if (themp > coldthemp && themp < hotthemp) {
  console.log("ნორმალური ამინდია");
} else {
  console.log("ჩაწერე ციფრი");
}
