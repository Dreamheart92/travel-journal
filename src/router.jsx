import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './constants/paths';

import App from './App';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
    ],
  },
]);

export default router;
