import PropTypes from 'prop-types';
import { handlersPropType, statePropType } from '../../../propTypes/inputPropTypes';
import { normalizeName } from '../../../helpers';

import Wrapper from '..';

import style from '../index.module.css';

export default function SelectInput(
  {
    options,
    handlers,
    state,
  },
) {
  return (
    <Wrapper
      state={state}
    >
      <select
        className={style.field}
        value={state.value}
        onChange={handlers.onChange}
        onBlur={handlers.onBlur}
        name="destination"
      >
        <option value="" disabled>Select a destination</option>
        {options.map((option) => (
          <option
            key={option._id}
            value={option._id}
          >
            {normalizeName(option.name)}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape([{
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }])),
  handlers: handlersPropType,
  state: statePropType,
};
