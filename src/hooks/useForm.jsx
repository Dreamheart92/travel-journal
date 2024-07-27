import { FormContext } from '../context/FormContext';
import { useContext } from 'react';

const useForm = () => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error('Use useForm inside a FormProvider');
  }

  return ['test'];
};

export default useForm;
