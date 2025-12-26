const express = require("express");
const path = require("path");
const { title } = require("process");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const products = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" },
];

app.get("/products", (req, res) => {
  res.render("home", { title: "Home", products: products });
});

app.get("/about", (req, res)=> {
  res.render("about", {title: "About page"})
})

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
