import styled from "styled-components";

export const SearchHistoryWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.lightGray};
    max-width: 480px;
    margin-top: -25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 38px 25px 22px 51px;
    gap: 12px;

`;
