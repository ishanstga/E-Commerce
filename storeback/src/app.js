import express from "express";
import { productRouter } from "./api/product.js";
import mongoose from "mongoose";
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handling-middleware.js";

const port = 8000;

const app = express();
app.use(express.json());

app.use("/products", productRouter);
app.use(globalErrorHandlingMiddleware);

// Start the server
app.listen(port, () => console.log(`Server running in port: ${port}`));
