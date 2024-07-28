import * as actionTypes from './types';

const contextActions = (dispatch) => {
  return {
    initFormState: (initialState) => {
      dispatch({ type: actionTypes.INIT_FORM_STATE, payload: { initialState } });
    },
    onChange: (event) => {
      dispatch({ type: actionTypes.HANDLE_CHANGE, payload: { event } });
    },
    onBlur: (event) => {
      dispatch({ type: actionTypes.HANDLE_BLUR, payload: { event } });
    },
    resetField: (fieldName) => {
      dispatch({ type: actionTypes.RESET_FIELD, payload: { fieldName } });
    },
  };
};

export default contextActions;
