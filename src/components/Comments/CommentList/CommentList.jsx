import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../../apis/comment';
import { createComment } from '../../../redux/slices/commentSlice';
import CommentItem from '../CommentItem';
import { CommentLength, CommentListContainer, CommentTitle } from './style';

function CommentList({ postId, userId }) {
  //redux comment state 읽어옴
  const comments = useSelector((state) => state.comment.commentState);
  const dispatch = useDispatch();

  useEffect(() => {
    //supabase에서 comment list를 받아오기
    (async () => {
      const supabaseComments = await fetchComments(postId);
      supabaseComments.map((comment) => {
        //commentState에 데이터베이스 초기값 저장
        dispatch(createComment(comment));
      });
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
        <p>댓글이 없습니다.</p>
      ) : (
        comments.map((comment) => {
          if (comment.id === undefined) return null;
          const isMyComment = comment.user_id === userId ? true : false;
          return <CommentItem key={comment.id} comment={comment} isMyComment={isMyComment} />;
        })
      )}
    </CommentListContainer>
  );
}

export default CommentList;
