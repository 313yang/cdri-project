import React from "react";
import { InputStyled } from "./input.styled";

interface InputProps {
    /** 입력값 */
    value: string;

    /** placeholder */
    placeholder?: string;

    /** 타겟 input에서 입력 이벤트가 감지되면 발생하는 이벤트입니다. */
    onChange: (value: string) => void;

    /**
   * 타겟 input에서 `enter` 키가 눌릴 경우 발생하는 이벤트입니다.
   * @param value 현재 `input`의 `value` 값
   * @param target 받은 `EventTarget` 초점
   * @returns 
   */
    onEnter?: (value: string, target?: HTMLElement) => void;

    /**
     * 타겟 input 이 포커싱될 경우 발생하는 이벤트입니다.
     * @param value 현재 `input`의 `value` 값
     * @param target 받은 `EventTarget` 초점
     * @param relatedTarget 읽어버린 `EventTarget` 초점
     * @returns 
     */
    onFocus?: (value: string, target?: HTMLElement, relatedTarget?: HTMLElement | null) => void;

    /**
     * 타켓 input 이 포커싱을 잃어버릴 경우 발생하는 이벤트입니다.
     * @param value 현재 `input`의 `value` 값
     * @param target 잃어버린 `EventTarget` 초점
     * @param relatedTarget 수신 `EventTarget` 포커스
     * @returns 
     */
    onBlur?: (value: string, target?: HTMLElement, relatedTarget?: HTMLElement | null) => void;
}
export const Input = ({
    value,
    placeholder,
    onChange,
    onEnter = () => void (0),
    onBlur = () => void (0),
    onFocus = () => void (0)
}: InputProps) => {

    const focusHandler = (e: React.FocusEvent<HTMLElement>) => {
        onFocus(value, e.target, e.relatedTarget as HTMLElement | null);
    };

    const blurHandler = (e: React.FocusEvent<HTMLElement>) => {
        onBlur(value, e.target, e.relatedTarget as HTMLElement | null);
    };

    /** 내부 `keyup` 핸들러 입니다. */
    const keyboardHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { target } = e;

        if (document.activeElement === target) {
            if (e.key === "Enter" || e.keyCode === 13) onEnter(value);
        }
    };

    /** 내부 `onChange`핸들러 입니다. */
    const handleonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        onChange(value);
    };

    return <InputStyled
        value={value}
        placeholder={placeholder}
        onChange={handleonChange}
        onKeyDown={keyboardHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
    />;
};