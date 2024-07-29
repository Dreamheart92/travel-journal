import AuthLayout from '../../layouts/AuthLayout';
import FormProvider from '../../context/FormContext';

export default function AuthModule({ settings }) {
  const {
    title,
    caption,
    form,
  } = settings;

  return (
    <AuthLayout
      title={title}
      caption={caption}
      form={(
        <FormProvider>
          {form}
        </FormProvider>
      )}
    />
  );
}
