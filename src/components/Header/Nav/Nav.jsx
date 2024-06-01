import {NavStyled} from "./style.js";
import {Link} from "react-router-dom";
import {IconLogo, IconProfile} from "../../Icon/icon.jsx";
import {ProfileButton, Title, TitleWrapper} from "../style.js";

function Nav() {
  return (
    <NavStyled>
      <TitleWrapper>
        <Link to={'/'} className="logo">
          <IconLogo/>
        </Link>
        <Title>Soul Pick</Title>
      </TitleWrapper>
      <ProfileButton>
        <IconProfile/>
      </ProfileButton>
    </NavStyled>
  )
}
export default Nav;

