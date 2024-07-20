import PropTypes from 'prop-types';

import Image from '../Image';
import JournalContent from '../JournalContent';

import style from './index.module.css';

export default function Journal(
  {
    title,
    location,
    author,
    date,
    imageUrl,
    description,
  },
) {
  return (
    <div className={style.container}>
      <Image imageUrl={imageUrl} />

      <JournalContent
        title={title}
        date={date}
        content={description}
        author={author}
        location={location}
      />
    </div>
  );
}

Journal.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
