import Wrapper from '..';
import style from './index.module.css';

export default function DateInput(
  {
    handlers,
    state,
  },
) {
  const dateValue = state.value;
  const date = dateValue ? dateValue.slice(0, 10) : null;

  return (
    <Wrapper state={state}>
      <input
        className={style.date}
        onChange={handlers.onChange}
        onBlur={handlers.onBlur}
        defaultValue={date}
        name="date"
        id="date"
        type="date"
      />
    </Wrapper>
  );
}
