import styled from "styled-components";

export const BookListContainer = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    padding-left: 48px;
    border-bottom: 1px solid #D2D6DA;
`;

export const BookInfo = styled.div`
display: flex;
align-items: center;
gap: 48px;

`;

export const ImageWrapper = styled.div`
    position: relative;
    > button {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 0px;
        right: 1px;
        .fav {
           width: 13px;
        }
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
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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

export const BookPriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    > span {
        display: flex;
        align-items: center;
        gap: 6px;
        text-align: end;
        > p {
            width: 80px;
            color: ${({ theme }) => theme.colors.text.subtitle};
            font-size: 10px;
        }
        >.price {
            font-size: 18px;
            text-decoration: line-through;
        }
        > h3 {
            font-size: 18px;
        }
    }
    > button {
        margin-top: 28px;
    }
`;
export const BookListDetailContainer = styled(BookListContainer)`
.thumbnail {
    width: 210px;
    height: 280px;
}
${ImageWrapper} {
    > button {
        top: 6px;
        right: 6px;
        .fav {
            width: 21px;
        }
    }
}
${BookInfo} {
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    max-width: 380px;
    max-height: 280px;
    gap: 18px;
    overflow: hidden;
    > p {
        display: -webkit-box;
        -webkit-line-clamp: 8; /* 8줄로 제한 */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
}
${BookTitle} {
    width: 380px;
    > h3 {
        max-width: 270px;
    }
}
${BookButtons}{
    flex-direction:column;
    align-items: flex-end;
    justify-content: space-between;
    height: 280px;
    > button {
        > img {
           transform: rotate(180deg);
       }
    }
}
`;