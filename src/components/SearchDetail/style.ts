import styled from "styled-components";

export const SearchDetailPopupContent = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
> div {
    display: flex;
    gap: 4px;
    > input {
        width: 208px;
        padding: 4px 10px;
        &, &:active, &:focus {
            border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
        }
    }
}
> button {
    margin-bottom: 12px;
}
`;