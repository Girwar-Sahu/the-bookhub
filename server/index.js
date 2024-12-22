import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.config.js";
import bookRouter from "./routes/book.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/books", bookRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
