import PropTypes from 'prop-types';

export default function Image({ imageUrl }) {
  return (
    <img src={imageUrl} alt="" />
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
