import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Navigation from './components/Navigation';
import { getUserDataFromStorage } from './helpers/storage';
import Loading from './components/Loading';
import { selectDestinations } from './store/destinations/selectors';
import { fetchDestinations } from './store/destinations/thunks';
import { authActions } from './store/auth';
import Footer from './components/Footer';

export default function App() {
  const dispatch = useDispatch();
  const [initApp, setInitApp] = useState(false);

  const { success: destinationsLoaded } = useSelector(selectDestinations);

  const handleUserStorageChange = useCallback((event) => {
    if (event.detail.type === 'update') {
      dispatch(authActions.storeUser({ userData: event.detail.data }));
    } else if (event.detail.type === 'remove') {
      dispatch(authActions.clearUser());
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
    dispatch(fetchDestinations());

    if (userData) {
      dispatch(authActions.storeUser({ userData }));
    }

    setInitApp(true);
  }, []);

  const appIsLoaded = initApp && destinationsLoaded;

  return (
    <DefaultLayout>
      <Navigation />
      {!appIsLoaded && <Loading />}
      {appIsLoaded && <Outlet />}
      <Footer />
      <ScrollRestoration />
    </DefaultLayout>
  );
}
