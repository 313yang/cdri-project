import styled from "styled-components";

export const BookListContainer = styled.li`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    padding-left: 48px;
    border-bottom: 1px solid #D2D6DA;
    > h3 {
        ${({ theme }) => theme.typography.title3}
    }
`;
export const BookInfo = styled.div`
display: flex;
align-items: center;
gap: 48px;

`;

export const ImageWrapper = styled.div`
position: relative;
 .fav {
    position: absolute;
    width: 13px;
    top: 1px;
    right: 1px;
 }
 > .thumbnail {
        width: 48px;
        height: 68px;
    }
`;
export const BookTitle = styled.div`
    display: flex;
    align-items: center;
    width: 408px;
    gap: 16px;
    > h3 {
        ${({ theme }) => theme.typography.title3}
    }
    > p {
        ${({ theme }) => theme.typography.body2}
        color: ${({ theme }) => theme.colors.text.secondary};
    }
`;

export const BookButtons = styled.div`
display: flex;
gap: 4px;
`;