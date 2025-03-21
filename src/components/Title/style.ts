import styled from "styled-components";

export const TitleContainer = styled.div`
    margin-top: 80px;
    > h2 {
        margin-bottom: 20px;
    }
    > div {
        position: relative;
        margin-bottom: 24px;
    }
    > span {
        display: flex;
        gap: 16px;
        > p {
            ${({theme})=>theme.typography.caption};
            color: ${({theme})=>theme.colors.text.primary};
            > strong {
                color: ${({theme})=>theme.colors.primary};
            }
        }
    }
     
`