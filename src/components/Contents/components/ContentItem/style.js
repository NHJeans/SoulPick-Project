import {styled} from "styled-components";

export const Container = styled.li`
  //display: flex;
  //flex-direction: row;
  //justify-content: space-between;
  //align-items: center;
  position: relative;
  height: 90px;
  padding: 24px;
  border-bottom: 2px solid #333;
  cursor: pointer
`

export const ContentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 180px);
  color: #333;
`

export const ContentText = styled.h2`
  font-size: 24px;
  line-height: 1.5;
  font-weight: 700;
  width: 86%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const ContentDescription = styled.p`
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 86%;   
`

export const ContentImgWrapper = styled.div`
  width: 180px;
  height: 90px;
  overflow: hidden;
  border-radius: 16px;  
  background-color: #000;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CommentCount = styled.div`
  position: absolute;
  right: 220px;
  bottom: 24px;
  font-size: 24px;
  color: #A0D2CF;
  font-weight: 500;
`