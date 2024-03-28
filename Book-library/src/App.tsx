import './App.css'
import Header from './components/Header'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import Footer from './components/Footer'
import Overlay from './components/Overlay'
import { useState } from 'react'

function App() {
  const [isActive, setIsActive] = useState(false);
  const [titleBook, setTitleBook] = useState('')
  const [authorBook, setAuthorBook] = useState('')
  const [numberPagesBook, setNumberPagesBook] = useState(0)
  const [readBook, setReadBook] = useState(false)
  const [book, setBook] = useState([])
  
  const handleDeleteBook = (id) => {
     setBook((prevBooks) => prevBooks.filter((book) => book.id !== id))
  }

  const handleClick = () => {
    setIsActive(!isActive); 
  };

  return (
    <div className="container">
      <Header handleClick={handleClick}/>
      <BookList book={book} readBook={readBook} handleDeleteBook={handleDeleteBook}/>
      <BookForm setBook={setBook} isActive={isActive} handleClick={handleClick} titleBook={titleBook} setTitleBook={setTitleBook} authorBook={authorBook} setAuthorBook={setAuthorBook}
      numberPagesBook={numberPagesBook} setNumberPagesBook={setNumberPagesBook} readBook={readBook} setReadBook={setReadBook}/> 
      <Overlay/>
      <Footer />
    </div>
  );
}

export default App;
