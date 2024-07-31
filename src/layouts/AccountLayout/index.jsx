import Image from '../../components/Image';
import style from './index.module.css';

export default function AccountLayout({ children }) {
  return (
    <div className={style.container}>
      <div className={style['image-header']}>
        <Image imageUrl="/dashboard.jpg" />

        <div className={style['header-title']}>
          <h1>Dashboard</h1>
        </div>
      </div>

      <div className={style['content-container']}>
        {children}
      </div>
    </div>
  );
}
