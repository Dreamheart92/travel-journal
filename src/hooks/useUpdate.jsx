import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateState } from '../store/crud/selectors';

const useUpdate = () => {
  const dispatch = useDispatch();

  const {
    data,
    loading,
    success,
    error,
  } = useSelector(selectUpdateState);

  return {
    data,
    loading,
    success,
    error,
  };
};

export default useUpdate;
