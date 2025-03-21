import styled from "styled-components";


export const ButtonStyled = styled.button<{
    width?: string;
    $bg_color: "white" | "primary" | "gray" | "lightGray";
    color?: "primary" | "secondary" | "subtitle";
    $border?: "primary" | "secondary" | "subtitle";
}>`
    background-color: ${({ $bg_color, theme }) => theme.colors[$bg_color]};
    border: 1px solid ${({ $border, theme }) => $border ? theme.colors.text[$border] : "#fff"};
    color: ${({ color, theme }) => !color ? theme.colors.white : theme.colors.text[color]};
    ${({ theme }) => theme.typography.caption}
    padding: 14px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    &.size-small {
        padding: 10px;
        ${({ theme }) => theme.typography.body2}
    }
    &.size-medium {
        width: 115px;
    }
    &.size-large {
        width: 240px;
    }
`;