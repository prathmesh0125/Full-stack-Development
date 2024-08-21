import express from "express";
const app = express();
app.get("/he", (req, res) => {
  res.send("hello");
});
app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 29.99,
      stock: 150,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: 49.99,
      stock: 85,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 19.99,
      stock: 200,
      category: "Accessories",
    },
    {
      id: 4,
      name: "USB-C Hub",
      price: 34.99,
      stock: 120,
      category: "Accessories",
    },
    {
      id: 5,
      name: "Wireless Keyboard",
      price: 39.99,
      stock: 90,
      category: "Electronics",
    },
  ];

  if (req.query.search) {
    const filterdata = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterdata);
    return;
  }
  res.send(products);
  // setTimeout(() => {
  // }, [3000]);
});

app.listen(3000, () => {
  console.log("server is running on 3000 port");
});
