import notFoundImage from '/not-found-background.jpg';
import serverErrorImage from '/server-error-background.png';
import Image from '../../components/Image';
import ErrorContent from './components/ErrorContent';
import style from './index.module.css';

export default function ErrorModule({ notFoundPageError = false }) {
  const image = notFoundPageError ? notFoundImage : serverErrorImage;

  return (
    <div className={style.container}>
      <div className={style.message}>
        <ErrorContent notFoundError={notFoundPageError} />
      </div>
      <div className={style['image-wrapper']}>
        <Image imageUrl={image} />
      </div>
    </div>
  );
}
