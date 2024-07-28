import * as actionTypes from './types';

const contextActions = (dispatch) => {
  return {
    initFormState: (initialState) => {
      dispatch({ type: actionTypes.INIT_FORM_STATE, payload: { initialState } });
    },
  };
};

export default contextActions;
