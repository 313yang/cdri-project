import { styled } from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  padding: 24px 160px 24px;
  > h1 {
    ${({ theme }) => theme.typography.title1};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  > nav {
    display: flex;
    align-items: center;
  }
`;