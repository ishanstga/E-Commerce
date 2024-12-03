import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Store");
const productSchema = new mongoose.Schema({
  categoryId: String,
  image: String,
  id: String,
  name: String,
  price: String,
  description: String,
});
export const dbProducts = mongoose.model("products", productSchema);

export const dbInsets = async (data) => {
  await dbProducts.insertMany(data);
};
