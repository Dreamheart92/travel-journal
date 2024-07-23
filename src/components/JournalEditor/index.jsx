import Container from '../Container';
import InfoBlock from '../InfoBlock';
import DefaultLayout from '../../layouts/DefaultLayout';

export default function JournalEditor({ title, caption }) {
  return (
    <DefaultLayout>
      <Container>
        <InfoBlock caption={caption} title={title} />
      </Container>
    </DefaultLayout>
  );
}
