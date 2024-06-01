import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';


const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    // TODO: 수정 필요!
    font-family: "Noto Sans KR", sans-serif !important; 
  }
`;
export default GlobalStyle