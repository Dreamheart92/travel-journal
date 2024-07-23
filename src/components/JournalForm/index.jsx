import Container from '../Container';
import InfoBlock from '../InfoBlock';
import DefaultLayout from '../../layouts/DefaultLayout';

export default function JournalForm({ title, caption, form }) {
  return (
    <DefaultLayout>
      <Container>
        <InfoBlock caption={caption} title={title} />
        {form}
      </Container>
    </DefaultLayout>
  );
}
