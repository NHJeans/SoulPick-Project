import React, { useState, useEffect } from 'react';
import { styles } from './style';
import supabase from '../../apis/supabaseClient';

function Impormation() {
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
      <div style={styles.centerStyle}>
        <div>
          <p style={styles.textTop}>내가 쓴 글</p>
          <p style={styles.textSecond}>오늘 나온 aespa 신곡</p>
          <p>
            너무 좋치 않나요? 뮤비도 너무 이쁘고 한번 들어보세요!! 어쩌구저쩌구 그랬습니다. 특히0분 00초에서 000의
            목소리가 너무 좋았습니다!
          </p>
        </div>
        <div>
          <img
            style={styles.imgStyle}
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTVfMjc0%2FMDAxNzA3OTcyODU4MjMz.qF8IV_kKzbEv4TggETLlt3AiIr_vvrRjhkD6BXjFNc8g.lj_0A4JjXaUtsIjGNRUWVpC_VNgcdWsiJ29aLR7LQ6Yg.PNG.slal0327%2Fpngwing.com_%252857%2529.png&type=a340"
            alt="동영상"
          />
        </div>
      </div>
      <hr style={styles.borderTwo} />
    </>
  );
}

export default Impormation;
