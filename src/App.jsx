import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Navigation from './components/Navigation';
import { userActions } from './store/userSlice';
import { getUserDataFromStorage } from './helpers/storage';
import Loading from './components/Loading';
import { selectDestinations } from './store/destinations/selectors';
import { fetchDestinations } from './store/destinations/thunks';

export default function App() {
  const dispatch = useDispatch();
  const [initApp, setInitApp] = useState(false);


  const handleUserStorageChange = useCallback((event) => {
    if (event.detail.type === 'update') {
      dispatch(userActions.storeUser({ userData: event.detail.data }));
    } else if (event.detail.type === 'remove') {
      dispatch(userActions.deleteUser());
    }
  }, []);

  useEffect(() => {
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
