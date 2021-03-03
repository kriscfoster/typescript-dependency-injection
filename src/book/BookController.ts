import { Router } from 'express';
import { autoInjectable } from 'tsyringe';
import BookService from './BookService';

@autoInjectable()
export default class BookController {
  bookService: BookService;
  router: Router;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.router = new Router();
  }

  getBooksRoute() {
    return this.bookService.getBooks();
  }

  routes() {
    this.router.get('/', (_req, res) => res.send(this.getBooksRoute()));
    return this.router;
  }
}
