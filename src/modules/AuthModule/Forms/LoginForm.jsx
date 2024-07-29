import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import VALIDATIONS from '../../../constants/validations';
import { PATHS } from '../../../constants/paths';
import useForm from '../../../hooks/useForm';
import useAuth from '../../../hooks/useAuth';
import useRead from '../../../hooks/useRead';

export default function LoginForm() {
  const navigate = useNavigate();
  const [form] = useForm();
  const auth = useAuth();

  const {
    data: userData,
    loading: isSubmitting,
    error,
    success,
    login,
  } = useRead();

  const handleLoginSubmit = (loginData) => {
    login(loginData);
  };

  useEffect(() => {
    if (success) {
      auth.saveUser(userData);
      navigate(PATHS.HOME);
    }

    if (error) {
      form.resetField('password');
    }
  }, [success, error]);

  const disableSubmitButton = !form.isValidForm && form.hasBeenSubmitted;

  return (
    <Form
      submitCallback={handleLoginSubmit}
      error={error}
    >
      <Form.Input
        name="email"
        placeholder="Enter your email"
        inputType="text"
        validators={[
          {
            required: true,
            message: 'Email is required',
          },
          {
            minLength: VALIDATIONS.USER.EMAIL_MIN_LENGTH,
            message: `Email must be at least ${VALIDATIONS.USER.EMAIL_MIN_LENGTH} characters long`,
          },
          {
            email: true,
            message: 'Email is invalid',
          },
        ]}
      />

      <Form.Input
        name="password"
        placeholder="Enter your password"
        type="password"
        inputType="text"
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
      <Button
        submitButton
        caption="Login"
        disabled={disableSubmitButton}
        isLoading={isSubmitting}
      />
    </Form>
  );
}
