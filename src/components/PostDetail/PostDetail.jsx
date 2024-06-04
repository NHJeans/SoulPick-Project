import { useEffect, useState } from 'react';
import supabase from '../../apis/supabaseClient';
import Icon from '../Icon/Icon';
import { CategoryContainer, ContentContainer, PostContainer, TitleContainer, Wrapper } from './style';

function PostDetail({ postId }) {
  const [post, setPost] = useState({});
  const [nickname, setNickname] = useState('');

  //supabase Post 데이터 불러오기
  async function fetchPost() {
    const { data, error } = await supabase.from('Posts').select(`*, Users(nickname)`).eq('id', postId);
    if (error) throw error;
    setPost(data[0]);
    setNickname(data[0].Users.nickname);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Wrapper>
      <CategoryContainer>
        <p>{post.category}</p>
      </CategoryContainer>
      <PostContainer>
        <TitleContainer>
          <div className="left-div">
            <p className="title">{post.title}</p>
            <div className="content-info-div">
              <div className="profile">
                <Icon name={'profile'} />
              </div>
              <p>{nickname}</p>
              <p>{post.created_at}</p>
            </div>
          </div>
        </TitleContainer>
        <ContentContainer>
          <div></div>
          <p>{post.content}</p>
        </ContentContainer>
      </PostContainer>
    </Wrapper>
  );
}

export default PostDetail;
