import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './constants/paths';

import App from './App';
import Home from './pages/Home';
import Account from './pages/Account';

import AuthGuard from './guards/AuthGuard';
import JournalOwnerGuard from './guards/JournalOwnerGuard';
import RestrictAuthenticatedGuard from './guards/RestrictAuthenticatedGuard';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Catalogue = lazy(() => import('./pages/Catalogue'));
const Details = lazy(() => import('./pages/Details'));
const Create = lazy(() => import('./pages/Create'));
const Edit = lazy(() => import('./pages/Edit'));
const DashboardModule = lazy(() => import('./modules/AccountModule/DashboardModule'));
const EditProfileModule = lazy(() => import('./modules/AccountModule/EditProfileModule'));
const MyJournalsModule = lazy(() => import('./modules/AccountModule/MyJournalsModule'));

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
          <Suspense fallback={<div><Loading /></div>}>
            <RestrictAuthenticatedGuard>
              <Login />
            </RestrictAuthenticatedGuard>
          </Suspense>
        ),
      },
      {
        path: PATHS.SIGNUP,
        element: (
          <Suspense fallback={<div><Loading /></div>}>
            <RestrictAuthenticatedGuard>
              <Signup />
            </RestrictAuthenticatedGuard>
          </Suspense>
        ),
      },
      {
        path: PATHS.CATALOGUE,
        element: (
          <Suspense fallback={<div><Loading /></div>}>
            <Catalogue />
          </Suspense>
        ),
      },
      {
        path: `${PATHS.CATALOGUE}/:destination`,
        element: (
          <Suspense fallback={<div><Loading /></div>}>
            <Catalogue />
          </Suspense>
        ),
      },
      {
        path: `${PATHS.DETAILS}/:journalId`,
        element: (
          <Suspense fallback={<div><Loading /></div>}>
            <Details />
          </Suspense>
        ),
      },
      {
        path: PATHS.CREATE,
        element: (
          <Suspense fallback={<div><Loading /></div>}>
            <AuthGuard>
              <Create />
            </AuthGuard>
          </Suspense>
        ),
      },
      {
        path: `${PATHS.EDIT}/:journalId`,
        element: (
          <Suspense fallback={<div><Loading /></div>}>
            <AuthGuard>
              <JournalOwnerGuard>
                <Edit />
              </JournalOwnerGuard>
            </AuthGuard>
          </Suspense>
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
            element: (
              <Suspense fallback={<div><Loading /></div>}>
                <DashboardModule />
              </Suspense>
            ),
          },
          {
            path: 'edit-profile',
            element: (
              <Suspense fallback={<div><Loading /></div>}>
                <EditProfileModule />
              </Suspense>
            ),
          },
          {
            path: 'my-journals',
            element: (
              <Suspense fallback={<div><Loading /></div>}>
                <MyJournalsModule />
              </Suspense>
            ),
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
