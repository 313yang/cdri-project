import { BookType } from "@/defines/book.type";
import { useDeleteFavoriteAction, useFavoriteListState, useSetFavoriteListAction } from "@/stores/useFavoriteStore";
import { useState } from "react";
import { BookListDefault } from "./Default";
import { BookListDetail } from "./Detail";

interface BookListProps {
    book: BookType;
}

export const BookList = ({ book }: BookListProps) => {
    const addFavorite = useSetFavoriteListAction();
    const deleteFavorite = useDeleteFavoriteAction();
    const favoriteList = useFavoriteListState();
    const [isDetail, setIsDetail] = useState<boolean>(false); // 상세보기 클릭 여부
    /** 찜한 책인지 여부 */
    const isFavorite = favoriteList.find(x => x.isbn === book.isbn) || null;

    return <>
        {!isDetail ?
            <BookListDefault
                book={book}
                addFavorite={addFavorite}
                deleteFavorite={deleteFavorite}
                isFavorite={isFavorite}
                setIsDetail={() => setIsDetail(!isDetail)}
            /> :
            <BookListDetail
                book={book}
                addFavorite={addFavorite}
                deleteFavorite={deleteFavorite}
                isFavorite={isFavorite}
                setIsDetail={() => setIsDetail(!isDetail)}
            />
        }
    </>;
};