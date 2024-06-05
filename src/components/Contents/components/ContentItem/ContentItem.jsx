import {Container, ContentDescription, ContentImgWrapper, ContentText, ContentTextWrapper} from "./style.js";

function ContentItem({item}){
  // const thumbnail = getYoutubeThumbnail(item.link);

  return (
    <Container>
      <ContentTextWrapper>
        <ContentText>{item.title}</ContentText>
        <ContentDescription>{item.content}</ContentDescription>
      </ContentTextWrapper>
      <ContentImgWrapper>
        <video controls loop muted autoPlay src={item.link}/>
        {/*<img src={thumbnail} alt={`${item.title} thumbnail`} />*/}
      </ContentImgWrapper>
    </Container>
  )
}
export default ContentItem;