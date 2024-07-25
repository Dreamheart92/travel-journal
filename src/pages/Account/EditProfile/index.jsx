import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileForm from '../../../forms/EditProfileForm';
import Container from '../../../components/Container';
import { buildUserFormData, buildUserFormInitialState } from '../../../helpers';
import { PATHS } from '../../../constants/paths';
import { updateProfileRequest } from '../../../store/crud/thunks';
import crudConstants from '../../../constants/crudConstants';
import crudActionsConstants from '../../../constants/crudActionsConstants';
import { selectUpdateState } from '../../../store/crud/selectors';
import { deleteUserDataFromStorage, storeUserData } from '../../../helpers/storage';
import { selectUser } from '../../../store/auth/selectors';
import { useEffect } from 'react';
import { crudActions } from '../../../store/crud';

export default function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const {
    data: updatedUserData,
    loading,
    success,
  } = useSelector(selectUpdateState);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudConstants.UPDATE }));

    if (success) {
      deleteUserDataFromStorage();
      storeUserData(updatedUserData);
      navigate(PATHS.ACCOUNT);
    }
  }, [success]);

  const formInitialState = buildUserFormInitialState(user);

  const handleUpdateProfileSubmit = (userData) => {
    dispatch(updateProfileRequest({
      key: crudConstants.UPDATE,
      currentAction: crudActionsConstants.UPDATE_PROFILE,
      userData: buildUserFormData(userData),
    }));
  };

  return (
    <Container width="40%">
      <EditProfileForm
        initialState={formInitialState}
        submitCallback={handleUpdateProfileSubmit}
        isSubmitting={loading}
      />
    </Container>
  );
}
