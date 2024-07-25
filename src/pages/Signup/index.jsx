import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import SignupForm from '../../forms/SignupForm';
import { constructSignupData } from '../../forms/helpers/signupForm';
import crudConstants from '../../constants/crudConstants';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { sendSignupRequest } from '../../store/crud/thunks';
import { selectCreateState } from '../../store/crud/selectors';
import { crudActions } from '../../store/crud';
import { PATHS } from '../../constants/paths';
import { storeUserData } from '../../helpers/storage';

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: userData,
    loading,
    error,
    success,
  } = useSelector(selectCreateState);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudConstants.CREATE }));

    if (success) {
      storeUserData(userData);
      navigate(PATHS.HOME);
    }
  }, [success]);

  const [passwordsNotMatching, setPasswordsNotMatching] = useState(false);

  const handleSignupSubmit = (signupData) => {
    setPasswordsNotMatching(false);

    if (signupData.password !== signupData.confirmPassword) {
      setPasswordsNotMatching(true);
      return;
    }

    dispatch(sendSignupRequest({
      key: crudConstants.CREATE,
      currentAction: crudActionsConstants.SIGNUP,
      signupData: constructSignupData(signupData),
    }));
  };

  return (
    <AuthLayout
      title="Join the Adventure!"
      caption="Sign up to create your Travel Journal, share your stories, and explore a world of new destinations with fellow travelers."
      form={(
        <SignupForm
          onSignupSubmit={handleSignupSubmit}
          isSubmitting={loading}
          error={passwordsNotMatching ? null : error}
          passwordsNotMatching={passwordsNotMatching}
        />
      )}
    />
  );
}
