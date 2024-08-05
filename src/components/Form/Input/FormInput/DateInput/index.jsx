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
  const maxDate = new Date().toISOString().split('T')[0];

  return (
    <input
      className={`${style.date} ${inputClassName}`}
      onChange={onChange}
      onBlur={onBlur}
      defaultValue={date}
      min="2000-01-01"
      max={maxDate}
      name={name}
      id="date"
      type="date"
    />
  );
}
