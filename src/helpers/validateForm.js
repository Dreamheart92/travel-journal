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
        } else if (validationRequirement && fieldValue.trim() === '') {
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
