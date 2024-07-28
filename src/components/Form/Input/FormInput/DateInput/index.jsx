import style from '../../index.module.css';

export default function DateInput({ fieldProps }) {
  const {
    value,
    onChange,
    onBlur,
    name,
    inputClassName,
  } = fieldProps;

  const dateValue = value;
  const date = dateValue ? dateValue.slice(0, 10) : null;

  return (
    <input
      className={`${style.date} ${inputClassName}`}
      onChange={onChange}
      onBlur={onBlur}
      defaultValue={date}
      name={name}
      id="date"
      type="date"
    />
  );
}
