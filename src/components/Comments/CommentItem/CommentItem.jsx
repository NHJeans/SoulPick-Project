import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSupabaseComment, fetchUser } from '../../../apis/comment';
import { deleteComment } from '../../../redux/slices/commentSlice';
import Icon from '../../Icon/Icon';
import { ButtonDiv, CommentContent, CommentItemContainer, EditingBox } from './style';

function CommentItem({ comment, isMyComment }) {
  const [nickname, setNickname] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

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

  //수정 버튼 누를 시
  const handleUpdateBtn = () => {
    setIsEdit(true);
  };

  const handleCompleteEdit = () => {
    setIsEdit(false);
  };

  //삭제 버튼 누를 시
  const handleDeleteBtn = () => {
    //supabase comment삭제
    deleteSupabaseComment(comment.id);
    //redux comment list에서 해당 값 삭제
    dispatch(deleteComment(comment.id));
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
      {isEdit ? (
        <EditingBox>
          <textarea defaultValue={comment.content} />
          <button onClick={handleCompleteEdit}>수정완료</button>
        </EditingBox>
      ) : (
        <CommentContent>{comment.content}</CommentContent>
      )}
    </CommentItemContainer>
  );
}

export default CommentItem;
