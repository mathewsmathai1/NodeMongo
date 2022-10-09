const mongooseConnect = require("./connect");
const mongoose = require("mongoose");
const bookModel = require("./model/book-model");

(async () => {
  await mongooseConnect();

  console.log(process.argv);
  if (process.argv[2] == "createBook") {
    //node index.js createBook <bookId> <bookName>

    console.time("createBook");
    const user = new bookModel({
      _id: process.argv[3],
      name: process.argv[4],
    });

    await user.save();
    console.timeEnd("createBook");
    console.log(
      "################################################################"
    );
    process.exit();
  } else if (process.argv[2] == "deleteBook") {
    //node index deleteUser <username>
    let bookId = process.argv[3];
    console.time("deleteBook");
    await bookModel.deleteOne({
      _id: bookId,
    });
    console.timeEnd("deleteBook");
    console.log(
      "################################################################"
    );
    process.exit();
  } else if (process.argv[2] == "createManyBooks") {
    //node index.js addMultipleUsers "user1,user2" "password1,password2"
    let bIds = process.argv[3].split(",");
    let bNames = process.argv[4].split(",");

    const arr = [];
    for (let i = 0; i < bIds.length; i++) {
      let obj = {
        _id: bIds[i],
        name: bNames[i],
      };
      arr.push(obj);
    }
    const saveTogroup = await bookModel.insertMany(arr);
    console.timeEnd("createManyBooks");
    console.log(
      "################################################################"
    );
    process.exit();
  } else if (process.argv[2] == "bulkUpdateBooks") {
    //node index.js bulkUpdateBooks "user1,user2" "desc1,desc2"
    let bIds = process.argv[3].split(",");
    let bDesc = process.argv[4].split(",");

    console.time("bulkUpdateBooks");
    let updateArray = [];
    for (let i = 0; i < bIds.length; i++) {
      updateArray.push({
        updateOne: {
          filter: { _id: bIds[i] },
          update: {
            $set: {
              description: bDesc[i],
            },
          },
        },
      });
    }

    await bookModel.bulkWrite(updateArray);
    console.timeEnd("bulkUpdateBooks");
    console.log(
      "################################################################"
    );
    process.exit();
  }
})();
