import { useQuery } from "@tanstack/react-query";
import { BookList } from "@/components/BookList";
import { NoResult } from "@/components/NoResult";
import { Title } from "@/components/Title";
import fetchBooks from "@/querys/useFetchBooks";
import { BookListWrapper } from "../../styles/bookWrapper.styled";
import { useState } from "react";
import { TargetType } from "@/defines/global.type";

export const SearchPage = () => {
    const [query, setQuery] = useState<string>("");
    const [target, setTarget] = useState<TargetType>("title");

    const { data, isLoading, error } = useQuery({
        queryKey: ['books', target, query],
        queryFn: () => fetchBooks({ target, query }),
    });

    const { books, totalBooks } = data || { books: [], totalBooks: 0 };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;


    return <>
        <Title
            setQuery={setQuery}
            setTarget={setTarget}
            totalBooks={totalBooks}
        />
        {books.length > 0 ?
            <BookListWrapper>
                {books.map(book => (
                    <BookList key={book.isbn} book={book} />
                ))}
            </BookListWrapper>
            : <NoResult desc="검색된 결과가 없습니다." />
        }
    </>;
};