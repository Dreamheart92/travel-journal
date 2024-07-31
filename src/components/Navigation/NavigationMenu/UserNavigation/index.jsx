import NavigationLink from '../../../NavigationLink';
import { PATHS } from '../../../../constants/paths';
import useAuth from '../../../../hooks/useAuth';

export default function UserNavigation() {
  const auth = useAuth();

  return (
    <>
      <NavigationLink to={PATHS.CREATE}>Create</NavigationLink>
      <NavigationLink to={PATHS.ACCOUNT}>Account</NavigationLink>
      <NavigationLink onClick={auth.logout} to="">Logout</NavigationLink>
    </>
  );
}
