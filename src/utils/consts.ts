import { DropdownOptionType } from "@/defines/global.type";

/** 페이지 별 타이틀에 들어가는 텍스트들입니다. */
export const PageTitles = [{
    path: "/",
    title: "도서 검색",
    result: "도서 검색 결과",
}, {
    path: "/favorite",
    title: "내가 찜한 책",
    result: "찜한 책",
}];

/** `상세검색` > 드롭다운 옵션 리스트입니다. */
export const selectOptions: DropdownOptionType[] = [
    { target: "title", name: "제목" },
    { target: "publisher", name: "출판사" },
    { target: "person", name: "저자명" }
];

/** 도서 이미지가 없을 시 노출될 이미지 url입니다 */
export const noImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9a-z8FDeUrX6dCcx1RbTZrfmPbAtUvfcKOA&s"