import { handlersPropType, statePropType } from '../../../propTypes/inputPropTypes';

import Wrapper from '..';

export default function DateInput(
  {
    handlers,
    state,
  },
) {
  const dateValue = state.value;
  const date = dateValue ? dateValue.slice(0, 10) : null;

  return (
    <Wrapper
      state={state}
    >
      <input onChange={handlers.onChange} onBlur={handlers.onBlur} defaultValue={date} name="date" id="date" type="date" />
    </Wrapper>
  );
}

DateInput.propTypes = {
  handlers: handlersPropType,
  state: statePropType,
};
