class BookClass {
  constructor(
    title,
    author,
    bookLanguages,
    publisher,
    bookISBN,
    publicationDate,
    printLength
  ) {
    (this.title = title),
      (this.author = author),
      (this.bookLanguages = bookLanguages),
      (this.publisher = publisher),
      (this.bookISBN = bookISBN),
      (this.publicationDate = publicationDate),
      (this.printLength = printLength);
  }

  bookAge() {
    let curDate = new Date();
    let pubDate = new Date(this.publicationDate);
    let bookAge = (curDate - pubDate) / (1000 * 60 * 60 * 24);
    return Math.floor(bookAge) + " Days";
  }

  displayPrintLength() {
    return this.printLength + " Pages";
  }

  renderMethod() {
    return "Object Using Class Concept";
  }
}

export default BookClass;
