import PropTypes from 'prop-types';

import style from './index.module.css';

export default function Image({ imageUrl }) {
  return (
    <img
      className={style.image}
      src={imageUrl}
      alt=""
    />
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
