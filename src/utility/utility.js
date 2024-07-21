import moment from 'moment';

export const normalizeName = (value) => value[0].toUpperCase() + value.slice(1);

export const formatDate = (date) => moment(new Date(date)).format('MMMM Do YYYY');

export const convertToRelativeTime = (date) => moment(new Date(date)).fromNow();
