const express = require("express");
require("./bckend/db/mongoose");
const cors = require("cors");
// const userRouter = require("./bckend/routers/user");
const userRouter = require("./bckend/routers/user");
const dotenv = require("dotenv");
const feedRouter = require("./bckend/routers/feed");
const admin = require("./bckend/routers/admin");
const app = express();

const path = require("path");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "/frontend/build")));

// console.log(__dirname);

app.use(userRouter);
app.use(admin);
app.use(feedRouter);

app.get("/*", function (req, res) {
  res.sendFile(
    // path.join(__dirname, "/frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
