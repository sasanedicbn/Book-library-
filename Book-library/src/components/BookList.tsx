import Book from "./Book";

function BookList({ book, handleDeleteBook }) {
    console.log(book);
    return (
        <div className="list__div">
            <ul className="ul__list">
                {book.map((book) => (
                    <Book key={book.id} book={book} readBook={book.readBook} onDelete={handleDeleteBook} handleReadBook={handleReadBook} />
                ))}
            </ul>
        </div>
    );
}

  export default BookList;
 