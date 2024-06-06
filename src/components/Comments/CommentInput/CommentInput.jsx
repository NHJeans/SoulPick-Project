import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { insertComment } from '../../../apis/comment';
import { createComment } from '../../../redux/slices/commentSlice';
import Icon from '../../Icon/Icon';
import { CommentInputContainer } from './style';

function CommentInput({ postId }) {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  //댓글 등록 버튼 누를 시, state랑 supabase에 저장
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!content) return alert('댓글을 입력해주세요.');
    const newComment = {
      id: uuidv4(),
      user_id: user.id,
      postId,
      content
    };
    //redux에 값 저장
    dispatch(createComment(newComment));
    //supabase insert 함수
    insertComment(newComment, postId, user.id);
    setContent('');
  };

  return (
    <CommentInputContainer>
      <div>{user.profile_img ? <img src={user.profile_img} /> : <Icon name={'profile'} />}</div>
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
