import Form from '../../../../components/Form';
import Button from '../../../../components/Button';
import VALIDATIONS from '../../../../constants/validations';
import style from './index.module.css';
import useForm from '../../../../hooks/useForm';

export default function EditProfileForm(
  {
    initialState,
    submitCallback,
    isSubmitting,
    error,
  },
) {
  const [form] = useForm();

  const disableSubmitButton = !form.isValidForm && form.hasBeenSubmitted;

  return (
    <Form
      submitCallback={submitCallback}
      error={error}
    >

      <div className={style['file-wrapper']}>
        <Form.Input
          name="image"
          userProfileImage
          initialValue={initialState.image}
          inputType="file"
        />
      </div>

      <div className={style.wrapper}>
        <Form.Input
          name="username"
          placeholder="Username"
          label="Username"
          inputType="text"
          initialValue={initialState.username}
          validators={[
            {
              required: true,
              message: 'Username is required',
            },
            {
              minLength: VALIDATIONS.USER.USERNAME_MIN_LENGTH,
              message: `Username must be at least ${VALIDATIONS.USER.USERNAME_MIN_LENGTH} characters long`,
            },
          ]}
        />

        <Form.Input
          name="email"
          placeholder="Email"
          label="Email"
          inputType="text"
          initialValue={initialState.email}
          validators={[
            {
              required: true,
              message: 'Email is required',
            },
            {
              email: true,
              message: 'Email address is invalid',
            },
          ]}
        />
      </div>

      <div className={style.wrapper}>
        <Form.Input
          name="firstName"
          placeholder="First Name"
          label="First name"
          inputType="text"
          initialValue={initialState.firstName}
          validators={[
            {
              required: true,
              message: 'First Name is required',
            },
            {
              minLength: VALIDATIONS.USER.FIRST_NAME_MIN_LENGTH,
              message: `First Name must be at least ${VALIDATIONS.USER.FIRST_NAME_MIN_LENGTH} characters long`,
            },
          ]}
        />

        <Form.Input
          name="lastName"
          placeholder="Last Name"
          label="Last name"
          inputType="text"
          initialValue={initialState.lastName}
          validators={[
            {
              required: true,
              message: 'Last Name is required',
            },
            {
              minLength: VALIDATIONS.USER.LAST_NAME_MIN_LENGTH,
              message: `Last Name must be at least ${VALIDATIONS.USER.LAST_NAME_MIN_LENGTH} characters long`,
            },
          ]}
        />
      </div>

      <Button
        submitButton
        caption="Update"
        isLoading={isSubmitting}
        disabled={disableSubmitButton}
      />
    </Form>
  );
}
