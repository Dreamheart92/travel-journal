import PropTypes from 'prop-types';

import Wrapper from '..';

import style from '../index.module.css';
import { handlersPropType, isSubmittedAndHasErrorsPropType, statePropType } from '../../../propTypes/inputPropTypes';

export default function TextInput(
  {
    label,
    type = 'text',
    placeholder,
    handlers,
    state,
    isSubmittedAndHasErrors,
  },
) {
  return (
    <Wrapper
      state={state}
      label={label}
      isSubmittedAndHasErrors={isSubmittedAndHasErrors}
    >
      <input
        className={style.field}
        onChange={handlers.onChange}
        onBlur={handlers.onBlur}
        placeholder={placeholder}
        type={type}
        value={state.value}
      />
    </Wrapper>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handlers: handlersPropType,
  state: statePropType,
  isSubmittedAndHasErrors: isSubmittedAndHasErrorsPropType,
};
