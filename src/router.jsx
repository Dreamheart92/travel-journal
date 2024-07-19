import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './constants/paths';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

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
    ],
  },
]);

export default router;
