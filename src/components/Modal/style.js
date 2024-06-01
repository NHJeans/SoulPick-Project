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
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 30px 120px 0;
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

export const ModalContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100%;
  padding-bottom: 100px;
`;

export const ContentInner = styled.div`
  padding: 30px;
  border-radius: 9px;
  background-color: #fff;
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
