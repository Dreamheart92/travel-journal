import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import journalServiceSettings from '../../services/journalServiceSettings';
import Loading from '../../components/Loading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Journal from '../../components/Journal';
import CommentsSection from '../../components/CommentsSection';
import { useSelector } from 'react-redux';
import Container from '../../components/Container';

export default function Details() {
  const { journalId } = useParams();
  const { user } = useSelector((state) => state.user);

  const {
    data: journalData,
    isSuccess,
    error,
  } = useFetch(useCallback(() => journalServiceSettings.getJournalByIdSettings(journalId), []));

  if (!isSuccess) {
    return <Loading />;
  }

  const {
    _id,
    title,
    location,
    author,
    date,
    imageUrl,
    description,
    comments,
  } = journalData.data;

  return (
    <DefaultLayout>
      <Container width="80em">
        <Journal
          id={_id}
          title={title}
          location={location}
          author={author.username}
          date={date}
          imageUrl={imageUrl}
          description={description}
        />

        <CommentsSection
          user={user}
          comments={comments}
        />
      </Container>
    </DefaultLayout>
  );
}
