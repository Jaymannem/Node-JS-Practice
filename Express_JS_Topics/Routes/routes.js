const express = require("express");

const app = express();
const PORT = 3000;

// get home page
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

// get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// get single product
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const getSingleProduct = products.find((product) => product.id === productId);

  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("Product is not found! Plese try with different id");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
