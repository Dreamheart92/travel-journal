import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useForm from '../hooks/useForm';
import useOnFetch from '../hooks/useOnFetch';

import { login } from '../services/authService';
import { storeUserData } from '../utility/storage';
import { PATHS } from '../constants/paths';
import Form from '../components/Form';
import VALIDATIONS from '../constants/validations';

import TextInput from '../components/Input/TextInput';
import Button from '../components/Button';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    clearFieldValue,
    formData: loginData,
  } = useForm();

  const {
    data: userData,
    error,
    isLoading,
    fetch,
  } = useOnFetch();

  const navigate = useNavigate();

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
  }, [userData]);

  useEffect(() => {
    if (error) {
      clearFieldValue('password');
    }
  }, [error]);

  return (
    <Form onSubmit={handleSubmit} error={error}>
      <TextInput  {...register("email", "",
        { required: true, minLength: VALIDATIONS.USER.EMAIL_MIN_LENGTH })}>
        Email
      </TextInput>

      <TextInput type="password" {...register("password", "", {
        required: true,
        minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH
      })}>Password</TextInput>

      <Button isLoading={isLoading}>Login</Button>
    </Form>
  )
}
