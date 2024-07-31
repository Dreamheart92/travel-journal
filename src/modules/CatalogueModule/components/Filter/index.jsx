import NavigationLink from '../../../../components/NavigationLink';
import { PATHS } from '../../../../constants/paths';
import { normalizeName } from '../../../../helpers';

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
