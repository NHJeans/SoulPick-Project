import styled from 'styled-components';

export const CommentInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  background-color: #f6faf9;
  border-radius: 30px;
  margin-top: 30px;
  box-sizing: border-box;
  align-items: center;
  div {
    border-radius: 50%;
    background-color: #efefef;
    height: 70px;
    width: 70px;
    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 50%;
    }
    svg {
      width: 40px;
      height: 40px;
      margin: 15px;
    }
  }
  form {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
  textarea {
    width: 100%;
    border: transparent;
    border-radius: 15px;
    margin-left: 20px;
    font-family: inherit;
    font-size: 16px;
    height: 110px;
    padding: 20px;
    box-sizing: border-box;
    resize: none;
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: #ccecea;
    font-family: inherit;
    padding: 20px;
    border: transparent;
    border-radius: 15px;
    font-size: 20px;
    margin-left: 20px;
    color: #5cada8;
    width: 120px;
    height: 90px;
    cursor: pointer;
  }
`;
