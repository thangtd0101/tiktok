import DefaultLayout from '~/layouts/Default/Default';
import HeaderOnlyLayout from '~/layouts/HeaderOnly/HeaderOnly';
import HomePage from '~/pages/Home/Home';
import FollowingPage from '~/pages/Following/Following';
import ProfilePage from '~/pages/Profile/Profile';
import UploadPage from '~/pages/Upload/Upload';

const publicRoutes = [
  {
    path: '/',
    element: HomePage,
    layout: DefaultLayout,
  },
  {
    path: '/following',
    element: FollowingPage,
    layout: DefaultLayout,
  },
  {
    path: '/profile',
    element: ProfilePage,
    layout: DefaultLayout,
  },
  {
    path: '/upload',
    element: UploadPage,
    layout: HeaderOnlyLayout,
  },
];

export { publicRoutes };
