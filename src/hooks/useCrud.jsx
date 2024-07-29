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
};

export default useCrud;
