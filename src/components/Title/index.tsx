import { useLocation } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { PageTitles } from "@/utils/consts";
import { SearchHistory } from "../SearchHistory";
import { useEffect, useRef, useState } from "react";
import { TitleContainer } from "./style";
import { TargetType } from "@/defines/global.type";

interface TitleProps {
    setQuery: (val: string) => void;
    setTarget: (val: TargetType) => void;
    totalBooks: number;
}

/** 현재 경로에 따라 타이틀을 출력합니다. */
export const Title = ({ setQuery, setTarget, totalBooks }: TitleProps) => {
    const { pathname } = useLocation();
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
    const searchRef = useRef<HTMLDivElement>(null); // search div 참조

    /** `pathname`에 맞는 타이틀 객체를 찾습니다 */
    const currentText = PageTitles.find((text) => text.path === pathname)
        || { title: PageTitles[0].title, result: PageTitles[0].result }; // 기본 값으로 "도서 검색" 설정.

    useEffect(() => {
        /** searchRef 이외의 element 클릭 시 포커스가 off 됩니다. */
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <TitleContainer>
            <h2>{currentText.title}</h2>
            {pathname === "/" && (
                <div ref={searchRef}>
                    <SearchBar
                        setQuery={setQuery}
                        setTarget={setTarget}
                        isSearchFocused={isSearchFocused}
                        onFocus={() => setIsSearchFocused(true)}
                    />
                    {isSearchFocused && <SearchHistory />}
                </div>
            )}
            <span>
                <p>{currentText.result}</p>
                <p>총 <strong>{totalBooks}</strong>건</p>
            </span>

        </TitleContainer>
    );
};