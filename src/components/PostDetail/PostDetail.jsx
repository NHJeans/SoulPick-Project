import { useEffect, useState } from 'react';
import { fetchPost } from '../../apis/post';
import Icon from '../Icon/Icon';
import { CategoryContainer, ContentContainer, PostContainer, TitleContainer, Wrapper } from './style';

function PostDetail({ postId, userId }) {
  const [post, setPost] = useState({});
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    //supabase에서 post불러오기
    (async () => {
      const supaPost = await fetchPost(postId);
      setPost(supaPost);
      setNickname(supaPost.Users.nickname);
    })();
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
          {post.user_id === userId ? (
            <div className="right-div">
              <p>수정</p>
              <p>삭제</p>
            </div>
          ) : (
            false
          )}
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
