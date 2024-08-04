export const buildJournalFormData = (journalData) => {
  const formData = new FormData();
  formData.append('image', journalData.image);
  formData.append('description', journalData.description);
  formData.append('title', journalData.title);
  formData.append('location', JSON.stringify(journalData.location));
  formData.append('date', journalData.date);
  formData.append('destination', journalData.destination);

  return formData;
};

export const buildUserFormData = (userData) => {
  const formData = new FormData();
  formData.append('image', userData.image);
  formData.append('username', userData.username);
  formData.append('firstName', userData.firstName);
  formData.append('lastName', userData.lastName);
  formData.append('email', userData.email);

  return formData;
};

export const buildFormInitialState = (journal) => ({
  title: journal?.title || '',
  image: journal?.imageUrl || '',
  location: journal?.location || '',
  date: journal?.date || '',
  description: journal?.description || '',
  destination: journal?.destination?._id || '',
});

export const buildUserFormInitialState = (user) => ({
  email: user?.email || '',
  username: user?.username || '',
  firstName: user?.firstName || '',
  lastName: user?.lastName || '',
  image: user?.imageUrl || '',
});

export const constructLoginData = (formData) => ({
  email: formData.email,
  password: formData.password,
});

export const constructSignupData = (signupData) => (
  {
    email: signupData.email,
    username: signupData.username,
    firstName: signupData.firstName,
    lastName: signupData.lastName,
    password: signupData.password,
  }
);
