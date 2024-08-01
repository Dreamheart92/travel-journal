import Container from '../../../components/Container';
import style from './index.module.css';
import useDestinations from '../../../hooks/useDestinations';
import DestinationsGrid from '../components/DestinationsGrid';

export default function DestinationsModule() {
  const { destinations } = useDestinations();

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
