import { useSelector } from 'react-redux';
import NavigationLink from '../../NavigationLink';
import { PATHS } from '../../../constants/paths';
import style from './index.module.css';
import UserNavigation from './UserNavigation';
import GuestNavigation from './GuestNavigation';
import { selectIsAuthenticated } from '../../../store/auth/selectors';

export default function NavigationMenu() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div>
      <ul className={style.navigation}>
        <NavigationLink to={PATHS.HOME}>Home</NavigationLink>
        <NavigationLink to={`${PATHS.CATALOGUE}`}>Journals</NavigationLink>
        {isAuthenticated ? <UserNavigation /> : <GuestNavigation />}
      </ul>
    </div>
  );
}
