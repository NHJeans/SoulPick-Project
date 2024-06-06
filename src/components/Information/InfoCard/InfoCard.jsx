import React, { useState, useEffect } from 'react';
import { styles } from './style';
import supabase from '../../../apis/supabaseClient';

function InfoCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('유저 5882');
  const [email, setEmail] = useState('example@gmail.com');
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('Users').select('*');
      if (error) {
        console.log('error => ', error);
      } else {
        console.log('data => ', data);
      }
      setUsers(data);

      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) {
        console.log('User error => ', userError);
      } else {
        console.log('Current user => ', userData.user);
        setCurrentUser(userData.user);
        if (userData.user) {
          const currentUserNickname = data.find((user) => user.id === userData.user.id)?.nickname;
          if (currentUserNickname) {
            setNickname(currentUserNickname);
          }
          setEmail(userData.user.email);
        }
      }
    };

    fetchData();
  }, []);

  const handleEditClick = async () => {
    if (isEditing && currentUser) {
      const { error } = await supabase.from('Users').update({ nickname }).eq('id', currentUser.id);

      if (error) {
        console.log('Update error => ', error);
      } else {
        const updatedUsers = users.map((user) => (user.id === currentUser.id ? { ...user, nickname } : user));
        setUsers(updatedUsers);
      }
    }

    setIsEditing((prev) => !prev);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const renderNickname = () => {
    if (isEditing) {
      return <input type="text" value={nickname} onChange={handleNicknameChange} style={styles.userNickName} />;
    } else {
      if (currentUser && users.length > 0) {
        const currentUserNickname = users.find((user) => user.id === currentUser.id)?.nickname;
        return <h5 style={styles.userNickName}>{currentUserNickname}</h5>;
      } else {
        return <h5 style={styles.userNickName}>Loading...</h5>;
      }
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.profilePicture}>유저</div>
        <div style={styles.infoContainer}>
          <h2 style={styles.name}>닉네임</h2>
          {renderNickname()}
          <p style={styles.email}>이메일</p>
          <p style={styles.emailInput}>{email}</p>
        </div>
        <button style={styles.editButton} onClick={handleEditClick}>
          {isEditing ? '완료' : '수정'}
        </button>
      </div>
    </>
  );
}

export default InfoCard;
