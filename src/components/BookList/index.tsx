import { BookType } from "@/defines/book";

interface BookListProps {
    book: BookType;
}

export const BookList = ({ book }: BookListProps) => {
    return <div>
        <p>{book.authors[0]}</p>
        <p>{book.contents}</p>
    </div>;
};