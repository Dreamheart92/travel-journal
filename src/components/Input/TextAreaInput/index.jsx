import Wrapper from '..';
import style from '../index.module.css';

export default function TextAreaInput(
  {
    label,
    placeholder,
    handlers,
    state,
  },
) {
  return (
    <Wrapper
      label={label}
      state={state}
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
