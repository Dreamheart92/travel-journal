import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import crudConstants from '../../constants/crudConstants';
import { crudActions } from '../../store/crud/index';

import AuthLayout from '../../layouts/AuthLayout';
import SignupForm from '../../forms/SignupForm';
import FormProvider from '../../context/FormContext';

export default function Signup() {
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(crudActions.resetState({ key: crudConstants.CREATE })));

  return (
    <AuthLayout
      title="Join the Adventure!"
      caption="Sign up to create your Travel Journal, share your stories, and explore a world of new destinations with fellow travelers."
      form={(
        <FormProvider>
          <SignupForm />
        </FormProvider>
      )}
    />
  );
}
