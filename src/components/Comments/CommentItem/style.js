import styled from 'styled-components';

export const CommentItemContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid;
  min-height: 140px;

  .comment-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .nickname {
      margin: 0 15px;
      font-size: 18px;
      font-weight: 500;
    }
    .profile {
      background-color: #efefef;
      border-radius: 50%;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
      }
      svg {
        width: 20px;
        padding: 10px;
      }
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  p {
    color: gray;
    font-size: 14px;
    cursor: pointer;
    margin-left: 8px;
    &:hover {
      color: #5cada8;
    }
  }
`;

export const CommentContent = styled.p`
  font-size: 15px;
  padding: 0 10px;
  margin-bottom: 10px;
  line-height: 140%;
`;

export const EditingBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    padding: 15px 20px;
    font-size: 15px;
    font-family: inherit;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: #efefef;
    border: transparent;
    &:focus {
      outline: none;
    }
  }
  button {
    min-width: 100px;
    border: transparent;
    border-radius: 15px;
    margin-left: 25px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 600;
    background-color: #ccecea;
    color: #5cada8;
    font-family: inherit;
    cursor: pointer;
    &:hover {
      background-color: #5cada8;
      color: white;
    }
  }
`;
