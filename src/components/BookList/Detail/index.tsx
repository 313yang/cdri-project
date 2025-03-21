import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { formatNumber, openWindow } from "@/utils/functions";
import { BookListDetailContainer, BookInfo, ImageWrapper, BookTitle, BookButtons, BookPriceWrapper } from "../style";
import { BookType } from "@/defines/book.type";

interface BookListDetailProps {
    book: BookType;
    addFavorite: (val: BookType) => void;
    deleteFavorite: (val: string) => void;
    isFavorite: BookType | null;
    setIsDetail: () => void;
}
/** `상세보기` 클릭 시 노출되는 도서 목록 입니다.  */
export const BookListDetail = ({
    book,
    addFavorite,
    deleteFavorite,
    isFavorite,
    setIsDetail
}: BookListDetailProps) => {
    return <BookListDetailContainer>
        <ImageWrapper>
            <button onClick={() => isFavorite ? deleteFavorite(book.isbn) : addFavorite(book)}>
                <img className="fav" src={(isFavorite ? Icon.Fill : Icon.Line)} alt="하트 아이콘" />
            </button>
            <img className="thumbnail" src={book.thumbnail} alt="책 이미지" />
        </ImageWrapper>
        <BookInfo>
            <BookTitle>
                <h3>{book.title}</h3>
                <p>{book.authors[0]}</p>
            </BookTitle>
            <h4>책 소개</h4>
            <p>{book.contents}</p>
        </BookInfo>
        <BookButtons>

            <Button size="medium"
                color="secondary"
                bg_color="lightGray"
                onClick={setIsDetail}
            >
                상세보기
                <img src={Icon.Arrow} alt="화살표 아이콘" />
            </Button>
            <BookPriceWrapper>
                <span><p>원가</p> <p className="price">{formatNumber(book.price)}원</p></span>
                <span><p>할인가</p> <h3>{formatNumber(book.sale_price)}원</h3></span>
                <Button size="large" onClick={() => openWindow(book.url)} >구매하기</Button>
            </BookPriceWrapper>
        </BookButtons>
    </BookListDetailContainer>;
};