import Icon from '../../Icon/Icon';
import { CommentInputContainer } from './style';

function CommentInput() {
  return (
    <CommentInputContainer>
      <div>
        <Icon name={'profile'} />
      </div>
      <textarea placeholder="댓글을 입력하세요" />
      <button>등록</button>
    </CommentInputContainer>
  );
}

export default CommentInput;
