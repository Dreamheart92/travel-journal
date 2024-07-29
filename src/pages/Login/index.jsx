import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import LoginForm from '../../modules/AuthModule/Forms/LoginForm';
import { crudActions } from '../../store/crud';
import crudKeys from '../../store/crud/types';
import AuthModule from '../../modules/AuthModule';

const settings = {
  title: 'Welcome Back, Explorer!',
  caption: 'Log in to your Travel Journal and continue your journey of sharing adventures and discovering new destinations.',
  form: <LoginForm />,
};

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
