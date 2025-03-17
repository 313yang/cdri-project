import { styled } from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  padding-left: 220px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: calc(100% - 220px);
  > h1 {
    ${({ theme }) => theme.typography.title1};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;