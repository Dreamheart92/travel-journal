import style from './index.module.css';

export default function Grid({ children }) {
  return (
    <div className={style.grid}>
      {children}
    </div>
  );
}
