import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
 
  html {
      font-size:62.5%;
  }
  body {
    padding: 0;
    margin:0;
    overflow-x: hidden;
    font-size:1.6rem;
    line-height:1.5;
    font-family: 'Montserrat',sans-serif;
    font-weight:400;
    background-color:#f5f5f6;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    padding-top:6rem;
  }
`;

export default GlobalStyle;
