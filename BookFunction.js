function BookFunction(
  title,
  author,
  bookLanguages,
  publisher,
  bookISBN,
  publicationDate,
  printLength
) {
  this.title = title;
  this.author = author;
  this.bookLanguages = bookLanguages;
  this.publisher = publisher;
  this.bookISBN = bookISBN;
  this.publicationDate = publicationDate;
  this.printLength = printLength;

  this.bookAge = function () {
    let curDate = new Date();
    let pubDate = new Date(this.publicationDate);
    let bookAge = (curDate - pubDate) / (1000 * 60 * 60 * 24);
    return Math.floor(bookAge) + " Days";
  };

  this.displayPrintLength = function () {
    return this.printLength + " Pages";
  };

  this.renderMethod = function () {
    return "Object Using Function Concept";
  };
}

export default BookFunction;
