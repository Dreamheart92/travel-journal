export const resetPasswordFields = (clearFieldValue) => {
  clearFieldValue('password');
  clearFieldValue('confirmPassword');
};

export const constructSignupData = (signupData) => {
  const data = {
    email: signupData.email.value,
    username: signupData.username.value,
    firstName: signupData.firstName.value,
    lastName: signupData.lastName.value,
    password: signupData.password.value,
  };

  return data;
};
