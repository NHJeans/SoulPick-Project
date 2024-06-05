import { createBrowserRouter } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import AuthLayout from '../components/Layout/AuthLayout/index.js';
import BaseLayout from '../components/Layout/BaseLayout/index.js';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import OAuthRedirectPage from '../pages/OAuthRedirectPage';

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
        element: <Detail />
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
