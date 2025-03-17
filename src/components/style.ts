import { styled } from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  padding: 24px 160px 24px;
  > h1 {
    ${({ theme }) => theme.typography.title1};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  > nav  {
    > ul {
        display: flex;
        align-items: center;
    }
  }
`;

export const NavList = styled.li<{ selected: boolean; }>`
    padding: 4px 0;
    border-bottom: 1px solid ${({ selected, theme }) => selected ? theme.colors.primary : theme.colors.white};
    ${({ theme }) => theme.typography.body1}
    cursor: pointer;
`;