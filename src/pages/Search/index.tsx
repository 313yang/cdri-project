import { useQuery } from "@tanstack/react-query";
import { BookList } from "@/components/BookList";
import { NoResult } from "@/components/NoResult";
import { Title } from "@/components/Title";
import fetchBooks from "@/querys/useFetchBooks";
import { useKeywordState } from "@/stores/useKeywordStore";

export const SearchPage = () => {
    const keywordList = useKeywordState();
    const target = "title";
    const query = keywordList[keywordList.length - 1];

    const { data, isLoading, error } = useQuery({
        queryKey: ['books', target, query],
        queryFn: () => fetchBooks({ target, query }),
    });

    const { books, totalBooks } = data || { books: [], totalBooks: 0 };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;


    return <>
        <Title totalBooks={totalBooks} />
        {books.length > 0 ?
            <>
                {books.map(book => (
                    <BookList key={book.isbn} book={book} />
                ))}
            </>
            : <NoResult desc="검색된 결과가 없습니다." />
        }
    </>;
};