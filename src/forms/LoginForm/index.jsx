import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import VALIDATIONS from '../../constants/validations';
import Form from '../../components/Form';
import TextInput from '../../components/Input/TextInput';
import Button from '../../components/Button';

export default function LoginForm({ onLoginSubmit, isSubmitting, error }) {
  const {
    register,
    handleSubmit,
    clearFieldValue,
    isSubmittedAndHasErrors,
  } = useForm({ submitCallback: onLoginSubmit });

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
        isLoading={isSubmitting}
      />
    </Form>
  );
}
