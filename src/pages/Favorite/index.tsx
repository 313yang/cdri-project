import { BookList } from "@/components/BookList";
import { NoResult } from "@/components/NoResult";
import { Title } from "@/components/Title";
import { useFavoriteListState } from "@/stores/useFavoriteStore";
import { BookListWrapper } from "@/styles/bookWrapper.styled";

export const FavoritePage = () => {
    const favoriteList = useFavoriteListState();

    return <>
        <Title totalBooks={favoriteList.length} />
        {favoriteList.length > 0 ?
            <BookListWrapper>
                {favoriteList.map(book => (
                    <BookList key={book.isbn} book={book} />
                ))}
            </BookListWrapper>
            : <NoResult desc="찜한 책이 없습니다." />
        }

    </>;
};