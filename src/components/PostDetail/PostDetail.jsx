import Icon from '../Icon/Icon';
import { CategoryContainer, ContentContainer, PostContainer, TitleContainer, Wrapper } from './style';
function PostDetail() {
  return (
    <Wrapper>
      <CategoryContainer>
        <p>K-Pop</p>
      </CategoryContainer>
      <PostContainer>
        <TitleContainer>
          <div className="left-div">
            <p className="title">오늘 나온 aespa 신곡</p>
            <div className="content-info-div">
              <div className="profile">
                <Icon name={'profile'} />
              </div>
              <p>유저 4921</p>
              <p>2024.06.02</p>
            </div>
          </div>
          <div className="comment-div">
            <Icon name={'comment'} />
            <p>5</p>
          </div>
        </TitleContainer>
        <ContentContainer>
          <div></div>
          <p>너무 좋지 않나요? </p>
        </ContentContainer>
      </PostContainer>
    </Wrapper>
  );
}

export default PostDetail;
