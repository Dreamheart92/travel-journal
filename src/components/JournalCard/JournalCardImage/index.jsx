import PropTypes from 'prop-types';
import Image from '../../Image';

import style from '../index.module.css';

export default function JournalCardImage({ imageUrl }) {
  return (
    <div className={style['journal-image']}>
      <Image imageUrl={imageUrl} />
    </div>
  );
}

JournalCardImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
