import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import style from './index.module.css';

export default function NavigationLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${style.link} ${isActive && to !== '' ? style.active : ''}`}
    >
      {children}
    </NavLink>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
