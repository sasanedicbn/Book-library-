import  { useState } from 'react';
import './App.css'
import Header from './components/Header';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Footer from './components/Footer';
import Overlay from './components/Overlay';

type Book = {
  id: number;
  title: string;
  author: string;
  numberPages: number;
  readBook: boolean;
}

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [titleBook, setTitleBook] = useState('');
  const [authorBook, setAuthorBook] = useState('');
  const [numberPagesBook, setNumberPagesBook] = useState(0);
  const [readBook, setReadBook] = useState(false);
  const [book, setBook] = useState<Book[]>([]);

  const handleDeleteBook = (id: number) => {
    setBook(prevBooks => prevBooks.filter(book => book.id !== id));
  };

  const handleToggleRead = (id: number) => {
    setBook(prevBooks =>
      prevBooks.map(book =>
        book.id === id ? { ...book, readBook: !book.readBook } : book
      )
    );
  };

  const handleEditBook = (updatedBook: Book) => {
    setBook(prevBooks =>
      prevBooks.map(book =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container">
      <Header handleClick={handleClick} />
      <BookList
        book={book}
        handleDeleteBook={handleDeleteBook}
        handleToggleRead={handleToggleRead}
        onEditBook={handleEditBook}
      />
      <BookForm
        setBook={setBook}
        isActive={isActive}
        handleClick={handleClick}
        titleBook={titleBook}
        setTitleBook={setTitleBook}
        authorBook={authorBook}
        setAuthorBook={setAuthorBook}
        numberPagesBook={numberPagesBook}
        setNumberPagesBook={setNumberPagesBook}
        readBook={readBook}
        setReadBook={setReadBook}
      />
      <Overlay />
      <Footer />
    </div>
  );
};

export default App;

