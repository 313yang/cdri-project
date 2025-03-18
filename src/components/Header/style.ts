import { styled } from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  padding: 24px 160px 24px;
  > h1 {
    width: 33%;
    ${({ theme }) => theme.typography.title1};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  > nav  {
    width: 33%;
    > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 56px;
    }
  }
`;

export const NavList = styled.li<{ selected: boolean; }>`
    height: 27px;
    border-bottom: 1px solid ${({ selected, theme }) => selected ? theme.colors.primary : theme.colors.white};
    ${({ theme }) => theme.typography.body1}
    cursor: pointer;
`;