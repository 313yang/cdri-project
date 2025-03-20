import { BookType } from "@/defines/book";
import axios from 'axios';

/** 도서 검색 api 입니다. */
const fetchBooks = async ({ target, query }: { target: string, query: string; }): Promise<{ books: BookType[], totalBooks: number; }> => {
    try {
        const response = await axios.get('https://dapi.kakao.com/v3/search/book', {
            headers: {
                Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
            },
            params: {
                target,
                query,
            },
        });

        // 응답이 200 일 때만 documents, 검색된 책의 총 개수를 반환 합니다.
        if (response.status === 200) {
            const books = response.data.documents || [];
            const totalBooks = response.data.meta.total_count; // 총 책의 개수
            return { books, totalBooks };
        } else {
            // 200이 아닌 경우 빈 배열과 0 반환
            return { books: [], totalBooks: 0 };
        }
    } catch (error) {
        return { books: [], totalBooks: 0 };
    }
};
export default fetchBooks;