import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSupabaseComment, fetchUser, updateSupabaseComment } from '../../../apis/comment';
import { deleteComment, updateComment } from '../../../redux/slices/commentSlice';
import Icon from '../../Icon/Icon';
import { ButtonDiv, CommentContent, CommentItemContainer, EditingBox } from './style';

function CommentItem({ comment, isMyComment }) {
  const [nickname, setNickname] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const editInput = useRef(null);

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
    setTimeout(() => {
      editInput.current.focus();
    }, 200);
  };

  //수정 등록 버튼 누를 시
  const handleCompleteEdit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    //redux state 값 수정
    dispatch(
      updateComment({
        id: comment.id,
        content: editedContent
      })
    );
    //supabase 값 수정
    updateSupabaseComment(comment.id, editedContent);
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
          <textarea ref={editInput} defaultValue={comment.content} onChange={(e) => setEditedContent(e.target.value)} />
          <button onClick={handleCompleteEdit}>등록</button>
        </EditingBox>
      ) : (
        <CommentContent>{comment.content}</CommentContent>
      )}
    </CommentItemContainer>
  );
}

export default CommentItem;
