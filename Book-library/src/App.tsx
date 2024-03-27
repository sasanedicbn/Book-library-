import './App.css'
import Header from './components/Header'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import Footer from './components/Footer'
import Overlay from './components/Overlay'
import { useState } from 'react'

function App() {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive); 
  };
  return (
    <div className="container">
      <Header handleClick={handleClick}/>
      <BookList />
      <BookForm isAcitve={isActive} handleClick={handleClick}/> 
      <Overlay/>
      <Footer />
    </div>
  );
}

export default App;
