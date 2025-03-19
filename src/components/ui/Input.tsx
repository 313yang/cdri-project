import React from "react";
import { InputStyled } from "./input.styled";

interface InputProps {
    value: string | number;

    /** placeholder */
    placeholder?: string;
    /** onChange 함수 */
    onChange: (value: string) => void;
}
export const Input = ({ value, placeholder, onChange }: InputProps) => {

    const handleonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onChange(value);
    };

    return <InputStyled
        value={value}
        placeholder={placeholder}
        onChange={handleonChange}
    />;
};