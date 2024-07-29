import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import VALIDATIONS from '../../../constants/validations';
import { selectReadState } from '../../../store/crud/selectors';
import crudKeys from '../../../store/crud/types';
import { PATHS } from '../../../constants/paths';
import { sendLoginRequest } from '../../../store/crud/services';
import crudActionsConstants from '../../../constants/crudActionsConstants';
import { constructLoginData } from '../../../forms/helpers/loginForm';
import useForm from '../../../hooks/useForm';
import useAuth from '../../../hooks/useAuth';

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = useForm();

  const auth = useAuth();

  const disableSubmitButton = !form.isValidForm && form.hasBeenSubmitted;

  const handleLoginSubmit = (formData) => {
    dispatch(sendLoginRequest({
      key: crudKeys.READ,
      currentAction: crudActionsConstants.LOGIN,
      loginData: constructLoginData(formData),
    }));
  };

  const {
    data: userData,
    loading: isSubmitting,
    error,
    success,
  } = useSelector(selectReadState);

  useEffect(() => {
    if (success) {
      auth.saveUser(userData);
      navigate(PATHS.HOME);
    }

    if (error) {
      form.resetField('password');
    }
  }, [success, error]);

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
