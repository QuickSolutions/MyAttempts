const BookObject = {
  title: "The Art of Thinking Clearly",
  author: " Rolf Dobelli",
  bookLanguages: "Spanish",
  publisher: "Sceptre",
  bookISBN: "9781444759549",
  publicationDate: "28 March 2013",
  printLength: 336,

  bookAge: function () {
    let curDate = new Date();
    let pubDate = new Date(this.publicationDate);
    let bookAge = (curDate - pubDate) / (1000 * 60 * 60 * 24);
    return Math.floor(bookAge) + " Days";
  },

  displayPrintLength: function () {
    return this.printLength + " Pages";
  },

  renderMethod: function () {
    return "Object Using const Concept";
  },
};

export default BookObject;
