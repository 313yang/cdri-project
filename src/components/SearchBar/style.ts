import styled, { css } from "styled-components";

export const SearchBarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
`;
export const InputContainer = styled.div<{ isSearchFocused: boolean; }>`
    position: relative;
    > img {
        position: absolute;
        top: 10px;
        left: 10px;
    }
    > input {
        width: 480px;
        height: 50px;
        padding: 18px 51px;
        border-radius: 25px;
        background-color: ${({ theme }) => theme.colors.lightGray};
        ${({ isSearchFocused }) => isSearchFocused && css`
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        `}
    }
`;