import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;;
    background-color: white;
    color: black;
    margin: 0;
    padding: 0;
  }

  :root {
    --main-blue: #1976d2;
    --gray: #939597;
    --gray-dark: #808080;
  }
`;

export default GlobalStyle;
