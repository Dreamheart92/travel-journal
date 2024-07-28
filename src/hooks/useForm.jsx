import { useFormContext } from '../context/FormContext';

const useForm = () => {
  const { formContextActions, formContextSelectors } = useFormContext();

  return [{
    isValidForm: formContextSelectors.isValidForm(),
    hasBeenSubmitted: formContextSelectors.hasBeenSubmitted(),
    resetField: formContextActions.resetField,
  }];
};

export default useForm;
