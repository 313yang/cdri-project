import styled from "styled-components";

export const SearchHistoryWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.lightGray};
    max-width: 480px;
    margin-top: -25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 25px 31px 16px 51px;
    gap: 6px;

`;
