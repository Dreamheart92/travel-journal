import { NavLink } from 'react-router-dom';
import style from './index.module.css';

export default function NavigationLink(
  {
    to,
    filter = false,
    account = false,
    children,
    onClick,
    end = false,
  },
) {
  const linkClass = `${style.link} ${filter && style.filter} ${account && style.account}`;

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
