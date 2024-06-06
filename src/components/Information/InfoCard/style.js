import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px auto;
  max-width: 800px;
  width: 100%;
  padding-bottom: 80px;  
  border-bottom: 1px solid black;  
`;
export const ProfilePictureContainer = styled.div`


`;
export const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #eeeeee;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
 
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const UserNickName = styled.h5`
  margin: 3px 0 0;
  font-size: 18px;
  color: #5CADA8;
  font-weight: bold;
  width: 150px;
`;

export const Email = styled.p`
  margin: 10px 0 0;
  font-size: 18px;
`;

export const EmailInput = styled.p`
  margin: 2px 0 20px;
  font-size: 18px;
  color: #5CADA8;
  font-weight: bold;
`;

export const EditButton = styled.button`
  padding: 8px 13px;
  font-size: 16px;
  color: #7B7B7B;
  background: none;
  border: none;
  border-radius: 7px;
  margin-top: -70px;
  margin-left: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const AddButton = styled.button`
  padding: 8px 13px;
  font-size: 14px;
  background-color: #CCECEA;
  color: #fff;
  border: none;
  border-radius: 7px;
  margin: 20px 0 0 50px;
  cursor: pointer;

  &:hover {
    background-color: #a0d2cf;
  }
`;
export const StyledFileInput = styled.input`
  display: none;
`;

export const Loading = styled.div`

`;
export const StyledInput = styled.input`
  margin: 5px 0 0;
  font-size: 18px;
  width: 200px;
  padding: 5px;
  border: none;
  background-color: #EFEFEF;
  border-radius: 50px;
`;