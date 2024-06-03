import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';


const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "Noto Sans KR", sans-serif ; 
  }
  .pacifico-regular {
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-style: normal;
  }

`;
export default GlobalStyle