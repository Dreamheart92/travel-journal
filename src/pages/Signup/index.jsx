import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOnFetch from '../../hooks/useOnFetch';
import AuthLayout from '../../layouts/AuthLayout';
import SignupForm from '../../forms/SignupForm';
import { constructSignupData } from '../../forms/helpers/signupForm';
import { storeUserData } from '../../helpers/storage';
import { PATHS } from '../../constants/paths';
import authService from '../../services/authService';

export default function Signup() {
  const navigate = useNavigate();

  const {
    data: success,
    isLoading,
    error,
    fetch: sendSignupRequest,
  } = useOnFetch();

  const [passwordsNotMatching, setPasswordsNotMatching] = useState(false);

  const handleSignupSubmit = (signupData) => {
    setPasswordsNotMatching(false);

    if (signupData.password !== signupData.confirmPassword) {
      setPasswordsNotMatching(true);
      return;
    }

    sendSignupRequest(authService.signup(constructSignupData(signupData)));
  };

  useEffect(() => {
    if (success) {
      storeUserData(success.data);
      navigate(PATHS.HOME);
    }
  }, [success]);

  return (
    <AuthLayout
      title="Join the Adventure!"
      caption="Sign up to create your Travel Journal, share your stories, and explore a world of new destinations with fellow travelers."
      form={(
        <SignupForm
          onSignupSubmit={handleSignupSubmit}
          isSubmitting={isLoading}
          error={passwordsNotMatching ? null : error}
          passwordsNotMatching={passwordsNotMatching}
        />
      )}
    />
  );
}
