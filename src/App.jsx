import { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import Footer from './components/Footer';
import OptimisticErrorModal from './components/Modal/OptimisticErrorModal';
import useDestinations from './hooks/useDestinations';

export default function App() {
  const [initApp, setInitApp] = useState(false);

  const { success: destinationsLoaded, fetchDestinations } = useDestinations();

  useEffect(() => {
    fetchDestinations();
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
      <OptimisticErrorModal />
      <ScrollRestoration />
    </DefaultLayout>
  );
}
