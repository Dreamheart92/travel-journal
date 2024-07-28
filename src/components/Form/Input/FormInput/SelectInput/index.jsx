import { normalizeName } from '../../../../../helpers';

export default function SelectInput({ fieldProps }) {
  const {
    value,
    onChange,
    onBlur,
    options,
    inputClassName,
  } = fieldProps;

  return (
    <select
      className={inputClassName}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
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
  );
}
