import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const FormContext = createContext();

function FormProvider({ children }) {
  const [formState, setFormState] = useState();
  const [errors, setErrors] = useState();
  const [isValidForm, setIsValidForm] = useState(false);
  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
