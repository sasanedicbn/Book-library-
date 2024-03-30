import Book from "./Book";
import { BookType } from "./Typescript";

function BookList({ book, handleDeleteBook, handleToggleRead, onEditBook }: BookListProps) {
  return (
    <div className="list__div">
      <ul className="ul__list">
        {book.map((book) => (
          <Book 
            key={book.id} 
            book={book} 
            readBook={book.readBook} 
            handleToggleRead={handleToggleRead} 
            onDelete={handleDeleteBook} 
            onEditBook={onEditBook} 
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
