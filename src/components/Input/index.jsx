import PropTypes from 'prop-types';

import ErrorMessage from '../ErrorMessage';

import { statePropType, isSubmittedAndHasErrorsPropType } from '../../propTypes/inputPropTypes';
import { normalizeName } from '../../utility/utility';

import style from './index.module.css';

export default function Input(
  {
    label,
    children,
    state,
    isSubmittedAndHasErrors,
  },
) {
  const displayError = state.error && (state.isDirty
    || isSubmittedAndHasErrors);

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

Input.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  state: statePropType,
  isSubmittedAndHasErrors: isSubmittedAndHasErrorsPropType,
};
