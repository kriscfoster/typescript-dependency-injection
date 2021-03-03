import sinon from 'sinon';
import BookController from '../../src/book/BookController';
import BookRepository from '../../src/book/BookRepository';
import BookService from '../../src/book/BookService';

describe('BookController >', () => {

  let bookService;

  beforeEach(() => {
    bookService = new BookService(new BookRepository());
  });

  test('no books >', () => {
    // setup
    sinon.stub(bookService, 'getBooks').returns([]);
    const bookController = new BookController(bookService);
    // act
    const books = bookController.getBooksRoute();
    // assert
    expect(books.length).toBe(0);
  });

  test('one book >', () => {
    // setup
    sinon.stub(bookService, 'getBooks').returns([{ id: 2, name: 'Poems that Solve Puzzles' }]);
    const bookController = new BookController(bookService);
    // act
    const books = bookController.getBooksRoute();
    // assert
    expect(books.length).toBe(1);
    expect(books[0].id).toBe(2);
    expect(books[0].name).toBe('Poems that Solve Puzzles');
  });
});
