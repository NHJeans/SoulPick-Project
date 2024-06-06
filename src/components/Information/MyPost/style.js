import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostContainer = styled.div`
  position: relative;
  display: flex;
  text-align: left;
  margin: 0 auto;
  width: 800px;
  margin-top: -80px;
  flex-direction: column;
`;



export const PostTitle = styled.p`
  font-size: 30px;
  margin: 0 0 10px;
  font-weight: bold;
  text-align: left;
  color: black;
`;

export const PostText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
  padding-left: 20px;
`;

export const Thumbnail = styled.img`
  height: 90px;
  width: 150px;
  float: right;
  margin-bottom: 15px;
  margin-right: 10px;
  border-radius: 10px;
`;

export const PostItem = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostContent = styled.div`
  padding-left: 20px;
`;
export const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

export const CommentCount = styled.div`
  position: absolute;
  right: 200px;

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