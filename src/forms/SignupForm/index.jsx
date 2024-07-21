import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import VALIDATIONS from '../../constants/validations';
import Form from '../../components/Form';
import TextInput from '../../components/Input/TextInput';
import Button from '../../components/Button';
import { resetPasswordFields } from '../helpers/signupForm';
import ErrorMessage from '../../components/ErrorMessage';

export default function SignupForm({ onSignupSubmit, isSubmitting, error, passwordsNotMatching }) {
  const {
    register,
    handleSubmit,
    clearFieldValue,
  } = useForm({ submitCallback: onSignupSubmit });

  const { handlers: emailHandlers, state: emailState } = register('email', '', {
    required: true,
    email: true,
    minLength: VALIDATIONS.USER.EMAIL_MIN_LENGTH,
  });

  const {
    handlers: usernameHandlers,
    state: usernameState,
  } = register(
    'username',
    '',
    {
      required: true,
      minLength: VALIDATIONS.USER.USERNAME_MIN_LENGTH,
    },
  );

  const {
    handlers: firstNameHandlers,
    state: firstNameState,
  } = register(
    'firstName',
    '',
    {
      required: true,
      minLength: VALIDATIONS.USER.FIRST_NAME_MIN_LENGTH,
    },
  );

  const {
    handlers: lastNameHandlers,
    state: lastNameState,
  } = register(
    'lastName',
    '',
    {
      required: true,
      minLength: VALIDATIONS.USER.LAST_NAME_MIN_LENGTH,
    },
  );

  const {
    handlers: passwordHandlers,
    state: passwordState,
  } = register(
    'password',
    '',
    {
      required: true,
      minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH,
    },
  );

  const {
    handlers: confirmPasswordHandlers,
    state: confirmPasswordState,
  } = register(
    'confirmPassword',
    '',
    {
      required: true,
      minLength: VALIDATIONS.USER.PASSWORD_MIN_LENGTH,
    },
  );

  useEffect(() => {
    if (error || passwordsNotMatching) {
      resetPasswordFields(clearFieldValue);
    }
  }, [error, passwordsNotMatching]);

  return (
    <Form
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit}
      error={error}
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

      {passwordsNotMatching
        && <ErrorMessage message="Passwords not matching" />}

      <Button
        caption="Signup"
        submitButton
        isLoading={isSubmitting}
      />
    </Form>
  );
}
