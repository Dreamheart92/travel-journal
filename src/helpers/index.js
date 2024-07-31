import moment from 'moment';

export const normalizeName = (value) => value[0].toUpperCase() + value.slice(1);

export const formatDate = (date) => moment(new Date(date)).format('MMMM Do YYYY');

export const convertToRelativeTime = (date) => moment(new Date(date)).fromNow();

export const splitByNewLine = (content) => content.split('\n');

export const formatCommentsCount = (comments) => `${comments.length} comment${comments.length !== 1 ? 's' : ''}`;

export const buildQueryString = (searchParams) => {
  const queries = [];

  searchParams.entries().forEach(([searchKey, searchValue]) => {
    queries.push(`${searchKey}=${searchValue}`);
  });

  const query = queries.length > 0 ? `?${queries.join('&')}` : '';
  return query;
};

export const buildJournalFormData = (journalData) => {
  const formData = new FormData();
  formData.append('image', journalData.image);
  formData.append('description', journalData.description);
  formData.append('title', journalData.title);
  formData.append('location', journalData.location);
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

export const buildErrorObject = (message) => ({
  error: true,
  message,
});
