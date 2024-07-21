import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoginForm from '../../forms/LoginForm';
import AuthLayout from '../../layouts/AuthLayout';
import useOnFetch from '../../hooks/useOnFetch';
import authService from '../../services/authService';
import { constructLoginData } from '../../forms/helpers/loginForm';
import { storeUserData } from '../../helpers/storage';
import { PATHS } from '../../constants/paths';

export default function Login() {
  const navigate = useNavigate();

  const {
    data: userData,
    isLoading,
    error,
    fetch: sendLoginRequest,
  } = useOnFetch();

  const handleLoginSubmit = (formData) => {
    sendLoginRequest(authService.login(constructLoginData(formData)));
  };

  useEffect(() => {
    if (userData) {
      storeUserData(userData.data);
      navigate(PATHS.HOME);
    }
  }, [userData]);

  return (
    <AuthLayout
      title="Welcome Back, Explorer!"
      caption="Log in to your Travel Journal and continue your journey of sharing adventures and discovering new destinations."
      form={(
        <LoginForm
          onLoginSubmit={handleLoginSubmit}
          isSubmitting={isLoading}
          error={error}
        />
      )}
    />
  );
}
