import { useLocation } from 'react-router-dom';

import InfoBlock from '../../components/InfoBlock';
import Image from '../../components/Image';

import authBackground from '/authPage.jpg';

import style from './index.module.css';

export default function AuthLayout({ form, title, caption }) {
  const location = useLocation();

  const isLogginPage = location.pathname === '/login';
  const paddingTop = isLogginPage ? '15%' : '10%';

  return (
    <div className={style.container}>

      <div style={{ paddingTop }} className={style.wrapper}>
        <InfoBlock caption={caption} title={title} />

        <div className={style.form}>
          {form}
        </div>
      </div>

      <div className={style.image}>
        <Image imageUrl={authBackground} />
      </div>

    </div>
  );
}
