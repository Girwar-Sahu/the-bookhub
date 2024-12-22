import express from "express";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.get("/getbooks", getBooks);
router.get("/getbook/:bookId", getBook);
router.post("/create", createBook);
router.put("/update/:bookId", updateBook);
router.delete("/delete/:bookId", deleteBook);

export default router;
