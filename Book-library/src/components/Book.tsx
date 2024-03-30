import  { useState } from "react";
import { PropsBook } from "./Typescript";

const Book = ({ book, readBook, onDelete, handleToggleRead, onEditBook }:PropsBook) => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [numberPages, setNumberPages] = useState(book.numberPages);

  const handleEdit = () => {
    setShowInput(true);
  };

  const handleSave = () => {
    const updatedBook = {
      ...book,
      title: title,
      author: author,
      numberPages: numberPages
    };
    onEditBook(updatedBook);
    setShowInput(false);
  };

  const handleClose = () => {
    setTitle(book.title);
    setAuthor(book.author);
    setNumberPages(book.numberPages);
    setShowInput(false);
  };

  return (
    <div className="book">
      <div className="title">
        Title: {showInput ? (
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        ) : (
          book.title
        )}
      </div>
      <div className="author">
        Author: {showInput ? (
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
          />
        ) : (
          book.author
        )}
      </div>
      <div className="numOfPages">
        Number Pages: {showInput ? (
          <input 
            type="number" 
            value={numberPages} 
            onChange={(e) => setNumberPages(parseInt(e.target.value))} 
          />
        ) : (
          book.numberPages
        )}
      </div>
      <div className="btns">
        {showInput ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleClose}>Close</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => handleToggleRead(book.id)}>{readBook ? 'Read' : 'Not read'}</button>
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Book;
