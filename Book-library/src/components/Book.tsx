import './Book.css';

const Book = ({ book }) => {
  return (
    <div className="book">
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <div className="numOfPages">{book.numberPages} pages</div>
      <div className="btns">
        <button>Read</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Book;