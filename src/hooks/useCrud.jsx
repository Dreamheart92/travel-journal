import { useDispatch, useSelector } from 'react-redux';
import { CRUD_STATE_KEYS } from '../constants/redux';
import {
  buildJournalFormData,
  buildUserFormData,
  constructLoginData,
  constructSignupData,
} from '../utils/formDataUtils';

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
    case CRUD_STATE_KEYS.CREATE: {
      actions = {
        postJournal: (formData) => dispatch(postJournalRequest({
          key: CRUD_STATE_KEYS.CREATE,
          journalData: buildJournalFormData(formData),
        })),
        signup: (signupData) => dispatch(sendSignupRequest({
          key: CRUD_STATE_KEYS.CREATE,
          signupData: constructSignupData(signupData),
        })),
      };
      break;
    }
    case CRUD_STATE_KEYS.READ: {
      actions = {
        login: (loginData) => {
          dispatch(sendLoginRequest({
            key: CRUD_STATE_KEYS.READ,
            loginData: constructLoginData(loginData),
          }));
        },
      };
      break;
    }
    case CRUD_STATE_KEYS.UPDATE: {
      actions = {
        updateJournal: (journalData, journalId) => {
          dispatch(updateJournalRequest({
            key: CRUD_STATE_KEYS.UPDATE,
            journalMetaData: {
              journalData: buildJournalFormData(journalData),
              journalId,
            },
          }));
        },
        updateProfile: (userData) => {
          dispatch(updateProfileRequest({
            key: CRUD_STATE_KEYS.UPDATE,
            userData: buildUserFormData(userData),
          }));
        },
      };
      break;
    }
    case CRUD_STATE_KEYS.DELETE: {
      actions = {
        deleteJournal: ({ journalId, destinationId }) => (
          dispatch(deleteJournalRequest({
            key: CRUD_STATE_KEYS.DELETE,
            journalId,
            destinationId,
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
