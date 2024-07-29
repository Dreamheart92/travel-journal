import { useDispatch, useSelector } from 'react-redux';
import { selectDestinations } from '../store/destinations/selectors';
import { fetchDestinations } from '../store/destinations/services';

const useDestinations = () => {
  const dispatch = useDispatch();

  const {
    destinations,
    error,
    loading,
    success,
  } = useSelector(selectDestinations);

  const handleFetchDestinations = () => {
    dispatch(fetchDestinations());
  };

  return {
    destinations,
    error,
    loading,
    success,
    fetchDestinations: handleFetchDestinations,
  };
};

export default useDestinations;
