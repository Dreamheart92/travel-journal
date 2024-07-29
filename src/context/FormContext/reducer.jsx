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
    case actionTypes.HANDLE_BLUR: {
      const { event } = action.payload;
      const fieldName = event.target.name;

      const { isDirty } = state.formState[fieldName].state;

      if (!isDirty) {
        return {
          ...state,
          formState: {
            ...state.formState,
            [fieldName]:
              {
                ...state.formState[fieldName],
                state: { value: state.formState[fieldName].state.value, isDirty: true },
              },
          },
        };
      }
      return state;
    }
    case actionTypes.RESET_FIELD: {
      const { fieldName } = action.payload;

      return {
        ...state,
        errors: {
          ...state.errors,
          [fieldName]: [],
        },
        formState: {
          ...state.formState,
          [fieldName]: {
            ...state.formState[fieldName],
            state: { value: '', isDirty: false },
          },
        },
        isSubmitted: false,
        isValidForm: false,
      };
    }
    case actionTypes.HANDLE_SUBMIT: {
      return {
        ...state,
        isSubmitted: true,
        hasBeenSubmitted: true,
      };
    }
    default:
      return state;
  }
}

export default formReducer;
