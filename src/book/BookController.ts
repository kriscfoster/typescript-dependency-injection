import express from 'express';
import BookService from './BookService';

export default class BookController {

  bookService: BookService;
  router = express.Router();

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  getBooksRoute() {
    return this.bookService.getBooks();
  }

  routes() {
    this.router.get('/', (_req, res) => res.send(this.getBooksRoute()));
    return this.router;
  }
}
