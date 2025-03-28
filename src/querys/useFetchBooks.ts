import { FetchBooksReqType, FetchBooksRespType, FetchBooksType } from "@/defines/book.type";
import axios, { AxiosResponse } from 'axios';

/** 도서 검색 api 응답값의 default 값입니다 */
const fetchBooksInit = { books: [], totalBooks: 0, is_end: true };

/** 도서 검색 api 입니다. */
const fetchBooks = async ({ target, query, page, }: FetchBooksReqType): Promise<FetchBooksType> => {
    try {
        const response: AxiosResponse<FetchBooksRespType> = await axios.get('https://dapi.kakao.com/v3/search/book', {
            headers: {
                Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
            },
            params: { target, query, page },
        });
        // 응답이 200 일 때만 documents, 검색된 책의 총 개수를 반환 합니다.
        if (response.status === 200) {
            const books = response.data.documents || [];
            const totalBooks = response.data.meta.total_count; // 총 책의 개수
            const is_end = response.data.meta.is_end;
            return { books, totalBooks, is_end };
        }
        return fetchBooksInit;

    } catch (error) {
        return fetchBooksInit;
    }
};
export default fetchBooks;