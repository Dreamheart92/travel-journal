import moment from 'moment/moment';

export const formatDate = (date) => moment(new Date(date)).format('MMMM Do YYYY');

export const convertToRelativeTime = (date) => moment(new Date(date)).fromNow();
