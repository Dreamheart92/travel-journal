import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Journal from '../../components/Journal';
import CommentsSection from '../../components/CommentsSection';
import Container from '../../components/Container';
import { fetchJournalById } from '../../store/details/thunks';
import { selectDetailsState } from '../../store/details/selectors';

export default function Details() {
  const { journalId } = useParams();
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const {
    journal,
    comments,
    loading,
    isJournalOwner,
  } = useSelector(selectDetailsState);

  useEffect(() => {
    dispatch(fetchJournalById(journalId));
  }, [journalId]);

  if (loading || !journal) {
    return <Loading />;
  }

  return (
    <DefaultLayout>
      <Container width="80em">
        <Journal
          journalId={journalId}
          title={journal.title}
          location={journal.location}
          author={journal.author?.username}
          date={journal.date}
          imageUrl={journal.imageUrl}
          description={journal.description}
          isJournalOwner={isJournalOwner}
        />

        <CommentsSection
          user={user}
          comments={comments}
          journalId={journalId}
        />
      </Container>
    </DefaultLayout>
  );
}
