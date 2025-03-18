import styled from "styled-components";

export const NoResultContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    > p {
        ${({theme})=>theme.typography.caption}
        color: ${({theme})=>theme.colors.text.secondary};
    }
`