import PropTypes from 'prop-types';

import style from './index.module.css';

export default function NavigationLayout({ children }) {
  return (
    <header className={style.header}>
      {children}
    </header>
  );
}

NavigationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
