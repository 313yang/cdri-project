# CDRI 프론트엔드 사전과제

## 프로젝트 개요
> 카카오 책 검색하기 api를 이용한 도서 검색 페이지 입니다.

https://cdri-project.vercel.app/

## 실행 방법 및 환경설정
>개발 환경
- node version: v22.14.0
- Vite + React + Typesctipt

>실행 방법
1. `yarn`으로 패키지를 설치합니다.
2. `yarn dev`로 실행합니다.
3. `http://localhost:5173/` 에서 페이지를 확인합니다.

## 폴더 구조 및 주요 코드 설명
> 폴더 구조

![image](https://github.com/user-attachments/assets/ba09fe76-3e62-4fa4-8c20-ba0ec0d6b6aa)

- **`assets`**: 아이콘 svg파일들을 모아둔 폴더입니다.
- **`components`**: 재사용 가능한 컴포넌트들을 모아두며, `Button`과 `Input` 같은 UI 컴포넌트는 `components/ui`에 정리합니다.
- **`context`**: 전역 상태를 관리합니다.
- **`defines`**: 타입 정의를 저장합니다.
- **`pages`**: 라우터별 페이지 컴포넌트를 관리하며, `index.tsx`는 페이지 컴포넌트, `style.ts`는 페이지 스타일을 담고 있습니다.
- **`router`**: 페이지 라우트를 관리합니다.
- **`querys`**: tanstack-query로 불러오는 데이터를 관리합니다.
- **`store`**: 전역으로 사용하는 상태관리 store를 포함합니다.
- **`styles`**: 글로벌 스타일, 테마, 공유 스타일을 포함합니다.
- **`utils`**: 전역 변수와 유틸리티 함수들을 저장합니다.

> 주요 코드 설명
```
/** 검색 기록을 저장하는 함수입니다.  **/
 setKeywordList: (keyword: string) => {
    if (!keyword) return; // -> 입력된 키워드가 없다면 바로 반환합니다.
  
    const filteredList = get().keywordList.filter(item => item !== keyword); // ->  키워드가 이미 존재하는 경우, 해당 키워드를 제거합니다.
   
    if (filteredList.length >= 8) filteredList.shift(); // -> 등록된 검색어가 8개 이상인 경우, 배열 첫번째 요소를 삭제합니다.
    
    filteredList.push(keyword); // -> 새로운 키워드를 배열 마지막 요소에 추가합니다.

    set({ keywordList: filteredList }); // -> zustand > persist 를 이용해 localStorage에 필터된 리스트를 저장합니다.
}
```
```
/** tanstack-query (react-query) > useInfiniteQuery를 사용하여 무한 스크롤 방식으로 데이터를 불러옵니다 **/
const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ["books", target, query],
        queryFn: ({ pageParam }) => fetchBooks({ target, query, page: pageParam }),
        initialPageParam: 1, // -> 초기 페이지 설정합니다
        getNextPageParam: ({ is_end }, pages) => {
            const maxPage = Math.ceil(pages[0].totalBooks / 10);
            const isNextPage = !is_end && pages.length < maxPage; // 다음페이지가 있는지 여부를 체크합니다.

            return isNextPage ? pages.length + 1 : null;
        },
    });
```


## 라이브러리 선택 이유
- `Vite`: 빠른 개발 환경을 제공하기 위해 사용했습니다..
- `Zustand`: 상태가 많지 않아서 가벼운 로컬 상태 관리를 위해 사용했습니다.
- `styled-component`: 컴포넌트에 전달된 props를 활용해 동적으로 스타일을 쉽게 변경하기 위해 사용했습니다.

## 강조하고싶은 기능

- 검색기능 > 동일한 검색어가 있으면 해당검색어 삭제 후 배열 맨 끝으로(최신화)하는 기능을 추가하였습니다.
- 도서 검색 시 `react-intersection-observer` 라이브러리를 사용해 인피니티 스크롤을 구현했습니다.
