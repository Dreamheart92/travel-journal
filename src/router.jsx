import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './constants/paths';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Catalogue from './pages/Catalogue';
import Details from './pages/Details';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Account from './pages/Account';
import DashboardModule from './modules/AccountModule/DashboardModule';
import EditProfileModule from './modules/AccountModule/EditProfileModule';
import MyJournalsModule from './modules/AccountModule/MyJournalsModule';

import AuthGuard from './guards/AuthGuard';
import JournalOwnerGuard from './guards/JournalOwnerGuard';
import RestrictAuthenticatedGuard from './guards/RestrictAuthenticatedGuard';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.LOGIN,
        element: (
          <RestrictAuthenticatedGuard>
            <Login />
          </RestrictAuthenticatedGuard>
        ),
      },
      {
        path: PATHS.SIGNUP,
        element: (
          <RestrictAuthenticatedGuard>
            <Signup />
          </RestrictAuthenticatedGuard>
        ),
      },
      {
        path: PATHS.CATALOGUE,
        element: <Catalogue />,
      },
      {
        path: `${PATHS.CATALOGUE}/:destination`,
        element: <Catalogue />,
      },
      {
        path: `${PATHS.DETAILS}/:journalId`,
        element: <Details />,
      },
      {
        path: PATHS.CREATE,
        element: (
          <AuthGuard>
            <Create />
          </AuthGuard>
        ),
      },
      {
        path: `${PATHS.EDIT}/:journalId`,
        element: (
          <AuthGuard>
            <JournalOwnerGuard>
              <Edit />
            </JournalOwnerGuard>
          </AuthGuard>
        ),
      },
      {
        path: PATHS.ACCOUNT,
        element: (
          <AuthGuard>
            <Account />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <DashboardModule />,
          },
          {
            path: 'edit-profile',
            element: <EditProfileModule />,
          },
          {
            path: 'my-journals',
            element: <MyJournalsModule />,
          },
        ],
      },
      {
        path: PATHS.NOT_FOUND,
        element: <NotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
