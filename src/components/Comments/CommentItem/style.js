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
      svg {
        width: 20px;
        padding: 10px;
      }
    }
  }
  .comment-context {
    font-size: 15px;
    padding: 0 10px;
    margin-bottom: 10px;
    line-height: 140%;
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
