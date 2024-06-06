import styled from "styled-components";

export const CategoryItemContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 1200px;
`
export const CategoryItem = styled.li`
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
  background-color: #5CADA8;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 50%;
  transform: rotateY(180deg);
`