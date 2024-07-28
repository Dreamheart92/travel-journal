export default function TextAreaInput({ fieldProps }) {
  const {
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    inputClassName,
  } = fieldProps;

  return (
    <textarea
      className={inputClassName}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      placeholder={placeholder}
      rows="10"
      cols="50"
    />
  );
}
