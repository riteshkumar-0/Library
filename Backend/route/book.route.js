import express from "express";
import { getBook, getBookById } from "../controller/book.controller.js";
const router = express.Router();

// Route to fetch all books
router.get('/', getBook);

// Route to fetch a book by ID
router.get('/:id', getBookById);

export default router;