import Form from '../../components/Form';
import FileInput from '../../components/Input/FileInput';
import TextInput from '../../components/Input/TextInput';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import VALIDATIONS from '../../constants/validations';

export default function EditProfileForm({ initialState, submitCallback, isSubmitting }) {
  const {
    register,
    handleSubmit,
  } = useForm({ submitCallback });

  const {
    handlers: imageHandlers,
    state: imageState,
  } = register(
    'image',
    initialState.image,
  );

  const {
    handlers: usernameHandlers,
    state: usernameState,
  } = register(
    'username',
    initialState.username,
    {
      required: true,
      minLength: VALIDATIONS.USER.USERNAME_MIN_LENGTH,
    },
  );

  const {
    handlers: firstNameHandlers,
    state: firstNameState,
  } = register(
    'firstName',
    initialState.firstName,
    {
      required: true,
      minLength: VALIDATIONS.USER.FIRST_NAME_MIN_LENGTH,
    },
  );

  const {
    handlers: lastNameHandlers,
    state: lastNameState,
  } = register(
    'lastName',
    initialState.lastName,
    {
      required: true,
      minLength: VALIDATIONS.USER.LAST_NAME_MIN_LENGTH,
    },
  );

  const {
    handlers: emailHandlers,
    state: emailState,
  } = register(
    'email',
    initialState.email,
    {
      required: true,
      minLength: VALIDATIONS.USER.EMAIL_MIN_LENGTH,
    },
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FileInput
        handlers={imageHandlers}
        state={imageState}
      />

      <TextInput
        placeholder="Username"
        handlers={usernameHandlers}
        state={usernameState}
      />

      <TextInput
        placeholder="Email"
        handlers={emailHandlers}
        state={emailState}
      />

      <TextInput
        placeholder="First name"
        handlers={firstNameHandlers}
        state={firstNameState}
      />

      <TextInput
        placeholder="Last name"
        handlers={lastNameHandlers}
        state={lastNameState}
      />

      <Button
        submitButton
        caption="Update"
        isLoading={isSubmitting}
      />
    </Form>
  );
}
