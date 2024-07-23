import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './constants/paths';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Catalogue from './pages/Catalogue';
import Details from './pages/Details';
import CommentsProvider from './context/CommentsContext';

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
        element: <Login />,
      },
      {
        path: PATHS.SIGNUP,
        element: <Signup />,
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
    ],
  },
]);

export default router;
