import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import supabase from '../../../apis/supabaseClient';
import { createComment } from '../../../redux/slices/commentSlice';
import Icon from '../../Icon/Icon';
import { CommentInputContainer } from './style';

function CommentInput({ postId, userId }) {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  //댓글 등록 버튼 누를 시, state랑 supabase에 저장
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: uuidv4(),
      user_id: userId,
      postId,
      content
    };
    dispatch(createComment(newComment));
    insertComment(newComment);
  };

  //supabase insert
  async function insertComment(comment) {
    const { error } = await supabase.from('Comments').insert({
      content: comment.content,
      post_id: postId,
      user_id: userId
    });
    if (error) throw error;
  }

  return (
    <CommentInputContainer>
      <div>
        <Icon name={'profile'} />
      </div>
      <form>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="댓글을 입력하세요"
        />
        <button onClick={(e) => handleCommentSubmit(e)}>등록</button>
      </form>
    </CommentInputContainer>
  );
}

export default CommentInput;
