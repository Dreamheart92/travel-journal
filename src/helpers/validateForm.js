const validateField = (validations, fieldValue) => {
  const errors = [];

  validations.forEach((validationEntry) => {
    const [ruleEntry, messageEntry] = Object.entries(validationEntry);
    const [validation, validationRequirement] = ruleEntry;
    const errorMessage = messageEntry?.[1] || `${validation} error`;

    switch (validation) {
      case 'required': {
        if (fieldValue instanceof File) {
          if (fieldValue.name.trim() === '') {
            errors.push(errorMessage);
          }
          // If field value have formatted address location is not empty
          // Todo: Refactor for better error handling
        } else if (typeof fieldValue.formatted_address === 'undefined' && validationRequirement && fieldValue.trim() === '') {
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

export const getErrorsAndValidateForm = (formState) => {
  const errors = {};
  let isValidForm = true;

  Object.entries(formState).forEach(([fieldName, fieldData]) => {
    const { value: fieldValue } = fieldData.state;
    const { validators } = fieldData;

    const fieldErrors = validateField(validators, fieldValue);

    if (fieldErrors.length > 0 && isValidForm) {
      isValidForm = false;
    }

    errors[fieldName] = fieldErrors;
  });

  return {
    errors,
    isValidForm,
  };
};
