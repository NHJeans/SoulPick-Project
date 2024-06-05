import {styled} from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 120px;
  border-bottom: 2px solid #333;
  cursor: pointer
`

export const ContentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ContentText = styled.h2`
  font-size: 24px;
  line-height: 1.5;
  font-weight: 700;
`

export const ContentDescription = styled.p`
  width: 680px;
  font-size: 20px;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const ContentImgWrapper = styled.div`
  width: 180px;
  height: 90px;
  overflow: hidden;
  border-radius: 16px;  
  background-color: #000;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`