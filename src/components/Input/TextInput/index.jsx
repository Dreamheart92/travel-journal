import Wrapper from '..';
import style from '../index.module.css';

export default function TextInput(
  {
    label,
    type = 'text',
    placeholder,
    handlers,
    state,
  },
) {
  return (
    <Wrapper
      state={state}
      label={label}
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
