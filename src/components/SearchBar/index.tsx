import { useState } from "react";
import { Icon } from "../ui/Icons";
import { Input } from "../ui/Input";
import { InputContainer, SearchBarContainer } from "./style";
import { setKeywordListAction } from "@/stores/useKeywordStore";
import { SearchDetailPopup } from "../SearchDetail";
import { Button } from "../ui/Button";
import { TargetType } from "@/defines/global.type";

interface SearchBarProps {
    setQuery: (val: string) => void; // 엔터 이벤트 발생 시 검색되는 query.
    setTarget: (val: TargetType) => void;
    isSearchFocused: boolean; // 검색기록 창 열려있는지 여부.
    onFocus: () => void,
}

/** 검색창 컴포넌트 입니다. */
export const SearchBar = ({ setQuery, setTarget, isSearchFocused, onFocus }: SearchBarProps) => {
    const setKeywordList = setKeywordListAction();
    const [keyword, setKeyword] = useState<string>("");
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const handleSearch = () => {
        setKeywordList(keyword);
        setQuery(keyword);
        setKeyword("");
    };

    return <SearchBarContainer>
        <InputContainer $border_radius_none={isSearchFocused}>
            <img src={Icon.Search} alt="돋보기 아이콘" />
            <Input
                value={keyword}
                placeholder="검색어를 입력하세요."
                onChange={setKeyword}
                onFocus={onFocus}
                onEnter={handleSearch}
            />
        </InputContainer>
        <Button
            size="small"
            color="subtitle"
            border="subtitle"
            bg_color="white"
            onClick={() => setShowPopup(!showPopup)}
        >
            상세검색
        </Button>
        {showPopup && <SearchDetailPopup
            setQuery={setQuery}
            setTarget={setTarget}
            onClose={() => setShowPopup(false)}
        />}
    </SearchBarContainer>;
};