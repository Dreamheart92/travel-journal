import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import useCrud from '../../../hooks/useCrud';
import useAuth from '../../../hooks/useAuth';

import { PATHS } from '../../../constants/paths';
import VALIDATIONS from '../../../constants/validations';

import Form from '../../../components/Form';
import Button from '../../../components/Button';
import { CRUD_STATE_KEYS } from '../../../constants/redux';

export default function SignupForm() {
  const [form] = useForm();

  const navigate = useNavigate();

  const auth = useAuth();

  const {
    data: userData,
    loading,
    success,
    error,
    signup,
  } = useCrud(CRUD_STATE_KEYS.CREATE);

  useEffect(() => {
    if (success) {
      auth.saveUser(userData);
      navigate(PATHS.HOME);
    }

    if (error) {
      form.resetField('password');
      form.resetField('confirmPassword');
    }
  }, [success, error]);

  const [passwordsMatching, setPasswordsMatching] = useState(true);

  const handleSignupSubmit = (signupData) => {
    const { password, confirmPassword } = signupData;

    if (password !== confirmPassword) {
      setPasswordsMatching(false);
      form.resetField('password');
      form.resetField('confirmPassword');
      return;
    }

    setPasswordsMatching(true);
    signup(signupData);
  };

  const requestError = !passwordsMatching
    ? { error: true, message: 'Passwords not matching' }
    : error;

  const disableSubmitButton = !form.isValidForm && form.hasBeenSubmitted;

  return (
    <Form
      submitCallback={handleSignupSubmit}
      error={requestError}
    >
      <Form.Input
        name="email"
        placeholder="Email"
        inputType="text"
        validators={[
          {
            required: true,
            message: 'Email is required',
          },
          {
            email: true,
            message: 'Email address is invalid',
          },
        ]}
      />

      <Form.Input
        name="username"
        placeholder="Username"
        inputType="text"
        validators={[
          {
            required: true,
            message: 'Username is required',
          },
          {
            minLength: VALIDATIONS.USER.USERNAME_MIN_LENGTH,
            message: `Username must be at least ${VALIDATIONS.USER.USERNAME_MIN_LENGTH} characters long`,
          },
        ]}
      />

      <Form.Input
        name="firstName"
        placeholder="First Name"
        inputType="text"
        validators={[
          {
            required: true,
            message: 'First Name is required',
          },
          {
            minLength: VALIDATIONS.USER.FIRST_NAME_MIN_LENGTH,
            message: `First Name must be at least ${VALIDATIONS.USER.FIRST_NAME_MIN_LENGTH} characters long`,
          },
        ]}
      />

      <Form.Input
        name="lastName"
        placeholder="Last Name"
        inputType="text"
        validators={[
          {
            required: true,
            message: 'Last Name is required',
          },
          {
            minLength: VALIDATIONS.USER.LAST_NAME_MIN_LENGTH,
            message: `Last Name must be at least ${VALIDATIONS.USER.LAST_NAME_MIN_LENGTH} characters long`,
          },
        ]}
      />

      <Form.Input
        name="password"
        placeholder="Password"
        inputType="text"
        type="password"
        validators={[
          {
            required: true,
            message: 'Password is required',
          },
          {
            minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH,
            message: `Password must be at least ${VALIDATIONS.USER.PASSWORD_MIN_LENGTH} characters long`,
          },
        ]}
      />

      <Form.Input
        name="confirmPassword"
        placeholder="Confirm Password"
        inputType="text"
        type="password"
        validators={[
          {
            required: true,
            message: 'Confirm Password is required',
          },
          {
            minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH,
            message: `Confirm Password must be at least ${VALIDATIONS.USER.PASSWORD_MIN_LENGTH} characters long`,
          },
        ]}
      />

      <Button
        submitButton
        caption="Sign up"
        disabled={disableSubmitButton}
        isLoading={loading}
      />

    </Form>
  );
}
