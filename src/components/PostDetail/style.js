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
    color: #5cada8;
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
  border-top: 3px solid #5cada8;
  border-bottom: 1px solid #5cada8;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px 20px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid;
  .left-div {
    width: fit-content;
  }
  .right-div {
    display: flex;
    flex-direction: row;
    height: fit-content;
    p {
      font-size: 15px;
      margin-left: 8px;
      color: gray;
      cursor: pointer;
      &:hover {
        color: #5cada8;
      }
    }
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
      width: 26px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 17px;
      }
    }
    img {
      width: 26px;
      border-radius: 50%;
    }
    p {
      margin: 0 10px;
      font-size: 14px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;

  .youtude {
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

export const EditBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;

  textarea {
    width: 100%;
    resize: none;
    padding: 15px 20px;
    font-family: inherit;
    font-size: inherit;
    border: 1px solid;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 120px;
    margin-left: 20px;
    border: transparent;
    border-radius: 15px;
    font-size: 18px;
    font-family: inherit;
  }
`;
