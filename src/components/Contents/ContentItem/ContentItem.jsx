import {
  CommentCount,
  Container,
  ContentDescription,
  ContentImgWrapper,
  ContentText,
  ContentTextWrapper
} from "./style.js";
import {getYoutubeThumbnail} from "../../../utils/youTube.js";
import {Link} from "react-router-dom";
import {IconComment} from "../../Icon/components/Icons/IconComment.jsx";
import {useEffect, useState} from "react";
import {getCommentCount} from "../../../utils/comment.js";
function ContentItem({item}){
  const [commentCount, setCommentCount] = useState(0);
  const thumbnail = getYoutubeThumbnail(item.link);

  useEffect(() => {
    async function fetchCommentCount() {
      const count = await getCommentCount(item.id);
      setCommentCount(count);
    }

    fetchCommentCount();
  }, [item.id]);

  return (
    <Container>
      <Link style={{ textDecoration: "none",display: 'flex'}} to={`/details/${item.id}`}>
      <ContentTextWrapper>
          <ContentText>{item.title}</ContentText>
          <ContentDescription>{item.content}</ContentDescription>
        <CommentCount>
          <IconComment name='comment'/>
          {commentCount}
        </CommentCount>
      </ContentTextWrapper>
        <ContentImgWrapper>
          {thumbnail ? (
            <img src={thumbnail} alt={`${item.title} thumbnail`} />
          ) : (
            <p>썸네일을 불러올 수 없습니다.</p>
          )}
        </ContentImgWrapper>
     </Link>
    </Container>



)
}


export default ContentItem;