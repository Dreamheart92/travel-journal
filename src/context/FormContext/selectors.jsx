const contextSelectors = (state) => ({
  formState: () => state.formState,
  getFieldError: (fieldName) => state.errors[fieldName],
  getFieldValue: (fieldName) => state.formState[fieldName].state.value,
  isSubmitted: () => state.isSubmitted,
  isValidForm: () => state.isValidForm,
  hasBeenSubmitted: () => state.hasBeenSubmitted,
});

export default contextSelectors;
