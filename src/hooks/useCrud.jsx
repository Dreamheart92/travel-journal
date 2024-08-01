import { useDispatch, useSelector } from 'react-redux';
import crudKeys from '../store/crud/types';
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
import { crudActions } from '../store/crud';

const useCrud = (type) => {
  const dispatch = useDispatch();

  const typeState = useSelector((state) => state.crud[type]);

  let actions;

  switch (type) {
    case crudKeys.CREATE: {
      actions = {
        postJournal: (formData) => dispatch(postJournalRequest({
          key: crudKeys.CREATE,
          journalData: buildJournalFormData(formData),
        })),
        signup: (signupData) => dispatch(sendSignupRequest({
          key: crudKeys.CREATE,
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
            loginData: constructLoginData(loginData),
          }));
        },
      };
      break;
    }
    case crudKeys.UPDATE: {
      actions = {
        updateJournal: (journalData, journalId) => {
          dispatch(updateJournalRequest({
            key: crudKeys.UPDATE,
            journalMetaData: {
              journalData: buildJournalFormData(journalData),
              journalId,
            },
          }));
        },
        updateProfile: (userData) => {
          dispatch(updateProfileRequest({
            key: crudKeys.UPDATE,
            userData: buildUserFormData(userData),
          }));
        },
      };
      break;
    }
    case crudKeys.DELETE: {
      actions = {
        deleteJournal: (journalId) => (
          dispatch(deleteJournalRequest({
            key: crudKeys.DELETE,
            journalId,
          }))
        ),
      };
      break;
    }
    default:
  }

  actions.resetState = () => dispatch(crudActions.resetState());

  return { ...typeState, ...actions };
};

export default useCrud;
