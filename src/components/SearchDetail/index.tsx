import { Button } from "../ui/Button";
import { Dropdown } from "../ui/Dropdown";
import { Input } from "../ui/Input";
import { Popup } from "../ui/Popup";
import { SearchDetailPopupContent } from "./style";

const selectOptions = [
    { target: "title", name: "제목" },
    { target: "publisher", name: "출판사" },
    { target: "person", name: "저자명" }
];
export const SearchDetailPopup = ({ onClose }: { onClose(): void; }) => {
    return <Popup top={50} right={230} onClose={onClose}>
        <SearchDetailPopupContent>
            <div>
                <Dropdown options={selectOptions} onSelect={() => { }} />
                <Input placeholder="검색어 입력" value="" onChange={() => { }} />
            </div>
            <Button onClick={() => { }} >검색하기</Button>
        </SearchDetailPopupContent>
    </Popup>;
};