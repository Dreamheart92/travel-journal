import { Outlet } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

export default function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}
