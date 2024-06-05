import { useEffect, useState } from 'react';
import { fetchPost } from '../../apis/post';
import Icon from '../Icon/Icon';
import { CategoryContainer, ContentContainer, PostContainer, TitleContainer, Wrapper } from './style';

function PostDetail({ postId, userId }) {
  const [post, setPost] = useState({});
  const [nickname, setNickname] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [updateContent, setUpdateContent] = useState(post.content);

  useEffect(() => {
    //supabase에서 post불러오기
    (async () => {
      const supaPost = await fetchPost(postId);
      setPost(supaPost);
      setNickname(supaPost.Users.nickname);
    })();
  }, []);

  const handleDeletePostBtn = () => {};

  //수정 버튼 누르면 수정할 수 있는 input이 뜸
  const handleInsertPostBtn = () => {
    setIsEdit(true);
  };

  //수정 등록 누르면 등록이 되게..
  const handleUpdatePostBtn = () => {
    setIsEdit(false);
    setPost({ ...post, content: updateContent });
  };

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
              <p onClick={handleInsertPostBtn}>수정</p>
              <p onClick={handleDeletePostBtn}>삭제</p>
            </div>
          ) : (
            false
          )}
        </TitleContainer>
        <ContentContainer>
          <div></div>
          {isEdit ? (
            <div>
              <textarea defaultValue={post.content} onChange={(e) => setUpdateContent(e.target.value)} />
              <button onClick={handleUpdatePostBtn}>등록</button>
            </div>
          ) : (
            <p>{post.content}</p>
          )}
        </ContentContainer>
      </PostContainer>
    </Wrapper>
  );
}

export default PostDetail;
