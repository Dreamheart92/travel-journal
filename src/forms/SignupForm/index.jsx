import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { storeUserData } from '../../utility/storage';
import { PATHS } from '../../constants/paths';
import useOnFetch from '../../hooks/useOnFetch';
import { constructSignupData, resetPasswordFields } from '../helpers/signupFormHelpers';
import VALIDATIONS from '../../constants/validations';
import Form from '../../components/Form';
import authService from '../../services/authService';
import TextInput from '../../components/Input/TextInput';
import ErrorMessage from '../../components/ErrorMessage';
import Button from '../../components/Button';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    clearFieldValue,
    formData: signupData,
  } = useForm();

  const {
    data,
    isLoading,
    error,
    fetch,
  } = useOnFetch();

  const [isPasswordsMatching, setIsPasswordsMatching] = useState(null);

  const navigate = useNavigate();

  const { handlers: emailHandlers, state: emailState } = register('email', '', { required: true, email: true, minLength: VALIDATIONS.USER.EMAIL_MIN_LENGTH });
  const { handlers: usernameHandlers, state: usernameState } = register('username', '', { required: true, minLength: VALIDATIONS.USER.USERNAME_MIN_LENGTH });
  const { handlers: firstNameHandlers, state: firstNameState } = register('firstName', '', { required: true, minLength: VALIDATIONS.USER.FIRST_NAME_MIN_LENGTH });
  const { handlers: lastNameHandlers, state: lastNameState } = register('lastName', '', { required: true, minLength: VALIDATIONS.USER.LAST_NAME_MIN_LENGTH });
  const { handlers: passwordHandlers, state: passwordState } = register('password', '', { required: true, minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH });
  const { handlers: confirmPasswordHandlers, state: confirmPasswordState } = register('confirmPassword', '', { required: true, minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH });

  useEffect(() => {
    if (signupData) {
      if (signupData.password.value !== signupData.confirmPassword.value) {
        setIsPasswordsMatching(false);
        resetPasswordFields(clearFieldValue);
      } else {
        fetch(authService.signup(constructSignupData(signupData)));
      }
    }
  }, [signupData]);

  useEffect(() => {
    if (data) {
      storeUserData(data);
      navigate(PATHS.HOME);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setIsPasswordsMatching(null);
      resetPasswordFields(clearFieldValue);
    }
  }, [error]);

  return (
    <Form
      onSubmit={handleSubmit}
      error={isPasswordsMatching === null && error ? error : null}
    >

      <TextInput
        handlers={emailHandlers}
        state={emailState}
        placeholder="Email"
      />

      <TextInput
        handlers={usernameHandlers}
        state={usernameState}
        placeholder="Username"
      />

      <TextInput
        handlers={firstNameHandlers}
        state={firstNameState}
        placeholder="First name"
      />

      <TextInput
        handlers={lastNameHandlers}
        state={lastNameState}
        placeholder="Last name"
      />

      <TextInput
        handlers={passwordHandlers}
        state={passwordState}
        type="password"
        placeholder="Password"
      />

      <TextInput
        handlers={confirmPasswordHandlers}
        state={confirmPasswordState}
        type="password"
        placeholder="Confirm password"
      />

      {isPasswordsMatching === false
        && <ErrorMessage message="Passwords not matching" />}

      <Button
        caption="Signup"
        submitButton
        isLoading={isLoading}
      />
    </Form>
  );
}
