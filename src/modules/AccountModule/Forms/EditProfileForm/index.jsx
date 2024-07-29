import Form from '../../../../components/Form';
import Button from '../../../../components/Button';
import VALIDATIONS from '../../../../constants/validations';

export default function EditProfileForm({ initialState, submitCallback, isSubmitting }) {
  return (
    <Form submitCallback={submitCallback}>
      <Form.Input
        name="image"
        initialValue={initialState.image}
        inputType="file"
        validators={[
          {
            required: true,
            message: 'Image is required',
          },
        ]}
      />

      <Form.Input
        name="username"
        placeholder="Username"
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

      <Form.Input
        name="firstName"
        placeholder="First Name"
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
      <Button
        submitButton
        caption="Update"
        isLoading={isSubmitting}
      />
    </Form>
  );
}
