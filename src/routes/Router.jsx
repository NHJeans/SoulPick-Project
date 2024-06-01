import { createBrowserRouter } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',

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
      },
      {
        path: 'auth/',
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
      }
    ]
  }
]);

export default router;
