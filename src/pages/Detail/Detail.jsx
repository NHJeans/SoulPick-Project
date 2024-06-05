import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentUser } from '../../apis/comment';
import CommentInput from '../../components/Comments/CommentInput/CommentInput';
import CommentList from '../../components/Comments/CommentList/CommentList';
import PostDetail from '../../components/PostDetail/PostDetail';
import { Center, DetailContainer } from './style';

function Detail() {
  //postId
  const postId = useParams().detailId;
  const [userId, setUserId] = useState('');

  useEffect(() => {
    (async () => {
      const getId = await getCurrentUser();
      setUserId(getId);
    })();
  }, []);

  return (
    <DetailContainer>
      <Center>
        <PostDetail postId={postId} />
        <CommentInput postId={postId} userId={userId} />
        <CommentList postId={postId} />
      </Center>
    </DetailContainer>
  );
}

export default Detail;
