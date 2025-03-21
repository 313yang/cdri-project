import { DropdownOptionType, TargetType } from "@/defines/global.type";
import { DropdownContainer, DropdownOptions } from "@/styles/ui/dropdown.styled";
import { useState } from "react";
import { Icon } from "./Icons";

interface DropdownProps {
    /** 드롭다운 옵션 목록입니다. */
    options: DropdownOptionType[];
    /** 드롭다운 옵션 값을 설정합니다. */
    onSelect(target: TargetType): void;
}

export const Dropdown = ({
    options,
    onSelect
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DropdownOptionType>(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: DropdownOptionType) => {
        setSelectedOption(option);
        setIsOpen(false); // 드롭다운 닫기
        onSelect(option.target); // 선택된 옵션 전달
    };

    return <DropdownContainer onClick={toggleDropdown}>
        <span >{selectedOption.name}</span>
        <img src={Icon.Arrow} alt="화살표 아이콘" />
        {isOpen && (
            <DropdownOptions className="select-options">
                {options.map(option => (
                    <li key={option.target} onClick={() => handleOptionClick(option)}>
                        {option.name}
                    </li>
                ))}
            </DropdownOptions>
        )}
    </DropdownContainer>;
};