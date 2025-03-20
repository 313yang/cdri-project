import { useState } from "react";
import { Icon } from "../ui/Icons";
import { Input } from "../ui/Input";
import { InputContainer, SearchBarContainer } from "./style";
import { setKeywordListAction } from "@/stores/useKeywordStore";
import { SearchDetailPopup } from "../SearchDetail";
import { Button } from "../ui/Button";

interface SearchBarProps {
    isSearchFocused: boolean; // 검색기록 창 열려있는지 여부.
    onFocus: () => void,
}

/** 검색창 컴포넌트 입니다. */
export const SearchBar = ({ isSearchFocused, onFocus }: SearchBarProps) => {
    const setKeywordList = setKeywordListAction();
    const [search, setSearch] = useState<string>("");
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const handleSearch = () => {
        setKeywordList(search);
        setSearch("");
    };

    return <SearchBarContainer>
        <InputContainer isSearchFocused={isSearchFocused}>
            <img src={Icon.Search} alt="돋보기 아이콘" />
            <Input
                value={search}
                placeholder="검색어를 입력하세요."
                onChange={setSearch}
                onFocus={onFocus}
                onEnter={handleSearch}
            />
        </InputContainer>
        <Button
            size="small"
            color="subtitle"
            border="subtitle"
            bgColor="white"
            onClick={() => setShowPopup(true)}
        >
            상세검색
        </Button>
        {showPopup && <SearchDetailPopup onClose={() => setShowPopup(false)} />}
    </SearchBarContainer>;
};