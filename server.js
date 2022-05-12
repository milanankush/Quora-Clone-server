const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
const PORT = 80;
const db = require("./db");
const router = require("./routes");

//database connection
db.connect();

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
// app.use((req, res, next) => {
//   req.header("Access-Control-Allow-Origin", "*");
//   req.header("Access-Control-Allow-Headers", "*");
//   next();
// });
app.use(cors());

//routes
app.use('/api', router)

app.use("/upploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
  } catch (error) {
    res.send("Oops!! unexpected error");
  }
});

app.use(cors());

//server listening
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening at port no. ${PORT}`);
});
