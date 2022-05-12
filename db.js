const mongoose = require("mongoose");

const url =
  "mongodb+srv://milanankush:Ankush12@quoraclone-cluster.9zlbi.mongodb.net/quora-clone?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Db Connected successfully");
    }).catch((error) => console.log("Error: ", error))
};
