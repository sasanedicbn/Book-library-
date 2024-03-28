
const Book = ({ book,readBook,onDelete}) => {
 function handleDelete () {
    onDelete(book.id)
 }
  return (
    <div className="book">
      <div className="title">Title: {book.title}</div>
      <div className="author">Author: {book.author}</div>
      <div className="numOfPages">Number Pages: {book.numberPages} </div>
      <div className="btns">
        <button>{readBook ? 'Read' : 'Not read'}</button>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Book;