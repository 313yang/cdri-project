import { useState } from "react";
import { TargetType } from "@/defines/global.type";
import { setKeywordListAction } from "@/stores/useKeywordStore";
import { selectOptions } from "@/utils/consts";
import { Button } from "@/ui/Button";
import { Dropdown } from "@/ui/Dropdown";
import { Input } from "@/ui/Input";
import { Popup } from "@/ui/Popup";
import { SearchDetailPopupContent } from "./style";

interface SearchDetailPopupProps {
    setQuery: (val: string) => void;
    setTarget: (val: TargetType) => void;
    onClose(): void;
}
export const SearchDetailPopup = ({ setQuery, setTarget, onClose }: SearchDetailPopupProps) => {
    const setKeywordList = setKeywordListAction();
    const [keyword, setKeyword] = useState<string>("");
    const [option, setOptions] = useState<TargetType>("title");


    const handleSearch = () => {
        setKeywordList(keyword);
        setQuery(keyword);
        setKeyword("");
        setTarget(option);
        onClose();
    };

    return <Popup top={50} right={230} onClose={onClose}>
        <SearchDetailPopupContent>
            <div>
                <Dropdown options={selectOptions} onSelect={(val) => setOptions(val as TargetType)} />
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