import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;


export const ModalContentWrapper = styled.div`
  
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  //min-height: 100%;
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  width: 400px;
  border-radius: 16px;
  background-color: #fff;
`;

export const ModalTitle = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 36px;
  color: #000;
  text-align: center;
  margin-bottom: 30px;
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  color: #a9a9a9;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 50px;
  background-color: #EFEFEF;
  box-sizing: border-box;
  font-size: 12px;
  border: none;
  
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a9a9a9;
  }
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 16px;
  border-radius: 16px;
  font-size: 12px;
  background-color: #EFEFEF;
  box-sizing: border-box;
  border: none;
  resize: unset;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a9a9a9;
  }
`

export const ModalSubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 50px;
  background-color: #A0D2CF;
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const ScreenDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: zoom-out;
`;
// const ButtonModalClose = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   padding: 12px;
//   color: #fff;
//   cursor: pointer;
//   z-index: 100;
// `;
