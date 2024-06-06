import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon.jsx';
import SelectBox from '../../SelectBox/index.js';
import { MyPageButton, Title, TitleWrapper } from '../style.js';
import { NavStyled, UserInfoWrapper } from './style.js';

function Nav() {
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  const handleOpenSelectBox = () => {
    setIsSelectBoxOpen(!isSelectBoxOpen);
  };

  const handleCloseSelectBox = () => {
    setIsSelectBoxOpen(false);
  };

  return (
    <NavStyled>
      <TitleWrapper>
        <Link to={'/'}>
          <Icon name={'logo'} />
          <Title>Soul Pick</Title>
        </Link>
      </TitleWrapper>
      <UserInfoWrapper>
        {user.nickname ? (
          <>
            <h3>{user.nickname} 님</h3>
          </>
        ) : (
          <h3>Guest 님</h3>
        )}
        <MyPageButton onClick={handleOpenSelectBox}>
          {user.profile_img ? <img src={user.profile_img} alt="profile" /> : <Icon name={'profile'} />}
        </MyPageButton>
      </UserInfoWrapper>
      {isSelectBoxOpen && <SelectBox onClose={handleCloseSelectBox} user={user} />}
    </NavStyled>
  );
}
export default Nav;
