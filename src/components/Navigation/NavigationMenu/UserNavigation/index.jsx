import PropTypes from 'prop-types';

import NavigationLink from '../../NavigationLink';
import { PATHS } from '../../../../constants/paths';

export default function UserNavigation({ onLogout }) {
  return (
    <>
      <NavigationLink to={PATHS.CREATE}>Create</NavigationLink>
      <NavigationLink to={PATHS.ACCOUNT}>Account</NavigationLink>
      <NavigationLink onClick={onLogout} to="">Logout</NavigationLink>
    </>
  );
}

UserNavigation.propTypes = {
  onLogout: PropTypes.func,
};
