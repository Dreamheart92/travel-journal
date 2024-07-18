import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import style from './index.module.css';

export default function NavigationLink({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${style.link} ${isActive && to !== '' ? style.active : ''}`}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
