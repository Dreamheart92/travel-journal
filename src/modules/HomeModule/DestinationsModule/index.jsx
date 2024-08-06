import { useSelector } from 'react-redux';
import Container from '../../../components/Container';
import style from './index.module.css';
import DestinationsGrid from '../components/DestinationsGrid';
import { selectDestinations } from '../../../store/destinations/selectors';

export default function DestinationsModule() {
  const { destinations } = useSelector(selectDestinations);

  const firstRow = destinations.slice(0, 3);
  const secondRow = destinations.slice(3, 5);

  return (
    <Container heading="Around the world">
      <DestinationsGrid destinations={firstRow} />

      <div className={style.wrapper}>
        <DestinationsGrid destinations={secondRow} />
      </div>
    </Container>
  );
}
