import PropTypes from 'prop-types';

import style from './index.module.css';

export default function Container({ children, width = '100%', heading }) {
  return (
    <div
      style={{ width }}
      className={style.container}
    >
      {heading
        && <h1 className={style.heading}>{heading}</h1>}

      {children}
    </div>
  );
}

Container.propTypes = {
  heading: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
};
