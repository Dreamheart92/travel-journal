import { useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import Footer from './components/Footer';
import useDestinations from './hooks/useDestinations';
import OptimisticModule from './modules/OptimisticModule';
import AppLayout from './layouts/AppLayout';
import ErrorBoundary from './components/ErrorBoundary';

const libraries = ['places'];

export default function App() {
  const { isLoaded: isMapsLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCqkEzqlvC-P2VQhkIVupAZpaf0lRsUc-k',
    libraries,
  });

  const { success: destinationsLoaded, fetchDestinations } = useDestinations();

  useEffect(() => {
    fetchDestinations();
  }, []);

  if (!destinationsLoaded || !isMapsLoaded) {
    return <AppLayout content={<Loading />} />;
  }

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
