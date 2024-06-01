import {NavStyled} from "./style.js";
import {Link} from "react-router-dom";
import {IconLogo} from "../../Icon/icon.jsx";

function Nav() {
  return (
    <NavStyled>
      <Link to={'/'} className="logo">
        <IconLogo/>
      </Link>
      <span>로그인/회원가입</span>
    </NavStyled>
  )
}
export default Nav;