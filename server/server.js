const express = require("express");
const path = require("path");
let categories = require("./categories/index.get.json");
let products = require("./products/index.get.json");
let banners = require("./banners/index.get.json");
let users = [
  {
    fname: "Test",
    lname: "User",
    email: "test@gmail.com",
    password: "test",
    cpassword: "test",
  },
];

let cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(
  "/public",
  express.static(path.resolve(__dirname, "./../static", "public"))
);

app.use(
  "/dist",
  express.static(path.resolve(__dirname, "./../static", "dist"))
);

// to render html content
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./../static", "index.html"));
});

app.get("/products", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./../static", "index.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./../static", "index.html"));
});

app.get("/register", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./../static", "index.html"));
});

// to return json data to ui
app.get("/categoriesdata", (req, res) => {
  res.json(categories);
});

app.get("/productsdata", (req, res) => {
  res.json(products);
});

app.get("/banners", (req, res) => {
  res.json(banners);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/newuser", (req, res) => {
  let userTobeAdded = req.body;
  if (users.length !== 0) {
    let userExist = users.some((user) => user.email === userTobeAdded.email);
    if (!userExist) {
      users = [...users, userTobeAdded];
      res.json({ msg: "success" });
    } else {
      res.json({ msg: "user name already exist in db" });
    }
  } else {
    users = [...users, userTobeAdded];
    res.json({ msg: "success" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
