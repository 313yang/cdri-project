import { useState } from "react";
import { Button } from "../ui/Button";
import { Dropdown } from "../ui/Dropdown";
import { Input } from "../ui/Input";
import { Popup } from "../ui/Popup";
import { SearchDetailPopupContent } from "./style";
import { DropdownOptionType, TargetType } from "@/defines/global.type";
import { setKeywordListAction } from "@/stores/useKeywordStore";

const selectOptions: DropdownOptionType[] = [
    { target: "title", name: "제목" },
    { target: "publisher", name: "출판사" },
    { target: "person", name: "저자명" }
];

interface SearchDetailPopupProps {
    setQuery: (val: string) => void;
    setTarget: (val: TargetType) => void;
    onClose(): void;
}
export const SearchDetailPopup = ({ setQuery, setTarget, onClose }: SearchDetailPopupProps) => {
    const setKeywordList = setKeywordListAction();
    const [keyword, setKeyword] = useState<string>("");
    const [option, setOptions] = useState<TargetType>("title");


    const handleSearch = async () => {
        setKeywordList(keyword);
        setQuery(keyword);
        setKeyword("");
        setTarget(option);
        onClose();
    };

    return <Popup top={50} right={230} onClose={onClose}>
        <SearchDetailPopupContent>
            <div>
                <Dropdown options={selectOptions} onSelect={(val) => setOptions(val)} />
                <Input
                    placeholder="검색어 입력"
                    value={keyword}
                    onChange={setKeyword}
                    onEnter={handleSearch}
                />
            </div>
            <Button onClick={handleSearch} >검색하기</Button>
        </SearchDetailPopupContent>
    </Popup>;
};