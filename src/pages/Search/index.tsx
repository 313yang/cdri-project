import { Fragment, useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { BookList } from "@/components/BookList";
import { NoResult } from "@/components/NoResult";
import { Title } from "@/components/Title";
import fetchBooks from "@/querys/useFetchBooks";
import { TargetType } from "@/defines/global.type";
import { BookListWrapper } from "../../styles/bookWrapper.styled";

export const SearchPage = () => {
    const [query, setQuery] = useState<string>("");
    const [target, setTarget] = useState<TargetType>("title");
    const { ref, inView } = useInView();

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ["books", target, query],
        queryFn: ({ pageParam }) => fetchBooks({ target, query, page: pageParam }),
        initialPageParam: 1,
        getNextPageParam: ({ is_end }, pages) => {
            const maxPage = Math.ceil(pages[0].totalBooks / 10);

            if (!is_end && pages.length < maxPage) {
                return pages.length + 1;
            }
            // 다음 페이지가 없으면 undefined | null 반환!
            return undefined;
        },
    });

    useEffect(() => {
        /** 화면 최하단 도달 시 도서 다음페이지 fetch */
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);


    const pages = data?.pages || [{ books: [], totalBooks: 0 }];
    return <>
        <Title
            setQuery={setQuery}
            setTarget={setTarget}
            totalBooks={data?.pages[0].totalBooks || 0}
        />
        {pages[0].books.length > 0 ?
            <BookListWrapper>
                {isLoading && <div>Loading...</div>}
                {data?.pages.map((page, index) => (
                    <Fragment key={index}>
                        {page.books.map(book => (
                            <BookList key={book.isbn} book={book} />
                        ))}
                    </Fragment>
                ))}
            </BookListWrapper>
            : <NoResult desc="검색된 결과가 없습니다." />
        }
        <div ref={ref} style={{ height: "20px" }} />
    </>;
};