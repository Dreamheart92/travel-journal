import { useContext } from 'react';
import { FormContext } from '../../../../context/FormContext';
import ErrorMessage from '../../../ErrorMessage';
import style from '../index.module.css';

export default function TextInput(
  {
    name,
    label,
    placeholder,
    type = 'text',
  },
) {
  const {
    formState,
    onChange,
    onBlur,
    getFieldErrors,
  } = useContext(FormContext);

  const { value, isDirty } = formState[name].state;

  const errors = getFieldErrors(name);
  const errorMessage = errors.length > 0 ? errors[0] : null;

  const displayError = errorMessage && isDirty;

  return (
    <>
      <input
        className={style.field}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
      />

      {displayError
        && <ErrorMessage message={errorMessage} />}
    </>
  );
}
