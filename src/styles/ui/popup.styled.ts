import styled from "styled-components";

export const PopupContainer = styled.div<{
    top: number;
    right: number;
    width: number;
    height?: number;
}>`
position: absolute;
top: ${({ top }) => top}px;
right: ${({ right }) => right}px;
width: ${({ width }) => width}px;
height: ${({ height }) => !height ? "fit-content" : `${height}px`};
background-color: ${({ theme }) => theme.colors.white};
box-shadow: 0px 4px 14px rgba(151,151,151,0.15);
border-radius: 12px;
padding: 12px;
display: flex;
flex-direction: column;
`;

export const PopupHeader = styled.div`
display: flex;
justify-content: flex-end;
> img {
    cursor: pointer;
}
`;

export const PopupContent = styled.div`
padding: 12px;
`;