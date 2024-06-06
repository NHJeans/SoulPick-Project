import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import { deleteSupabasePost, fetchPost, updateSupabasePost } from '../../apis/post';
import Icon from '../Icon/Icon';
import { CategoryContainer, ContentContainer, EditBox, PostContainer, TitleContainer, Wrapper } from './style';

function PostDetail({ postId }) {
  const [post, setPost] = useState({});
  const [postNickname, setPostNickname] = useState('');
  const [postProfile, setPostProfile] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [updateContent, setUpdateContent] = useState('');

  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const postTime = String(post.created_at);
  const date = postTime.slice(0, 10).split('-').join('.');

  //youtube 에서 videoId추출
  const youtubeURL = String(post.link);
  const videoId = youtubeURL.split('=')[1];

  useEffect(() => {
    //supabase에서 post불러오기
    (async () => {
      const supaPost = await fetchPost(postId);
      setPost(supaPost);
      setPostNickname(supaPost.Users.nickname);
      console.log(supaPost.Users);
      setPostProfile(supaPost.Users.profile_img);
      setUpdateContent(supaPost.content);
    })();
  }, []);

  //삭제 버튼 누를 시, alert
  const handleDeletePostBtn = () => {
    const answer = confirm('정말 게시글을 삭제하시겠습니까?');
    if (answer) {
      deleteSupabasePost(postId);
      navigate('/');
    }
  };
  //수정 버튼 누르면 수정할 수 있는 input이 뜸
  const handleInsertPostBtn = () => {
    setIsEdit(true);
  };

  //수정 등록 누르면 등록이 되게..
  const handleUpdatePostBtn = () => {
    if (!updateContent) return alert('게시글 내용이 빈칸일 수 없습니다.');
    setIsEdit(false);
    setPost({ ...post, content: updateContent });
    updateSupabasePost(postId, updateContent);
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
              {postProfile ? (
                <img src={postProfile} />
              ) : (
                <div className="profile">
                  <Icon name={'profile'} />
                </div>
              )}
              <p>{postNickname}</p>
              <p>{date}</p>
            </div>
          </div>
          {post.user_id === user.id ? (
            <div className="right-div">
              <p onClick={handleInsertPostBtn}>수정</p>
              <p onClick={handleDeletePostBtn}>삭제</p>
            </div>
          ) : (
            false
          )}
        </TitleContainer>
        <ContentContainer>
          <div className="youtude">
            <YouTube videoId={videoId} />
          </div>
          {isEdit ? (
            <EditBox>
              <textarea defaultValue={post.content} onChange={(e) => setUpdateContent(e.target.value)} />
              <button onClick={handleUpdatePostBtn}>등록</button>
            </EditBox>
          ) : (
            <p>{post.content}</p>
          )}
        </ContentContainer>
      </PostContainer>
    </Wrapper>
  );
}

export default PostDetail;
