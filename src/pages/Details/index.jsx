import { useSelector } from 'react-redux';
import { useCallback, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import journalServiceSettings from '../../services/journalServiceSettings';
import Loading from '../../components/Loading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Journal from '../../components/Journal';
import CommentsSection from '../../components/CommentsSection';
import Container from '../../components/Container';
import { CommentsContext } from '../../context/CommentsContext';

export default function Details() {
  const { journalId } = useParams();
  const { user } = useSelector((state) => state.user);
  const { comments, onInitComments } = useContext(CommentsContext);

  const {
    data,
    isSuccess,
    error,
  } = useFetch(useCallback(() => journalServiceSettings.getJournalByIdSettings(journalId), []));

  useEffect(() => {
    if (data) {
      onInitComments(data.data.comments);
    }
  }, [data]);

  if (!isSuccess) {
    return <Loading />;
  }

  const {
    title,
    location,
    author,
    date,
    imageUrl,
    description,
  } = data.data;

  return (
    <DefaultLayout>
      <Container width="80em">
        <Journal
          id={journalId}
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
          journalId={journalId}
        />
      </Container>
    </DefaultLayout>
  );
}
