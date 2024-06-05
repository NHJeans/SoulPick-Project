import { useEffect, useState } from 'react';
import { fetchUser } from '../../../apis/comment';
import Icon from '../../Icon/Icon';
import { CommentItemContainer } from './style';

function CommentItem({ comment }) {
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
