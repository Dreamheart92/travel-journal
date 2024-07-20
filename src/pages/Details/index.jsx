import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import journalServiceSettings from '../../services/journalServiceSettings';
import Loading from '../../components/Loading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Journal from '../../components/Journal';

export default function Details() {
  const { journalId } = useParams();

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
  } = journalData.data;

  return (
    <DefaultLayout>
      <Journal
        id={_id}
        title={title}
        location={location}
        author={author}
        date={date}
        imageUrl={imageUrl}
        description={description}
      />
    </DefaultLayout>
  );
}
