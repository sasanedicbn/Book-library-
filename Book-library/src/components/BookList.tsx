import Book from "./Book";

function BookList({ book }) {
    console.log(book);
    return (
        <div className="list__div">
            <ul className="ul__list">
                {book.map((book) => (
                    <Book key={book.id} book={book} />
                ))}
            </ul>
        </div>
    );
}

  export default BookList;
 