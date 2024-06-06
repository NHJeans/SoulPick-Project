import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../../apis/comment';
import { initComment } from '../../../redux/slices/commentSlice';
import CommentItem from '../CommentItem';
import { CommentLength, CommentListContainer, CommentTitle, NoCommentsDiv } from './style';

function CommentList({ postId }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  //redux comment state 읽어옴
  const comments = useSelector((state) => state.comment.commentState);

  useEffect(() => {
    //supabase에서 comment list를 받아오기
    (async () => {
      const supabaseComments = await fetchComments(postId);
      dispatch(initComment([...supabaseComments]));
    })();
  }, []);

  return (
    <CommentListContainer>
      <div className="title-div">
        <CommentLength>
          <CommentTitle>댓글</CommentTitle>
          <p className="length">{comments.length}</p>
        </CommentLength>
      </div>

      {!comments || comments.length === 0 ? (
        <NoCommentsDiv>
          <p>댓글이 없습니다.</p>
        </NoCommentsDiv>
      ) : (
        comments.map((comment) => {
          if (comment.id === undefined) return null;
          const isMyComment = comment.user_id === user.id ? true : false;
          return <CommentItem key={comment.id} comment={comment} isMyComment={isMyComment} />;
        })
      )}
    </CommentListContainer>
  );
}

export default CommentList;
