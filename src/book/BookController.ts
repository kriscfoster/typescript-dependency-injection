import express from 'express';
import { injectable, container } from 'tsyringe';
import BookService from './BookService';
const router = express.Router();

@injectable()
export default class BookController {

  bookService = container.resolve(BookService);

  routes() {
    router.get('/', (req, res) => {
      res.send(this.bookService.getBooks()); 
    });
    
    return router;
  }
}
