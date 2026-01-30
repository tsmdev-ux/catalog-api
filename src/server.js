const express = require("express");
const { listProducts, createProduct } = require("./products");

const app = express();
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(listProducts());
});

app.post("/products", (req, res) => {
  const result = createProduct(req.body);
  if (!result.ok) return res.status(400).json({ error: result.error });
  return res.status(201).json(result.product);
});

app.listen(3000, () => console.log("API on http://localhost:3000"));
