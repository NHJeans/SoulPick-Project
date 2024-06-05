import { useEffect, useState } from 'react';
import { deleteSupabaseComment, fetchUser } from '../../../apis/comment';
import Icon from '../../Icon/Icon';
import { ButtonDiv, CommentItemContainer } from './style';

function CommentItem({ comment, isMyComment }) {
  const [nickname, setNickname] = useState('');
  // const [isMyComment, setIsMyComment] = useState(false);

  useEffect(() => {
    if (!comment || !comment.user_id) {
      null;
    } else {
      (async () => {
        const supaNickname = await fetchUser(comment);
        setNickname(supaNickname);
      })();
    }
  }, []);

  const handleUpdateBtn = () => {
    console.log('댓글 수정');
  };

  const handleDeleteBtn = () => {
    //supabase comment삭제
    deleteSupabaseComment(comment.id);
  };

  return (
    <CommentItemContainer>
      <div className="comment-title">
        <div className="left">
          <div className="profile">
            <Icon name={'profile'} />
          </div>
          <p className="nickname">{nickname}</p>
        </div>

        {isMyComment && (
          <ButtonDiv>
            <p onClick={handleUpdateBtn}>수정</p>
            <p onClick={handleDeleteBtn}>삭제</p>
          </ButtonDiv>
        )}
      </div>
      <p className="comment-context">{comment.content}</p>
    </CommentItemContainer>
  );
}

export default CommentItem;
