import { Outlet } from 'react-router-dom';
import Header from '../../Header/index.js';
import { LayoutStyled } from './style';

function BaseLayout() {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  );
}

export default BaseLayout;
