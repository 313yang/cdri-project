export interface BookType {
    /** 도서 제목 */
    title: string;
    /** 도서 소개 */
    contents: string;
    /** 도서 상세 URL */
    url: string;
    /** 국제 표준 도서번호 */
    isbn: string;
    /** 도서 출판날짜 */
    datetime: string;
    /** 도서 저자 리스트 */
    authors: string[];
    /** 도서 출판사 */
    publisher: string;
    /** 도서 번역자 리스트 */
    translators: string[];
    /** 도서 정가 */
    price: number;
    /** 도서 판매가 */
    sale_price: number;
    /** 도서 표지 미리보기 URL */
    thumbnail: string;
    /** 도서 판매 상태 정보 (정상, 품절, 절판 등) */
    status: string;
}

/** 도서 정보 불러오기 api 호출 시 응답 데이터타입 입니다. */
export interface BookResponseType {
    meta: {
        /** 현재 페이지가 마지막 페이지인지 여부 */
        is_end: boolean;
        /** 중복된 문서를 제외하고, 처음부터 요청 페이지까지의 노출 가능 문서 수 */
        pageable_count: number;
        /** 검색된 문서 수 */
        total_count: number;
    };
    documents: BookType[];
}