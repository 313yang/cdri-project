import { BookType } from "@/defines/book";
import { BookButtons, BookInfo, BookListContainer, BookTitle, ImageWrapper } from "./style";
import { Button } from "../ui/Button";
import { formatNumber, openWindow } from "@/utils/functions";
import { Icon } from "../ui/Icons";
import { useDeleteFavoriteAction, useFavoriteListState, useSetFavoriteListAction } from "@/stores/useFavoriteStore";

interface BookListProps {
    book: BookType;
}

export const BookList = ({ book }: BookListProps) => {
    const addFavorite = useSetFavoriteListAction();
    const deleteFavorite = useDeleteFavoriteAction();
    const favoriteList = useFavoriteListState();
    /** 찜한 책인지 여부 */
    const isFavorite = favoriteList.find(x => x.isbn === book.isbn);

    return <BookListContainer>
        <BookInfo>
            <ImageWrapper>
                <button onClick={() => isFavorite ? deleteFavorite(book.isbn) : addFavorite(book)}>
                    <img className="fav" src={(isFavorite ? Icon.Fill : Icon.Line)} alt="하트 아이콘" />
                </button>
                <img className="thumbnail" src={book.thumbnail} alt="책 이미지" />
            </ImageWrapper>
            <BookTitle>
                <h3>{book.title}</h3>
                <p>{book.authors[0]}</p>
            </BookTitle>
        </BookInfo>
        <h3>{formatNumber(book.sale_price)}원</h3>
        <BookButtons>
            <Button size="medium" onClick={() => openWindow(book.url)} >구매하기</Button>
            <Button size="medium"
                color="secondary"
                bgColor="lightGray"
                onClick={() => openWindow(book.url)}
            >
                상세보기
                <img src={Icon.Arrow} alt="화살표 아이콘" />
            </Button>
        </BookButtons>
        {/* <p>{book.contents}</p> */}
    </BookListContainer>;
};