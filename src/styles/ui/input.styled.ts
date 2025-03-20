import styled from "styled-components";

export const InputStyled = styled.input`
    color: ${({ theme }) => theme.colors.text.primary};
    border: none;
    background-color: transparent;
    ${({ theme }) => theme.typography.caption}
    &::placeholder {
        color: ${({ theme }) => theme.colors.text.subtitle};
    }
    &:active, &:focus {
        outline: none;
        border: none;
}
`;