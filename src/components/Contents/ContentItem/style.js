import { styled } from 'styled-components';

export const Container = styled.li`
  position: relative;
  height: 90px;
  padding: 30px;
  border-bottom: 1px solid #333;
  cursor: pointer;
`;

export const ContentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 180px);
  color: #333;
`;

export const ContentText = styled.h2`
  font-size: 22px;
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 5px;
  width: 86%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ContentDescription = styled.p`
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 86%;
  font-size: 18px;
`;

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
`;

export const CommentCount = styled.div`
  position: absolute;
  right: 220px;
  bottom: 24px;
  font-size: 24px;
  color: #a0d2cf;
  font-weight: 500;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
    svg {
      width: 30px;
      margin-right: 5px;
    }
  }
`;
