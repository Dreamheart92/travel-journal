import { useRef, useState } from 'react';
import { normalizeName } from '../helpers';

const validateField = (value, validations, fieldName) => {
  const errors = {};

  Object.entries(validations).forEach(([validationType, requirement]) => {
    switch (validationType) {
      case 'required': {
        if (value.trim() === '' && requirement) {
          errors[validationType] = `${normalizeName(fieldName)} is required`;
        }
        break;
      }
      case 'minLength': {
        if (value.trim().length < requirement) {
          errors[validationType] = `${normalizeName(fieldName)} must be at least ${requirement} characters long`;
        }
        break;
      }

      case 'maxLength': {
        if (value.trim().length > requirement) {
          errors[validationType] = `${normalizeName(fieldName)} must not be more than ${requirement} characters`;
        }
        break;
      }
      case 'email': {
        const pattern = /^[a-zA-Z0-9]+@[a-z]+.[a-z]{2,5}$/;
        if (value.match(pattern) === null) {
          errors[validationType] = 'Email address is invalid';
        }
        break;
      }
      default:
    }
  });

  return Object.keys(errors).length > 0 ? errors : null;
};

const useForm = ({ initialState = {}, submitCallback } = {}) => {

  const [formState, setFormState] = useState(initialState);

  const [fieldErrors, setFieldErrors] = useState(null);
  const [isSubmittedAndHasErrors, setIsSubmittedAndHasErrors] = useState(false);

  const validators = useRef({});

  const runValidators = (fieldName, fieldValue) => {
    const fieldValidators = validators.current[fieldName];
    const currentFieldErrors = validateField(fieldValue, fieldValidators, fieldName);

    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: currentFieldErrors,
    }));
  };

  const register = (fieldName, fieldValue = '', validation = {}) => {
    if (typeof formState[fieldName] === 'undefined') {
      setFormState((prevFormState) => ({
        ...prevFormState,
        [fieldName]: { value: fieldValue, isDirty: false },
      }));

      validators.current[fieldName] = validation;
      runValidators(fieldName, fieldValue);
    }

    return {
      handlers: {
        onChange: (event) => {
          const value = fieldName === 'image' ? event.target.files[0] : event.target.value;

          setFormState((prevState) => ({
            ...prevState,
            [fieldName]: { ...prevState[fieldName], value },
          }));
          runValidators(fieldName, event.target.value);
        },
        onBlur: () => {
          setFormState((prevState) => ({
            ...prevState,
            [fieldName]: { ...prevState[fieldName], isDirty: true },
          }));
        },
      },
      state: {
        value: formState[fieldName]?.value,
        isDirty: formState[fieldName]?.isDirty,
        error: fieldErrors !== null ? fieldErrors[fieldName] || null : null,
        isSubmittedAndHasErrors,
      },
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmittedAndHasErrors(false);

    if (fieldErrors !== null) {
      const isValidForm = Object.values(fieldErrors).every((requirement) => requirement === null);

      if (isValidForm) {
        
      } else {
        setIsSubmittedAndHasErrors(true);
      }
    }
  };

  const clearFieldValue = (fieldName) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: { value: '', isDirty: false },
    }));

    runValidators(fieldName, '');
  };

  return {
    formState,
    register,
    handleSubmit,
    clearFieldValue,
  };
};

export default useForm;
