import styled from "styled-components";

export const SearchHistoryListWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
        ${({ theme }) => theme.typography.caption}
        color: ${({ theme }) => theme.colors.text.subtitle};
    }
`
export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
`