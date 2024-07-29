import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import { selectDestinations } from './store/destinations/selectors';
import { fetchDestinations } from './store/destinations/services';
import Footer from './components/Footer';
import OptimisticErrorModel from './components/Modal/OptimisticErrorModel';

export default function App() {
  const dispatch = useDispatch();
  const [initApp, setInitApp] = useState(false);

  const { success: destinationsLoaded } = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(fetchDestinations());
    setInitApp(true);
  }, []);

  const appIsLoaded = initApp && destinationsLoaded;

  if (!appIsLoaded) {
    return <Loading />;
  }

  return (
    <DefaultLayout>
      <Navigation />
      <Outlet />
      <Footer />
      <OptimisticErrorModel />
      <ScrollRestoration />
    </DefaultLayout>
  );
}
