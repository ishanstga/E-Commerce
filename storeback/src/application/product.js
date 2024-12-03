import { dbProducts, dbInsets } from "../db.js";

const products = [
  {
    categoryId: "1",
    image: "/assets/products/airpods-max.png",
    id: "1",
    name: "AirPods Max",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/echo-dot.png",
    id: "2",
    name: "Echo Dot",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "2",
    image: "/assets/products/pixel-buds.png",
    id: "3",
    name: "Galaxy Pixel Buds",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "1",
    image: "/assets/products/quietcomfort.png",
    id: "4",
    name: "Bose QuiteComfort",
    price: "249.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/soundlink.png",
    id: "5",
    name: "Bose SoundLink",
    price: "119.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "5",
    image: "/assets/products/apple-watch.png",
    id: "6",
    name: "Apple Watch 9",
    price: "699.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/iphone-15.png",
    id: "7",
    name: "Apple Iphone 15",
    price: "1299.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/pixel-8.png",
    id: "8",
    name: "Galaxy Pixel 8",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
];

//Get: Get all products
export const getProducts = (req, res) => {
  dbProducts.find({}).then((data) => {
    res.status(200).json(data);
  });
};

//POST: save new Product
export const saveProduct = (req, res) => {
  const newProduct = req.body;
  const name = newProduct.name;

  //products.push(newProduct);
  dbInsets(newProduct);
  res
    .status(201)
    .send({ message: "Product saved successfully", product: newProduct });
};

//DELETE: Delete the specific product
export const deleteProduct = (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((pro) => pro.id == id);

  if (index !== -1) {
    products.splice(index, 1); // Remove the user from the array
    res.status(200).send({ message: "Product deleted." });
  } else {
    res.status(404).send({ message: "Product not found" });
  }

};

//PUT: Update entier product
export const updateProduct = (req, res) => {
  const id = req.params.id;
  const updatedProduct = req.body;
  const index = products.findIndex((product) => product.id == id);

  if (index !== 1) {
    products[index] = { id: id, ...updatedProduct };
    res.status(200).send({
      message: "Product updated successfully",
      product: products[index],
    });
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

//PATCH: Update part of the product
export const patchProduct = (req, res) => {
  const id = req.params.id;
  const updatedProduct = req.body;
  const product = products.find((product) => product.id == id);

  if (product) {
    Object.assign(product, updatedProduct);
    res.status(200).send({ message: "Product updated successfully", product });
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};
