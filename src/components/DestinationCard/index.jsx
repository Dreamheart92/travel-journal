import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import InfoBlock from '../InfoBlock';
import { PATHS } from '../../constants/paths';
import style from './index.module.css';

export default function DestinationCard({ destination }) {
  const {
    name,
    imageUrl,
    description,
    count,
  } = destination;

  const [isHover, setIsHover] = useState(false);

  const cardImageClass = `${style['card-image']} ${isHover ? style.hover : ''}`;
  const infoClass = `${style.info} ${isHover ? style.active : ''}`;

  return (
    <Link to={`${PATHS.CATALOGUE}/${name}`}>
      <div
        className={style['destination-card']}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >

        <div className={cardImageClass}>
          <Image imageUrl={imageUrl} />
        </div>

        <div className={infoClass}>
          <InfoBlock
            title={name}
            caption={description}
          />
        </div>

        <div className={style.count}>
          <p>
            {`${count} ${count !== 1 ? 'journals' : 'journal'}`}
          </p>
        </div>

      </div>
    </Link>
  );
}
