import {
  createContext,
  useContext,
  useMemo, useReducer,
} from 'react';

import formReducer from './reducer';
import contextActions from './actions';
import contextSelectors from './selectors';

export const FormContext = createContext();

const initialState = {
  formState: {},
  errors: {},
  isValidForm: false,
  isSubmitted: false,
  hasBeenSubmitted: false,
};

function FormProvider({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const contextValue = useMemo(() => [state, dispatch], [state]);

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  const [state, dispatch] = context;
  const formContextActions = contextActions(dispatch);
  const formContextSelectors = contextSelectors(state);

  return { state, formContextActions, formContextSelectors };
}

export default FormProvider;
