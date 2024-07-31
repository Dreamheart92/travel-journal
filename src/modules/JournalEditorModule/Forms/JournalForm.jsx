import Form from '../../../components/Form';
import Button from '../../../components/Button';
import VALIDATIONS from '../../../constants/validations';
import useDestinations from '../../../hooks/useDestinations';

import style from './JournalForm.module.css';

export default function JournalForm(
  {
    buttonCaption,
    submitCallback,
    isSubmitting,
    initialState,
    requestError,
  },
) {
  const { destinations } = useDestinations();

  return (
    <Form
      submitCallback={submitCallback}
      error={requestError}
    >

      <div className={style['journal-image']}>
        <Form.Input
          name="image"
          initialValue={initialState.image}
          inputType="file"
          validators={[{
            required: true,
            message: 'Image is required',
          }]}
        />
      </div>

      <Form.Input
        name="title"
        label="Title"
        placeholder="Title"
        inputType="text"
        initialValue={initialState.title}
        validators={[
          {
            required: true,
            message: 'Title is required',
          },
          {
            minLength: VALIDATIONS.JOURNAL.TITLE_MIN_LENGTH,
            message: `Title must be at least ${VALIDATIONS.JOURNAL.TITLE_MIN_LENGTH} characters long`,
          },
        ]}
      />

      <Form.Input
        name="destination"
        label="Destination"
        options={destinations}
        initialValue={initialState.destination}
        inputType="select"
        validators={[{
          required: true,
          message: 'Destination is required',
        }]}
      />

      <Form.Input
        name="location"
        placeholder="Location"
        label="Location"
        initialValue={initialState.location}
        inputType="text"
        validators={[
          {
            required: true,
            message: 'Location is required',
          },
          {
            minLength: VALIDATIONS.JOURNAL.LOCATION_MIN_LENGTH,
            message: `Location must be at least ${VALIDATIONS.JOURNAL.LOCATION_MIN_LENGTH}`,
          },
        ]}
      />

      <Form.Input
        name="date"
        inputType="date"
        label="Date"
        initialValue={initialState.date}
        validators={[{
          required: true,
          message: 'Date is required',
        }]}
      />

      <Form.Input
        name="description"
        placeholder="Share your journey"
        initialValue={initialState.description}
        inputType="text-area"
        label="Description"
        validators={[
          {
            required: true,
            message: 'Description is required',
          },
          {
            minLength: VALIDATIONS.JOURNAL.DESCRIPTION_MIN_LENGTH,
            message: `Description must be at least ${VALIDATIONS.JOURNAL.DESCRIPTION_MIN_LENGTH} characters long`,
          },
        ]}
      />

      <Button
        submitButton
        isLoading={isSubmitting}
        caption={buttonCaption}
      />
    </Form>
  );
}
