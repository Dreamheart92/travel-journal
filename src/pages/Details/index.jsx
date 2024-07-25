import { useParams } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import Journal from '../../components/Journal';
import CommentsSection from '../../components/CommentsSection';
import Container from '../../components/Container';

export default function Details() {
  const { journalId } = useParams();

  return (
    <DefaultLayout>
      <Container width="80em">
        <Journal journalId={journalId} />

        <CommentsSection
          journalId={journalId}
        />
      </Container>
    </DefaultLayout>
  );
}
