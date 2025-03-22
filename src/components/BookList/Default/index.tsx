import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { formatNumber, openWindow } from "@/utils/functions";
import { BookType } from "@/defines/book.type";
import { noImageUrl } from "@/utils/consts";
import { BookListContainer, BookInfo, ImageWrapper, BookTitle, BookButtons } from "../style";

interface BookListDefaultProps {
    book: BookType;
    addFavorite: (val: BookType) => void;
    deleteFavorite: (val: string) => void;
    isFavorite: BookType | null;
    setIsDetail: () => void;
}
/** 기본으로 노출되는 도서 목록입니다. */
export const BookListDefault = ({
    book,
    addFavorite,
    deleteFavorite,
    isFavorite,
    setIsDetail
}: BookListDefaultProps) => {
    return <BookListContainer>
        <BookInfo>
            <ImageWrapper>
                <button onClick={() => isFavorite ? deleteFavorite(book.isbn) : addFavorite(book)}>
                    <img className="fav" src={(isFavorite ? Icon.Fill : Icon.Line)} alt="하트 아이콘" />
                </button>
            <img className="thumbnail" src={book.thumbnail || noImageUrl} alt="책 이미지" />
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
                bg_color="lightGray"
                onClick={setIsDetail}
            >
                상세보기
                <img src={Icon.Arrow} alt="화살표 아이콘" />
            </Button>
        </BookButtons>
    </BookListContainer>;
};