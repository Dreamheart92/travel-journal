import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { selectDestinations } from '../../store/destinations/selectors';
import { normalizeName } from '../../helpers';
import FileInput from '../../components/Input/FileInput';
import TextInput from '../../components/Input/TextInput';
import SelectInput from '../../components/Input/SelectInput';
import DateInput from '../../components/Input/DateInput';
import TextAreaInput from '../../components/Input/TextAreaInput';
import Button from '../../components/Button';
import style from './index.module.css';
import VALIDATIONS from '../../constants/validations';

export default function JournalForm(
  {
    type,
    submitCallback,
    error,
    isSubmitting,
  },
) {
  const {
    register,
    handleSubmit,
  } = useForm({ submitCallback });

  const { destinations } = useSelector(selectDestinations);

  const {
    handlers: imageHandlers,
    state: imageState,
  } = register('image', '', { required: true });

  const {
    handlers: titleHandlers,
    state: titleState,
  } = register(
    'title',
    '',
    {
      required: true,
      minLength: VALIDATIONS.JOURNAL.TITLE_MIN_LENGTH,
    },
  );

  const {
    handlers: destinationHandlers,
    state: destinationState,
  } = register(
    'destination',
    '',
    {
      required: true,
    },
  );

  const {
    handlers: locationHandlers,
    state: locationState,
  } = register(
    'location',
    '',
    {
      required: true,
      minLength: VALIDATIONS.JOURNAL.LOCATION_MIN_LENGTH,
    },
  );

  const {
    handlers: dateHandlers,
    state: dateState,
  } = register(
    'date',
    '',
    { required: true },
  );

  const {
    handlers: descriptionHandlers,
    state: descriptionState,
  } = register(
    'description',
    '',
    {
      required: true,
      minLength: VALIDATIONS.JOURNAL.DESCRIPTION_MIN_LENGTH,
    },
  );

  return (
    <Form
      onSubmit={handleSubmit}
      error={error}
    >
      <div className={style.wrapper}>
        <FileInput
          handlers={imageHandlers}
          state={imageState}
          isJournal={type === 'journal'}
        />

        <div className={style.fields}>
          <TextInput
            placeholder="Title"
            handlers={titleHandlers}
            state={titleState}
          />

          <SelectInput
            handlers={destinationHandlers}
            state={destinationState}
            options={destinations}
          />

          <TextInput
            placeholder="Location"
            handlers={locationHandlers}
            state={locationState}
          />

          <DateInput
            handlers={dateHandlers}
            state={dateState}
          />

          <TextAreaInput
            placeholder="Share your journey"
            handlers={descriptionHandlers}
            state={descriptionState}
          />

          <Button
            submitButton
            isLoading={isSubmitting}
            caption={normalizeName(type)}
          />
        </div>
      </div>
    </Form>
  );
}
