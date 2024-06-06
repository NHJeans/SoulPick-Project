import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  height: 300px;
  border-bottom: 1px solid #000000;  
  box-sizing: border-box;
`;
export const ProfilePictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #eeeeee;
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

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 220px;
  height: 180px;
`;

export const Name = styled.h2`
  font-size: 18px;
  line-height: 1.5;
`;

export const UserNickName = styled.h5`
  font-size: 18px;
  line-height: 1.5;
  color: #5CADA8;
  font-weight: bold;
`;

export const Email = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

export const EmailInput = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #5CADA8;
  font-weight: bold;
`;

export const EditProfileButton = styled.button`
  position: absolute;
  right: -20px;
  top :10px;
  font-size: 16px;
  color: #7B7B7B;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const AddProfileButton = styled.button`
  position: absolute;
  bottom: 20px;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #5CADA8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
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
export const NickNameInput = styled.input`
  font-size: 18px;
  padding: 8px 12px;
  border: none;
  background-color: #EFEFEF;
  border-radius: 50px;
  
  &:focus {
    outline: #333;
  }
`;