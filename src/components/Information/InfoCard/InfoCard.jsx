import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../../apis/storage';
import supabase from '../../../apis/supabaseClient';
import {
  AddButton,
  Container,
  EditButton,
  Email,
  EmailInput,
  InfoContainer,
  Name,
  ProfilePicture,
  UserNickName,
  StyledFileInput,
  Loading
} from './style';
import { updateUser } from '../../../redux/slices/userSlice';
import { IconEdit } from '../../Icon/components/Icons/IconEdit';

function InfoCard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user || { profileImg: null });
  const fileInputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [newProfileImg, setNewProfileImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('Users').select('*');
        if (error) throw error;

        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;

        if (userData.user) {
          const currentUser = data.find((user) => user.id === userData.user.id);
          if (currentUser) {
            setNickname(currentUser.nickname);
            setEmail(userData.user.email);
            dispatch(updateUser(currentUser));
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleEditClick = () => {
    if (isEditing) {
      handleSaveChanges();
    }
    setIsEditing((prev) => !prev);
  };

  const handleSaveChanges = async () => {
    if (user.id) {
      try {
        const { error: nicknameError } = await supabase
          .from('Users')
          .update({
            nickname,
            updated_at: new Date().toISOString()
          })
          .eq('id', user.id);

        if (nicknameError) throw nicknameError;

        // 프로필 이미지 업데이트
        if (newProfileImg) {
          const publicUrl = await uploadFile(newProfileImg);
          if (!publicUrl) throw new Error('Public URL이 유효하지 않습니다.');

          const { error: updateError } = await supabase
            .from('Users')
            .update({
              profile_img: publicUrl,
              updated_at: new Date().toISOString()
            })
            .eq('id', user.id);

          if (updateError) throw updateError;

          dispatch(updateUser({ profile_img: publicUrl, nickname }));
        } else {
          // 프로필 이미지를 변경하지 않는 경우 닉네임만 업데이트.
          dispatch(updateUser({ nickname }));
        }
      } catch (error) {
        console.error('Error updating profile:', error.message);
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfileImg(file);
    }
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const renderNickname = () => {
    if (isEditing) {
      return <input type="text" value={nickname} onChange={handleNicknameChange} />;
    } else {
      return <UserNickName>{nickname}</UserNickName>;
    }
  };

  const renderProfileImage = () => {
    return (
      <div>
        <ProfilePicture>
          {newProfileImg ? (
            <img src={URL.createObjectURL(newProfileImg)} alt="Profile" />
          ) : user.profile_img ? (
            <img src={user.profile_img} alt="Profile" />
          ) : (
            ''
          )}
        </ProfilePicture>
        {isEditing && <AddButton onClick={() => fileInputRef.current.click()}>추가</AddButton>}
        <StyledFileInput type="file" ref={fileInputRef} onChange={handleImageUpload} />
      </div>
    );
  };

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      {renderProfileImage()}
      <InfoContainer>
        <Name>닉네임</Name>
        {renderNickname()}
        <Email>이메일</Email>
        <EmailInput>{email}</EmailInput>
      </InfoContainer>
      <EditButton onClick={handleEditClick}>{isEditing ? '완료' : <IconEdit />}</EditButton>
    </Container>
  );
}

export default InfoCard;
