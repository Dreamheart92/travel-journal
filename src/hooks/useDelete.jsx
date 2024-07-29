import { useDispatch, useSelector } from 'react-redux';
import { selectDeleteState } from '../store/crud/selectors';
import { deleteJournalRequest } from '../store/crud/services';
import crudKeys from '../store/crud/types';
import crudActionsConstants from '../constants/crudActionsConstants';

const useDelete = () => {
  const dispatch = useDispatch();

  const {
    data,
    loading,
    success,
    error,
  } = useSelector(selectDeleteState);
  return {
    data,
    loading,
    success,
    error,
  };
};

export default useDelete;
