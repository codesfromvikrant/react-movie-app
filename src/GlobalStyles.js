import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --maxWidth: 1280px;
    --white: #fff;
    --grey700: #374151;
    --grey900: #1f2937;
  }

  *{
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }
`;