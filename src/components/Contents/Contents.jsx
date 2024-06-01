import {ContentsContainer} from "./style.js";
import ContentsList from "./components/ContentsList/index.js";

function Contents() {
  return (
    <ContentsContainer>
      <div style={{marginBottom: '40px', fontSize: "32px"}}>K-Pop</div>
     <ContentsList />
    </ContentsContainer>
  );
}
export default Contents;