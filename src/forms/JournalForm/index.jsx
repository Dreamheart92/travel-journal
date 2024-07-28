import { useSelector } from 'react-redux';
import Form from '../../components/Form';
import { selectDestinations } from '../../store/destinations/selectors';
import Button from '../../components/Button';
import VALIDATIONS from '../../constants/validations';

export default function JournalForm(
  {
    buttonCaption,
    submitCallback,
    isSubmitting,
    initialState,
    requestError,
  },
) {
  const { destinations } = useSelector(selectDestinations);
  return (
    <Form
      initialState={initialState}
      submitCallback={submitCallback}
      error={requestError}
      layoutStyle={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1em' }}
    >

      <Form.Input
        name="title"
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

      <Form.Input
        name="image"
        placeholder="image"
        initialValue={initialState.image}
        isJournal
        inputType="file"
        validators={[{
          required: true,
          message: 'Image is required',
        }]}
      />

      <Button
        submitButton
        isLoading={isSubmitting}
        caption={buttonCaption}
      />
    </Form>
  );
}
