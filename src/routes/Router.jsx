import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../components/Layout/AuthLayout/index.js';
import BaseLayout from '../components/Layout/BaseLayout/index.js';
import DetailPage from '../pages/Detail/DetailPage';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import OAuthRedirectPage from '../pages/OAuthRedirectPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'mypage',
        element: <MyPage />
      },
      {
        path: 'details/:detailId',
        element: <DetailPage />
      }
    ]
  },
  {
    path: 'auth/',
    element: <AuthLayout />,
    children: [
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'signin',
        element: <SignIn />
      }
    ]
  },
  {
    path: 'oauth-redirect',
    element: <OAuthRedirectPage />
  }
]);

export default router;
