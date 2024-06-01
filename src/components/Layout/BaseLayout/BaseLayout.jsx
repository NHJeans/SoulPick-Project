import { LayoutStyled } from './style';
import Header from "../../Header/index.js";
import {Outlet} from "react-router-dom";

function Layout() {
  console.log('Layout rendered')
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  );
}

export default Layout;
