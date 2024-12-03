import express from "express";
import { saveProduct, getProducts, deleteProduct, updateProduct, patchProduct } from "../application/product.js";

export const productRouter =  express.Router();

// Define routes for the product API
productRouter.route("/").get(getProducts).post(saveProduct);
productRouter.route("/:id").delete(deleteProduct).put(updateProduct).patch(patchProduct);