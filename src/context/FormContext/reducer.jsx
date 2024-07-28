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
    case actionTypes.HANDLE_CHANGE: {
      const { event } = action.payload;
      const fieldName = event.target.name;

      const fieldValue = event.target.type === 'file' ? event.target.files[0] : event.target.value;

      const { formState } = state;

      formState[fieldName].state = { value: fieldValue, isDirty: true };

      const { errors, isValidForm } = getErrorsAndValidateForm(state.formState);

      return {
        ...state,
        errors,
        formState,
        isValidForm,
      };
    }
}

export default formReducer;
