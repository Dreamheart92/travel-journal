import AuthLayout from '../../layouts/AuthLayout';

import SignupForm from '../../forms/SignupForm';

export default function Signup() {
  return (
    <AuthLayout
      title="Join the Adventure!"
      caption="Sign up to create your Travel Journal, share your stories, and explore a world of new destinations with fellow travelers."
      form={<SignupForm />}
    />
  );
}
