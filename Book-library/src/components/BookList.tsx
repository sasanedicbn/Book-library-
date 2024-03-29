import Book from "./Book";


function BookList({ book, handleDeleteBook,  handleToggleRead }){
    console.log(book);
    return (
        <div className="list__div">
            <ul className="ul__list">
                {book.map((book) => (
                    <Book key={book.id} book={book} readBook={book.readBook} handleToggleRead={handleToggleRead} onDelete={handleDeleteBook} />
                ))}
            </ul>
        </div>
    );
}

  export default BookList;
 