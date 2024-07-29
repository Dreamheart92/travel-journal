import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileForm from '../Forms/EditProfileForm';
import Container from '../../../components/Container';
import { buildUserFormData, buildUserFormInitialState } from '../../../helpers';
import { PATHS } from '../../../constants/paths';
import { updateProfileRequest } from '../../../store/crud/services';
import crudKeys from '../../../store/crud/types';
import crudActionsConstants from '../../../constants/crudActionsConstants';
import { selectUpdateState } from '../../../store/crud/selectors';
import { selectUser } from '../../../store/auth/selectors';
import { crudActions } from '../../../store/crud';
import FormProvider from '../../../context/FormContext';
import useAuth from '../../../hooks/useAuth';

export default function EditProfileModule() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useAuth();

  const user = useSelector(selectUser);

  const {
    data: updatedUserData,
    loading,
    success,
  } = useSelector(selectUpdateState);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudKeys.UPDATE }));

    if (success) {
      auth.updateUser(updatedUserData);
      navigate(PATHS.ACCOUNT);
    }
  }, [success]);

  const formInitialState = buildUserFormInitialState(user);

  const handleUpdateProfileSubmit = (userData) => {
    dispatch(updateProfileRequest({
      key: crudKeys.UPDATE,
      currentAction: crudActionsConstants.UPDATE_PROFILE,
      userData: buildUserFormData(userData),
    }));
  };

  return (
    <FormProvider>
      <Container width="40%">
        <EditProfileForm
          initialState={formInitialState}
          submitCallback={handleUpdateProfileSubmit}
          isSubmitting={loading}
        />
      </Container>
    </FormProvider>
  );
}
