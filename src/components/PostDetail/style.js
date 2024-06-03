import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryContainer = styled.div`
  p {
    font-size: 32px;
    font-weight: bold;
    padding: 20px 0;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  border-top: 3px solid;
  border-bottom: 1px solid;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid;
  .left-div {
    width: 100%;
  }
  .title {
    font-size: 22px;
    font-weight: 600;
    padding: 5px 0;
  }
  .content-info-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;

    .profile {
      background-color: #efefef;
      border-radius: 50%;
      padding: 5px;
      svg {
        width: 17px;
      }
    }
    p {
      margin: 0 10px;
      font-size: 14px;
    }
  }
  .comment-div {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      width: 25px;
      margin-right: 5px;
    }
    p {
      height: fit-content;
      font-size: 20px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;

  div {
    width: 640px;
    height: 360px;
    background-color: gainsboro;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
    line-height: 140%;
  }
`;
