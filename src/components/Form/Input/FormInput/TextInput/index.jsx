export default function TextInput({ fieldProps }) {
  const {
    name,
    placeholder,
    onChange,
    onBlur,
    value,
    type = 'text',
    inputClassName,
  } = fieldProps;

  // const inputClassName = `${style.field} ${hasError ? style.error : null}`;

  return (
    <input
      className={inputClassName}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      type={type}
    />
  );
}
