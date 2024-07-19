import PropTypes from 'prop-types';

const commentPropType = {
  _id: PropTypes.string,
  author: PropTypes.string,
  comment: PropTypes.string,
  likes: PropTypes.arrayOf(PropTypes.string),
  dislikes: PropTypes.arrayOf(PropTypes.string),
  totalLikes: PropTypes.number,
  createdAt: PropTypes.string
};

export default commentPropType;