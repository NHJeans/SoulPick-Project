import { useEffect, useState } from 'react';
import supabase from '../../../apis/supabaseClient';
import Icon from '../../Icon/Icon';
import { CommentItemContainer } from './style';

function CommentItem({ comment }) {
  const [nickname, setNickname] = useState('');
  const [isMyComment, setIsMyComment] = useState(false);

  //Users 테이블에서 댓글 쓴 사용자의 정보 받아오기
  async function fetchUser() {
    const { data, error } = await supabase.from('Users').select('*').eq('id', comment.user_id).single();
    if (error) throw error;
    const nickname = data.nickname;
    setNickname(nickname);
  }

  useEffect(() => {
    if (!comment || !comment.user_id) {
      null;
    } else {
      fetchUser();
    }
  }, []);

  return (
    <CommentItemContainer>
      <div className="comment-title">
        <div>
          <Icon name={'profile'} />
        </div>
        <p>{nickname}</p>
      </div>
      <p className="comment-context">{comment.content}</p>
    </CommentItemContainer>
  );
}

export default CommentItem;
