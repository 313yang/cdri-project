import styled from "styled-components";

export const SearchDetailPopupContent = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
> div {
    display: flex;
    gap: 8px;
    > input {
        padding: 4px 10px;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
}
> button {
    margin-bottom: 12px;
}
`;