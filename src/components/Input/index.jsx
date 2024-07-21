import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage';

import { statePropType } from '../../propTypes/inputPropTypes';
import { normalizeName } from '../../helpers';

import style from './index.module.css';

export default function Wrapper(
  {
    label,
    children,
    state,
  },
) {
  const displayError = state.error && (state.isDirty
    || state.isSubmittedAndHasErrors);

  return (
    <>
      {label
        && <label htmlFor={label}>{normalizeName(label)}</label>}

      <div className={style.wrapper}>
        {children}
        {displayError
          && <ErrorMessage message={Object.entries(state.error)[0][1]} />}
      </div>
    </>
  );
}

Wrapper.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  state: statePropType,
};
