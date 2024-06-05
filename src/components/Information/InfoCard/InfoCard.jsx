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
        }
      }
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    if (!isEditing && currentUser) {
      const currentUserNickname = users.find((user) => user.id === currentUser.id)?.nickname;
      if (currentUserNickname) {
        setNickname(currentUserNickname);
      }
    }
    setIsEditing((prev) => !prev);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };
  // const renderNickname = () => {
  //   if (isEditing) {
  //     return <input type="text" value={nickname} onChange={handleNicknameChange} style={styles.userNickName} />;
  //   } else {
  //     // Check if users array is not empty
  //     if (users.length > 0) {
  //       // Display the nickname from the first entry of users array
  //       return <h5 style={styles.userNickName}>{users[2].nickname}</h5>;
  //     } else {
  //       // If users array is empty or data hasn't loaded yet, display default value
  //       return <h5 style={styles.userNickName}>Loading...</h5>;
  //     }
  //   }
  // };

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
