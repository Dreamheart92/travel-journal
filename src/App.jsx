import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Navigation from './components/Navigation';
import { userActions } from './store/userSlice';
import { getUserDataFromStorage } from './utility/storage';
import Loading from './components/Loading';

export default function App() {
  const dispatch = useDispatch();
  const [initApp, setInitApp] = useState(false);

  useEffect(() => {
    const handleUserStorageChange = (event) => {
      if (event.detail.type === 'update') {
        dispatch(userActions.storeUser({ userData: event.detail.data }));
      } else if (event.detail.type === 'remove') {
        dispatch(userActions.deleteUser());
      }
    };

    window.addEventListener('userStorageChange', handleUserStorageChange);

    return () => {
      window.removeEventListener('userStorageChange', handleUserStorageChange);
    };
  }, []);

  useEffect(() => {
    const userData = getUserDataFromStorage();
    dispatch(userActions.storeUser({ userData }));
    setInitApp(true);
  }, []);

  if (!initApp) {
    return <Loading />;
  }

  return (
    <DefaultLayout>
      <Navigation />
      <Outlet />
    </DefaultLayout>
  );
}
