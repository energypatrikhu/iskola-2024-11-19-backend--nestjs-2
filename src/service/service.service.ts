import { Injectable } from '@nestjs/common';
// import { CreateServiceDto } from './dto/create-service.dto';
// import { UpdateServiceDto } from './dto/update-service.dto';

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  publishYear: number;
  reserved: boolean;
}

@Injectable()
export class ServiceService {
  books: Book[] = [];

  getAllBooks() {
    return this.books;
  }

  getBookById(id: number) {
    return this.books.find((book) => book.id === id);
  }

  deleteBook(id: number) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return false;
    }

    this.books.splice(bookIndex, 1);
    return true;
  }

  createBook(title: string, author: string, isbn: string, publishYear: number) {
    const newBook: Book = {
      id: this.books.length + 1,
      title,
      author,
      isbn,
      publishYear,
      reserved: false,
    };

    const bookExists = this.books.find(
      (book) =>
        book.title === title &&
        book.author === author &&
        book.isbn === isbn &&
        book.publishYear === publishYear,
    );
    if (bookExists) {
      return bookExists;
    }

    this.books.push(newBook);
  }

  updateBook(
    id: number,
    title: string,
    author: string,
    isbn: string,
    publishYear: number,
    reserved: boolean,
  ) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      return false;
    }

    book.title = title;
    book.author = author;
    book.isbn = isbn;
    book.publishYear = publishYear;
    book.reserved = reserved;

    return book;
  }
}
