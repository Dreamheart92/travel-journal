import Container from '../../components/Container';
import Image from '../../components/Image';
import style from './index.module.css';

export default function AccountLayout({ children }) {
  return (
    <Container customStyle={{ width: '100%' }}>
      <div className={style['image-header']}>
        <Image imageUrl="/dashboard.jpg" />

        <div className={style['header-title']}>
          <h1>Dashboard</h1>
        </div>
      </div>


      <div className={style['content-container']}>
        {children}
      </div>
    </Container>
  );
}
