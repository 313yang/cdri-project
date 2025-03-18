import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
  }
  
  input, input::placeholder {
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export default GlobalStyle;