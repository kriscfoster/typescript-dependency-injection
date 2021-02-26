import express from 'express';
import BookService from './BookService';
const router = express.Router();

class BookController {

  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  routes() {
    router.get('/', (req, res) => {
      res.send(this.bookService.getBooks()); 
    });
    
    return router;
  }
}

export default BookController;
