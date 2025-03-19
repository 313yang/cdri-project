import { useLocation } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { PageTitles } from "@/utils/consts";
import { SearchHistory } from "../SearchHistory";

/** 현재 경로에 따라 타이틀을 출력합니다. */
export const Title = () => {
    const { pathname } = useLocation();

    /** `pathname`에 맞는 타이틀 객체를 찾습니다 */
    const currentText = PageTitles.find((text) => text.path === pathname)
        || { title: PageTitles[0].title, result: PageTitles[0].result }; // 기본 값으로 "도서 검색" 설정.
    return (
        <div>
            <h2>{currentText.title}</h2>
            {pathname === "/" && <div>
                <SearchBar />
                <SearchHistory />
            </div>}
            <p>{currentText.result} 총 <strong>0</strong>건</p>
        </div>
    );
};