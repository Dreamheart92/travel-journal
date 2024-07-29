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

  const handleDeleteJournalRequest = (journalId) => {
    return dispatch(deleteJournalRequest({
      key: crudKeys.DELETE,
      currentAction: crudActionsConstants.DELETE_JOURNAL,
      journalId,
    }));
  };

  return {
    data,
    loading,
    success,
    error,
    deleteJournal: handleDeleteJournalRequest,
  };
};

export default useDelete;
