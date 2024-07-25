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
