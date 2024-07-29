import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import LoginForm from '../../forms/LoginForm';
import AuthLayout from '../../layouts/AuthLayout';
import { crudActions } from '../../store/crud';
import crudKeys from '../../store/crud/types';
import FormProvider from '../../context/FormContext';

export default function Login() {
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(crudActions.resetState({ key: crudKeys.READ })));

  return (
    <AuthLayout
      title="Welcome Back, Explorer!"
      caption="Log in to your Travel Journal and continue your journey of sharing adventures and discovering new destinations."
      form={(
        <FormProvider>
          <LoginForm />
        </FormProvider>
      )}
    />
  );
}
