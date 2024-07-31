import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Index from '../Forms/EditProfileForm';
import Container from '../../../components/Container';
import { buildUserFormInitialState } from '../../../helpers';
import { PATHS } from '../../../constants/paths';
import crudKeys from '../../../store/crud/types';
import { selectUser } from '../../../store/auth/selectors';
import { crudActions } from '../../../store/crud';
import FormProvider from '../../../context/FormContext';
import useAuth from '../../../hooks/useAuth';
import useCrud from '../../../hooks/useCrud';
import EditProfileForm from '../Forms/EditProfileForm';

export default function EditProfileModule() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useAuth();
  const user = useSelector(selectUser);

  const {
    data: updatedUserData,
    loading,
    success,
    error,
    updateProfile,
  } = useCrud(crudKeys.UPDATE);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudKeys.UPDATE }));

    if (success) {
      auth.updateUser(updatedUserData);
      navigate(PATHS.ACCOUNT);
    }
  }, [success]);

  const formInitialState = buildUserFormInitialState(user);

  const handleUpdateProfileSubmit = (userData) => {
    updateProfile(userData);
  };

  return (
    <FormProvider>
      <Container>
        <EditProfileForm
          error={error}
          initialState={formInitialState}
          submitCallback={handleUpdateProfileSubmit}
          isSubmitting={loading}
        />
      </Container>
    </FormProvider>
  );
}
