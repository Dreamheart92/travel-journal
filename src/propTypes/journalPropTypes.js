import PropTypes from 'prop-types';
import commentPropTypes from './commentPropTypes';

const journalPropTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  author: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.date,
  destination: PropTypes.string,
  createdAt: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.shape(commentPropTypes)),
};

export default journalPropTypes;
