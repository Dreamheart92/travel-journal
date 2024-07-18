import NavigationLink from '../NavigationLink';
import { PATHS } from '../../../constants/paths';

import style from './index.module.css';
import UserNavigation from './UserNavigation';
import GuestNavigation from './GuestNavigation';

export default function NavigationMenu() {
  return (
    <div>
      <ul className={style.navigation}>
        <NavigationLink to={PATHS.HOME}>Home</NavigationLink>
        <NavigationLink to={PATHS.CATALOGUE}>Journals</NavigationLink>
        <UserNavigation />
        <GuestNavigation />
      </ul>
    </div>
  );
}
