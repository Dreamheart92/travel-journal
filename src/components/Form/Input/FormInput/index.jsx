import TextInput from './TextInput';
import ErrorMessage from '../../../ErrorMessage';
import FileInput from './FileInput';
import SelectInput from './SelectInput';
import DateInput from './DateInput';
import TextAreaInput from './TextAreaInput';
import { useFormContext } from '../../../../context/FormContext';
import style from '../index.module.css';
import LocationAutocompleteInput from './LocationAutocompleteInput';

export default function FormInput(
  {
    name,
    placeholder,
    label,
    inputType,
    type,
    userProfileImage,
    options,
  },
) {
  const { formContextActions, formContextSelectors } = useFormContext();

  const formState = formContextSelectors.formState();
  const isSubmitted = formContextSelectors.isSubmitted();
  const { value, isDirty } = formState[name].state;

  const errors = formContextSelectors.getFieldError(name);
  const errorMessage = errors.length > 0 ? errors[0] : null;

  const displayError = errorMessage && (isDirty || isSubmitted);

  const inputClassName = `${style.field} ${displayError ? style.error : null}`;

  const fieldProps = {
    value,
    onChange: formContextActions.onChange,
    onBlur: formContextActions.onBlur,
    inputClassName,
    name,
    placeholder,
    type,
    userProfileImage,
    label,
    options,
  };

  const Input = (inputType === 'text' && TextInput)
    || (inputType === 'file' && FileInput)
    || (inputType === 'select' && SelectInput)
    || (inputType === 'date' && DateInput)
    || (inputType === 'text-area' && TextAreaInput)
    || (inputType === 'location-autocomplete' && LocationAutocompleteInput);

  return (
    <div className={style['input-wrapper']}>
      {label
        && <label className={style.label} htmlFor={name}>{label}</label>}

      <Input fieldProps={fieldProps} />

      {displayError
        && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
