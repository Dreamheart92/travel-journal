import PropTypes from 'prop-types';

import Wrapper from '..';

import style from '../index.module.css';
import { handlersPropType, isSubmittedAndHasErrorsPropType, statePropType } from '../../../propTypes/inputPropTypes';

export default function TextInput(
  {
    label,
    type = 'text',
    children,
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
        placeholder={children}
        type={type}
        value={state.value}
      />
    </Wrapper>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string,
  handlers: handlersPropType,
  state: statePropType,
  isSubmittedAndHasErrors: isSubmittedAndHasErrorsPropType,
};
