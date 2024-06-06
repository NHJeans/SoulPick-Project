import {AuthLayoutStyled} from "./style.js";
import {Outlet} from "react-router-dom";

function AuthLayout() {
  return (
    <AuthLayoutStyled>
      <Outlet />
    </AuthLayoutStyled>
  );
}
export default AuthLayout;