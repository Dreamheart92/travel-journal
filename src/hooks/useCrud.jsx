import { useDispatch, useSelector } from 'react-redux';
import crudKeys from '../store/crud/types';
import crudActionsConstants from '../constants/crudActionsConstants';
import { buildJournalFormData, buildUserFormData } from '../helpers';
import { constructSignupData } from '../forms/helpers/signupForm';
import { constructLoginData } from '../forms/helpers/loginForm';

import {
  deleteJournalRequest,
  postJournalRequest,
  sendLoginRequest,
  sendSignupRequest,
  updateJournalRequest,
  updateProfileRequest,
} from '../store/crud/services';

const useCrud = (type) => {
  const dispatch = useDispatch();

  const typeState = useSelector((state) => state.crud[type]);

  let actions;

  switch (type) {
    case crudKeys.CREATE: {
      actions = {
        postJournal: (formData) => dispatch(postJournalRequest({
          key: crudKeys.CREATE,
          currentAction: crudActionsConstants.POST_JOURNAL,
          journalData: buildJournalFormData(formData),
        })),
        signup: (signupData) => dispatch(sendSignupRequest({
          key: crudKeys.CREATE,
          currentAction: crudActionsConstants.SIGNUP,
          signupData: constructSignupData(signupData),
        })),
      };
      break;
    }
    case crudKeys.READ: {
      actions = {
        login: (loginData) => {
          dispatch(sendLoginRequest({
            key: crudKeys.READ,
            currentAction: crudActionsConstants.LOGIN,
            loginData: constructLoginData(loginData),
          }));
        },
      };
      break;
    }
    default:
  }

  return { ...typeState, ...actions };
};

export default useCrud;
