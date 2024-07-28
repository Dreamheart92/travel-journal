import * as actionTypes from './types';
import { getErrorsAndValidateForm } from '../../helpers/validateForm';

function formReducer(state, action) {
  switch (action.type) {
    case actionTypes.INIT_FORM_STATE: {
      const { initialState } = action.payload;

      const { errors } = getErrorsAndValidateForm(initialState);

      return {
        ...state,
        formState: initialState,
        errors,
      };
    }
}

export default formReducer;
