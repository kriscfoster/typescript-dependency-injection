import express from 'express';
import { injectable, container } from 'tsyringe';
import BookService from './BookService';

@injectable()
export default class BookController {

  bookService = container.resolve(BookService);
  router = express.Router();

  constructor(bookService) {
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
