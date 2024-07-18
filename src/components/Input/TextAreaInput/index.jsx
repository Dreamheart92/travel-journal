import PropTypes from 'prop-types';
import { statePropType, isSubmittedAndHasErrorsPropType, handlersPropType } from '../../../propTypes/inputPropTypes';

import Wrapper from '..';
import style from '../index.module.css';

export default function TextAreaInput(
  {
    label,
    placeholder,
    handlers,
    state,
    isSubmittedAndHasErrors,
  },
) {
  return (
    <Wrapper
      label={label}
      state={state}
      isSubmittedAndHasErrors={isSubmittedAndHasErrors}
    >
      <textarea
        className={style.field}
        onChange={handlers.onChange}
        onBlur={handlers.onBlur}
        value={state.value}
        placeholder={placeholder}
        rows="10"
        cols="50"
      />
    </Wrapper>
  );
}

TextAreaInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handlers: handlersPropType,
  state: statePropType,
  isSubmittedAndHasErrors: isSubmittedAndHasErrorsPropType,
};
