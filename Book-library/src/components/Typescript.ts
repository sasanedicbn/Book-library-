export type Props = Input & {
    handleClick: () => void;
    isActive?: boolean;
  }

export type Input ={
    titleBook: string,
    setTitleBook: React.Dispatch<React.SetStateAction<string>>,
    authorBook: string,
    setAuthorBook: React.Dispatch<React.SetStateAction<string>>,
    numberPagesBook: number,
    setNumberPagesBook: React.Dispatch<React.SetStateAction<number>>,
    readBook: boolean,
    setBook: React.Dispatch<React.SetStateAction<any[]>>,
}

export type BookType = {
  id: number;
  title: string;
  author: string;
  numberPages: number;
  readBook: boolean;
}
export type PropsBook = {
  book: BookType;
  readBook: boolean;
  onDelete: (id: number) => void;
  handleToggleRead: (id: number) => void;
  onEditBook: (updatedBook: BookType) => void;
};
export type BookListProps = {
  book: BookType,
  handleDeleteBook: (id: number) => void,
  handleToggleRead: (id: number) => void,
  onEditBook: (updatedBook: BookType) => void
}
