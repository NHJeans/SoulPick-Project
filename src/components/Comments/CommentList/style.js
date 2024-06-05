import styled from 'styled-components';

export const CommentListContainer = styled.div`
  width: 100%;
  margin: 30px 10px;
  margin-bottom: 200px;
  .title-div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const CommentTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-right: 15px;
`;

export const CommentLength = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;

  .length {
    height: fit-content;
    font-size: 22px;
    text-align: center;
    color: #a0d2cf;
  }
`;
