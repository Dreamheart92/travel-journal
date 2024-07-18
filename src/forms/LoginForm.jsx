import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useForm from '../hooks/useForm';
import useOnFetch from '../hooks/useOnFetch';

import { login } from '../services/authService';
import { storeUserData } from '../utility/storage';
import { PATHS } from '../constants/paths';

import VALIDATIONS from '../constants/validations';

import Form from '../components/Form';
import TextInput from '../components/Input/TextInput';
import Button from '../components/Button';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    clearFieldValue,
    formData: loginData,
    isSubmittedAndHasErrors,
  } = useForm();

  const {
    data: userData,
    error,
    isLoading,
    fetch,
  } = useOnFetch();

  const navigate = useNavigate();

  const { handlers: emailHandlers, state: emailState } = register('email', '', { required: true, minLength: VALIDATIONS.USER.EMAIL_MIN_LENGTH });
  const { handlers: passwordHandlers, state: passwordState } = register('password', '', { required: true, minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH });

  useEffect(() => {
    if (loginData) {
      const data = {
        email: loginData.email.value,
        password: loginData.password.value,
      };

      fetch(login(data));
    }
  }, [loginData]);

  useEffect(() => {
    if (userData) {
      storeUserData(userData.data);
      navigate(PATHS.HOME);
    }
  }, [userData, navigate]);

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
      >
        Email
      </TextInput>

      <TextInput
        type="password"
        isSubmittedAndHasErrors={isSubmittedAndHasErrors}
        handlers={passwordHandlers}
        state={passwordState}
      >
        Password
      </TextInput>

      <Button
        isSubmitButton
        caption="Login"
        isLoading={isLoading}
      />
    </Form>
  );
}
