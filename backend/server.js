import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Error.js";

dotenv.config();
connectDatabase();
const app = express();

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

// //Load PRODUCT FROM SERVER
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// //Single PRODUCT FROM SERVER
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

// app.get("/", (req, res) => {
//   res.send("API is running ... ");
// });

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server is running  port ${PORT}`));
