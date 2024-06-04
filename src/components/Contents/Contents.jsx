import {ContentsContainer, ContentTitle} from "./style.js";
import ContentList from "./components/ContentList/index.js";

function Contents({title}) {
  return (
    <ContentsContainer>
      <ContentTitle>{title}</ContentTitle>
     <ContentList />
    </ContentsContainer>
  );
}
export default Contents;