import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 80px;
  padding: 0 30px;
  background-color: #CCECEA;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 5%);
  z-index: 10;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  height: 100%;
`;
export const Title = styled.h1`
  font-family: "Pacifico", cursive;
  font-style: normal;
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`;

export const ProfileButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  svg {
    width: 22px;
    height: 22px; 
  }
`;