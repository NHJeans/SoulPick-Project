import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSupabaseComment, fetchCommentUser, updateSupabaseComment } from '../../../apis/comment';
import { deleteComment, updateComment } from '../../../redux/slices/commentSlice';
import Icon from '../../Icon';
import { ButtonDiv, CommentContent, CommentItemContainer, EditingBox } from './style';

function CommentItem({ comment, isMyComment }) {
  const [nickname, setNickname] = useState('');
  const [img, setImg] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const editInput = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!comment || !comment.user_id) {
      null;
    } else {
      (async () => {
        const user = await fetchCommentUser(comment);
        setNickname(user.nickname);
        setImg(user.profile_img);
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
    if (!editedContent) return alert('댓글이 빈칸일 수 없습니다.');
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
    const answer = confirm('정말 댓글을 삭제하시겠습니까?');
    if (answer) {
      //supabase comment삭제
      deleteSupabaseComment(comment.id);
      //redux comment list에서 해당 값 삭제
      dispatch(deleteComment(comment.id));
    }
  };

  return (
    <CommentItemContainer>
      <div className="comment-title">
        <div className="left">
          <div className="profile">{img ? <img src={img} /> : <Icon name={'profile'} />}</div>
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
