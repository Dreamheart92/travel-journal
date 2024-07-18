import PropTypes from 'prop-types';

import ErrorMessage from '../ErrorMessage';

import { normalizeName } from '../../utility/utility';

import style from './index.module.css';

export default function Input({ label, children, ...props }) {
  const displayError = props.state.error && (props.state.isDirty
    || props.formState.isSubmittedAndHasErrors);

  return (
    <>
      {label
        && <label htmlFor={label}>{normalizeName(label)}</label>}

      <div className={style.wrapper}>
        {children}
        {displayError
          && <ErrorMessage message={Object.entries(props.state.error)[0][1]} />}
      </div>
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};
