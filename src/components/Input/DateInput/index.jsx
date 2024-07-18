import { handlersPropType, statePropType, isSubmittedAndHasErrorsPropType } from '../../../propTypes/inputPropTypes';

import Wrapper from '..';

export default function DateInput(
  {
    handlers,
    state,
    isSubmittedAndHasErrors,
  },
) {
  const dateValue = state.value;
  const date = dateValue ? dateValue.slice(0, 10) : null;

  return (
    <Wrapper
      state={state}
      isSubmittedAndHasErrors={isSubmittedAndHasErrors}
    >
      <input onChange={handlers.onChange} onBlur={handlers.onBlur} defaultValue={date} name="date" id="date" type="date" />
    </Wrapper>
  );
}

DateInput.propTypes = {
  handlers: handlersPropType,
  state: statePropType,
  isSubmittedAndHasErrors: isSubmittedAndHasErrorsPropType,
};
