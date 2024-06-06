import { useEffect, useState } from 'react';
import { getCommentCount } from '../../../utils/comment.js';
import { getYoutubeThumbnail } from '../../../utils/youTube.js';
import { IconComment } from '../../Icon/components/Icons/IconComment.jsx';
import {
  CommentCount,
  Container,
  ContentDescription,
  ContentImgWrapper, ContentLink,
  ContentText,
  ContentTextWrapper
} from './style.js';
function ContentItem({ item }) {
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
      <ContentLink to={`/details/${item.id}`}>
        <ContentTextWrapper>
          <ContentText>{item.title}</ContentText>
          <ContentDescription>{item.content}</ContentDescription>
          <CommentCount>
            <div>
              <IconComment name="comment" />
              {commentCount}
            </div>
          </CommentCount>
        </ContentTextWrapper>
        <ContentImgWrapper>
          {thumbnail ? <img src={thumbnail} alt={`${item.title} thumbnail`} /> : <p>썸네일을 불러올 수 없습니다.</p>}
        </ContentImgWrapper>
      </ContentLink>
    </Container>
  );
}

export default ContentItem;
