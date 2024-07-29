import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import Footer from './components/Footer';
import useDestinations from './hooks/useDestinations';

export default function App() {
  const { success: destinationsLoaded, fetchDestinations } = useDestinations();

  useEffect(() => {
    fetchDestinations();
  }, []);

  if (!destinationsLoaded) {
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
