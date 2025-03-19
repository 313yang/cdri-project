import { useState } from "react";
import { Icon } from "../ui/Icons";
import { Input } from "../ui/Input";
import { InputContainer, SearchBarContainer } from "./style";
import { setKeywordListAction } from "@/stores/useKeywordStore";

interface SearchBarProps {
    onFocus: () => void,
}

/** 검색창 컴포넌트 입니다. */
export const SearchBar = ({ onFocus }: SearchBarProps) => {
    const [search, setSearch] = useState<string>("");
    const setKeywordList = setKeywordListAction();

    const handleSearch = () => {
        setKeywordList(search);
        setSearch("");
    };

    return <SearchBarContainer>
        <InputContainer>
            <img src={Icon.Search} alt="돋보기 아이콘" />
            <Input
                value={search}
                placeholder="검색어를 입력하세요."
                onChange={setSearch}
                onFocus={onFocus}
                onEnter={handleSearch}
            />
        </InputContainer>
        <button onClick={handleSearch} onMouseDown={(e) => e.preventDefault()}  >상세검색</button>
    </SearchBarContainer>;
};