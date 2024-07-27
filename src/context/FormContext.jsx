import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

const validateField = (validations, fieldValue) => {
  const errors = [];

  validations.forEach((validationEntry) => {
    const [ruleEntry, messageEntry] = Object.entries(validationEntry);
    const [validation, validationRequirement] = ruleEntry;
    const errorMessage = messageEntry?.[1] || `${validation} error`;

    switch (validation) {
      case 'required': {
        if (validationRequirement && fieldValue.trim() === '') {
          errors.push(errorMessage);
        }
        break;
      }
      case 'minLength': {
        if (fieldValue.length < validationRequirement) {
          errors.push(errorMessage);
        }
        break;
      }
      case 'maxLength': {
        if (fieldValue.length > validationRequirement) {
          errors.push(errorMessage);
        }
        break;
      }
      case 'email': {
        const pattern = /^[a-zA-Z0-9]+@[a-z]+.[a-z]{2,5}$/;
        if (fieldValue.match(pattern) === null) {
          errors.push(errorMessage);
        }
        break;
      }
      default:
    }
  });

  return errors;
};

export const FormContext = createContext();

function FormProvider({ children }) {
  const [formState, setFormState] = useState();
  const [errors, setErrors] = useState();
  const [isValidForm, setIsValidForm] = useState(false);

  const setFormInitialState = useCallback((initialState) => {
    const initialErrorsState = {};

    Object.keys(initialState).forEach((fieldName) => {
      initialErrorsState[fieldName] = [];
    });

    setFormState(initialState);
    setErrors(initialErrorsState);
  }, []);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: { ...prevState[fieldName], state: { value: fieldValue, isDirty: true } },
    }));
  };

  const handleBlur = (event) => {
    const fieldName = event.target.name;

    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: {
        ...prevState[fieldName],
        state: {
          ...prevState[fieldName].state,
          isDirty: true,
        },
      },
    }));
  };

  useEffect(() => {
    if (formState) {
      const currentErrors = {};
      let isFormValid = true;

      Object.entries(formState).forEach(([fieldName, fieldData]) => {
        const { value: fieldValue } = fieldData.state;
        const { validators } = fieldData;

        const fieldErrors = validateField(validators, fieldValue);

        if (fieldErrors.length > 0 && isFormValid) {
          isFormValid = false;
        }

        currentErrors[fieldName] = fieldErrors;
      });

      setIsValidForm(isFormValid);
      setErrors(currentErrors);
    }
  }, [formState]);
  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
