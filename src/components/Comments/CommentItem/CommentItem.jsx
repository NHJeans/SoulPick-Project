import Icon from '../../Icon/Icon';
import { CommentItemContainer } from './style';

function CommentItem() {
  return (
    <CommentItemContainer>
      <div className="comment-title">
        <div>
          <Icon name={'profile'} />
        </div>
        <p>유저 4982</p>
      </div>
      <p className="comment-context">정말 좋은 노래 같습니다. 심금을 울리네요. 에스파는 항상 이런 노래를..</p>
    </CommentItemContainer>
  );
}

export default CommentItem;
