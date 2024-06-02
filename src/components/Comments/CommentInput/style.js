import styled from 'styled-components';

export const CommentInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 30px;
  background-color: #f6faf9;
  border-radius: 30px;
  margin-top: 30px;
  box-sizing: border-box;
  div {
    padding: 10px;
    border-radius: 50%;
    background-color: #efefef;

    svg {
      width: 40px;
    }
  }
  input {
    width: 100%;
  }
`;
