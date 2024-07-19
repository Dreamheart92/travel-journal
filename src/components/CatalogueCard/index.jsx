import { Link } from 'react-router-dom';
import Container from '../Container';
import Image from '../Image';
import { PATHS } from '../../constants/paths';
import journalPropTypes from '../../propTypes/journalPropTypes';
import CatalogueCardInfo from './CatalogueCardInfo';
import CatalogueCardDestinationLabel from './CatalogueCardDestinationLabel';

export default function JournalCatalogueCard({ journal }) {
  const {
    date,
    totalComments,
    author,
    description,
    title,
    destination,
  } = journal;

  return (
    <Container>
      <Link
        to={`${PATHS.DETAILS}/${journal._id}`}
      >
        <Image
          imageUrl={journal.imageUrl}
        />
        <CatalogueCardInfo
          date={date}
          totalComments={totalComments}
          author={author.username}
          description={description}
          title={title}
        />
        <CatalogueCardDestinationLabel
          destination={destination.name}
        />
      </Link>
    </Container>
  );
}

JournalCatalogueCard.propTypes = journalPropTypes;
