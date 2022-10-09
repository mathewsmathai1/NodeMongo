let some = 1;
//settled
//promise queue  -> resolve();
//callstack

// resolve();

async function someFunction() {
  return await new Promise((resolve, reject) => {
    //console.log(0);
    if (some == 1) {
      console.log("PROMSIE DECLARE");
      resolve(5);
    } else {
      reject();
    }
  })
    .then((param) => {
      console.log("THEN 1: ", param);
      //throw new Error();
      // return new Promise((resolve, reject) => {
      //   reject(10);
      // });
      //throw new Error();
      return 10;
    })
    .then((param) => {
      console.log("THEN 2:", param);
      return 100;
    })
    .catch((param) => {
      console.log("CATCH: ", param);
    });
  // .then(() => {
  //   console.log("FUN END");
  // });

  console.log("FUN END");
}

(async (param) => {
  let result = someFunction().then((result) => {
    console.log(result);
  });
})(10);
//console.log("THE END");
//console.log("1");

//callstack
//callback queue
//microservices queue
// function func() {
//   console.log("Hello");
// }

// const func2 = () => {
//   console.log("Hello");
// };

// function func1(param, param1) {
//   if (true) {
//     console.log(param);
//     param1();
//   }
// }

// func1(5, () => {
//   console.log("Hello");
// });
