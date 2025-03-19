import styled from "styled-components";

export const InputStyled = styled.input`
    height: 50px;
    padding: 18px 51px;
    border-radius: 25px;
    width: 480px;
    border: none;
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.lightGray};
    ${({ theme }) => theme.typography.caption}
    &::placeholder {
        color: ${({ theme }) => theme.colors.text.subtitle};
    }
    &:active, &:focus {
        outline: none;
        border: none;
}
`;