import CommentInput from '../../components/Comments/CommentInput/CommentInput';
import CommentList from '../../components/Comments/CommentList/CommentList';
import PostDetail from '../../components/PostDetail/PostDetail';
import { DetailContainer } from './style';

function Detail() {
  return (
    <DetailContainer>
      <div>
        <PostDetail />
        <CommentInput />
        <CommentList />
      </div>
    </DetailContainer>
  );
}

export default Detail;
