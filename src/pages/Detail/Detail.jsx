import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../../apis/supabaseClient';
import CommentInput from '../../components/Comments/CommentInput/CommentInput';
import CommentList from '../../components/Comments/CommentList/CommentList';
import PostDetail from '../../components/PostDetail/PostDetail';
import { Center, DetailContainer } from './style';

function Detail() {
  //postId
  const postId = useParams().detailId;
  const [userId, setUserId] = useState('');

  //supabase getUser하기
  async function getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    setUserId(data.user.id);
  }

  useEffect(() => {
    getCurrentUser();
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
