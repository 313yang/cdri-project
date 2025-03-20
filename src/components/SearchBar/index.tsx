import { useState } from "react";
import { Icon } from "../ui/Icons";
import { Input } from "../ui/Input";
import { InputContainer, SearchBarContainer } from "./style";
import { setKeywordListAction } from "@/stores/useKeywordStore";
import { SearchDetailPopup } from "../SearchDetail";
import { Button } from "../ui/Button";

interface SearchBarProps {
    onFocus: () => void,
}

/** 검색창 컴포넌트 입니다. */
export const SearchBar = ({ onFocus }: SearchBarProps) => {
    const setKeywordList = setKeywordListAction();
    const [search, setSearch] = useState<string>("");
    const [showPopup, setShowPopup] = useState<boolean>(false);

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
        <Button
            text="상세검색"
            size="small"
            color="subtitle"
            border="subtitle"
            bgColor="white"
            onClick={() => setShowPopup(true)}
        />
        {showPopup && <SearchDetailPopup onClose={() => setShowPopup(false)} />}
    </SearchBarContainer>;
};