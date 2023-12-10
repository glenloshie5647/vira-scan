/*
Filename: ComplexProgram.js
Content: A complex javascript program designed to manage a virtual library system.
*/

// Class representing a Book
class Book {
  constructor(title, author, publicationYear, genre) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
  }
}

// Class representing a Library
class Library {
  constructor(name, books) {
    this.name = name;
    this.books = books;
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to remove a book from the library
  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  // Method to search for books by author
  searchBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  // Method to search for books by genre
  searchBooksByGenre(genre) {
    return this.books.filter(book => book.genre === genre);
  }

  // Method to display all books in the library
  displayAllBooks() {
    this.books.forEach(book =>
      console.log(`Title: ${book.title}, Author: ${book.author}, Publication Year: ${book.publicationYear}, Genre: ${book.genre}`)
    );
  }
}

// Create book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
const book3 = new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance");
const book4 = new Book("1984", "George Orwell", 1949, "Dystopian");

// Create library instance
const library = new Library("My Library", [book1, book2, book3, book4]);

// Adding a new book to the library
const newBook = new Book("The Hobbit", "J.R.R. Tolkien", 1937, "Fantasy");
library.addBook(newBook);

// Remove a book from the library
library.removeBook("Pride and Prejudice");

// Search books by author
const booksByAuthor = library.searchBooksByAuthor("F. Scott Fitzgerald");
console.log("Books written by F. Scott Fitzgerald:", booksByAuthor);

// Search books by genre
const fictionBooks = library.searchBooksByGenre("Fiction");
console.log("Fiction books in the library:", fictionBooks);

// Display all books in the library
library.displayAllBooks();

// Output:
// Books written by F. Scott Fitzgerald: [ Book { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925, genre: 'Fiction' } ]
// Fiction books in the library: [ Book { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925, genre: 'Fiction' }, Book { title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: 1960, genre: 'Fiction' } ]
// Title: The Great Gatsby, Author: F. Scott Fitzgerald, Publication Year: 1925, Genre: Fiction
// Title: To Kill a Mockingbird, Author: Harper Lee, Publication Year: 1960, Genre: Fiction
// Title: 1984, Author: George Orwell, Publication Year: 1949, Genre: Dystopian
// Title: The Hobbit, Author: J.R.R. Tolkien, Publication Year: 1937, Genre: Fantasy