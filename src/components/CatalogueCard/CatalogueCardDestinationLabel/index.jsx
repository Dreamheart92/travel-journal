import PropTypes from 'prop-types';
import { normalizeName } from '../../../helpers';

import style from './index.module.css';

export default function CatalogueCardDestinationLabel({ destination }) {
  return (
    <p className={style.label}>{normalizeName(destination)}</p>
  );
}

CatalogueCardDestinationLabel.propTypes = {
  destination: PropTypes.string.isRequired,
};
