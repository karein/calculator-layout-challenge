import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --background: #807ECE;

    --gray-800: #2D2A37;
    --gray-300: #6B6B6B;
    --gray-100: #EBEBEB;

    --violet-600: #462878;
    --violet-400: #7F45E2;
    --violet-300: #975DFA;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    /* color: var(--gray-100); */
  }
  
  body{
    background-color: var(--background);
    height: 100vh;
  }
`

