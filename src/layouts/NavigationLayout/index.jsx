import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import style from './index.module.css';

export default function NavigationLayout({ children }) {
  const location = useLocation();

  const isOnHomePage = location.pathname === '/';
  const headerClass = `${style.header} ${isOnHomePage ? style['home-page'] : ''}`;

  return (
    <header className={headerClass}>
      {children}
    </header>
  );
}

NavigationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
