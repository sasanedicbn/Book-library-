
const Book = ({ book,readBook,onDelete, handleToggleRead}) => {
 function handleDelete () {
    onDelete(book.id)
 }
 function handleUpdateRead(){
    handleToggleRead(book.id)
 }
 
  return (
    <div className="book">
      <div className="title">Title: {book.title}</div>
      <div className="author">Author: {book.author}</div>
      <div className="numOfPages">Number Pages: {book.numberPages} </div>
      <div className="btns">
        <button onClick={handleUpdateRead}>{readBook ? 'Read' : 'Not read'}</button>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Book;