import PropTypes from 'prop-types';
import NavigationLink from '../../NavigationLink';
import { PATHS } from '../../../constants/paths';
import { normalizeName } from '../../../utility/utility';

export default function Filter({ filter }) {
  return (
    <NavigationLink
      filter
      to={`${PATHS.CATALOGUE}/${filter}`}
    >
      <p>{normalizeName(filter)}</p>
    </NavigationLink>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
