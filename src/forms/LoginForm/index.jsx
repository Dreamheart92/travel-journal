import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useOnFetch from '../../hooks/useOnFetch';
import useForm from '../../hooks/useForm';
import authService from '../../services/authService';

import { storeUserData } from '../../helpers/storage';
import { PATHS } from '../../constants/paths';

import VALIDATIONS from '../../constants/validations';

import Form from '../../components/Form';
import TextInput from '../../components/Input/TextInput';
import Button from '../../components/Button';
import { constructLoginData } from '../helpers/helpers';

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    clearFieldValue,
    formData: loginData,
    isSubmittedAndHasErrors,
  } = useForm();

  const {
    data: userData,
    isLoading,
    error,
    fetch,
  } = useOnFetch();

  const {
    handlers: emailHandlers,
    state: emailState,
  } = register('email', '', {
    required: true,
    minLength: VALIDATIONS.USER.EMAIL_MIN_LENGTH,
    email: true,
  });

  const {
    handlers: passwordHandlers,
    state: passwordState,
  } = register('password', '', {
    required: true,
    minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH,
  });

  useEffect(() => {
    if (loginData) {
      fetch(authService.login(constructLoginData(loginData)));
    }
  }, [loginData]);

  useEffect(() => {
    if (userData) {
      storeUserData(userData.data);
      navigate(PATHS.HOME);
    }
  }, [userData]);

  useEffect(() => {
    if (error) {
      clearFieldValue('password');
    }
  }, [error]);

  return (
    <Form
      onSubmit={handleSubmit}
      error={error}
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
        submitButton
        caption="Login"
        isLoading={isLoading}
      />
    </Form>
  );
}
