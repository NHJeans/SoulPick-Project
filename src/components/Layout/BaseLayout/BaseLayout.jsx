import { LayoutStyled } from './style';
import Header from "../../Header/index.js";
import {Outlet} from "react-router-dom";

function BaseLayout() {
  console.log('Layout rendered')
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  );
}

export default BaseLayout;
