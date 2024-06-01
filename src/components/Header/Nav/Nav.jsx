import {NavStyled} from "./style.js";
import {Link} from "react-router-dom";
import Icon  from "../../Icon/icon.jsx";
import {ProfileButton, Title, TitleWrapper} from "../style.js";

function Nav() {
  return (
    <NavStyled>
      <TitleWrapper>
        <Link to={'/'}>
          <Icon name={'logo'} />
          {/*<IconLogo/>*/}
        </Link>
        <Title>Soul Pick</Title>
      </TitleWrapper>
      <ProfileButton>
       <Icon name={'profile'} />
      </ProfileButton>
    </NavStyled>
  )
}
export default Nav;

