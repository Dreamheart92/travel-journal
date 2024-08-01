import { normalizeName } from '../../../../../helpers/helpers';

import style from '../../index.module.css';

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
      className={`${inputClassName} ${style.select}`}
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
