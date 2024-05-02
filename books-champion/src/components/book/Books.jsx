import BookItem from "../bookItem/BookItem";
import BookSearch from "../bookSearch/BookSearch";
import { useState } from "react";

const Books = ({ books, setFilter, valueFilter }) => {
  let booksFiltered = books;
  if (valueFilter) {
    booksFiltered = books.filter((item) =>
      item.bookTitle.toLowerCase().includes(valueFilter.toLowerCase())
    );
  }

  const searchHandler = (value) => {
    setFilter(value);
  };
  const [booksSelected, setBooksSelected] = useState("");
  const selectedBookHandler = (title) => {
    setBooksSelected(title);
  };
  return (
    <>
      <BookSearch onSearch={searchHandler} />
      {booksSelected && (
        <p>
          El libro seleccionado actualmente es: <b>{booksSelected}</b>
        </p>
      )}
      <div className="d-flex justify-content-center flex-wrap my-5">
        {booksFiltered.length > 0 ? (
          booksFiltered.map((book) => (
            <BookItem
              key={book.id}
              title={book.bookTitle}
              author={book.bookAuthor}
              rating={book.bookRating}
              pageCount={book.pageCount}
              imageUrl={book.imageUrl}
              onBookSelected={selectedBookHandler}
            />
          ))
        ) : (
          <p>Ningún libro coincide con la búsqueda deseada</p>
        )}
      </div>
    </>
  );
};

export default Books;
