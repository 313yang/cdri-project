import styled from "styled-components";

export const DropdownContainer = styled.div`
    ${({ theme }) => theme.typography.body2Bold}
    position: relative;
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    width: 100px;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 10px;
`;

export const DropdownOptions = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 12px;
  top: 110%;
  left: 0;
  width: 100%;
  background-color:  ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 8px 10px;
  border-radius: 2px;
  z-index: 1;
  > li {
    ${({ theme }) => theme.typography.caption}
    color: ${({ theme }) => theme.colors.text.subtitle};
    cursor: pointer;
  }
`;