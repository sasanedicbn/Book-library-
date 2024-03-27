import './App.css'
import Header from './components/Header'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import Footer from './components/Footer'
import Overlay from './components/Overlay'

function App() {
  return (
    <div className="container">
      <Header />
      <BookList />
      <BookForm />
      <Overlay/>
      <Footer />
    </div>
  );
}

export default App;
