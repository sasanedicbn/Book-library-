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