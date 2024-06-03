import { useEffect } from 'react';
import supabase from '../../apis/supabaseClient';
import CommentInput from '../../components/Comments/CommentInput/CommentInput';
import CommentList from '../../components/Comments/CommentList/CommentList';
import PostDetail from '../../components/PostDetail/PostDetail';
import { Center, DetailContainer } from './style';

function Detail() {
  //supabase 불러오기
  useEffect(() => {
    const fetchSupabase = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.log('error' + error);
      } else {
        console.log(data);
      }
    };
    fetchSupabase();
  }, []);

  return (
    <DetailContainer>
      <Center>
        <PostDetail />
        <CommentInput />
        <CommentList />
      </Center>
    </DetailContainer>
  );
}

export default Detail;
