import {NavStyled} from "./style.js";
import {Link} from "react-router-dom";
import Icon  from "../../Icon/Icon.jsx";
import {MyPageButton, Title, TitleWrapper} from "../style.js";

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
      <MyPageButton>
       <Icon name={'profile'} />
      </MyPageButton>
    </NavStyled>
  )
}
export default Nav;

