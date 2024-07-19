const constructLoginData = (loginData) => {
  const data = {
    email: loginData.email.value,
    password: loginData.password.value,
  };
  return data;
};

export default constructLoginData;
