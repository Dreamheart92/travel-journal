export const resetPasswordFields = (clearFieldValue) => {
  clearFieldValue('password');
  clearFieldValue('confirmPassword');
};

export const constructSignupData = (signupData) => (
  {
    email: signupData.email,
    username: signupData.username,
    firstName: signupData.firstName,
    lastName: signupData.lastName,
    password: signupData.password,
  }
);
