import PropTypes from 'prop-types';

import style from './index.module.css';

export default function InfoBlock({ textAlign = 'center', title, caption }) {
  return (
    <div
      style={{ textAlign }}
      className={style['info-block']}
    >
      <h1>{title}</h1>
      <p>{caption}</p>
    </div>
  );
}

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
