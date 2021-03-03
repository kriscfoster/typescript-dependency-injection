import { injectable } from 'tsyringe';
import BookRepository from './BookRepository';

@injectable()
export default class BookService {
  bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  getBooks() {
    return this.bookRepository.getBooks();
  }
}
