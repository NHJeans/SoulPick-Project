import CommentItem from '../CommentItem';
import { CommentListContainer, CommentTitle } from './style';

function CommentList() {
  return (
    <CommentListContainer>
      <CommentTitle>댓글</CommentTitle>
      <CommentItem />
    </CommentListContainer>
  );
}

export default CommentList;
