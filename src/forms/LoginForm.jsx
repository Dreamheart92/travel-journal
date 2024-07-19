import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useForm from '../hooks/useForm';

import { login, userActions } from '../store/userSlice';
import { storeUserData } from '../utility/storage';
import { PATHS } from '../constants/paths';

import VALIDATIONS from '../constants/validations';

import Form from '../components/Form';
import TextInput from '../components/Input/TextInput';
import Button from '../components/Button';
import constructLoginData from './helpers';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    clearFieldValue,
    formData: loginData,
    isSubmittedAndHasErrors,
  } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading, fetchData, fetchError } = useSelector((state) => state.user);

  const { handlers: emailHandlers, state: emailState } = register('email', '', { required: true, minLength: VALIDATIONS.USER.EMAIL_MIN_LENGTH, email: true });
  const { handlers: passwordHandlers, state: passwordState } = register('password', '', { required: true, minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH });

  useEffect(() => {
    if (loginData) {
      dispatch(login({ loginData: constructLoginData(loginData) }));
    }

    return () => dispatch(userActions.resetState());
  }, [loginData]);

  useEffect(() => {
    if (fetchData) {
      storeUserData(fetchData);
      navigate(PATHS.HOME);
    }
  }, [fetchData]);

  useEffect(() => {
    if (fetchError) {
      clearFieldValue('password');
    }
  }, [fetchError]);

  return (
    <Form
      onSubmit={handleSubmit}
      error={fetchError}
    >
      <TextInput
        isSubmittedAndHasErrors={isSubmittedAndHasErrors}
        handlers={emailHandlers}
        state={emailState}
        placeholder="Email"
      >
        Email
      </TextInput>

      <TextInput
        type="password"
        isSubmittedAndHasErrors={isSubmittedAndHasErrors}
        handlers={passwordHandlers}
        state={passwordState}
        placeholder="Password"
      />

      <Button
        isSubmitButton
        caption="Login"
        isLoading={isLoading}
      />
    </Form>
  );
}
