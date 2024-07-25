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
import Dashboard from './pages/Account/Dashboard';
import EditProfile from './pages/Account/EditProfile';
import MyJournals from './pages/Account/MyJournals';
import JournalOwnerGuard from './guards/JournalOwnerGuard';
import AuthGuard from './guards/AuthGuard';
import RestrictAuthenticatedGuard from './guards/RestrictAuthenticatedGuard';

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
        element: <Create />,
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
            element: <Dashboard />,
          },
          {
            path: 'edit-profile',
            element: <EditProfile />,
          },
          {
            path: 'my-journals',
            element: <MyJournals />,
          },
        ],
      },
    ],
  },
]);

export default router;
