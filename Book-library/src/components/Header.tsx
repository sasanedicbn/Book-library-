function Header() {
    return (
      <div className="text__div">
        <h1 className="heading__primary">
          <span>📚</span>Book library<span>📚</span>
        </h1>
        <p className="text__paragraph">
          Use the button below to add to your library and watch your collection
          grow
        </p>
        <button className="btn button__new__book">New Book</button>
      </div>
    );
  }
  export default Header;