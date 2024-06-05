import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import supabase from '../../../apis/supabaseClient';
import CommentItem from '../CommentItem';
import { CommentLength, CommentListContainer, CommentTitle } from './style';

function CommentList({ postId }) {
  //redux comment state 읽어옴
  const commentsReducer = useSelector((state) => state.comment.commentState);

  const [comments, setComments] = useState([]);

  //supabase에서 list 읽어옴
  async function fetchComments() {
    const { data, error } = await supabase.from('Comments').select('*,Users(nickname)').eq('post_id', postId);
    if (error) throw error;
    setComments(data);
  }

  useEffect(() => {
    fetchComments();
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
          return <CommentItem key={comment.id} comment={comment} />; //key값?
        })
      )}
    </CommentListContainer>
  );
}

export default CommentList;
