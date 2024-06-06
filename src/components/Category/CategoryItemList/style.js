import styled from "styled-components";

export const CategoryItemContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 1200px;
`
export const CategoryItemWrapper = styled.li``;
export const CategoryItemName = styled.div`
  padding: 20px 0;
  text-align: center;
  font-size: 16px;
  color: #333;
`
export const CategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.25);
  color: #999999;
  font-size: 32px;
  cursor: pointer;
  transition: transform 0.3s;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  
  &:hover {
    transform: rotateY(180deg);
  }
`
export const CategoryCardFront = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`

export const CategoryCardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #A0D2CF;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 50%;
  transform: rotateY(180deg);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotateY(180deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 검정 투명도 */
    border-radius: 50%;
    z-index: 1;
  }
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    color: #fff;
    z-index: 2;
  }
  
`