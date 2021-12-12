import React from "react";
import ReactDom from "react-dom";
import Book from "./Book";
import { books } from "./books";
import "./index.css";

function BookList() {
  const myBooks = books.map((book) => <Book key={book.id} {...book} />);
  return <section className="booklist">{myBooks}</section>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
