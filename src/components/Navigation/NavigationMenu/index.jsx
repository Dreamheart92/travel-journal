import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import NavigationLink from '../NavigationLink';
import { PATHS } from '../../../constants/paths';

import style from './index.module.css';
import UserNavigation from './UserNavigation';
import GuestNavigation from './GuestNavigation';

export default function NavigationMenu({ onLogout }) {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <ul className={style.navigation}>
        <NavigationLink to={PATHS.HOME}>Home</NavigationLink>
        <NavigationLink to={`${PATHS.CATALOGUE}`}>Journals</NavigationLink>
        {user ? <UserNavigation onLogout={onLogout} /> : <GuestNavigation />}
      </ul>
    </div>
  );
}

NavigationMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
