import Image from '../../../components/Image';
import InfoBlock from '../../../components/InfoBlock';

import heroBanner from '/hero.jpg';
import style from './index.module.css';

export default function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.banner}>
        <Image imageUrl={heroBanner} />
      </div>

      <div className={style.caption}>
        <InfoBlock
          title="Discover the World Through Stories"
          caption="Share your adventures. Explore new destinations. Connect with fellow travelers."
        />
      </div>
    </div>
  );
}
