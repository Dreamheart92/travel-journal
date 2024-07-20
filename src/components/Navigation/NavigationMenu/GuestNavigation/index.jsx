import NavigationLink from '../../../NavigationLink';
import { PATHS } from '../../../../constants/paths';

export default function GuestNavigation() {
  return (
    <>
      <NavigationLink to={PATHS.LOGIN}>Login</NavigationLink>
      <NavigationLink to={PATHS.SIGNUP}>Signup</NavigationLink>
    </>
  );
}
