import style from './index.module.css';

import loading from '/loading.jpg';

export default function Loading() {
  return (
    <div className={style.wrapper}>
      <img src={loading} alt="" />
    </div>
  );
}
