import { Outlet } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <DefaultLayout>
      <Navigation />
      <Outlet />
    </DefaultLayout>
  );
}
