function BookForm() {
    return (
      <form className="formado hidden">
        <div className="form__box">
          <label htmlFor="title">Title of the book:</label>
          <input type="text" id="title" name="title" placeholder="Harry Potter" required />
        </div>
        <div className="form__box">
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="name" placeholder="J.K. Rowling" required />
        </div>
        <div className="form__box">
          <label htmlFor="nPages">Number of pages:</label>
          <input type="number" id="nPages" name="numberPages" placeholder="500" required />
        </div>
        <div className="form__box form__box__check">
          <input type="checkbox" id="checkRead" className="checkRead" name="checker" />
          <label className="check__label" htmlFor="subscribeNews">Have you read this book?</label>
          <input className="submit" id="submit" type="submit" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="close__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </form>
    );
  }

  export default BookForm;