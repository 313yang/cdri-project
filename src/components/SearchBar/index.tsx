import { useState } from "react";
import { Icon } from "../ui/Icons";
import { Input } from "../ui/Input";
import { InputContainer, SearchBarContainer } from "./style";
import { useKeywordAction } from "@/stores/useKeywordStore";

export const SearchBar = () => {
    const [search, setSearch] = useState<string>("");
    const { setKeywordList } = useKeywordAction();

    return <SearchBarContainer>
        <InputContainer>
            <img src={Icon.Search} alt="돋보기 아이콘" />
            <Input
                value={search}
                onChange={setSearch}
                placeholder="검색어를 입력하세요."
            />
        </InputContainer>
        <button onClick={() => setKeywordList(search)} >상세검색</button>
    </SearchBarContainer>;
};