import LoginForm from '../../forms/LoginForm.jsx';
import AuthLayout from '../../layouts/AuthLayout';

export default function Login() {
  return (
    <AuthLayout
      title="Welcome Back, Explorer!"
      caption="Log in to your Travel Journal and continue your journey of sharing adventures and discovering new destinations."
      form={<LoginForm />}
    >
      <p>Login</p>
    </AuthLayout>
  );
}
