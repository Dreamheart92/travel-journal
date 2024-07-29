import { useDispatch, useSelector } from 'react-redux';
import { selectCreateState } from '../store/crud/selectors';
import { postJournalRequest, sendSignupRequest } from '../store/crud/services';
import crudKeys from '../store/crud/types';
import crudActionsConstants from '../constants/crudActionsConstants';
import { buildJournalFormData } from '../helpers';
import { constructSignupData } from '../forms/helpers/signupForm';

const useCreate = () => {
  const dispatch = useDispatch();

  const {
    data,
    loading,
    success,
    error,
  } = useSelector(selectCreateState);

  const handlePostJournalRequest = (formData) => {
    dispatch(postJournalRequest({
      key: crudKeys.CREATE,
      currentAction: crudActionsConstants.POST_JOURNAL,
      journalData: buildJournalFormData(formData),
    }));
  };
};

export default useCreate;
