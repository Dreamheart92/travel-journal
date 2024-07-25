import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../forms/LoginForm';
import AuthLayout from '../../layouts/AuthLayout';
import { constructLoginData } from '../../forms/helpers/loginForm';
import crudConstants from '../../constants/crudConstants';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { selectReadState } from '../../store/crud/selectors';
import { sendLoginRequest } from '../../store/crud/thunks';
import { crudActions } from '../../store/crud';
import { PATHS } from '../../constants/paths';
import { storeUserData } from '../../helpers/storage';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: userData,
    loading,
    error,
    success,
  } = useSelector(selectReadState);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudConstants.READ }));

    if (success) {
      storeUserData(userData);
      navigate(PATHS.HOME);
    }
  }, [success]);

  const handleLoginSubmit = (formData) => {
    dispatch(sendLoginRequest({
      key: crudConstants.READ,
      currentAction: crudActionsConstants.LOGIN,
      loginData: constructLoginData(formData),
    }));
  };

  return (
    <AuthLayout
      title="Welcome Back, Explorer!"
      caption="Log in to your Travel Journal and continue your journey of sharing adventures and discovering new destinations."
      form={(
        <LoginForm
          onLoginSubmit={handleLoginSubmit}
          isSubmitting={loading}
          error={error}
        />
      )}
    />
  );
}
