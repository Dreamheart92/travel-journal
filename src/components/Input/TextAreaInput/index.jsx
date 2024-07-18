import PropTypes from 'prop-types';
import { statePropType, isSubmittedAndHasErrorsPropType, handlersPropType } from '../../../propTypes/inputPropTypes';

import Wrapper from '..';
import style from '../index.module.css';

export default function TextAreaInput(
  {
    label,
    children,
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
        placeholder={children}
        rows="10"
        cols="50"
      />
    </Wrapper>
  );
}

TextAreaInput.propTypes = {
  label: PropTypes.string,
  children: PropTypes.string,
  handlers: handlersPropType,
  state: statePropType,
  isSubmittedAndHasErrors: isSubmittedAndHasErrorsPropType,
};
