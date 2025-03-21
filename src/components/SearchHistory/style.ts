import styled from "styled-components";

export const SearchHistoryWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.lightGray};
    max-width: 480px;
    margin-top: -22px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 8px 25px 22px 51px;
    gap: 12px;
    position: absolute;
    width: 100%;
    top: 72px;
    z-index: 1;
    `;
