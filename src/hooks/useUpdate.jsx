import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateState } from '../store/crud/selectors';
import { updateJournalRequest, updateProfileRequest } from '../store/crud/services';
import crudKeys from '../store/crud/types';
import crudActionsConstants from '../constants/crudActionsConstants';
import { buildJournalFormData, buildUserFormData } from '../helpers';

const useUpdate = () => {
  const dispatch = useDispatch();

  const {
    data,
    loading,
    success,
    error,
  } = useSelector(selectUpdateState);

  const handleUpdateProfileRequest = (userData) => {
    dispatch(updateProfileRequest({
      key: crudKeys.UPDATE,
      currentAction: crudActionsConstants.UPDATE_PROFILE,
      userData: buildUserFormData(userData),
    }));
  };

  return {
    data,
    loading,
    success,
    error,
    updateProfile: handleUpdateProfileRequest,
  };
};

export default useUpdate;
