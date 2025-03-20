import styled from "styled-components";


export const ButtonStyled = styled.button<{
    width?: string;
    bgColor: "white" | "primary" | "gray" | "lightGray";
    color?: "primary" | "secondary" | "subtitle";
    border?: "primary" | "secondary" | "subtitle";
}>`
    background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
    border: 1px solid ${({ border, theme }) => border ? theme.colors.text[border] : "#fff"};
    color: ${({ color, theme }) => !color ? theme.colors.white : theme.colors.text[color]};
    ${({ theme }) => theme.typography.caption}
    padding: 14px;
    border-radius: 6px;

    &.size-small {
        width:  70px;
        padding: 8px 6px;
        font-size: 14px;
    }
    &.size-medium {
        width: 120px;
    }
    &.size-large {
        width: 240px;
    }
`;