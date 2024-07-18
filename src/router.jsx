import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './constants/paths';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';

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
        element: <Login />
      },
    ],
  },
]);

export default router;
