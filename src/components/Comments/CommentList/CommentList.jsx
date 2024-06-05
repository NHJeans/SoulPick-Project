import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchComments } from '../../../apis/comment';
import CommentItem from '../CommentItem';
import { CommentLength, CommentListContainer, CommentTitle } from './style';

function CommentList({ postId, userId }) {
  //redux comment state 읽어옴
  const commentsReducer = useSelector((state) => state.comment.commentState);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    //supabase에서 comment list를 받아오기
    (async () => {
      const supabaseComments = await fetchComments(postId);
      setComments(supabaseComments);
    })();
  }, []);

  useEffect(() => {
    setComments([...comments, commentsReducer]);
  }, [commentsReducer]);

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
