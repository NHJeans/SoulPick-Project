import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentInput from '../../components/Comments/CommentInput/CommentInput';
import CommentList from '../../components/Comments/CommentList/CommentList';
import PostDetail from '../../components/PostDetail/PostDetail';
import { Center, DetailContainer } from './style';

function DetailPage() {
  //postId
  const postId = useParams().detailId;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DetailContainer>
      <Center>
        <PostDetail postId={postId} />
        <CommentInput postId={postId} />
        <CommentList postId={postId} />
      </Center>
    </DetailContainer>
  );
}

export default DetailPage;
