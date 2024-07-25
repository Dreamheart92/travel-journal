import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import style from './index.module.css';

export default function NavigationLink(
  {
    to,
    filter = false,
    children,
    onClick,
    end = false,
  },
) {
  const linkClass = `${style.link} ${filter ? style.filter : ''}`;

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${linkClass} ${isActive && to !== '' ? style.active : ''}`}
      onClick={onClick}
      end={end}
    >
      {children}
    </NavLink>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  filter: PropTypes.bool,
  end: PropTypes.bool,
};
