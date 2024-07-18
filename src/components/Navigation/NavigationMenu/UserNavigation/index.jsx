import NavigationLink from '../../NavigationLink';
import { PATHS } from '../../../../constants/paths';

export default function UserNavigation() {
  return (
    <>
      <NavigationLink to={PATHS.CREATE}>Create</NavigationLink>
      <NavigationLink to={PATHS.ACCOUNT}>Account</NavigationLink>
      <NavigationLink to="">Logout</NavigationLink>
    </>
  );
}
