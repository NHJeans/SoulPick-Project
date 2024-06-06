import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon.jsx';
import { MyPageButton, Title, TitleWrapper } from '../style.js';
import { NavStyled } from './style.js';
import {useState} from "react";
import SelectBox from "../../SelectBox/index.js";

function Nav() {
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);
  const handleOpenSelectBox = () => {
    setIsSelectBoxOpen(!isSelectBoxOpen);
  }

  const handleCloseSelectBox = () => {
    setIsSelectBoxOpen(false);
  };

  return (
    <NavStyled>
      <TitleWrapper>
        <Link to={'/'}>
          <Icon name={'logo'} />
          {/*<IconLogo/>*/}
        </Link>
        <Title>Soul Pick</Title>
      </TitleWrapper>
      <MyPageButton onClick={handleOpenSelectBox}>
        <Icon name={'profile'} />
      </MyPageButton>
      {isSelectBoxOpen && ( <SelectBox onClose={handleCloseSelectBox} />)}
    </NavStyled>
  );
}
export default Nav;
