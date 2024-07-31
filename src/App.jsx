import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import Footer from './components/Footer';
import useDestinations from './hooks/useDestinations';
import OptimisticModule from './modules/OptimisticModule';
import AppLayout from './layouts/AppLayout';

export default function App() {
  const { success: destinationsLoaded, fetchDestinations } = useDestinations();

  useEffect(() => {
    fetchDestinations();
  }, []);

  if (!destinationsLoaded) {
    return <AppLayout content={<Loading />} />;
  }

  return (
    <AppLayout
      navigation={<Navigation />}
      content={(
        <>
          <Outlet />
          <OptimisticModule />
          <ScrollRestoration />
        </>
      )}
      footer={<Footer />}
    />
  );
}
