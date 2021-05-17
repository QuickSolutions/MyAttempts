/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

//
//import BookObject from "./BookObject.js";

let renderBookInfo = (bookClass) => {
  return `
          <div>
            <h3>${bookClass.title}</h3>
            <ul>
              <li>Author: ${bookClass.author}</li>
              <li>Language: ${bookClass.bookLanguages}</li>
              <li>Publisher: ${bookClass.publisher}</li>
              <li>Print Length: ${bookClass.displayPrintLength()}</li>
              <li>ISBN: ${bookClass.bookISBN}</li>
              <li>Publication Date: ${bookClass.publicationDate}</li>
              <li>Book Age: ${bookClass.bookAge()}</li>
              <li><b>Render Type</b>: ${bookClass.renderMethod()}</li>          
            </ul>
          </div>
        `;
};

import BookClass from "./BookClass.js";

let Mans_Search_For_Meaning = new BookClass(
  "Man's Search For Meaning",
  "Viktor E Frankl",
  "English",
  "RHUK",
  "9781846041242",
  "7 February 2008",
  "160"
);

var book1 = document.createElement("book1");
console.log(Mans_Search_For_Meaning);
book1.innerHTML = renderBookInfo(Mans_Search_For_Meaning);

import BookObject from "./BookObject.js";
var book2 = document.createElement("book2");
console.log(BookObject);
book2.innerHTML = renderBookInfo(BookObject);

import BookFunction from "./BookFunction.js";
var Saat_Samundar_Paar = new BookFunction(
  "Saat Samundar Paar",
  "Mulk Raj Anand",
  "Hindi",
  "Hind Pocket Books",
  "9353496802",
  "25 March 2020",
  "180"
);
var book3 = document.createElement("book3");
console.log(Saat_Samundar_Paar);
book3.innerHTML = renderBookInfo(Saat_Samundar_Paar);

document.body.appendChild(book1);
document.body.appendChild(book2);
document.body.appendChild(book3);
