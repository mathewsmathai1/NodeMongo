const { param } = require("./routes/user-routes");

function some() {
  if (true) {
    var variable = 10;
    //variable = 11;
  }
  console.log(variable);
}

// some();

// let obj = {
//   key: "value",
// };
// Object.freeze(obj);
// obj.key = "newValue";

// console.log(obj);

//callback(1), callback(2), callback(3), callback(3), callback(4)
// function func() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       //console.log(i);
//     }, 0);
//   }
//   //console.log("END OF LOOP");
// }

// func();

// Call Stack:
// 1)  setTimeout(() => {
//     console.log(10);
//   }, 10);

// 2)   console.log(1);

//2,3,5 = > 30

//mul(2)(3)(5);

function mul(param1) {
  console.log("param1", param1);
  return (param2) => {
    console.log("param2", param2);
    return (param3) => {
      console.log("param3", param3);
      return param1 * param2 * param3;
    };
  };
}

console.log(mul(2)(3)(5));

// function func123() {
//   return (param) => {
//     console.log(param);
//   };
// }

// let result = func123();
// result(10);

// func123()(10);
