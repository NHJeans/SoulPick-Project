import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon.jsx';
import { MyPageButton, Title, TitleWrapper } from '../style.js';
import {NavStyled, UserInfoWrapper} from './style.js';
import {useEffect, useState} from "react";
import SelectBox from "../../SelectBox/index.js";
import supabase from "../../../apis/supabaseClient.js";

function Nav() {
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [user, setUser] = useState(null); // 사용자 정보 관리

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      console.log('@@ Logged in user', user);

      if (error) {
        console.error('Error fetching user:', error);
        return;
      }

      if (user) {
        const { data, error } = await supabase
          .from('Users') // 사용자의 테이블 이름
          .select('id, nickname, profile_img')
          .eq('id', user.id); // 로그인한 사용자의 id로 변경 필요

        if (error) {
          console.error('Error fetching user data:', error);
          return;
        }

        if (data && data.length > 0) {
          setIsLoggedIn(true);
          setUser(data[0]);
          console.log('User data fetched:', data[0]);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleOpenSelectBox = () => {
    setIsSelectBoxOpen(!isSelectBoxOpen);
  }

  const handleCloseSelectBox = () => {
    setIsSelectBoxOpen(false);
  };

  //로그아웃
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error during sign out:', error);
    } else {
      setIsLoggedIn(false);
      setUser(null);
      handleCloseSelectBox();
    }
  };

  return (
    <NavStyled>
      <TitleWrapper>
        <Link to={'/'}>
          <Icon name={'logo'} />
        </Link>
        <Title>Soul Pick</Title>
      </TitleWrapper>
      <UserInfoWrapper>
        {isLoggedIn && user ? (
          <>
            <h3>{user.nickname} 님</h3>
          </>
        ) : (
          <h3>Guest 님</h3>
        )}
        <MyPageButton onClick={handleOpenSelectBox}>
          {isLoggedIn && user ? (
            <img src={'https://thumb.mt.co.kr/06/2020/10/2020101416293691338_1.jpg'} alt="profile"  />
          ) : (
            <Icon name={'profile'} />
          )}
        </MyPageButton>
      </UserInfoWrapper>
      {isSelectBoxOpen && (
        <SelectBox isLoggedIn={isLoggedIn} onClose={handleCloseSelectBox} onLogout={handleLogout} />
      )}
    </NavStyled>
  );
}
export default Nav;
