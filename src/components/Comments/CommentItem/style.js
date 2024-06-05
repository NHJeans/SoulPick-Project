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
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
    p {
      margin: 0 15px;
    }
    div {
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
