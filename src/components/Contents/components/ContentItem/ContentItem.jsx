import {

} from "../ContentList/style.js";
import {Container, ContentDescription, ContentImgWrapper, ContentText, ContentTextWrapper} from "./style.js";

function ContentItem({content}){
  return (
    <Container>
      <ContentTextWrapper>
        <ContentText>{content.name}</ContentText>
        <ContentDescription>{content.contents}</ContentDescription>
      </ContentTextWrapper>
      <ContentImgWrapper>
        <img src="" alt='썸네일'/>
      </ContentImgWrapper>
    </Container>
  )
}
export default ContentItem;