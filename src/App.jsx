import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoadScript } from '@react-google-maps/api';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import Footer from './components/Footer';
import OptimisticModule from './modules/OptimisticModule';
import AppLayout from './layouts/AppLayout';
import ErrorBoundary from './components/ErrorBoundary';
import { selectDestinations } from './store/destinations/selectors';
import { fetchDestinations } from './store/destinations/services';

const libraries = ['places'];

export default function App() {
  const { isLoaded: isMapsLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const dispatch = useDispatch();

  const { success: destinationsLoaded } = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(fetchDestinations());
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
