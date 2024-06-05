import {Container, ContentDescription, ContentImgWrapper, ContentText, ContentTextWrapper} from "./style.js";
import {getYoutubeThumbnail} from "../../../../utils/youTube.js";
function ContentItem({item}){
  const thumbnail = getYoutubeThumbnail(item.link);

  return (
    <>
      <Link style={{ textDecoration: "none"}} to={`/post/${item.id}`}>
        <Container>
          <ContentTextWrapper>
            <ContentText>{item.title}</ContentText>
            <ContentDescription>{item.content}</ContentDescription>
          </ContentTextWrapper>
          <ContentImgWrapper>
            {thumbnail ? (
              <img src={thumbnail} alt={`${item.title} thumbnail`} />
            ) : (
              <p>썸네일을 불러올 수 없습니다.</p>
            )}
          </ContentImgWrapper>
        </Container>
      </Link>
    </>


)
}

import {Link} from "react-router-dom";
export default ContentItem;